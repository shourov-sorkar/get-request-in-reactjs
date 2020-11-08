import React from 'react';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
export default class Home extends React.Component {
  state = {
    information: [],
    err: ""

  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      // GET request using axios inside componentDidMount React hook
      .then(res => {
        const information = res.data;
        this.setState({ information });
      }
      )
      .catch(err => this.setState({ err: err.message }))
  }
  render() {
    // render element
    let spinerRender = <Spinner animation="border" />;
    let informationRender = this.state.information.length !== 0 && this.state.err.length === 0 && (
      this.state.information.map(info => <ol><li> Title: {info.title} <br /> body: {info.body}</li></ol>)
    )
    let errorMessageRender = this.state.err.length !== 0 && (
      <p>{this.state.err}</p>
    )
    return (
      <>
        {
          informationRender ? informationRender : errorMessageRender ? errorMessageRender : spinerRender
        }
      </>

    )
  }
}