const parent  = document.getElementById("root")
const element = React.createElement("h1",{},"this is a new heading")
const ele1 = React.createElement("h2",{},"shopping Cart");
const item1 = React.createElement("li",{},"item-1");
const item2 = React.createElement("li",{},"item-2");
const list = React.createElement("ul",{},item1,item2);
const para = <p>this is new paragraph</p>
const root = ReactDOM.createRoot(parent);
    // root.render(element);
    root.render([element,ele1,list,item1,item2,para]);