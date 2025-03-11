const { app, BrowserWindow } = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname);

let server;
let mainWindow;

app.whenReady().then(() => {
    // Create the static file server
    server = http.createServer((req, res) => {
        let filePath = path.join(PUBLIC_DIR, req.url === '/' ? '/index.html' : req.url);

        // Check if file exists
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                res.writeHead(404);
                res.end('Not Found');
                return;
            }

            // Read and serve the file
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Server Error');
                    return;
                }

                res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
                res.end(data);
            });
        });
    });

    server.listen(PORT, () => {
        console.log(`Static server running at http://localhost:${PORT}`);
    });

    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    // Load the local server URL
    mainWindow.loadURL(`http://localhost:${PORT}`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (server) server.close();
    app.quit();
});

// Helper function to get MIME type
function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    return mimeTypes[ext] || 'application/octet-stream';
}
