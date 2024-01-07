//SingleUser.js
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import {Link} from 'react-router-dom';
import { Table, Card, Row, Col} from 'react-bootstrap';
import  Footer  from './Footer';

function SingleUser (){

	const [contact, setContact] = useState("")

	const { id } = useParams();

	let navigate = useNavigate()

	const getSingleContact = async () => {
		const { data } = await Axios.get(`http://127.0.0.1:8000/api/${id}/`)
		console.log(data)
		setContact(data)
	}
   
	useEffect(() => {
		getSingleContact();

	},[])

	const deleteContact = (id) => {
		Axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
		window.alert("Successfully Deleted")
		console.log("Deleted!!!")
		navigate("/")

	}

	return (
		<div className="content">
      <br />
      <Row>
        <Col>
        <Card>
      <Card.Header>
        <h4>Single Contact Detail</h4>
      </Card.Header>
      <Card.Body>
          <Table stripped bordered hover size="sm">
            <thead>
            <tr>
              
              <th width="170">Name</th>
              <th width="170">Phone Number</th>
              <th width="170">Email Address</th>   
              <th width="170">Update Contact</th> 
              <th width="170">Delete Contact</th>         
            </tr>
            </thead>

          <tbody>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.phoneno}</td>
            <td>{contact.email}</td>
            <td><Link className="btn btn-success" to={`/${id}/update/`}> Update </Link></td>
            <td><button className="btn btn-danger" onClick={() => deleteContact(contact.id)}> Delete </button></td>             
          </tr>
          </tbody>
          </Table>
          </Card.Body>
          </Card>

        </Col>
      </Row>
            <Footer/>
      </div>


		)
}

export default SingleUser;