import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: "#C9E6F5"
  }
};

function DaysCircle ({ classes }) {
  const [progress, setProgress] = React.useState(0);

  const startDate = new Date("2020-8-22");
  let today = new Date();
  let timeDiff = today.getTime() - startDate.getTime();
  let dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  let nextAnn = 69;

  const text = `${String(dayDiff)}`

  React.useEffect(() => {
    setProgress(() => {
      return dayDiff / nextAnn * 100;
    })}
    , [dayDiff, nextAnn]);

  return (
    <div 
      className="dot-container">
      <div
        className="dot">
          {text} <br/>days
      </div>
      <div
        className="progress">
          <CircularProgress
            className={classes.root}
            variant="static" 
            value={progress} 
            size="36vh" 
            thickness={2} />
      </div>
    </div>
  )
}

export default withStyles(styles)(DaysCircle);