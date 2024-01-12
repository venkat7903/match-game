import './index.css'

function ScoreCard(props) {
  const {score, playAgain} = props
  function onClickPlayAgain() {
    playAgain()
  }

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="score-title">YOUR SCORE</p>
      <p className="score-value">{score}</p>
      <button
        type="button"
        className="play-again-btn"
        onClick={onClickPlayAgain}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreCard
