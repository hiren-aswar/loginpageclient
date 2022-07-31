import "./App.css";
import { useState } from "react";
import axios from "axios";
  
function App() {
  const [start, setStart] = useState(true);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [firstlogin, setFirstlogin] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [flag, setFlag] = useState(false);

  const [password, setPassword] = useState();
  const login = () => {
    console.log("login");
    axios
      .post("https://Loginpageserver.hirenaswar.repl.co/insert", {
        name: name,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setFirst(true);
          setFlag(true);
        } else {
          setSecond(true);
          setFirst(false);
          setFlag(false);
          setError(false)
        }
      });
  };

  const setlog = () => {
    setFirst(true);
    setStart(false);
  };
  const setsign = () => {
    setSecond(true);
    setStart(false);
  };
  const signup = () => {
    axios
      .post("https://Loginpageserver.hirenaswar.repl.co/find", {
        name: name,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          setSecond(true);
          setError(true);
        } else {
          setSecond(false);
          setFirst(false);
          setFirstlogin(true);
          setError(false);
          setFlag(false)
        }
      });
  };

  return (
    <div className="app">
      {start ? (
        <div>
          <p>if you new user than signup</p>
          <p>and click login if already register</p>
          <div className="btns">
            <button onClick={setlog}>Login</button>
            <button onClick={setsign}>Signup</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {first ? (
        <div>
          <h1>login</h1>
          <input
            type="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password in numbers"
          />
          <button onClick={login}>Login</button>
          {flag ? (
            <div>
              <p>password is not valid</p>
              <p>enter the password in numbers</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {second ? (
        <div>
          <h1>sign up</h1>
          <input
            type="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password in numbers"
          />
          <button onClick={signup}>Signup</button>
          {error ? (
            <div>
              <p>user is not found </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {firstlogin ? <div>welcome to your page</div> : ""}
    </div>
  );
}

export default App;
