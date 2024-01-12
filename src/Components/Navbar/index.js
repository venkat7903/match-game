import './index.css'

function Navbar(props) {
  const {score, time} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-time-container">
        <li className="score">
          <p>Score:</p>
          <span className="score-count">{score}</span>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="units">{time} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
