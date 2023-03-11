import React from 'react';


class Parent extends React.Component{
  doSomething(){
    console.log("Parent Component");
}

render(){
  return (
    <div>
      <Child
      text="Rhinoceros"
      title="Animal"
      onClick={this.doSomething}/>
      <Child
      text="2300kg"
      title="weight"
      onClick={this.doSomething}/>
    </div>
    );  
  }
}

  class Child extends React.Component {
    render() {
      return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.text}</h2>
      </div> 
    );
  }
}

 export default Parent;