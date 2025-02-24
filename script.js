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

























