import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as usersAPI from '../../utilities/users-api';
import * as foodAPI from '../../utilities/food-api';
import './FoodShowPage.css';




const FoodShowPage = () => {

    const [post, setPost] = useState(null)
    const [owner, setOwner] = useState(null)
    // const { id } = route.params

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


    return(

        <div style={{flexDirection: 'row', display: 'flex', padding: 100}}>
            {(post && owner) ? 
            <div style={{flexDirection: 'row', display: 'flex'}}> 
                <div>
                    <img src={post ? post.photoUrl : ""} alt='' style={{aspectRatio: 3/2, borderRadius: 25, width: 800}}/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 40, justifyContent: 'space-between'}}>
                    <h1 className='title'>{owner.businessName}</h1>
                    <p>{owner.address}</p>

                    <p>We're offering a chance to pick up soon-to-expire food items that would otherwise go to waste, and give it to those in need. These items are still fresh and safe to eat, and we're eager to get them into the hands of families who could use a little extra help.</p>
                    <p>{post.name}</p>
                    <p>{post.description}</p>

                    <div>
                        <p>{post.availability}</p>
                        <p>Tue, Feb 14</p>
                    </div>
                    <div>
                        <button>Claim Pickup</button>
                    </div>
                </div>
            </div>

            : 
            <div>
                Loading...
            </div>
            }
        </div>

        )

}

export default FoodShowPage 


