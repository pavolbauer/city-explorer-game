// City database with coordinates for all continents
const CITIES_DATABASE = {
    africa: {
        capitals: [
            { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357 },
            { name: 'Lagos', country: 'Nigeria', lat: 6.5244, lng: 3.3792 },
            { name: 'Kinshasa', country: 'Democratic Republic of Congo', lat: -4.4419, lng: 15.2663 },
            { name: 'Johannesburg', country: 'South Africa', lat: -26.2041, lng: 28.0473 },
            { name: 'Khartoum', country: 'Sudan', lat: 15.5007, lng: 32.5599 },
            { name: 'Algiers', country: 'Algeria', lat: 36.7538, lng: 3.0588 },
            { name: 'Nairobi', country: 'Kenya', lat: -1.2921, lng: 36.8219 },
            { name: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898 },
            { name: 'Addis Ababa', country: 'Ethiopia', lat: 9.0320, lng: 38.7469 },
            { name: 'Accra', country: 'Ghana', lat: 5.6037, lng: -0.1870 },
            { name: 'Dar es Salaam', country: 'Tanzania', lat: -6.7924, lng: 39.2083 },
            { name: 'Dakar', country: 'Senegal', lat: 14.7167, lng: -17.4677 },
            { name: 'Luanda', country: 'Angola', lat: -8.8383, lng: 13.2344 },
            { name: 'Maputo', country: 'Mozambique', lat: -25.9655, lng: 32.5832 },
            { name: 'Tunis', country: 'Tunisia', lat: 36.8065, lng: 10.1815 }
        ],
        major: [
            { name: 'Alexandria', country: 'Egypt', lat: 31.2001, lng: 29.9187 },
            { name: 'Kano', country: 'Nigeria', lat: 12.0022, lng: 8.5920 },
            { name: 'Ibadan', country: 'Nigeria', lat: 7.3775, lng: 3.9470 },
            { name: 'Abidjan', country: 'Ivory Coast', lat: 5.3600, lng: -4.0083 },
            { name: 'Cape Town', country: 'South Africa', lat: -33.9249, lng: 18.4241 },
            { name: 'Durban', country: 'South Africa', lat: -29.8587, lng: 31.0218 },
            { name: 'Kampala', country: 'Uganda', lat: 0.3476, lng: 32.5825 },
            { name: 'Lusaka', country: 'Zambia', lat: -15.3875, lng: 28.3228 }
        ]
    },
    antarctica: {
        capitals: [
            { name: 'McMurdo Station', country: 'USA Research Station', lat: -77.8458, lng: 166.6690 },
            { name: 'Amundsen-Scott Station', country: 'South Pole Station', lat: -90.0000, lng: 0.0000 },
            { name: 'Vostok Station', country: 'Russian Research Station', lat: -78.4644, lng: 106.8378 }
        ],
        major: []
    },
    asia: {
        capitals: [
            { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503 },
            { name: 'Beijing', country: 'China', lat: 39.9042, lng: 116.4074 },
            { name: 'Seoul', country: 'South Korea', lat: 37.5665, lng: 126.9780 },
            { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018 },
            { name: 'Mumbai', country: 'India', lat: 19.0760, lng: 72.8777 },
            { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456 },
            { name: 'Manila', country: 'Philippines', lat: 14.5995, lng: 120.9842 },
            { name: 'Tehran', country: 'Iran', lat: 35.6892, lng: 51.3890 },
            { name: 'Baghdad', country: 'Iraq', lat: 33.3152, lng: 44.3661 },
            { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753 },
            { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
            { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869 },
            { name: 'Hanoi', country: 'Vietnam', lat: 21.0285, lng: 105.8542 },
            { name: 'Yangon', country: 'Myanmar', lat: 16.8661, lng: 96.1951 },
            { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125 },
            { name: 'Kathmandu', country: 'Nepal', lat: 27.7172, lng: 85.3240 },
            { name: 'Colombo', country: 'Sri Lanka', lat: 6.9271, lng: 79.8612 },
            { name: 'Jerusalem', country: 'Israel', lat: 31.7683, lng: 35.2137 },
            { name: 'Kabul', country: 'Afghanistan', lat: 34.5553, lng: 69.2075 },
            { name: 'Ulaanbaatar', country: 'Mongolia', lat: 47.8864, lng: 106.9057 }
        ],
        major: [
            { name: 'Shanghai', country: 'China', lat: 31.2304, lng: 121.4737 },
            { name: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694 },
            { name: 'Osaka', country: 'Japan', lat: 34.6937, lng: 135.5023 },
            { name: 'Delhi', country: 'India', lat: 28.7041, lng: 77.1025 },
            { name: 'Kolkata', country: 'India', lat: 22.5726, lng: 88.3639 },
            { name: 'Bangalore', country: 'India', lat: 12.9716, lng: 77.5946 },
            { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011 },
            { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708 },
            { name: 'Shenzhen', country: 'China', lat: 22.5431, lng: 114.0579 },
            { name: 'Guangzhou', country: 'China', lat: 23.1291, lng: 113.2644 }
        ]
    },
    europe: {
        capitals: [
            { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
            { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522 },
            { name: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050 },
            { name: 'Madrid', country: 'Spain', lat: 40.4168, lng: -3.7038 },
            { name: 'Rome', country: 'Italy', lat: 41.9028, lng: 12.4964 },
            { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041 },
            { name: 'Brussels', country: 'Belgium', lat: 50.8503, lng: 4.3517 },
            { name: 'Vienna', country: 'Austria', lat: 48.2082, lng: 16.3738 },
            { name: 'Warsaw', country: 'Poland', lat: 52.2297, lng: 21.0122 },
            { name: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402 },
            { name: 'Prague', country: 'Czech Republic', lat: 50.0755, lng: 14.4378 },
            { name: 'Copenhagen', country: 'Denmark', lat: 55.6761, lng: 12.5683 },
            { name: 'Stockholm', country: 'Sweden', lat: 59.3293, lng: 18.0686 },
            { name: 'Oslo', country: 'Norway', lat: 59.9139, lng: 10.7522 },
            { name: 'Helsinki', country: 'Finland', lat: 60.1695, lng: 24.9354 },
            { name: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275 },
            { name: 'Lisbon', country: 'Portugal', lat: 38.7223, lng: -9.1393 },
            { name: 'Dublin', country: 'Ireland', lat: 53.3498, lng: -6.2603 },
            { name: 'Bucharest', country: 'Romania', lat: 44.4268, lng: 26.1025 },
            { name: 'Sofia', country: 'Bulgaria', lat: 42.6977, lng: 23.3219 }
        ],
        major: [
            { name: 'Barcelona', country: 'Spain', lat: 41.3874, lng: 2.1686 },
            { name: 'Milan', country: 'Italy', lat: 45.4642, lng: 9.1900 },
            { name: 'Munich', country: 'Germany', lat: 48.1351, lng: 11.5820 },
            { name: 'Hamburg', country: 'Germany', lat: 53.5511, lng: 9.9937 },
            { name: 'Manchester', country: 'United Kingdom', lat: 53.4808, lng: -2.2426 },
            { name: 'Lyon', country: 'France', lat: 45.7640, lng: 4.8357 },
            { name: 'Naples', country: 'Italy', lat: 40.8518, lng: 14.2681 },
            { name: 'Marseille', country: 'France', lat: 43.2965, lng: 5.3698 },
            { name: 'Birmingham', country: 'United Kingdom', lat: 52.4862, lng: -1.8904 },
            { name: 'Cologne', country: 'Germany', lat: 50.9375, lng: 6.9603 }
        ]
    },
    'north-america': {
        capitals: [
            { name: 'Mexico City', country: 'Mexico', lat: 19.4326, lng: -99.1332 },
            { name: 'Washington DC', country: 'United States', lat: 38.9072, lng: -77.0369 },
            { name: 'Ottawa', country: 'Canada', lat: 45.4215, lng: -75.6972 },
            { name: 'Havana', country: 'Cuba', lat: 23.1136, lng: -82.3666 },
            { name: 'Guatemala City', country: 'Guatemala', lat: 14.6349, lng: -90.5069 },
            { name: 'San Salvador', country: 'El Salvador', lat: 13.6929, lng: -89.2182 },
            { name: 'Tegucigalpa', country: 'Honduras', lat: 14.0723, lng: -87.1921 },
            { name: 'Managua', country: 'Nicaragua', lat: 12.1364, lng: -86.2514 },
            { name: 'San Jose', country: 'Costa Rica', lat: 9.9281, lng: -84.0907 },
            { name: 'Panama City', country: 'Panama', lat: 8.9824, lng: -79.5199 },
            { name: 'Kingston', country: 'Jamaica', lat: 17.9714, lng: -76.7931 },
            { name: 'Santo Domingo', country: 'Dominican Republic', lat: 18.4861, lng: -69.9312 }
        ],
        major: [
            { name: 'New York', country: 'United States', lat: 40.7128, lng: -74.0060 },
            { name: 'Los Angeles', country: 'United States', lat: 34.0522, lng: -118.2437 },
            { name: 'Chicago', country: 'United States', lat: 41.8781, lng: -87.6298 },
            { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832 },
            { name: 'Houston', country: 'United States', lat: 29.7604, lng: -95.3698 },
            { name: 'Phoenix', country: 'United States', lat: 33.4484, lng: -112.0740 },
            { name: 'Philadelphia', country: 'United States', lat: 39.9526, lng: -75.1652 },
            { name: 'San Francisco', country: 'United States', lat: 37.7749, lng: -122.4194 },
            { name: 'Montreal', country: 'Canada', lat: 45.5017, lng: -73.5673 },
            { name: 'Vancouver', country: 'Canada', lat: 49.2827, lng: -123.1207 },
            { name: 'Miami', country: 'United States', lat: 25.7617, lng: -80.1918 },
            { name: 'Guadalajara', country: 'Mexico', lat: 20.6597, lng: -103.3496 },
            { name: 'Monterrey', country: 'Mexico', lat: 25.6866, lng: -100.3161 }
        ]
    },
    'south-america': {
        capitals: [
            { name: 'Sao Paulo', country: 'Brazil', lat: -23.5505, lng: -46.6333 },
            { name: 'Buenos Aires', country: 'Argentina', lat: -34.6037, lng: -58.3816 },
            { name: 'Lima', country: 'Peru', lat: -12.0464, lng: -77.0428 },
            { name: 'Bogota', country: 'Colombia', lat: 4.7110, lng: -74.0721 },
            { name: 'Santiago', country: 'Chile', lat: -33.4489, lng: -70.6693 },
            { name: 'Caracas', country: 'Venezuela', lat: 10.4806, lng: -66.9036 },
            { name: 'Quito', country: 'Ecuador', lat: -0.1807, lng: -78.4678 },
            { name: 'La Paz', country: 'Bolivia', lat: -16.5000, lng: -68.1500 },
            { name: 'Asuncion', country: 'Paraguay', lat: -25.2637, lng: -57.5759 },
            { name: 'Montevideo', country: 'Uruguay', lat: -34.9011, lng: -56.1645 },
            { name: 'Brasilia', country: 'Brazil', lat: -15.8267, lng: -47.9218 },
            { name: 'Georgetown', country: 'Guyana', lat: 6.8013, lng: -58.1551 },
            { name: 'Paramaribo', country: 'Suriname', lat: 5.8520, lng: -55.2038 },
            { name: 'Cayenne', country: 'French Guiana', lat: 4.9333, lng: -52.3333 }
        ],
        major: [
            { name: 'Rio de Janeiro', country: 'Brazil', lat: -22.9068, lng: -43.1729 },
            { name: 'Belo Horizonte', country: 'Brazil', lat: -19.9167, lng: -43.9345 },
            { name: 'Medellin', country: 'Colombia', lat: 6.2476, lng: -75.5658 },
            { name: 'Cali', country: 'Colombia', lat: 3.4516, lng: -76.5320 },
            { name: 'Cordoba', country: 'Argentina', lat: -31.4201, lng: -64.1888 },
            { name: 'Rosario', country: 'Argentina', lat: -32.9442, lng: -60.6505 },
            { name: 'Valparaiso', country: 'Chile', lat: -33.0472, lng: -71.6127 },
            { name: 'Guayaquil', country: 'Ecuador', lat: -2.1894, lng: -79.8890 }
        ]
    },
    oceania: {
        capitals: [
            { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093 },
            { name: 'Canberra', country: 'Australia', lat: -35.2809, lng: 149.1300 },
            { name: 'Wellington', country: 'New Zealand', lat: -41.2865, lng: 174.7762 },
            { name: 'Port Moresby', country: 'Papua New Guinea', lat: -9.4438, lng: 147.1803 },
            { name: 'Suva', country: 'Fiji', lat: -18.1416, lng: 178.4419 },
            { name: 'Honiara', country: 'Solomon Islands', lat: -9.4456, lng: 159.9729 },
            { name: 'Apia', country: 'Samoa', lat: -13.8333, lng: -171.7667 },
            { name: 'Nuku\'alofa', country: 'Tonga', lat: -21.1393, lng: -175.2019 },
            { name: 'Palikir', country: 'Micronesia', lat: 6.9248, lng: 158.1610 }
        ],
        major: [
            { name: 'Melbourne', country: 'Australia', lat: -37.8136, lng: 144.9631 },
            { name: 'Brisbane', country: 'Australia', lat: -27.4698, lng: 153.0251 },
            { name: 'Perth', country: 'Australia', lat: -31.9505, lng: 115.8605 },
            { name: 'Adelaide', country: 'Australia', lat: -34.9285, lng: 138.6007 },
            { name: 'Auckland', country: 'New Zealand', lat: -36.8485, lng: 174.7633 },
            { name: 'Christchurch', country: 'New Zealand', lat: -43.5321, lng: 172.6362 },
            { name: 'Gold Coast', country: 'Australia', lat: -28.0167, lng: 153.4000 }
        ]
    }
};

// Helper function to get cities based on settings
function getCitiesForGame(continent, cityType) {
    const continentData = CITIES_DATABASE[continent];
    if (!continentData) return [];
    
    if (cityType === 'capitals') {
        return [...continentData.capitals];
    } else {
        return [...continentData.capitals, ...continentData.major];
    }
}
