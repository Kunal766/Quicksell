import "./Card.css";
import Avtar from "../../assets/users/user_1.jpg";
import Warning from "../../assets/icons/warning.png";

function Card(props)
{

    return(
        <div className="Card">
            <div className="userDetails">
                <div className="userId">{props.id}</div>
                <div>
                <img src={Avtar} alt="avatr" className="userAvatar"></img>
                <div className="circle1"></div>
                </div>
                </div>
            <div className="title">{props.title}</div>            
           {
            props.tags.map((element,index) => 
              {
                return (<div key={index} className="tagcontainer"><img className="warnning" src={Warning} alt="warning sign"/><div  className="tag"><div className="circle2"></div>{element}</div></div>)

              })
           }
        </div>
    )
}


export default Card;