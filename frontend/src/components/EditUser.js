import React from 'react';
import {Link} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

export const EditUser = () => {

  
    return (
        <>
        <Form>
          <FormGroup>
          <Label>Edit Name</Label>
          <Input type="text" placeholder="Enter Name"></Input>
          </FormGroup>
          <Button type="submit">Edit Name</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
        </>
    )
}
