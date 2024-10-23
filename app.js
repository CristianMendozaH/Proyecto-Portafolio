const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configurar Handlebars sin partials
app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',  // Usa 'main.hbs' como layout por defecto
    layoutsDir: __dirname + '/views/layouts'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Mi Sitio Web',
        descripcion: 'Bienvenido a mi portafolio'
    });
});

// Ruta para los proyectos
app.get('/proyecto/:id', (req, res) => {
    const projectId = req.params.id;
    res.render(`Proj${projectId}`, {
        titulo: `Proyecto ${projectId}`,
        descripcion: `Este es el proyecto número ${projectId}.`
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
