const AutoresController = require('../controllers/AutoresController');

module.exports = function (app) {
    app.get("/autores", AutoresController.index);
    app.get("/autores/:id", AutoresController.findOne);
    app.post("/autores", AutoresController.create);
    app.put("/autores/:id", AutoresController.update);
    app.delete("/autores/:id", AutoresController.delete);

}