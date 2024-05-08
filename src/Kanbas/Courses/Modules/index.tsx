export default function Modules() {
    return (
      <div>
        <button id="collapse-all" onClick={() => alert("Collapse All")} type="button">
            Collapse All
        </button>
        <button id="view-progress" onClick={() => alert("View Progress")} type="button">
            View Progress
        </button>
        <select name="Publish All">
            <option value="VAL1">Publish All</option>
            <option value="VAL2">Value 2</option>
            <option value="VAL3">Value 3</option>
        </select>
        <button id="view-progress" onClick={() => alert("+ Module")} type="button">
            + Module
        </button>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}  