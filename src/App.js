import {
  Table,
  Tooltip,
  message,
} from "antd";
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { render } from "@testing-library/react";

import React from 'react';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  };

  componentDidMount() {
    axios.get("http://localhost:9000/api/todos")
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  };

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.Name}</li>)}
      </ul>
    )
  }
}