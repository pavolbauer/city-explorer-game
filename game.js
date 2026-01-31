// Game State
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    currentRound: 1,
    totalRounds: 5,
    continent: 'europe',
    difficulty: 'easy',
    mapType: 'standard',
    cityType: 'capitals',
    language: 'english',
    availableCities: [],
    usedCityIndices: [],
    currentCity: null,
    map: null,
    guessMarker: null,
    cityMarker: null,
    lineMarker: null
};

// DOM Elements
const screens = {
    welcome: document.getElementById('welcome-screen'),
    setup: document.getElementById('setup-screen'),
    game: document.getElementById('game-screen'),
    winner: document.getElementById('winner-screen')
};

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    initializeWelcomeScreen();
});

// Welcome Screen Functions
function initializeWelcomeScreen() {
    const addPlayerBtn = document.getElementById('add-player-btn');
    const startSetupBtn = document.getElementById('start-setup-btn');
    
    addPlayerBtn.addEventListener('click', addPlayerInput);
    startSetupBtn.addEventListener('click', () => {
        if (collectPlayers()) {
            showScreen('setup');
            initializeSetupScreen();
        }
    });
    
    // Add event listeners to remove buttons for initial player
    updateRemoveButtons();
}

function addPlayerInput() {
    const playerInputs = document.getElementById('player-inputs');
    const currentCount = playerInputs.children.length;
    
    if (currentCount < 4) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'player-input-group';
        inputGroup.innerHTML = `
            <input type="text" class="player-name-input" placeholder="Player ${currentCount + 1} Name" maxlength="20">
            <button class="remove-player-btn">Remove</button>
        `;
        
        playerInputs.appendChild(inputGroup);
        updatePlayerCount();
        updateRemoveButtons();
        
        // Add remove button event listener
        inputGroup.querySelector('.remove-player-btn').addEventListener('click', function() {
            removePlayerInput(inputGroup);
        });
    }
}

function removePlayerInput(inputGroup) {
    const playerInputs = document.getElementById('player-inputs');
    if (playerInputs.children.length > 1) {
        inputGroup.remove();
        updatePlayerCount();
        updateRemoveButtons();
        updatePlayerPlaceholders();
    }
}

function updatePlayerCount() {
    const count = document.getElementById('player-inputs').children.length;
    document.getElementById('player-count').textContent = count;
    
    const addBtn = document.getElementById('add-player-btn');
    addBtn.style.display = count >= 4 ? 'none' : 'inline-block';
}

function updateRemoveButtons() {
    const playerInputs = document.getElementById('player-inputs');
    const removeButtons = playerInputs.querySelectorAll('.remove-player-btn');
    
    removeButtons.forEach((btn, index) => {
        btn.style.display = playerInputs.children.length > 1 ? 'inline-block' : 'none';
    });
}

function updatePlayerPlaceholders() {
    const inputs = document.querySelectorAll('.player-name-input');
    inputs.forEach((input, index) => {
        input.placeholder = `Player ${index + 1} Name`;
    });
}

function collectPlayers() {
    const inputs = document.querySelectorAll('.player-name-input');
    const players = [];
    
    inputs.forEach((input, index) => {
        const name = input.value.trim() || `Player ${index + 1}`;
        players.push({
            name: name,
            totalDistance: 0,
            roundDistances: []
        });
    });
    
    if (players.length === 0) {
        alert('Please add at least one player!');
        return false;
    }
    
    gameState.players = players;
    return true;
}

// Setup Screen Functions
function initializeSetupScreen() {
    const backBtn = document.getElementById('back-to-players-btn');
    const startGameBtn = document.getElementById('start-game-btn');
    
    backBtn.addEventListener('click', () => showScreen('welcome'));
    startGameBtn.addEventListener('click', startGame);
}

function startGame() {
    // Collect game settings
    gameState.continent = document.getElementById('continent-select').value;
    gameState.difficulty = document.getElementById('difficulty-select').value;
    gameState.mapType = document.getElementById('map-type-select').value;
    gameState.cityType = document.getElementById('city-type-select').value;
    gameState.language = document.getElementById('language-select').value;
    gameState.totalRounds = parseInt(document.getElementById('rounds-input').value);
    gameState.currentRound = 1;
    gameState.currentPlayerIndex = 0;
    
    // Reset player scores
    gameState.players.forEach(player => {
        player.totalDistance = 0;
        player.roundDistances = [];
    });
    
    // Get cities for the selected continent with language setting
    gameState.availableCities = getCitiesForGame(gameState.continent, gameState.cityType, gameState.language);
    
    if (gameState.availableCities.length === 0) {
        alert('No cities available for this continent!');
        return;
    }
    
    // Shuffle cities
    shuffleArray(gameState.availableCities);
    
    // Reset used city indices
    gameState.usedCityIndices = [];
    
    showScreen('game');
    initializeGameScreen();
}

