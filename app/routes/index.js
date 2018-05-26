const noteRoutes = require('./note_routes');
const error404Routes = require('./error404_routes');


module.exports = function(app,db){
    noteRoutes(app,db);
    error404Routes(app,db);
}