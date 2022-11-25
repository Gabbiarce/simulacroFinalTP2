const { Category, Channel, Favorite, Device} = require('../../db/models')


async function getFavorites(id) {
    return await Favorite.findByPk(id, {
        attributes: {id},
    }
    )
}

module.exports = {
    getFavorites,
}