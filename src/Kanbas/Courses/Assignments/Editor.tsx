import "../../styles.css";
import { BsX } from "react-icons/bs";
import { addAssignment, updateAssignment }
  from "./reducer";
import { useParams } from "react-router";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, id } = useParams();
  console.log(cid, id);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const assignment = assignments.find((assignment: any) => assignment._id === id) || { "_id": new Date().getTime().toString(), "title": "New assignment", "course": cid, "points": 100, "aDate": "May 6 at 12:00 am", "dDate": "May 13 at 12:00 am", "description": "Enter the Assignment Description here."};
  const [newAssignment, setNewAssignment] = useState(assignment);
  
  return (
      <div>
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" 
          className="form-control" 
          value={`${newAssignment.title}`}
          onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}/>
        <br />
        <br />
        <textarea className="form-control" 
          id="wd-description" 
          value={`${newAssignment.description}`}
          rows={3}
          onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}>
        </textarea>
        <br />
        <div className="row">
          <div className="col">
            <label htmlFor="wd-points" className="float-end">Points</label>
          </div>
          <div className="col-8">
            <input id="wd-points" 
              className="form-control" 
              value={`${newAssignment.points}`}
              onChange={(e) => setNewAssignment({ ...newAssignment, points: e.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label htmlFor="wd-group" className="float-end">Assignment Group</label>
          </div>
          <div className="col-8">
            <select id="wd-group" className="form-select">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label htmlFor="wd-display-grade-as" className="float-end">Display Grade as</label>
          </div>
          <div className="col-8">
            <select id="wd-display-grade-as" className="form-select">
            <option value="PERCENTAGE">Percentage</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="wd-submission-type" className="float-end">Submission Type</label>
          </div>
          <div className="col-8 border-gray editor-bubble">
            <select id="wd-submission-type" className="form-select">
              <option value="SUBTYPE">Online</option>
            </select>
            <div className="slim-margin-bottom">
              <label htmlFor="wd-online-options">
                <b>Online Entry Options</b>
              </label>
            </div>
            <div className="form-check" id="wd-online-options">
              <div className="mb-2">
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry 
                </label>
                <input className="form-check-input" type="checkbox" id="wd-text-entry"/>
              </div>
              <div className="mb-2">
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL
                </label>
                <input className="form-check-input" type="checkbox" id="wd-website-url"/>
              </div>
              <div className="mb-2">
                <label className="form-check-label" htmlFor="wd-media-recordings">
                  Media Recordings
                </label>
                <input className="form-check-input" type="checkbox" id="wd-media-recordings"/>
              </div>
              <div className="mb-2">
                <label className="form-check-label" htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
                <input className="form-check-input" type="checkbox" id="wd-student-annotation"/>
              </div>
              <div className="mb-2">
                <label className="form-check-label" htmlFor="wd-file-uploads">
                  File Uploads
                </label>
                <input className="form-check-input" type="checkbox" id="wd-file-uploads"/>
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="wd-assign" className="float-end">Assign</label>
          </div>
          <div className="col-8 border-gray editor-bubble" id="wd-assign">
            <div>
              <label className="form-label" htmlFor="wd-assign-tag">
                <b>Assign To</b>
              </label>
              {/* Add a rounded box with a button with an "x" inside */}
              <div className="d-flex border border-lg rounded-pill">
                  <button className="border-gray m-2 btn btn-sm btn-secondary" id="wd-assign-tag">
                    Everyone <BsX />
                  </button>
                </div>
            </div>
            <div className="mb-2">
              <label className="form-label" htmlFor="wd-due-date">
                <b>Date</b>
              </label>
              <div className="input-group bg-transparent col"> 
                <input id="wd-search-assignment"
                  className="form-control"
                  placeholder="mm/dd/yyyy" 
                  value={`${newAssignment.dDate}`} />
                <span className="input-group-text">
                  <FaCalendarAlt />
                </span>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label">
                  <b>Available From</b>
                </label>
                <div className="input-group bg-transparent col"> 
                <input id="wd-search-assignment"
                  className="form-control"
                  placeholder="Available Date"
                  onChange={(e) => setNewAssignment({ ...newAssignment, aDate: e.target.value })}
                  value={`${newAssignment.aDate}`} />
                <span className="input-group-text">
                  <FaCalendarAlt />
                </span>
              </div>
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label">
                  <b>Until</b>
                </label>
                <div className="input-group bg-transparent col"> 
                <input id="wd-search-assignment"
                  className="form-control"
                  placeholder="Due Date"
                  onChange={(e) => setNewAssignment({ ...newAssignment, dDate: e.target.value })}
                  value={`${newAssignment.dDate}`} />
                <span className="input-group-text">
                  <FaCalendarAlt />
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="d-flex float-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
            className="btn btn-danger"
            onClick={() => {
              if (id === "New") {
                dispatch(addAssignment({...newAssignment}))
                console.log(newAssignment)
              } else {
                dispatch(updateAssignment({...newAssignment}))
                console.log(newAssignment)
              }
            }}>Save</Link>
        </div>
      </div>
    );
  }  