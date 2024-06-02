import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({aid, deleteAssignment}: {aid: string; deleteAssignment: (aid: string) => void}) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(aid)}/>
    </div>
);}