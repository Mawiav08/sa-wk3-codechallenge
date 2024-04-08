// Your code here
document.addEventListener("DOMContentLoaded", function () {

  // Get the buy ticket button
  var buyTicketButton = document.getElementById("buy-ticket");

  // Get the ticket count span
  var ticketCountSpan = document.getElementById("ticket-num");

  // Add click event listener to the buy ticket button
  buyTicketButton.addEventListener("click", function () {
    // Get the current ticket count
    var currentTicketCount = parseInt(ticketCountSpan.textContent.replace(/\D/g, ''));

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
  movies.forEach(function (movie, index) {
    var li = document.createElement("li");
    li.className = "film item";
    li.textContent = movie.title;

    // Add click event listener to each movie item
    li.addEventListener("click", function () {
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
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
  },
  {
    title: "Manos: The Hands of Fate",
    runtime: "118 minutes",
    showtime: "6:45PM",
    ticketCount: 6,
    description: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
  },
  {
    title: "Time Chasers",
    runtime: "93",
    showtime: "09:30PM",
    ticketCount: 19,
    description: "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
  },
  {
    title: "The Touch Of Satan",
    runtime: "101",
    showtime: "09:00PM",
    ticketCount: 9,
    description: "A young man meets a farm girl who is actually a witch.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg"
  },
  {
    title: "Santa Claus Conquers The Martians",
    runtime: "96",
    showtime: "03:30PM",
    ticketCount: 5,
    description: "The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg"
  },
  {
    title: "Track Of The Moon Beast",
    runtime: "112",
    showtime: "10:30PM",
    ticketCount: 14,
    description: "A young man is transformed into a hideous 'moon beast' due to a meteor fragment lodged in his body.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg"
  },
  {
    title: "The Skydivers",
    runtime: "94",
    showtime: "07:30PM",
    ticketCount: 8,
    description: "A woman seeks revenge on her former lover, who owns a skydiving business.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg"
  },
  {
    title: "The Killer Shrews",
    runtime: "115",
    showtime: "08:30PM",
    ticketCount: 8,
    description: "On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
  },
  {
    title: "Project Moon Base",
    runtime: "99",
    showtime: "07:30PM",
    ticketCount: 18,
    description: "A saboteur posing as a scientist strives to destroy the world's first space station.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg"
  },
  {
    title: "The Giant Spider Invasion",
    runtime: "122",
    showtime: "10:00PM",
    ticketCount: 6,
    description: "Giant spiders from another dimension invade Wisconsin.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg"
  },
  {
    title: "Catalina Caper",
    runtime: "104",
    showtime: "06:00PM",
    ticketCount: 18,
    description: "A group of swingin' teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg"
  },
  {
    title: "Secret Agent Super Dragon",
    runtime: "104",
    showtime: "07:00PM",
    ticketCount: 10,
    description: "A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg"
  },
  {
    title: "Wild Rebels",
    runtime: "100",
    showtime: "09:00PM",
    ticketCount: 9,
    description: "A stock car driver goes undercover as the wheel man for a motorcycle gang.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg"
  },
  {
    title: "Danger: Diabolik",
    runtime: "111",
    showtime: "08:00PM",
    ticketCount: 10,
    description: "International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg"
  },
  {
    title: "Village Of The Giants",
    runtime: "98",
    showtime: "04:45PM",
    ticketCount: 17,
    description: "Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.",
    poster: "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg"
  }
];


// Populate the films list
populateFilmsList(movies);


