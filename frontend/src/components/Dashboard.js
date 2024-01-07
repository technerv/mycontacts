import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Dashboard(){



    return(
        <>
         <h4>Dashboard</h4>
     
         <Row>
             <Col>
                <Card>
                    <Card.Header>Total Records</Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
             </Col>
             <Col>
             <Card>
                 <Card.Header>Current User</Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                    </Card>
             </Col>
             <Col>
             <Card>
                 <Card.Header>Live API Feed</Card.Header>
                    <Card.Body>
                        
                    </Card.Body>
                    </Card>
             </Col>
         </Row>


        </>
       


    )
}

export default Dashboard;