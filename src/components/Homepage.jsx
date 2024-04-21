import { Box, Button, Typography } from "@mui/material";
import Movieitem from "./Movies/Movieitem.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getallmovies } from "../api-helpers/api-helpers.js";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getallmovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  console.log(movies);
  return (
    <Box width="100%" heights="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" heights={"40vh"} padding={2}>
        <img
          src="https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg"
          alt="bramastra"
          width={"100%"}
          height={"100%"}
        />
      </Box>
      ;
      <Box padding={5} margin="auto">
        <Typography variant="h4" textAlign={"center"}>
          Latest releases
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width="80%"
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {movies &&
          movies.map((movie, index) => (
              <Movieitem
                  key={index}
              id={movie._id}
              title={movie.title}
              posterurl={movie.posterurl}
              releasedate={movie.releasedate}
            />
          ))}
      </Box>
      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "yellowgreen" }}
        >
          view all movies
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
