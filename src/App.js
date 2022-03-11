import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: "Linda" },
        { name: "Frank" },
        { name: "Jacky" },
        { name: "Bob" },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.name}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
