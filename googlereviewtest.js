const axios = require('axios');

const apiKey = 'AIzaSyClBuSWmag9j9xgyTHwy-5yLPs6Q6e7t4s'; // Replace with your actual API key
const input = 'Milpitas Town Center Dental Care - Dr. Cesar Simon';
const fields = 'place_id';
const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(input)}&inputtype=textquery&fields=${fields}&key=${apiKey}`;

axios.get(url)
  .then(response => {
    if (response.data && response.data.candidates && response.data.candidates.length > 0) {
      const placeId = response.data.candidates[0].place_id;
      console.log('Place ID:', placeId);
    } else {
      console.error('No candidates found for the given input.');
    }
  })
  .catch(error => {
    console.error('Error fetching place ID:', error);
  });
