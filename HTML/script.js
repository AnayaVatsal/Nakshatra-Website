document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '6caInGlgADSpgrZxZ1S8FhReWS8YJ4PzH372A8Iv'; 
    // Entered api key unsecurely here
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('apod-image').src = data.url;
            document.getElementById('apod-title').textContent = data.title;
            // document.getElementById('apod-description').textContent = data.explanation;
        })
        .catch(error => {
            console.error("Error fetching APOD:", error);
            document.getElementById('apod-container').innerHTML = "<p>Unable to load the Astronomy Picture of the Day.</p>";
        });
});
