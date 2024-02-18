'use client'
import React, { useState } from 'react';
import { TextField, Typography, Button, Box, Rating } from '@mui/material';
import { api } from '~/trpc/react';


const AlbumReviewForm = ({albumId}:{albumId:string}) => {
  const [reviewText, setReviewText] = useState('');
  const [value, setValue] = React.useState<number | null>(0);

  const sendReview = api.review.create.useMutation()



  const handleReviewTextChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setReviewText(event.target.value);
  };


  const handleSubmit = () => {
    // You can handle form submission here, e.g., send review to backend
    console.log("Review Text:", reviewText);
    console.log("Rating:", value);
    sendReview.mutate({
          albumId: albumId,
          rating: value!,
          message: reviewText
    });
    // Reset the form after submission
    setReviewText('');
    setValue(0);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Write a Review
      </Typography>
      <TextField
        multiline
        rows={4}
        fullWidth
        label="Your Review"
        variant="outlined"
        value={reviewText}
        onChange={handleReviewTextChange}
        margin="normal"
      />
      <Typography component="legend">Rating (out of 10)</Typography>
      <Rating
        name="album-rating"
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
          }}
        precision={1}
      />
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  );
};

export default AlbumReviewForm;
