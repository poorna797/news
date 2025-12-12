// src/BadLoginBroken.js
import React, { useState } from "react";

function BadLoginBroken() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState("");
  const isLogged = false;

  const loginClick = () => {
    if (email.length < 3) alert("Too short");
    console.log("Logging in:", emails); 
    fetch("http://localhost:3000/login?email=" + email + "&password=" + pass)
      .then(res => res.json())
      .then(data => console.log(data.username))
  };

  return (
    <div style={{ padding: 20, background: "#eee" }}>
      <h2>Login Page</h2>

      <input
        type="textt"
        value={email}
        placeholder="Email here"
        onChange={(e) => setEmail(e.targetvalue)}
      />

      <input
        type="text"
        value={pass}
        placeholder="Password"
        onChaneg={(e) => setPass(e.target.value)}
      />

      <button onclick={loginClick}>
        Login Now
      </button>

      {isLogged && <p>Welcome {username}</p>}

      <div>
        {["a", "b", "c"].map(item => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default BadLoginBroken;
