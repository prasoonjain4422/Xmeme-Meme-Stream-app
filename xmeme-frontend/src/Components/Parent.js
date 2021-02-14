import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { } from 'reactstrap';
import { Accordion, Card, nav, Jumbotron, FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';
import Update from './Update'
import UpdateCap from './UpdateCap';
import UpdateUrl from './UpdateUrl';

function Parent() {

    const [edit, setEdit] = useState(false);

    const [error, setError] = useState('');
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://xmeme-app-by-prasoonjain.herokuapp.com/memes')
            .then(response => {
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setPost({})
                setError('.....Something went wrong(Backend not responding)...TRY RELOAD...')
            })
    }, [])

    const list = []
    for (let i = post.length - 1; i >= 0; i--) {

        list.push(<div>
            <div className="row">
                <Card border="dark" style={{ width: '30rem' }}>
                    <Card.Body style={{ backgroundColor: 'darkgrey  ' }}>
                        <Card.Title><h2>{post[i].name}</h2></Card.Title>
                        <Card.Text>{post[i].caption} </Card.Text>
                        <Card.Img variant="top" src={post[i].url} />

                        <div><br /> <Button name={post[i].id} variant="danger" style={{width: '100px' }} onClick={() => {
                            if (!edit) {
                                document.getElementById(post[i].id).style.display = "block";
                                document.getElementsByName(post[i].id).variant = "danger";
                                setEdit(true)
                            }
                            else {
                                document.getElementById(post[i].id).style.display = "none";
                                document.getElementsByName(post[i].id).variant = "primary";
                                setEdit(false)
                            }
                        }} >Edit</Button> </div>
                    </Card.Body>
                </Card>
                <div id={post[i].id} style={{ overflow: 'hidden', display: 'none' }}><br /><h4>--Click again to minimize--</h4><div className="row">, , ,  <Update var={post[i].id} /> <UpdateCap var={post[i].id} /> <UpdateUrl var={post[i].id} />, , , </div></div>
                <br />
            </div>
        </div>)
    }
    return (
        <div>

            <Jumbotron style={{ position: 'centre', width: '1500px' }} className="mx-auto border border-dark ">
                <nav class="navbar navbar-dark bg-primary" style={{ left: '-32px', width: '1500px', top: '-60px' }}>
                    <a class="navbar-brand" href="#"><h2>Start Meme streaming</h2></a>
                </nav>
                <div className="mx-auto mr-auto" style={{ color: 'grey' }}><h1>{error ? error : null}</h1></div>
                <br />
                {list}
            </Jumbotron >
        </div>
    )
}

export default Parent

