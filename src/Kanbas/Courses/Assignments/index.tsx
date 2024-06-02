import { FaPlus, FaSearch } from "react-icons/fa";
import { BsGripVertical, BsCaretDownFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { useParams } from "react-router";
import "../../styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment }
  from "./reducer";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

    return (
      <div id="wd-assignments">
        <div className="row">
          <div className="input-group bg-transparent col">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input id="wd-search-assignment"
              className="form-control"
              placeholder="Search..." />
          </div>
          <div className="col-8">
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
            </button>
            <Link id="wd-add-assignment-btn" to={`/Kanbas/Courses/${cid}/Assignments/New`} className="btn btn-lg btn-danger me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </Link>
          </div>
        </div>
        <br /><br />
        <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <BsCaretDownFill className="me-2 fs-3" />
                Assignments
              {/* <ModuleControlButtons /> */}
              <div className="border pill-bubble border-dark float-end">
                40% of Total
              </div>
        </div>
        <ul id="wd-assignments" className="list-group rounded-0">
          {assignments.filter((a: any)=> a.course === cid).map((assignment: any) => (
            <li className="wd-assignments list-group-item p-3 ps-1">
              <div className="row">
                <div className="col">
                  <BsGripVertical className="col me-2 fs-3" />
                  <TfiWrite className="col me-2 fs-3 text-success" />
                </div>

                <div className="col-8">
                  <a className="wd-assignment-link text-dark"
                    href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                    {assignment.title}
                  </a>
                  <p><text className="text-red">Multiple Modules</text> | <b>Not available until</b> {`${assignment.aDate}`} |
                      <b> Due</b> {`${assignment.dDate}`} | {`${assignment.points}`} pts
                  </p>
                </div>

                <div className="col">
                  <AssignmentControlButtons aid={assignment._id} deleteAssignment={(aid) => dispatch(deleteAssignment(aid))} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }