import { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Header.scss";

function Header({ player }) {
  const [ pointsText, setPointsText ] = useState("points");

  useEffect(() => {
    if (player.score === 1) {
      setPointsText("point");
    }
  }, [ player.score ]);

  return (
    <header className="ui-header">
        <div className="ui-header-main">
            <img className="ui-header-main__badge" src="images/badges/badge-1.svg" alt="" />
        <span className="ui-header-main__title">{ player.username }</span>
        <span className="ui-header-main__points">{/*{ player.score } { pointsText }*/}</span>
        </div>
        <div className="ui-header-sub">
            <span className="ui-header-sub__text ui-screen-text">**** Your Board ****</span>
        </div>
    </header>
  );
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
