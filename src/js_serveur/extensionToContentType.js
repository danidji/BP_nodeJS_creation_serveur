
// On passe une extension et cea renvoie un Content-Type
//      (ex: ".html" > devient "text/html") 

function fileExtToContentType(fileExtension) {
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
}

module.exports = fileExtToContentType;