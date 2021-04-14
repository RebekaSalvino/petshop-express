const express = require('express');
const petshop = require('./petshop');

const app = express();
app. use(express. json());

app. get('/pets', (req, res) => {
    return res. send(petshop. listarPets());
})

app. post('/pets', (req, res) => {
    const novoPet = req. body;
    const petAdicionado - petshop. adicionarPet([novoPet]);

    if (! petAdicionado) {
        return res. status(400);
    }
    return petAdicionado;
})

app. get('/pets/:nome', (req, res) => {
    const {
 name
    } = req. params;
    const petFound = petshop. searchPet(name);

    if (! petEncontrado) {
        return res. status(400). json({
            error: 'Pet not found'
        });
    }

    return res. json(petEncontrado);
})

app. listen(3333, () => {
    console. log('Server running!');
});