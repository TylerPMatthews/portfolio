import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import projectImage1 from "../images/meme.png";
import projectImage2 from "../images/construction.jpg";
import projectImage3 from "../images/yeezy.png";
import projectImage4 from '../images/imonline.png'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "IMONLINE",
    description: `Full stack social media application.--- Easy sign in : USERNAME: test  PASSWORD: test ---  Site may take a few seconds on initial load due to my back-end being hosted on free Heroku`,
    image: projectImage4,
    github: "https://github.com/users/TylerPMatthews/projects/4",
    live: "https://im-online-frontend.vercel.app",
  },
  {
    name: "Redux Yeezy Shoes (CURRENTLY MOBILE ONLY)",
    description: `Yeezy Shoes is a full-stack project. The project is a store which a user can purchase Yeezy shoes. React and Redux are being used to run the front-end. Node and Postgres are maintaining the back-end. Site may take a few seconds on initial load due to my back-end being hosted on free Heroku`,
    image: projectImage3,
    github: "https://github.com/users/TylerPMatthews/projects/3",
    live: "https://yeezyshoesfrontend.vercel.app",
  },
  {
    name: "Meme Weather",
    description: `Meme Weather is my first full-stack project. This project
    uses two APIs, one for getting weather imformation and another (created by me) displaying the meme. I am using
    React for my front-end and Node for my backend. Site may take a few seconds on initial load due to my back-end being hosted on free Heroku`,
    image: projectImage1,
    github: "https://github.com/users/TylerPMatthews/projects/2",
    live: "https://meme-weather-frontend.vercel.app",
  },

  {
    name: "Coming soon ...",
    description: `More projects coming soon ...`,
    image: projectImage2,
    github: "https://github.com/TylerPMatthews/",
    live: "",
  },
  // {
  //   name: "Project 5",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project5,
  //   github: "https://github.com/TylerPMatthews/MemeWeatherFrontend.git",
  //   live: "",
  //  about:""
  // },
  // {
  //   name: "Project 6",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project6,
  //   github: "https://github.com/TylerPMatthews/MemeWeatherFrontend.git",
  //   live: "",
  //  about:""
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.github}
                >
                  See Code
                </Button>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.live}
                >
                  Live Website
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
