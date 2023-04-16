import * as foodsAPI from '../../utilities/food-api';
import * as pickupAPI from '../../utilities/pickup-api';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import PostCard from '../../components/PostCard/PostCard';
import './HomePage.css'


export default function HomePage({ user, navigate, posts, setPosts }) {
  
  return (
    <div className='page-container'>
    <div className="banner">
      <h1>Available Food</h1>
      <p>Select from what's available in your area</p>
    </div>
    <div className="filter-container">
      <h3>Filter:</h3>
      <select className='filter' id="date-select">
        <option value="" disabled selected>Date</option>
        <option value="today">Today</option>
        <option value="tomorrow">Tomorrow</option>
      </select>
      <select className='filter' id="time-select">
        <option value="" disabled selected>Time</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="evening">Evening</option>
      </select>
      <select className='filter' id="type-select">
        <option value="" disabled selected>Type</option>
        <option value="FreshProduce">Fresh Produce</option>
        <option value="Prepared Meals">Prepared Meals</option>
        <option value="Mixed">Mixed</option>
        <option value="ShelfStable">Shelf Stable</option>
        <option value="CannedFood">Canned Food</option>
      </select>
      <input className='filter' type="text" id="zipcode-input" placeholder="Zip Code" />
      <button className='filter-btn'>Apply</button>
    </div>
    <hr />
    <div className="posts-container">
      {posts.length !== 0 ?
       posts.map((p, idx) => {
        return (
          <PostCard key={idx} name={p.name} quantity={p.quantity} description={p.description} availableTime={p.availableTime} availableDate={p.availableDate} location={p.location} photoUrl={p.photoUrl} user={p.user} curUser={user} idx={idx} post={p} />
        )
      })
      :
      <div className="home-info">
            <h1>No Food Posts Yet</h1>
            <h2>Be the first to post!</h2>
      </div>
    }
    </div>
  </div>
  

  );
} 

// <div>
//       <div  className="md:flex-auto home_pg flex-wrap">
//         {posts.length !== 0 ?
//          posts.map((post, i) => {
//           return (
//             <div key={i} className="mb-4 w-1/3 h-2/3">
//               <div className="bck-clr max-w-sm rounded overflow-hidden shadow-lg text-red-800">
//                 <div className='imgDiv'>
//                     <img className="postImg" src={post.image ? post.image : post.photoUrl} alt="Food"></img>
//                 </div>
//                 <div className="px-6 py-4">
//                     <div className="font-bold text-xl mb-2">{post.name}</div>
//                     <p className="text-gray-700 text-base">
//                         {post.description}
//                     </p>
//                 </div>
//                 <div className="px-6 pt-4 pb-2">
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Available: {post.availability}</span>
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Quantity: {post.quantity}</span>
//                     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Location: {post.location}</span>
//                 </div>
//                 <div>
//                   <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                   Request
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )
//         })
//         :
//         <div className="flex justify-center">
//             <div className="flex flex-col justify-center items-center">
//               <h1 className="text-2xl text-gray-700">No Food Posts Yet</h1>
//               <h1 className="text-2xl text-gray-700">Be the first to post!</h1>
//             </div>
//           </div>
//       }
//       </div>
//     </div>