import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setvalue]
  const [monsters, setMonstersField] = useState([]); //[value, setvalue]
  const [filterMonster, setFilterMonster] = useState(monsters); //[value, setvalue]

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonstersField(users));
  }, []);

  console.log(searchField);
  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const newFilterWords = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilterMonster(newFilterWords);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholderHandler="Search Monsters"
      />
      <CardList monster={filterMonster} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     //console.log("Constructor");
//   }

//   componentDidMount() {
//     //console.log("componentDidMount");

//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return {
//               monsters: users,
//             };
//           },
//           () => {
//             //console.log(this.state.monsters);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return {
//         searchField: event.target.value,
//       };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     //console.log("render");
//     const filterWords = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholderHandler="Search Monsters"
//         />
//         <CardList monster={filterWords} />
//       </div>
//     );
//   }
// }

export default App;
