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
import AndroidIcon from "@material-ui/icons/Android";
import PublicIcon from "@material-ui/icons/Public";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MemoryIcon from "@material-ui/icons/Memory";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Details from "./projectmembersV2.json";
import { albumStyles } from "./projects.css";

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
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
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

let Projects = JSON.stringify(Details);
let projectData = JSON.parse(Projects);

const useStyles = makeStyles(albumStyles);

function Album(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.imagediv}>
          <CardMedia
            className={classes.cardMedia}
            image={props.imgsrc}
            title="Image title"
          />
          <div className={classes.overlay}></div>
          <div className={classes.desclogo}>
            {// eslint-disable-next-line
            props.projectProfiles.map(send => {
              if (send === "webdev") {
                return <AndroidIcon className={classes.icons} />;
              }
              if (send === "appdev") {
                return <PublicIcon className={classes.icons} />;
              }
              if (send === "tronix") {
                return <MemoryIcon className={classes.icons} />;
              }
              if (send === "algos") {
                return <AccountTreeIcon className={classes.icons} />;
              }
            })}
          </div>
        </div>

        <div className={classes.notthumb}>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.root}
            >
              {props.projectTitle}
            </Typography>
            <Typography noWrap="true" className={classes.default}>
              {props.projectDescription}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              className={classes.root}
              onClick={handleClickOpen("paper")}
            >
              View Project
            </Button>
          </CardActions>
        </div>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
      >
        <DialogTitle className={classes.dialog} id="scroll-dialog-title">
          {props.projectTitle}
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          className={classes.content}
        >
          <DialogContentText className={classes.default}>
            {props.projectDescription}
            <br />
            <br />
            <br />
            <div className={classes.rootexp}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.default}>
                    Project Members
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container justify="center" alignItems="center">
                    {props.projectMembers.map(send =>
                      // eslint-disable-next-line
                      props.spiderMembers.map(key => {
                        var link;
                        if (send === key.Name) {
                          link = key.Photo;
                          return (
                            <div className={classes.member}>
                              <center>
                                <Avatar
                                  alt="Member"
                                  src={link}
                                  className={classes.bigAvatar}
                                />
                                <typography className={classes.root}>
                                  {send}
                                </typography>
                              </center>
                            </div>
                          );
                        }
                      })
                    )}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.default}>
                    Project Media
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.images}>
                    <center>
                      {props.projectImages.map(send => {
                        return (
                          <img
                            src={send}
                            className={classes.pics}
                            alt="project by Spider"
                          />
                        );
                      })}

                      <video width="65%" controls className={classes.videos}>
                        <source src={props.projectVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </center>{" "}
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </DialogContentText>
          <CardMedia className={classes.media} image={props.imgsrc} />
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Button
            onClick={handleClose}
            color="primary"
            className={classes.dialog}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
              Projects
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <div className={classes.logos}>
                    <Fab className={classes.profiles} disabled="true">
                      <AndroidIcon className={classes.profiles} />
                    </Fab>
                    <center>
                      <typography className={classes.default}>
                        App Dev
                      </typography>
                    </center>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.logos}>
                    <Fab className={classes.profiles} disabled="true">
                      <PublicIcon className={classes.profiles} />
                    </Fab>
                    <center>
                      <typography className={classes.default}>
                        Web Dev
                      </typography>
                    </center>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.logos}>
                    <Fab className={classes.profiles} disabled="true">
                      <MemoryIcon className={classes.profiles} />
                    </Fab>
                    <center>
                      <typography className={classes.default}>
                        Tronix
                      </typography>
                    </center>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.logos}>
                    <Fab className={classes.profiles} disabled="true">
                      <AccountTreeIcon className={classes.profiles} />
                    </Fab>
                    <center>
                      <typography className={classes.default}>Algos</typography>
                    </center>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projectData.projects.map(post => (
              <Grid item xs={12} sm={6} md={4}>
                <Album
                  projectId={post.id}
                  projectTitle={post.project_name}
                  projectDescription={post.project_description}
                  projectMembers={post.members}
                  spiderMembers={projectData.members}
                  imgsrc={post.image_link}
                  projectImages={post.desc_images}
                  projectVideo={post.desc_video}
                  projectProfiles={post.profiles}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
