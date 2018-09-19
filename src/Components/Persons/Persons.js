import React, {Component} from 'react';
import Person from './Person/Person';

// let persons = (props) => {
//   return (
//     props.persons.map((person, index) => {
//       return (
//         <Person 
//         name={person.name} 
//         age={person.age} 
//         key={person.id}
//         remove={() => props.clicked(index)}
//         onchage={(nameChange) => props.changed(nameChange, person.id)}
//         />
//       )
//     })
//   )
// };

class Persons extends Component {
  constructor (props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount')
  }

  componentWillReceiveProps(nextprops) {
    console.log('UPDATE [Persons.js] inside componentWillReceiveProps', nextprops);
  }

  shouldComponentUpdate(nextprops, nextstate) {
    console.log('UPDATE [Persons.js] inside shouldComponentUpdate', nextprops, nextstate);
    return nextprops.person !== this.props.persons || nextprops.clicked !== this.props.clicked || nextprops.changed !== this.nextprops.changed;
    // return true;
  }

  componentWillUpdate (nextprops, nextstate) {
    console.log('UPDATE [Persons.js] Inside componentWillUpdate', nextprops, nextstate)
  }

  componentDidUpdate() {
    console.log('UPDATE [Persons.js] Inside componentDidUpdate')
  }

  render () {
    console.log('[Persons.js] Inside render')
    return (
      this.props.persons.map((person, index) => {
        return (
          <Person 
          name={person.name} 
          age={person.age} 
          key={person.id}
          remove={() => this.props.clicked(index)}
          onchage={(nameChange) => this.props.changed(nameChange, person.id)}
          />
        )
      })
    )
  }
}

export default Persons;