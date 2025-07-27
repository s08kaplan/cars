"use strict"

const sanitizeCarName = (name) => {
    return name.trim().replace(/[^a-zA-Z0-9-_]/g, '_')
}

module.exports = { sanitizeCarName }