// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../TeamCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamData, isLoading} = this.state

    const httpData = await fetch(`https://apis.ccbp.in/ipl/:${id}`)
    const response = await httpData.json()

    const formatedData = {
      teamBannerUrl: response.team_banner_url,
      Match: response.latest_match_details,
      recentMatches: response.recent_matches,
    }
    this.setState({teamData: formatedData, isLoading: false})
  }

  getAll=()=>{
      <div>
            <img src={teamBannerUrl} className="matching" />
            <LatestMatch Details={Match} key={Match.id} />
            <div className="latest">
                {recentMatches.map(each => (
                    <MatchCard data={each} key={each.id} />
                ))}
            </div>
    </div>
  }

  render() {
    const {teamData, isLoading} = this.state
    const {teamBannerUrl, Match, recentMatches} = teamData
    return (
      <div className="match">
       {   isLoading ? (<Loader type="Spin" height={50} width={50}/>):
        (
            this.getAll()
        )
         }
        </div>
  }
}
export default TeamMatches
