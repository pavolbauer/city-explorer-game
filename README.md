# City Explorer - Geography Game

An educational geography game designed for school children to practice their geography skills by guessing city locations on a map.

## Game Features

- **1-4 Players**: Support for up to 4 players in round-robin gameplay
- **7 Continents**: Choose to play on any of the 7 continents
- **3 Difficulty Levels**:
  - **Easy**: Full map details shown except city names
  - **Medium**: No country/state names displayed
  - **Hard**: Only geographical features (rivers, terrain) visible
- **Map Types**: 
  - Standard UI-enhanced map
  - Satellite imagery
- **City Types**:
  - Capital cities only
  - Capitals and major cities
- **Customizable Rounds**: Choose how many rounds to play (default: 5)
- **Distance Scoring**: Air-line distance calculation between guesses and actual locations
- **Engaging Animations**: Confetti, sounds, and smooth transitions
- **Responsive Design**: Works on desktop and mobile devices

## How to Play

1. **Add Players**: Enter names for 1-4 players
2. **Configure Settings**: 
   - Select a continent
   - Choose difficulty level
   - Pick map type (standard or satellite)
   - Select city types (capitals only or all major cities)
   - Set number of rounds
3. **Play the Game**: 
   - Each player takes turns guessing city locations
   - Click on the map where you think the city is located
   - The game shows the actual location and calculates the distance
   - Lower total distance wins!
4. **View Results**: See the winner podium and final scores

## Local Testing

### Option 1: Simple HTTP Server

1. Open your terminal/command prompt
2. Navigate to the game directory:
   ```bash
   cd /path/to/city-explorer-game
   ```

3. Start a local server:

   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```

   **Using Node.js (if you have `http-server` installed):**
   ```bash
   npx http-server -p 8000
   ```

4. Open your browser and go to: `http://localhost:8000`

### Option 2: Direct File Opening

You can also open `index.html` directly in your browser, though some features may work better with a local server.

## Deploying to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `city-explorer-game`

2. **Upload Your Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - City Explorer Game"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/city-explorer-game.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"

4. **Access Your Game**:
   - Your game will be available at: `https://YOUR-USERNAME.github.io/city-explorer-game/`
   - It may take a few minutes for the site to be published

## File Structure

```
city-explorer-game/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── game.js            # Game logic and map integration
├── cities-data.js     # City coordinates database
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Structure and semantics
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic and interactivity
- **Leaflet.js**: Interactive map library
- **OpenStreetMap**: Map tile provider
- **Web Audio API**: Sound effects

## Educational Benefits

This game helps students:
- Learn world geography
- Understand spatial relationships between cities
- Recognize geographical features
- Practice distance estimation
- Develop map reading skills
- Learn capital cities and major cities across continents

## Browser Compatibility

The game works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Credits

- Map data: OpenStreetMap contributors
- Satellite imagery: Esri
- Terrain maps: OpenTopoMap
- Map library: Leaflet.js

## License

This project is open source and available for educational purposes.

## Future Enhancements

Potential features to add:
- More cities in the database
- Time-based scoring
- Hints system
- Multiplayer online mode
- Achievement badges
- Different game modes (find all cities in a country, etc.)

Enjoy playing and learning geography!
