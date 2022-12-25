const heading1 = React.createElement(
    "h1", // name of tag
    {
      id: "title", // name of attributes
    },
    "Heading1" // what you want to put inside root
  );
  const heading2 = React.createElement("h2", { id: "title" }, "Heading2");
  console.log(heading2); // gives object

  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log('this is my root = ', root);
  // passing react element inside the root and render function  inject our dom
  root.render(container);