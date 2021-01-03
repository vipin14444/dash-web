import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className="hero">
                    <h1>Welcome to Dash Provider Portal</h1>
                    <h2>Know your patient better</h2>
                </div>

                <main>
                    <Link className='cat one' to={'/patient-summary'}>
                        <img src="./assets/file-one.png" alt="file" />
                        <div className="title">Providers Practice View</div>
                        <div className="subtitle">View dash patients summary</div>
                    </Link>
                    <div className="cat two">
                        <img src="./assets/team.png" alt="file" />
                        <div className="title">Dash Patient Profile View</div>
                        <div className="subtitle">View dash patient profile summary</div>
                    </div>
                    <div className="cat three">
                        <img src="./assets/file-many.png" alt="file" />
                        <div className="title">Dash Patient Electronic Medical Record</div>
                        <div className="subtitle">Dash patients electronic medical records</div>
                    </div>
                </main>
            </div>
        )
    }
}
