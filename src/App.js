import {
  Table,
  Tooltip,
  message,
} from "antd";
import { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

// syncUserList: Get the list of all users
const syncUserList = async (setUserList) => {
  try {
      const userData = await axios.get("http://localhost:9000/api/todos");
      if (userData.data["success"] !== 0) {
          message.error(`Get user list error: ${userData.data["message"]}`);
          return
      }
      const users = userData.data.map(v => {
          return {
              name: v.Name,
          };
      });
      setUserList(users);
  } catch (error) {
      if (error.response !== undefined && error.response.data.message !== undefined) {
          message.error(`Get user list error: ${error.response.data.message}`);
      } else {
          message.error(`Get user list error: ${error}`);
      }
  }
}

function App() {
  const [userList, setUserList] = useState([])
    const [currentUser, setCurrentUser] = useState({
        ApplicationNum: 0,
        Name: "",
        // status: 0 for normal user, 1 for admin
        Gender: "",
    })
    const [quotaVisible, setQuotaVisible] = useState(false);

    useEffect(() => {
        syncUserList(setUserList);
    }, []);
  const columns = [
    {
        title: 'Username',
        key: 'username',
        width: "15%",
        ellipsis: {
            showTitle: false,
        },
        render: (record) => {
            return (
                <Tooltip placement="topLeft" title={record.name}>
                    <span>{record.name}</span>
                </Tooltip>
            )
        },
    }
  ]
  return (
    <div id="usersTableContainer">
      <Table id="favoritesTable" columns={columns} dataSource={userList} />
    </div>
  )
}

export default App;