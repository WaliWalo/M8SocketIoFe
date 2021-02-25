import React, { PureComponent } from 'react'
import './Jobs_Styles/Jobs.scss'
import {Row, Col} from 'react-bootstrap'

export default class Jobs extends PureComponent {
    url = 'https://striveschool-api.herokuapp.com/api/product/'
    state={
        allJobs:[]
    }

    fetchJobs=async()=>{
        let response = await fetch(this.url,{
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM2MDE2YmVkMjY2ODAwMTcwZWEzZmMiLCJpYXQiOjE2MDY4MTIwMTEsImV4cCI6MTYwODAyMTYxMX0.-uMawwVYHlRY3cRlBmcTuo0dwpJc8TvXOECs4sxKYNg'
            }
        })
        let result = await response.json()
        console.log(result)
        return result
    }

    componentDidMount=async()=>{
        let allJobs= await this.fetchJobs()
        this.setState({allJobs: allJobs})
    }

    render() {
        return (
            <Row id='jobs'>
                <div className="suggestion">
                    <p>Recommended for you</p>
                    <p>Based on your profile and search history</p>
                </div>
                <Row className='jobs-container'>
                    {this.state.allJobs.map(job=>{
                        return(
                            <Col xs={3}>
                                <header>
                                    <img src={job.imageUrl} alt=""/>
                                    <div className="icons-jobs">
                                    <i className="fas fa-ban"></i>
                                    <i className="far fa-bookmark"></i>

                                    </div>
                                </header>
                                <div className="job-body">
                                    <p>{job.name}</p>
                                    <p>{job.description}</p>
                                    <p>{job.brand}</p>
                                </div>
                                <div className="job-footer">
                                    <div className="recruiting">
                                    <i className="fas fa-bullseye"></i>
                                    <p>Active recruiting</p>
                                    </div>
                                    <div className="infos">
                                        <p>Time</p>
                                        <p>Applicants</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Row>
        )
    }
}
