//DOM nodes from page
const thumbnailContainer = document.getElementById("thumbnail-container");
const backgroundImage = document.getElementById("background-image");
const musicPlayer = document.getElementById("music-player");

//Array to store objects
const objects = [
  {
    src: "https://wallpapers.com/images/hd/new-york-city-at-night-pictures-wj9y3lfi1kf7crjx.jpg",
    alt: "A New York highway at night, with buildings in the periphery",
  },
  {
    src: "https://images.unsplash.com/photo-1610270573578-54bfcbf7ad30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvbmclMjBleHBvc3VyZSUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
    alt: "A Long exposure picture of a city street at night",
  },
  {
    src: "https://www.eyexplore.com/wp-content/uploads/long-exposure-tips-and-tricks-1.jpg",
    alt: "A train moving through Tokyo, illuminated by neon lights",
  },
  {
    src: "https://i.pinimg.com/originals/f0/97/dc/f097dc4b2e0e9a1fa1aff9c718aad486.jpg",
    alt: "An active highway in Hong Kong at night, long exposure creating a red and blue strobe effect",
  },
];

for (let i = 0; i < objects.length; i++) {
  const img = document.createElement("img");

  img.src = objects[i].src;
  img.alt = objects[i].alt;

  img.addEventListener("click", function () {
    backgroundImage.src = objects[i].src;
    backgroundImage.alt = objects[i].alt;
    console.log(objects[i].alt, "was clicked");

    // musicPlayer.src = object[i].audio;
    // musicPlayer.play();
  });

  thumbnailContainer.appendChild(img);
}

// this isn't used in this example
// a variable that represents the current position in the array
// pressing the right arrow, this gets increased, and the image gets changed to THIS index in the array
//let imgIndex = 0;
