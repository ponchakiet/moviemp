document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const searchTerm = document.getElementById('search-input').value.toLowerCase().split(' '); // Split search term into keywords
      const movieBoxes = document.querySelectorAll('.movie-box');
  
      movieBoxes.forEach(movieBox => {
        const movieTitle = movieBox.querySelector('.movie-title').textContent.toLowerCase();
        let movieFound = false; // Flag to track if any keyword matches
  
        // Check if any keyword in searchTerm matches the movie title
        searchTerm.forEach(keyword => {
          if (movieTitle.includes(keyword)) {
            movieFound = true; // Keyword found, set flag
            return; // Exit the inner loop if a match is found
          }
        });
  
        if (movieFound) {
          movieBox.style.display = 'block';
        } else {
          movieBox.style.display = 'none';
        }
      });
    }
  });