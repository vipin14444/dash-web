import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PatientSummary.scss'

export default class PatientSummary extends Component {
    render() {
        return (
            <div className='patientsummary'>

                <section className="first">
                    <h1>My Dash Patient Summary</h1>
                    <div className="rows">
                        <div className="row">
                            <div className="key">Dash patients in total</div>
                            <div className="value">5</div>
                        </div>
                        <div className="row">
                            <div className="key">Patients at risk</div>
                            <div className="value">3</div>
                        </div>
                        <div className="row">
                            <div className="key">Gaps in care to close</div>
                            <div className="value">5</div>
                        </div>
                        <div className="row">
                            <div className="key">Dash profiles</div>
                            <div className="value">
                                <select name="profile" id="profile">
                                    <option value="Ben Begay">Ben Begay</option>
                                    <option value="Ben Begay">Donna Jones</option>
                                    <option value="Ben Begay">Michael Emerson</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <Link to={'/patient-profile/ben'}>View Profile</Link>
                        </div>
                        <div className="row last">
                            <Link to={'#'}>Enroll a patient in Dash</Link>
                        </div>
                    </div>
                </section>

                <section className="second">

                    <div className="data">
                        <h1>Dash patients with gaps in care and wellness alerts</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Gap in care</th>
                                    <th>Alert sent</th>
                                    <th>Followup</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <button>Remind</button> </td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <button>Remind</button> </td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <button>Remind</button> </td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <button>Remind</button> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="data">
                        <h1>Dash patients identified for pharmaceutical opportunities</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Opportunity</th>
                                    <th>Alert sent</th>
                                    <th>Response</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <span className="accept">Accept</span> </td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <span className="accept">Accept</span> </td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>Annual prostate exam-31 days overdue</td>
                                    <td>09/30/2020</td>
                                    <td> <span className="reject">Reject</span> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="data">
                        <h1>Recent activity in dash patient profile</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Activity</th>
                                    <th>Activity Type</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>BMI has increased to dangerous level</td>
                                    <td>Wellness alert</td>
                                    <td>10/05/2020</td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>BMI has increased to dangerous level</td>
                                    <td>Wellness alert</td>
                                    <td>10/05/2020</td>
                                </tr>
                                <tr>
                                    <td>Ben Begay</td>
                                    <td>M</td>
                                    <td>56</td>
                                    <td>BMI has increased to dangerous level</td>
                                    <td>Wellness alert</td>
                                    <td>10/05/2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>

            </div>
        )
    }
}
