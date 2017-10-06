import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.convertDate = this.convertDate.bind(this);
    }

    convertDate(utc) {
        var date = new Date(utc);
        var dd = date.getDate();
        var mm = date.getMonth();
        var yy = date.getYear();

        
        return `${mm}-${dd}-${yy}`;
    }

    render() {
        const { data } = this.props;

        return (
            <ol>
                {
                    data.map((el, i) => {  
                        return (
                            <li key={i}>
                                <strong>Date: </strong> {el.data.created_utc}<br />
                                <strong>Title: </strong> {el.data.title}<br />
                                <strong>Author: </strong> {el.data.author}<br />
                                <strong>Subreddit: </strong> {el.data.subreddit}<br />
                                <strong>Upvotes: </strong> {el.data.ups}<br />
                                <strong>Comments: </strong> {el.data.num_comments}<br />
                                <hr />
                            </li>
                        );
                    })
                }
            </ol>
        );
    }
}