// Game Screen Functions
function initializeGameScreen() {
    // Initialize map
    if (gameState.map) {
        gameState.map.remove();
    }
    
    const bounds = getContinentBounds(gameState.continent);
    gameState.map = L.map('map').fitBounds(bounds);
    
    // Set map tiles based on type and difficulty
    const tileLayer = getMapTileLayer();
    tileLayer.addTo(gameState.map);
    
    // Set up scoreboard
    updateScoreboard();
    
    // Add event listeners
    document.getElementById('toggle-scoreboard-btn').addEventListener('click', toggleScoreboard);
    document.getElementById('next-turn-btn').addEventListener('click', nextTurn);
    
    // Start first turn
    startTurn();
}

function getMapTileLayer() {
    let tileUrl, options;
    
    if (gameState.mapType === 'satellite') {
        // Satellite imagery
        tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        options = {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 18
        };
    } else {
        // Standard map based on difficulty
        if (gameState.difficulty === 'hard') {
            // Terrain only, no labels
            tileUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
            options = {
                attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap',
                maxZoom: 17
            };
        } else if (gameState.difficulty === 'medium') {
            // Standard map but we'll hide country names with CSS overlay
            tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            options = {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19,
                className: 'medium-difficulty-map'
            };
        } else {
            // Easy - full detailed map
            tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            options = {
                attribution: '&copy; OpenStreetMap contributors',
                maxZoom: 19
            };
        }
    }
    
    return L.tileLayer(tileUrl, options);
}

function getContinentBounds(continent) {
    const bounds = {
        'africa': [[-35, -20], [37, 52]],
        'antarctica': [[-90, -180], [-60, 180]],
        'asia': [[-10, 60], [55, 150]],
        'europe': [[35, -10], [71, 40]],
        'north-america': [[5, -170], [72, -50]],
        'south-america': [[-56, -82], [13, -34]],
        'oceania': [[-47, 110], [-10, 180]]
    };
    
    return bounds[continent] || [[- 90, -180], [90, 180]];
}

function startTurn() {
    // Clear previous markers
    if (gameState.guessMarker) {
        gameState.map.removeLayer(gameState.guessMarker);
        gameState.guessMarker = null;
    }
    if (gameState.cityMarker) {
        gameState.map.removeLayer(gameState.cityMarker);
        gameState.cityMarker = null;
    }
    if (gameState.lineMarker) {
        gameState.map.removeLayer(gameState.lineMarker);
        gameState.lineMarker = null;
    }
    
    // Hide result panel
    document.getElementById('guess-result').classList.add('hidden');
    
    // Get a unique city for this player in this round
    // Calculate the overall turn number (each player gets a unique city)
    const overallTurnNumber = (gameState.currentRound - 1) * gameState.players.length + gameState.currentPlayerIndex;
    
    // Make sure we have enough cities
    if (overallTurnNumber >= gameState.availableCities.length) {
        // If we've used all cities, reshuffle and start over
        shuffleArray(gameState.availableCities);
        gameState.usedCityIndices = [];
    }
    
    const cityIndex = overallTurnNumber % gameState.availableCities.length;
    gameState.currentCity = gameState.availableCities[cityIndex];
    
    // Update UI
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    document.getElementById('current-player').textContent = `${currentPlayer.name}'s Turn`;
    document.querySelector('.city-name').textContent = gameState.currentCity.displayName;
    document.getElementById('current-round').textContent = gameState.currentRound;
    document.getElementById('total-rounds').textContent = gameState.totalRounds;
    
    // Reset map view to continent bounds
    const bounds = getContinentBounds(gameState.continent);
    gameState.map.fitBounds(bounds);
    
    // Enable map clicking
    gameState.map.off('click');
    gameState.map.on('click', handleMapClick);
    
    // Set cursor to crosshair
    document.getElementById('map').style.cursor = 'crosshair';
}

