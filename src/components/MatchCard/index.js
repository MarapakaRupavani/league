// Write your code here
import './index.css'

const MatchCard = props => {
  const {data, key} = props
  const latestData = {
    Umpires: data.umpires,
    Result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  }
  const {
    Umpires,
    Result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    secondInnings,
    matchStatus,
  } = data
  return (
    <div className="recent">
      <img src={competingTeamLogo} className="imglogo" />
      <p>{secondInnings}</p>
      <p>{venue}</p>
      {{matchStatus} === 'Lost' ? (
        <p className="red">{matchStatus}</p>
      ) : (
        <p className="gren">{matchStatus}</p>
      )}
    </div>
  )
}
export default MatchCard
