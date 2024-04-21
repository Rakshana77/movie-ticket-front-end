// import axios from "axios";

// export const getallmovies = async () => {

//     const res = await axios.get("/movie").catch((err) => console.log(err));
//     if (res.status !== 200) {
//         return console.log("no data")
//     }

//     const data = await res.data;
//     return data;

// };
import axios from "axios";

export const getallmovies = async () => {
  try {
    const res = await axios.get("/movie");
    if (res.status !== 200) {
      console.error("Error fetching movies:", res.status);
      return null;
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    return null;
  }
};

export const senduserauthrequest = async (data, signup) => {
  try {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    });
    if (res.status !== 200 && res.status !== 201) {
      console.error("Error authenticating user:", res.status);
      return null;
    }
    return res.data;
  } catch (error) {
    console.error("Error authenticating user:", error.message);
    return null;
  }
};

// Similarly handle sendadminauthrequest and getmoviedetails functions

// export const senduserauthrequest = async (data, signup) => {
//     const res=await axios
//     .post(`/user/${signup ? "signup" : "login"}`,{
//         name:signup? data.name:"",
//             email: data.email,
//                 password: data.password,
//     }).catch(err => console.log(err));
//     if (res.status !== 200 && res.status !== 201) {
//         console.log("error occurred")
//     }
//     const resdata = await res.data;
//     return resdata;
  
// };
export const sendadminauthrequest = async (data) => {
    const res = await axios
        .post("/admin/login", {
            email: data.email,
            password: data.password,
        }).catch(err => console.log(err));
    if (res.status !== 200 && res.status !== 201) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const getmoviedetails = async (id) => {
    const res = await axios.get(`/movies/${id}`).catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const newbooking = async (data) => {
  const res = await axios.post('/booking', {
    movie: data.movie,
    seatnumber: data.seatnumber,
    date: data.date,
    user:localStorage.getitem("userid")
    }).catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const getuserbooking = async () => {
  const id = localStorage.getitem("userid");
  const res=await axios.get(`/user/bookings/${id}`)
    .catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const deletebooking = async (id) => {
  
  const res=await axios.delete(`/booking/${id}`)
    .catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const getuserdetails = async () => {
  
 const id = localStorage.getitem("userid");
  const res=await axios.get(`/user/${id}`)
    .catch((err) => console.log(err));
    if (res.status !== 200) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const addmoviedetails= async (data) => {
  
  const res = await axios.post('/movie', {
    title: data.title,
    description: data.description,
    releasedate: data.releasedate,
    posterurl: data.posterurl,
    featured: data.featured,
    admin: localStorage.getItem("adminid"),
  },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        
      },
    }
  )
  
    .catch((err) => console.log(err));
    if (res.status !== 201) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
};
export const getadminbyid = async () => {
  const adminid = localStorage.getItem("adminid");
  const res = axios.get(`/admin/${adminid}`).catch((err) => console.log(err));
   if (res.status !== 201) {
        console.log("error occurred")
    }
    const resdata = await res.data;
    return resdata;
}
  