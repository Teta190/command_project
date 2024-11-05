// Ensuring the DOM is fully loaded before executing the script

document.addEventListener("DOMContentLoaded", () => {
  // Selecting the news grid container

  const newsGrid = document.querySelector(".news-grid");

  // Selecting all news articles within the news grid

  const articles = document.querySelectorAll(".news-article");

  // Selecting the previous button

  const prevButton = document.getElementById("prev");

  // Selecting the next button

  const nextButton = document.getElementById("next");

  // Number of articles to display per view

  const articlesPerView = 3;

  // Initialize the index to keep track of the current slide position

  let index = 0;

  // Function to update the slider position

  function updateSlider() {
    // Calculate the maximum index based on the number of articles and articles per view

    const maxIndex = Math.ceil(articles.length / articlesPerView) - 1;
    // If index is less than 0, set it to maxIndex (loop to the last set of articles)
    if (index < 0) index = maxIndex;
    // If index is greater than maxIndex, set it to 0 (loop to the first set of articles)
    if (index > maxIndex) index = 0;
    // Update the transform property to slide the news grid
    newsGrid.style.transform =
      "translateX(" + (-index * 100) / articlesPerView + "%)";
  }

  // Event listener for the previous button click
  prevButton.addEventListener("click", () => {
    // Decrement the index to move to the previous set of articles
    index--;
    // Update the slider position
    updateSlider();
  });

  // Event listener for the next button click
  nextButton.addEventListener("click", () => {
    // Increment the index to move to the next set of articles
    index++;
    // Update the slider position
    updateSlider();
  });

  // Initial call to set the slider position based on the initial index
  updateSlider();
});
