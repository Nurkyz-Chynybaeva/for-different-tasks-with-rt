
import classes from "./Style1.module.css";
const Style1 = ({children}) => {
    return (
      <button className = {classes.Style1}>{children}</button>
    );
}
export default Style1;