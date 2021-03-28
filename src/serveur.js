// doc : vidéo grafikart : https://www.youtube.com/watch?v=HLPHoY-h7vc&list=PLjwdMgw5TTLV7VsXd9NOeq39soYXORezN&index=3
// on peut lancer le serveur dans le terminal avec la commande node serveur.js

///// Import 


let http = require('http'); // On inclue le module http pour utiliser la méthode createServer
let fs = require('fs') // inclusion du module de gestion des fichiers => utilisation de la méthode readfile pour lire dans un fichier 
let url = require('url');// module de gestion de récupération des infos contenue dans l'url
// const getFile = require('./module-get')
const serverGestion = require('./js_serveur/serverGestion');


let server = http.createServer(); // on créer notre serveur 



// on vient à présent écouter lorsqu'une requête arrive sur le serveur 
// on lui met 2 paramètres, l'écouteur et la fonction à exécuter 
// la fonction prend elle aussi deux paramètres, la requete demandé et la réponse à renvoyer 

server.on('request', (request, response) => {
    ///// méthodo d'affichage : 
    //          - en fonction du type de fichier demandé dans la requete url , lire le bon fichier avec le bon contentType 
    //          - créer un fichier avec la fonction get > fs
    //          - créer un fichier avec la gestion des content type

    // console.log(request);
    // console.log(request.headers.host)
    // console.log(request.url)


    // récupérer les informations contenue dans l'url => utiliser la méthode de l'exo 13 learnyounode
    // new URL example doc officiel : const myURL = new URL('/foo', 'https://example.org/');
    //                                                   => // https://example.org/foo
    const myURL = new URL(request.url, `http://${request.headers.host}/`);

    ////////////console.log(myURL)
    //on récupère ainsi toutes les informations contenue dans l'URL
    // URL {
    //     href: 'http://localhost:5000/',
    //     origin: 'http://localhost:5000',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: 'localhost:5000',
    //     hostname: 'localhost',
    //     port: '5000',
    //     pathname: '/',
    //     search: '',
    //     searchParams: URLSearchParams {},
    //     hash: '
    // }

    //Si mon URL.pathname = la racine on ouvre la page index.html 

    if (myURL.pathname === '/') {
        // console.log('index.html');
        serverGestion.getFile(`./index.html`, response)
    }
    //sinon on ouvre le fichier en fonction de l'extension de celui ci
    else {
        serverGestion.getFile(`.${myURL.pathname}`, response)
    }

})


server.listen(5000);



