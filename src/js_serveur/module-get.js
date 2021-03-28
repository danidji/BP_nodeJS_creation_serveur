// module de la fonction get de lecture de fichier  

const fs = require('fs')
// import * as fs from 'fs';
const path = require('path');

const extensionToContentType = require('./extensionToContentType')

function getFile(myURlFile, myResponse) {

    //on récupère l'extansion du fichier contenue dans l'url
    // console.log(path.extname(myURlFile));
    //On récupère le contentType
    // console.log(contentType)
    let contentType = extensionToContentType(path.extname(myURlFile))


    //// utilisation de readfile : https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    fs.readFile(
        myURlFile,
        'utf8',
        (err, data) => {
            if (err) {
                console.log("fs.readFile() > err :", err)
            } else {
                // console.log(data)
                console.log(myURlFile)


                myResponse.writeHead(200, { 'Content-Type': contentType })
                return myResponse.end(data)
            }
        }
    )


}

module.exports = getFile;