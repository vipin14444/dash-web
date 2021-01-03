import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <Link className='logo' to='/'>
                    <img src={process.env.PUBLIC_URL + '/assets/logo.jpg'} alt="logo" />
                </Link>

                <div className="nav__main">
                    <div className="nav__item">Signup</div>
                    <div className="nav__item">Login</div>
                    <div className="nav__item user__main">
                        Welcome Dr.Bethal
                        <div className="user__imgcontainer">
                            <img src={process.env.PUBLIC_URL + '/assets/user.png'} alt="user" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
