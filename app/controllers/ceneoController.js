const fs = require("fs");
const request = require("request");
const xml2js = require("xml2js");
const parser = new xml2js.Parser();

// const urlToXML = require("../../config/config").xml;

const ceneo = function parseXMLtoCeneo(req,res,next){
    const xml = urlToXML;
    request.get(xml,function(err,response,body) {
        if(err)
            throw err;
        parser.parseString(body,function(err,result){
            const data = create();
            fs.writeFile("./public/xml/ceneo.xml",data, (err) => {
                if(err)
                    throw err;
                
                res.send(result.offers.o);
            })
        })
       
    });
}

const create = function createXmlForCeneo() {
    let data = '<offers xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1">\n';
        
    for (let i = 0; i < 10; i++) {
            data += "hello \n";
        }
    data += '</offers>';

    return data;
}

module.exports = { ceneo };
