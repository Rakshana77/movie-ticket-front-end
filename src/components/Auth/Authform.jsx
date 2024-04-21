import {
  Box,
  Dialog,
  FormLabel,
  TextField,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";

const labelstyle = { mt: 1, mb: 1 };
const Authform = ({onSubmited,isadmin}) => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [issignup, setIssignup] = useState(false);
    const handleChange = (e) => {
        setInputs((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        onSubmited({inputs,signup:isadmin?false:issignup});
       
    };
  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ m1: "auto", padding: 1 }}>
        <IconButton LinkComponent={Link} to="/">
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
      {issignup?"Signup":"Login"}
      </Typography>
      <form onSubmit={handlesubmit}>
        <Box
          padding={6}
          display={"flex"}
          justifycontent={"center"}
          flexDirection={"column"}
          width={400}
          margin={"auto"}
          alignContent={"center"}
        >
          {!isadmin && issignup && (
            <>
              {" "}
              <FormLabel sx={labelstyle}>Name</FormLabel>
                          <TextField
                              value={inputs.name}
                              onChange={handleChange}
                margin="normal"
                variant="standard"
                type={"name"}
                name="name"
              />
            </>
          )}
          <FormLabel sx={labelstyle}>Email</FormLabel>
                  <TextField
                      value={inputs.email}
                              onChange={handleChange}
            margin="normal"
            variant="standard"
            type={"email"}
            name="email"
          />
          <FormLabel sx={labelstyle}>Password</FormLabel>
                  <TextField
                      value={inputs.password}
                              onChange={handleChange}
            margin="normal"
            variant="standard"
            type={"password"}
            name="password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "blue", color: "white" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {issignup?"Signup":"Login"}
          </Button>
         { !isadmin &&(<Button
            onClick={() => setIssignup(!issignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            fullWidth
          >
            switch to {issignup ? "Login" : "signup"}
          </Button>)}
        </Box>
      </form>
    </Dialog>
  );
};
export default Authform;
