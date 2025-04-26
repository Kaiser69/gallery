// Image Modal Logic
function openModal(image) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeModal() {
    const modal = document.getElementById('imgModal');
    modal.style.display = "none";
}

// Contact Form Inquiry (For now, just a console log)
function contactArtist(artworkName) {
    console.log("Inquiring about: " + artworkName);
    alert("Thank you for your inquiry! I will get back to you soon. Please contact with me on contact form");
}

// Function to open the modal and display the clicked image
function openModal(img) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    var caption = document.getElementById("caption");

    modal.style.display = "block";  // Show the modal
    modalImg.src = img.src;        // Set the image source to the clicked image
    caption.innerHTML = img.alt;   // Set the caption (image description)
}

// Function to close the modal when the close button (×) is clicked
function closeModal() {
    var modal = document.getElementById("imgModal");
    modal.style.display = "none";   // Hide the modal
}


// Function to collapsible.
document.querySelectorAll(".collapsible").forEach(btn => {
    btn.onclick = function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.textContent = "More";
        this.style.color = "green";
      } else {
        content.style.display = "block";
        this.textContent = "Less";
        this.style.color = "red";
      }
    }
  });