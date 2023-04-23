import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api';
import * as foodAPI from '../../utilities/food-api';
import './FoodShowPage.css';


const FoodShowPage =  ( props ) => {
    const { user } = props
    const [post, setPost] = useState(null)
    // const [owner, setOwner] = useState(null)
    const { id } = useParams()

    // console.log(id, "PARAMS")
    // const getUser = async () => {
    //     const owner = await usersAPI.fetchUser(post.user)
    //         setOwner(owner)
    //   console.log("THIS IS THE OWNER", owner);
    // }

    useEffect(() => {
        (async function() {  
            // usersAPI.getAll()
            const food = await foodAPI.getFood(id)
            console.log("THIS IS THE FOOD", food)
            setPost(food)
        })();
    }, []) 

    // useEffect(() => {
    //     getUser()
    // }, [post])

    return(
    <div className="body">
      {post ? (
      <div className='showCard'>
        <div className="showCardContentCont">
          <img className="showImg" src={post.photoUrl}  alt="picture of food"/>
            <div className="showCardContent">
              <h1 className="cardTitle">Post Details</h1>
              <h1>{post.name}</h1>
              <h1>{post.quantity}</h1>
              <h1>{post.description}</h1>
              <h1><i className="fa-regular fa-clock"></i>{post.availableTime}</h1>
              <h1><i className="fa-regular fa-calendar-days"></i>{post.availableDate}</h1>
              <h1>{post.location}</h1>
          </div>
        </div>
            {/* <div className="showCardContactCont">
            <img className="showImg" src={user.photoUrl} alt="picture of user"/>
              <div className="showCardContact">
                <h1 className="cardTitle">Contact Information</h1>
                <h1>{user.email}</h1>
                <h1>{user.businessName}</h1>
                <h1>{user.address}</h1>
                <h1>{user.city}</h1>
                <h1>{user.state}</h1>
                <h1>{user.zipCode}</h1>
              </div>
            </div> */}
        </div>
        ) : (
        <h1>Loading...</h1>
        )}
    </div>
    );
  };
export default FoodShowPage;