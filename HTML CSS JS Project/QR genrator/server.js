import qr from 'qr-image';
import fs from 'fs';
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

  
app.post('/submit', (req, res) => {
    const url = req.body["text"];
    const qr_svg = qr.image(url);

 
    qr_svg.pipe(fs.createWriteStream(__dirname + '/public/qr_img.png'));
    res.send('<h1>Here is the your QR code </h1> <img src="/qr_img.png" alt="QR Code" id="qr"> <h2>Thank You ❤️</h2>');4

    fs.writeFile("URL.txt", url, (err)=>{
        if(err) throw err
        console.log("The file has been saved");
    })
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
