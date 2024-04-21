import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getmoviedetails, newbooking } from "../../api-helpers/api-helpers";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
const Booking = () => {
  const [movie, setMovie] = useState();
  const [inputs, setInputs] = useState({ seatnumber: "", date: "" });
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    getmoviedetails(id)
      .then((res) => setMovie(res.movie))
      .catch((err) => console.log(err));
  }, [id]);
  const handlechange = (e) => {
    setInputs((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    newbooking({...inputs,movie:movie._id}.then((res)=>console.log(res))).catch(err=>console.log(err))
   
  };
  console.log(movie);
  return (
    <div>
      {movie && (
        <Fragment>
          <Typography
            padding={3}
            fontFamily={"fantasy"}
            variant="h4"
            textAlign={"center"}
          >
            book ticket of movie:{movie.title}
          </Typography>
          <Box display="flex" justifyContent={"center"}>
            <Box
              display="flex"
              justifyContent={"center"}
              flexDirection={"column"}
              paddingTop={3}
              width="50%"
              marginRight={"auto"}
            >
              <img
                width={"80%"}
                height={"300px"}
                src={movie.posterurl}
                alt={movie.title}
              />
              <Box width={"80%"} marginTop={3} padding={2}>
                <Typography paddingTop={2}>{movie.description}</Typography>
                <Typography fontWeight={"bold"} marginTop={1}>
                  releasedate:{new Date(movie.releasedate).toDateString()}
                </Typography>
              </Box>
            </Box>
            <Box width={"50%"} paddingTop={3}>
              <form onSubmit={handlesubmit}>
                <Box
                  padding={2}
                  margin={"auto"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <FormLabel>seatnumber</FormLabel>
                  <TextField
                    value={inputs.seatnumber}
                    onChange={handlechange}
                    name="seatnumber"
                    type="number"
                    margin="normal"
                    variant="standard"
                  />
                  <FormLabel>booking date</FormLabel>
                  <TextField
                    value={inputs.date}
                    onChange={handlechange}
                    name="seatnumber"
                    type="number"
                    margin="normal"
                    variant="standard"
                  />
                  <Button type="submit" sx={{ mt: 3 }}>
                    book now
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Fragment>
      )}
    </div>
  );
};

export default Booking;
