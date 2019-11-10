import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Grid from "@material-ui/core/Grid";
import Data from "./blogInfo.json";
import { Button } from "@material-ui/core";
import { mediaStyle, blogCardStyles } from "./blogs.css";

let data = JSON.stringify(Data);
let blogData = JSON.parse(data);

const useStyles = makeStyles(mediaStyle);

function Media(props) {
  const { loading = false } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.blogtitle}
        titleTypographyProps={{
          style: { fontFamily: "Raleway", fontSize: 15, fontWeight: "bold" }
        }}
      />
      {loading ? (
        <Skeleton variant="rect" className={classes.media} />
      ) : (
        <CardMedia className={classes.media} image={props.imgsrc} />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={6} />
            <Skeleton height={6} width="100%" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              className={classes.content}
            >
              {props.blogsummary}
            </Typography>
            <Button href={props.bloglink} className={classes.button}>
              Read More
            </Button>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
}

export default function Blog(props) {
  const classes = makeStyles({
    blogCardStyles
  })();
  return (
    <div style={{ padding: 0 }}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justify="center"
        margin="auto"
        padding={0}
      >
        {blogData.map(post => (
          <Grid key={post.id} item xs={12} sm={6} md={4} padding={0}>
            <Media
              imgsrc={post.image_link}
              blogtitle={post.title}
              blogsummary={post.summary}
              bloglink={post.article_link}
              className={classes.media}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool
};

// export default Blog;
