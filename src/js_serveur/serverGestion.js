const fs = require('fs')
const path = require('path');

const serverGestion = {
    getContentType(fileExtension) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
        //      ATTENTION, je n'ai pas tout récupéré ci-dessous,
        //      uniquement ce qu'il faut pour faire tourner le boilerplate
        switch (fileExtension) {

            case '.css':
                return 'text/css';
                break;

            case '.eot':
                return 'application/vnd.ms-fontobject';
                break;

            case '.html':
                return 'text/html';
                break;

            case '.ico':
                return 'image/vnd.microsoft.icon';
                break;

            case '.jpg':
            case '.jpeg':
                return 'image/jpeg';
                break;

            case '.js':
                return 'text/javascript';
                break;

            case '.png':
                return 'image/png';
                break;

            case '.svg':
                return 'image/svg+xml';
                break;

            case '.ttf':
                return 'font/ttf';
                break;

            case '.woff':
                return 'font/woff';
                break;

            case '.woff2':
                return 'font/woff2';
                break;

            default:
                return 'text/plain';
                break;
        }
    },

    getFile(myURlFile, myResponse) {

        //on récupère l'extansion du fichier contenue dans l'url
        // console.log(path.extname(myURlFile));
        //On récupère le contentType
        // console.log(contentType)
        let contentType = this.getContentType(path.extname(myURlFile))


        //// utilisation de readfile : https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

        fs.readFile(
            myURlFile,
            'utf8',
            (err, data) => {
                if (err) {
                    console.log("fs.readFile() > err :", err)
                } else {
                    // console.log(data)
                    // console.log(myURlFile)

                    myResponse.writeHead(200, { 'Content-Type': this.getContentType(path.extname(myURlFile)) })
                    return myResponse.end(data)
                }
            }
        )


    }

}

module.exports = serverGestion;