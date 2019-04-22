$("document").ready(function() {
  // Initialize all the columns before the button has been pressed
  // There is no content specified in the html so the page would
  // be empty if we didn't update it here.
  // Try commenting out these lines and refreshing the page!
  updateColumn(1);
  updateColumn(2);
  updateColumn(3);

  $("#changeButton").click(function() {
    updateColumn(1);
    updateColumn(2);
    updateColumn(3);
  });

 // 1.  Add a second button in the header that changes the body color of the page.
    // Call the existing randomBodyColor function to get a random color

 // 2. Add a 4th column to the HTML. Update our page load and our click handler code to update the 4th column

 // BONUS: Can you figure out how to add two dogs to the randomDog function?

 // BONUS: Can you figure out how to add two new colors to the randomBodyColor function?

});

function updateColumn(number) {
  $element = $("#funhouse section:nth-child(" + number + ")");
  $element.css('background-color', randomColumnColor());
  dog = randomDog();
  $element.find('h3').html(dog.name);
  $element.find('img').attr('src', dog.image);
}
