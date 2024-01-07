import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Table, Card, Row, Col} from 'react-bootstrap';
import Dashboard from './Dashboard';
import  Footer  from './Footer';

function UserList() {

  const [data, setData] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/"
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      setData(json)
      console.log(json, "json");
      //return json;
    }, [])
    .catch((error) => {
      console.error(error);
    })
  },[]);

  useEffect(() => {
    if(data.length !==0){
      setIsLoading(false);
    }
    console.log(data);
  },[data]);

    return (
      <div className="content">
      <Dashboard />
      <br />
      <Row>
        <Col>
        <Card>
      <Card.Header>
        <h4>View Records</h4>
        <Link className="btn btn-warning" to="/add">Add New Contact</Link>
      </Card.Header>
      <Card.Body>
          <Table stripped bordered hover size="sm">
            <thead>
            <tr>
              
              <th width="170">Name</th>
              <th width="170">Phone Number</th>
              <th width="170">Email Address</th>
              <th width="170">Action</th>
              
            </tr>
            </thead>

          <tbody>
          { isLoading ? (<h6>Loading ... </h6>) : (
          data.map((con, index) => (
          <tr key={con.index}>
            
            <td>{con.name}</td>
            <td>{con.phoneno}</td>
            <td>{con.email}</td>
            <Link className="btn btn-warning" to={`/${con.id}/`}>Show Detail</Link>
          </tr>

          ))
          )}

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

export default UserList;