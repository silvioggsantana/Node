const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

    const products = [{
        name: 'Produto 1',
        description: 'Descrição do Produto 1',
        price: 30,
        type: 'tipo1'
    },{
        name: 'Produto 2',
        description: 'Descrição do Produto 2',
        price: 25,
        type: 'tipo2'
    },{
        name: 'Produto 3',
        description: 'Descrição do Produto 3',
        price: 40,
        type: 'tipo3'
    }];

    const userAdmin = {
        id: 1,
        name: 'Admin User',
        age: 35,
        email: 'admin.user@gmail.com'
    };

    const authenticated = true; // Simulating user authentication

    const header = fs.readFileSync(path.join(__dirname, 'views', 'header.handlebars'), 'utf8');
    const footer = fs.readFileSync(path.join(__dirname, 'views', 'footer.handlebars'), 'utf8');

    res.render('home', { layout: 'main', header: header, footer: footer, products: products, userAdmin: userAdmin, authenticated: authenticated });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});