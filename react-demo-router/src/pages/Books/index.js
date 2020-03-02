import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import Book1 from './Book1'
import Book2 from './Book2'

export class Books extends Component {
    render() {
        return (
            <div>
                <div>book page</div>
                <div>
                    <div><Link to='/book/book1'>book1</Link></div>
                    <div><Link to='/book/book2'>book2</Link></div>
                </div>
                <div>
                    <Route path='/book/book1/' component={Book1}></Route>
                    <Route path='/book/book2/' component={Book2}></Route>
                </div>
            </div>
        )
    }
}

export default Books
