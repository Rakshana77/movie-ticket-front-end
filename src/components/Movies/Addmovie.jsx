import { Box, FormLabel, Typography,TextField, Button, Checkbox } from "@mui/material"
import { useState } from "react"
import { addmovie } from "../../../../movie-ticket/controllers/movie-controller";


const Addmovie = () => {
    const [inputs, setInputs] = useState({ title: "", description: "", posterurl: "", releasedate: "", featured: false });
    const handlechange = (e) => {
        setInputs((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value, }));
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addmovie({inputs}).then((res)=>console.log(res)).catch((err)=>console.log(err))
    };
  return (
      <div>
          <form onSubmit={handlesubmit}>
              <Box width={"50%"} padding={10} margin={"auto"} display={"flex"} flexDirection={"column"} boxShadow={"10px 10px 20px #ccc"}>
                  <Typography
                      textAlign={"center"} variant="h5" fontFamily={"verdana"}>Add movie</Typography>
                  <FormLabel  sx={{mt:1}}>Title</FormLabel>
                  <TextField value={inputs.title} onChange={handlechange} name="title" fontFamily="verdana" margin="normal" />
                  <FormLabel sx={{mt:1}}>description</FormLabel>
                  <TextField value={inputs.description} onChange={handlechange} name="description" fontFamily="standard" margin="normal" />
                  
                  <FormLabel sx={{mt:1}}>posterurl</FormLabel>
                  <TextField value={inputs.posterurl} onChange={handlechange} name="posterurl" fontFamily="standard" margin="normal" />
                  <FormLabel sx={{mt:1}}>releasedate</FormLabel>
                  <TextField type="date" value={inputs.releasedate} onChange={handlechange} name="releasedate" fontFamily="standard" margin="normal" />
                
                  <Button>Add</Button>
              </Box>
              <FormLabel>featured</FormLabel>
              <Checkbox name="featured" checked={inputs.featured} onClick={(e)=>setInputs((prevstate)=>({...prevstate,featured:e.target.value}))} sx={{ mr: "auto" }} />
              <Button type="submit" variant="contained " sx={{
                  width: "30%",
                  margin: "auto",
                  bgcolor: "#2b2d42", ":hover": {
                  bgcolor:"#121217"
              },}}>Add new movie</Button>
          </form>
    </div>
  )
}

export default Addmovie