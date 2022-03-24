import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monster }) => {
  return (
    <div className="card-list">
      {monster.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monster } = this.props;

//     console.log(this.props.monster);
//     return <Card monster={monster} />;
//   }
// }

export default CardList;
