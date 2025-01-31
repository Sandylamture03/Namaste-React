import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tag and a child"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(parent);
