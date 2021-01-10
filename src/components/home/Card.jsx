import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 40,
    boxShadow: "none",
    background: "#f4f4f4",
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.img} />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h5" className="loc" style={{color:'#FF6D00'}}>
            {props.loc}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" className="card-title">
            {props.title}
          </Typography>
          <Typography variant="body2" component="p" className="card-desc">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
