import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./pages/Login"

function App() {

  // const login = () => {
  //   axios
  //     .post(API_URL, {
  //       username: this.state.username,
  //       password: this.state.password,
  //     })
  //     .then((res) => console.log(res.user))
  // }
  return (
    <>
      <Login />
      {/* <Header /> */}
      {/* <Home /> */}
    </>
  );
}

export default App;
