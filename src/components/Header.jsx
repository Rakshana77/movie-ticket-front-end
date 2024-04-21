import { AppBar, Autocomplete, IconButton, TextField, Toolbar } from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Box } from "@mui/system";
import { Tabs, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import { getallmovies } from "../api-helpers/api-helpers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminactions, useractions } from "../store/indexx";

const Header = () => {
  const dispatch = useDispatch();

  const isadminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isuserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getallmovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  const logout = (isadmin) => {
    dispatch(isadmin ? adminactions.logout() : useractions.logout());
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "green" }}>
      <Toolbar>
        <Box width={"20%"}>
          <IconButton LinkComponent={Link} to="/">
          <MovieFilterIcon />
          </IconButton>
        </Box>

        <Box width={"30%"} margin={"auto"}>
          <Autocomplete
            freeSolo
            options={movies && movies.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                label="Search across movies"
              />
            )}
          />
        </Box>

        <Box display={"flex"}>
          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/movies" label="Movies" />
            {!isadminLoggedIn && !isuserLoggedIn && (
              <>
                <Tab label="Admin" LinkComponent={Link} to="/admin" />
                <Tab label="Auth" LinkComponent={Link} to="/auth" />
              </>
            )}
            {isuserLoggedIn && (
              <>
                <Tab label="Profile" LinkComponent={Link} to="/user" />
                <Tab
                  onClick={() => logout(false)}
                  label="Logout"
                  LinkComponent={Link}
                  to="/"
                />
              </>
            )}
            {isadminLoggedIn && (
              <>
                <Tab label="add movie" LinkComponent={Link} to="/add" />
                <Tab label="profile" LinkComponent={Link} to="/user-admin" />
                <Tab
                  onClick={() => logout(true)}
                  label="Logout"
                  LinkComponent={Link}
                  to="/"
                />
              </>
            )}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
