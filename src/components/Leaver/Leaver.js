import classes from "./Leaver.module.css";


const Leaver = ({name, scores, }) => {
  return (
    <div className = {classes.Leaver} >
      <h2 className = {classes.name}>{name}</h2>
      <h3 className ={classes.scores}>{scores} score</h3>
    </div>
  )
}
export default Leaver;