import * as xml2js from 'xml2js';

const Xml: string = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.example.com/webservice"> <soapenv:Header/><soapenv:Body><web:SampleRequest><web:CustomerName>Bob</web:CustomerName><web:CustomerEmail>bob@gmail.com</web:CustomerEmail></web:SampleRequest></soapenv:Body></soapenv:Envelope>';

function soapAdapter(soapXml: string): Promise<any> {
    return new Promise((resolve, reject) => {
        xml2js.parseString(soapXml, { explicitArray: false, ignoreAttrs: true }, (err, result) => {
            if(err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    });
}

async function myThing() {
    try {
        const jsonResult = await soapAdapter(Xml);
        console.log(JSON.stringify(jsonResult, null, 2));
      } catch (error) {
        console.error('Error converting SOAP to JSON:', error);
      }
}
myThing();