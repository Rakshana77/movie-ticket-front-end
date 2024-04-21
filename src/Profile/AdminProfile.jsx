import { Fragment, useEffect, useState } from "react";
import { getadminbyid
} from "../api-helpers/api-helpers.js";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  Box,
  
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const AdminProfile = () => {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    getadminbyid
      .then((res) => setAdmin(res.admin))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box width={"100%"} display="flex">
      <Fragment>
        {" "}
        {admin && (
          <Box
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"30%"}
            padding={3}
          >
            <AccountCircleIcon
              sx={{ fontSize: "10rem", textAlign: "center", ml: 3 }}
            />

            <Typography
              margin={1}
              padding={1}
              width={"auto"}
              textAlign={"center"}
              border={"1px solid #ccc"}
              borderRadius={6}
            >
              email:{admin.email}
            </Typography>
          </Box>
        )}
        {admin && admin.addedmovies.length > 0 && (
          <Box width={"70%"} display={"flex"} flexDirection={"column"}>
            <Typography
              variant="h3"
              fontFamily={"vardana"}
              textAlign={"center "}
              padding={2}
            >
              Added movies
            </Typography>
            <Box
              margin={"auto"}
              display={"flex"}
              flexDirection={"column"}
              width={"80%"}
            >
              <List>
                {admin.addedmovies.map((movie, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      textAlign: "center",
                      margin: 1,
                    }}
                  >
                    <ListItemText
                      sx={{ margin: 1, width: "auto", textAlign: "left" }}
                    >
                      Movie: {movie.title}
                    </ListItemText>
                    
                   
                  
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        )}
      </Fragment>
    </Box>
  );
};

export default AdminProfile;
