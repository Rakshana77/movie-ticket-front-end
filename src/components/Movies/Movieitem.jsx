import {Card,CardContent,CardActions,Typography,Button} from "@mui/material"
import { Link } from "react-router-dom";

const Movieitem = ({title,releasedate,posterurl,id}) => {
    return (
      <Card sx={{
        margin:2,
        Width: 250, height: 320, borderRadius: 5, ":hover": {
         boxShadow:"10px 10px 20px #ccc"
        },
      }}
      >
      <img src={posterurl}
                alt={title}
                width="100%"
            height={"50%"}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
          <Typography variant="body2" color="text.secondary">
            
        {new Date(releasedate).toDateString}
        </Typography>
      </CardContent>
      <CardActions>
          <Button LinkComponent={Link} to={`/booking/${id}`} sx={{ margin:"auto" }} size="small">book</Button>
    
      </CardActions>
    </Card>
    )
};

export default Movieitem;