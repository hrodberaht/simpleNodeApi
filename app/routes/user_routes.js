const User = require('../models/user')

module.exports = function(app,db){
    const cl = new User();
    app.get('/user',(req,res,next) => {
        try{
            res.json({
                name: 'hello',
                title: cl.name
            });
        }
        catch(error){
        const err = new Error("Invalid name");
        next(err);
        }
    })
}