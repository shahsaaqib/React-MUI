import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

export const MuiCard = () => {
  return (
    <Box width="300px" padding={9} paddingLeft={60}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            <IntegrationInstructionsIcon fontSize="large" color="info" />
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
