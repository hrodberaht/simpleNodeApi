// const noteRoutes = require('./note_routes');
// const error404Routes = require('./error404_routes');
// const userRoutes = require('./user_routes');

const start = require("../controllers/start");


module.exports = function(app){

    app.route("/")
    .get(start.start);
    // noteRoutes(app,db);
    // userRoutes(app,db);
    // error404Routes(app,db);// this route must be last
}