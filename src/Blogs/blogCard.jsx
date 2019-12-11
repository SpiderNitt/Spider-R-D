import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Data from "./blogInfo.json";
import { albumStyles } from "./blogs.css";

const myStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 6)
  },
  root: {
    fontFamily: "raleway",
    fontWeight: "bold",
    flexGrow: 1
  },
  default: {
    fontFamily: "raleway"
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  content: {
    background: "#E2E2E2",
    borderRadius: 10,
    opacity: 1
  },
  avatar: {
    margin: 10
  },
  member: {
    padding: 10
  },
  dialog: {
    background: "#0D132A",
    color: "white",
    borderRadius: 0
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  profiles: {
    color: "black"
  },
  logos: {
    padding: 5
  }
}));

let data = JSON.stringify(Data);
let blogData = JSON.parse(data);

const useStyles = makeStyles(albumStyles);

function Album(props) {
  const classes = useStyles();

  // const { loading = false } = props;

  // const [open, setOpen] = React.useState(false);
  // const [scroll, setScroll] = React.useState("paper");

  // const handleClickOpen = scrollType => () => {
  //   setOpen(true);
  //   setScroll(scrollType);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.notthumb}>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.root}
            >
              {props.blogTitle}
            </Typography>
            <div className={classes.imagediv}>
              <CardMedia
                className={classes.cardMedia}
                image={props.imgsrc}
                title="Image title"
              />
            </div>
            <div>
              <p>{props.blogDescription}</p>
            </div>
          </CardContent>
          <CardActions>
            <Button href={props.blogLink}>View More</Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default function ProjectItems() {
  const classes = myStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              className={classes.root}
              gutterBottom
            >
              Blogs
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {blogData.map(post => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Album
                  blogId={post.id}
                  blogTitle={post.title}
                  blogDescription={post.summary}
                  imgsrc={post.image_link}
                  blogLink={post.article_link}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
