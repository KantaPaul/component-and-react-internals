import React, {Component} from 'react';
import MyClass from './Cockpit.css';

// let cockpit = (props) => {
//   let classes = [];
//   let btnClass = '';
//   if (props.showPerson) {
//     btnClass = MyClass.red;
//   }
//   if (props.persons.length <= 2) {
//     classes.push(MyClass.red)
//   }
//   if (props.persons.length <= 1) {
//     classes.push(MyClass.bold)
//   }
//   return (
//     <div>
//       <h1>{props.appTitle}</h1>
//       <p className={classes.join(' ')}>This is really working!</p>
//       <button 
//         onClick={props.personHandler} 
//         className={btnClass}> 
//         {props.showPerson === true ? 'Hide Me' : 'Show Me'}
//       </button>
//     </div>
//   )
// }

class Cockpit extends Component {
  render () {
    let classes = [];
    let btnClass = '';
    if (this.props.showPerson) {
      btnClass = MyClass.redbg;
    }
    if (this.props.persons.length <= 2) {
      classes.push(MyClass.redC)
    }
    if (this.props.persons.length <= 1) {
      classes.push(MyClass.bold)
    }
    return (
      <div>
        <h1>{this.props.appTitle}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          onClick={this.props.personHandler} 
          className={btnClass}> 
          {this.props.showPerson === true ? 'Hide Me' : 'Show Me'}
        </button>
      </div>
    )
  }
}

export default Cockpit;