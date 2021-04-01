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
        fontSize:"4rem"
    },
    avatar:{
        width: theme.spacing(25),
        height: theme.spacing(25),
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
            <ListItem>
                <ListItemAvatar >
                    <Avatar className={classes.avatar} alt={repo.owner.login} src={repo.owner.avatar_url} />
                </ListItemAvatar>
            </ListItem>

    );

    return (
        <div>
            <List className={classes.root}>{listItems}</List>
        </div>
    );
}
