import {baseUrl} from '../index.mjs'; // importing the baseUrl
import fetch from '../moduleConfig/fetch.js'; // importing configured instance of fetch
import { Reviews } from '../models/reviews.js';

// export const search = async (req,res) => {
//     // extracting productId property value from req.params
//    const {searchQuery} = req.params;
//    // get response from scraper api using node-fetch
//    try {
//     // fetching the product details from url of the product using scraper api and node-fetch
//     const response = await fetch(`${baseUrl}&url=https://www.amazon.in/s?k=${searchQuery}`);
//     const data = await response.json(); // fetching json data from response
//     // Sort the products by total_stars and total_reviews in descending order
//     const sortedProducts = data.results.sort((a, b) => {
//         if (b.total_stars === null || b.total_reviews === null) return -1;
//         if (a.total_stars === null || a.total_reviews === null) return 1;
//         return b.total_stars * b.total_reviews - a.total_stars * a.total_reviews;
//       });
//     // Get the top 5 products
//     const top5 = sortedProducts.slice(0, 10);  
//     res.render('reviews',{top5});
//    } catch (error) {
//     res.send(error);
//    }
// };

export const search = async (req, res) => {
    // extracting searchQuery property value from req.params
    const { searchQuery } = req.params;
    // Normalize the search query by removing spaces and converting to lowercase
    const normalizedQuery = searchQuery.replace(/[^\w\s]/g, '').replace(/\s/g, '').toLowerCase();
    // get response from scraper api using node-fetch
    try {
      // Check if the entire JSON data exists in the database
      const existingData = await Reviews.findOne({ productId: normalizedQuery });
      if (existingData) {
        res.render('reviews', { top20: existingData.reviews_information });
      } else {
        // fetching the product details from the Amazon search using scraper API and node-fetch
        const response = await fetch(`${baseUrl}&url=https://www.amazon.in/s?k=${normalizedQuery}`);
        const data = await response.json(); // fetching JSON data from response
  
        // Sort the products by total_stars and total_reviews in descending order
        const sortedProducts = data.results.sort((a, b) => {
          if (b.total_stars === null || b.total_reviews === null) return -1;
          if (a.total_stars === null || a.total_reviews === null) return 1;
          return b.total_stars * b.total_reviews - a.total_stars * a.total_reviews;
        });
  
        // Get the top 5 products
        const top20 = sortedProducts.slice(0, 20);
  
        // Store the entire JSON data as an object in the database
        await Reviews.create({ productId: normalizedQuery, reviews_information: top20 });
  
        res.render('reviews', { top20 });
      }
    } catch (error) {
      res.send(error);
    }
    // finally {
    //     await Reviews.deleteMany({});
    // }
  };
  
  