const http= require('http');
const server = http.createServer((req,res) => {
    const url=req.url;
    if(url==='/home'){
        res.write('Welcome home');
        return res.end();
    } else if(url==='/abbout'){
        res.write('Welcome to About Us page');
        return res.end();
    } else if(url==='/node'){
        res.write('Welcome to my Node Js project');
        return res.end();
    }
});
server.listen(4000);