import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cardd({bio, nome, endereco, capacidade, qnt_atual,categoria}) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{marginTop: 'auto'}} className={classes.card}>
        <CardHeader
        avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            {nome[0]}
            </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
            </IconButton>
        }
        title={nome}
        subheader={endereco}
        />
            <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKHaOSA-TKs3OS_rAmPmF4t6rfHngGRGPeqYajm4lvR_7szXn9"
            title="Paella dish"
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {bio}
            </Typography>
        </CardContent>
        <Icon style = {{
            color: 'rgba(0, 0, 0, 0.54)',
            marginLeft: '10px',
        }} aria-label="add to favorites">
            <PersonIcon />
        </Icon>
    </Card>
  );
}