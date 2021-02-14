let express = require('express')
var morgan = require('morgan')
let cors = require('cors')
let bodyParser = require('body-parser')
let entries = require('./entries')
var router = express.Router();
const dotenv = require('dotenv')

dotenv.config()
let app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('Backend listening on 8081')
});

app.get('/', (_, res) => {
    res.send('Hello from the profile backend!')
});

app.get('/memes', (_, res) => {
    res.json(entries.getEntries())
});

app.get('/memes/:id', (req, res) => {
    const memeid = Number(req.params.id);
    if (entries.showId(memeid)) {
        // if meme with that id exists
        res.json(entries.showId(memeid))
    }
    else {
        res.send('Not Found').status(404)
    }
});

app.post('/memes', (req, res) => {
    console.log('Data received - ')
    const arr = entries.takeful()
    if (entries.check(req.body)) {
        // if same object exists
        res.sendStatus(409)
    }
    else {
        // giving length of array(count of stored memes) as id to the latest meme
        req.body["id"] = entries.takeful()
        console.log(req.body)
        entries.putEntry(req.body)
        console.log('Stored successfully!')
        res.redirect('back')
    }
})

app.post('/memes/ub', (req, res) => {
    // For updating caption and url both
    console.log('Data - updated both')
    entries.upc(req.body)
    entries.upu(req.body)
    console.log(req.body)
    console.log('Stored successfully!')
    res.redirect('back')
})

app.post('/memes/uc', (req, res) => {
    // For updating caption only
    console.log('Data - updated both')
    entries.upc(req.body)
    console.log(req.body)
    console.log('Stored successfully!')
    res.redirect('back')
})

app.post('/memes/uu', (req, res) => {
    // For updating url only
    console.log('Data - updated both')
    entries.upu(req.body)
    console.log(req.body)
    console.log('Stored successfully!')
    res.redirect('back')
})

