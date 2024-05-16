const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        fs.readFile('message.txt', { encoding: "utf-8" }, (err,data) => {
            if(err){
                console.log(err);
            }
            console.log(`data: ` + data);
            res.write('<html>');
            res.write('<head><title>Enter message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="miMessage"><button type="submit">Send</button></form></body>');
        
            res.write('<html>');
            return res.end();
            });
        } else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("parsedBody: ", parsedBody);
            const message = parsedBody.split('=')[1];
            console.log('message: ', message);
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    
        else {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Node js res</title></head>');
            res.write('<body><h1>cbcxnb cbx</h1></body>');
            res.write('<html>');
            res.end();
        }
};
module.exports = requestHandler;
// module.exports.handler = requestHandler;
// module.exports = {
//     handler: requestHandler;
// }
