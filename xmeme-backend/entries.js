const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter)
db.defaults({ entries: [] }).write()

function putEntry(entry) {
    // storing in database
    db.get('entries').push(entry).write()
}

function getEntries() {

    const arr = db.get('entries').value();
    const list = [];
    const l = arr.length;
    for (let x = l - ((l < 100) ? (l) : (100)); x < l; x++) {
        list.push(arr[x]);
    }
    return list
}

function takeful() {
    // returning length of array(count of existing memes)
    return db.get('entries').value().length;
}

function showId(i) {
    // finding for a specific meme
    return db.get('entries').find({ id: i }).value()
}

function upc(i) {
    const mid = Number(i.var)
    db.get('entries')
        .find({ id: mid })
        .assign({ caption: i.caption }).write()
}

function upu(i) {
    const mid = Number(i.var)
    db.get('entries')
        .find({ id: mid })
        .assign({ url: i.url }).write()
}

function check(i) {
    return db.get('entries').find({name: i.name, caption: i.caption, url: i.url}).value()
}

module.exports = {
    putEntry,
    getEntries,
    showId,
    takeful,
    check,
    upc,
    upu
}
