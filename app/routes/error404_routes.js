module.exports = function(app,db){
    app.use("*",(req,res) => {
        res.send("404");
    })
}