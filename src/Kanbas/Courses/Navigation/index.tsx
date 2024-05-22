import "./index.css";
import { courses } from "../../Database";
import { Link } from "react-router-dom";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={`/Kanbas/Courses/${cid}/${link}`} to={`/Kanbas/Courses/${cid}/${link}`} className={`list-group-item text-center
              ${pathname.includes(link) ? "text-dark active border-0" : "text-danger border-0"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}