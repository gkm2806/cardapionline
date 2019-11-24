import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';

import { Link } from "react-router-dom"

export const mainListItems = (
  <div>
  <center><h4> Lugares </h4></center>
    <ListItem button >
      <Link to={{
        pathname: "/lugares/lanchonete"
      }}>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
      </Link>
    </ListItem>
    <ListItem button>
      <Link to={{
        pathname: "/lugares/bar"
      }}>
        <ListItemIcon>
          <LocalBarIcon />
        </ListItemIcon>
      </Link>
    </ListItem>
      <hr></hr>
      <center><h4> Roles </h4></center>
    <ListItem button>
      <Link to={{
        pathname: "/roles/lanchonete"
      }}>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
      </Link>
    </ListItem>

    <ListItem button>
      <Link to={{
        pathname: "/roles/bar"
      }}>
        <ListItemIcon>
          <LocalBarIcon />
        </ListItemIcon>
      </Link>
    </ListItem>
  </div>
);