import React, { useEffect } from "react";
import { Container, Button, Form } from "shards-react";
import axios from "axios";
import { BASE_URL } from "../configs/constants";
function Login(props) {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    axios.post(BASE_URL+"/auth/login/admin",{...state}).then((res)=>{
        console.log({res});
        if(res && res.data && res.data.token){
            localStorage.setItem('token',res.data.token);
            props.history.push("/blog-posts")
        }
    })
  }
  function handleInput ({target:{name,value}}){
      setState({
          ...state,
          [name]:value
      })
  }
  React.useEffect(()=>{
      if(localStorage.getItem("token")){
          props.history.push("/blog-posts")
      }
  },[])

  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="">
          <Form
            className="bg-white p-5  flex-column   align-items-center"
            style={{ width: "500px", height: "300px" }}
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-center align-items-center">
              <strong className="h4">Connexion UAS </strong>
            </div>
            <div className="form-group">
              <input
                placeholder="email"
                className="form-control"
                type="email"
                name="email"
                onChange={handleInput}
              />
            </div>
            <div className="form-group">
              <input
                placeholder="*********"
                className="form-control"
                type="password"
                name="password"
                onChange={handleInput}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <Button pill>Connecter</Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Login;
