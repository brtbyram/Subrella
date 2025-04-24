

interface FilterProps {
  column: {
    getFilterValue: () => string;
    setFilterValue: (value: string) => void;
    columnDef: {
      header: string;
    };
  };
}


function Filter({ column } : FilterProps) {
  const columnFilterValue = column.getFilterValue();

  return (
    <input
      type="text"
      value={columnFilterValue || ''}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Search ${column.columnDef.header}`}
      className="filter-input"
    />
  );
}

export default Filter;