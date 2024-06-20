document.addEventListener("DOMContentLoaded", function() {
    // Selecting elements
    let slide = document.querySelectorAll(".slideCard");
    let cards = document.querySelectorAll(".card");
    let count = 0;

    // Setting initial positions of slide cards
    slide.forEach(function(slide, index) {
        slide.style.left = `${index * 100}%`;
    });

    // Function to move slides
    function moveSlides() {
        slide.forEach(function(slide) {
            slide.style.transform = `translateX(-${count * 100}%)`;
        });
    }

    // Automatic slide change every 2 seconds
    let intervalId = setInterval(function() {
        count++;
        if (count === slide.length) {
            count = 0;
        }
        moveSlides();
    }, 2000);

    // Stop automatic sliding when a card is clicked
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
            clearInterval(intervalId); // Stop the automatic sliding

            // Log the first child's source (assuming it's the image)
            console.log(card.firstElementChild.src);

            // Hide container and display nav
            document.querySelector(".container").style.display = "none";
            document.querySelector("nav").style.display = "flex";

            // Create and append card details
            let div = document.createElement("div");
            div.classList.add("cardDetail");
            div.innerHTML = `
                <img src="${card.firstElementChild.src}" alt="">
                <div class="detailText">
                    <h2>Top Products</h2>
                    <p>Bank Offer10% off on SBI Credit Card, up to ₹1250 on orders of ₹5,000 and aboveT&C</p>
                    <button>Buy Now</button>
                    <button>Add To Cart</button>
                    <button><a href="">Back</a></button>
                </div>
            `;
            document.body.appendChild(div);
        });
    });
});