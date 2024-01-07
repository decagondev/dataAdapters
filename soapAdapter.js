const xml2js = require('xml2js');

const Xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/webservice"> <soapenv:Header/><soapenv:Body><web:SampleRequest><web:CustomerName>Bob</web:CustomerName><web:CustomerEmail>bob@gmail.com</web:CustomerEmail></web:SampleRequest></soapenv:Body></soapenv:Envelope>';
function soapAdapter(soapXml) {

    return new Promise((resolve, reject) => {
        xml2js.parseString(soapXml, (err, result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
}

async function myThing() {
    const data = await soapAdapter(Xml);
    console.log(data);
}
myThing();