import React from "react";
import ReactDOM from "react-dom/client";

function ClassList() {
  return (
    <div>
      <h1>Welcome to SelfStudyWeek2</h1>
      <p>List of Students</p>
    </div>
  );
}

const htmlContainer = document.getElementById("root");
const root = ReactDOM.createRoot(htmlContainer);
root.render(<ClassList />);