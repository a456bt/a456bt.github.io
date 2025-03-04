// We’ll attach event listeners to all .play-button elements.
// When clicked, we replace the thumbnail with an iframe that loads the WebGL build.

document.addEventListener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play-button");
  
  playButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const gameUrl = event.target.getAttribute("data-game-url");
      const parentItem = event.target.closest(".game-item");

      // Create an iframe element to embed the game
      const iframe = document.createElement("iframe");
      iframe.src = gameUrl;

      // Clear out any existing thumbnail/overlay inside .game-item
      parentItem.innerHTML = "";
      
      // Add the iframe
      parentItem.appendChild(iframe);
    });
  });
});
