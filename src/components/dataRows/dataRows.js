import React,{useState,useEffect} from 'react'
import axios from "axios";

function Midbody() {

    const[items,setitems] = useState([]);

    async function deleteItem(_id) {
        console.log('Click happened ' + _id);

        await axios.delete('https://thefridge-api.karapincha.io/fridge/'+_id);

        console.log('Click Done ');
        window.location.reload();
    }

    function updateItem(id, item, date){
        console.log('Click Done ' + id + item + date);

    

        document.getElementById("txtId").value = id;
        document.getElementById("ItemName").value = item;
        document.getElementById("ExpireDate").value = date;


    }

    function checkExpire(date){
        
        var varDate = new Date(date); //dd-mm-YYYY
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        if ( varDate.getFullYear() >  today.getFullYear()) {
          
          return (<div className="statusHealthy">Healthy</div>)

        }else if(varDate.getFullYear() ==  today.getFullYear())
        {
            if ( varDate.getMonth() >  today.getMonth()) {
                return (<div className="statusExpSoon">Expire Soon</div>)

            }else if(varDate.getMonth() ==  today.getMonth()){

                if ( varDate.getDate() >  today.getDate()) {
                    return (<div className="statusEVS">Expire Very Soon</div>)

                }else if(varDate.getDate() ==  today.getDate()){
                    return (<div className="statusEVS">Expire Very Soon</div>)

                }else{
                    return (<div className="statusExpired">Expired</div>)
                }
                
            }else{
                return (<div className="statusExpired">Expired</div>)
            }

        }else{
            return (<div className="statusExpired">Expired</div>)
        }
    }


    useEffect(() => {

        axios.get('https://thefridge-api.karapincha.io/fridge')
        .then(res=>{
            
            console.log(res.data[0].expiry);
            document.getElementById("rowCount").innerHTML="Total Items: "+res.data.length;
            setitems(res.data);
        }
        ).catch(err=>{
            console.log(err);
        })
    }, [])


    const itemlist=items.map((obj)=>{
        return <a href=""><div className="dataRow" title="Click to Edit" onClick={() => updateItem(obj._id, obj.title, obj.expiry)}>

            <div className="itemName"><span>{obj.title}</span></div>
            <div className="expireDate"><span id="expireDate">Expiry Date: {obj.expiry}</span></div>
            <div className="btnDelete" title="Click to Delete"><button id="deleteButton" value={obj._id} onClick={() => deleteItem(obj._id)} ><span class="material-icons">delete_forever</span></button></div>
            {checkExpire(obj.expiry)}

        </div></a>
        
    })

    return (
        <>
             <p id="rowCount">Loading</p>
            {console.log("Item List " + itemlist)}
            {
            itemlist != ""
                    ? itemlist
                    : <div className="preLoader"><center><span class="material-icons">more_horiz</span><br /><span>Loading fridge Items</span></center></div>
            }
        </>
    )
}
            
export default Midbody;