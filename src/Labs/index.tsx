import Lab1 from "./Lab1";
import { Route, Routes } from "react-router";
import store from "./store";
import { Provider } from "react-redux";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Timothy Bennett</h1>
        <h2>Web Development SEC 01</h2>
        <h3>Labs</h3>
        <TOC />
        <Routes>
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
  );
}