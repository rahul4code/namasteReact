import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", {key:"h1"}, "Hi Rahul");
// const heading2=React.createElement("h2", {id:"test",key:"h2", style:{background:"Yellow"}}, "Be productive")

const title=<span>My bio</span>
const TitleAsFunc=()=>{
    return (<p>How are you</p>)
}


const HeaderComponent = () => {
  return (
    <div>
    {title}
      <h1>Hi There this is Rahul</h1>
    <TitleAsFunc />
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
