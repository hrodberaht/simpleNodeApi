const fs = require("fs");
const request = require("request");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

const ceneo = function parseXMLtoCeneo(req,res,next){
    const xml = "http://zefi.pl/console/integration/execute/name/CeneoV2";
    request.get(xml,function(err,response,body) {
        if(err)
            throw err;
        parser.parseString(body,function(err,result){
            res.send(result.offers.o);
        })
       
    });
}


module.exports = { ceneo };