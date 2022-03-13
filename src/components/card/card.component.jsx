import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monster.map((monster) => {
          const { id, email, name } = monster;
          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
