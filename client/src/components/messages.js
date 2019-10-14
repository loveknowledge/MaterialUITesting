// PART 1

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   root: {
//     width: '98%',
//     maxWidth: '100%',
//     align: 'center',
//   },
// });

// export default function Messages() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <h2>One box for a list of users</h2>
//       <h2>Another box for an individual conversation</h2>
//     </div>
//   );
// }

// PART 2

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   convo: {
//     height: 500,
//     width: 700,
//   },
//   memberlist: {
//     height: 500,
//     width: 200,
//   },
//   control: {
//     padding: theme.spacing(0),
//   },
// }));

// export default function Messages() {
//   const [spacing, setSpacing] = React.useState(0);
//   const classes = useStyles();

//   return (
//     <Grid container className={classes.root} spacing={0}>
//       <Grid item xs={6} className={classes.memberlist} border={1}>
//         <Typography>User 1</Typography>
//         <Typography>User 2</Typography>
//         <Typography>User 3</Typography>
//         <Typography>User 4</Typography>
//       </Grid>
//       <Grid item xl={6} className={classes.convo}>
//         <Typography>User 5</Typography>
//         <Typography>User 21e</Typography>
//         <Typography>User 71</Typography>
//         <Typography>User 6</Typography>
//         <Typography>User 13</Typography>
//       </Grid>
//     </Grid>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" className={classes.title}>
            Community Members
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <Box border={1}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Member Name" />
                  </ListItem>
                </Box>
              )}
            </List>
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="h6" className={classes.title}>
            Conversation
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Member Name" />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
