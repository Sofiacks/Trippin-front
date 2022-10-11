import { useState } from "react";
import '../Login.css';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email: " + email);
    console.log("pwd: " + pwd);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: pwd,
      }),
    };

    fetch("http://127.0.0.1:8000/api/login_check", requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log("reponse: " + JSON.stringify(response));
        //get token from response
        const token = response.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        //setAuthToken(token);

        //redirect user to home page
           window.location.href = '/home'
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5" style={{backgroundColor: "#efdb9f"}}>
      <div className="row p-4 pb-5 pe-lg-4 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={{backgroundColor: "black"}} >
        <div className="col-lg-7 text-center text-lg-start">
          <h3 className="display-5 fw-bold lh-1 mb-3" style={{color: "#ffffff"}} >
            A Hobby, a city and let's trippin
          </h3>
          <p className="col-lg-10 fs-4" style={{color: "#ffffff"}}>
            Recherches tes voyages selon tes passions, tes envies !
            Et partages les avec toute une communauté !
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3" style={{backgroundColor: "#efdb9f"}}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={e => setPwd(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Se souvenir de moi
              </label>
            </div>
            <button className="btn_log" type="submit" onClick={handleSubmit}>
             Connexion
            </button>
            <hr className="my-4" />
            <a href="/register"><small className="text-muted">
             Créer un compte.
            </small></a>
          </form>
        </div>
      </div>
    </div>
  );
}
