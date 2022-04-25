import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  const login = () => {
    axios
      .post(API_URL, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => console.log(res.user))
  }
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
