// Write your code here
import './index.css'

const LatestMatch = props => {
  const {Details, key} = props
  const latestData = {
    Umpires: Details.umpires,
    Result: Details.result,
    manOfTheMatch: Details.man_of_the_match,
    id: Details.id,
    date: Details.date,
    venue: Details.venue,
    competingTeam: Details.competing_team,
    competingTeamLogo: Details.competing_team_logo,
    secondInnings: Details.second_innings,
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
  } = latestData
  return (
    <>
      <h1 className="head">Latest Matches</h1>
      <div className="latmatch">
        <div>
          <h1>{competingTeam}</h1>
          <p>{date}</p>
          <p>{venue}</p>
        </div>
        <img src={competingTeamLogo} className="team_logo" />
        <div>
          <p>First Innings</p>
          <p>{competingTeam}</p>
          <p>Second Innings</p>
          <p>{secondInnings}</p>
          <p>Man of the Match</p>
          <p>{manOfTheMatch}</p>
          <p>Umpires</p>
          <p>{Umpires}</p>
        </div>
      </div>
    </>
  )
}
