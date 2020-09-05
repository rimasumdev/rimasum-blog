import React, { useEffect, useState } from 'react';
import './Comments.css'
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  fonts: {
    fontWeight: "bold"
  },
  inline: {
    display: "inline"
  }
}));


const Comments = (props) => {
    const classes = useStyles();
    const {id,name,email,body} =props.comment;
        return (
        <div>
            
            <List className={classes.root}>
                <React.Fragment >
                    <ListItem key={id} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="avatar" src="https://source.unsplash.com/daily"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                        <Typography className={classes.fonts}>
                            {name}
                        </Typography>
                        }
                        secondary={
                        <>
                            <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                            >
                            {email}
                            </Typography>
                            {` - ${body}`}
                        </>
                        }
                    />
                    </ListItem>
                    <Divider />
                </React.Fragment>
            </List>
        </div>
    );
};

export default Comments;