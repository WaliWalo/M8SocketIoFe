import React, { PureComponent } from 'react'
import './Network_Style/Events.scss'
import {Row, Col} from 'react-bootstrap'

export default class Events extends PureComponent {
    url = 'https://striveschool-api.herokuapp.com/api/movies/'

    state={
        categories:[],
        cards:{
            EventsOnline:[],
            RecommendedPages:[]
        }

    }

    fetchGet=async()=>{
        let response = await fetch(this.url, {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM2MDE2YmVkMjY2ODAwMTcwZWEzZmMiLCJpYXQiOjE2MDY4MTIwMTEsImV4cCI6MTYwODAyMTYxMX0.-uMawwVYHlRY3cRlBmcTuo0dwpJc8TvXOECs4sxKYNg'
            }
        })
        let result= await response.json()
        console.log(result)
        this.setState({categories: result})
        return result
    }

    fetchGetCards=async(cat)=>{
        let response = await fetch(this.url+`${cat}`, {
            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM2MDE2YmVkMjY2ODAwMTcwZWEzZmMiLCJpYXQiOjE2MDY4MTIwMTEsImV4cCI6MTYwODAyMTYxMX0.-uMawwVYHlRY3cRlBmcTuo0dwpJc8TvXOECs4sxKYNg'
            }
        })
        let result= await response.json()
        console.log(result)
        return result
    }

    componentDidMount=async()=>{
        let list= await this.fetchGet()
        console.log(list)
        let listFill= {...this.state.cards}
        list.map(async (cat)=>{
            let result= await this.fetchGetCards(cat)
            listFill[cat]=result
            this.setState({cards: listFill})
            console.log('categoria',listFill[cat])
        })

    }

    render() {
        return (
            <div id='events-container'>
                {/* {this.state.categories.map((cat, index)=>{
                    return(
                        <Row key={index}>
                            <p>{cat}</p>
                            <Row className="cards-container">
                                {this.state.cards[cat].map((card, index)=>{
                                    return(
                                        <Col xs={4} key={index}>
                                            <header></header>
                                            <img src='' alt="image"/>
                                            <p>Name {card.name}</p>
                                            <p>Description</p>
                                            <button>View</button>
                                        </Col>
                                     )
                                })} 
                                
                            </Row>
                    
                        </Row>
                    )
                })} */}
                {Object.keys(this.state.cards).map((cat, index)=>{
                    return(
                        <Row key={index}>
                            <p>{cat}</p>
                            <Row className="cards-container">
                                {this.state.cards[cat].map((card, index)=>{
                                    let random=Math.floor(Math.random()*200)
                                    return(
                                        <Col xs={4} key={index}>
                                            <header
                                            style={{
                                                backgroundColor: cat==='RecommendedPages'? 'red':'green'
                                            }}
                                            ></header>
                                            <img src={card.imageUrl} alt=""/>
                                            <div className="event-info">
                                            <p>{card.name}</p>
                                            <p>{card.description}</p>
                                            <p>{random} attendees</p>

                                            </div>
                                            <button>View</button>
                                        </Col>
                                     )
                                })} 
                                
                            </Row>
                    
                        </Row>
                    )
                })}
            </div>
        )
    }
}
