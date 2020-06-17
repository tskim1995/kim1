import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// 로그인창
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
                    <form onSubmit = {this.handleInput}>
                        <h2>Welcome {this.state.value}</h2>
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

// 제목
class Title extends React.Component {
    render() {
        return(
            <div className = 'title'>
                <h1>Title</h1>
            </div>
        );
    }
}


function ListItem(props) {
    return <li>{props.value}</li>;
}

// 리스트
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List_value: ['a','b','c','d']
        }
    }

    render() {
        const list_items = this.state.List_value;
        const listItems = list_items.map((item) =>
            <ListItem key = {item} value = {item} />
            );

        return(
            <div className = 'section_list'>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        return(
            <div className = 'Page'>
                <Login />
                <Title />
                <List />
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);