import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: "tomato tomato",
    },
    inline: {
        display: 'inline',
        color:"tan",
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
}));

export default function GitHubUser() {
    const userName = 'Schendrix';
    const [repos, setRepos] = useState([]);

    const classes = useStyles();

    useEffect( () => {
        fetch('https://api.github.com/users/' + userName + '/repos?sort=created')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, [userName]);

    const listItems = repos.map((repo) =>
        <Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                            component="span"
                            variant="body1"
                            className={classes.inline}
                            >
                            </Typography>
                            {repo.name}
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                            >
                                {repo.owner.login}
                            </Typography >
                            
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </Fragment>
    );

    return (
        <div>
            <List className={classes.root}>{listItems}</List>
        </div>
    );
}
