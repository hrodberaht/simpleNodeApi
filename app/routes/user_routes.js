module.exports = function(app,db){
    app.get('/user',(req,res) => {
        res.json({name: 'hello'});
    })
}