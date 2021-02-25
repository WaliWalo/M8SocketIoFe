import React, { PureComponent } from 'react'
import '../css/Dashboard.scss'
import {Row, Col} from 'react-bootstrap'
import dashboardData from '../dataExamples/Dashboard.json'

export default class Dashboard extends PureComponent {
    render() {
        return (
            <div id='dashboard'>
                <header>
                    <span>
                        <h3>Your Dashboard</h3>
                        <p>Private to you</p>
                    </span>
                    <span>
                        <i className="fas fa-medal"></i>
                        <p>All Star</p>
                    </span>
                </header>
                <Row>
                    <Col xs={4}>
                        <p>{dashboardData[0].n}</p>
                        <p>{dashboardData[0].about}</p>
                    </Col>
                    <Col xs={4}>
                        <p>{dashboardData[1].n}</p>
                        <p>{dashboardData[1].about}</p>
                    </Col>
                    <Col xs={4}>
                        <p>{dashboardData[2].n}</p>
                        <p>{dashboardData[2].about}</p>
                    </Col>
                </Row>
                <Row>
                    <span>
                        <i className="fas fa-bookmark"></i>
                    </span>
                    <span>
                        <p>My items</p>
                        <p>Keep track of your jobs, courses and articles</p>
                    </span>
                </Row>
            </div>
        )
    }
}
