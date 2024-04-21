import { Fragment, useEffect, useState } from "react";
import { deletebooking, getuserbooking, getuserdetails } from "../api-helpers/api-helpers.js";
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Box, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";

const UserProfile = () => {
  const [bookings, setBookings] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    getuserbooking()
      .then((res) =>setBookings(res.bookings))
      .catch((err) => console.log(err));
    getuserdetails().then((res) =>setUser(res.user)).catch((err)=>console.log(err))
  }, []);
  const handleDelete = (id) => {
  deletebooking(id).then((res)=>console.log(res)).catch((err)=>console.log(err))
}
  return (
    <Box width={"100%"} display="flex">
    
        <Fragment>
        { " "}
        {user&& (<Box
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"30%"}
          padding={3}
        >
          <AccountCircleIcon sx={{ fontSize: "10rem", textAlign: "center", ml: 3 }} />
          <Typography
            padding={1}
            width={"auto"}
            textAlign={"center"}
            border={"1px solid #ccc"}
            borderRadius={6}
          >
            name:{user.name}
          </Typography>
          <Typography
            margin={1}
            padding={1}
            width={"auto"}
            textAlign={"center"}
            border={"1px solid #ccc"}
            borderRadius={6}
          >
            email:{user.email}
          </Typography>
        </Box>)}
          {bookings &&(<Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography variant="h3" fontFamily={"vardana"} textAlign={"center "} padding={2}>Bookings</Typography>
            <Box margin={"auto"} display={"flex"} flexDirection={"column"} width={"80%"}>
             <List>
  {bookings.map((booking, index) => (
    <ListItem key={index}  sx={{ bgcolor: "white", color: "black", textAlign: "center", margin: 1 }}>
      <ListItemText sx={{ margin: 1, width: "auto", textAlign: "left" }}>
        Movie: {booking.movie.title}
      </ListItemText>
      <ListItemText sx={{ margin: 1, width: "auto", textAlign: "left" }}>
        Seat Number: {booking.movie.seatnumber}
      </ListItemText>
      <IconButton color="error" onClick={() => handleDelete(booking._id)}> 
        <DeleteIcon /> 
      </IconButton>
    </ListItem>
  ))}
</List>

            </Box>
          </Box>)}
        </Fragment>
     
    </Box>
  );
};

export default UserProfile;
