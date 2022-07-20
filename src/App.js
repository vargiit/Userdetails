import Signup from "./Signup";
import Displaydata from "./Displaydata";
import "./App.css";
import axios from "axios";

import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const handleFormData = async (log) => {
    await axios.post("https://62d7a5c251e6e8f06f1f9d89.mockapi.io/info", log);
    await axios
      .get("https://62d7a5c251e6e8f06f1f9d89.mockapi.io/info")
      .then((response) => setUserList(response.data));
  };

  return (
    <div className="App">
      <Signup formData={handleFormData}></Signup>
      <div className="flex-container">
        <Displaydata
          getUserData={userList}
          className="flex-container"
        ></Displaydata>
      </div>
    </div>
  );
}

export default App;
