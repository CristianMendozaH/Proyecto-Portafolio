const express = require('express')
const hbs = require('hbs')
const path = require('path');
require('dotenv').config();

const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials')

//app.use(express.static('public'));
// Usa la ruta absoluta para mayor seguridad
app.use(express.static(path.join(__dirname, 'public_html')));
//app.use(express.static('public_html'))

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        nombreD: 'Cristian Mendoza',
        nombrecompleto: 'CRISTIAN MENDOZA',
        carne: '2290-21-20201',
        titulo: 'Portafolio',
        profesion: 'Ingenieria en Sistemas',
        ocupacion: 'Estudiante de Ingenieria'
    })
})
app.get('/sobremi', (req, res) => {
    res.render('sobremi', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Sobre mi'
    });
});

app.get('/curriculum', (req, res) => {
    res.render('curriculum', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'curriculum'
    });
});

app.get('/portafolio', (req, res) => {
    res.render('portafolio', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});


app.get('/Proj1', (req, res) => {
    res.render('Proj1', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj2', (req, res) => {
    res.render('Proj2', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj3', (req, res) => {
    res.render('Proj3', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj4', (req, res) => {
    res.render('Proj4', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj5', (req, res) => {
    res.render('Proj5', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj6', (req, res) => {
    res.render('Proj6', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj7', (req, res) => {
    res.render('Proj7', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});

app.get('/Proj9', (req, res) => {
    res.render('Proj9', {
        nombre: 'Cristian',
        apellido: 'Mendoza',
        titulo: 'Portafolio'
    });
});


















app.get('*', (req, res)=>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo escuchando en http://localhost:${port}`);
})