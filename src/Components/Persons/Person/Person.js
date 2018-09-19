import React, {Component} from 'react';
import MyClass from './Person.css';

// let Person = (props) => {
//   return (
//     <div className={MyClass.Person}>
//       <p>Hi I am {props.name} and I an {props.age} {props.age > 1 ? 'years' : 'year'} old</p>
//       <input type="text" onChange={props.onchage} value={props.name}/>
//       <button onClick={props.remove} className={MyClass.button}>Remove</button>
//     </div>
//   );
// }

class Person extends Component {
  constructor (props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount')
  }
  render () {
    console.log('[Person.js] Inside render')
    return (
      <div className={MyClass.Person}>
        <p>Hi I am {this.props.name} and I an {this.props.age} {this.props.age > 1 ? 'years' : 'year'} old</p>
        <input type="text" onChange={this.props.onchage} value={this.props.name}/>
        <button onClick={this.props.remove} className={MyClass.button}>Remove</button>
      </div>
    );
  }
}

export default Person;
