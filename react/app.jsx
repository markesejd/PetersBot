import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './menu/menu.jsx';
import OrdersTable from './orders/ordersTable.jsx';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const menuItems = [
  { name: "BLT", price: 3, category: "breakfast" },
  { name: "Bagel", price: 1, category: "breakfast" },
  { name: "Bacon Egg & Cheese", price: 3, category: "breakfast" },
  { name: "Grilled Cheese", price: 2, category: "breakfast" },
  { name: "Turkey Sub", price: 5, category: "lunch" },
  { name: "Chicken Wrap", price: 4, category: "lunch" },
  { name: "Burger", price: 4, category: "dinner" },
  { name: "Fish Dinner", price: 8, category: "dinner" },
  { name: "Chocolate Milk", price: 2, category: "drink" },
  { name: "Orange Juice", price: 2, category: "drink" }
];

class PetersApp extends React.Component {
  componentWillMount() {
    this.state = { menuItems };
  }

  render() {
    let navBarStyle = {
      backgroundColor: "#15294B"
    }
    return (this.state.menuItems == null ? null
      : <MuiThemeProvider>
        <div>
          <AppBar
            title="Peters App"
            iconElementLeft={<div />}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={navBarStyle}
          />
          <div className="container">
            <div className="col-xs-12 col-sm-9">
              <Paper z-depth={4}>
                <OrdersTable />

              </Paper>
            </div>
            <div className="col-xs-6 col-sm-3" id="sidebar">
              <Paper z-depth={2}><Menu menuItems={this.state.menuItems} /></Paper>
            </div>
          </div>
        </div>
      </MuiThemeProvider>);
  }
}


/* LAST THING TO RUN LOL */

ReactDOM.render(
  <PetersApp menuItems={this.menuItems} />,
  document.getElementById('PetersApp')
);