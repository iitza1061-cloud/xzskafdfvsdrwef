const fs = require('fs')

const cache = {}

function getDB(id) {
    if (cache[id]) return cache[id]

    if (!fs.existsSync('./data')) fs.mkdirSync('./data')
    const path = `./data/${id}.json`

    if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}))

    const data = JSON.parse(fs.readFileSync(path))
    cache[id] = data
    return data
}

function saveDB(id) {
    if (!cache[id]) return
    fs.writeFileSync(`./data/${id}.json`, JSON.stringify(cache[id], null, 2))
}

module.exports = { getDB, saveDB, cache }
