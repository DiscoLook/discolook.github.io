// script.js

// Function to load and display decorations
async function loadDecorations() {
    try {
        const response = await fetch('decorations.json'); // Adjust the path to your JSON file
        const data = await response.json();
        const gridElement = document.getElementById('decorationsGrid');

        // Loop through groups and decorations
        for (const group in data.groups) {
            const groupDiv = document.createElement('div');
            groupDiv.innerHTML = `<h2>${group}</h2>`;
            gridElement.appendChild(groupDiv);

            data.groups[group].forEach(decor => {
                const decorDiv = document.createElement('div');
                decorDiv.classList.add('decoration');

                const img = document.createElement('img');
                img.src = decor.url;
                img.alt = decor.name;

                const animatedImg = document.createElement('img');
                animatedImg.src = decor.animatedUrl;
                animatedImg.alt = decor.name;

                // Add hover effect
                decorDiv.appendChild(img);
                decorDiv.addEventListener('mouseenter', () => {
                    img.style.display = 'none';
                    animatedImg.style.display = 'block';
                });

                decorDiv.addEventListener('mouseleave', () => {
                    img.style.display = 'block';
                    animatedImg.style.display = 'none';
                });

                decorDiv.appendChild(animatedImg);
                animatedImg.style.display = 'none'; // Hide animated image initially

                groupDiv.appendChild(decorDiv);
            });
        }
    } catch (error) {
        console.error('Error loading decorations:', error);
    }
}

// Load decorations on page load
window.onload = loadDecorations;
