import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Reservation({reservation}) {
    const {firstName, lastName, time, restaurantId, id} = reservation;

    return (
      <Card sx={{ maxWidth: 345, backgroundColor: 'smokeWhite', border: "1px solid grey" }}>
        {/* <CardMedia
          component="img"
          alt={name}
          height="140"
          image=""
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {firstName} {lastName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {restaurantId}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Reservation Time: {time}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/reservations/${id}}`}>
            <Button  size="small">Reservation Details</Button>
          </Link>
          {/* <Button size="small">Make Reservation</Button> */}
        </CardActions>
      </Card>
    )
}

export default Reservation;