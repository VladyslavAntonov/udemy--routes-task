import React, { Component } from 'react';

class Course extends Component {
    state = {
        id: null,
        title: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const title = new URLSearchParams(this.props.location.search).get('title');

        this.setState({ id, title });
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;

        if (this.state.id !== id) {
            const title = new URLSearchParams(this.props.location.search).get('title');

            this.setState({ id, title });
        }
    }

    pa

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;