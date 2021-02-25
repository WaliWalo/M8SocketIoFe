import React, { PureComponent } from 'react'
import '../css/Interests.scss'
import {Row, Col} from 'react-bootstrap'
import InterestsData from '../dataExamples/Interests.json'

export default class Interests extends PureComponent {
    render() {
        return (
            <div id='interests'>
                <header>Interests</header>
                <Row className='interests-body'>
                    {InterestsData.map((company, index)=>{
                        return(
                            <Col xs={6} key={index}>
                                <span>
                                    <img src={company.logo} alt=""/>
                                </span>
                                <span>
                                    <p>{company.title}</p>
                                    <p>{company.followers} followers</p>
                                </span>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}
