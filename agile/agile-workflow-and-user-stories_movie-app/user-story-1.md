# Title

## Value Proposition

**As a** `user` <br>
**I want to** `see a list of movies` <br>
**so that** `so that I can browse the available movies` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria
The page displays a header with the text "movie app" at the top of the page.

Each movie item includes:
A cover image.
A rating shown at the top right corner of the cover.
The movie name displayed below the cover, aligned to the left.
If the movie data cannot be retrieved:
An error message is displayed saying:
"Sorry, we couldn't retrieve the latest movie data at the moment. Please try again later."
-

## Tasks

1. create a feature branch movie-list
2. fetch the list of current movies
3. implement the error handling logic 
4. create the component Movie which renders:
- the name of the movie
- the image of the movie
- the rating of the movie
5. create the component MovieList which 
maps through the list of movies and renders a Movie component 
6. render the MovieList in index.js

