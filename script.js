// document.getElementById("messageForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const recipient = document.getElementById("recipient").value;
//     const message = document.getElementById("message").value;
//     const aiPoem = document.getElementById("aiPoem").checked;

//     let generatedText = `Dear ${recipient}, ${message}`;
//     if (aiPoem) {
//         generatedText += "\n(Poem AI Generated)"; // Placeholder for AI poem logic
//     }

//     const baseUrl = window.location.origin + window.location.pathname;
//     const encodedMessage = encodeURIComponent(generatedText);
//     const link = `${baseUrl}?msg=${encodedMessage}`;

//     document.getElementById("shareableLink").value = link;
//     document.getElementById("generatedLink").style.display = "block";
// });

// function copyLink() {
//     const linkInput = document.getElementById("shareableLink");
//     linkInput.select();
//     document.execCommand("copy");
//     alert("Link copied!");
// }

// // Show the message when the page loads
// window.onload = function() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const message = urlParams.get("msg");
//     if (message) {
//         document.getElementById("revealContainer").style.display = "block";
//         document.getElementById("revealedMessage").textContent = decodeURIComponent(message);
//     }
// };

// // Valentine Card Animation
// document.addEventListener("DOMContentLoaded", function() {
//     const card = document.getElementById("valentineCard");
//     if (card) {
//         card.addEventListener("click", function() {
//             gsap.to(".front", { rotationY: 180, duration: 1 });
//             gsap.to(".inside", { rotationY: 0, duration: 1, delay: 0.2 });
//         });
//     }
// });


// document.getElementById("openMessageForm").addEventListener("click", function() {
//     document.getElementById("messageForm").style.display = "block";
//     this.style.display = "none"; // Hide the button after clicking
// });

// // form hiding

// document.addEventListener("DOMContentLoaded", function() {
//     let urlParams = new URLSearchParams(window.location.search);
//     let message = urlParams.get("msg");

//     // If a message is present in the URL, hide the form and show the envelope
//     if (message) {
//         document.getElementById("messageFormContainer").style.display = "none"; // Hide the form
//         document.getElementById("openMessageForm").style.display = "block"; // Show button to create new message
//         document.getElementById("revealContainer").classList.remove("hidden");
//         document.getElementById("revealedMessage").textContent = decodeURIComponent(message);
//     }
// });

// document.getElementById("openMessageForm").addEventListener("click", function() {
//     document.getElementById("messageFormContainer").style.display = "block"; // Show the form when clicked
//     this.style.display = "none"; // Hide the button after opening form
// });

document.addEventListener("DOMContentLoaded", function() {
    let urlParams = new URLSearchParams(window.location.search);
    let message = urlParams.get("msg");

    if (message) {
        // Hide the form when a message exists
        document.getElementById("messageFormContainer").classList.add("hidden");
        document.getElementById("openMessageForm").classList.remove("hidden");
        document.getElementById("revealContainer").classList.remove("hidden");
        document.getElementById("revealedMessage").textContent = decodeURIComponent(message);
    }
});

// Show form when "Create Your Own Message" is clicked
document.getElementById("openMessageForm").addEventListener("click", function() {
    document.getElementById("messageFormContainer").classList.remove("hidden");
    this.classList.add("hidden");
});

// Generate shareable link
document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const recipient = document.getElementById("recipient").value;
    const message = document.getElementById("message").value;
    const aiPoem = document.getElementById("aiPoem").checked;

    let generatedText = `Dear ${recipient}, ${message}`;
    if (aiPoem) {
        generatedText += "\n(Poem AI Generated)"; // Placeholder for AI poem logic
    }

    const baseUrl = window.location.origin + window.location.pathname;
    const encodedMessage = encodeURIComponent(generatedText);
    const link = `${baseUrl}?msg=${encodedMessage}`;

    document.getElementById("shareableLink").value = link;
    document.getElementById("generatedLink").classList.remove("hidden");
});

function copyLink() {
    const linkInput = document.getElementById("shareableLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied!");
}

// Valentine Card Animation
document.getElementById("valentineCard").addEventListener("click", function() {
    gsap.to(".front", { rotationY: 180, duration: 1 });
    gsap.to(".inside", { rotationY: 0, duration: 1, delay: 0.2 });
});























