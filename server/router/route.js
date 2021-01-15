/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
const express = require('express');
const router = express.Router();
const registerModel = require('../models/models');

// Création d'une route pour enregistrer l'utilisateur
router.post('/register', (request, response) => {
    // Création d'une nouvelle instance d'un utilisateur basé sur "models.js"
    const registerUsers = new registerModel({
        username:request.body.username,
        email:request.body.username,
        password:request.body.password
    })
    // Enregistrement des données et renvoi d'une réponse, ou d'une érreur,
    registerUsers.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

module.exports = router;