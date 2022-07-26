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

// const syncStudentList = async (setStudentList) => {
//   try {
//       const userData = await axios.get("http://localhost:9000/api/todos");
//       if (userData.status !== 200) {
//           message.error(`Get user list error: ${userData.data["message"]}`);
//           return
//       }
//       const users = userData.data.map(v => { 
//         return {
//         ApplicationNum: v.ApplicationNum,
//         Name: v.Name,
//         Gender: v.Gender
//       };
//       });
//       setStudentList(users);
//   } catch (error) {
//       if (error.response !== undefined && error.response.data.message !== undefined) {
//           message.error(`Get user list error: ${error.response.data.message}`);
//       } else {
//           message.error(`Get user list error: ${error}`);
//       }
//   }
// }

// function App(props) {
//   const [studentList, setStudentList] = useState([]);
//   useEffect(() => {
//     syncStudentList(setStudentList);
// }, []);
// // console.log(studentList)

// return (
//   <ul>
//     {studentList.map(student => <li>{student.Name}</li>)}
//   </ul>
// )
// }
// export default App;

// async function Getspecific(props) {
//   try {
//     const study = await axios.get("http://localhost:9000/api/study/" + props.name)
//     console.log(study)
//     return (
//       // <li>{study.data.Name}</li>
//       <li>test</li>
//     )
//   } catch (error) {
//     if (error.response !== undefined && error.response.data.message !== undefined) {
//                 message.error(`Get user list error: ${error.response.data.message}`);
//             } else {
//                 message.error(`Get user list error: ${error}`);
//             }
//   }
// }

class Getspecific extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studys:[]
    }
  }

    componentDidMount() {
      axios.get("http://localhost:9000/api/study/" + this.props.name)
      .then(res => {
        const studys = res.data;
        this.setState({ studys });
      })
  };

  render() {
    return (
      <ul>
      { this.state.studys.map(person => 
     <li>{person.ApplicationNum}, {person.Name}</li>
     )
      }
    </ul>
  )
  }

}

function Welcome(props) {
  // const study = axios.get("http://localhost:9000/api/study/" + props.name)
  // console.log(study)
  return <li>Hello, {props.name}</li>;
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
      console.log(res.data)
      const persons = res.data;
      this.setState({ persons });
    })

    // axios.get("http://localhost:9000/api/study")
    // .then(res => {
    //   const student = res.data;
    //   this.setState({ student });
    // })
  };

  // componentStudentMount() {
  //   axios.get("http://localhost:9000/api/study")
  //   .then(res => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   })
  // };

  render() {
    return (
      <ul>
        { this.state.persons.map(person => 
       <>
       <li>{person.ApplicationNum}, {person.Name}</li>
       <ul>
        {/* <Welcome name={person.Name} /> */}
        <Getspecific name={person.ApplicationNum} />
        {/* { this.state.student.map( student =>
        <li>{student.Name}</li>
        )} */}
       </ul>
       </>)
        }
      </ul>
    )
  }
}