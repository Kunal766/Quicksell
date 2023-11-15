import Icon from '../assets/icons/user.png'
function groupme(group,order,apidata)
{
    const allCards =apidata.tickets;
    const users = apidata.users;
    const userMap = new Map();
    users.forEach((element)=>{
        userMap.set(element.id,element.name);
    })
    const arr=[];
    if(group==="Status")
    {
        const statusArray = ["Backlog","Todo","In progress","Done","Canceled"];
        // allCards.forEach(element => {
        //     statusSet.add(element.status);
        // });

        statusArray.forEach((statusElement)=>{
            const groupObj={status:statusElement,cards:[],icon:Icon};
            allCards.forEach((cardElement)=>
            {
                if(cardElement.status===statusElement)
                {
                    groupObj.cards.push(cardElement);
                }
            });
            arr.push(groupObj);
        })
    }



    if(group==="User")
    {
        const statusSet = new Set();
        allCards.forEach(element => {
            statusSet.add(userMap.get(element.userId));
        });

        statusSet.forEach((statusElement)=>{
            const groupObj={status:statusElement,cards:[],icon:Icon};
            allCards.forEach((cardElement)=>
            {
                if(userMap.get(cardElement.userId)===statusElement)
                {
                    groupObj.cards.push(cardElement);
                }
            });
            arr.push(groupObj);
        })
    }


    if(group==="Priority")
    {
        const statusSet =[4,3,2,1,0];

        const priorityArray =["No priority","Low","Medium","High","Urgent"];
        statusSet.forEach((statusElement)=>{
            const groupObj={status:priorityArray[statusElement],cards:[],icon:Icon};
            allCards.forEach((cardElement)=>
            {
                if(cardElement.priority===statusElement)
                {
                    groupObj.cards.push(cardElement);
                }
            });
            arr.push(groupObj);
        })
    }

    if(order==="Priority")
    {
        arr.forEach((element)=>{
            element.cards.sort((a,b)=>(b.priority-a.priority));
        })
    }
    if(order==="Title")
    {
        arr.forEach((element)=>{
            element.cards.sort((a,b)=>(a.title.toLowerCase().localeCompare(b.title.toLowerCase())))
        })
    }


  return arr;


}


export default groupme;