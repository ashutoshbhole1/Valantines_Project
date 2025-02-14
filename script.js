// // document.getElementById("messageForm").addEventListener("submit", function(event) {
// //     event.preventDefault();
// //     const recipient = document.getElementById("recipient").value;
// //     const message = document.getElementById("message").value;
// //     const aiPoem = document.getElementById("aiPoem").checked;

// //     let generatedText = `Dear ${recipient}, ${message}`;
// //     if (aiPoem) {
// //         generatedText += "\n(Poem AI Generated)"; // Placeholder for AI poem logic
// //     }

// //     const baseUrl = window.location.origin + window.location.pathname;
// //     const encodedMessage = encodeURIComponent(generatedText);
// //     const link = `${baseUrl}?msg=${encodedMessage}`;

// //     document.getElementById("shareableLink").value = link;
// //     document.getElementById("generatedLink").style.display = "block";
// // });

// // function copyLink() {
// //     const linkInput = document.getElementById("shareableLink");
// //     linkInput.select();
// //     document.execCommand("copy");
// //     alert("Link copied!");
// // }

// // // Show the message when the page loads
// // window.onload = function() {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const message = urlParams.get("msg");
// //     if (message) {
// //         document.getElementById("revealContainer").style.display = "block";
// //         document.getElementById("revealedMessage").textContent = decodeURIComponent(message);
// //     }
// // };

// // // Valentine Card Animation
// // document.addEventListener("DOMContentLoaded", function() {
// //     const card = document.getElementById("valentineCard");
// //     if (card) {
// //         card.addEventListener("click", function() {
// //             gsap.to(".front", { rotationY: 180, duration: 1 });
// //             gsap.to(".inside", { rotationY: 0, duration: 1, delay: 0.2 });
// //         });
// //     }
// // });


// // document.getElementById("openMessageForm").addEventListener("click", function() {
// //     document.getElementById("messageForm").style.display = "block";
// //     this.style.display = "none"; // Hide the button after clicking
// // });

// // // form hiding

// // document.addEventListener("DOMContentLoaded", function() {
// //     let urlParams = new URLSearchParams(window.location.search);
// //     let message = urlParams.get("msg");

// //     // If a message is present in the URL, hide the form and show the envelope
// //     if (message) {
// //         document.getElementById("messageFormContainer").style.display = "none"; // Hide the form
// //         document.getElementById("openMessageForm").style.display = "block"; // Show button to create new message
// //         document.getElementById("revealContainer").classList.remove("hidden");
// //         document.getElementById("revealedMessage").textContent = decodeURIComponent(message);
// //     }
// // });

// // document.getElementById("openMessageForm").addEventListener("click", function() {
// //     document.getElementById("messageFormContainer").style.display = "block"; // Show the form when clicked
// //     this.style.display = "none"; // Hide the button after opening form
// // });

// document.addEventListener("DOMContentLoaded", function() {
//     let urlParams = new URLSearchParams(window.location.search);
//     let message = urlParams.get("msg");

//     if (message) {
//         // Hide the form when a message exists
//         document.getElementById("messageFormContainer").classList.add("hidden");
//         document.getElementById("openMessageForm").classList.remove("hidden");
//         document.getElementById("revealContainer").classList.remove("hidden");
//         document.getElementById("revealedMessage").textContent = decodeURIComponent(message);
//     }
// });

// // Show form when "Create Your Own Message" is clicked
// document.getElementById("openMessageForm").addEventListener("click", function() {
//     document.getElementById("messageFormContainer").classList.remove("hidden");
//     this.classList.add("hidden");
// });

// // Generate shareable link
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
//     document.getElementById("generatedLink").classList.remove("hidden");
// });

// function copyLink() {
//     const linkInput = document.getElementById("shareableLink");
//     linkInput.select();
//     document.execCommand("copy");
//     alert("Link copied!");
// }

// // Valentine Card Animation
// document.getElementById("valentineCard").addEventListener("click", function() {
//     gsap.to(".front", { rotationY: 180, duration: 1 });
//     gsap.to(".inside", { rotationY: 0, duration: 1, delay: 0.2 });
// });




// // heading change
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the heading element
//     let heading = document.getElementById("page-heading");

//     // Check if the URL contains a message ID
//     let urlParams = new URLSearchParams(window.location.search);
//     let messageId = urlParams.get("msg");

//     if (messageId) {
//         // If there's an "id" in the URL, change the heading
//         heading.innerHTML = "You Have Received a Valentine's Message 💖";
//     }
// });


















// document.addEventListener("DOMContentLoaded", function() {
//     let urlParams = new URLSearchParams(window.location.search);
//     let messageId = urlParams.get("id"); // Changed from 'msg' to 'id'

//     if (messageId) {
//         // Hide the form when a message exists
//         document.getElementById("messageFormContainer").classList.add("hidden");
//         document.getElementById("openMessageForm").classList.remove("hidden");
//         document.getElementById("revealContainer").classList.remove("hidden");

//         // Retrieve the message from localStorage
//         let storedMessage = localStorage.getItem(messageId);
//         if (storedMessage) {
//             document.getElementById("revealedMessage").textContent = storedMessage;
//         } else {
//             document.getElementById("revealedMessage").textContent = "Message not found!";
//         }
//     }
// });

// // Show form when "Create Your Own Message" is clicked
// document.getElementById("openMessageForm").addEventListener("click", function() {
//     document.getElementById("messageFormContainer").classList.remove("hidden");
//     this.classList.add("hidden");
// });

// // Generate shareable link with short ID
// document.getElementById("messageForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const recipient = document.getElementById("recipient").value;
//     const message = document.getElementById("message").value;
//     const aiPoem = document.getElementById("aiPoem").checked;

