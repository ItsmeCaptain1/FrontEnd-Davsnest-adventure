import React from "react";
import ReactDOM from "react-dom";

class MyHelloWorldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Empty" };
  }

  render() {
    // return React.createElement(
    //   "button",
    //   {
    //     onClick: () => {
    //       this.setState({ name: "changed name" });
    //     },
    //   },
    //   React.createElement(
    //     "h1",
    //     {},
    //     react.createElement("h2", {}, `Any Button here ${this.state.name}`)
    //   )
    // );
    return (
      <div>
        <button onClick={() => this.setState({ name: "changed name" })}>
          Button {this.state.name}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(MyHelloWorldComponent),
  document.getElementById("root")
);
