import React, { Component } from 'react';

class Search extends Component {
    render() {

        const { util } = this.props;
        
        return <div>
            <input id="query-input" type="text" placeholder="Search username" />
            <button onClick={util.handleSubmit}>Submit</button>
            <button onClick={util.clear}>Clear</button>
          </div>;
    }
}

export default Search;