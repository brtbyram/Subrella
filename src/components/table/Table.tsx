import React from "react";
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingFn,
  SortingState,
} from "@tanstack/react-table";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import { getAllSubscriptions } from "../../services/subscriptions";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { openModal } from "@/redux/appSlice";

//custom sorting logic for one of our enum columns
const sortStatusFn: SortingFn<Subscription> = (rowA, rowB) => {
  const statusA = rowA.original.status;
  const statusB = rowB.original.status;
  const statusOrder = ["active", "inactive", "pending", "canceled"];
  return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
};

type Subscription = {
  _id: string;
  name: string;
  plan: string;
  currency: string;
  price: number;
  status: "active" | "inactive" | "pending" | "canceled";
  category: string;
  startDate: Date;
  renewalDate: Date;
};

export default function SubscriptionsTable() {



  const userId = localStorage.getItem("userId") || "";




  const dispatch = useDispatch();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = React.useMemo<ColumnDef<Subscription>[]>(
    () => [
      {
        accessorKey: "name",
        cell: (info) => info.getValue(),
        header: "Abonelik",
        //this column will sort in ascending order by default since it is a string column
      },
      {
        accessorFn: (row) => row.plan,
        id: "plan",
        cell: (info) => info.getValue(),
        header: () => <span>Plan</span>,
        sortUndefined: "last", //force undefined values to the end
        sortDescFirst: false, //first sort order will be ascending (nullable values can mess up auto detection of sort order)
      },
      {
        accessorFn: (row) => row.price,
        header: "Aylık Ücret",
        cell: (info) => (
          <button>
            {info.row.original.price}
            {info.row.original.currency}
          </button>
        ),
        // sortingFn: 'number' //make sure table knows this is a number column (usually can detect if no null values)
      },
      {
        accessorFn: (row) => moment(row.startDate).format("DD MMM YYYY"),
        header: "Başlangıç Tarihi",
        // sortingFn: 'datetime' //make sure table knows this is a datetime column (usually can detect if no null values)
      },
      {
        accessorFn: (row) => moment(row.renewalDate).format("DD MMM YYYY"),
        header: "Sonraki Ödeme",
        // sortingFn: 'datetime' //make sure table knows this is a datetime column (usually can detect if no null values)
      },
      {
        accessorKey: "status",
        header: "Durum",
        sortFn: sortStatusFn,
        cell: (info) => {
          const status = info.getValue();
          return (
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                status === "active"
                  ? "bg-green-500 text-white"
                  : status === "inactive"
                  ? "bg-gray-500 text-white"
                  : status === "pending"
                  ? "bg-yellow-500 text-white"
                  : status === "canceled"
                  ? "bg-red-500 text-white"
                  : ""
              }`}
            >
              {status}
            </span>
          );
        }
      },
      {
        accessorKey: "category",
        header: "Kategori",
      },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: (info) => (
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-black text-white py-1.5 p-2.5 rounded-md">
              Yönet
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <button
                  className="w-full md:w-auto"
                  onClick={() =>
                    dispatch(
                      openModal({
                        content: "DetailSubModal",
                        isOpen: true,
                      })
                    )
                  }
                >
                  Detail
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>Update</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  );

  const { data } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: () => getAllSubscriptions(userId),
    enabled: !!userId , // userId yoksa sorguyu çalıştırma 
  });

  const table = useReactTable({
    columns,
    data: data || [],
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting, //optionally control sorting state in your own scope for easy access
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    //no need to pass pageCount or rowCount with client-side pagination as it is calculated automatically
    state: {
      sorting,
      pagination,
    },
    // autoResetPageIndex: false, // turn off page index reset when sorting or filtering
  });

  if (data?.length === 0)
    return (
      <div>
        <div className="flex items-center justify-center h-28 border-t">
          <div className="border" />
          <p className="text-gray-500">Henüz aboneliğiniz bulunmamaktadır.</p>
        </div>
      </div>
    );

  return (
    <div className="max-md:flex max-md:flex-col-reverse">
      <div className="flex justify-center  md:justify-end items-center gap-2 w-full p-3">
        <button
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronsLeft
            size={32}
            className="text-[#112d5d] bg-white hover:bg-gray-100 border rounded-full p-1 cursor-pointer"
          />
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft
            size={32}
            className="text-[#112d5d] bg-white hover:bg-gray-100 border rounded-full p-1 cursor-pointer"
          />
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight
            size={32}
            className="text-[#112d5d] bg-white hover:bg-gray-100 border rounded-full p-1 cursor-pointer"
          />
        </button>
        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronsRight
            size={32}
            className="text-[#112d5d] bg-white hover:bg-gray-100 border rounded-full p-1 cursor-pointer"
          />
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
      </div>
      <ScrollArea className="max-md:overflow-auto">
        <table className="w-full text-sm font-poppins font-light">
          <thead className="text-[#71717a] bg-gray-100 border whitespace-nowrap min-w-max">
            {table.getHeaderGroups().map((headerGroup) => (
              <motion.tr
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                key={headerGroup.id}
                className="h-12  transition-all min-w-max"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="text-start px-3 last:text-center last:pr-0"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          className={
                            header.column.getCanSort()
                              ? "cursor-pointer select-none "
                              : ""
                          }
                          onClick={header.column.getToggleSortingHandler()}
                          title={
                            header.column.getCanSort()
                              ? header.column.getNextSortingOrder() === "asc"
                                ? "Sort ascending"
                                : header.column.getNextSortingOrder() === "desc"
                                ? "Sort descending"
                                : "Clear sort"
                              : undefined
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </motion.tr>
            ))}
          </thead>
          <tbody>
            <AnimatePresence>
              {table
                .getRowModel()
                .rows.slice(0, 10)
                .map((row) => {
                  return (
                    <motion.tr
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6 }}
                      key={row.id}
                      className="border-b h-12 p-3 m-4 hover:bg-gray-100"
                    >
                      {row.getVisibleCells().map((cell) => {
                        return (
                          <td
                            key={cell.id}
                            className="transition-all px-3 last:text-center last:pr-0"
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        );
                      })}
                    </motion.tr>
                  );
                })}
            </AnimatePresence>
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
}
