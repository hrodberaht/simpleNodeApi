module.exports = function(app,db){
    
    app.get('/notes',(req,res)=>{
        db.collection('notes').find().toArray((err,item)=>{
            if(err) console.log(err)

            res.send(item);
        });
    });

    
    app.post('/notes',(req,res) =>{
        
        const note = {title: req.body.title, text: req.body.body};
        
        db.collection('notes').insert(note, (err, result) => {    
            if (err) { 
              res.send({ 'error': 'An error has occurred' }); 
            } else {
              res.send(result.ops[0]);
            }
        });
});
}