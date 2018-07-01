const noteRoutes = require('./note_routes');
const error404Routes = require('./error404_routes');
const userRoutes = require('./user_routes');


module.exports = function(app){

    app.route("/")
    .get((req,res,next) => {
        res.json({message: "ok"});
    })
    // noteRoutes(app,db);
    // userRoutes(app,db);
    // error404Routes(app,db);// this route must be last
}