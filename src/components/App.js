import React, { Component } from 'react';
import Search from './Search';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var username = document.getElementById('query-input').value,
        url = `https://www.reddit.com/user/${username}/submitted.json`;

    fetch(url)
    .then(res => res.json())
    .then(output => {
      let res =  output.data.children;
      this.setState({ results: res });
    })
    .catch(err => { throw err; });
  }

  clear() {
    document.getElementById("query-input").value = '';
    this.setState({
      results: []
    });
  }

  render() {
    const { results } = this.state;
    const searchProps = {
      handleSubmit: this.handleSubmit,
      clear: this.clear
    };

    return (
      <div className="App">
        <h1>Reddit User Search</h1>
        <Search util={searchProps} />
        <List data={results} />
      </div>
    );
  }
}

export default App;
