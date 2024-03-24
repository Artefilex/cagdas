
import PropTypes from "prop-types"
function HeaderScore({title, score}) {
  return (
      <div className="text-xl font-semibold flex items-center flex-col gap-4">
        <header>{title}</header>
        <div>{score}</div>
      </div>
  );
}

HeaderScore.propTypes = {
    title: PropTypes.string,
    score: PropTypes.number
}

export default HeaderScore;
