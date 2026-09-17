const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

    const user = [{
        id: 1,
        name: 'John Doe',
        age: 30,
        email: 'teste@gmail.com'
    },{
        id: 2,
        name: 'Jane Smith',
        age: 25,
        email: 'jane.smith@gmail.com'
    },{
        id: 3,
        name: 'Bob Johnson',
        age: 40,
        email: 'bob.johnson@gmail.com'
    }];

    const userAdmin = {
        id: 1,
        name: 'Admin User',
        age: 35,
        email: 'admin.user@gmail.com'
    };

    const authenticated = true; // Simulating user authentication

    res.render('home', { layout: 'main', nav: 'nav', footer: 'footer', user: user, userAdmin: userAdmin, authenticated: authenticated });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});