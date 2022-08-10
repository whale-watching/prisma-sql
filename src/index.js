const app = require('./config/server')();
const hostname = 'localhost';
const port = 3000;
app.listen(3000, () => console.log(`Server running at http://${hostname}:${port}/`));
