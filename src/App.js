import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurant } from "./actions/restaurants";
import RestaurantInput from "./components/RestaurantInput";
import Restaurants from "./components/Restaurants";
class App extends Component {
  handleOnClick = (event) => {
    this.props.store.dispatch(addRestaurant());
  };
  render() {
    debugger;
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
  };
};

export default connect(mapStateToProps, { addRestaurant })(App);