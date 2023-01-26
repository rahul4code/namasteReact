const heading1 = React.createElement("h1", {}, "Hi Rahul");
const heading2=React.createElement("h2", {id:"test", style:{background:"Yellow"}}, "Be productive")
const container=React.createElement("div", {}, [heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
