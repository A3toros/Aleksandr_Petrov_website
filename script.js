document.getElementById('menuButton').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Hide dropdown when clicking outside of the menu
document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuButton = document.getElementById('menuButton');
    if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});


document.getElementById("dropdown-button").addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown-list");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});


// Handle dropdown item click
document.querySelectorAll("#dropdown-list li").forEach(item => {
    item.addEventListener("click", function () {
        const expandedText = document.getElementById("expanded-text");
        const hideButton = document.getElementById("hide-text-button");

        // Clear previous content
        expandedText.innerHTML = "";

        // Get the index of the clicked item
        const selectedIndex = this.getAttribute("data-index");

        // Find the corresponding text section
        const selectedTextSection = document.querySelector(`#text-sections .text-content[data-index="${selectedIndex}"]`);

        if (selectedTextSection) {
            // Clone and append the text directly to the page
            const clonedText = selectedTextSection.cloneNode(true);
            clonedText.classList.remove("hidden"); // Ensure it becomes visible
            expandedText.appendChild(clonedText);

            // Show the hide button
            hideButton.classList.remove("hidden");
        }

        // Hide dropdown after selecting an item
        document.getElementById("dropdown-list").style.display = "none";
    });
});

// Hide text when the button is clicked
document.getElementById("hide-text-button").addEventListener("click", function () {
    document.getElementById("expanded-text").innerHTML = ""; // Remove text
    this.classList.add("hidden"); // Hide the button
    document.getElementById("dropdown-button").scrollIntoView({ behavior: "smooth" });
});






document.getElementById("dropdown-button2").addEventListener("click", function () {
    const dropdown = document.getElementById("dropdown-list2");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});


// Handle dropdown item click
document.querySelectorAll("#dropdown-list2 li").forEach(item => {
    item.addEventListener("click", function () {
        const expandedText = document.getElementById("expanded-text2");
        const hideButton = document.getElementById("hide-text-button2");

        // Clear previous content
        expandedText.innerHTML = "";

        // Get the index of the clicked item
        const selectedIndex = this.getAttribute("data-index");

        // Find the corresponding text section
        const selectedTextSection = document.querySelector(`#text-sections2 .text-content2[data-index="${selectedIndex}"]`);

        if (selectedTextSection) {
            // Clone and append the text directly to the page
            const clonedText = selectedTextSection.cloneNode(true);
            clonedText.classList.remove("hidden"); // Ensure it becomes visible
            expandedText.appendChild(clonedText);

            // Show the hide button
            hideButton.classList.remove("hidden");
        }

        // Hide dropdown after selecting an item
        document.getElementById("dropdown-list2").style.display = "none";
    });
});

// Hide text when the button is clicked
document.getElementById("hide-text-button2").addEventListener("click", function () {
    document.getElementById("expanded-text2").innerHTML = ""; // Remove text
    this.classList.add("hidden"); // Hide the button
    document.getElementById("dropdown-button2").scrollIntoView({ behavior: "smooth" });
});




