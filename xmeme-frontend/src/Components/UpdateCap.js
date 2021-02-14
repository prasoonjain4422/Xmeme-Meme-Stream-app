import React from 'react'
import { nav, Jumbotron, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';

function UpdateCap(props) {
    return (
        <div>
            <Jumbotron style={{ backgroundColor: 'darkgrey ', height: '435px', width: '200px'}} className="mx-auto border border-dark">
                <Form action="https://xmeme-app-by-prasoonjain.herokuapp.com/memes/uc" method="post">
                    <h4>Update Caption only</h4>

                    <Form.Group controlId="formBasicCaption">
                        <Form.Label> Enter Caption </Form.Label>
                        <Form.Control type="text" placeholder="" name="caption" />
                        <Form.Control type="text" placeholder="" name="var" value={props.var} style={{ display: 'none' }} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => {alert('Updated')}}>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    )
}

export default UpdateCap
