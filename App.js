const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        { id: "child"},
        React.createElement("h1", {}, "This is a H1 Tag")
    )
);


const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"},
    "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);