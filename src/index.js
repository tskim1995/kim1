import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isLog: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState(state => ({
            isLog: !state.isLog
        }));
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        if(this.state.isLog){
            return(
                <div className = 'login'>
                    <h2>Welcome {this.state.value}</h2>
                    <form onSubmit = {this.handleInput}>
                        <input type = 'submit' value = 'LogOut' />
                    </form>
                </div>
            );
        } else {
            return(
                <div className = 'login'>
                    <form onSubmit = {this.handleInput}>
                        <label>
                            name
                            <input type = 'text' value = {this.state.value} onChange = {this.handleChange} />
                        </label>
                        <input type = 'submit' value = 'LogIn' />
                    </form>
                </div>
            );
        }
    }
}


class Title extends React.Component {
    render() {
        return(
            <div>
                <h1>Title</h1>
            </div>
        );
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return(
            <div className = 'Page'>
                <Login />
                <Title />
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);