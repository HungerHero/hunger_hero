import { useState, useEffect } from 'react';
// import { post } from '../../routes/api/users';
import HeroHistoryCard from '../../components/HeroHistoryCard/HeroHistoryCard';
import * as requestsAPI from '../../utilities/request-api';
import './HungryRequestPage.css'

export default function HungryRequestPage( { user, posts } ) {
    const [requests, setRequests] = useState([]);
    const [requestUser, setRequestUser] = useState([]);
    const [userId, setUserId] = useState([]);
    const requestPosts = requests.map((r) => posts.find((p) => p._id === r.postInfo))
    console.log('requests -->', requests)
    console.log('requestPosts -->', requestPosts)
    console.log('requests !!!!!!!!!', requests)
    console.log('user -->', user)
    useEffect(function() {
        (async function() {
            try {
                const requests = await requestsAPI.getAll()
                setRequests(requests)
                const userIds = requests.map((request) => request.requester)
                setUserId(userIds)
                const reqUser = await requestsAPI.getRequesterUser(userIds)
                setRequestUser(reqUser)
            }
            catch {
                console.log('render request error')
            }
        })();
        // console.log("THIS IS THE USER", user)
    }, [])

    // useEffect(() => {
    //   console.log(posts)
    // }, [posts])

    return (
        <>
            <div className="hungry_request_title">
              <h1>Scheduled Pickups</h1>
            </div>
            <div>
            {requestPosts.length !== 0 ?
                requestPosts.map((r, idx) => {
                    {console.log (userId, '< requester', user._id, '< user id')}
                    // {if(requests.requester === user._id)
                    return (
                    <HeroHistoryCard id={r._id} key={idx} name={r.name} quantity={r.quantity} description={r.description} availableTime={r.availableTime} availableDate={r.availableDate} location={r.location} photoUrl={r.photoUrl} user={r.user} curUser={user} idx={idx} post={r}/>)

                    // <>
                    //     <h1>{r.status}</h1>
                    //     <h1>{requestUser.name}</h1>
                    //     <h1>{user.name}</h1>
                    //     <h1>{r.postInfo}</h1>
                    // </>
            })
            :
            <div>
                    <h1>No Food Posts Yet</h1>
                    <h2>Be the first to post!</h2>
            </div>
            }
            </div>
        </>
    )
}