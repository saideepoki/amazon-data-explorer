import express from 'express';
import router from './routes/index.js'; // importing all the routes
import { fileURLToPath } from 'url';
import path from 'path';
// API application
const app = express();
const PORT = process.env.PORT || 8000;
// including the database
const db = import('./config/mongoose.js');
const apiKey = "f28d6e74c69c1ded336df61bd2cb39f9"; // API key provided to authenticate my API's request to the Scraper API service
// accessing services from scrapeAPi using our API key and enablin autparse to automatically parse the data in structured format
export const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 


// middlewares
app.use(express.json()); // parses json input
app.use('/',router); // All routes starting from "/" will be handled by router i.e ./routes/index.js
app.use(express.static('assets')); // all static files are rooted from assets folder
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.listen(PORT, (err) => {
    if(err) {
        console.log("Error in running the server");
        return;
    }
    console.log(`Server is running on port: ${PORT}`);
});


// exporting baseUrl
// export default baseUrl;
export {db};



