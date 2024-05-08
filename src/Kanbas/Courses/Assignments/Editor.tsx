export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description">
          The assignment is available online
          Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group" value={100}>
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as" value={100}>
                    <option value="PERCENTAGE">Percentage</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type" value={100}>
                    <option value="SUBTYPE">Online</option>
                </select>
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan={1}></td>
            <td align="left" valign="top">
                <label>Online Entry Options</label>
                <br/>
                <input type="checkbox" name="check-text" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>

                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
                <label> Assign</label>
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
          <tr>
            <td colSpan={1}></td>
            <td>
                <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan={1}></td>
            <td align="left" valign="top">
                <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td colSpan={1}></td>
            <td>
                <input type="date" id="wd-text-fields-dob"></input>
            </td>
          </tr>
          <br />
          <tr>
            <td colSpan={1}></td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td colSpan={1}></td>
            <td>
                <input type="date" id="wd-available-from"></input>
            </td>
            <td>
                <input type="date" id="wd-available-until"></input>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
                <hr /> 
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td>
                <button>Cancel</button>
                <button>Save</button>
            </td>
          </tr>  
        </table>
      </div>
    );
  }  