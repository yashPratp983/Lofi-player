const express = require('express');
const fs = require('fs');
const ytdl = require('ytdl-core');
const app = express();
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
	res.send("hello! this is prajjwal's server. for contact visit https://www.prajjwal.ml");
});

app.get('/fetchVideo', async function(request, response) {
	const videoURL = request.query.videoURL;
	const info = await ytdl.getInfo(videoURL, {
		filter: format => format.container === 'mp4'
	});
	let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
	console.log('Formats with only audio: ' + audioFormats.length);
	response.status(200).json(info);
});
app.get('/fetchAudio', async function(request, response) {
	const videoURL = request.query.videoURL;
	const info = await ytdl.getInfo(videoURL, {
		filter: format => format.container === 'mp4'
	});
	let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
	console.log('Formats with only audio: ' + audioFormats.length);
	response.status(200).json(audioFormats);
});
app.listen(3000, () => {
	console.log('server started');
});
