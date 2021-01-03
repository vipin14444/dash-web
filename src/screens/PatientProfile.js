import React, { Component } from 'react'
import './PatientProfile.scss'

export default class PatientProfile extends Component {
    render() {
        return (
            <div className='patientprofile'>
                <section className="first">
                    <h1>Patient Profile</h1>
                    <div className="rows">
                        <div className="row one">
                            <div className="key">Ben Begay</div>
                            <div className="value">
                                <div>123 Any Strret</div>
                                <div>Billings, MT 73444</div>
                                <div>123-456-7899</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="key">DOB:</div>
                            <div className="value">06/10/1967</div>
                        </div>
                        <div className="row">
                            <div className="key">Gender:</div>
                            <div className="value">M</div>
                        </div>
                        <div className="row">
                            <div className="key">Diagnosed chronic conditions:</div>
                            <div className="value">Diabetes, COPD</div>
                        </div>
                        <div className="row">
                            <div className="key">Current health plan:</div>
                            <div className="value">BCBST, PPO 80/20</div>
                        </div>
                    </div>

                    <h1 className='overall-h1'>Ben self assesment of his overall  wellness (0-5)</h1>

                    <div className="ratings__main">
                        <div className="rating">
                            <div className="rate average">3.2</div>
                            <div className="desc">Overall Health</div>
                        </div>
                        <div className="rating">
                            <div className="rate good">3.7</div>
                            <div className="desc">Mental Health</div>
                        </div>
                        <div className="rating">
                            <div className="rate bad">2.3</div>
                            <div className="desc">Phyisical Health</div>
                        </div>
                    </div>

                </section>

                <section className="second">

                    <div className="container-row-1">
                        <div className="data">
                            <h1>Gaps In Care And Wellness Alerts</h1>

                            <div className="card">
                                <div className="row">Patient's BMI is 29.5-dangerously close to obese</div>
                                <div className="row">Patient prescription for Albuterol expiring 13 days</div>
                                <div className="row">Patient is 31 days overdue for annual prostate exam</div>
                            </div>
                        </div>

                        <div className="data">
                            <h1>Biometric Profile</h1>

                            <div className="card biometric">
                                <div className="row">
                                    <div className="key">Blood Pressure</div>
                                    <div className="value">120/70</div>
                                </div>
                                <div className="row">
                                    <div className="key">Heart Rate</div>
                                    <div className="value">72 BPM</div>
                                </div>
                                <div className="row">
                                    <div className="key">BMI</div>
                                    <div className="value">29.5</div>
                                </div>
                                <div className="row">
                                    <div className="key">Cholestrol</div>
                                    <div className="value">210</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-row-2">
                        <div className="data">
                            <h1>Current Medications</h1>

                            <div className="card currentmedications">
                                <div className="row start">
                                    <div className="key">Drug</div>
                                    <div className="value">Indicated For</div>
                                </div>
                                <div className="row">
                                    <div className="key">Actose, 100 mg</div>
                                    <div className="value">Candidal entirities</div>
                                </div>
                                <div className="row">
                                    <div className="key">Albuterol, 100 mg</div>
                                    <div className="value">COPD</div>
                                </div>
                                <div className="row">
                                    <div className="key">Alive, 100 mg</div>
                                    <div className="value">COPD</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="data">
                        <h1>All Known Provider Interactions</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Provider</th>
                                    <th>Specialty</th>
                                    <th>Reason</th>
                                    <th>Procedure</th>
                                    <th>Diagnosis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12/08/2019</td>
                                    <td>Dr. Andrew Bethel</td>
                                    <td>Pulmonologist</td>
                                    <td>Injury</td>
                                    <td></td>
                                    <td>1st degree ankle burn</td>
                                </tr>
                                <tr>
                                    <td>12/08/2019</td>
                                    <td>Dr. Andrew Bethel</td>
                                    <td>Pulmonologist</td>
                                    <td>Injury</td>
                                    <td></td>
                                    <td>1st degree ankle burn</td>
                                </tr>
                                <tr>
                                    <td>12/08/2019</td>
                                    <td>Dr. Andrew Bethel</td>
                                    <td>Pulmonologist</td>
                                    <td>Injury</td>
                                    <td></td>
                                    <td>1st degree ankle burn</td>
                                </tr>
                                <tr>
                                    <td>12/08/2019</td>
                                    <td>Dr. Andrew Bethel</td>
                                    <td>Pulmonologist</td>
                                    <td>Injury</td>
                                    <td></td>
                                    <td>1st degree ankle burn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>
            </div>
        )
    }
}
