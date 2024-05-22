import { FaPlus, FaSearch } from "react-icons/fa";
import LessonControlButtons, { ModuleControlButtons } from "../Modules/LessonControlButtons";
import { BsGripVertical, BsCaretDownFill } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { assignments } from "../../Database";
import { useParams } from "react-router";
import "../../styles.css";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter((assignments) => assignments.course === cid);
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
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </button>
          </div>
        </div>
        <br /><br />
        <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <BsCaretDownFill className="me-2 fs-3" />
                Assignments
              <ModuleControlButtons />
              <div className="border pill-bubble border-dark float-end">
                40% of Total
              </div>
        </div>
        <ul id="wd-assignments" className="list-group rounded-0">
          {courseAssignments.map((assignment) => (
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
                  <LessonControlButtons />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  /*<li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <BsCaretDownFill className="me-2 fs-3" />
                Assignments
              <ModuleControlButtons />
              <div className="border pill-bubble border-dark float-end">
                40% of Total
              </div>
            </div>
            <ul className="wd-assignments list-group rounded-0">
              <li className="wd-assignments list-group-item p-3 ps-1">
                <div className="row">
                  <div className="col">
                    <BsGripVertical className="col me-2 fs-3" />
                    <TfiWrite className="col me-2 fs-3 text-success" />
                  </div>

                  <div className="col-8">
                    <a className="wd-assignment-link text-dark"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A1 - ENV + HTML
                    </a>
                    <p><text className="text-red">Multiple Modules</text> | <b>Not available until</b> May 6 at 12:00 am |
                        <b> Due</b> May 13 at 11:59pm | 100 pts
                    </p>
                  </div>

                  <div className="col">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
              <li className="wd-assignments list-group-item p-3 ps-1">
              <div className="row">
                  <div className="col">
                    <BsGripVertical className="col me-2 fs-3" />
                    <TfiWrite className="col me-2 fs-3 text-success" />
                  </div>

                  <div className="col-8">
                    <a className="wd-assignment-link text-dark"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2 - CSS + Bootstrap
                    </a>
                    <p><text className="text-red">Multiple Modules</text> | <b>Not available until</b> May 13 at 12:00 am |
                        <b> Due</b> May 20 at 11:59pm | 100 pts
                    </p>
                  </div>

                  <div className="col">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
              <li className="wd-assignments list-group-item p-3 ps-1">
              <div className="row">
                  <div className="col">
                    <BsGripVertical className="col me-2 fs-3" />
                    <TfiWrite className="col me-2 fs-3 text-success" />
                  </div>

                  <div className="col-8">
                    <a className="wd-assignment-link text-dark"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3 - JavaScript + React
                    </a>
                    <p><text className="text-red">Multiple Modules</text> | <b>Not available until</b> May 20 at 12:00 am |
                        <b> Due</b> May 27 at 11:59pm | 100 pts
                    </p>
                  </div>

                  <div className="col">
                    <LessonControlButtons />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>*/