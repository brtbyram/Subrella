import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/appSlice";
import AddSubModal from "./AddSubModal";
import DetailSubModal from "./DetailSubModal";



export default function Modal() {
  const { isOpen, content } = useSelector((state: any) => state.app.modal);
  const dispatch = useDispatch();
    
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1, delay: 1 }}
      exit={{ opacity: 0,}}
      className={`${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 `}
    >
      <div className="absolute bottom-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-4 container mx-auto max-w-max max-h-min">
        <div className="flex items-center justify-end text-center">
          <Button
            variant="ghost"
            className="bg-[#112d5d] text-white px-4 py-2 mt-4 rounded"
            onClick={() => dispatch(closeModal())}
          >
            X
          </Button>
        </div>
        <div className="">{content === "AddSubModal" && <AddSubModal />}</div>
        <div className="">{content === "DetailSubModal" && <DetailSubModal />}</div>
      </div>
    </motion.div>
  );
}
