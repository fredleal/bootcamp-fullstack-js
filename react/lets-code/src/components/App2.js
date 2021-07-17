import React from 'react';

class App2 extends React.Component{
// eslint-disable-next-line 
  constructor(props){
    super(props);
  }
  render(){
    return (   
    <div className="box">
        <div className="title">{this.props.title}</div>
        <div className="text">{this.props.children}</div>
    </div>);
  }
}

export default App2;
