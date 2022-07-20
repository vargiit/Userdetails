import { useState } from "react";
function Signup({ formData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData({ name, email, phone });
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

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="phoneNumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input type="submit" value="submit" />
      </form>
      <div></div>
    </div>
  );
}

export default Signup;
