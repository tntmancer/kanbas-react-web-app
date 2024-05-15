export default function Dashboard() {
    return (
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h3 id="wd-dashboard-published">Published Courses (7)</h3>
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/COEAdvising.jpg" alt="COE Advising"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    COE Undergraduate Advising
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    COE Undergraduate Advising
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/CS4530.jpg" alt="CS4530"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    CS4530
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    CS4530: Software Engineering
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/EECE2322.jpg" alt="EECE2322"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    EECE2322
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    EECE2322: Digital Design
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/EECE2323.jpg" alt="EECE2323"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    EECE2323
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    EECE2323: Lab for Digital Design
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/EECE2520.jpg" alt="EECE2520"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    EECE2520
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    EECE2520: Fundamentals of Networks
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/EECE2540.jpg" alt="EECE2540"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    EECE2540
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    EECE2540: Fundamentals of Linear Systems
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
            <div className="wd-dashboard-course col" style={{ width: "260px" }}>
              <div className="card">
                <img src="/images/ENGW3315.jpg" alt="ENGW3315"/>
                <div className="card-body">
                  <a className="wd-dashboard-course-link"
                    href="#/Kanbas/Courses/Home"
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    ENGW3315
                  </a>
                  <p className="wd-dashboard-course-title card-text">
                    ENGW3315: Advanced Writing
                  </p>
                  <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );}