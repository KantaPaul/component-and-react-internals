import React, { Component } from 'react';
import MyClass from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    // persons array
    persons: [
      {id: 'asdsad45', name: 'Pobon', age: 24},
      {id: 'fdgdfg45', name: 'Kanta', age: 28},
      {id: 'asdfdsf65', name: 'Paul', age: 29}
    ],
    // showpersons
    showPerson: false
  }

  // type and preview text
  typingSwitcher = (event, id) => {

    let personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    })

    let person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
      persons: persons
    })
  }

  // show person button handler
  personHandler = () => {
    let doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  // remove single person for persons array
  personRemove = (personIndex) => {
    let myPersons = this.state.persons;
    myPersons.splice(personIndex, 1)
    this.setState ({
      persons: myPersons      
    })
  }

  render() {

    // button click show compenent
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div className="person-wraper">
          <Persons 
            persons={this.state.persons}
            clicked={this.personRemove}
            changed={this.typingSwitcher}
          />
        </div>
      );
    }

    return (
      <div className={MyClass.App}>
        {/* render cockpit component */}
        <Cockpit 
          appTitle={this.props.title}
          persons={this.state.persons} 
          showPerson={this.state.showPerson} 
          personHandler={this.personHandler}
        />

        {/* counting persons length */}
        <p>
          {this.state.persons.length === 0 ? 'List is empty': `Total person ${this.state.persons.length}`}
        </p>

        {/* render persons component */}
        {persons}
      </div>
    );
  }
}

export default App;
