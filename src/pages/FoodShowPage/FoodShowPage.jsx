import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api';
import * as foodAPI from '../../utilities/food-api';
import './FoodShowPage.css';


const FoodShowPage = () => {

    const [post, setPost] = useState(null)
    const [owner, setOwner] = useState(null)

    const { id } = useParams()

    console.log(id, "PARAMS")


    const getUser = async () => {
        const owner = await usersAPI.fetchUser(post.user)
            setOwner(owner)

    }

    useEffect(() => {

        (async function() {  
            // usersAPI.getAll()
            const food = await foodAPI.getFood(id)
            console.log("THIS IS THE FOOD", food)
            setPost(food)

        })();
    }, []) 

    useEffect(() => {
        getUser()
    }, [post])

    
    // const listItems = post.condition.map((el) => 
    //     <li>{el}</li>
    // )





    return(
    <div className="body">

        { post && owner ? 
        // <div className='showCard'>
            <div className="showCardContentCont">
            <img className="showImg" src={post.photoUrl} alt="picture of food"/>
                <div className="showCardContent">
                    <h1 className="cardTitle">Post Details</h1>
                    <h1>{owner.businessName}'s Post</h1>
                    <h1>{post.name}</h1>
                    <h1>{post.quantity}</h1>
                    <h1>{post.description}</h1>
                    {/* <ul>
                        {listItems}
                    </ul> */}
                    <h1><i className="fa-regular fa-clock"></i>{post.availableTime}</h1>
                    <h1><i className="fa-regular fa-calendar-days"></i>{post.availableDate}</h1>
                    <h1>{post.location}</h1>
                </div>
            </div>
            /* <div className="showCardConactCont">
            <img className="showImg" src={owner.photoUrl} alt="picture of owner"/>
                <div className="showCardContact">
                    <h1 className="cardTitle">Contact Information</h1>
                    <h1>{owner.email}</h1>
                    <h1>{owner.businessName}</h1>
                    <h1>{owner.address}</h1>
                    <h1>{owner.city}</h1>
                    <h1>{owner.state}</h1>
                    <h1>{owner.zipCode}</h1>
                </div>
            </div> */
        // </div>
        
        
        : <h1>NO OWNER AND POST</h1>
        
    
    }
        {/* <h1>{post.name}</h1> */}

        {/* <h1>{post.quantity}</h1>
        <h1>{post.description}</h1> */}
        {/* <h1>{postOwner.email}</h1> */}

    </div>
    ) 

}

export default FoodShowPage 