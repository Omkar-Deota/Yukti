import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const StyledCard = styled(Card)({
  background: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
});

const cardsData = [
  {
    title: "Make Request",
    term: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit ullam. Fugit, velit!", 
    definition: "well meaning and kindly.",
  },
  {
    title: "Reschedule",
    term: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit ullam. Fugit, velit!",
    definition: "some other definition",
  },
  {
    title: "Completed Orders",
    term: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sit ullam. Fugit, velit!",
    definition: "yet another definition",
  },
];

export default function Services() {
  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.88)",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        minHeight: "20vh",
        
      }}

    >
        <h1 style={{color: "rgb(194 190 192)", marginLeft: "15px"}}>Our Services</h1>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginX: "20px",
            gap: "20px",
          }}
        >
          {cardsData.map((cardDetails, index) => (
            <StyledCard key={index} variant="outlined">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {cardDetails.title}
                </Typography>
                <Typography variant="h5" component="div">
                  {cardDetails.term}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  {cardDetails.definition}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </StyledCard>
          ))}
        </Box>
      </ThemeProvider>
    </div>
  );
}
