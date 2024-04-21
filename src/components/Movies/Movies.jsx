
import Movieitem from "./Movieitem.jsx";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getallmovies } from "../../api-helpers/api-helpers.js";


const movies = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getallmovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography
        variant="h4"
        padding={4}
        width="40%"
        textAlign="center"
        bgcolor={"red"}
        color="white"
      >
        all movies
      </Typography>
      <Box
        width={"100%"}
        margin="auto"
        marginTop={5}
        display={"flex"}
        justifyContent="flex-start"
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
    </Box>
  );
};

export default movies;
