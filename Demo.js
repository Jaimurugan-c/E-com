 let http= require('http')
http.createServer(function(req,res){
     res.writeHead(200,{'content-Type':'text/html'})
    res.end("welcomccce bro")

  


}).listen(8080);