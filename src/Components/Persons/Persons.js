import React from 'react';
import Person from './Person/Person';

let persons = (props) => {
  return (
    props.persons.map((person, index) => {
      return (
        <Person 
        name={person.name} 
        age={person.age} 
        key={person.id}
        remove={() => props.clicked(index)}
        onchage={(nameChange) => props.changed(nameChange, person.id)}
        />
      )
    })
  )
};

export default persons;