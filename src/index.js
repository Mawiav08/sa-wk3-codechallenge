// Your code here
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the buy ticket button
    var buyTicketButton = document.getElementById("buy-ticket");
    
    // Get the ticket count span
    var ticketCountSpan = document.getElementById("ticket-num");
    
    // Add click event listener to the buy ticket button
    buyTicketButton.addEventListener("click", function() {
      // Get the current ticket count
      var currentTicketCount = parseInt(ticketCountSpan.textContent.replace(/\D/g,''));
      
      // If there are available tickets
      if (currentTicketCount > 0) {
        // Decrease the ticket count by 1
        var newTicketCount = currentTicketCount - 1;
        
        // Update the ticket count span with the new count
        ticketCountSpan.textContent = "[" + newTicketCount + "]";
        
        // If there are no more tickets left, change the button text to "Sold Out"
        if (newTicketCount === 0) {
          buyTicketButton.textContent = "Sold Out";
          buyTicketButton.disabled = true; // Disable the button
        }
      }
    });
  });

    // Function to populate the films list
    function populateFilmsList(movies) {
        // Get the films ul element
        var filmsList = document.getElementById("films");
    
        // Clear any existing items in the films list
        filmsList.innerHTML = "";
    
        // Loop through each movie and create a list item for it
        movies.forEach(function(movie, index) {
          var li = document.createElement("li");
          li.className = "film item";
          li.textContent = movie.title;
    
          // Add click event listener to each movie item
          li.addEventListener("click", function() {
            // Update movie details based on the selected movie
            updateMovieDetails(movie);
          });
    
          filmsList.appendChild(li);
        });
      }
    
      // Function to update movie details
      function updateMovieDetails(movie) {
        // Update poster
        document.getElementById("poster").src = movie.poster;
        // Update title
        document.getElementById("title").textContent = movie.title;
        // Update runtime
        document.getElementById("runtime").textContent = movie.runtime;
        // Update description
        document.getElementById("film-info").textContent = movie.description;
        // Update showtime
        document.getElementById("showtime").textContent = movie.showtime;
        // Update ticket count
        document.getElementById("ticket-num").textContent = "[" + movie.ticketCount + "]";
    
        // Update buy ticket button state based on ticket availability
        var buyTicketButton = document.getElementById("buy-ticket");
        if (movie.ticketCount > 0) {
          buyTicketButton.textContent = "Buy Ticket";
          buyTicketButton.disabled = false;
        } else {
          buyTicketButton.textContent = "Sold Out";
          buyTicketButton.disabled = true;
        }
      }
    
      // Sample array of movie objects
      var movies = [
        {
          title: "The Giant Gila Monster",
          runtime: "108 minutes",
          showtime: "4:00PM",
          ticketCount: 3,
          description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
          poster: "/assets/p2157_v_v8_ab.png"
        },
        {
          title: "Manos: The Hands of Fate",
          runtime: "118 minutes",
          showtime: "6:45PM",
          ticketCount: 6,
          description: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
          poster: "/assets/p47781_v_v8_ac.png"
        }];
    
      // Populate the films list
      populateFilmsList(movies);
    
  
  