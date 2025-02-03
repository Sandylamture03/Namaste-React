import React from "react";
import { createRoot } from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an H1 tag and a child"),
//     React.createElement("h2", {}, "I am an H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an H1 tag"),
//     React.createElement("h2", {}, "I am an H2 tag"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => Bable transpiles it to React.createElement => ReactElement - JS object => HTMLElement (render)
// react Element
const heading = (
  <h1 className="heading" tabIndex="5">
    Namaste React using JSX 🚀
  </h1>
);

// React Component
// Class Based Components - OLD
// Functional Components - NEW

// React Functional Component
// this is one way to write react components with return keyord and braces and JSX
const HeadingComponent = () => {
  return (
    <h1 ClassName="heading">Namaste React Functional Component 🚀🚀💕💕</h1>
  );
};

// React Functional Component
// this is another way to write react components without return keyword and braces and JSX
// component composition means adding one component to the another component buy doing component name inside closing tag
// < HeadingComponent /> inside HeadingComponent2  as follows
const HeadingComponent2 = () => (
  <div id="container">
    <HeadingComponent />
    <h1 className="heading">Namaste React from Functional Component 2 </h1>
  </div>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HeadingComponent2 />);
