// Fetch the JSON file
fetch("class.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the container where cards will be inserted
    const cardsContainer = document.getElementById("cardsContainer");

    // Loop through each course in the JSON file and create a card
    data.forEach((course) => {
      // Create card element
      const card = document.createElement("div");
      card.className = "col-md-4"; // Adjust the column size for responsive design
      card.innerHTML = `
                        <div class="card">
                            <img src="${course.ImageUrl}" class="p-5 card-img-top" alt="${course.Name}">
                            <div class="card-body">
                                <h5 class="card-title">${course.Name}</h5>
                                <p class="card-text">${course.ShortDesc}</p>
                                <a href="#" class="btn btn-outline-dark">View</a>
                            </div>
                        </div>
                    `;
      // Append the card to the container
      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching the JSON data:", error);
  });
