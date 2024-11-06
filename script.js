document.getElementById('get-joke-btn').addEventListener('click', fetchJoke);
document.getElementById('clear-joke-btn').addEventListener('click', clearJoke);

function fetchJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            let joke = '';
            if (data.type === 'single') {
                joke = data.joke;
            } else {
                joke = `${data.setup} - ${data.delivery}`;
            }
            document.getElementById('joke-display').innerText = joke;
            document.getElementById('char-count').innerText = `Character count: ${joke.length}`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            document.getElementById('joke-display').innerText = 'Failed to fetch joke.';
            document.getElementById('char-count').innerText = 'Character count: 0';
        });
}

function clearJoke() {
    document.getElementById('joke-display').innerText = '';
    document.getElementById('char-count').innerText = 'Character count: 0';
}