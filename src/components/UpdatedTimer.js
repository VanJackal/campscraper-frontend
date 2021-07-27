import React from 'react';

const axios = require('axios');
const config = require('../config.json');

class UpdatedTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: null };
    }
    render() {
        return (
            <div className="time">
                <p>{this.state.date || "Loading..."}</p>
            </div>
        )
    }
    componentDidMount() {
        if (!this.state.date) {
            (async () => {
                try {
                    this.setState({ date: await this.getUpdateTime() })
                } catch (e) {
                    console.log(e);
                }
            })();
        }
    }
    getUpdateTime = async () => {
        const now = new Date();
        let res = await axios.get(`${config.apiUrl}/updated`);
        let dateString = res.data.date;
        const latest = new Date(dateString);
        let difference = (now - latest);
        return Math.round(difference/1000/60) + " Minutes Ago";
    }
}


export default UpdatedTimer;