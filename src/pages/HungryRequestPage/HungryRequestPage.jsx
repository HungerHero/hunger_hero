import { useState, useEffect } from 'react';
// import { post } from '../../routes/api/users';
import * as requestsAPI from '../../utilities/request-api';

export default function HungryRequestPage( { user, posts } ) {
    const [requests, setRequests] = useState([]);
    const [requestUser, setRequestUser] = useState([]);

    useEffect(function() {
        (async function() {
            try {
                const requests = await requestsAPI.getAll()
                console.log('requests', requests)
                const userIds = requests.map((request) => request.requester)
                console.log(userIds)
                const users = await requestsAPI.getRequesterUser(userIds)
                console.log(users, 'users:')
                // const user = await Promise.all(requests.map(request => requestsAPI.getRequesterUser(request.requester)));
                // setRequests(requests)
                // setRequestUser(user)
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
            {requests.length !== 0 ?
                requests.map((r, idx) => {
                    console.log(r.requester)
                    return (
                    // <PostCard key={idx} name={p.name} quantity={p.quantity} description={p.description} availableTime={p.availableTime} availableDate={p.availableDate} location={p.location} photoUrl={p.photoUrl} user={p.user} curUser={user} idx={idx} post={p}/>
                    <>
                        <h1>{r.status}</h1>
                        <h1>{requestUser[idx].name}</h1>
                        <h1>{user.name}</h1>
                        {/* <h1>{posts.name}</h1> */}
                    </>
                )
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