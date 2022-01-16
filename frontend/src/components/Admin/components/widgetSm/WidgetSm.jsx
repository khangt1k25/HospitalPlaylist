import "./widgetSm.css";
import {useState} from 'react';

export default function WidgetSm(props) {
 // console.log(props.user);
  // const [newMem, setNewMem] = useState();
  // setNewMem(props.user);
  // console.log(newMem);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {/* {props.user} */}
        {props.user && props.user.slice(0, 5).map(tmp => 
                  <li className="widgetSmListItem">
                  <img
                    src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                    alt=""
                    className="widgetSmImg"
                  />
                  <div className="widgetSmUser">
                    <span className="widgetSmUsername">{tmp.username}</span>
                    <span className="widgetSmUserTitle">{tmp.email}</span>
                  </div>
                  <button className="widgetSmButton">
                    Display
                  </button>
                </li>
          )}
        
      </ul>
    </div>
  );
}
