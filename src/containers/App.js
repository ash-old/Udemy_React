import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    persons: [
      { id: 1, name: 'Ash', age: 39 },
      { id: 2, name: 'Moo', age: 5 },
      { id: 3, name: "Sho", age: 34 }
    ],
    showPersons: false,
    counter: 0
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1
      }
    })
  }


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }

    return (
      <div className='App'>
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
