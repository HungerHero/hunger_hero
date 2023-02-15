import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HeroPostPage from '../HeroPostPage/HeroPostPage';
import HeroHomePage from '../HeroHomePage/HeroHomePage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import Footer from '../../components/Footer/Footer';
import HeroLandingPage from '../HeroLandingPage/HeroLandingPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main style={{backgroundColor: "#F3F3F3"}}>
      { user ?
      user.userType === 'Hero' ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}\
              <Route path="/" element={<HeroLandingPage />}/>
              <Route path="/hero" element={<HeroHomePage user={user}/>}/>
              <Route path="/hero/create" element={<HeroPostPage />} />
              <Route path="/profile" element={<ProfilePage user={user}/>}/>
            </Routes>
            <Footer />
          </>
          :
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              {/* <Route path="/hungry" element={<HungryHomePage />} /> */}
            </Routes>
            <Footer />
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
