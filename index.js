const express = require('express');
const app = express();
const port = 3000;

const { engine } = require ('express-handlebars');

const handlebars = require('express-handlebars');
app.set('view engine', 'handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// app.engine('handlebars', handlebars({
// layoutsDir: '/views/layouts',
// }));
app.use(express.static('public'))
app.get('/', (req, res) => {

res.render('main', {layout : 'index'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));