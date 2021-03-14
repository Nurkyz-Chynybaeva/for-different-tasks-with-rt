import Leaver from '../Leaver/Leaver';
import classes from './LeaverList.module.css';

const LeaverList = ({leavers}) => {
  return (
<div className ={classes.LeaverList}>
  {leavers.map(leaver => <Leaver {...leaver} />)}

{leavers.filter(item => item.scores >= 160) .map(leaver => <Leaver {...leaver}/>)};

</div>

  )
}
export default LeaverList ;