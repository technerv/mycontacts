import React, {useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import {
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

function AddUser() {

    let navigate = useNavigate();
    //create state data setData
    const url="http://127.0.0.1:8000/api/create/"
    const [data, setData] = useState({
      name: "",
      phoneno: "",
      email: ""
    })
    
    function submit(e){
      e.preventDefault();
      Axios.post(url, {
        name: data.name,
        phoneno: data.phoneno,
        email: data.email
      })
      .then(res=>{
        setData({
          name: "",
          phoneno: "",
          email: ""
    })
        //console.log(res.data)
        window.alert("New Contact Added")
        navigate("/")
      })

    }

    function handle(e) {
     const newdata =  { ...data }
     newdata[e.target.id] = e.target.value
     setData(newdata)
     console.log(newdata)
    }

    //End

    return (
    <div className="content">
    <Row>
    <Col>

    </Col>
<Col>
<Card>
      <Card.Header><h4>Add New Record</h4></Card.Header>
      <Card.Body>

            <Form onSubmit={(e) => submit(e)}>
              <FormGroup>
              <Input
                name = "name"
                id = "name"
                value={data.name}
                type="text"
                placeholder="Your Full Name"
                onChange={(e)=>handle(e)}
              />

              <Input
                name = "phoneno"
                id = "phoneno"
                value={data.phoneno}
                type="integer"
                placeholder="Your Phone Number"
                onChange={(e)=>handle(e)}
              />

              <Input
              name = "email"
              id = "email"
              value={data.email}
              type="email"
              placeholder="Your Email Address"
              onChange={(e)=>handle(e)}
              />
              </FormGroup>
              <ButtonGroup>
              <button type='submit' className='btn btn-success'>Submit</button>
              <Link to="/" className="btn btn-danger">Cancel</Link>

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

export default AddUser;