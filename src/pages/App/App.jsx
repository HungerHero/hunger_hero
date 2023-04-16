import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as foodsAPI from "../../utilities/food-api";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import HeroPostPage from "../HeroPostPage/HeroPostPage";
import HomePage from "../HomePage/HomePage";
import HeroPostsHistory from "../HeroPostsHistory/HeroPostsHistory";
import NavBar from "../../components/NavBar/NavBar";
import ProfilePage from "../ProfilePage/ProfilePage";
import Footer from "../../components/Footer/Footer";
import FoodShowPage from "../FoodShowPage/FoodShowPage";
import HeroLandingPage from "../HeroLandingPage/HeroLandingPage";
import HeroRequestPage from "../HeroRequestPage/HeroRequestPage";
import HungryRequestPage from "../HungryRequestPage/HungryRequestPage";
import SplashPage from "../SplashPage/SplashPage";
import AboutPage from "../AboutPage/AboutPage";
import ContactPage from "../ContactPage/ContactPage";
import HungryLandingPage from "../HungryLandingPage/HungryLandingPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [posts, setPosts] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  // API REQUEST ON COMPONENT MOUNT
  useEffect(function () {
    (async function () {
      // console.log("index fnt");
      // foodsAPI.getAll()
      const foodPosts = await foodsAPI.getAll();
      // console.log("THIS IS THE POSTS", foodPosts);
      setPosts(foodPosts);
    })();
  }, []);

  async function handleDeleteFood(id) {
    await foodsAPI.deleteFood(id);
    const newFoods = posts.filter((posts) => posts._id !== id);
    setPosts(newFoods);
    navigate("/hero/posts");
  }

  return (
    <main>
      {user ? (
        user.userType === "Hero" ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}\
              <Route
                path="/hero/create"
                element={<HeroPostPage user={user} />}
              />
              <Route path="/" element={<HeroLandingPage />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route
                path="/hero/posts"
                element={
                  <HeroPostsHistory
                    user={user}
                    posts={posts}
                    handleDeleteFood={handleDeleteFood}
                  />
                }
              />
              <Route
                path="/hero"
                element={
                  <HomePage user={user} posts={posts} setPosts={setPosts} navigate={navigate} />
                }
              />
              <Route path="/post/:id" element={<FoodShowPage />} />
              <Route path="/hero/posts/:id" element={<FoodShowPage />} />
              <Route
                path="/requests"
                element={<HeroRequestPage user={user} posts={posts}/>}
              />
              <Route path="/splash" element={<SplashPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HungryLandingPage />} />
              <Route
                  path="/hero"
                  element={
                    <HomePage user={user} posts={posts} setPosts={setPosts} navigate={navigate} />
                  }
              />
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route
                path="/requests"
                element={<HungryRequestPage user={user} navigate={navigate} posts={posts} />}
              />
            </Routes>
            <Footer />
          </>
        )
      ) : (
        <>
          {showSplash ? (
            <SplashPage setShowSplash={setShowSplash} showSplash={showSplash} />
          ) : (
            <AuthPage setUser={setUser} />
          )}
        </>
      )}
    </main>
  );
}
