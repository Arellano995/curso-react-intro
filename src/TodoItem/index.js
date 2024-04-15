import './TodoItem.css'
import { IoCheckmark } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";

function TodoItem(props){
    return(
      <li className="TodoItem">

        <IoCheckmark
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
        />

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        
        <IoTrashOutline
          className="Icon Icon-delete"
          onClick={props.onDelete}
        />
        
      </li>
    );
  }

export {TodoItem};