import React from "react";

import './app.css';

class App extends React.Component {
    state = { advice: '' };

    componentDidMount() {
        this.fetchAdvice()
    }

    fetchAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
            .then((response) => {
                return response.json();
            }).then((data) => {
                const advice = data.slip.advice;
                this.setState({ advice })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={() => this.fetchAdvice()}>
                        <span>Give Me A Quote</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;