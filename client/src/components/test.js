import React from 'react';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import MessageIcon from '@material-ui/icons/Message';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '98%',
    maxWidth: '100%',
    align: 'center',
  },
});

export default function Test() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Button Sample
      </Button>
      <h2>
        <DeleteOutlinedIcon></DeleteOutlinedIcon>
        Delete Icon - delete a comment or post
        <DeleteIcon></DeleteIcon>
      </h2>
      <h2>
        <MessageOutlinedIcon></MessageOutlinedIcon>
        Start a chat or new Message
        <MessageIcon></MessageIcon>
      </h2>
      <h2>
        <CommentOutlinedIcon></CommentOutlinedIcon>
        Add a comment
        <CommentIcon></CommentIcon>
      </h2>
      <h2>
        <PostAddOutlinedIcon></PostAddOutlinedIcon>
        Add a post
        <PostAddIcon></PostAddIcon>
      </h2>
      <h2>
        <ForumOutlinedIcon></ForumOutlinedIcon>
        Forum or Community Icon
        <ForumIcon></ForumIcon>
      </h2>
      <h2>
        <SettingsOutlinedIcon></SettingsOutlinedIcon>
        Settings for Privacy
        <SettingsIcon></SettingsIcon>
      </h2>
      <Typography variant="h1" component="h4" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </div>
  );
}
