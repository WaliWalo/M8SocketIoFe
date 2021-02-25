import React, { PureComponent } from 'react'
import '../css/LandingPage.scss'

export default class LandingPage extends PureComponent {
    state={
        animated:true,
        login:{
            username:'',
            token:''
        }
    }

    fillForm=(e)=>{
        let login={...this.state.login}
        let currentId=e.currentTarget.id
        login[currentId]=e.currentTarget.value
        this.setState({login:login})
    }
    
    login(){
        let reply=''
        let tokenConfirmed=''
        let filter = this.props.userList.filter(user=>user.username===this.state.login.username)
        filter[0]? (filter[0].username===this.state.login.username? reply='yes':reply='no') : reply='no'
        
        console.log(reply)
        this.state.login.token===process.env.REACT_APP_ACCESS_TOKEN? tokenConfirmed='yes': tokenConfirmed='no'
        console.log(tokenConfirmed)
        if(reply==='yes' && tokenConfirmed==='yes'){
            window.location.href='/feed'
        }
        else{
            console.log('cannot access')
        }

    }

    componentDidMount(){
        console.log(this.props.userList)
        setTimeout(()=>{this.setState({animated: false})},1000)
    }
    render() {
        let titleAnimation = this.state.animated? '100%': ''
        let loginAnimation = this.state.animated? '100%': '2rem'
        return (
            <div id='landing-page' >
                <div className="title" style={{marginLeft : `${titleAnimation}`}}>
                    <h1>Linkedin-Clone</h1>
                    <p>Made by Team 7 (Orhan Ors, Leon Abimi, Richard Johnson Addai, Renie Jr Del is)</p>
                </div>
                <div id='login' style={{marginLeft : `${loginAnimation}`}}>
                    <h2>Dive in the Job World of Strive School</h2>
                    <div className="login-form">
                        <p>Username that you provide on Strive School API</p>
                        <input 
                        required
                        id='username'
                        type="text" 
                        placeholder='Username'
                        onChange={this.fillForm}
                        />
                        <p>Token provided by Strive School API</p>
                        <input
                        required
                        id='token' 
                        type="password" placeholder='Token'
                        onChange={this.fillForm}
                        />
                        <input 
                        type="button" 
                        value='Login'
                        onClick={this.login.bind(this)}
                        />
                    </div>
                    <div className="not-register">
                        <p>Are you not registered on Strive School API?</p>
                        <p>Please contact Linkedin-Clone Owners</p>

                    </div>
                </div>
            </div>
        )
    }
}
