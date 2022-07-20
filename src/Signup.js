import { useState } from "react";
import axios from "axios";
function Signup(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formdata, setformData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { name: name, password: password };
    let apiData = await axios.post(
      "https://62d7a5c251e6e8f06f1f9d89.mockapi.io/info",
      body
    );

    setformData(
      `Name: ${apiData.data.name} Password: ${apiData.data.password}`
    );

    if (apiData.status === 201) {
      setName("");
      setPassword("");
    }
  };

  return (
    <div className="wrapper">
      <h2>SIGN UP</h2>
      <form className="form-conatiner" action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="submit" />
      </form>
      <div>
        <p>{formdata}</p>
      </div>
    </div>
  );
}

export default Signup;
