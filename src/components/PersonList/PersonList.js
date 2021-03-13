import Person from './components/Person/Person';
import classes from './components/PersonList.module.css';

const PersonList = ({pesons}) => {
  return(
    <div className = {classes.PersonList}>
      {persons.map(person => <Person {...person}/>)}
    </div>
  )
}
export default PersonList;