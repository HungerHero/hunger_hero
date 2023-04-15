import { useState, useEffect } from 'react';
// import { post } from '../../routes/api/users';
import PostCard from '../../components/PostCard/PostCard';
import * as requestsAPI from '../../utilities/request-api';

export default function HungryRequestPage( { user, posts } ) {
    const [requests, setRequests] = useState([]);
    const [requestUser, setRequestUser] = useState([]);
    const requestPosts = requests.map((r) => posts.find((p) => p._id === r.postInfo))
    console.log('requestPosts -->', requestPosts)
    console.log('requests !!!!!!!!!', requests)
    console.log('user -->', user)
    useEffect(function() {
        (async function() {
            try {
                const requests = await requestsAPI.getAll()
                setRequests(requests)
                const userIds = requests.map((request) => request.requester)
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
            <h1>Hungry Request</h1>
            <div>
            {requestPosts.length !== 0 && requests.requester === user._id ?
                requestPosts.map((r, idx) => {
                    // {if(requests.requester === user._id)
                    return (
                    // <PostCard key={idx} name={r.name} quantity={r.quantity} description={r.description} availableTime={r.availableTime} availableDate={r.availableDate} location={r.location} photoUrl={r.photoUrl} user={r.user} curUser={user} idx={idx} post={r}/>)
                    <>
                        <h1>{requests[0].status}</h1>
                        <h1>{requestUser.name}</h1>
                        <h1>{user.name}</h1>
                        {/* <h1>{r.postInfo}</h1> */}
                    </>
                )})
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