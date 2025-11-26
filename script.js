// State Management
let cart = JSON.parse(localStorage.getItem('marketCart')) || [];
let currentPage = 'home';

// Categories Data
const categories = [
    { id: 'poissonnerie', name: 'Poissonnerie', image: 'https://images.unsplash.com/photo-1637679242615-0ddbbb34b7d7?w=400' },
    { id: 'glaces', name: 'Produits glacés', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400' },
    { id: 'alimentaires', name: 'Produits alimentaires', image: 'https://images.unsplash.com/photo-1714224247661-ee250f55a842?w=400' },
    { id: 'menagers', name: 'Produits ménagers', image: 'https://images.unsplash.com/photo-1758887262204-a49092d85f15?w=400' },
    { id: 'lessive', name: 'Lessive', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400' },
    { id: 'cosmetiques', name: 'Cosmétiques', image: 'https://images.unsplash.com/photo-1623882213146-e60f8b9e8875?w=400' },
    { id: 'parfums', name: 'Parfums', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400' },
    { id: 'bijoux', name: 'Bijoux', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400' },
    { id: 'cartes', name: 'Cartes de vœux', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400' },
    { id: 'hygiene', name: 'Hygiène', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400' },
    { id: 'maji', name: 'Maji', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    { id: 'alcools', name: 'Alcools', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400' },
    { id: 'paniers', name: 'Paniers cadeaux', image: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?w=400' },
    { id: 'tabac', name: 'Cigares / Cigarettes / Chicha', image: 'https://images.unsplash.com/photo-1594717527116-4b5b8c9a9146?w=400' },
    { id: 'bebe', name: 'Produits bébé', image: 'https://images.unsplash.com/photo-1619045207244-5a4fdecc9616?w=400' },
    { id: 'insecticides', name: 'Insecticides', image: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=400' },
    { id: 'kits', name: 'Kits alimentaires', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
];

// Products Data
const products = [
    // Poissonnerie
    { id: 'p1', name: 'Saumon frais', price: 2500, category: 'poissonnerie', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400' },
    { id: 'p2', name: 'Crevettes', price: 3000, category: 'poissonnerie', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400' },
    { id: 'p3', name: 'Tilapia', price: 1500, category: 'poissonnerie', image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400' },
    
    // Produits alimentaires
    { id: 'p4', name: 'Huile crisol', price: 1200, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400' },
    { id: 'p5', name: 'Ketchup TOMPAC', price: 300, category: 'alimentaires', image: 'foto mak/ketchup.jpeg'},
    { id: 'p6', name: 'Ketchup Famosa Sachet', price: 800, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400' },
    { id: 'p7', name: 'La Perla Pate De Tomate', price: 600, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p8', name: 'La Perla Lodized Salt', price: 1200, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400' },
    { id: 'p9', name: 'La Favorita Hot Dog ', price: 300, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400' },
    { id: 'p10', name: 'Avoine Sachet', price: 800, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400' },
    { id: 'p10', name: 'Atizan (Au Beurre)', price: 600, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p11', name: 'Avoine Bon Cœur Gros', price: 800, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p12', name: 'Avoine Bon Cœur Petit', price: 650, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p13', name: 'Kay Lucien Boite', price: 322, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p14', name: 'Karyna Hot Dog ', price: 590, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p15', name: 'Alberto Oil', price: 690, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p16', name: 'Kanel', price: 790, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p17', name: 'Anita ', price: 890, category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p18', name: 'Karyna Aubeure ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p19', name: 'Karyna (Pain Trancher)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p20', name: 'Ail Garlic Blanc', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p21', name: 'Lay Epices Gros ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p22', name: 'Lasagna Pincesa ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p23', name: 'Lala Pate tomate ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p24', name: 'Louisina original', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p25', name: 'Lays ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p26', name: 'Lay Epices petit ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p27', name: 'La Perla Sauce Piquantes ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p28', name: 'Fromage La Vache Qui Rit', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p29', name: 'Farine France (Petit)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p30', name: 'Farine France Gros', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p31', name: 'MAggi Criollito Tablette', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p32', name: 'Fromage Tête de mort ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p33', name: 'Kay Lucien Sachet ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p34', name: ' Kasav ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p35', name: 'Karyna Le Familial ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p36', name: 'Ketchup Famosa Marmite ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p37', name: 'Ketchup Famosa Bout', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p38', name: 'Beurre Ti Malice', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p39', name: 'Maggie Koupe Dwet ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p40', name: 'Riz Bongu (sac)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p41', name: 'Ragu Sauce 14 oz', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p42', name: 'Macaroni Geant', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p43', name: 'Macaroni Gean Courbre', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p44', name: 'Macaroni (Arlequin)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p45', name: 'Riz Amyrah', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p46', name: 'Riz TCS (gros)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p47', name: 'Riz TCS (petit)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p48', name: 'Riz blanc BONCOEUR 450', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p49', name: 'Riz blanc BONCOEUR 150 ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p50', name: 'Riz BONCOEUR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p51', name: 'Riz la Crete Blanc', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p52', name: 'Riz Anita (Sac)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p53', name: 'Rika Huile Vegetale', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p54', name: 'Mayonnaise Manicera Bidon', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p55', name: 'Mayonnaise Manicera Bocale', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p56', name: 'Huile Mazorca', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p57', name: 'Maggi kay lucien Paquet', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p58', name: 'Maggi Criollito Paquet', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p59', name: 'Maggi Ti cube criollito', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p60', name: 'Maniciera', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p61', name: 'Remia Margarine', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p62', name: 'Marriane Margarine', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p63', name: 'Ranchero Liquide Sazon', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p64', name: 'Ranchero Poudre', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p65', name: 'Riz Shelda BONCOEUR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p66', name: 'Riz shelda Jaune', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p67', name: 'Riz Shella Blanc', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p68', name: 'Manje Chat', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p69', name: 'Mantuege Ti Malice', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p70', name: 'Huile Mazola', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p71', name: 'Top Salami', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p72', name: 'RIZ SHELDA PETIT BONCOEUR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p73', name: 'RAMEN PASTA MAMA ASSOR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p74', name: 'RANCHERO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p75', name: 'RAMEN PRINCESA VEGETABL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p76', name: 'MAIS BON COEUR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p77', name: 'MAIS ALBERTO GWO TET (SAI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p78', name: 'MAIS BON COEUR PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p79', name: 'Makaroni bongu', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p80', name: 'MAIS POP CORN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p81', name: 'MAIS ALBERTO FIN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p82', name: 'VINEGAR 473ML', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p83', name: 'RIZ CHELA BLANC', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p84', name: 'VINAIGRE J&JS BLANC', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p85', name: 'Mais', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p86', name: 'RIZ CHELA JAUNE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p87', name: 'RIZ CHELDA JAUNE MAZORCA MAIS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p88', name: 'TOMPAC(TOMATE CATCHUP)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p89', name: 'MANBA BON COEUR PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p90', name: 'MANBA BON COEUR GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p91', name: 'RIZ SHELLA JAUNE BONCOEL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p92', name: 'TRITRI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p93', name: 'V8 ORIGINAL VEGETAL JUICE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p94', name: 'RIZ MEGA ( SAC)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p95', name: 'RIZ SHELLA JAUNE PETIT BOY', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p96', name: 'RIZ TCS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p97', name: 'POIS BLAN PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p98', name: 'POIS BLANC', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p99', name: 'POIS CONGO ( GROS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p100', name: 'POIS BLAN (GROS)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p101', name: 'POIS BEURRE (PETIT )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p102', name: 'POIS BEURRE GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p103', name: 'POIS BEURRE PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p104', name: 'POIS CONGO (PETIT )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p105', name: 'SAC MAIS ALBERTO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p106', name: 'SALAMI CARISA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p107', name: 'POIS ROUGE PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p108', name: 'POIS FRANCE (PETIT )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p109', name: 'POIS CONGO GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p110', name: 'POIS CONGO PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p111', name: 'POIS FRANCE ( GROS)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p112', name: 'POIS BEURRE ( GROS)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p113', name: 'PIERRE PROD MAIS FIN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p114', name: 'SAUMON BONGU(MACKREL)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p115', name: 'SAUMON BONGU (MACKEREL)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p116', name: 'SAUMON BONGU(MACKREL)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p117', name: 'PETIT MIL GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p118', name: 'SAC MAIS ALBERTHO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p119', name: 'PETIT MIL PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p120', name: 'SAUMON BONGU MACKEREL :', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p121', name: 'SARDINE RICA FISH', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p122', name: 'SARDINE GUEISHA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p123', name: 'SARDINE BONGU MACKEREL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p124', name: 'PISTACHE BON COEUR PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p125', name: 'SAUCISSES BOUCANIER', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p126', name: 'SARDINE VEVE JACK MAQUEF', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p127', name: 'PISTACHE BON COEUR BOCA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p128', name: 'SACHET WINGS PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p129', name: 'SACHET CUISSE DINDE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p130', name: 'SACHET BLAYI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p131', name: 'SACHET BLAYI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p132', name: 'POIS NOIR PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p133', name: 'POIS LENTILLES GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p134', name: 'POIS MAYAMI (GROS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p135', name: 'POIS MAYAMI (PETIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p136', name: 'SAC SUCRE MAYAGUEZ', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p137', name: 'POIS NOIRE (PETIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p138', name: 'POIS PINTO BEANS LOS LOBC', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p139', name: 'POIS PINTO GOURMET', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p140', name: 'POIS NOIRE (GROS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p141', name: 'SAC RIZ ANITA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p142', name: 'POIS NOIR PGROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p143', name: 'POIS NOIR PIA MARIA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p144', name: 'POIS LENTILLES (PETIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p145', name: 'POIS ROUGE (GROS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p146', name: 'POIS FRANCE PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p147', name: 'Pois pinto petit', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p148', name: 'POIS FRANCE GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p149', name: 'SACHET WINGS DINDE 2', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p150', name: 'POIS ROUGE GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p151', name: 'POIS ROUGE ( PETIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p152', name: 'SAC POIS PINTO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p153', name: 'SACHET DINDE WINGS PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p154', name: 'POIS LENTILLES', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p155', name: 'POIS LENTILLES ( GROS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p156', name: 'SACHET POULET', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p157', name: 'POIS PINTO GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p158', name: 'SACHET WINGS DINDE 1', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p159', name: 'SACHET WINGS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p160', name: 'PETIT MIL ( PETIT )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p161', name: 'SPAGHETTI PRINCESA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p162', name: 'SPAGHETTI PASTA ( CAISSE )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p163', name: 'OIGNION', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p164', name: 'PRODUITS LALA(FARINE DE BLÉ)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p165', name: 'PRODUITS LALA(POIVRE EN POUDRE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p166', name: 'PRODUITS LALA(GIROFLE EN POUDRE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p167', name: 'OIL CRISOL GROS GALLON', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p168', name: 'SPAGHETTI GEANT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p169', name: 'PRODUITS LALA(AVOINE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p170', name: 'SPAGHETTI FAMI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p171', name: 'PRODUITS LALA(CANELLE EN POUDRE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p172', name: 'PRODUITS LALA(CLOU DE GIROFLE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p173', name: 'Spaghetti pasta', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p174', name: 'SPAGHETTI GEANT ( CAISSE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p175', name: 'PRODUITS LALA(SUPER AKAN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p176', name: 'RAGU CHUNKY MUSHROOM', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p177', name: 'QUALIKO CUISSES DE POULE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p178', name: 'MORTADELA 400G', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p179', name: 'TI MALICE (BEURRE DE CUISINE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p180', name: 'RAGU OWS TRADITIONAL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p181', name: 'TI MALICE(ENRICHI EN VITAMI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p182', name: 'TI MALICE(BEURRE DE CUISIN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p183', name: 'MORUE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p184', name: 'SUCRE BON COEUR (PETIT )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p185', name: 'MUSTARD COUNTRY BARN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p186', name: 'SUCRE BON COEUR ( GROS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p187', name: 'Moyen saumon bongu', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p188', name: 'MORUE GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p189', name: 'MORUE MOYEN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p190', name: 'MORUE PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p191', name: 'SPAGHETTI CLASSICO (CAISSE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p192', name: 'PRINGLESS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p193', name: 'SAZON RANCHERO SUPREM', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p194', name: 'SAZON RANCHERO SUPREM', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p195', name: 'PASTA(CLASSICO)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p196', name: 'PRODUITS LALA (DU RIZ)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p197', name: 'PRODUITS LALA (ARAROUT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p198', name: 'PRODUIT LALA (POMME DE TERRE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p199', name: 'PASTAMAMA(SPAGHETTI)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p200', name: 'PEN ATIZAN AU BEURRE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p201', name: 'SAC BLE ALBERTO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p202', name: 'PETIT MIL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p203', name: 'PEANUT BUTTER 454G', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p204', name: 'PATE DE TOMATE BONGOU', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p205', name: 'PATE DE TOMATE BONGU', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p206', name: 'Pate tomate bongu gros', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p207', name: 'PAPITA BANNANN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p208', name: 'PRODUITS LALA(AMIDON)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p209', name: 'spagetti libon', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p210', name: 'Spagetti geant', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p211', name: 'SPAGHETTI (ARLEQUIN)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p212', name: 'SPAGHETTI CLASSICO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p213', name: 'PRODUITS LALA(ANIS EPICE [', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p214', name: 'SPAGHETTI ARLEQUIN (CAISSE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p215', name: 'PRODUITS LALA(AK-100)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p216', name: 'PRODUITS LALA (LAM VÉRITABLE )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p217', name: 'SEL REFISAL SACHET', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p218', name: 'Sel Refisal', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p219', name: 'PRODUITS LALA (MAIS )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p220', name: 'PRODUITS LALA (MANIOC)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p221', name: 'SNACKITOS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p222', name: 'Orkide', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p223', name: 'BONGU(GEANT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p224', name: 'BON SEL + DAYITI GRAIN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p225', name: 'Bon Coeur Mamba (Petit )', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p226', name: 'BRINTO SUNFLOWER', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p227', name: 'Brinto huile de soja 1/2 gallon', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p228', name: 'Brinto Huile 1 gallon', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p229', name: 'BOCAL CAFE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p230', name: 'Gros mega', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p231', name: 'GROS SAUMON', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p232', name: 'Bon Coeur (Petit Epice)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p233', name: 'BON COEUR (MAMBA)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p234', name: 'Bon coeur (Gros Epice)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p235', name: 'CAISSE GESIER', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p236', name: 'Caisse geant', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p237', name: 'Caisse gallon vinaigre J8J\'s', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p238', name: 'CAISSE RAMEN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p239', name: 'Caisse pate tomate bongu moyer', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p240', name: 'CAISSE HUILE BRINTO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p241', name: 'Caisse bonle', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p242', name: 'CAISSE BLAYI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p243', name: 'BRINTO(SUNFLOWER OIL)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p244', name: 'CAISSE CUISSE DE POULET', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p245', name: 'CAISSE CUISSE DE DINDES', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p246', name: 'CAISSE CRAKENAS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p247', name: 'Beurre sachet ti malice', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p248', name: 'BEURRE RICAMESA MAGARIN', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p249', name: 'HUILE TI MALICE BOQUITE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p250', name: 'HUILE CRISOL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p251', name: 'BEURRE TI MALICE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p252', name: 'HUILE MAZOLA VEGETABLE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p253', name: 'BEURRE AMANDA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p254', name: 'barbecue sauce', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p255', name: 'J&J VINEGAR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p256', name: 'BEURRE RICAMESA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p257', name: 'BEURRE MARIANE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p258', name: 'Beurre de cuisine', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p259', name: 'HARENG SAURS(TETE MORUE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p260', name: 'BLE BON COEUR (PETIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p261', name: 'BLE BON COEUR (Gros)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p262', name: 'HARENG SAUR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p263', name: 'HARENG SAUR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p264', name: 'BLE FAMILY', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p265', name: 'HOT DOG ROCKINGHAM', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p266', name: 'Hot dog seara', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p267', name: 'HUILE BONGU JERRY CAN(BIC)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p268', name: 'Ble', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p269', name: 'Hot dog avivar', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p270', name: 'HOT DOG CONFIDENCE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p271', name: 'CAISSE SAUMON BONGU', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p272', name: 'FAMOSA CATCHUP', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p273', name: 'FAMOSA CATCHUP', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p274', name: 'FAMOSA CATCHUP', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p275', name: 'CRISOL ACIETE DE SOJA Petit', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p276', name: 'CRISOL OIL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p277', name: 'CRISOL plain', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p278', name: 'FARINE BONGU', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p279', name: 'FARINE FRANCE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p280', name: 'FARINE FRANCE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p281', name: 'FAMOSA KETCHUP', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p282', name: 'FAMOSA KETCHUP', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p283', name: 'Famosa sauce', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p284', name: 'EAU DASANI', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p285', name: 'EL CRIOLLITO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p286', name: 'ELLE & VIRE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p287', name: 'DORITOS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p288', name: 'Diri peyl', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p289', name: 'Diana maccaroni', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p290', name: 'ELLE & VIRE STRAWBERRY', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p291', name: 'ELSA CHOCO DOUDOU', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p292', name: 'ELSA MUFFIN RAISINS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p293', name: 'ELLE & VIRE ABRICOT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p294', name: 'ELLE & VIRE BANANE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p295', name: 'PASCUAL VANILLA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p296', name: 'CONDENSED MILK PEAK', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p297', name: 'GALLIA CALISMA 2', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p298', name: 'PASCUAL YOGIKIDS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p299', name: 'PASCUAL(BLUEBERRY)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p300', name: 'CODIGEL MILK CUBE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p301', name: 'CHICOLAC', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p302', name: 'PASCUAL (MACEDONIA)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p303', name: 'PASCUAL (BIG DAY)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p304', name: 'PASCUAL (GREEK)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p305', name: 'PASCUAL (VAINILLA)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p306', name: 'PASCUAL BANANA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p307', name: 'PASCUAL BLUEBERRY', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p308', name: 'PASCUAL (WHOLE MILK)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p309', name: 'PASCUAL (YOGIKIDS)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p310', name: 'CAISSE PASCUAL', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p311', name: 'CAISSE ALASKA POWDER MILK', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p312', name: 'FROMAGE LA VACHE QUI RIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p313', name: 'BONGU(LAIT ENTIER EN POUDRE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p314', name: 'BONLE (LAIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p315', name: 'GLORIA(ZERO LACTO)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p316', name: 'YOFRESH DURAZNO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p317', name: 'CAISSE LAIT BONGU', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p318', name: 'PEDIASURE VANILLE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p319', name: 'PEDIASURE VANILLA SHAKE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p320', name: 'YOGURT ZOTTIS FRUIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p321', name: 'PASCUAL STRAWBERRY / FRE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p322', name: 'PASCUAL STRAWBERRY- BAA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p323', name: 'PASCUAL FRUIT SALAD', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p324', name: 'PASCUAL GREEK', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p325', name: 'NESTLE CONDENSED MILK', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p326', name: 'LAIT ALACTA PLUS ALASKA (INSTANT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p327', name: 'LAIT ALACTA PLUS PREBIOTIC', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p328', name: 'LAIT NURSIE PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p329', name: 'LAIT TI MALICE EVAPORE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p330', name: 'Gloria', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p331', name: 'PEDIASURE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p332', name: 'GLORIA (LECHE ENTERA)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p333', name: 'GLORIA (LAIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p334', name: 'YOFRESH FRESA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p335', name: 'YOFRESH VANILLA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p336', name: 'YOGURT ELLE & VIRE ASSOR', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p337', name: 'GALLIA (2)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p338', name: 'GALLIA (CALISMA) GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p339', name: 'LAIT NURSIE 0-6 MOIS GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p340', name: 'LAIT NESTLE NIDO GROWING', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p341', name: 'ALASKA (INSTANT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p342', name: 'ALASKA (LAIT)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p343', name: 'LAIT NUTRA MARMITE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p344', name: 'MULIK CHOCOLATE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p345', name: 'ABLE FARM CONDENSED', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p346', name: 'MULIK STRAWBERRY', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p347', name: 'MILKANA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p348', name: 'TARTINO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p349', name: 'LAIT BON COEUR GROS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p350', name: 'NESTLE NIDO', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p351', name: 'LAIT BON COEUR PETIT', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p352', name: 'NIDO 1+ LAIT EN POUDRE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p353', name: 'LAIT BONGU EVAPORE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p354', name: 'SPORT SHAKE STRAWBERRY', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p355', name: 'NUTRIGU 3', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p356', name: 'CEREALES', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p357', name: 'NURSIE 0-6 MOIS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p358', name: 'PETIT GREEN-LAND (INSTANTANE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p359', name: 'LAIT CARNATION NESTLE EVA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p360', name: 'GREEN-LAND (INSTANTANE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p361', name: 'LAIT EN POUDRE OLIMP MILK', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p362', name: 'LAIT GLORIA EVAPORE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p363', name: 'LAIT KERRY EN POUDRE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p364', name: 'GREEN-LAND (CAMPO VERDE)', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p365', name: 'ALACTA PLUS', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p366', name: 'GREEN LAND 900G', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p367', name: 'SPORT SHAKE VANILLA', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    { id: 'p368', name: 'LAIT NURSIE', price: '', category: 'alimentaires', image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400' },
    
    // Produits glacés 
    { id: 'p', name: 'Glace vanille', price: 500, category: 'glaces', image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400' },
    { id: 'p', name: 'Légumes surgelés', price: 450, category: 'glaces', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400' },
    
    // Produits ménagers
    { id: 'p', name: 'Détergent multi-usage', price: 600, category: 'menagers', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400' },
    { id: 'p', name: 'Éponges (pack de 6)', price: 200, category: 'menagers', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400' },
    
    // Lessive
    { id: 'p', name: 'Lessive liquide', price: 800, category: 'lessive', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400' },
    { id: 'p', name: 'Adoucissant', price: 550, category: 'lessive', image: 'https://images.unsplash.com/photo-1627482235840-2f0d9c2d0c8e?w=400' },
    
    // Cosmétiques
    { id: 'p14', name: 'Crème visage', price: 1800, category: 'cosmetiques', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400' },
    { id: 'p15', name: 'Rouge à lèvres', price: 1200, category: 'cosmetiques', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400' },
    
    // Parfums
    { id: 'p16', name: 'Parfum femme', price: 3500, category: 'parfums', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400' },
    { id: 'p17', name: 'Parfum homme', price: 3500, category: 'parfums', image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400' },
    
    // Hygiène
    { id: 'p18', name: 'Savon liquide', price: 400, category: 'hygiene', image: 'https://images.unsplash.com/photo-1585828923994-5bf521fe1d62?w=400' },
    { id: 'p19', name: 'Dentifrice', price: 350, category: 'hygiene', image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400' },
    
    // Maji (Eau)
    { id: 'p20', name: 'Eau minérale 6x1.5L', price: 450, category: 'maji', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400' },
    { id: 'p21', name: 'Eau gazeuse', price: 200, category: 'maji', image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f0e?w=400' },
    
    // Produits bébé 
    { id: 'p22', name: 'Couches bébé', price: 1500, category: 'bebe', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400' },
    { id: 'p23', name: 'Lingettes bébé', price: 600, category: 'bebe', image: 'https://images.unsplash.com/photo-1602641056105-7c4e85a6096d?w=400' },
    
    // Kits alimentaires
    { id: 'p24', name: 'Kit petit déjeuner', price: 2000, category: 'kits', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400' },
    { id: 'p25', name: 'Kit pâtes', price: 1500, category: 'kits', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400' },
];

// Ensure each 'alimentaires' product has a stable image URL (Unsplash search-based)
// This sets `product.image` so deployed sites will use explicit URLs rather than
// relying on runtime-only rendering logic.
products.forEach(p => {
    try {
        if (p && p.category === 'alimentaires') {
            const raw = (p.name || '').toString();
            const cleaned = raw.replace(/\([^)]*\)/g, '')
                                .replace(/[^a-zA-Z0-9\s-]/g, ' ')
                                .replace(/\s+/g, ' ')
                                .trim()
                                .toLowerCase()
                                .slice(0, 60);
            const query = encodeURIComponent(cleaned || 'alimentaire');
            // Use source.unsplash to get a relevant image; 600x600 for better quality
            p.image = `https://source.unsplash.com/600x600/?${query}`;
        }
    } catch (e) {
        // ignore and keep existing image if any
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    navigateTo('home');
});

// Navigation
function navigateTo(page) {
    currentPage = page;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Render page
    const mainContent = document.getElementById('mainContent');
    
    switch(page) {
        case 'home':
            mainContent.innerHTML = renderHomePage();
            break;
        case 'products':
            mainContent.innerHTML = renderProductsPage();
            attachProductsPageListeners();
            break;
        case 'about':
            mainContent.innerHTML = renderAboutPage();
            break;
        case 'contact':
            mainContent.innerHTML = renderContactPage();
            attachContactFormListener();
            break;
        case 'cart':
            mainContent.innerHTML = renderCartPage();
            attachCartListeners();
            break;
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Navigate to category - filters products and goes to products page
function navigateToCategory(categoryId) {
    navigateTo('products');
    
    // Delay to ensure DOM is rendered
    setTimeout(() => {
        const categoryBtn = document.querySelector(`[data-category="${categoryId}"]`);
        if (categoryBtn) {
            categoryBtn.click();
        }
    }, 100);
}

// Home Page
function renderHomePage() {
    const featuredProducts = products.slice(0, 4);
    
    return `
        <!-- Hero Section -->
        <section class="hero">
            <img src="photo_à_propos.jpeg" alt="Market" class="hero-image">
            <div class="hero-content container">
                <div class="hero-text">
                    <h1>Bienvenue dans Bon cœur Mini Mart </h1>
                    <p>Produits variés et disponibles chaque jour.</p>
                    <button class="btn btn-primary" onclick="navigateTo('products')">
                        voir les produits 
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <!-- Categories Section -->
        <section class="section section-white">
            <div class="container">
                <div class="section-header">
                    <h2>Nos catégories</h2>
                    <p>Découvrez notre large gamme de produits</p>
                </div>
                <div class="grid grid-4">
                    ${categories.map(cat => `
                        <div class="category-card" onclick="navigateToCategory('${cat.id}')">
                            <img src="${cat.image}" alt="${cat.name}">
                            <div class="category-overlay"></div>
                            <div class="category-name">${cat.name}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Featured Products -->
        <section class="section section-gray">
            <div class="container">
                <div class="section-header">
                    <h2>Produits recommandés</h2>
                    <p>Nos meilleures sélections pour vous</p>
                </div>
                <div class="grid grid-4">
                    ${featuredProducts.map(product => renderProductCard(product)).join('')}
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section section-emerald">
            <div class="container text-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="margin: 0 auto 1.5rem;">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <div class="section-header">
                    <h2>Commandez dès maintenant</h2>
                    <p>Profitez de nos produits de qualité livrés rapidement</p>
                </div>
                <button class="btn btn-white" onclick="navigateTo('products')">
                    Voir tous les produits
                </button>
            </div>
        </section>
    `;
}

// Products Page
function renderProductsPage() {
    return `
        <div class="section section-gray" style="min-height: 100vh;">
            <div class="container" style="padding-top: 3rem; padding-bottom: 3rem;">
                <h1 style="font-size: 2.5rem; margin-bottom: 2rem; color: var(--gray-900);">Nos produits</h1>
                
                <!-- Search Bar -->
                <div class="search-container" style="margin-bottom: 2rem;">
                    <div style="position: relative;">
                        <input 
                            type="text" 
                            id="productSearch" 
                            placeholder="Rechercher un produit..." 
                            class="search-input"
                            style="width: 100%; padding: 0.75rem 1rem; font-size: 1rem; border: 2px solid var(--red-600); border-radius: 0.5rem; background-color: white;"
                        >
                        <svg class="search-icon" style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); width: 20px; height: 20px; color: var(--red-600);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                    </div>
                </div>
                
                <!-- Filter -->
                <div class="filter-container">
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-category="all">Tous les produits</button>
                        <button class="filter-btn" data-category="poissonnerie">Poissonnerie</button>
                        <button class="filter-btn" data-category="glaces">Produits glacés</button>
                        <button class="filter-btn" data-category="alimentaires">Produits alimentaires</button>
                        <button class="filter-btn" data-category="menagers">Produits ménagers</button>
                        <button class="filter-btn" data-category="lessive">Lessive</button>
                        <button class="filter-btn" data-category="cosmetiques">Cosmétiques</button>
                        <button class="filter-btn" data-category="parfums">Parfums</button>
                        <button class="filter-btn" data-category="hygiene">Hygiène</button>
                        <button class="filter-btn" data-category="maji">Maji</button>
                        <button class="filter-btn" data-category="bebe">Produits bébé</button>
                        <button class="filter-btn" data-category="kits">Kits alimentaires</button>
                    </div>
                </div>
                
                <!-- Products Grid -->
                <div class="grid grid-4" id="productsGrid">
                    ${products.map(product => renderProductCard(product)).join('')}
                </div>
            </div>
        </div>
    `;
}

function attachProductsPageListeners() {
    // Search functionality
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
            
            let filtered = products;
            
            if (activeCategory !== 'all') {
                filtered = filtered.filter(p => p.category === activeCategory);
            }
            
            if (searchTerm) {
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(searchTerm) ||
                    p.id.toLowerCase().includes(searchTerm)
                );
            }
            
            document.getElementById('productsGrid').innerHTML = filtered.length > 0 
                ? filtered.map(product => renderProductCard(product)).join('')
                : '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--gray-600);">Aucun produit trouvé</div>';
        });
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            const searchTerm = document.getElementById('productSearch')?.value.toLowerCase().trim() || '';
            
            let filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
            
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(p => 
                    p.name.toLowerCase().includes(searchTerm) ||
                    p.id.toLowerCase().includes(searchTerm)
                );
            }
            
            document.getElementById('productsGrid').innerHTML = filteredProducts.length > 0
                ? filteredProducts.map(product => renderProductCard(product)).join('')
                : '<div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--gray-600);">Aucun produit trouvé</div>';
        });
    });
}

// Product Card Component
function renderProductCard(product) {
    // If the product is in 'alimentaires', build a query-based Unsplash image URL
    let imageUrl = product.image;
    try {
        if (product && product.category === 'alimentaires') {
            // Create a safe query from the product name (remove punctuation, limit length)
            const raw = (product.name || '').toString();
            const cleaned = raw.replace(/\([^)]*\)/g, '') // remove parenthesis content
                                .replace(/[^a-zA-Z0-9\s-]/g, ' ') // remove special chars
                                .replace(/\s+/g, ' ') // collapse spaces
                                .trim()
                                .toLowerCase()
                                .slice(0, 60); // limit length

            const query = encodeURIComponent(cleaned || 'alimentaire');
            imageUrl = `https://source.unsplash.com/400x400/?${query}`;
        }
    } catch (e) {
        imageUrl = product.image;
    }

    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${imageUrl}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price} GDS</div>
                <div class="product-actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn" onclick="decrementQuantity('${product.id}')">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                        <span class="quantity-value" id="qty-${product.id}">1</span>
                        <button class="quantity-btn" onclick="incrementQuantity('${product.id}')">
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                    <button class="add-to-cart" onclick="addToCart('${product.id}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        Ajouter
                    </button>
                </div>
            </div>
        </div>
    `;
}

function incrementQuantity(productId) {
    const qtyElement = document.getElementById(`qty-${productId}`);
    qtyElement.textContent = parseInt(qtyElement.textContent) + 1;
}

function decrementQuantity(productId) {
    const qtyElement = document.getElementById(`qty-${productId}`);
    const currentQty = parseInt(qtyElement.textContent);
    if (currentQty > 1) {
        qtyElement.textContent = currentQty - 1;
    }
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const qtyElement = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyElement.textContent);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    // Reset quantity
    qtyElement.textContent = '1';
    
    saveCart();
    updateCartCount();
    
    // Show feedback
    alert(`${product.name} ajouté au panier!`);
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        navigateTo('cart'); // Re-render cart page
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    navigateTo('cart'); // Re-render cart page
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function saveCart() {
    localStorage.setItem('marketCart', JSON.stringify(cart));
    updateCartCount();
}

// About Page
function renderAboutPage() {
    const galleryImages = [
        'whatsapp.jpeg',
        'photo_à_propos.jpeg',
        '3ephoto_à_propos.jpeg',
        'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=600',
        '5ephoto_à_propos.jpeg',
        'last_à_propos.jpeg',
    ];
    
    return `
        <!-- Hero -->
        <section class="section section-white">
            <div class="container text-center" style="max-width: 800px;">
                <h1 style="font-size: 3rem; margin-bottom: 1.5rem;">À propos de nous</h1>
                <p style="font-size: 1.125rem; color: var(--gray-600); line-height: 1.8;">
                    Depuis notre création, nous nous engageons à offrir à nos clients 
                    une expérience d'achat exceptionnelle avec des produits de qualité, 
                    une grande variété et un service irréprochable.
                </p>
            </div>
        </section>

        <!-- Story -->
        <section class="section section-gray">
            <div class="container">
                <div class="about-story">
                    <div class="about-text">
                        <h2>Notre histoire</h2>
                        <p>
                            Notre market est né d'une passion : celle de rendre accessible 
                            à tous une large gamme de produits de qualité. Depuis nos débuts, 
                            nous avons construit notre réputation sur la confiance, la 
                            proximité et l'excellence du service.
                        </p>
                        <p>
                            Aujourd'hui, nous sommes fiers de proposer plus de 17 catégories 
                            de produits, allant de la poissonnerie fraîche aux cosmétiques 
                            premium, en passant par les produits alimentaires et ménagers. 
                            Chaque jour, notre équipe travaille avec dévouement pour vous 
                            offrir le meilleur.
                        </p>
                        <p>
                            Notre engagement : vous garantir des produits frais, variés et 
                            de qualité, avec un service personnalisé qui fait toute la différence.
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="photo_à_propos.jpeg" alt="Notre market">
                    </div>
                </div>
            </div>
        </section>

        <!-- Values -->
        <section class="section section-white">
            <div class="container">
                <div class="section-header">
                    <h2>Nos valeurs</h2>
                    <p>Ce qui nous guide au quotidien</p>
                </div>
                <div class="grid grid-4">
                    <div class="value-card">
                        <div class="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                        </div>
                        <h3>Qualité</h3>
                        <p>Nous sélectionnons rigoureusement nos produits pour vous offrir le meilleur</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Proximité</h3>
                        <p>Un service personnalisé et une écoute attentive de vos besoins</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </div>
                        <h3>Variété</h3>
                        <p>Plus de 17 catégories de produits pour répondre à tous vos besoins</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </div>
                        <h3>Passion</h3>
                        <p>Notre engagement quotidien pour votre satisfaction</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Gallery -->
        <section class="section section-gray">
            <div class="container">
                <div class="section-header">
                    <h2>Notre market en images</h2>
                    <p>Découvrez nos espaces et nos produits</p>
                </div>
                <div class="gallery-grid">
                    ${galleryImages.map((img, i) => `
                        <div class="gallery-item">
                            <img src="${img}" alt="Market image ${i + 1}">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="section section-emerald">
            <div class="container text-center">
                <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1rem;">
                    Rejoignez notre communauté
                </h2>
                <p style="color: var(--emerald-100); font-size: 1.125rem; max-width: 600px; margin: 0 auto 2rem;">
                    Découvrez nos produits et profitez d'une expérience d'achat unique
                </p>
            </div>
        </section>
    `;
}

// Contact Page
function renderContactPage() {
    return `
        <div class="section section-gray" style="min-height: 100vh;">
            <div class="container" style="padding-top: 3rem; padding-bottom: 3rem;">
                <div class="section-header">
                    <h1 style="font-size: 3rem;">Contactez-nous</h1>
                    <p>Nous sommes à votre écoute pour toute question</p>
                </div>

                <div class="contact-grid">
                    <!-- Contact Info -->
                    <div class="contact-info">
                        <!-- Phone -->
                        <div class="contact-card">
                            <div class="contact-card-content">
                                <div class="contact-icon phone">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Téléphone</h3>
                                    <p>Appelez-nous pour toute urgence ou information</p>
                                    <a href="tel:+50942936443">+509 42936443</a>
                                </div>
                            </div>
                        </div>

                        <!-- WhatsApp -->
                        <div class="contact-card">
                            <div class="contact-card-content">
                                <div class="contact-icon whatsapp">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div style="flex: 1;">
                                    <h3>WhatsApp</h3>
                                    <p>Contactez-nous directement sur WhatsApp</p>
                                    <button class="btn btn-green" onclick="window.open('https://wa.me/50942936443', '_blank')" style="margin-top: 0.75rem;">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        Nous écrire sur WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="contact-card">
                            <div class="contact-card-content">
                                <div class="contact-icon email">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>Envoyez-nous un email, nous vous répondrons rapidement</p>
                                    <a href="mailto:boncoeurdistribution@gmail.com">boncoeurdistribution@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="contact-card">
                            <h3 style="margin-bottom: 1rem;">Suivez-nous</h3>
                            <div class="social-links">
                                <a href="https://www.facebook.com/share/17dubjLFcM/?mibextid=wwXIfr" target="_blank" class="social-link facebook">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/boncoeurminimart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="social-link instagram">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="https://www.tiktok.com/@boncoeurminimart?_r=1&_t=ZM-91hHFztPNpE" target="_blank" class="social-link tiktok" aria-label="TikTok">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="false">
                                        <!-- Official-style layered TikTok mark (cyan, magenta, black) -->
                                        <path fill="#69C9D0" d="M9.75 2v14.07A4.69 4.69 0 1 0 14.44 21V8.5h3.31V6.15h-3.31V2z" transform="translate(-0.9,0)"/>
                                        <path fill="#EE1D52" d="M9.75 2v14.07A4.69 4.69 0 1 0 14.44 21V8.5h3.31V6.15h-3.31V2z" transform="translate(0.9,0)"/>
                                        <path fill="#010101" d="M9.75 2v14.07A4.69 4.69 0 1 0 14.44 21V8.5h3.31V6.15h-3.31V2z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <!-- Location -->
                        <div class="contact-card">
                            <div class="contact-card-content" style="margin-bottom: 1rem;">
                                <div class="contact-icon location">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div>
                                    <h3>Notre adresse</h3>
                                    <p>39 Rue Sténio Vincent<br>Pétion-Ville, HT</p>
                                </div>
                            </div>
                            <div class="map-container">
                                <iframe
                                    src="https://www.google.com/maps?q=18.509508,-72.289375&hl=fr&z=15&output=embed"
                                    allowfullscreen
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div class="contact-form">
                        <h2>Envoyez-nous un message</h2>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="contactName">Votre nom</label>
                                <input type="text" id="contactName" required placeholder="Entrez votre nom">
                            </div>
                            <div class="form-group">
                                <label for="contactMessage">Votre message</label>
                                <textarea id="contactMessage" rows="6" required placeholder="Entrez votre message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-green order-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                Envoyer via WhatsApp
                            </button>
                            <p class="form-note">Ce message sera envoyé via WhatsApp</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function attachContactFormListener() {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value;
        const message = document.getElementById('contactMessage').value;
        
        const whatsappMessage = `Bonjour, je suis ${name}. ${message}`;
        window.open(`https://wa.me/50942936443?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    });
}

// Cart Page
function renderCartPage() {
    if (cart.length === 0) {
        return `
            <div class="empty-cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <h2>Votre panier est vide</h2>
                <p>Ajoutez des produits pour commencer vos achats</p>
            </div>
        `;
    }
    
    return `
        <div class="section section-gray" style="min-height: 100vh;">
            <div class="container" style="padding-top: 3rem; padding-bottom: 3rem;">
                <h1 style="font-size: 2.5rem; margin-bottom: 2rem;">Mon panier</h1>
                
                <div class="cart-layout">
                    <!-- Cart Items -->
                    <div class="cart-items">
                        ${cart.map(item => `
                            <div class="cart-item">
                                <div class="cart-item-content">
                                    <div class="cart-item-image">
                                        <img src="${item.image}" alt="${item.name}">
                                    </div>
                                    <div class="cart-item-details">
                                        <div class="cart-item-name">${item.name}</div>
                                        <div class="cart-item-price">${item.price} GDS</div>
                                        <div class="cart-item-actions">
                                            <div class="quantity-selector">
                                                <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">
                                                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </button>
                                                <span class="quantity-value">${item.quantity}</span>
                                                <button class="quantity-btn" onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">
                                                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                            <button class="remove-btn" onclick="removeFromCart('${item.id}')">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="cart-item-subtotal">
                                        <p>Sous-total</p>
                                        <p>${item.price * item.quantity} Gds</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Cart Summary -->
                    <div class="cart-summary">
                        <h2>Résumé</h2>
                        <div class="summary-items">
                            ${cart.map(item => `
                                <div class="summary-item">
                                    <span class="summary-item-name">${item.name} x ${item.quantity}</span>
                                    <span>${item.price * item.quantity} GDS</span>
                                </div>
                            `).join('')}
                        </div>
                        <hr class="summary-divider">
                        <div class="summary-subtotal">
                            <span>Sous-total</span>
                            <span>${getCartTotal()} GDS</span>
                        </div>
                        <div class="summary-total">
                            <span>Total</span>
                            <span class="total-amount">${getCartTotal()} GDS</span>
                        </div>
                        <button class="btn btn-green order-btn" onclick="placeOrder()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Commander maintenant
                        </button>
                        <p class="form-note">Votre commande sera envoyée via WhatsApp</p>
                        
                        <div class="order-info">
                            <h3>Informations</h3>
                            <ul>
                                <li>✓ Paiement via Mon Cash, Natcash, Virement Bancaire </li>
                                <li>✓ Livraison rapide et gratuit </li>
                                <li>✓ Produits frais garantis</li>
                                <li>✓ Service client réactif</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function attachCartListeners() {
    // Listeners are attached inline via onclick
}

function placeOrder() {
    if (cart.length === 0) return;
    
    let message = '🛒 *Nouvelle Commande Market*\n\n';
    message += '*Produits commandés:*\n';
    
    cart.forEach((item, index) => {
        message += `\n${index + 1}. ${item.name}\n`;
        message += `   • Quantité: ${item.quantity}\n`;
        message += `   • Prix unitaire: ${item.price} GDS\n`;
        message += `   • Sous-total: ${item.price * item.quantity} GDS\n`;
    });
    
    message += `\n━━━━━━━━━━━━━━━━━━\n`;
    message += `*TOTAL: ${getCartTotal()} GDS*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;
    message += `Merci de confirmer la disponibilité et le délai de livraison.`;
    
    window.open(`https://wa.me/50942936443?text=${encodeURIComponent(message)}`, '_blank');
}
