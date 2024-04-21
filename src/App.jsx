import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Admin from "./components/Admin/Admin";
import Movies from "./components/Movies/Movies";
import Auth from "./components/Auth/Auth"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminactions, useractions } from "./store/indexx.js";
import Booking from "./components/Bookings/Booking";
import UserProfile from "./Profile/UserProfile.jsx";
import Addmovie from "./components/Movies/Addmovie";
import AdminProfile from "./Profile/AdminProfile.jsx";



function App() {
  const dispatch = useDispatch();
  const isadminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isuserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isadminloggedin", isadminLoggedIn);
  console.log("isuserloggedin", isuserLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      dispatch(useractions.login())
    } else if (localStorage.getItem("adminid")) {
      dispatch(adminactions.login());
      
    }
  })
  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<Homepage />}/>
           <Route path="/admin" element={<Admin />}/>
          <Route path="/movies" element={<Movies />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/add" element={<Addmovie />} />
             <Route path="/user-admin" element={<AdminProfile/>} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
     </section> 
    </div>
  )
}

export default App;
