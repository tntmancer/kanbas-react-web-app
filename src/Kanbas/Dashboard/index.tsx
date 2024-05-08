export default function Dashboard() {
    return (
      <div>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/COEAdvising.jpg" width={200} alt="COE Advising"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                COE Undergraduate Advising
              </a>
              <p className="wd-dashboard-course-title">
                COE Undergraduate Advising
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course"> 
            <img src="/images/CS4530.jpg" width={200} alt="CS4530"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                CS4530
              </a>
              <p className="wd-dashboard-course-title">
              CS4530: Software Engineering
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/EECE2322.jpg" width={200} alt="EECE2322"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                EECE2322
              </a>
              <p className="wd-dashboard-course-title">
              EECE2322: Digital Design
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course"> 
            <img src="/images/EECE2323.jpg" width={200} alt="EECE2323"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                EECE2323
              </a>
              <p className="wd-dashboard-course-title">
              EECE2323: Lab for Digital Design
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/EECE2520.jpg" width={200} alt="EECE2520"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                EECE2520
              </a>
              <p className="wd-dashboard-course-title">
              EECE2520: Fundamentals of Networks
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/EECE2540.jpg" width={200} alt="EECE2540"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                EECE2540
              </a>
              <p className="wd-dashboard-course-title">
              EECE2540: Fundamentals of Linear Systems
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/ENGW3315.jpg" width={200} alt="ENGW3315"/>
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/Home">
                ENGW3315
              </a>
              <p className="wd-dashboard-course-title">
              ENGW3315: Advanced Writing
              </p>
              <a href="#/Kanbas/Courses/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course"> ... </div>
          </div>
      </div>
  );}
  