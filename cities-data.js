// City database with coordinates for all continents
const CITIES_DATABASE = {
    africa: {
        capitals: [
            { name: 'Cairo', nameOriginal: 'القاهرة', country: 'Egypt', countryOriginal: 'مصر', lat: 30.0444, lng: 31.2357 },
            { name: 'Lagos', nameOriginal: 'Lagos', country: 'Nigeria', countryOriginal: 'Nigeria', lat: 6.5244, lng: 3.3792 },
            { name: 'Kinshasa', nameOriginal: 'Kinshasa', country: 'Democratic Republic of Congo', countryOriginal: 'République démocratique du Congo', lat: -4.4419, lng: 15.2663 },
            { name: 'Johannesburg', nameOriginal: 'Johannesburg', country: 'South Africa', countryOriginal: 'South Africa', lat: -26.2041, lng: 28.0473 },
            { name: 'Khartoum', nameOriginal: 'الخرطوم', country: 'Sudan', countryOriginal: 'السودان', lat: 15.5007, lng: 32.5599 },
            { name: 'Algiers', nameOriginal: 'الجزائر', country: 'Algeria', countryOriginal: 'الجزائر', lat: 36.7538, lng: 3.0588 },
            { name: 'Nairobi', nameOriginal: 'Nairobi', country: 'Kenya', countryOriginal: 'Kenya', lat: -1.2921, lng: 36.8219 },
            { name: 'Casablanca', nameOriginal: 'الدار البيضاء', country: 'Morocco', countryOriginal: 'المغرب', lat: 33.5731, lng: -7.5898 },
            { name: 'Addis Ababa', nameOriginal: 'አዲስ አበባ', country: 'Ethiopia', countryOriginal: 'ኢትዮጵያ', lat: 9.0320, lng: 38.7469 },
            { name: 'Accra', nameOriginal: 'Accra', country: 'Ghana', countryOriginal: 'Ghana', lat: 5.6037, lng: -0.1870 },
            { name: 'Dar es Salaam', nameOriginal: 'Dar es Salaam', country: 'Tanzania', countryOriginal: 'Tanzania', lat: -6.7924, lng: 39.2083 },
            { name: 'Dakar', nameOriginal: 'Dakar', country: 'Senegal', countryOriginal: 'Sénégal', lat: 14.7167, lng: -17.4677 },
            { name: 'Luanda', nameOriginal: 'Luanda', country: 'Angola', countryOriginal: 'Angola', lat: -8.8383, lng: 13.2344 },
            { name: 'Maputo', nameOriginal: 'Maputo', country: 'Mozambique', countryOriginal: 'Moçambique', lat: -25.9655, lng: 32.5832 },
            { name: 'Tunis', nameOriginal: 'تونس', country: 'Tunisia', countryOriginal: 'تونس', lat: 36.8065, lng: 10.1815 }
        ],
        major: [
            { name: 'Alexandria', nameOriginal: 'الإسكندرية', country: 'Egypt', countryOriginal: 'مصر', lat: 31.2001, lng: 29.9187 },
            { name: 'Kano', nameOriginal: 'Kano', country: 'Nigeria', countryOriginal: 'Nigeria', lat: 12.0022, lng: 8.5920 },
            { name: 'Ibadan', nameOriginal: 'Ibadan', country: 'Nigeria', countryOriginal: 'Nigeria', lat: 7.3775, lng: 3.9470 },
            { name: 'Abidjan', nameOriginal: 'Abidjan', country: 'Ivory Coast', countryOriginal: 'Côte d\'Ivoire', lat: 5.3600, lng: -4.0083 },
            { name: 'Cape Town', nameOriginal: 'Cape Town', country: 'South Africa', countryOriginal: 'South Africa', lat: -33.9249, lng: 18.4241 },
            { name: 'Durban', nameOriginal: 'Durban', country: 'South Africa', countryOriginal: 'South Africa', lat: -29.8587, lng: 31.0218 },
            { name: 'Kampala', nameOriginal: 'Kampala', country: 'Uganda', countryOriginal: 'Uganda', lat: 0.3476, lng: 32.5825 },
            { name: 'Lusaka', nameOriginal: 'Lusaka', country: 'Zambia', countryOriginal: 'Zambia', lat: -15.3875, lng: 28.3228 }
        ]
    },
    antarctica: {
        capitals: [
            { name: 'McMurdo Station', nameOriginal: 'McMurdo Station', country: 'USA Research Station', countryOriginal: 'USA Research Station', lat: -77.8458, lng: 166.6690 },
            { name: 'Amundsen-Scott Station', nameOriginal: 'Amundsen-Scott Station', country: 'South Pole Station', countryOriginal: 'South Pole Station', lat: -90.0000, lng: 0.0000 },
            { name: 'Vostok Station', nameOriginal: 'Станция Восток', country: 'Russian Research Station', countryOriginal: 'Российская исследовательская станция', lat: -78.4644, lng: 106.8378 }
        ],
        major: []
    },
    asia: {
        capitals: [
            { name: 'Tokyo', nameOriginal: '東京', country: 'Japan', countryOriginal: '日本', lat: 35.6762, lng: 139.6503 },
            { name: 'Beijing', nameOriginal: '北京', country: 'China', countryOriginal: '中国', lat: 39.9042, lng: 116.4074 },
            { name: 'Seoul', nameOriginal: '서울', country: 'South Korea', countryOriginal: '대한민국', lat: 37.5665, lng: 126.9780 },
            { name: 'Bangkok', nameOriginal: 'กรุงเทพมหานคร', country: 'Thailand', countryOriginal: 'ประเทศไทย', lat: 13.7563, lng: 100.5018 },
            { name: 'Mumbai', nameOriginal: 'मुंबई', country: 'India', countryOriginal: 'भारत', lat: 19.0760, lng: 72.8777 },
            { name: 'Jakarta', nameOriginal: 'Jakarta', country: 'Indonesia', countryOriginal: 'Indonesia', lat: -6.2088, lng: 106.8456 },
            { name: 'Manila', nameOriginal: 'Maynila', country: 'Philippines', countryOriginal: 'Pilipinas', lat: 14.5995, lng: 120.9842 },
            { name: 'Tehran', nameOriginal: 'تهران', country: 'Iran', countryOriginal: 'ایران', lat: 35.6892, lng: 51.3890 },
            { name: 'Baghdad', nameOriginal: 'بغداد', country: 'Iraq', countryOriginal: 'العراق', lat: 33.3152, lng: 44.3661 },
            { name: 'Riyadh', nameOriginal: 'الرياض', country: 'Saudi Arabia', countryOriginal: 'المملكة العربية السعودية', lat: 24.7136, lng: 46.6753 },
            { name: 'Singapore', nameOriginal: '新加坡', country: 'Singapore', countryOriginal: 'Singapore', lat: 1.3521, lng: 103.8198 },
            { name: 'Kuala Lumpur', nameOriginal: 'Kuala Lumpur', country: 'Malaysia', countryOriginal: 'Malaysia', lat: 3.1390, lng: 101.6869 },
            { name: 'Hanoi', nameOriginal: 'Hà Nội', country: 'Vietnam', countryOriginal: 'Việt Nam', lat: 21.0285, lng: 105.8542 },
            { name: 'Yangon', nameOriginal: 'ရန်ကုန်', country: 'Myanmar', countryOriginal: 'မြန်မာ', lat: 16.8661, lng: 96.1951 },
            { name: 'Dhaka', nameOriginal: 'ঢাকা', country: 'Bangladesh', countryOriginal: 'বাংলাদেশ', lat: 23.8103, lng: 90.4125 },
            { name: 'Kathmandu', nameOriginal: 'काठमाडौं', country: 'Nepal', countryOriginal: 'नेपाल', lat: 27.7172, lng: 85.3240 },
            { name: 'Colombo', nameOriginal: 'කොළඹ', country: 'Sri Lanka', countryOriginal: 'ශ්‍රී ලංකා', lat: 6.9271, lng: 79.8612 },
            { name: 'Jerusalem', nameOriginal: 'ירושלים', country: 'Israel', countryOriginal: 'ישראל', lat: 31.7683, lng: 35.2137 },
            { name: 'Kabul', nameOriginal: 'کابل', country: 'Afghanistan', countryOriginal: 'افغانستان', lat: 34.5553, lng: 69.2075 },
            { name: 'Ulaanbaatar', nameOriginal: 'Улаанбаатар', country: 'Mongolia', countryOriginal: 'Монгол Улс', lat: 47.8864, lng: 106.9057 }
        ],
        major: [
            { name: 'Shanghai', nameOriginal: '上海', country: 'China', countryOriginal: '中国', lat: 31.2304, lng: 121.4737 },
            { name: 'Hong Kong', nameOriginal: '香港', country: 'China', countryOriginal: '中国', lat: 22.3193, lng: 114.1694 },
            { name: 'Osaka', nameOriginal: '大阪', country: 'Japan', countryOriginal: '日本', lat: 34.6937, lng: 135.5023 },
            { name: 'Delhi', nameOriginal: 'दिल्ली', country: 'India', countryOriginal: 'भारत', lat: 28.7041, lng: 77.1025 },
            { name: 'Kolkata', nameOriginal: 'কলকাতা', country: 'India', countryOriginal: 'भारत', lat: 22.5726, lng: 88.3639 },
            { name: 'Bangalore', nameOriginal: 'ಬೆಂಗಳೂರು', country: 'India', countryOriginal: 'भारत', lat: 12.9716, lng: 77.5946 },
            { name: 'Karachi', nameOriginal: 'کراچی', country: 'Pakistan', countryOriginal: 'پاکستان', lat: 24.8607, lng: 67.0011 },
            { name: 'Dubai', nameOriginal: 'دبي', country: 'UAE', countryOriginal: 'الإمارات العربية المتحدة', lat: 25.2048, lng: 55.2708 },
            { name: 'Shenzhen', nameOriginal: '深圳', country: 'China', countryOriginal: '中国', lat: 22.5431, lng: 114.0579 },
            { name: 'Guangzhou', nameOriginal: '广州', country: 'China', countryOriginal: '中国', lat: 23.1291, lng: 113.2644 }
        ]
    },
    europe: {
        capitals: [
            { name: 'London', nameOriginal: 'London', country: 'United Kingdom', countryOriginal: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
            { name: 'Paris', nameOriginal: 'Paris', country: 'France', countryOriginal: 'France', lat: 48.8566, lng: 2.3522 },
            { name: 'Berlin', nameOriginal: 'Berlin', country: 'Germany', countryOriginal: 'Deutschland', lat: 52.5200, lng: 13.4050 },
            { name: 'Madrid', nameOriginal: 'Madrid', country: 'Spain', countryOriginal: 'España', lat: 40.4168, lng: -3.7038 },
            { name: 'Rome', nameOriginal: 'Roma', country: 'Italy', countryOriginal: 'Italia', lat: 41.9028, lng: 12.4964 },
            { name: 'Amsterdam', nameOriginal: 'Amsterdam', country: 'Netherlands', countryOriginal: 'Nederland', lat: 52.3676, lng: 4.9041 },
            { name: 'Brussels', nameOriginal: 'Bruxelles', country: 'Belgium', countryOriginal: 'Belgique', lat: 50.8503, lng: 4.3517 },
            { name: 'Vienna', nameOriginal: 'Wien', country: 'Austria', countryOriginal: 'Österreich', lat: 48.2082, lng: 16.3738 },
            { name: 'Warsaw', nameOriginal: 'Warszawa', country: 'Poland', countryOriginal: 'Polska', lat: 52.2297, lng: 21.0122 },
            { name: 'Budapest', nameOriginal: 'Budapest', country: 'Hungary', countryOriginal: 'Magyarország', lat: 47.4979, lng: 19.0402 },
            { name: 'Prague', nameOriginal: 'Praha', country: 'Czech Republic', countryOriginal: 'Česká republika', lat: 50.0755, lng: 14.4378 },
            { name: 'Copenhagen', nameOriginal: 'København', country: 'Denmark', countryOriginal: 'Danmark', lat: 55.6761, lng: 12.5683 },
            { name: 'Stockholm', nameOriginal: 'Stockholm', country: 'Sweden', countryOriginal: 'Sverige', lat: 59.3293, lng: 18.0686 },
            { name: 'Oslo', nameOriginal: 'Oslo', country: 'Norway', countryOriginal: 'Norge', lat: 59.9139, lng: 10.7522 },
            { name: 'Helsinki', nameOriginal: 'Helsinki', country: 'Finland', countryOriginal: 'Suomi', lat: 60.1695, lng: 24.9354 },
            { name: 'Athens', nameOriginal: 'Αθήνα', country: 'Greece', countryOriginal: 'Ελλάδα', lat: 37.9838, lng: 23.7275 },
            { name: 'Lisbon', nameOriginal: 'Lisboa', country: 'Portugal', countryOriginal: 'Portugal', lat: 38.7223, lng: -9.1393 },
            { name: 'Dublin', nameOriginal: 'Baile Átha Cliath', country: 'Ireland', countryOriginal: 'Éire', lat: 53.3498, lng: -6.2603 },
            { name: 'Bucharest', nameOriginal: 'București', country: 'Romania', countryOriginal: 'România', lat: 44.4268, lng: 26.1025 },
            { name: 'Sofia', nameOriginal: 'София', country: 'Bulgaria', countryOriginal: 'България', lat: 42.6977, lng: 23.3219 }
        ],
        major: [
            { name: 'Barcelona', nameOriginal: 'Barcelona', country: 'Spain', countryOriginal: 'España', lat: 41.3874, lng: 2.1686 },
            { name: 'Milan', nameOriginal: 'Milano', country: 'Italy', countryOriginal: 'Italia', lat: 45.4642, lng: 9.1900 },
            { name: 'Munich', nameOriginal: 'München', country: 'Germany', countryOriginal: 'Deutschland', lat: 48.1351, lng: 11.5820 },
            { name: 'Hamburg', nameOriginal: 'Hamburg', country: 'Germany', countryOriginal: 'Deutschland', lat: 53.5511, lng: 9.9937 },
            { name: 'Manchester', nameOriginal: 'Manchester', country: 'United Kingdom', countryOriginal: 'United Kingdom', lat: 53.4808, lng: -2.2426 },
            { name: 'Lyon', nameOriginal: 'Lyon', country: 'France', countryOriginal: 'France', lat: 45.7640, lng: 4.8357 },
            { name: 'Naples', nameOriginal: 'Napoli', country: 'Italy', countryOriginal: 'Italia', lat: 40.8518, lng: 14.2681 },
            { name: 'Marseille', nameOriginal: 'Marseille', country: 'France', countryOriginal: 'France', lat: 43.2965, lng: 5.3698 },
            { name: 'Birmingham', nameOriginal: 'Birmingham', country: 'United Kingdom', countryOriginal: 'United Kingdom', lat: 52.4862, lng: -1.8904 },
            { name: 'Cologne', nameOriginal: 'Köln', country: 'Germany', countryOriginal: 'Deutschland', lat: 50.9375, lng: 6.9603 }
        ]
    },
    'north-america': {
        capitals: [
            { name: 'Mexico City', nameOriginal: 'Ciudad de México', country: 'Mexico', countryOriginal: 'México', lat: 19.4326, lng: -99.1332 },
            { name: 'Washington DC', nameOriginal: 'Washington DC', country: 'United States', countryOriginal: 'United States', lat: 38.9072, lng: -77.0369 },
            { name: 'Ottawa', nameOriginal: 'Ottawa', country: 'Canada', countryOriginal: 'Canada', lat: 45.4215, lng: -75.6972 },
            { name: 'Havana', nameOriginal: 'La Habana', country: 'Cuba', countryOriginal: 'Cuba', lat: 23.1136, lng: -82.3666 },
            { name: 'Guatemala City', nameOriginal: 'Ciudad de Guatemala', country: 'Guatemala', countryOriginal: 'Guatemala', lat: 14.6349, lng: -90.5069 },
            { name: 'San Salvador', nameOriginal: 'San Salvador', country: 'El Salvador', countryOriginal: 'El Salvador', lat: 13.6929, lng: -89.2182 },
            { name: 'Tegucigalpa', nameOriginal: 'Tegucigalpa', country: 'Honduras', countryOriginal: 'Honduras', lat: 14.0723, lng: -87.1921 },
            { name: 'Managua', nameOriginal: 'Managua', country: 'Nicaragua', countryOriginal: 'Nicaragua', lat: 12.1364, lng: -86.2514 },
            { name: 'San Jose', nameOriginal: 'San José', country: 'Costa Rica', countryOriginal: 'Costa Rica', lat: 9.9281, lng: -84.0907 },
            { name: 'Panama City', nameOriginal: 'Ciudad de Panamá', country: 'Panama', countryOriginal: 'Panamá', lat: 8.9824, lng: -79.5199 },
            { name: 'Kingston', nameOriginal: 'Kingston', country: 'Jamaica', countryOriginal: 'Jamaica', lat: 17.9714, lng: -76.7931 },
            { name: 'Santo Domingo', nameOriginal: 'Santo Domingo', country: 'Dominican Republic', countryOriginal: 'República Dominicana', lat: 18.4861, lng: -69.9312 }
        ],
        major: [
            { name: 'New York', nameOriginal: 'New York', country: 'United States', countryOriginal: 'United States', lat: 40.7128, lng: -74.0060 },
            { name: 'Los Angeles', nameOriginal: 'Los Angeles', country: 'United States', countryOriginal: 'United States', lat: 34.0522, lng: -118.2437 },
            { name: 'Chicago', nameOriginal: 'Chicago', country: 'United States', countryOriginal: 'United States', lat: 41.8781, lng: -87.6298 },
            { name: 'Toronto', nameOriginal: 'Toronto', country: 'Canada', countryOriginal: 'Canada', lat: 43.6532, lng: -79.3832 },
            { name: 'Houston', nameOriginal: 'Houston', country: 'United States', countryOriginal: 'United States', lat: 29.7604, lng: -95.3698 },
            { name: 'Phoenix', nameOriginal: 'Phoenix', country: 'United States', countryOriginal: 'United States', lat: 33.4484, lng: -112.0740 },
            { name: 'Philadelphia', nameOriginal: 'Philadelphia', country: 'United States', countryOriginal: 'United States', lat: 39.9526, lng: -75.1652 },
            { name: 'San Francisco', nameOriginal: 'San Francisco', country: 'United States', countryOriginal: 'United States', lat: 37.7749, lng: -122.4194 },
            { name: 'Montreal', nameOriginal: 'Montréal', country: 'Canada', countryOriginal: 'Canada', lat: 45.5017, lng: -73.5673 },
            { name: 'Vancouver', nameOriginal: 'Vancouver', country: 'Canada', countryOriginal: 'Canada', lat: 49.2827, lng: -123.1207 },
            { name: 'Miami', nameOriginal: 'Miami', country: 'United States', countryOriginal: 'United States', lat: 25.7617, lng: -80.1918 },
            { name: 'Guadalajara', nameOriginal: 'Guadalajara', country: 'Mexico', countryOriginal: 'México', lat: 20.6597, lng: -103.3496 },
            { name: 'Monterrey', nameOriginal: 'Monterrey', country: 'Mexico', countryOriginal: 'México', lat: 25.6866, lng: -100.3161 }
        ]
    },
    'south-america': {
        capitals: [
            { name: 'Sao Paulo', nameOriginal: 'São Paulo', country: 'Brazil', countryOriginal: 'Brasil', lat: -23.5505, lng: -46.6333 },
            { name: 'Buenos Aires', nameOriginal: 'Buenos Aires', country: 'Argentina', countryOriginal: 'Argentina', lat: -34.6037, lng: -58.3816 },
            { name: 'Lima', nameOriginal: 'Lima', country: 'Peru', countryOriginal: 'Perú', lat: -12.0464, lng: -77.0428 },
            { name: 'Bogota', nameOriginal: 'Bogotá', country: 'Colombia', countryOriginal: 'Colombia', lat: 4.7110, lng: -74.0721 },
            { name: 'Santiago', nameOriginal: 'Santiago', country: 'Chile', countryOriginal: 'Chile', lat: -33.4489, lng: -70.6693 },
            { name: 'Caracas', nameOriginal: 'Caracas', country: 'Venezuela', countryOriginal: 'Venezuela', lat: 10.4806, lng: -66.9036 },
            { name: 'Quito', nameOriginal: 'Quito', country: 'Ecuador', countryOriginal: 'Ecuador', lat: -0.1807, lng: -78.4678 },
            { name: 'La Paz', nameOriginal: 'La Paz', country: 'Bolivia', countryOriginal: 'Bolivia', lat: -16.5000, lng: -68.1500 },
            { name: 'Asuncion', nameOriginal: 'Asunción', country: 'Paraguay', countryOriginal: 'Paraguay', lat: -25.2637, lng: -57.5759 },
            { name: 'Montevideo', nameOriginal: 'Montevideo', country: 'Uruguay', countryOriginal: 'Uruguay', lat: -34.9011, lng: -56.1645 },
            { name: 'Brasilia', nameOriginal: 'Brasília', country: 'Brazil', countryOriginal: 'Brasil', lat: -15.8267, lng: -47.9218 },
            { name: 'Georgetown', nameOriginal: 'Georgetown', country: 'Guyana', countryOriginal: 'Guyana', lat: 6.8013, lng: -58.1551 },
            { name: 'Paramaribo', nameOriginal: 'Paramaribo', country: 'Suriname', countryOriginal: 'Suriname', lat: 5.8520, lng: -55.2038 },
            { name: 'Cayenne', nameOriginal: 'Cayenne', country: 'French Guiana', countryOriginal: 'Guyane française', lat: 4.9333, lng: -52.3333 }
        ],
        major: [
            { name: 'Rio de Janeiro', nameOriginal: 'Rio de Janeiro', country: 'Brazil', countryOriginal: 'Brasil', lat: -22.9068, lng: -43.1729 },
            { name: 'Belo Horizonte', nameOriginal: 'Belo Horizonte', country: 'Brazil', countryOriginal: 'Brasil', lat: -19.9167, lng: -43.9345 },
            { name: 'Medellin', nameOriginal: 'Medellín', country: 'Colombia', countryOriginal: 'Colombia', lat: 6.2476, lng: -75.5658 },
            { name: 'Cali', nameOriginal: 'Cali', country: 'Colombia', countryOriginal: 'Colombia', lat: 3.4516, lng: -76.5320 },
            { name: 'Cordoba', nameOriginal: 'Córdoba', country: 'Argentina', countryOriginal: 'Argentina', lat: -31.4201, lng: -64.1888 },
            { name: 'Rosario', nameOriginal: 'Rosario', country: 'Argentina', countryOriginal: 'Argentina', lat: -32.9442, lng: -60.6505 },
            { name: 'Valparaiso', nameOriginal: 'Valparaíso', country: 'Chile', countryOriginal: 'Chile', lat: -33.0472, lng: -71.6127 },
            { name: 'Guayaquil', nameOriginal: 'Guayaquil', country: 'Ecuador', countryOriginal: 'Ecuador', lat: -2.1894, lng: -79.8890 }
        ]
    },
    oceania: {
        capitals: [
            { name: 'Sydney', nameOriginal: 'Sydney', country: 'Australia', countryOriginal: 'Australia', lat: -33.8688, lng: 151.2093 },
            { name: 'Canberra', nameOriginal: 'Canberra', country: 'Australia', countryOriginal: 'Australia', lat: -35.2809, lng: 149.1300 },
            { name: 'Wellington', nameOriginal: 'Te Whanganui-a-Tara', country: 'New Zealand', countryOriginal: 'Aotearoa', lat: -41.2865, lng: 174.7762 },
            { name: 'Port Moresby', nameOriginal: 'Port Moresby', country: 'Papua New Guinea', countryOriginal: 'Papua Niugini', lat: -9.4438, lng: 147.1803 },
            { name: 'Suva', nameOriginal: 'Suva', country: 'Fiji', countryOriginal: 'Viti', lat: -18.1416, lng: 178.4419 },
            { name: 'Honiara', nameOriginal: 'Honiara', country: 'Solomon Islands', countryOriginal: 'Solomon Islands', lat: -9.4456, lng: 159.9729 },
            { name: 'Apia', nameOriginal: 'Apia', country: 'Samoa', countryOriginal: 'Sāmoa', lat: -13.8333, lng: -171.7667 },
            { name: 'Nuku\'alofa', nameOriginal: 'Nuku\'alofa', country: 'Tonga', countryOriginal: 'Tonga', lat: -21.1393, lng: -175.2019 },
            { name: 'Palikir', nameOriginal: 'Palikir', country: 'Micronesia', countryOriginal: 'Micronesia', lat: 6.9248, lng: 158.1610 }
        ],
        major: [
            { name: 'Melbourne', nameOriginal: 'Melbourne', country: 'Australia', countryOriginal: 'Australia', lat: -37.8136, lng: 144.9631 },
            { name: 'Brisbane', nameOriginal: 'Brisbane', country: 'Australia', countryOriginal: 'Australia', lat: -27.4698, lng: 153.0251 },
            { name: 'Perth', nameOriginal: 'Perth', country: 'Australia', countryOriginal: 'Australia', lat: -31.9505, lng: 115.8605 },
            { name: 'Adelaide', nameOriginal: 'Adelaide', country: 'Australia', countryOriginal: 'Australia', lat: -34.9285, lng: 138.6007 },
            { name: 'Auckland', nameOriginal: 'Tāmaki Makaurau', country: 'New Zealand', countryOriginal: 'Aotearoa', lat: -36.8485, lng: 174.7633 },
            { name: 'Christchurch', nameOriginal: 'Ōtautahi', country: 'New Zealand', countryOriginal: 'Aotearoa', lat: -43.5321, lng: 172.6362 },
            { name: 'Gold Coast', nameOriginal: 'Gold Coast', country: 'Australia', countryOriginal: 'Australia', lat: -28.0167, lng: 153.4000 }
        ]
    }
};

// Helper function to get cities based on settings
function getCitiesForGame(continent, cityType, language) {
    const continentData = CITIES_DATABASE[continent];
    if (!continentData) return [];
    
    let cities;
    if (cityType === 'capitals') {
        cities = [...continentData.capitals];
    } else {
        cities = [...continentData.capitals, ...continentData.major];
    }
    
    // Apply language setting
    if (language === 'original') {
        // Use original names
        cities = cities.map(city => ({
            ...city,
            displayName: city.nameOriginal,
            displayCountry: city.countryOriginal
        }));
    } else {
        // Use English names (default)
        cities = cities.map(city => ({
            ...city,
            displayName: city.name,
            displayCountry: city.country
        }));
    }
    
    return cities;
}
