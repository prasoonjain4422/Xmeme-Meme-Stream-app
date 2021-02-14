import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nav, Jumbotron, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';

function Formm() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary">
                <a class="navbar-brand" href="#"><h1>Xmeme | Meme Stream App</h1></a>
            </nav>
            {/* <div id='noti' >{noti}</div> */}
            <br />

            <Jumbotron style={{ position: 'centre', width: '700px' }} className="mx-auto border border-dark">
                <Form action="https://xmeme-app-by-prasoonjain.herokuapp.com/memes" method="post">
                    <h1>Upload meme</h1>
                    <Form.Group controlId="formBasicName">
                        <Form.Label >Enter Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="name" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCaption">
                        <Form.Label> Enter Caption</Form.Label>
                        <Form.Control type="text" placeholder="" name="caption" />
                    </Form.Group>


                    <Form.Group controlId="formBasicUrl">
                        <Form.Label>Enter Url of meme</Form.Label>
                        <Form.Control type="url" placeholder="" name="url" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => {alert('Submitted')}}>
                        Submit
                    </Button>
                </Form>
                <br />

            </Jumbotron>
        </div>
    )
}

export default Formm
