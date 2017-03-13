import React from 'react'

export default React.createClass({
  getInitialState: function() {
     return {childText: "Click me! (parent prop)"};
  },
  render: function () {
    return (
      <Child onClick={this.handleChildClick} text={this.state.childText}/>
    );
  },
  handleChildClick: function(event) {
     // You can access the prop you pass to the children
     // because you already have it!
     // Here you have it in state but it could also be
     //  in props, coming from another parent.
     alert("The Child button text is: " + this.state.childText);
     // You can also access the target of the click here
     // if you want to do some magic stuff
     alert("The Child HTML is: " + event.target.outerHTML);
  }
//    render() {
//    return <div>About</div>
//  }
})

var Child = React.createClass({
  render: function () {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  },
});
