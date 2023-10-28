import React from "react";
import "./index.css";
import { takeoutbox } from "../../images";

function DisplayCosts(props) {
  return (
    <div align="center">
      {props.list.map((person) => (
        <h3 key={person.name}>
          <span className="name-rectangle">
            {person.name} $
            {props.totalCost === 0
              ? financial(parseFloat(person.total))
              : person.total === 0
              ? "0"
              : financial(
                  parseFloat(person.total) +
                    (parseFloat(person.total) /
                      parseFloat(props.totalCostNoFees)) *
                      (parseFloat(props.totalCost) -
                        parseFloat(props.totalCostNoFees))
                ) +
                "(original: $" +
                financial(person.total) +
                ")"}
          </span>
          <input
            className="smaller-input-rectangle"
            type="number"
            placeholder="Add Cost"
            value={person.items}
            onChange={(e) => props.updateInputCost(person.name, e)}
          />
          <button
            className="smaller-custom-button"
            onClick={() => props.addCost(person.name)}
          >
            Add
          </button>
          <button
            className="smaller-custom-button"
            onClick={() => props.onRemovePerson(person.name)}
          >
            Remove
          </button>
        </h3>
      ))}
    </div>
  );
}
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

export default class ChinaWallMoment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
      /* people:
          {
              name: "",
              total: 0,
              itemsCosts: [],
          }
          */
      inputPerson: "",
      inputTotal: "",
      totalCost: parseFloat(0),
      totalCostNoFees: parseFloat(0),
      inputCost: "",
    };
    this.updateInputPerson = this.updateInputPerson.bind(this);
    this.updateInputPersonCost = this.updateInputPersonCost.bind(this);
    this.handleAddPerson = this.handleAddPerson.bind(this);
    this.handleRemovePerson = this.handleRemovePerson.bind(this);
    this.updateInputTotal = this.updateInputTotal.bind(this);
    this.handleAddTotal = this.handleAddTotal.bind(this);
    this.handleAddCost = this.handleAddCost.bind(this);
    this.updateInputCost = this.updateInputCost.bind(this);
  }

  updateInputPerson(e) {
    const value = e.target.value;

    this.setState({
      inputPerson: value,
    });
  }

  updateInputPersonCost(e) {
    const value = e.target.value;

    this.setState({
      inputCost: value,
    });
  }
  updateInputCost(name, e) {
    const value = e.target.value;
    let person = this.state.people.find((pers) => pers.name === name);
    const index = this.state.people.indexOf(person);
    person.items = value;
    this.setState((currentState) => {
      if (currentState.people.length > 1) {
        let peopleArr = currentState.people.filter((per) => per.name !== name);

        return {
          people: peopleArr
            .slice(0, index)
            .concat(person)
            .concat(peopleArr.slice(index)),
        };
      } else {
        return {
          people: [person],
        };
      }
    });
  }

  handleAddPerson() {
    if (this.state.inputPerson !== "") {
      const person = this.state.inputPerson;
      this.setState((currentState) => {
        return {
          people: currentState.people.concat([
            {
              name: person,
              total: 0,
              items: "",
            },
          ]),
          inputPerson: "",
        };
      });
    }
  }
  handleAddCost(name) {
    const person = this.state.people.find((person) => person.name === name);
    const index = this.state.people.indexOf(person);
    if (person.items !== "") {
      const newPerson = {
        name: person.name,
        total: parseFloat(person.total) + parseFloat(person.items),
        items: "",
      };
      this.setState((currentState) => {
        var peopleArr = currentState.people.filter((per) => per.name !== name);
        if (currentState.people.length > 1) {
          return {
            people: peopleArr
              .slice(0, index)
              .concat(newPerson)
              .concat(peopleArr.slice(index)),
            inputCost: "",
            totalCostNoFees:
              parseFloat(currentState.totalCostNoFees) +
              parseFloat(person.items),
          };
        } else {
          return {
            people: [newPerson],
            inputCost: "",
            totalCostNoFees:
              parseFloat(currentState.totalCostNoFees) +
              parseFloat(person.items),
          };
        }
      });
    }
  }

  handleRemovePerson(name) {
    this.setState((currentState) => {
      const pers = currentState.people.find((p) => p.name === name);
      return {
        people: currentState.people.filter((person) => person.name !== name),
        //totalCost: financial(parseFloat(currentState.totalCost) - parseFloat(pers.total)),
        totalCostNoFees: financial(
          parseFloat(currentState.totalCostNoFees) - parseFloat(pers.total)
        ),
      };
    });
  }
  updateInputTotal(e) {
    const value = e.target.value;

    this.setState({
      inputTotal: value,
    });
  }
  handleAddTotal() {
    if (this.state.inputTotal !== "") {
      this.setState((currentState) => {
        return {
          totalCost: parseFloat(currentState.inputTotal),
          inputTotal: "",
        };
      });
    }
  }

  render() {
    return (
      <div align="center">
        <div className="rectangle">
          <img className="takeoutbox-icon" src={takeoutbox} alt="" />
          <text id="centered">Costs</text>
          <img className="takeoutbox-icon" src={takeoutbox} alt="" />
        </div>
        <div>
          <input
            className="inputRectangle"
            type="text"
            placeholder="New Person"
            value={this.state.inputPerson}
            onChange={this.updateInputPerson}
          />

          <button className="custombutton" onClick={this.handleAddPerson}>
            Submit
          </button>
        </div>
        <DisplayCosts
          list={this.state.people || {}}
          totalCostNoFees={this.state.totalCostNoFees}
          totalCost={this.state.totalCost}
          onRemovePerson={this.handleRemovePerson}
          inputCost={this.state.inputCost}
          updateInputCost={this.updateInputCost}
          addCost={this.handleAddCost}
        />

        <div>
          <input
            className="inputRectangle"
            type="number"
            placeholder="Total Cost"
            value={this.state.inputTotal}
            onChange={this.updateInputTotal}
          />
          <button className="custombutton" onClick={this.handleAddTotal}>
            Submit
          </button>
          <h2>
            Fees: $
            {parseFloat(this.state.totalCost) -
              parseFloat(this.state.totalCostNoFees) >
            0
              ? financial(
                  parseFloat(this.state.totalCost) -
                    parseFloat(this.state.totalCostNoFees)
                )
              : "0.00"}
          </h2>
          <h2>Total Cost: ${financial(this.state.totalCost)}</h2>
        </div>
      </div>
    );
  }
}
