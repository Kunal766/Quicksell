import './Group.css';
import Card from '../Card/Card';

function Group(props)
{
    return(
        
        <div className='groupContainer'>
            <div className='groupNav'><div className='navLeft'><img className='groupAvtar' src={props.icon} alt='avatar'></img><span className='grouptitle'>{props.title}</span><span>{props.cards.length}</span></div><div className='navRigth'>{"+"}<div className='smallCircle'></div><div className='smallCircle'></div><div className='smallCircle'></div></div></div>
            {props.cards.map((element,index)=>(<Card key={index} title={element.title} id={element.id} tags={element.tag} available={true}/>))}
        </div>
    )
}

export default Group;