function handleMapClick(e) {
    const guessLat = e.latlng.lat;
    const guessLng = e.latlng.lng;
    
    // Disable further clicking
    gameState.map.off('click');
    document.getElementById('map').style.cursor = 'default';
    
    // Add guess marker
    gameState.guessMarker = L.marker([guessLat, guessLng], {
        icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).addTo(gameState.map);
    
    // Add actual city marker
    gameState.cityMarker = L.marker([gameState.currentCity.lat, gameState.currentCity.lng], {
        icon: L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).addTo(gameState.map);
    
    // Draw line between guess and actual
    gameState.lineMarker = L.polyline([
        [guessLat, guessLng],
        [gameState.currentCity.lat, gameState.currentCity.lng]
    ], {
        color: 'blue',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10'
    }).addTo(gameState.map);
    
    // Calculate distance
    const distance = calculateDistance(guessLat, guessLng, gameState.currentCity.lat, gameState.currentCity.lng);
    
    // Update score
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    currentPlayer.totalDistance += distance;
    currentPlayer.roundDistances.push(distance);
    
    // Show result
    showResult(distance);
    
    // Update scoreboard
    updateScoreboard();
    
    // Fit bounds to show both markers
    const bounds = L.latLngBounds([
        [guessLat, guessLng],
        [gameState.currentCity.lat, gameState.currentCity.lng]
    ]);
    gameState.map.fitBounds(bounds, { padding: [50, 50] });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    // Haversine formula to calculate distance in kilometers
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return Math.round(distance);
}

function toRad(degrees) {
    return degrees * Math.PI / 180;
}

function showResult(distance) {
    const resultPanel = document.getElementById('guess-result');
    const distanceValue = document.getElementById('distance-value');
    
    distanceValue.textContent = distance.toLocaleString();
    resultPanel.classList.remove('hidden');
    
    // Play sound effect based on accuracy
    playResultSound(distance);
}

function playResultSound(distance) {
    // Create audio context for sound effects
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Determine frequency based on accuracy
    let frequency;
    if (distance < 100) {
        frequency = 800; // High pitch for excellent guess
    } else if (distance < 500) {
        frequency = 600; // Medium-high for good guess
    } else if (distance < 1000) {
        frequency = 400; // Medium for okay guess
    } else {
        frequency = 200; // Low for poor guess
    }
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function nextTurn() {
    // Move to next player
    gameState.currentPlayerIndex++;
    
    // If all players have played, move to next round
    if (gameState.currentPlayerIndex >= gameState.players.length) {
        gameState.currentPlayerIndex = 0;
        gameState.currentRound++;
    }
    
    // Check if game is over
    if (gameState.currentRound > gameState.totalRounds) {
        endGame();
    } else {
        startTurn();
    }
}

function updateScoreboard() {
    const scoreBody = document.getElementById('score-body');
    scoreBody.innerHTML = '';
    
    // Sort players by total distance (lower is better)
    const sortedPlayers = [...gameState.players].sort((a, b) => a.totalDistance - b.totalDistance);
    
    sortedPlayers.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.totalDistance.toLocaleString()}</td>
        `;
        scoreBody.appendChild(row);
    });
}

function toggleScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    const btn = document.getElementById('toggle-scoreboard-btn');
    
    if (scoreboard.classList.contains('hidden')) {
        scoreboard.classList.remove('hidden');
        btn.textContent = 'Hide Scoreboard';
    } else {
        scoreboard.classList.add('hidden');
        btn.textContent = 'Show Scoreboard';
    }
}

// Winner Screen Functions
function endGame() {
    showScreen('winner');
    
    // Sort players by total distance
    const sortedPlayers = [...gameState.players].sort((a, b) => a.totalDistance - b.totalDistance);
    
    // Create podium
    createPodium(sortedPlayers);
    
    // Create final scores table
    createFinalScoresTable(sortedPlayers);
    
    // Add confetti animation
    createConfetti();
    
    // Play winner sound
    playWinnerSound();
    
    // Add event listeners for buttons
    document.getElementById('play-again-btn').addEventListener('click', () => {
        showScreen('setup');
        initializeSetupScreen();
    });
    
    document.getElementById('new-players-btn').addEventListener('click', () => {
        location.reload();
    });
}

function createPodium(sortedPlayers) {
    const podiumContainer = document.getElementById('winner-podium');
    podiumContainer.innerHTML = '';
    
    // Create podium for top 3 players
    const podiumOrder = [1, 0, 2]; // Second, First, Third
    const classes = ['second', 'first', 'third'];
    const ranks = ['2nd', '1st', '3rd'];
    
    podiumOrder.forEach((index, position) => {
        if (sortedPlayers[index]) {
            const player = sortedPlayers[index];
            const avgDistance = Math.round(player.totalDistance / gameState.totalRounds);
            
            const podiumPlace = document.createElement('div');
            podiumPlace.className = 'podium-place';
            podiumPlace.innerHTML = `
                <div class="podium-stand ${classes[position]}">
                    <div class="podium-rank">${ranks[position]}</div>
                    <div class="podium-player">${player.name}</div>
                    <div class="podium-score">${player.totalDistance.toLocaleString()} km</div>
                </div>
            `;
            podiumContainer.appendChild(podiumPlace);
        }
    });
}

function createFinalScoresTable(sortedPlayers) {
    const finalScoreBody = document.getElementById('final-score-body');
    finalScoreBody.innerHTML = '';
    
    sortedPlayers.forEach((player, index) => {
        const avgDistance = Math.round(player.totalDistance / gameState.totalRounds);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.totalDistance.toLocaleString()}</td>
            <td>${avgDistance.toLocaleString()}</td>
        `;
        finalScoreBody.appendChild(row);
    });
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    confettiContainer.innerHTML = '';
    
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff1493'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }
}

function playWinnerSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Play a celebratory ascending arpeggio
    const notes = [261.63, 329.63, 392.00, 523.25]; // C, E, G, C (major chord)
    
    notes.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        
        const startTime = audioContext.currentTime + (index * 0.15);
        gainNode.gain.setValueAtTime(0.3, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.5);
    });
}

// Utility Functions
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
