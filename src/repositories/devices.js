const { Device } = require('../../db/models')

async function getAll() {
    return await Device.findAll({
        attributes: ['id', 'identifier']
    })
}

async function save(identifier) {
    return await Device.create({
        identifier,
    })
}

module.exports = {
    getAll,
    save,
}
