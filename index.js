// create constant canvas from canvas html element
const canvas = document.querySelector('canvas');
// create constant canvasContext from canvas as 2s
const c = canvas.getContext('2d');

// adjust canvas size
canvas.width = 1024;
canvas.height = 576;

// adjusts canvas location in browser
c.fillRect(0, 0, canvas.width, canvas.height);