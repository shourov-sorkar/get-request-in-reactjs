import React from 'react';
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
export default class Home extends React.Component {
  state = {
    information: [],
    err: null,
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      // GET request using axios inside componentDidMount React hook
      .then(res => {
        if (res.status === 200) this.setState({ information: res.data });
        else if (res.status === 505) this.setState({ err: 505 })
      }
      )
      .catch(err => {
        this.setState({ err: 404 })
      })
  }
  render() {
    return (
      this.state.err !== null ?
        (<>
          {this.state.err === 404 && <h1>Error 404 not found</h1>}
          {this.state.err === 505 && <h1>Error 505 Internal server Error</h1>}
        </>
        ) :
        this.state.information.length === 0 ? <Spinner animation="border" /> : this.state.information.map((info) => (
          <>
            <p>Title: {info.title}</p>
            <p>Body: {info.body}</p>
          </>
        ))
    )
  }
}