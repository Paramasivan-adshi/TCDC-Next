"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleReviews = ({ placeId, apiKey }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Milpitas%20Town%20Center%20Dental%20Care%20-%20Dr.%20Cesar%20Simon&inputtype=textquery&fields=place_id&key=AIzaSyClBuSWmag9j9xgyTHwy-5yLPs6Q6e7t4s`    

        );
        setReviews(response.data.result.reviews);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [placeId, apiKey]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.author_name}>
            <p><strong>{review.author_name}</strong>: {review.rating} stars</p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
