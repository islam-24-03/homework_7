import React, { Component } from "react";

class component extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.data !== prevProps.data) {
      this.fetchData();
    }
  }

  fetchData() {

  }

  render() {
    return <div>{/* Рендеринг компонента */}</div>;
  }
}

export default component;





//1)class MyComponent extends React.Component {
//componentDidMount() {
//this.inputRef.focus();
//}

//render() {
//return (
//<div>
//<input ref={(ref) => (this.inputRef = ref)} />
//</div>
//);
//}
//}


//export default MyComponent;
