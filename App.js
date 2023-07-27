/* 
<div id="root">
    <div id="parent">
        <div id="child1">
            <h1 class="title1">I am h1</h1>
            <h2 class="title2">I am h2</h2>
        </div>
        <div id="child2">
            <h1 class="title1">I am h1</h1>
            <h2 class="title2">I am h2</h2>
        </div>
    </div>
</div>
*/

let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { className: "title1" }, "I am h1"),
    React.createElement("h2", { className: "title2" }, "I am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { className: "title1" }, "I am h1"),
    React.createElement("h2", { className: "title2" }, "I am h2"),
  ])
);

console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// ReactElement(Object) => HTML(Browser Understands)
