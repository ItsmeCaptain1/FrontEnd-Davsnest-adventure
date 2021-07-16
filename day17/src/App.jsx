import React from "react";
import Card from "./THA.jsx";
import "./App.css";

// const componentWithoutJSX = React.createElement(
//   "h1",
//   {
//     className: "text",
//   },
//   "HelloWorld"
// );

// const componentWithJSX = <h1>Hey1</h1>;

function App() {
  // const page = {
  //   title: "title",
  //   paragraph: "para",
  // };
  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: "aqua" }}>{page.title}</h1>
      <h2>{page.paragraph}</h2> */}
      {/* <Card img="img/wp1.jpg" title="Wallpaper 1" />
      <Card img="img/wp2.jpg" title="Wallpaper 2" />
      <Card img="img/wp3.jpeg" title="Wallpaper 3" />
      <Card img="img/wp1.jpg" title="Wallpaper 4" />
      <Card img="img/wp4.jpg" title="Wallpaper 5" />
      <Card img="img/wp3.jpeg" title="Wallpaper 6" /> */}
      <Card />
    </div>
  );
}

export default App;
