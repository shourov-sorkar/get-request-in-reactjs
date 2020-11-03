import React from 'react';
import axios from "axios";
export default class Home extends React.Component {
    state = {
      information: []
    }
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
          const information = res.data;
          this.setState({ information });
        })
    }
    render() {
      return (
        <ol>
          { this.state.information.map(info => <li> Title: {info.title} <br/> body: {info.body}</li>)}
          </ol>
      )
    }
  }