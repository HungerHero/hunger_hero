import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroPostsHistory.css';
import HeroHistoryCard from '../../components/HeroHistoryCard/HeroHistoryCard';

// add posts
export default function HeroPostsHistory({ user, handleDeleteFood, posts }) {
const [showPostForm, setShowPostForm] = useState(false);
console.log("ThisIsThePosts -*--> ", posts)
console.log('postHistory user -> ', user);

  return (
    <div>
      <h2 className='hero-history-page__title'>Your Posts</h2>
      <div className="create-post-field">
        <Link to="/hero/create">
          <div className="create-post-icon-nav">
            <i className="fa-solid fa-plus create-post-icon"></i>
          </div>
          <div className="create-post-nav">
            Create Post
          </div>
        </Link>
      </div>
        {posts.map(post => post.user === user._id ? (
          <>
            <HeroHistoryCard 
              id={post._id} 
              name={post.name} 
              quantity={post.quantity} 
              description={post.description} 
              condition={post.condition} 
              availableTime={post.availableTime} 
              availableDate={post.availableDate} 
              location={post.location} 
              phoneNumber={post.phoneNumber}
              photoUrl={post.photoUrl} 
              handleDeleteFood={handleDeleteFood} 
            />
          </>
        )
        : 
        <div>
        </div>
        )}
    </div>
  );
}