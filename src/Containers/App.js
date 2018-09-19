import React, { Component } from 'react';
import MyClass from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  constructor (props) {
    super(props);
    // persons array
    this.state =  {
      persons: [
        {id: 'asdsad45', name: 'Pobon', age: 24},
        {id: 'fdgdfg45', name: 'Kanta', age: 28},
        {id: 'asdfdsf65', name: 'Paul', age: 29}
      ],
      // showpersons
      showPerson: false
    }
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log('UPDATE [App.js] Inside shouldComponentUpdate', nextprops, nextstate);
    // return true;
    return nextstate.persons !== this.state.persons || nextstate.showPerson !== this.state.showPerson
  }

  componentWillUpdate (nextprops, nextstate) {
    console.log('UPDATE [App.js] Inside componentWillUpdate', nextprops, nextstate)
  }

  componentDidUpdate() {
    console.log('UPDATE [App.js] Inside componentDidUpdate')
  }

  // state = {
  //   // persons array
  //   persons: [
  //     {id: 'asdsad45', name: 'Pobon', age: 24},
  //     {id: 'fdgdfg45', name: 'Kanta', age: 28},
  //     {id: 'asdfdsf65', name: 'Paul', age: 29}
  //   ],
  //   // showpersons
  //   showPerson: false
  // }

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
    console.log('[App.js] Inside render')
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
        <button onClick={() => {this.setState({ showPerson: true })}}>Show Person</button>
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
