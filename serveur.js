const http = require("http");
const url = require('url');

http.createServer(function (req, res) {
    if(req.url == "/acceuil") {
        res.write(`<html>
        <meta charset="utf-8"></meta>
        <body>
        <h1>Bienvenue sur l'accueil</h1>
        </body>
        </html>`)
        console.log("Vous êtes a l'accueil");
    }
    if(req.url == "/logo") {
        res.write(`<html>
        <meta charset="utf-8"></meta>
        <h1>logo:</h1>
        <img src = "https://newsroom.ionis-group.com/wp-content/uploads/2023/09/EPI-LOGO-2023-QUADRI.png" height="142" width="450">
        </body>
        </html>`)
        console.log("Vous êtes au logo");
    }
    if(req.url == "/profile") {
        res.write(`<html>
        <h1>Bienvenue sur votre profile</h1>
        </body>
        </html>`)
        console.log("Vous êtes sur votre profile");
    }
    res.end();
}).listen(3001);
