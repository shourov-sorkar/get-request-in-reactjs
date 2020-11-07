import React from 'react';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
export default class Home extends React.Component {
  state = {
    information: [],
    err: []

  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      // GET request using axios inside componentDidMount React hook
      .then(res => {
        const information = res.data;
        this.setState({ information });
      }
      ).catch((err) => {
        alert(err);
      })
  }
  render() {
    return (
      this.state.information.length == 0 ? <Spinner animation="border" /> : <ol>
        {this.state.information.map(info => <li> Title: {info.title} <br /> body: {info.body}</li>)}
      </ol>

    )
  }
}