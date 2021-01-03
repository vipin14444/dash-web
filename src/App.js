import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import './App.scss'
import Nav from './components/Nav'
import PatientSummary from './screens/PatientSummary'
import PatientProfile from './screens/PatientProfile'

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<Nav />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/patient-summary' exact component={PatientSummary} />
						<Route path='/patient-profile/:id' exact component={PatientProfile} />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}
