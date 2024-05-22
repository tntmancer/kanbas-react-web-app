import { FaGear, FaFileImport, FaFileExport, } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsFunnel } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import {assignments, grades, enrollments, users} from "../../Database";
import "../../styles.css";
import { useParams } from "react-router";

export default function Grades() {
    const { cid } = useParams();
    const courseAssignments = assignments.filter((assignments) => assignments.course === cid);
    const studentsEnrolled = enrollments.filter((enrollments) => enrollments.course === cid);
    return (
        <div>
            <div className="text-nowrap pb-5">
                {/* Add import button, export button, and option buttons on left side of top row*/}
                <div className="float-end" id="wd-options">
                    <button className="btn btn-lg btn-secondary me-2">
                        <FaGear className="fs-5" />
                    </button>
                </div>
                <div className="float-end" id="wd-export">
                    <button className="btn btn-lg btn-secondary me-2">
                        <FaFileExport className="me-2 fs-5" />
                        Export
                    </button>
                </div>
                <div className="float-end" id="wd-import">
                    <button className="btn btn-lg btn-secondary me-2">
                        <FaFileImport className="me-2 fs-5" />
                        Import
                    </button>
                </div>
            </div>
            {/* Add search bars */}
            <div className="row pb-3">
                <div className="col">
                    <label className="form-label" htmlFor="wd-search-students">
                        <b>Student Names</b>
                    </label>
                    <div className="input-group bg-transparent col">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input id="wd-search-students"
                            className="form-control"
                            placeholder="Search Students" />
                    </div>
                </div>
                <div className="col">
                    <label className="form-label" htmlFor="wd-search-assignments">
                        <b>Assignment Names</b>
                    </label>
                    <div className="input-group bg-transparent col">
                        <span className="input-group-text">
                            <FaSearch />
                        </span>
                        <input id="wd-search-assignments"
                            className="form-control"
                            placeholder="Search Assignments" />
                    </div>
                </div>
            </div>
            {/* Add filter button */}
            <div className="pb-3">
                <button className="btn btn-lg btn-secondary me-2" id="wd-filter">
                    <BsFunnel className="me-2 fs-5" />
                    Filter
                </button>
            </div>
            {/* Add table with student names and four assignments*/}
            <table className="table table-bordered">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col" className="table-cell"><b>
                            Student Name
                        </b></th>
                        {courseAssignments.map((assignment) => (
                            <th scope="col" className="table-cell">
                                {`${assignment.title}`}
                            <br />
                            <small>Out of {`${assignment.points}`}</small>
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {studentsEnrolled.map((student) => (
                        <tr>
                            <td className="text-danger">
                                {(users.find((user) => user._id === student.user) || {firstName:""}).firstName} {(users.find((user) => user._id === student.user) || {lastName:""}).lastName}
                            </td>
                            {courseAssignments.map((assignment) => (
                                // map each assignment to the grade associated with the student
                                <td className="table-cell">
                                    {grades.map((grade) => (
                                        // find the grade associated with the student and assignment
                                        (grade.student === student.user && grade.assignment === assignment._id) ? `${grade.grade}%` : null
                                    ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

/**
 * <tr>
                        <td className="text-danger">Jane Adams</td>
                        <td className="table-cell">90%</td>
                        <td className="table-cell">80%</td>
                        <td className="table-cell">70%</td>
                        <td className="table-cell">60%</td>
                    </tr>
                    <tr className="table-secondary">
                        <td className="text-danger">Christina Allen</td>
                        <td className="table-cell">85%</td>
                        <td className="table-cell">
                            <div>
                                <input type="text" className="rounded mr-2 border-dark" />
                                <IoExitOutline className="fs-5" />
                            </div>
                        </td>
                        <td className="table-cell">65%</td>
                        <td className="table-cell">55%</td>
                    </tr>
                    <tr>
                        <td className="text-danger">Han Bao</td>
                        <td className="table-cell">80%</td>
                        <td className="table-cell">70%</td>
                        <td className="table-cell">60%</td>
                        <td className="table-cell">50%</td>
                    </tr>
                    <tr className="table-secondary">
                        <td className="text-danger">Samrenn Ansari</td>
                        <td className="table-cell">75%</td>
                        <td className="table-cell">65%</td>
                        <td className="table-cell">55%</td>
                        <td className="table-cell">45%</td>
                    </tr>
 */