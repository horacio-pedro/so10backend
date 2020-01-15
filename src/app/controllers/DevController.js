const axios = require('axios');
const Dev = require('../models/Dev');
const API = require('../../../services/api');


module.exports = {
    async store(req, res) {
        const { github_username, techs } = req.body

        const response = await axios.get(`${API.uri}/${github_username}`);

        const { name = login, avatar_url, bio } = response.data;
        const techsArray = techs.split(',').map(tech => tech.trim());

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
        });

        return res.json(dev);
    }
}