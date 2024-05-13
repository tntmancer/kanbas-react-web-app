import "./index.css";
export default function Lab2() {
  return (
    <div>
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel
        right on the element. Although it's very convenient
        it is considered bad practice and you should avoid
        using the style attribute
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="id-selector-1">
          Instead of changing the look and feel of all the 
          elements of the same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
    </div>
  );
}