//     let generatedText = `Dear ${recipient}, ${message}`;
//     if (aiPoem) {
//         generatedText += "\n(Poem AI Generated)"; // Placeholder for AI poem logic
//     }

//     // Generate a short unique ID
//     let uniqueId = Math.random().toString(36).substring(2, 8);

//     // Store the message in localStorage
//     localStorage.setItem(uniqueId, generatedText);

//     // Generate short link
//     const baseUrl = window.location.origin + window.location.pathname;
//     const shortLink = `${baseUrl}?id=${uniqueId}`; // Changed to 'id' instead of 'msg'

//     document.getElementById("shareableLink").value = shortLink;
//     document.getElementById("generatedLink").classList.remove("hidden");
// });

// // Copy link function
// function copyLink() {
//     const linkInput = document.getElementById("shareableLink");
//     linkInput.select();
//     document.execCommand("copy");
//     alert("Link copied!");
// }

// // Valentine Card Animation
// document.getElementById("valentineCard").addEventListener("click", function() {
//     gsap.to(".front", { rotationY: 180, duration: 1 });
//     gsap.to(".inside", { rotationY: 0, duration: 1, delay: 0.2 });
// });

// // Change heading when viewing a message
// document.addEventListener("DOMContentLoaded", function () {
//     let heading = document.getElementById("page-heading");
//     let urlParams = new URLSearchParams(window.location.search);
//     let messageId = urlParams.get("id");

//     if (messageId) {
//         heading.innerHTML = "You Have Received a Valentine's Message 💖";
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    let urlParams = new URLSearchParams(window.location.search);
    let messageId = urlParams.get("id");

    if (messageId) {
        document.getElementById("messageFormContainer").classList.add("hidden");
        document.getElementById("openMessageForm").classList.remove("hidden");
        document.getElementById("revealContainer").classList.remove("hidden");

        let storedMessage = localStorage.getItem(messageId);
        document.getElementById("revealedMessage").textContent = storedMessage ? storedMessage : "Message not found!";
    }
});

document.getElementById("openMessageForm").addEventListener("click", function() {
    document.getElementById("messageFormContainer").classList.remove("hidden");
    this.classList.add("hidden");
});

document.getElementById("messageForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const recipient = document.getElementById("recipient").value;
    const message = document.getElementById("message").value;
    // const aiPoemChecked = document.getElementById("aiPoem").checked;
    // const loadingMessage = document.getElementById("loadingMessage");

    // let generatedText = `${message}`;
    let generatedText = `Dear ${recipient}, ${message}`;

    // if (aiPoemChecked) {
    //     loadingMessage.classList.remove("hidden");
    //     try {
    //         const poem = await generateAIPoem(recipient, message);
    //         generatedText += `\n\n💖 AI-Generated Poem 💖\n${poem}`;
    //     } catch (error) {
    //         generatedText += "\n(Poem generation failed. Please try again.)";
    //     }
    //     loadingMessage.classList.add("hidden");
    // }

    let uniqueId = Math.random().toString(36).substring(2, 8);
    localStorage.setItem(uniqueId, generatedText);

    const baseUrl = window.location.origin + window.location.pathname;
    const shortLink = `${baseUrl}?id=${uniqueId}`;

    document.getElementById("shareableLink").value = shortLink;
    document.getElementById("generatedLink").classList.remove("hidden");
});

// async function generateAIPoem(recipient, message) {
//     const apiKey = "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";

//     const prompt = `Write a short and romantic poem for ${recipient}, incorporating this message: "${message}". Keep it heartfelt and poetic.`;

//     try {
//         const response = await fetch("https://api.openai.com/v1/completions", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${apiKey}`
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo-instruct",
//                 prompt: prompt,
//                 max_tokens: 50,
//                 temperature: 0.7
//             })
//         });

//         const data = await response.json();
//         return data.choices[0].text.trim();
//     } catch (error) {
//         console.error("Error fetching AI poem:", error);
//         return "(Error generating poem)";
//     }
// }

// async function generateAIPoem(recipient, message) {
//     const apiKey = "s" // Your OpenAI API key

//     const prompt = `Write a short and romantic poem for ${recipient}, incorporating this message: "${message}". Keep it heartfelt and poetic.`;

//     try {
//         const response = await fetch("https://api.openai.com/v1/completions", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${apiKey}`
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo-instruct",
//                 prompt: prompt,
//                 max_tokens: 50,
//                 temperature: 0.7
//             })
//         });

//         if (response.status === 429) {
//             console.warn("OpenAI API rate limit exceeded. Retrying in 10 seconds...");
//             await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 sec and retry
//             return generateAIPoem(recipient, message);
//         }

//         if (!response.ok) {
//             throw new Error(`API error: ${response.status} - ${response.statusText}`);
//         }

//         const data = await response.json();
//         if (!data.choices || !data.choices[0]) {
//             throw new Error("Invalid API response structure");
//         }

//         return data.choices[0].text.trim();
//     } catch (error) {
//         console.error("Error fetching AI poem:", error);
//         return "(Error generating poem, please try again later.)";
//     }
// }


function copyLink() {
    const linkInput = document.getElementById("shareableLink");
    linkInput.select();
    document.execCommand("copy");
    alert("Link copied!");
}

document.getElementById("valentineCard").addEventListener("click", function() {
    gsap.to(".front", { rotationY: 180, duration: 1 });
    gsap.to(".inside", { rotationY: 0, duration: 1, delay: 0.2 });
});

document.addEventListener("DOMContentLoaded", function () {
    let heading = document.getElementById("page-heading");
    let urlParams = new URLSearchParams(window.location.search);
    let messageId = urlParams.get("id");

    if (messageId) {
        heading.innerHTML = "You Have Received a Valentine's Message 💖";
    }
});
