import React, { PureComponent } from 'react'
import './Jobs_Styles/AdsJobs.scss'
import {Row, Col} from 'react-bootstrap'

export default class AdsJobs extends PureComponent {
    render() {
        return (
            <Row id='ads-jobs'>
               <Col xs={1}>
                   <img src="" alt=""/>
               </Col>
               <Col xs={11}>
                    <p>Try Premium to see jobs where you would be a top appliant</p>    
                    <p>Millions of members use Premium</p>
                    <button>Reactivate</button>
                </Col> 
            </Row>
        )
    }
}
