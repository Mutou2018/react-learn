import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

class Header extends Component {
    render() {
        const word = 'is good'
        const className = 'header'
        const isGood = true
        return (
            <div className={className}>
                <h1>react demo</h1>
                <div>react 小书 {word}</div>
                <div>
                    react little book {
                        isGood ? <strong>is Good</strong> : <span>not good</span>
                    }
                </div>
                <Title />
                <Title />
            </div>
        )
    }
}

class Title extends Component {
    handleClickOnTitle(e) {
        e.target.innerHTML = 'react title change'
        console.log('clicked title');
    }

    render() {
        return (
            <div>
                <div onClick={this.handleClickOnTitle}>reacr title</div>
            </div>
        )
    }
}

class LikeButton extends Component {
    static defaultProps = {
        likeText: '取消',
        unLikeText: '点赞'
    }

    constructor() {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        });

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });

        this.setState((prevState) => {
            return {
                count: prevState + 2
            }
        });

        if (this.props.onClick) {
            this.props.onClick()
        }

        // console.log(this.state.isLiked);
        this.setState({
            isLiked: !this.state.isLiked
        })
        // console.log(this.state.isLiked);
    }

    render() {
        // const likeText = this.props.likeText || '取消'
        // const unLikeText = this.props.unLikeText || '点赞'
        return (
            <div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {this.state.isLiked ? this.props.likeText : this.props.unLikeText}👍
                </button>
            </div>
        );
    }
}


class User extends Component {
    render() {
        // TODO user为什么会加{}
        const {user} = this.props
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr />
            </div>
        );
    }
}


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeText: '已赞',
            unLikeText: '赞'
        }
    }
    handleClickOnChange() {
        this.setState({
            likeText: '取消',
            unLikeText: '点赞'
        });
    }

    render() {
        // const usersElement = []
        // for(let user of users){
        //     usersElement.push(
        //         <div>
        //             <div>姓名：{user.username}</div>
        //             <div>年龄：{user.age}</div>
        //             <div>性别：{user.gender}</div>
        //             <hr/>
        //         </div>
        //     )
        // }
        return (
            <div>
                <Header />
                <LikeButton likeText={this.state.likeText}
                    unLikeText={this.state.unLikeText}
                    onClick={() => console.log('click on like button')}
                />
                <div>
                    <button onClick={this.handleClickOnChange.bind(this)}>
                        修改wordings
                    </button>
                </div>
                <div>
                    {users.map((user,i)=> <User key={i} user={user}/>)}
                </div>
            </div>
        );
    }
}



ReactDOM.render(
    <Index />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
