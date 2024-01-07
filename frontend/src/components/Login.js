import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { ButtonGroup, Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
//import {useNavigate} from 'react-router';

function Login() {

  const baseUrl = 'http://127.0.0.1:8000/api/';

 // let navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  }

  const submitForm = () => {

    const userFormData = new FormData();

    userFormData.append('username', loginData.username)
    userFormData.append('password', loginData.password)

    axios.post(baseUrl+'login/', userFormData)
      .then((res) => {
        console.log(res.data)
        // if(res.data === true){
        //   localStorage.setItem('userLoginStatus', true)
        // }

        });

  }

  // const userLoginStatus = localStorage.getItem('userLoginStatus')
  // if(userLoginStatus === 'true'){
  //   window.location.href='/'
  // }


  useEffect(() => {
    document.title = 'Login'
  })

  return(
    <div>
    <Row>
      <Col>

      </Col>
      <Col>
      <Card>
      <Card.Header><h4>User Login</h4></Card.Header>
      <Card.Body>

            <Form>
              <FormGroup>
              <Input  
                name = "username"
                value = {loginData.username}
                onChange={handleChange}
                type="text"
                placeholder="Username"
              />

              <Input
                name = "password"
                type="password"
                value = {loginData.password}
                onChange={handleChange}
                placeholder="Password"
              /> 
              </FormGroup> <br/>
              <ButtonGroup>
              <button type="submit" onClick={submitForm} className='btn btn-success'>Login</button>
              <Link to="/register" className="btn btn-warning ml-2">Register</Link>

              </ButtonGroup>
              
            </Form>
      </Card.Body>
      
      </Card>
      </Col>
      
      <Col>
        
      </Col>
    </Row>
    </div>
  )



}

export default Login;
