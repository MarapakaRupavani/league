// Write your code here
import TeamCard from '../TeamCard'
import {Component} from 'react'
import './index.css'

class  Home extends Component{
    state={teamCard:[]}
    componentDidMount(){
        this.getTeamCard()
    }

    getTeamCard=async ()=>{
        const httpData=await fetch("https://apis.ccbp.in/ipl");
        const jsonData=await httpData.json()
        const formatedData=jsonData.map(each=>{
            id:each.id,
            name:each.name,
            teamImageUrl:each.team_image_url
        })
        this.setState({teamCard:formatedData})
    }

    render(){
    return(
        const {teamCard}=this.state
        <div className="home">
            <div className="head">
            <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" alt="ipl logo" className="logo"/>
            <h1 className="ipl">IPL DASHBOARD</h1>
            </div>
            <div className="teamcard">
                {
                    teamCard.map(each=><TeamCard Details={each} key={each.id}/>)
                }
            </div>
        </div>
    )
    }
}
export default Home