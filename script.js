    // Define the API endpoint URL
    const url = '';

    // Use the Fetch API to make an HTTP GET request to the API endpoint
    fetch(url)
      .then(response => response.json())  // Parse the JSON response data
      .then(data => {
        // Display the response data in the HTML page
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
          <h2>${data.title}</h2>
          <p>User ID: ${data.userId}</p>
          <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>
        `;
      })
      .catch(error => {
        console.error('Error:', error);
      });