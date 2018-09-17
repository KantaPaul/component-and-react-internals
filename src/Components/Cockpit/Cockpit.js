import React from 'react';
import MyClass from './Cockpit.css';
import {Button} from 'reactstrap';

let cockpit = (props) => {
  let classes = [];
  let btnClass = '';
  if (props.showPerson) {
    btnClass = MyClass.red;
  }
  if (props.persons.length <= 2) {
    classes.push(MyClass.red)
  }
  if (props.persons.length <= 1) {
    classes.push(MyClass.bold)
  }
  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <Button 
        color="primary"
        onClick={props.personHandler} 
        className={btnClass}> 
        {props.showPerson === true ? 'Hide Me' : 'Show Me'}
      </Button>
    </div>
  )
}

export default cockpit;