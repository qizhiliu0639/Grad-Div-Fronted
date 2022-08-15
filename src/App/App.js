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

class Getspecific extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      study:[]
    }
  }

  componentDidMount() {
      axios.get("http://localhost:9000/studyList/" + this.props.name)
      .then(res => {
        const study = res.data["data"];
        if (Array.isArray(study)) {
          this.setState({study});
        } else {
          this.setState({study:[study]});
        }
        
      })
  };

  render() {
    return (
      <ul>
      { this.state.study.map(studyExp => 
     <li>{studyExp.Name ?? "None"}, {studyExp.Location}</li>
     )
      }
    </ul>
  )
  }

}

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      student:[]
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
        { this.state.persons.map(person => 
       <>
       <li>{person.ApplicationNum}, {person.Name}</li>
        <Getspecific name={person.ApplicationNum} />
       </>)
        }
      </ul>
    )
  }
}