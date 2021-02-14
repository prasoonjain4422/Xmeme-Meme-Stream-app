import React from 'react'
import { nav, Jumbotron, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';

function Update(props) {
    return (
        <div>
            <Jumbotron style={{ backgroundColor: 'darkgrey ' , width: '200px' }} className="mx-auto border border-dark ">
                <Form action="https://xmeme-app-by-prasoonjain.herokuapp.com/memes/ub" method="post">
                    <h4>Update Caption and Url both</h4>
                    <Form.Group controlId="formBasicCaption">
                        <Form.Label> Enter Caption</Form.Label>
                        <Form.Control type="text" placeholder="" name="caption" />
                    </Form.Group>

                    <Form.Group controlId="formBasicUrl">
                        <Form.Label>Enter Url of Meme</Form.Label>
                        <Form.Control type="url" placeholder="" name="url" />
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

export default Update
