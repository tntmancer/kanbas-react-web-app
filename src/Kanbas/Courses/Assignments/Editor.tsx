import "../../styles.css";
import { BsX } from "react-icons/bs";
export default function AssignmentEditor() {
    return (
      <div>
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" />
        <br />
        <br />
        <textarea className="form-control" id="wd-description"
              rows={3}></textarea>
        <br />
        <div className="row">
          <div className="col">
            <label htmlFor="wd-points" className="float-end">Points</label>
          </div>
          <div className="col-8">
            <input id="wd-points" className="form-control" />
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
              <input type="date" id="wd-due-date" className="form-control"/>
            </div>
            <div className="row pb-5">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label">
                  <b>Available From</b>
                </label>
                <input type="date" id="wd-available-from" className="form-control"/>
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label">
                  <b>Until</b>
                </label>
                <input type="date" id="wd-available-until" className="form-control"/>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="d-flex float-end">
          <button className="btn btn-lg btn-secondary">
            Cancel
          </button>
          <button className="btn btn-lg btn-danger">
            Save
          </button>
        </div>
      </div>
    );
  }  