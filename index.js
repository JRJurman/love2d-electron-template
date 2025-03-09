import {app, BrowserWindow} from 'electron';
import serve from 'electron-serve';

const loadURL = serve({directory: '.'});

let mainWindow;

(async () => {
	await app.whenReady();
	mainWindow = new BrowserWindow();
	await loadURL(mainWindow);
})();
