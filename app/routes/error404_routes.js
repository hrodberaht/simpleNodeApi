module.exports = function(app,db){
    app.use((req,res,next) => {
       const err = new Error("Not found");
       err.status = 404;
       next(err);
    })

    app.use((err, req,res, next) => {
        res.status(err.status || 500);
        res.json({
            err: {
                message: err.message,
                status: err.status
            }
        })
    })
}