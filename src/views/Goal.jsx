import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GoalText from "../conponts/GoalTextFile/GoalText"
import GoalText2 from "../conponts/GoalTextFile/GoalText2"
import GoalText3 from "../conponts/GoalTextFile/GoalText3"
import '../css/Goal.css';

const Goal = () => {

  const [buttonOpen,setButtopnOpen] = useState();

  const jobOpen = () => {
    setButtopnOpen (<GoalText />);
  }

  const lifeOpen = () => {
    setButtopnOpen (<GoalText2 />);
  }

  const hobbiesOpen = () => {
    setButtopnOpen (<GoalText3 />);
  }

  return (
    <div>

      <div>
        {buttonOpen}
      </div>

      <div className="Job">
        <Button variant="contained" className = "ButtonBox" onClick = { jobOpen }>仕事</Button>
      </div>

      <div className="Life">
        <Button variant="contained" color="primary" className = "ButtonBox" onClick = { lifeOpen }>生活</Button>
      </div>

      <div className="Hobbies">
        <Button variant="contained" color="secondary" className = "ButtonBox" onClick = { hobbiesOpen }>趣味</Button>
      </div>

      <div className="GoalBack"></div>
    </div>
  );
}

export default Goal;
