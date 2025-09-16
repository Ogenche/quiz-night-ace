// ===================================================================================
// WRAP EVERYTHING IN A TRY...CATCH BLOCK TO PREVENT BLANK SCREEN OF DEATH
// ===================================================================================
try {
    // ===================================================================================
    // QUESTION DATABASE
    // ===================================================================================
    const questions = [
        // --- Phenomenal Flags ---
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/ke.png" alt="Kenyan Flag" onerror="this.style.display=\'none\'">', answer: ["Kenya"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of Canada features what type of leaf?', answer: ["Maple", "Maple Leaf"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/za.png" alt="South African Flag" onerror="this.style.display=\'none\'">', answer: ["South Africa"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of the USA has how many stripes?', answer: ["13", "Thirteen"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What are the three colors on the German flag?', answer: ["Black, Red, and Gold", "Black Red Gold", "Gold Red Black"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/jp.png" alt="Japanese Flag" onerror="this.style.display=\'none\'">', answer: ["Japan"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of Italy has green, white, and what other color?', answer: ["Red"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/ng.png" alt="Nigerian Flag" onerror="this.style.display=\'none\'">', answer: ["Nigeria"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/mx.png" alt="Mexican Flag" onerror="this.style.display=\'none\'">', answer: ["Mexico"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: "The flag of Ireland has green, white, and what other color?", answer: ["Orange"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: "The flag of Russia features three horizontal stripes. What are the colors from top to bottom?", answer: ["White, Blue, Red"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/tz.png" alt="Tanzanian Flag" onerror="this.style.display=\'none\'">', answer: ["Tanzania"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/au.png" alt="Australian Flag" onerror="this.style.display=\'none\'">', answer: ["Australia"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of France is known as the Tricolore. What are its three colors?', answer: ["Blue, white, and red"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What animal is on the flag of Sri Lanka?', answer: ["Lion"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of which country is red with a white cross?', answer: ["Switzerland"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/gh.png" alt="Ghanaian Flag" onerror="this.style.display=\'none\'">', answer: ["Ghana"] },
        { category: "Phenomenal Flags", difficulty: "easy", question: 'What celestial objects are featured on the flag of Turkey?', answer: ["Crescent and Star", "Star and Crescent"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/cn.png" alt="Chinese Flag">', answer: ["China"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the three colors on the flag of Ireland?', answer: ["Green, White, and Orange"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of which country is red with a large yellow star and four smaller yellow stars?', answer: ["China"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/gr.png" alt="Greek Flag">', answer: ["Greece"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What two colors make up the flag of Poland?', answer: ["White and Red", "Red and White"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'A large green maple leaf is the central feature of which country\'s flag?', answer: ["Canada"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/se.png" alt="Swedish Flag">', answer: ["Sweden"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the colors of the horizontal stripes on the flag of the Netherlands?', answer: ["Red, White, and Blue"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of Jamaica is composed of what three colors?', answer: ["Green, Black, and Gold", "Green, Black, and Yellow"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/kr.png" alt="South Korean Flag">', answer: ["South Korea"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the two colors on the flag of Ukraine?', answer: ["Blue and Yellow", "Yellow and Blue"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of which country is known as the "Stars and Stripes"?', answer: ["USA", "United States", "United States of America"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/pt.png" alt="Portuguese Flag">', answer: ["Portugal"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the three vertical colors on the flag of Belgium?', answer: ["Black, Yellow, and Red"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of which country features a red background with a yellow star?', answer: ["Vietnam"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/cl.png" alt="Chilean Flag">', answer: ["Chile"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the colors of the flag of Austria?', answer: ["Red and White", "White and Red"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of which country features a large red circle on a green background?', answer: ["Bangladesh"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/eg.png" alt="Egyptian Flag">', answer: ["Egypt"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the three colors on the flag of Hungary?', answer: ["Red, White, and Green"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of which country is identical to the flag of Indonesia, but in reverse?', answer: ["Poland"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/ph.png" alt="Philippine Flag">', answer: ["Philippines"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the three colors on the flag of Romania?', answer: ["Blue, Yellow, and Red"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of what nation features a red Nordic cross on a white background?', answer: ["Denmark"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/th.png" alt="Thai Flag">', answer: ["Thailand"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the three colors on the flag of Colombia?', answer: ["Yellow, Blue, and Red"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'Which country\'s flag is half red and half white?', answer: ["Indonesia", "Monaco"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/tr.png" alt="Turkish Flag">', answer: ["Turkey"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'The flag of Finland features a blue Nordic cross on what color background?', answer: ["White"] },
		{ category: "Phenomenal Flags", difficulty: "easy", question: 'What are the two colors on the flag of Japan?', answer: ["Red and White", "White and red"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "Which country's flag is known as the 'Union Jack'?", answer: ["United Kingdom", "UK", "Great Britain", "Britain"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The flag of Japan features a large red disc on a white background. What does this disc represent?", answer: ["The Sun", "Sun"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/br.png" alt="Brazilian Flag" onerror="this.style.display=\'none\'">', answer: ["Brazil"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The national flag of which country features a depiction of a dragon?", answer: ["Bhutan"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "What two colors make up the flag of Greece?", answer: ["Blue and White", "White and Blue"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The flag of Switzerland features a white cross on what color background?", answer: ["Red"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The flag of which country features an eagle and a snake?", answer: ["Mexico"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "What is the only country to feature a building on its national flag?", answer: ["Cambodia"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The 'Southern Cross' constellation appears on the flags of Australia and which other major country?", answer: ["New Zealand", "NZ"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/ch.png" alt="Swiss Flag" onerror="this.style.display=\'none\'">', answer: ["Switzerland"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The 'Star of David' is a prominent feature on which country's flag?", answer: ["Israel"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The flag of which Scandinavian country is a red field with a white Nordic cross that extends to the edges of the flag?", answer: ["Denmark"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The flag of Barbados features a broken version of what object?", answer: ["Trident"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: 'Which country has a flag with two horizontal bands of red (top) and white and a blue isosceles triangle based on the hoist side?', answer: ["Czech Republic", "Czechia"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: "The 'Sun of May' is a national emblem found on the flags of Argentina and which other South American country?", answer: ["Uruguay"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: 'What do the 50 stars on the U.S. flag represent?', answer: ["The 50 states"] },
        { category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of what African nation is known as the "Rainbow Flag"?', answer: ["South Africa"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What does the white color on the flag of France represent?', answer: ["The Monarchy", "The King"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country features a golden eagle perched on a cactus, devouring a snake?', answer: ["Mexico"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag, featuring the "Sun of May"? <br><br> <img src="https://flagcdn.com/w320/ar.png" alt="Argentinian Flag">', answer: ["Argentina"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which nation is the only one to feature a modern assault rifle?', answer: ["Mozambique"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What do the stars of the Southern Cross on the Australian flag represent?', answer: ["The constellation visible from the Southern Hemisphere"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/va.png" alt="Vatican City Flag">', answer: ["Vatican City"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country is one of only two square-shaped national flags?', answer: ["Switzerland", "Vatican City"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The green on the flag of Ireland is a symbol of what?', answer: ["The Catholic community", "Gaelic tradition"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/il.png" alt="Israeli Flag">', answer: ["Israel"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country features the Angkor Wat temple complex?', answer: ["Cambodia"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What do the 13 stripes on the flag of the USA represent?', answer: ["The original thirteen colonies"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/lk.png" alt="Sri Lankan Flag">', answer: ["Sri Lanka"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country features a yellow, blue, and red tricolor with its coat of arms?', answer: ["Ecuador", "Colombia", "Venezuela"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What does the red on the flag of Vietnam symbolize?', answer: ["Revolution and bloodshed"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/lb.png" alt="Lebanese Flag">', answer: ["Lebanon"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country is known as the "Tiranga," meaning tricolor?', answer: ["India"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What is the name of the white, five-pointed star on the flag of Texas?', answer: ["The Lone Star"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/sa.png" alt="Saudi Arabian Flag">', answer: ["Saudi Arabia"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The design of many Scandinavian flags, featuring an off-center cross, is known by what name?', answer: ["Nordic Cross", "Scandinavian Cross"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What does the blue on the flag of South Korea represent?', answer: ["The negative cosmic forces", "Yin"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/bt.png" alt="Bhutanese Flag">', answer: ["Bhutan"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country features a black double-headed eagle?', answer: ["Albania"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The "Union Jack" is a composite of the flags of England, Scotland, and what other country?', answer: ["Ireland", "Northern Ireland"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/cy.png" alt="Cypriot Flag">', answer: ["Cyprus"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country features a green cedar tree?', answer: ["Lebanon"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What do the three colors of the German flag represent?', answer: ["Democracy", "Unity and freedom"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What country has this flag? <br><br> <img src="https://flagcdn.com/w320/is.png" alt="Icelandic Flag">', answer: ["Iceland"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'The flag of which country is often called the "Bratach na hÉireann" in its native language?', answer: ["Ireland"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What does the green stripe on the flag of Italy represent?', answer: ["The country\'s plains and hills"] },
		{ category: "Phenomenal Flags", difficulty: "medium", question: 'What is the only national flag to feature a shipwreck?', answer: ["Bermuda"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "Which country's flag is the only one that is not a quadrilateral (four-sided)?", answer: ["Nepal"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, known as the "Dannebrog" and the oldest continuously used national flag? <br><br> <img src="https://flagcdn.com/w320/dk.png" alt="Danish Flag" onerror="this.style.display=\'none\'">', answer: ["Denmark"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "The flag of Mozambique features a book, a hoe, and what type of modern weapon?", answer: ["AK-47", "AK47", "Kalashnikov"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "Until 2011, the flag of which country consisted of just a single, solid color (green)?", answer: ["Libya"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "What is the name for the study of flags?", answer: ["Vexillology"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "The flag of Cyprus features a map of the island above two branches of what tree?", answer: ["Olive", "Olive Tree"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "What color is the star on the flag of Vietnam?", answer: ["Yellow", "Gold"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "The flag of which Central American country contains a depiction of its coat of arms, which includes volcanoes, a rainbow, and a Phrygian cap?", answer: ["El Salvador"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "What is the common name for a flag that is flown on a ship to show its nationality?", answer: ["Ensign"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "Which two independent countries have flags that are identical to each other?", answer: ["Chad and Romania", "Romania and Chad"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "What term describes a flag that is hung from the top of a pole, such as in a medieval castle?", answer: ["Banner"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: "The flag of which country features a double-headed eagle?", answer: ["Albania"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: 'The civil ensign of the United Kingdom, used by merchant ships, is known by what name?', answer: ["Red Ensign", "The Red Duster"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: 'Paraguay is the only country in the world to have a national flag with different emblems on its obverse and reverse sides. True or False?', answer: ["True"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: 'What is the most common colour on national flags?', answer: ["Red"] },
        { category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which country contains an image of the country itself?', answer: ["Cyprus"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the term for the side of the flag closest to the flagpole?', answer: ["Hoist"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which African country has two different sides?', answer: ["Paraguay"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, the only non-rectangular national flag in the world? <br><br> <img src="https://flagcdn.com/w320/np.png" alt="Nepalese Flag">', answer: ["Nepal"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which country features a Sisserou parrot, a species endemic to that island?', answer: ["Dominica"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the main background of a flag called?', answer: ["The field"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, featuring a pattern from a traditional rug? <br><br> <img src="https://flagcdn.com/w320/tm.png" alt="Turkmenistan Flag">', answer: ["Turkmenistan"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flags of which two sovereign nations are identical vertical tricolors of blue, yellow, and red?', answer: ["Chad and Romania", "Romania and Chad"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The 27 stars on the flag of Brazil represent the Brazilian states and what else?', answer: ["The Federal District"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the term for a flag featuring a diagonal cross?', answer: ["Saltire"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, representing the sun over the steppe? <br><br> <img src="https://flagcdn.com/w320/kz.png" alt="Kazakhstani Flag">', answer: ["Kazakhstan"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which U.S. state features the Union Jack in its canton?', answer: ["Hawaii"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the name of the dragon on the flag of Bhutan?', answer: ["Druk", "The Thunder Dragon", "Thunder Dragon"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the term for the upper corner of the flag on the hoist side, such as the stars on the US flag?', answer: ["Canton"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, which features a bird of paradise? <br><br> <img src="https://flagcdn.com/w320/pg.png" alt="Papua New Guinean Flag">', answer: ["Papua New Guinea"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which country was changed in 2008 to remove three stars that represented the Ba\'ath Party?', answer: ["Iraq"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country flag features a human being?', answer: ["Belize", "Malta"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the term for the national flag flown by a country\'s navy?', answer: ["Naval Ensign"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, which features a radiant sun with a human face? <br><br> <img src="https://flagcdn.com/w320/uy.png" alt="Uruguayan Flag">', answer: ["Uruguay"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which country was designed by its first president, Jomo Kenyatta?', answer: ["Kenya"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the name of the flag of the United Kingdom\'s Royal Navy?', answer: ["The White Ensign"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What do the two triangles of the Nepalese flag represent?', answer: ["The Himalayan Mountains and the two major religions, Hinduism and Buddhism"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, featuring a golden-crowned crane? <br><br> <img src="https://flagcdn.com/w320/ug.png" alt="Ugandan Flag">', answer: ["Uganda"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which micronation, a WWI sea fort, is horizontally divided red and white with a black top third?', answer: ["Sealand"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What do the three trigrams on the flag of South Korea represent?', answer: ["Heaven, Earth, Fire, and Water"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of what Canadian province is a version of the Red Ensign?', answer: ["Ontario", "Manitoba"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What country has this flag, featuring a shield and spears? <br><br> <img src="https://flagcdn.com/w320/sz.png" alt="Eswatini Flag">', answer: ["Eswatini", "Swaziland"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The Ashoka Chakra wheel on the Indian flag has how many spokes?', answer: ["24", "Twenty-four"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the only country to have a Bible on its national flag?', answer: ["Dominican Republic"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'The flag of which international organization is light blue and features a world map?', answer: ["The United Nations", "UN", "United Nations"] },
		{ category: "Phenomenal Flags", difficulty: "hard", question: 'What is the term for the decorative ornament at the top of a flagpole?', answer: ["Finial"] },

        // --- Skylines & Scenery ---
        { category: "Skylines & Scenery", difficulty: "easy", question: "The Great Wall is a famous landmark in which country?", answer: ["China"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "The Statue of Liberty is a famous monument in which US city?", answer: ["New York", "New York City", "NYC"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "The Eiffel Tower is the most famous landmark in which European city?", answer: ["Paris"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "In which city would you find the Colosseum?", answer: ["Rome"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "Which river is the longest in the world?", answer: ["Nile", "The Nile"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "In which country would you find the pyramids of Giza?", answer: ["Egypt"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "Which city is famous for its canals, gondolas, and masks?", answer: ["Venice"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "In which country is the Amazon Rainforest primarily located?", answer: ["Brazil"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "What is the largest desert in the world (including polar deserts)?", answer: ["Antarctic Polar Desert", "Antarctica"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "The Sydney Opera House is a famous building in which country?", answer: ["Australia"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "Mount Fuji is the highest mountain in which country?", answer: ["Japan"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "What famous bridge is located in San Francisco, California?", answer: ["Golden Gate Bridge"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "In which European capital city would you find the Brandenburg Gate?", answer: ["Berlin"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "What is the largest coral reef system in the world?", answer: ["Great Barrier Reef"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "In which city does the fictional character Rocky Balboa famously run up the steps of an art museum?", answer: ["Philadelphia"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "What is the name of the river that flows through London?", answer: ["River Thames", "Thames"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "Which desert covers most of North Africa?", answer: ["Sahara Desert", "Sahara"] },
        { category: "Skylines & Scenery", difficulty: "easy", question: "The famous Christ the Redeemer statue overlooks which city?", answer: ["Rio de Janeiro"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "In which Italian city would you find the Leaning Tower?", answer: ["Pisa"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "What is the world's highest mountain peak above sea level?", answer: ["Mount Everest"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Niagara Falls is located on the border of the USA and which other country?", answer: ["Canada"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Acropolis, including the Parthenon, is a famous ancient citadel in which city?", answer: ["Athens"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Kremlin complex is a historic fortified complex in the heart of which city?", answer: ["Moscow"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Taj Mahal is a famous marble mausoleum in which country?", answer: ["India"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The fairy-tale-like Neuschwanstein Castle is located in which country?", answer: ["Germany"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Iguazu Falls is a massive waterfall system on the border of Brazil and which other country?", answer: ["Argentina"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Table Mountain provides a stunning backdrop to which South African city?", answer: ["Cape Town"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Louvre Museum, home to the Mona Lisa, is in which city?", answer: ["Paris"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Which famous clock tower is a landmark in London?", answer: ["Big Ben"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "In which US state is the Grand Canyon located?", answer: ["Arizona"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Which ancient wonder of the world is located in Egypt?", answer: ["The Great Pyramid of Giza", "Pyramids of Giza"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Hollywood Sign is located in which US city?", answer: ["Los Angeles"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "What is the name of the famous rock fortress and palace in Sri Lanka?", answer: ["Sigiriya"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Which city is known for its Red Square?", answer: ["Moscow"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "In which country would you find the ancient city of Pompeii?", answer: ["Italy"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Space Needle is an iconic observation tower in which US city?", answer: ["Seattle"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "What is the largest hot desert in the world?", answer: ["Sahara Desert", "Sahara"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Which country is home to the famous fjords like Geirangerfjord?", answer: ["Norway"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The famous 'Bean' sculpture (Cloud Gate) is a landmark in which American city?", answer: ["Chicago"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "What is the longest river in Asia?", answer: ["Yangtze River", "Yangtze"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The ancient ruins of Machu Picchu belong to which civilization?", answer: ["Inca", "Incan"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "In which country can you visit the Blue Mosque?", answer: ["Turkey"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "What is the name of the famous canal that connects the Atlantic and Pacific Oceans?", answer: ["Panama Canal"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Which city is home to the famous Trevi Fountain?", answer: ["Rome"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Alps mountain range spans across how many European countries?", answer: ["8", "Eight"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "What is the capital city of Japan, known for its Imperial Palace and bustling streets?", answer: ["Tokyo"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "The Rock of Gibraltar is an overseas territory of which country?", answer: ["United Kingdom", "UK", "Britain"] },
    { category: "Skylines & Scenery", difficulty: "easy", question: "Which famous waterfalls are also known as Mosi-oa-Tunya, 'The Smoke That Thunders'?", answer: ["Victoria Falls"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The ancient city of Petra, known for its rock-cut architecture, is in which Middle Eastern country?", answer: ["Jordan"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "Victoria Falls lies on the border between Zambia and which other country?", answer: ["Zimbabwe"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "Machu Picchu is an ancient Incan citadel located in which country?", answer: ["Peru"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The world's tallest building, the Burj Khalifa, dominates the skyline of which city?", answer: ["Dubai"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The Grand Canyon is located in which US state?", answer: ["Arizona"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "What is the name of the famous clock tower attached to the Houses of Parliament in London?", answer: ["Big Ben", "Elizabeth Tower"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "What is the name of the large rock formation in central Australia, sacred to Indigenous Australians?", answer: ["Uluru", "Ayers Rock"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "Which US national park is famous for its geysers, including 'Old Faithful'?", answer: ["Yellowstone"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Forbidden City' palace complex is located in the center of which Asian capital?", answer: ["Beijing"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The Angel Falls, the world's tallest uninterrupted waterfall, is in which country?", answer: ["Venezuela"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The Serengeti National Park, famous for its massive annual migration of wildebeest and zebra, is located in which country?", answer: ["Tanzania"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The Petronas Towers are iconic twin skyscrapers located in which city?", answer: ["Kuala Lumpur"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "In which city can you find the famous Spanish Steps?", answer: ["Rome"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The Dead Sea is a salt lake bordered by Jordan and which other country?", answer: ["Israel"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The ancient stone circle of Stonehenge is located in which country?", answer: ["England", "United Kingdom", "UK"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: 'Which city is nicknamed "The Windy City"?', answer: ["Chicago"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "The Danakil Depression, one of the hottest and lowest places on Earth, is in which African country?", answer: ["Ethiopia"] },
        { category: "Skylines & Scenery", difficulty: "medium", question: "What is the highest mountain in North America?", answer: ["Denali", "Mount McKinley"] },
		{ category: "Skylines & Scenery", difficulty: "medium", question: "The ancient Mayan city of Chichen Itza is located on which peninsula?", answer: ["Yucatán Peninsula"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The geothermal spa known as the Blue Lagoon is a famous attraction in which country?", answer: ["Iceland"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "Mount Rushmore, featuring the faces of four US presidents, is in which state?", answer: ["South Dakota"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Sagrada Família, a large unfinished church designed by Gaudí, is in which Spanish city?", answer: ["Barcelona"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Cliffs of Moher are famous sea cliffs in which country?", answer: ["Ireland"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Twelve Apostles are a collection of limestone stacks off the coast of which country?", answer: ["Australia"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The thermal pools of Pamukkale, meaning 'cotton castle', are in which country?", answer: ["Turkey"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The CN Tower, a signature icon of its city's skyline, is located in which Canadian city?", answer: ["Toronto"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Great Sphinx, a limestone statue of a reclining sphinx, is located near which city?", answer: ["Giza", "Cairo"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The thousands of red torii gates at Fushimi Inari Shrine are a famous sight in which Japanese city?", answer: ["Kyoto"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Chocolate Hills' are a geological formation in which country?", answer: ["Philippines"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Pont du Gard is an ancient Roman aqueduct bridge in which country?", answer: ["France"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Atacama Desert, one of the driest places on Earth, is primarily located in which country?", answer: ["Chile"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "What is the name of the famous palace and fortress of the Moorish monarchs in Granada, Spain?", answer: ["Alhambra"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Giant's Causeway, an area of about 40,000 interlocking basalt columns, is in which part of the UK?", answer: ["Northern Ireland"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Terracotta Army' is a collection of sculptures depicting the armies of the first Emperor of which country?", answer: ["China"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Danakil Depression, one of the hottest places on Earth, is located in which African country?", answer: ["Ethiopia"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Bungle Bungle Range is a major landmark within which Australian national park?", answer: ["Purnululu National Park"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Gate of India' is a famous war memorial archway located in which city?", answer: ["New Delhi"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "In which city can you walk across the Charles Bridge?", answer: ["Prague"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The Waitomo Caves in New Zealand are famous for being naturally illuminated by what creature?", answer: ["Glowworms"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The ancient Nabatean city of Petra is also known by what colorful nickname?", answer: ["The Rose City"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Ring of Kerry' is a scenic tourist trail in which country?", answer: ["Ireland"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "What mountain range separates the continents of Europe and Asia?", answer: ["Ural Mountains", "The Urals"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Burj Al Arab' hotel, known for its sail-like shape, is in which city?", answer: ["Dubai"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Plain of Jars' is a megalithic archaeological landscape in which Southeast Asian country?", answer: ["Laos"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Avenue of the Baobabs' is a prominent group of trees lining a dirt road in which country?", answer: ["Madagascar"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "Which US national park is known for its vast collection of natural arches, including the 'Delicate Arch'?", answer: ["Arches National Park"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Lotus Temple', a Baháʼí House of Worship, is notable for its flowerlike shape and located in which city?", answer: ["New Delhi"] },
    { category: "Skylines & Scenery", difficulty: "medium", question: "The 'Skeleton Coast' is a treacherous shoreline located in which African country?", answer: ["Namibia"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Turning Torso' skyscraper is a famous landmark in which Swedish city?", answer: ["Malmo", "Malmö"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "Salar de Uyuni, the world's largest salt flat, is located in which country?", answer: ["Bolivia"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "Mount Kilimanjaro, Africa's highest peak, is located in which country?", answer: ["Tanzania"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The famous 'Blue Domed Churches' are iconic scenery in which Greek island?", answer: ["Santorini"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The ancient temple complex of Angkor Wat is the most famous landmark in which Southeast Asian country?", answer: ["Cambodia"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "Ha Long Bay, known for its thousands of limestone karsts and isles, is a UNESCO World Heritage site in which country?", answer: ["Vietnam"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The Matterhorn is a famous mountain in the Alps on the border between Switzerland and which other country?", answer: ["Italy"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "In which city would you find the 'Gherkin', a commercial skyscraper famous for its contemporary architectural design?", answer: ["London"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "What is the name of the strait that separates the Iberian Peninsula from North Africa?", answer: ["Strait of Gibraltar"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The Plitvice Lakes National Park, known for its 16 terraced lakes joined by waterfalls, is in which European country?", answer: ["Croatia"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "What is the name of the world's highest active volcano?", answer: ["Ojos del Salado"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Valley of the Kings', a famous archaeological site, lies on the west bank of which river?", answer: ["Nile", "The Nile"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Pulpit Rock' or Preikestolen is a famous steep cliff and tourist site in which country?", answer: ["Norway"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: 'Lombard Street in San Francisco is famous for having what distinct feature?', answer: ["Eight sharp turns", "Hairpin turns", "Being crooked"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "What is the deepest point in the world's oceans called?", answer: ["Challenger Deep", "Mariana Trench"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "The ancient city of Timbuktu is located in which modern-day African country?", answer: ["Mali"] },
        { category: "Skylines & Scenery", difficulty: "hard", question: "In which city is the 'Umeda Sky Building' with its 'Floating Garden Observatory' located?", answer: ["Osaka"] },
		{ category: "Skylines & Scenery", difficulty: "hard", question: "The Moai, monolithic human figures, are the famous statues of which remote island?", answer: ["Easter Island", "Rapa Nui"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Zhangjiajie National Forest Park, with its pillar-like formations, is said to have inspired the movie 'Avatar'. In which country is it located?", answer: ["China"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Perito Moreno Glacier is a famous, advancing glacier located in which country?", answer: ["Argentina"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Hagia Sophia, famous for its massive dome, is a major cultural and historical site in which city?", answer: ["Istanbul"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The ancient city of Bagan is famous for its thousands of temples and pagodas. In which country is it?", answer: ["Myanmar"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Meteora is a rock formation hosting one of the largest complexes of Eastern Orthodox monasteries, built on natural pillars. In which country is it?", answer: ["Greece"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The unique 'Dragon's Blood Trees' are native to which island archipelago belonging to Yemen?", answer: ["Socotra"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Stari Most (Old Bridge), a 16th-century Ottoman bridge, is the most famous landmark of which city in Bosnia and Herzegovina?", answer: ["Mostar"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Wave is a stunning sandstone rock formation on the border of Arizona and which other US state?", answer: ["Utah"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The Shard is a 95-story supertall skyscraper that has redefined the skyline of which city?", answer: ["London"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Gates of Hell' (Darvaza gas crater) has been burning since 1971 in which country?", answer: ["Turkmenistan"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Great Blue Hole' is a giant marine sinkhole off the coast of which country?", answer: ["Belize"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Fingal's Cave', known for its natural acoustics, is a sea cave on which uninhabited Scottish island?", answer: ["Staffa"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Catedral de Sal' is an underground Roman Catholic church built within the tunnels of a salt mine in which country?", answer: ["Colombia"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Leshan Giant Buddha', a 71-metre tall stone statue, is carved out of a cliff face in which country?", answer: ["China"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Tsingy de Bemaraha' is a national park known for its 'forest' of limestone needles in which country?", answer: ["Madagascar"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Potala Palace' was the winter palace of the Dalai Lamas until 1959 and is located in which city?", answer: ["Lhasa"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Millau Viaduct' is the tallest bridge in the world, located in which country?", answer: ["France"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "What is the name of the active volcano in Antarctica, the southernmost active volcano on Earth?", answer: ["Mount Erebus"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Cave of the Crystals' is a cave of giant selenite crystals in Naica, which country?", answer: ["Mexico"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Old Man of Storr' is a large pinnacle of rock that is a famous landmark on which Scottish island?", answer: ["Isle of Skye"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Lençóis Maranhenses' National Park in Brazil is famous for its vast desert landscape filled with what seasonal feature?", answer: ["Rainwater lagoons", "Freshwater lagoons"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Derinkuyu Underground City' could house up to 20,000 people and is located in which region of Turkey?", answer: ["Cappadocia"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Kailasa Temple' is the largest single monolithic rock-cut structure in the world, located in which country?", answer: ["India"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Vatnajökull' ice cap, the largest in Europe, is located in which country?", answer: ["Iceland"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Spotted Lake' (Kliluk) is a saline endorheic alkali lake located in which country?", answer: ["Canada"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Chand Baori' is a famous stepwell with 3,500 narrow steps arranged in perfect symmetry in which country?", answer: ["India"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Bosco Verticale' (Vertical Forest) is a pair of residential towers in which Italian city?", answer: ["Milan"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Svalbard Global Seed Vault' is a secure backup facility for the world's crop diversity, located in which country?", answer: ["Norway"] },
    { category: "Skylines & Scenery", difficulty: "hard", question: "The 'Paro Taktsang' monastery, also known as the Tiger's Nest, clings to a cliffside in which country?", answer: ["Bhutan"] },

        // --- A Fine Night for Science ---
        { category: "A Fine Night for Science", difficulty: "easy", question: "What is H2O more commonly known as?", answer: ["Water"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "Which planet is known as the Red Planet?", answer: ["Mars"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What force pulls objects towards the center of the Earth?", answer: ["Gravity"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What is the name of the star closest to Earth?", answer: ["The Sun", "Sun"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What gas do humans need to breathe to live?", answer: ["Oxygen"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What is the solid state of water called?", answer: ["Ice"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "Which is the largest planet in our solar system?", answer: ["Jupiter"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What is the common name for Sodium Chloride?", answer: ["Salt", "Table Salt"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What part of a plant absorbs water and nutrients from the soil?", answer: ["Roots"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "Sound travels fastest through solids, liquids, or gases?", answer: ["Solids"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What instrument is used to measure temperature?", answer: ["Thermometer"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "How many legs does a spider have?", answer: ["8", "Eight"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What is the name of the galaxy that contains our Solar System?", answer: ["The Milky Way", "Milky Way"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What do you call a scientist who studies rocks?", answer: ["Geologist"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What planet is famous for its rings?", answer: ["Saturn"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "What is the chemical symbol for water?", answer: ["H2O"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "Which part of the human eye controls the amount of light that enters?", answer: ["Pupil"] },
        { category: "A Fine Night for Science", difficulty: "easy", question: "True or False: The Earth is flat.", answer: ["False"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the gaseous state of water called?", answer: ["Steam", "Water vapor"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "Which organ pumps blood throughout the human body?", answer: ["Heart", "The Heart"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "How many colors are in a rainbow?", answer: ["7", "Seven"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What gas do plants absorb from the atmosphere?", answer: ["Carbon Dioxide", "CO2"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the largest mammal in the world?", answer: ["Blue Whale"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the boiling point of water in Celsius?", answer: ["100", "100 degrees"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the Earth's main natural satellite?", answer: ["The Moon", "Moon"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What do you call a scientist who studies animals?", answer: ["Zoologist"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the name for a baby dog?", answer: ["Puppy", "Pup"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "Do amphibians live on land, in water, or both?", answer: ["Both"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "Which sense do bats use to navigate in the dark?", answer: ["Echolocation"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the chemical symbol for the element Oxygen?", answer: ["O"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What material, derived from trees, is used to make most paper?", answer: ["Wood"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What process describes a caterpillar changing into a butterfly?", answer: ["Metamorphosis"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the common name for Canis lupus familiaris?", answer: ["Dog", "Domestic dog"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the opposite of freezing?", answer: ["Melting", "Thawing"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "Which is the smallest continent by land area?", answer: ["Australia"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What type of weather is associated with lightning?", answer: ["Thunderstorm", "Storm"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "Which planet is closest to the Sun?", answer: ["Mercury"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "True or False: All mammals live on land.", answer: ["False"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What do carnivores eat?", answer: ["Meat"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the chemical symbol for Sodium?", answer: ["Na"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the name for a group of lions?", answer: ["Pride"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What force opposes motion between two surfaces that are in contact?", answer: ["Friction"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "How many chambers are in the human heart?", answer: ["4", "Four"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the only mammal capable of true, sustained flight?", answer: ["Bat"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What do you call a scientist who studies chemistry?", answer: ["Chemist"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "Which planet is the second from the Sun?", answer: ["Venus"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the name for the hard, outer layer of a tooth?", answer: ["Enamel"] },
{ category: "A Fine Night for Science", difficulty: "easy", question: "What is the common name for the Earth's solid, outermost layer?", answer: ["Crust", "The crust"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the name for the center of an atom?", answer: ["Nucleus"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the hardest natural substance on Earth?", answer: ["Diamond"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the chemical symbol for Gold?", answer: ["Au"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the name of the process plants use to convert sunlight into food?", answer: ["Photosynthesis"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "How many planets are in our solar system?", answer: ["8", "Eight"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the unit of measurement for electrical resistance?", answer: ["Ohm"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What theory did Albert Einstein develop?", answer: ["Theory of Relativity", "Relativity"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the study of earthquakes called?", answer: ["Seismology"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the pH level of pure water?", answer: ["7", "Seven"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What are the three primary colors of light?", answer: ["Red, Green, and Blue", "RGB"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What element has the chemical symbol Fe?", answer: ["Iron"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the powerhouse of the cell?", answer: ["Mitochondria", "Mitochondrion"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What type of energy is stored in a battery?", answer: ["Chemical energy"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What scale is used to measure the intensity of an earthquake?", answer: ["Richter scale"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the largest bone in the human body?", answer: ["Femur"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "The asteroid belt is located between which two planets?", answer: ["Mars and Jupiter", "Jupiter and Mars"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the most abundant gas in the Earth's atmosphere?", answer: ["Nitrogen"] },
        { category: "A Fine Night for Science", difficulty: "medium", question: "What is the process by which a liquid turns into a gas?", answer: ["Evaporation", "Vaporization"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the chemical symbol for silver?", answer: ["Ag"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the first element on the periodic table?", answer: ["Hydrogen"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the scientific term for the classification of living things?", answer: ["Taxonomy"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "Which blood type is known as the universal donor?", answer: ["O negative", "O-"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the scientific study of weather called?", answer: ["Meteorology"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What does a Geiger counter measure?", answer: ["Radiation", "Ionizing radiation"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What part of the brain is primarily responsible for balance and coordination?", answer: ["Cerebellum"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "Newton's First Law of Motion is also known as the law of what?", answer: ["Inertia"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the name of the process where a substance changes directly from a solid to a gas?", answer: ["Sublimation"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the name of the largest galaxy in our Local Group?", answer: ["Andromeda", "Andromeda Galaxy"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the unit of electrical frequency, named after a German physicist?", answer: ["Hertz", "Hz"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the common name for Ascorbic Acid?", answer: ["Vitamin C"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What type of rock is formed from the cooling and solidification of magma or lava?", answer: ["Igneous"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "In biology, what is an organism that creates its own food called?", answer: ["Autotroph"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What layer of the Earth's atmosphere is closest to the surface?", answer: ["Troposphere"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the main chemical component of natural gas?", answer: ["Methane", "CH4"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What instrument is used to measure atmospheric pressure?", answer: ["Barometer"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the name of the giant, long-lasting storm on Jupiter?", answer: ["Great Red Spot"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the scientific study of fungi called?", answer: ["Mycology"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What element, with the symbol Si, is the basis of modern electronics?", answer: ["Silicon"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What type of simple machine is a doorknob an example of?", answer: ["Wheel and axle"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the common name for the human sternum?", answer: ["Breastbone"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the name for the colored part of the human eye that surrounds the pupil?", answer: ["Iris"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "Which two metals is brass an alloy of?", answer: ["Copper and Zinc"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the name for the tiny air sacs in the lungs where gas exchange occurs?", answer: ["Alveoli"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What type of lens is used to correct nearsightedness, or myopia?", answer: ["Concave lens", "Diverging lens"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the speed of sound in dry air at sea level, in meters per second?", answer: ["343"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "Who is credited with discovering penicillin?", answer: ["Alexander Fleming"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What is the term for an animal that is active primarily during twilight?", answer: ["Crepuscular"] },
{ category: "A Fine Night for Science", difficulty: "medium", question: "What branch of astronomy deals with the physical properties of celestial bodies?", answer: ["Astrophysics"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the name of the biological process where a cell engulfs large particles, literally meaning 'cell-eating'?", answer: ["Phagocytosis"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "In physics, what is the name for the theoretical 'point of no return' surrounding a black hole?", answer: ["Event Horizon"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the only planet in our solar system that spins clockwise?", answer: ["Venus"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is considered the largest organ in the human body?", answer: ["Skin"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What does DNA stand for?", answer: ["Deoxyribonucleic acid"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the speed of light in a vacuum (in km/s)?", answer: ["300000", "299792"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the escape velocity of Earth, in km/s?", answer: ["11.2", "11.2 km/s"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "In genetics, what do the letters in RNA stand for?", answer: ["Ribonucleic acid"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "Which law of thermodynamics states that entropy in an isolated system always increases?", answer: ["The Second Law", "Second Law of Thermodynamics"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What type of star is the Sun?", answer: ["Yellow Dwarf", "G-type main-sequence star", "G2V"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the Heisenberg Uncertainty Principle related to?", answer: ["Quantum mechanics", "Momentum and Position"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the scientific name for the Northern Lights?", answer: ["Aurora Borealis"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What particle is believed to mediate the gravitational force?", answer: ["Graviton"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: 'What does the "C" in E=mc² stand for?', answer: ["The speed of light", "Speed of light"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "How many pairs of chromosomes do humans have?", answer: ["23", "Twenty-three", "Twenty Three"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the term for a substance that speeds up a chemical reaction without being consumed?", answer: ["Catalyst"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the name of the smallest bone in the human body?", answer: ["Stapes"] },
        { category: "A Fine Night for Science", difficulty: "hard", question: "What is the most electronegative element on the periodic table?", answer: ["Fluorine"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What name is given to hypothetical particles that travel faster than light?", answer: ["Tachyons"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The Chandrasekhar limit defines the maximum mass of what type of star?", answer: ["White dwarf", "White dwarf star"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the name of the effect where two uncharged plates in a vacuum attract each other?", answer: ["Casimir effect"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the approximate value of Avogadro's number?", answer: ["6.022 x 10^23", "6*10^23", "6x10^23", "6.022*10^23", "6.022 * 10^23"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the scientific study of insects called?", answer: ["Entomology"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The Krebs cycle is also known by what other two names?", answer: ["Citric acid cycle", "Tricarboxylic acid cycle"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "A bolometer is an instrument used to measure what type of energy?", answer: ["Radiant energy", "Electromagnetic radiation"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "Which of the four fundamental forces of nature is the weakest?", answer: ["Gravity"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the specific physical location of a gene on a chromosome called?", answer: ["Locus"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "In a 'trick' question, what is the chemical name for water?", answer: ["Dihydrogen monoxide"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "Quarks and leptons are the two basic types of what class of subatomic particles?", answer: ["Fermions"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The Hubble Constant measures the expansion rate of what?", answer: ["The universe", "Universe"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the name for an infectious agent made only of misfolded protein?", answer: ["Prion"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The Pauli Exclusion Principle applies to what class of subatomic particles?", answer: ["Fermions"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the name of Saturn's largest moon, which has a dense atmosphere?", answer: ["Titan"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What class of subatomic particles, including photons, mediate the fundamental forces?", answer: ["Bosons"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The Meissner effect describes the expulsion of a magnetic field from what type of material?", answer: ["Superconductor", "A superconductor"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the biological term for programmed cell death?", answer: ["Apoptosis"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the name of the fundamental equation of quantum mechanics?", answer: ["Schrödinger equation", "Schrodinger equation"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "Which organelle in a cell is known as the 'post office' for packaging proteins?", answer: ["Golgi apparatus", "Golgi body"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The Roche limit is the distance at which a celestial body will be torn apart by what force?", answer: ["Tidal forces", "Tidal force"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What term describes a solution with a higher solute concentration than another?", answer: ["Hypertonic"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What subatomic particle has a tiny mass, no charge, and interacts via the weak force?", answer: ["Neutrino"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "At what point do a substance's three phases (solid, liquid, gas) coexist in equilibrium?", answer: ["Triple point"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "The 'Haber-Bosch process' is crucial for the industrial production of what chemical?", answer: ["Ammonia"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the Mohs scale used to measure?", answer: ["Mineral hardness", "Hardness"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is a point in space where a small object can maintain a stable position with two larger bodies?", answer: ["Lagrangian point", "Lagrange point"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What phenomenon links two quantum particles, regardless of distance?", answer: ["Quantum entanglement"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is a molecule with the same formula but a different structure than another?", answer: ["Isomer"] },
{ category: "A Fine Night for Science", difficulty: "hard", question: "What is the name of the supercontinent that predated Pangaea?", answer: ["Rodinia", "Pannotia"] },

        // --- General Knowledge ---
        { category: "General Knowledge", difficulty: "easy", question: "How many days are in a leap year?", answer: ["366", "366 days"] },
        { category: "General Knowledge", difficulty: "easy", question: "Which is the largest ocean on Earth?", answer: ["Pacific", "Pacific Ocean"] },
        { category: "General Knowledge", difficulty: "easy", question: "What is the name for a shape with five sides?", answer: ["Pentagon"] },
        { category: "General Knowledge", difficulty: "easy", question: "How many continents are there?", answer: ["7", "Seven"] },
        { category: "General Knowledge", difficulty: "easy", question: "What is the capital of France?", answer: ["Paris"] },
        { category: "General Knowledge", difficulty: "easy", question: "What is the opposite of 'hot'?", answer: ["Cold"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What is the 7th month of the year?', answer: ["July"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What do bees make?', answer: ["Honey"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What is the capital of Kenya?', answer: ["Nairobi"] },
        { category: "General Knowledge", difficulty: "easy", question: 'How many colours are in a rainbow?', answer: ["7", "Seven"] },
        { category: "General Knowledge", difficulty: "easy", question: 'Who is the current President of the United States?', answer: ["Donald Trump"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What do you use to write on a blackboard?', answer: ["Chalk"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What is a baby dog called?', answer: ["Puppy", "Pup"] },
        { category: "General Knowledge", difficulty: "easy", question: 'How many days are there in a week?', answer: ["7", "Seven"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What is the main language spoken in Spain?', answer: ["Spanish"] },
        { category: "General Knowledge", difficulty: "easy", question: 'What do you call the person who brings mail to your house?', answer: ["Mail carrier", "Postman", "Mailman"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the capital of Italy?", answer: ["Rome"] },
{ category: "General Knowledge", difficulty: "easy", question: "How many hours are there in a day?", answer: ["24", "Twenty-four"] },
{ category: "General Knowledge", difficulty: "easy", question: "What do you call a baby cat?", answer: ["Kitten"] },
{ category: "General Knowledge", difficulty: "easy", question: "In which country would you find the Great Pyramids?", answer: ["Egypt"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the fastest land animal?", answer: ["Cheetah"] },
{ category: "General Knowledge", difficulty: "easy", question: "How many players are on a soccer team on the field?", answer: ["11", "Eleven"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the name of the famous leaning tower in Italy?", answer: ["Tower of Pisa", "Pisa Tower"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is a shape with three sides called?", answer: ["Triangle"] },
{ category: "General Knowledge", difficulty: "easy", question: "Who was the first person to walk on the moon?", answer: ["Neil Armstrong"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the main color of a traditional London bus?", answer: ["Red"] },
{ category: "General Knowledge", difficulty: "easy", question: "What currency is used in the United States?", answer: ["Dollar", "US Dollar"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the name of the famous wall in China?", answer: ["The Great Wall", "Great Wall"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the capital of Japan?", answer: ["Tokyo"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which animal is known as 'man's best friend'?", answer: ["Dog"] },
{ category: "General Knowledge", difficulty: "easy", question: "What musical instrument has 88 keys?", answer: ["Piano"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which planet is known for its prominent rings?", answer: ["Saturn"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the main ingredient in bread?", answer: ["Flour"] },
{ category: "General Knowledge", difficulty: "easy", question: "What device do you use to tell the time?", answer: ["Clock", "Watch"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which sport is famously played at Wimbledon?", answer: ["Tennis"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which animal is called the 'king of the jungle'?", answer: ["Lion"] },
{ category: "General Knowledge", difficulty: "easy", question: "How many seasons are there in a year?", answer: ["4", "Four"] },
{ category: "General Knowledge", difficulty: "easy", question: "What color is a ruby gemstone?", answer: ["Red"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the opposite of 'up'?", answer: ["Down"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which ocean is located to the west of the USA?", answer: ["Pacific Ocean", "Pacific"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which country is shaped like a boot?", answer: ["Italy"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the name of a vehicle that travels on a track?", answer: ["Train"] },
{ category: "General Knowledge", difficulty: "easy", question: "How many letters are in the word 'apple'?", answer: ["5", "Five"] },
{ category: "General Knowledge", difficulty: "easy", question: "What is the name of the meal eaten in the morning?", answer: ["Breakfast"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which vegetable is known for helping you see in the dark?", answer: ["Carrot"] },
{ category: "General Knowledge", difficulty: "easy", question: "Which month comes after March?", answer: ["April"] },
        { category: "General Knowledge", difficulty: "medium", question: "What is the capital city of Australia?", answer: ["Canberra"] },
        { category: "General Knowledge", difficulty: "medium", question: "In what year did the Titanic sink?", answer: ["1912"] },
        { category: "General Knowledge", difficulty: "medium", question: "What do the letters 'GPS' stand for?", answer: ["Global Positioning System"] },
        { category: "General Knowledge", difficulty: "medium", question: "What is the main ingredient in guacamole?", answer: ["Avocado"] },
        { category: "General Knowledge", difficulty: "medium", question: "How many letters are in the English alphabet?", answer: ["26", "Twenty-six"] },
        { category: "General Knowledge", difficulty: "medium", question: "What is the boiling point of water in Celsius?", answer: ["100", "100 degrees"] },
        { category: "General Knowledge", difficulty: "medium", question: "What is the largest country in the world by area?", answer: ["Russia"] },
        { category: "General Knowledge", difficulty: "medium", question: "What type of animal is a Komodo dragon?", answer: ["Lizard", "Reptile"] },
        { category: "General Knowledge", difficulty: "medium", question: 'What does "www" stand for in a website browser?', answer: ["World Wide Web"] },
        { category: "General Knowledge", difficulty: "medium", question: 'Who wrote "Romeo and Juliet"?', answer: ["William Shakespeare", "Shakespeare"] },
        { category: "General Knowledge", difficulty: "medium", question: 'Which country is known as the Land of the Rising Sun?', answer: ["Japan"] },
        { category: "General Knowledge", difficulty: "medium", question: 'What is the smallest continent?', answer: ["Australia"] },
        { category: "General Knowledge", difficulty: "medium", question: 'How many sides does a hexagon have?', answer: ["6", "Six"] },
        { category: "General Knowledge", difficulty: "medium", question: 'What is the currency of the United Kingdom?', answer: ["Pound Sterling", "Pound"] },
        { category: "General Knowledge", difficulty: "medium", question: 'What is the most populated country in the world?', answer: ["India"] },
        { category: "General Knowledge", difficulty: "medium", question: 'What is the main ingredient in a traditional Japanese miso soup?', answer: ["Miso paste", "Miso"] },
{ category: "General Knowledge", difficulty: "medium", question: "Which country is famous for tulips and windmills?", answer: ["Netherlands", "Holland"] },
{ category: "General Knowledge", difficulty: "medium", question: "Who wrote the 'Harry Potter' book series?", answer: ["J.K. Rowling", "Rowling"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the world's largest hot desert?", answer: ["Sahara", "Sahara Desert"] },
{ category: "General Knowledge", difficulty: "medium", question: "What are the three primary colors in painting?", answer: ["Red, yellow, and blue"] },
{ category: "General Knowledge", difficulty: "medium", question: "In which city would you find the Colosseum?", answer: ["Rome"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is Canada's official summer sport?", answer: ["Lacrosse"] },
{ category: "General Knowledge", difficulty: "medium", question: "Which artist painted the ceiling of the Sistine Chapel?", answer: ["Michelangelo"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the hardest naturally occurring substance on Earth?", answer: ["Diamond"] },
{ category: "General Knowledge", difficulty: "medium", question: "Which country gifted the Statue of Liberty to the USA?", answer: ["France"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the longest river in the world?", answer: ["The Nile", "Nile"] },
{ category: "General Knowledge", difficulty: "medium", question: "In what year did World War II end?", answer: ["1945"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the name of the galaxy that contains our Solar System?", answer: ["Milky Way"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is a group of wolves called?", answer: ["A pack", "Pack"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the chemical symbol for gold?", answer: ["Au"] },
{ category: "General Knowledge", difficulty: "medium", question: "Who directed the classic 1975 movie 'Jaws'?", answer: ["Steven Spielberg", "Spielberg"] },
{ category: "General Knowledge", difficulty: "medium", question: "How many bones are in the adult human body?", answer: ["206"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the highest mountain in Africa?", answer: ["Mount Kilimanjaro", "Kilimanjaro"] },
{ category: "General Knowledge", difficulty: "medium", question: "In which country did the Olympic Games originate?", answer: ["Greece"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the capital of Canada?", answer: ["Ottawa"] },
{ category: "General Knowledge", difficulty: "medium", question: "What does a cartographer create and study?", answer: ["Maps"] },
{ category: "General Knowledge", difficulty: "medium", question: "What type of food is brie?", answer: ["Cheese"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the world's smallest ocean?", answer: ["Arctic", "Arctic Ocean"] },
{ category: "General Knowledge", difficulty: "medium", question: "Who was the first woman to fly solo across the Atlantic Ocean?", answer: ["Amelia Earhart"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the largest island in the world?", answer: ["Greenland"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the common name for the larynx?", answer: ["Voice box"] },
{ category: "General Knowledge", difficulty: "medium", question: "Which two countries share the world's longest international border?", answer: ["USA and Canada", "Canada and USA"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the main ingredient in hummus?", answer: ["Chickpeas"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the official language of Brazil?", answer: ["Portuguese"] },
{ category: "General Knowledge", difficulty: "medium", question: "What is the capital of Spain?", answer: ["Madrid"] },
{ category: "General Knowledge", difficulty: "medium", question: "Which U.S. state is known as the 'Sunshine State'?", answer: ["Florida"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the currency of Japan?", answer: ["Yen"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the world's most spoken language by number of native speakers?", answer: ["Mandarin", "Mandarin Chinese", "Chinese"] },
        { category: "General Knowledge", difficulty: "hard", question: "Which of the Seven Wonders of the Ancient World is the only one still largely intact?", answer: ["Great Pyramid of Giza", "Pyramid of Giza"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the name of the coffee shop in the sitcom 'Friends'?", answer: ["Central Perk"] },
        { category: "General Knowledge", difficulty: "hard", question: "Who painted the Mona Lisa?", answer: ["Leonardo da Vinci", "da Vinci"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the main component of the Earth's atmosphere?", answer: ["Nitrogen"] },
        { category: "General Knowledge", difficulty: "hard", question: 'In what year did the first man walk on the moon?', answer: ["1969"] },
        { category: "General Knowledge", difficulty: "hard", question: 'What is the capital of Brazil?', answer: ["Brasilia"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the study of coins and medals called?", answer: ["Numismatics"] },
        { category: "General Knowledge", difficulty: "hard", question: 'Which is the only vowel on a standard keyboard that is not on the top row of letters?', answer: ["A"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the name for the fear of spiders?", answer: ["Arachnophobia"] },
        { category: "General Knowledge", difficulty: "hard", question: "What is the national animal of Scotland?", answer: ["Unicorn"] },
        { category: "General Knowledge", difficulty: "hard", question: 'What does the acronym "laser" stand for?', answer: ["Light Amplification by Stimulated Emission of Radiation"] },
        { category: "General Knowledge", difficulty: "hard", question: "Which artist cut off his own ear?", answer: ["Vincent van Gogh"] },
        { category: "General Knowledge", difficulty: "hard", question: "On a standard dartboard, what number is directly opposite the number 1?", answer: ["19", "Nineteen"] },
        { category: "General Knowledge", difficulty: "hard", question: 'What is a sommelier an expert in?', answer: ["Wine"] },
{ category: "General Knowledge", difficulty: "hard", question: "In which year was the Berlin Wall dismantled?", answer: ["1989"] },
{ category: "General Knowledge", difficulty: "hard", question: "Who wrote the novel 'One Hundred Years of Solitude'?", answer: ["Gabriel Garcia Marquez", "Marquez"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the chemical symbol for the element Tungsten?", answer: ["W"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the capital city of Iceland?", answer: ["Reykjavik"] },
{ category: "General Knowledge", difficulty: "hard", question: "The ancient city of Carthage is located in which modern-day country?", answer: ["Tunisia"] },
{ category: "General Knowledge", difficulty: "hard", question: "What was the first feature-length animated film ever released?", answer: ["Snow White"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the term for starting a story in the middle of the action?", answer: ["In medias res"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the world's most venomous fish?", answer: ["Stonefish", "Reef Stonefish"] },
{ category: "General Knowledge", difficulty: "hard", question: "Which famous English battle took place in 1066?", answer: ["Battle of Hastings"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the capital of Finland?", answer: ["Helsinki"] },
{ category: "General Knowledge", difficulty: "hard", question: "What does a philatelist collect?", answer: ["Stamps"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the name of Japan's largest island?", answer: ["Honshu"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the clinical term for the fear of open spaces?", answer: ["Agoraphobia"] },
{ category: "General Knowledge", difficulty: "hard", question: "Which famous composer was deaf for the last decade of his life?", answer: ["Beethoven", "Ludwig van Beethoven"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the deepest point in the Earth's oceans called?", answer: ["Mariana Trench", "Challenger Deep"] },
{ category: "General Knowledge", difficulty: "hard", question: "In which country would you find the ancient city of Petra?", answer: ["Jordan"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the most expensive spice in the world by weight?", answer: ["Saffron"] },
{ category: "General Knowledge", difficulty: "hard", question: "Who wrote the influential political treatise 'The Prince'?", answer: ["Niccolo Machiavelli", "Machiavelli"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the national flower of Japan?", answer: ["Cherry Blossom", "Sakura"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the capital of Vietnam?", answer: ["Hanoi"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the Japanese art of paper folding called?", answer: ["Origami"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the currency of Switzerland?", answer: ["Swiss Franc", "Franc"] },
{ category: "General Knowledge", difficulty: "hard", question: "In Roman mythology, who is the god of war?", answer: ["Mars"] },
{ category: "General Knowledge", difficulty: "hard", question: "What scale is used to measure the intensity of an earthquake?", answer: ["Richter scale"] },
{ category: "General Knowledge", difficulty: "hard", question: "What does the Beaufort scale measure?", answer: ["Wind speed", "Wind force"] },
{ category: "General Knowledge", difficulty: "hard", question: "Which English king famously had six wives?", answer: ["Henry VIII"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the world's oldest currency that is still in use today?", answer: ["Pound Sterling", "British Pound"] },
{ category: "General Knowledge", difficulty: "hard", question: "In computing, what does 'GUI' stand for?", answer: ["Graphical User Interface"] },
{ category: "General Knowledge", difficulty: "hard", question: "Which two primary colors are mixed to make purple?", answer: ["Red and blue", "Blue and Red"] },
{ category: "General Knowledge", difficulty: "hard", question: "What is the most stolen food in the world?", answer: ["Cheese"] },

        // --- Music ---
        { category: "Music", difficulty: "easy", question: "Who is known as the 'King of Pop'?", answer: ["Michael Jackson"] },
        { category: "Music", difficulty: "easy", question: "How many members are in the K-Pop group BTS?", answer: ["7", "Seven"] },
        { category: "Music", difficulty: "easy", question: "What is the name of the lead singer of Coldplay?", answer: ["Chris Martin"] },
        { category: "Music", difficulty: "easy", question: "Finish the lyric: 'I'm a survivor, I'm not gonna give up, I'm not gonna stop, I'm gonna work...'", answer: ["Harder"] },
        { category: "Music", difficulty: "easy", question: "Which instrument has black and white keys?", answer: ["Piano", "Keyboard"] },
        { category: "Music", difficulty: "easy", question: "Who sang the song 'Single Ladies'?", answer: ["Beyonce"] },
        { category: "Music", difficulty: "easy", question: "What rock band was founded by John Lennon, Paul McCartney, George Harrison, and Ringo Starr?", answer: ["The Beatles", "Beatles"] },
        { category: "Music", difficulty: "easy", question: "What kind of instrument is a Fender Stratocaster?", answer: ["Electric guitar", "Guitar"] },
        { category: "Music", difficulty: "easy", question: 'Complete the title of the Taylor Swift song: "Shake It ____"', answer: ["Off"] },
        { category: "Music", difficulty: "easy", question: "What genre of music is Bob Marley famous for?", answer: ["Reggae"] },
        { category: "Music", difficulty: "easy", question: 'Who is known as the "Queen of Soul"?', answer: ["Aretha Franklin"] },
        { category: "Music", difficulty: "easy", question: 'How many strings does a standard guitar have?', answer: ["6", "Six"] },
        { category: "Music", difficulty: "easy", question: 'Which pop star is known as "Mother Monster"?', answer: ["Lady Gaga"] },
        { category: "Music", difficulty: "easy", question: 'What instrument does a percussionist play?', answer: ["Drums", "Percussion"] },
{ category: "Music", difficulty: "easy", question: "Who sang the hit song 'I Will Always Love You'?", answer: ["Whitney Houston"] },
{ category: "Music", difficulty: "easy", question: "What is the stage name of the singer born Robyn Fenty?", answer: ["Rihanna"] },
{ category: "Music", difficulty: "easy", question: "Which legendary rock band performed 'Stairway to Heaven'?", answer: ["Led Zeppelin"] },
{ category: "Music", difficulty: "easy", question: "How many horizontal lines are on a standard musical staff?", answer: ["5", "Five"] },
{ category: "Music", difficulty: "easy", question: "What instrument does Flea from the Red Hot Chili Peppers famously play?", answer: ["Bass", "Bass guitar"] },
{ category: "Music", difficulty: "easy", question: "Complete the Elvis Presley song title: 'Hound ____'.", answer: ["Dog"] },
{ category: "Music", difficulty: "easy", question: "From which country does the artist Drake originate?", answer: ["Canada"] },
{ category: "Music", difficulty: "easy", question: "What stick is used to play a violin?", answer: ["A bow", "Bow"] },
{ category: "Music", difficulty: "easy", question: "What genre is most associated with Johnny Cash?", answer: ["Country"] },
{ category: "Music", difficulty: "easy", question: "Who is the iconic lead singer of The Rolling Stones?", answer: ["Mick Jagger"] },
{ category: "Music", difficulty: "easy", question: "'Rocket Man' is a famous song by which British artist?", answer: ["Elton John"] },
{ category: "Music", difficulty: "easy", question: "What instrument family does the saxophone belong to?", answer: ["Woodwind"] },
{ category: "Music", difficulty: "easy", question: "Which rapper is also known by the nicknames 'Hova' and 'Jigga'?", answer: ["Jay-Z", "Jay Z"] },
{ category: "Music", difficulty: "easy", question: "Which '90s girl group had members named Posh, Baby, and Sporty?", answer: ["Spice Girls"] },
{ category: "Music", difficulty: "easy", question: "Who wrote and originally performed the song 'Purple Haze'?", answer: ["Jimi Hendrix"] },
{ category: "Music", difficulty: "easy", question: "What do you call the speed of a piece of music?", answer: ["Tempo"] },
{ category: "Music", difficulty: "easy", question: "Which pop superstar has a fanbase called the 'Swifties'?", answer: ["Taylor Swift"] },
{ category: "Music", difficulty: "easy", question: "Who is the lead guitarist of Guns N' Roses, famous for his top hat?", answer: ["Slash"] },
{ category: "Music", difficulty: "easy", question: "Who had a massive 2014 hit with the song 'Uptown Funk'?", answer: ["Bruno Mars", "Mark Ronson"] },
{ category: "Music", difficulty: "easy", question: "What is the highest female singing voice called?", answer: ["Soprano"] },
{ category: "Music", difficulty: "easy", question: "What does a conductor use to lead an orchestra?", answer: ["A baton", "Baton"] },
{ category: "Music", difficulty: "easy", question: "Who famously sang the 1984 hit 'Like a Virgin'?", answer: ["Madonna"] },
{ category: "Music", difficulty: "easy", question: "The record label Motown was founded in which US city?", answer: ["Detroit"] },
{ category: "Music", difficulty: "easy", question: "Who is the lead singer of the band Maroon 5?", answer: ["Adam Levine"] },
{ category: "Music", difficulty: "easy", question: "How many strings does a standard bass guitar have?", answer: ["4", "Four"] },
{ category: "Music", difficulty: "easy", question: "Which American artist released the 2016 album 'Lemonade'?", answer: ["Beyonce"] },
{ category: "Music", difficulty: "easy", question: "What type of singing involves rhythmic, rhyming speech?", answer: ["Rapping"] },
{ category: "Music", difficulty: "easy", question: "What is another common name for a drum kit?", answer: ["Skins", "Drum set"] },
{ category: "Music", difficulty: "easy", question: "Who sang 'Can't Help Falling in Love'?", answer: ["Elvis Presley", "Elvis"] },
{ category: "Music", difficulty: "easy", question: "What instrument did Louis Armstrong famously play?", answer: ["Trumpet"] },
        { category: "Music", difficulty: "medium", question: "Which band released the hit album 'Rumours' in 1977?", answer: ["Fleetwood Mac"] },
        { category: "Music", difficulty: "medium", question: "What is the name of Beyoncé's dedicated fanbase?", answer: ["The Beyhive", "Beyhive"] },
        { category: "Music", difficulty: "medium", question: "Which American city is considered the birthplace of jazz music?", answer: ["New Orleans"] },
        { category: "Music", difficulty: "medium", question: "What was the first music video ever played on MTV?", answer: ["Video Killed the Radio Star"] },
        { category: "Music", difficulty: "medium", question: "Who is the best-selling female artist of all time?", answer: ["Madonna"] },
        { category: "Music", difficulty: "medium", question: "What was the name of Nirvana's frontman?", answer: ["Kurt Cobain"] },
        { category: "Music", difficulty: "medium", question: 'The song "Smells Like Teen Spirit" is by which band?', answer: ["Nirvana"] },
        { category: "Music", difficulty: "medium", question: 'Which rapper is known for the album "The Marshall Mathers LP"?', answer: ["Eminem", "Slim Shady"] },
        { category: "Music", difficulty: "medium", question: 'Which musical instrument is also known as a "fiddle"?', answer: ["Violin"] },
        { category: "Music", difficulty: "medium", question: 'What is the name of the lead singer of U2?', answer: ["Bono"] },
        { category: "Music", difficulty: "medium", question: 'In which year did the Woodstock festival take place?', answer: ["1969"] },
        { category: "Music", difficulty: "medium", question: 'What is the name of the record label founded by The Beatles?', answer: ["Apple Records"] },
        { category: "Music", difficulty: "medium", question: 'Which country did the band ABBA originate from?', answer: ["Sweden"] },
        { category: "Music", difficulty: "medium", question: 'What is the name of the band that released the album "Dark Side of the Moon"?', answer: ["Pink Floyd"] },
{ category: "Music", difficulty: "medium", question: "What was the name of the band fronted by Gwen Stefani?", answer: ["No Doubt"] },
{ category: "Music", difficulty: "medium", question: "Which composer wrote the iconic music for 'The Nutcracker' ballet?", answer: ["Tchaikovsky"] },
{ category: "Music", difficulty: "medium", question: "What was the title of Daft Punk's final, Grammy-winning album?", answer: ["Random Access Memories"] },
{ category: "Music", difficulty: "medium", question: "Which rapper's real name is Curtis Jackson?", answer: ["50 Cent"] },
{ category: "Music", difficulty: "medium", question: "Which artist's backing band is known as 'The E Street Band'?", answer: ["Bruce Springsteen"] },
{ category: "Music", difficulty: "medium", question: "What is the term for a combination of three or more musical notes played at once?", answer: ["A chord", "Chord"] },
{ category: "Music", difficulty: "medium", question: "What rock band uses a distinctive 'lips and tongue' logo?", answer: ["The Rolling Stones"] },
{ category: "Music", difficulty: "medium", question: "Who was the original drummer for The Beatles before Ringo Starr?", answer: ["Pete Best"] },
{ category: "Music", difficulty: "medium", question: "The festival 'Lollapalooza' was founded by the lead singer of which alternative band?", answer: ["Jane's Addiction"] },
{ category: "Music", difficulty: "medium", question: "What is the best-selling movie soundtrack of all time?", answer: ["The Bodyguard"] },
{ category: "Music", difficulty: "medium", question: "Who wrote the opera 'The Marriage of Figaro'?", answer: ["Mozart", "Wolfgang Amadeus Mozart"] },
{ category: "Music", difficulty: "medium", question: "What instrument was jazz legend John Coltrane famous for?", answer: ["Saxophone"] },
{ category: "Music", difficulty: "medium", question: "The rock opera 'Tommy' was released by which British band?", answer: ["The Who"] },
{ category: "Music", difficulty: "medium", question: "What does 'A&R' stand for in the music industry?", answer: ["Artists and Repertoire"] },
{ category: "Music", difficulty: "medium", question: "Which Icelandic singer released the influential 1995 album 'Post'?", answer: ["Bjork"] },
{ category: "Music", difficulty: "medium", question: "In what year did Elvis Presley, the 'King of Rock and Roll', die?", answer: ["1977"] },
{ category: "Music", difficulty: "medium", question: "What is the musical term for gradually getting louder?", answer: ["Crescendo"] },
{ category: "Music", difficulty: "medium", question: "Which member of Wu-Tang Clan released the solo album 'Ironman'?", answer: ["Ghostface Killah"] },
{ category: "Music", difficulty: "medium", question: "'OK Computer' is a critically acclaimed 1997 album by which band?", answer: ["Radiohead"] },
{ category: "Music", difficulty: "medium", question: "Who is the legendary American folk singer who wrote 'This Land Is Your Land'?", answer: ["Woody Guthrie"] },
{ category: "Music", difficulty: "medium", question: "Who was the charismatic frontman and lead singer of The Doors?", answer: ["Jim Morrison"] },
{ category: "Music", difficulty: "medium", question: "Which country music legend was known as the 'Man in Black'?", answer: ["Johnny Cash"] },
{ category: "Music", difficulty: "medium", question: "What was the debut album of the Las Vegas rock band The Killers?", answer: ["Hot Fuss"] },
{ category: "Music", difficulty: "medium", question: "What is the lowest male singing voice?", answer: ["Bass"] },
{ category: "Music", difficulty: "medium", question: "Which 1991 album by Nirvana is credited with bringing grunge to the mainstream?", answer: ["Nevermind"] },
{ category: "Music", difficulty: "medium", question: "Who is famously known as the 'Godfather of Soul'?", answer: ["James Brown"] },
{ category: "Music", difficulty: "medium", question: "What electronic music duo is known for performing while wearing robot helmets?", answer: ["Daft Punk"] },
{ category: "Music", difficulty: "medium", question: "Which American state is the birthplace of Taylor Swift?", answer: ["Pennsylvania"] },
{ category: "Music", difficulty: "medium", question: "What is the name of Kendrick Lamar's Pulitzer Prize-winning album?", answer: ["DAMN.", "DAMN"] },
        { category: "Music", difficulty: "hard", question: "What is the name of the rock band fronted by Freddie Mercury?", answer: ["Queen"] },
        { category: "Music", difficulty: "hard", question: "Which classical composer was deaf for the last part of his life?", answer: ["Beethoven", "Ludwig van Beethoven"] },
        { category: "Music", difficulty: "hard", question: "What is the name of the iconic 1975 rock anthem by Queen that features a famous opera section?", answer: ["Bohemian Rhapsody"] },
        { category: "Music", difficulty: "hard", question: "The '27 Club' is a term for popular musicians who died at what age?", answer: ["27", "Twenty-seven"] },
        { category: "Music", difficulty: "hard", question: "What is the top-selling album of all time?", answer: ["Thriller", "Michael Jackson's Thriller"] },
        { category: "Music", difficulty: "hard", question: 'Who composed "The Four Seasons"?', answer: ["Antonio Vivaldi", "Vivaldi"] },
        { category: "Music", difficulty: "hard", question: 'Which instrument did jazz musician Miles Davis play?', answer: ["Trumpet"] },
        { category: "Music", difficulty: "hard", question: "What is the name of the famous recording studio located on Abbey Road in London?", answer: ["Abbey Road Studios"] },
        { category: "Music", difficulty: "hard", question: 'The term "album" originally referred to a collection of what type of music recordings?', answer: ["78 rpm records", "Records"] },
        { category: "Music", difficulty: "hard", question: 'Which artist is known for the concept album "The Rise and Fall of Ziggy Stardust and the Spiders from Mars"?', answer: ["David Bowie"] },
        { category: "Music", difficulty: "hard", question: 'What is the time signature for a waltz?', answer: ["3/4"] },
        { category: "Music", difficulty: "hard", question: "Which rock and roll pioneer was known for his 'duckwalk' stage move?", answer: ["Chuck Berry"] },
        { category: "Music", difficulty: "hard", question: "What is the name of the legendary blues guitarist who named his guitars 'Lucille'?", answer: ["B.B. King", "BB King"] },
        { category: "Music", difficulty: "hard", question: "What is the name of the musical genre that originated in the Bronx in the 1970s, characterized by rhyming and DJing?", answer: ["Hip Hop", "Hip-hop"] },
{ category: "Music", difficulty: "hard", question: "What is the term for a musical composition for a solo instrument, accompanied by an orchestra?", answer: ["Concerto"] },
{ category: "Music", difficulty: "hard", question: "What was the name of the house band for Stax Records?", answer: ["Booker T. & the M.G.'s", "Booker T and the MGs"] },
{ category: "Music", difficulty: "hard", question: "Which composer's 5th Symphony famously opens with a 'short-short-short-long' motif?", answer: ["Beethoven"] },
{ category: "Music", difficulty: "hard", question: "What is the practice of placing objects on or between the strings of a piano called?", answer: ["Prepared piano"] },
{ category: "Music", difficulty: "hard", question: "What does the musical direction 'adagio' instruct a musician to do?", answer: ["Play slowly"] },
{ category: "Music", difficulty: "hard", question: "Which producer was famous for his 'Wall of Sound' recording technique?", answer: ["Phil Spector"] },
{ category: "Music", difficulty: "hard", question: "What is the name of the pioneering German electronic band that released 'Autobahn'?", answer: ["Kraftwerk"] },
{ category: "Music", difficulty: "hard", question: "John Coltrane's famously complex composition 'Giant Steps' is a workout on what musical element?", answer: ["Chord changes", "Chords"] },
{ category: "Music", difficulty: "hard", question: "What is the name for a scale that uses only five notes per octave?", answer: ["Pentatonic scale"] },
{ category: "Music", difficulty: "hard", question: "Who is widely credited with inventing the solid-body electric guitar?", answer: ["Les Paul"] },
{ category: "Music", difficulty: "hard", question: "What is a composition where a theme is repeated by different instruments in succession?", answer: ["Canon", "A canon"] },
{ category: "Music", difficulty: "hard", question: "John Cage's composition 4′33″ consists entirely of what?", answer: ["Silence"] },
{ category: "Music", difficulty: "hard", question: "Which composer developed the 'twelve-tone' technique of composition?", answer: ["Arnold Schoenberg"] },
{ category: "Music", difficulty: "hard", question: "What is the name of the Brazilian music genre that fuses samba with jazz?", answer: ["Bossa Nova"] },
{ category: "Music", difficulty: "hard", question: "Which band's 1966 album 'Pet Sounds' heavily influenced The Beatles?", answer: ["The Beach Boys", "Beach Boys"] },
{ category: "Music", difficulty: "hard", question: "What is the art of using pre-existing sound recordings to create a new song called?", answer: ["Sampling"] },
{ category: "Music", difficulty: "hard", question: "What is the nickname of the famous Stradivarius violin once owned by Paganini?", answer: ["Il Cannone"] },
{ category: "Music", difficulty: "hard", question: "Which British record label, founded by Tony Wilson, was central to the Manchester scene?", answer: ["Factory Records"] },
{ category: "Music", difficulty: "hard", question: "What term describes a single melodic line without accompaniment?", answer: ["Monophony", "Monophonic"] },
{ category: "Music", difficulty: "hard", question: "What was the first rock and roll song to hit #1 on the US Billboard charts?", answer: ["Rock Around the Clock"] },
{ category: "Music", difficulty: "hard", question: "Which instrument, played without physical contact, is featured in 'Good Vibrations'?", answer: ["Theremin"] },
{ category: "Music", difficulty: "hard", question: "In music theory, what is the 'tritone' interval infamously known as?", answer: ["The devil's interval"] },
{ category: "Music", difficulty: "hard", question: "Which band's breakup was unofficially announced in a press release for a McCartney solo album?", answer: ["The Beatles"] },
{ category: "Music", difficulty: "hard", question: "Who composed the minimalist opera 'Einstein on the Beach'?", answer: ["Philip Glass"] },
{ category: "Music", difficulty: "hard", question: "What is the musical term for the end of a phrase, acting like punctuation?", answer: ["Cadence"] },
{ category: "Music", difficulty: "hard", question: "The Roland TR-808 is a legendary and highly influential model of what instrument?", answer: ["Drum machine"] },
{ category: "Music", difficulty: "hard", "question": "What is the title of the only opera written by Ludwig van Beethoven?", "answer": ["Fidelio"] },
{ category: "Music", difficulty: "hard", question: "Which artist's real name is Georgios Panayiotou?", answer: ["George Michael"] },
{ category: "Music", difficulty: "hard", question: "What is the name of the Talking Heads' iconic 1984 concert film?", answer: ["Stop Making Sense"] },
{ category: "Music", difficulty: "hard", question: "Which Fugees member released the landmark solo album 'The Miseducation of Lauryn Hill'?", answer: ["Lauryn Hill"] },

        // --- Film & TV ---
        { category: "Film & TV", difficulty: "easy", question: "What is the name of the boy wizard who attends Hogwarts?", answer: ["Harry Potter"] },
        { category: "Film & TV", difficulty: "easy", question: "In the movie 'Finding Nemo', what type of fish is Nemo?", answer: ["Clownfish"] },
        { category: "Film & TV", difficulty: "easy", question: "Who is the famous mouse character created by Walt Disney?", answer: ["Mickey Mouse", "Mickey"] },
        { category: "Film & TV", difficulty: "easy", question: "What is the name of the green ogre who lives in a swamp?", answer: ["Shrek"] },
        { category: "Film & TV", difficulty: "easy", question: "In 'The Lion King', what is the name of Simba's father?", answer: ["Mufasa"] },
        { category: "Film & TV", difficulty: "easy", question: 'Which movie features the characters Woody and Buzz Lightyear?', answer: ["Toy Story"] },
        { category: "Film & TV", difficulty: "easy", question: 'In the TV show "SpongeBob SquarePants", where does SpongeBob work?', answer: ["The Krusty Krab", "Krusty Krab"] },
        { category: "Film & TV", difficulty: "easy", question: 'What is the name of the main character in the "Pirates of the Caribbean" film series?', answer: ["Jack Sparrow", "Captain Jack Sparrow"] },
        { category: "Film & TV", difficulty: "easy", question: 'Who lives in a pineapple under the sea?', answer: ["SpongeBob SquarePants", "Spongebob"] },
        { category: "Film & TV", difficulty: "easy", question: 'Which TV show is set in the fictional city of Springfield?', answer: ["The Simpsons", "Simpsons"] },
        { category: "Film & TV", difficulty: "easy", question: 'In "Star Wars", what is the famous weapon used by Jedi Knights?', answer: ["Lightsaber"] },
        { category: "Film & TV", difficulty: "easy", question: 'What color is the Hulk?', answer: ["Green"] },
        { category: "Film & TV", difficulty: "easy", question: 'Which princess in "Frozen" has ice powers?', answer: ["Elsa"] },
        { category: "Film & TV", difficulty: "easy", question: 'What is the name of Batman\'s butler?', answer: ["Alfred Pennyworth", "Alfred"] },
{ category: "Film & TV", difficulty: "easy", question: "What is Superman's secret identity?", answer: ["Clark Kent"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'The Wizard of Oz', what is the name of Dorothy's dog?", answer: ["Toto"] },
{ category: "Film & TV", difficulty: "easy", question: "Which Disney princess loses a glass slipper at a ball?", answer: ["Cinderella"] },
{ category: "Film & TV", difficulty: "easy", question: "In the Disney classic, what kind of animal is Bambi?", answer: ["A deer", "Deer"] },
{ category: "Film & TV", difficulty: "easy", question: "What are the small, yellow, pill-shaped characters in 'Despicable Me' called?", answer: ["Minions"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'Star Wars', who is Han Solo's furry Wookiee copilot?", answer: ["Chewbacca"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the crime-ridden city that Batman protects?", answer: ["Gotham", "Gotham City"] },
{ category: "Film & TV", difficulty: "easy", question: "Which TV show is about a group of six friends living in New York City?", answer: ["Friends"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the giant ape who climbs the Empire State Building?", answer: ["King Kong"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'The Little Mermaid', what is the name of Ariel's father?", answer: ["King Triton"] },
{ category: "Film & TV", difficulty: "easy", question: "Who is the main character and sheriff in the 'Toy Story' films?", answer: ["Woody"] },
{ category: "Film & TV", difficulty: "easy", question: "What is Spider-Man's real name?", answer: ["Peter Parker"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'Finding Nemo', what kind of fish is Dory?", answer: ["Blue Tang"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the monster created by Victor Frankenstein?", answer: ["Frankenstein's monster", "The Monster"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the main velociraptor in the 'Jurassic World' films?", answer: ["Blue"] },
{ category: "Film & TV", difficulty: "easy", question: "In the sitcom 'Friends', what is the name of their usual coffee shop hangout?", answer: ["Central Perk"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the magical nanny who flies with an umbrella?", answer: ["Mary Poppins"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the profession of the adventurous hero Indiana Jones?", answer: ["Archaeologist"] },
{ category: "Film & TV", difficulty: "easy", question: "Which film features a time-traveling DeLorean car?", answer: ["Back to the Future"] },
{ category: "Film & TV", difficulty: "easy", question: "Which Avenger from Asgard wields the hammer Mjolnir?", answer: ["Thor"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the magical snowman in the movie 'Frozen'?", answer: ["Olaf"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'A Quiet Place', the monsters are attracted to what?", answer: ["Sound", "Noise"] },
{ category: "Film & TV", difficulty: "easy", question: "Who is the villainous uncle in 'The Lion King'?", answer: ["Scar"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'Scooby-Doo', what is the name of the gang's iconic van?", answer: ["The Mystery Machine"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the TV host played by Will Ferrell in 'Anchorman'?", answer: ["Ron Burgundy"] },
{ category: "Film & TV", difficulty: "easy", question: "In 'Monsters, Inc.', what is the name of the big, blue, furry monster?", answer: ["Sully", "James P. Sullivan"] },
{ category: "Film & TV", difficulty: "easy", question: "Who is the legendary hitman at the center of the 'John Wick' series?", answer: ["John Wick"] },
{ category: "Film & TV", difficulty: "easy", question: "What is the name of the greedy owner of the Krusty Krab in 'SpongeBob'?", answer: ["Mr. Krabs"] },
{ category: "Film & TV", difficulty: "easy", question: "Which film series is about a theme park of cloned dinosaurs?", answer: ["Jurassic Park"] },
{ category: "Film & TV", difficulty: "easy", question: "What city does the Fresh Prince move to from Philadelphia?", answer: ["Bel-Air", "Los Angeles", "Bel Air"] },
        { category: "Film & TV", difficulty: "medium", question: "Who directed the films 'Jaws', 'E.T.', and 'Jurassic Park'?", answer: ["Steven Spielberg", "Spielberg"] },
        { category: "Film & TV", difficulty: "medium", question: "What is the name of the fictional African country in the movie 'Black Panther'?", answer: ["Wakanda"] },
        { category: "Film & TV", difficulty: "medium", question: "In the TV series 'Breaking Bad', what is the street name of the chemistry teacher turned meth cook?", answer: ["Heisenberg"] },
        { category: "Film & TV", difficulty: "medium", question: "What is the name of the spaceship in 'Star Wars' captained by Han Solo?", answer: ["Millennium Falcon"] },
        { category: "Film & TV", difficulty: "medium", question: "Who played Jack Dawson in the movie 'Titanic'?", answer: ["Leonardo DiCaprio", "DiCaprio"] },
        { category: "Film & TV", difficulty: "medium", question: 'What is the name of the actor who plays Tony Stark/Iron Man in the Marvel Cinematic Universe?', answer: ["Robert Downey Jr.", "Robert Downey Junior"] },
        { category: "Film & TV", difficulty: "medium", question: 'Which Quentin Tarantino film is split into three main stories: "Vincent Vega and Marsellus Wallace\'s Wife", "The Gold Watch", and "The Bonnie Situation"?', answer: ["Pulp Fiction"] },
        { category: "Film & TV", difficulty: "medium", question: 'What is the name of the talking donkey in the "Shrek" movies?', answer: ["Donkey"] },
        { category: "Film & TV", difficulty: "medium", question: 'In the TV show "The Office" (US), what is the name of the paper company?', answer: ["Dunder Mifflin"] },
        { category: "Film & TV", "difficulty": "medium", "question": "Which 1994 film won the Academy Award for Best Picture, starring Tom Hanks?", "answer": ["Forrest Gump"] },
        { category: "Film & TV", "difficulty": "medium", "question": "What are the names of the four houses at Hogwarts?", "answer": ["Gryffindor, Hufflepuff, Ravenclaw, and Slytherin"] },
        { category: "Film & TV", "difficulty": "medium", "question": "Who directed 'The Lord of the Rings' trilogy?", "answer": ["Peter Jackson"] },
        { category: "Film & TV", "difficulty": "medium", "question": "What is the highest-grossing film of all time (unadjusted for inflation) as of 2023?", "answer": ["Avatar"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the real first name of the main character, Neo, in 'The Matrix'?", answer: ["Thomas"] },
{ category: "Film & TV", difficulty: "medium", question: "Which 1982 film is about a friendly alien who gets left behind on Earth?", answer: ["E.T.", "E.T. the Extra-Terrestrial"] },
{ category: "Film & TV", difficulty: "medium", question: "In which city is the 1987 film 'RoboCop' primarily set?", answer: ["Detroit"] },
{ category: "Film & TV", difficulty: "medium", question: "In 'Game of Thrones', what are the words of House Stark?", answer: ["Winter Is Coming"] },
{ category: "Film & TV", difficulty: "medium", question: "Who played The Bride, codenamed Black Mamba, in the 'Kill Bill' films?", answer: ["Uma Thurman"] },
{ category: "Film & TV", difficulty: "medium", question: "Which Stanley Kubrick film features a sentient computer named HAL 9000?", answer: ["2001: A Space Odyssey"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the name of the high school in the musical film 'Grease'?", answer: ["Rydell High"] },
{ category: "Film & TV", difficulty: "medium", question: "In 'The Silence of the Lambs', what is the name of the cannibalistic serial killer?", answer: ["Hannibal Lecter"] },
{ category: "Film & TV", difficulty: "medium", question: "Which film won the first-ever Academy Award for Best Picture?", answer: ["Wings"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the name of the hobbit who must destroy the One Ring?", answer: ["Frodo Baggins", "Frodo"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the name of the Simpson family's friendly, religious neighbor?", answer: ["Ned Flanders"] },
{ category: "Film & TV", difficulty: "medium", question: "Which Australian actor is famous for playing Wolverine?", answer: ["Hugh Jackman"] },
{ category: "Film & TV", difficulty: "medium", question: "On what fictional island is the original Jurassic Park located?", answer: ["Isla Nublar"] },
{ category: "Film & TV", difficulty: "medium", question: "In 'Stranger Things', what is the name of the dark parallel dimension?", answer: ["The Upside Down"] },
{ category: "Film & TV", difficulty: "medium", question: "Who wrote and directed the Oscar-winning 2019 film 'Parasite'?", answer: ["Bong Joon-ho"] },
{ category: "Film & TV", difficulty: "medium", question: "In the movie 'The Outsiders', what is the name of the wealthy rival gang?", answer: ["The Socs"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the name of the hero cop played by Bruce Willis in the 'Die Hard' series?", answer: ["John McClane"] },
{ category: "Film & TV", difficulty: "medium", question: "The TV show 'Cheers' is set in which American city?", answer: ["Boston"] },
{ category: "Film & TV", difficulty: "medium", question: "Who is the main antagonist in 'Avengers: Infinity War'?", answer: ["Thanos"] },
{ category: "Film & TV", difficulty: "medium", question: "Before becoming a drug kingpin, what was Walter White's profession?", answer: ["Chemistry teacher"] },
{ category: "Film & TV", difficulty: "medium", question: "Which film is famous for the line, 'Here's looking at you, kid'?", answer: ["Casablanca"] },
{ category: "Film & TV", difficulty: "medium", question: "Who is the director known for the distinctively symmetrical style of 'The Grand Budapest Hotel'?", answer: ["Wes Anderson"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the name of the ambitious gangster played by Al Pacino in 'Scarface'?", answer: ["Tony Montana"] },
{ category: "Film & TV", difficulty: "medium", question: "On 'Seinfeld', what is the name of Jerry's eccentric, quirky neighbor?", answer: ["Kramer"] },
{ category: "Film & TV", difficulty: "medium", question: "Which film first introduced the adventurous archaeologist Indiana Jones?", answer: ["Raiders of the Lost Ark"] },
{ category: "Film & TV", difficulty: "medium", question: "In the movie 'Her', what is the name of the advanced AI operating system?", answer: ["Samantha"] },
{ category: "Film & TV", difficulty: "medium", question: "In 'The Lord of the Rings', what is the name of the wizard who guides the Fellowship?", answer: ["Gandalf"] },
{ category: "Film & TV", difficulty: "medium", question: "Which actor played Neo in 'The Matrix'?", answer: ["Keanu Reeves"] },
{ category: "Film & TV", difficulty: "medium", question: "What is the name of the evil toy collector in 'Toy Story 2'?", answer: ["Al McWhiggin", "Al"] },
{ category: "Film & TV", difficulty: "medium", question: "Which TV series is about a high school chemistry teacher who starts making meth?", answer: ["Breaking Bad"] },
        { category: "Film & TV", "difficulty": "hard", "question": "In the movie 'The Matrix', what color is the pill that Neo takes?", "answer": ["Red", "The red pill"] },
        { category: "Film & TV", "difficulty": "hard", "question": "Which film was the first to be released in full color Technicolor Process 4?", "answer": ["Becky Sharp", "The Garden of Allah"] },
        { category: "Film & TV", "difficulty": "hard", "question": "What is the name of the fictional brand of cigarettes smoked by many characters in Quentin Tarantino's films?", "answer": ["Red Apple Cigarettes", "Red Apple"] },
        { category: "Film & TV", "difficulty": "hard", "question": "In 'Blade Runner', what is the name of the corporation that creates the replicants?", "answer": ["Tyrell Corporation", "Tyrell"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the film technique of slowing down time to show an object moving through a scene called?", answer: ["Bullet time"] },
{ category: "Film & TV", difficulty: "hard", question: "Who directed the highly influential 1941 film 'Citizen Kane'?", answer: ["Orson Welles"] },
{ category: "Film & TV", difficulty: "hard", question: "In Francis Ford Coppola's 'Apocalypse Now,' what is the name of Marlon Brando's renegade colonel?", answer: ["Colonel Kurtz"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the Japanese animation studio co-founded by Hayao Miyazaki?", answer: ["Studio Ghibli"] },
{ category: "Film & TV", difficulty: "hard", question: "Which Alfred Hitchcock film is famous for its iconic, terrifying shower scene?", answer: ["Psycho"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the valuable, mind-altering substance in the movie 'Dune'?", answer: ["Spice", "Melange"] },
{ category: "Film & TV", difficulty: "hard", question: "In David Lynch's 'Twin Peaks,' who was revealed to be Laura Palmer's killer?", answer: ["Leland Palmer"] },
{ category: "Film & TV", difficulty: "hard", question: "What cinematic term describes the arrangement of all visual elements within the frame?", answer: ["Mise-en-scène", "Mise-en-scene", "Mise en scene"] },
{ category: "Film & TV", difficulty: "hard", question: "Which 1976 Martin Scorsese film stars Robert De Niro as the troubled taxi driver Travis Bickle?", answer: ["Taxi Driver"] },
{ category: "Film & TV", difficulty: "hard", question: "In David Lynch's film 'Eraserhead,' what is the protagonist's name?", answer: ["Henry Spencer"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the haunted hotel in Stanley Kubrick's 'The Shining'?", answer: ["The Overlook Hotel"] },
{ category: "Film & TV", difficulty: "hard", question: "Who composed the iconic, recognizable musical scores for the 'Star Wars' saga?", answer: ["John Williams"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the test used to identify replicants in 'Blade Runner'?", answer: ["Voight-Kampff", "Voight Kampff"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the editing technique that alternates between two scenes happening simultaneously?", answer: ["Cross-cutting", "Parallel editing"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the only X-rated film to ever win the Academy Award for Best Picture?", answer: ["Midnight Cowboy"] },
{ category: "Film & TV", difficulty: "hard", question: "In 'Fight Club,' what is the name of the main character's anarchic alter ego?", answer: ["Tyler Durden"] },
{ category: "Film & TV", difficulty: "hard", question: "Which actor holds the record for the most Academy Award nominations?", answer: ["Meryl Streep"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the fictional moon where the movie 'Avatar' takes place?", answer: ["Pandora"] },
{ category: "Film & TV", difficulty: "hard", question: "Which Ingmar Bergman film famously depicts a knight playing a game of chess with Death?", answer: ["The Seventh Seal"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the influential French film movement of the 1950s and '60s?", answer: ["French New Wave"] },
{ category: "Film & TV", difficulty: "hard", question: "Who directed the 'Three Colours' trilogy (Blue, White, and Red)?", answer: ["Krzysztof Kieślowski", "Krzysztof Kieslowski"] },
{ category: "Film & TV", difficulty: "hard", question: "What term describes sound whose source is not visible on screen?", answer: ["Acousmatic sound"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the main character, a sociopathic youth, in 'A Clockwork Orange'?", answer: ["Alex DeLarge"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the term for a camera shot that is tilted to one side?", answer: ["Dutch angle", "Canted angle"] },
{ category: "Film & TV", difficulty: "hard", question: "Who played the dual roles of the Mantle twins in 'Dead Ringers'?", answer: ["Jeremy Irons"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the fictional news program in the 1976 film 'Network'?", answer: ["The Howard Beale Show"] },
{ category: "Film & TV", difficulty: "hard", question: "In what year was the Hays Code, which enforced moral guidelines in films, abandoned?", answer: ["1968"] },
{ category: "Film & TV", difficulty: "hard", question: "Which Wes Anderson film was his first to be entirely stop-motion animated?", answer: ["Fantastic Mr. Fox"] },
{ category: "Film & TV", difficulty: "hard", question: "Who is the director of the Korean vengeance thriller 'Oldboy' (2003)?", answer: ["Park Chan-wook", "Park Chanwook"] },
{ category: "Film & TV", difficulty: "hard", question: "What is the name of the fictional TV show within the sitcom '30 Rock'?", answer: ["TGS", "The Girlie Show"] },
        { category: "Film & TV", "difficulty": "hard", "question": "What is the final line of dialogue in the movie 'The Godfather'?", "answer": ["Don't ever take sides with anyone against the family again. Ever."] }
    ];

    // ===================================================================================
    // APPLICATION LOGIC
    // ===================================================================================

    let currentQuizQuestions = [];
    let score = 0;
    let questionIndex = 0;
    let isAnswered = false;

    let currentFlashcards = [];
    let flashcardIndex = 0;

    // --- Utility Functions ---
    const normalizeString = (str) => {
        if (typeof str !== 'string') return '';
        return str
            .normalize("NFD") // Decompose accented characters
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
            .toLowerCase() // Convert to lowercase
            .replace(/[^\w]/g, ""); // Remove spaces, hyphens, and all non-alphanumeric characters
    };
    
    // --- Notification Function ---
    function showNotification(message) {
        const notificationBox = document.getElementById('notification-box');
        if(notificationBox) {
            notificationBox.textContent = message;
            notificationBox.style.display = 'block';
            // Scroll to the top to make sure the user sees it
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                notificationBox.style.display = 'none';
            }, 4000); // Hide after 4 seconds
        }
    }

    // --- View Management ---
    function showView(viewId) {
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        const activeView = document.getElementById(viewId);
        if (activeView) {
            activeView.classList.add('active');
        }
        
        if (viewId === 'flashcards') {
            initFlashcards();
        }
        window.scrollTo(0, 0);
    }

    // --- Quiz Functions ---
    function startQuiz(mode) {
        const category = document.getElementById('category').value;
        const difficulty = document.getElementById('difficulty').value;
        let questionCount = (mode === 'full') ? 50 : 10;
        
        const finalCategory = (mode === 'full') ? 'mixed' : category;
        const finalDifficulty = (mode === 'full') ? 'mixed' : difficulty;

        currentQuizQuestions = filterAndShuffleQuestions(finalCategory, finalDifficulty, questionCount);
        score = 0;
        questionIndex = 0;
        isAnswered = false;

        if (currentQuizQuestions.length < questionCount && mode !== 'full') {
             showNotification(`Sorry, we only found ${currentQuizQuestions.length} questions for that selection. Please try a 'mixed' option for more variety.`);
             if(currentQuizQuestions.length === 0) return;
        } else if (currentQuizQuestions.length === 0) {
            showNotification("Sorry, no questions were found for that criteria. The questions database might be empty or need more entries.");
            return;
        }
        
        showView('quiz-view');
        displayQuestion();
    }

    function filterAndShuffleQuestions(category, difficulty, count) {
        let filtered = questions;
        if (category !== 'mixed') {
            filtered = filtered.filter(q => q.category === category);
        }
        if (difficulty !== 'mixed') {
            filtered = filtered.filter(q => q.difficulty === difficulty);
        }
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function displayQuestion() {
        isAnswered = false;
        if (questionIndex < currentQuizQuestions.length) {
            const question = currentQuizQuestions[questionIndex];
            const quizBox = document.getElementById('quiz-box');
            
            const answerHtml = `<input type="text" id="text-answer" placeholder="Type your answer here" onkeydown="if(event.key==='Enter') document.getElementById('submit-btn').click()">`;
            
            quizBox.innerHTML = `
                <div class="quiz-header">
                    <span>Question ${questionIndex + 1} of ${currentQuizQuestions.length}</span>
                    <span>Score: ${score}</span>
                </div>
                <div id="question-text">${question.question}</div>
                ${answerHtml}
                <div id="feedback"></div>
                <button id="submit-btn" onclick="checkAnswer()">Submit</button>
            `;
            // Use a short timeout to ensure the element is in the DOM before focusing
            setTimeout(() => {
                const textAnswer = document.getElementById('text-answer');
                if (textAnswer) textAnswer.focus();
            }, 100);
        } else {
            showFinalScore();
        }
    }

    function checkAnswer() {
        if (isAnswered) return;
        isAnswered = true;

        const question = currentQuizQuestions[questionIndex];
        const input = document.getElementById('text-answer');
        const userAnswer = normalizeString(input.value);

        if (userAnswer === "") {
            document.getElementById('feedback').innerText = "Please enter an answer!";
            isAnswered = false; // Allow retry if blank
            return;
        }

        const feedbackEl = document.getElementById('feedback');
        const isCorrect = question.answer.some(ans => normalizeString(ans) === userAnswer);
        
        input.disabled = true;
        document.getElementById('submit-btn').disabled = true;

        if (isCorrect) {
            score++;
            feedbackEl.innerText = "Correct! ✅";
            feedbackEl.className = 'correct';
            setTimeout(nextQuestion, 1200); // Auto-advance on correct
        } else {
            const correctAnswer = question.answer[0];
            feedbackEl.innerText = `Incorrect. The answer is: ${correctAnswer}`;
            feedbackEl.className = 'incorrect';
            const submitBtn = document.getElementById('submit-btn');
            submitBtn.innerText = 'Next Question →';
            submitBtn.disabled = false;
            submitBtn.onclick = nextQuestion;
        }
    }

    function nextQuestion() {
        questionIndex++;
        displayQuestion();
    }

    function showFinalScore() {
        const quizBox = document.getElementById('quiz-box');
        const percentage = currentQuizQuestions.length > 0 ? Math.round((score / currentQuizQuestions.length) * 100) : 0;
        quizBox.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p style="font-size: 1.5rem;">Your final score is:</p>
            <p style="font-size: 3rem; color: var(--accent-color); margin: 10px 0;">${score} / ${currentQuizQuestions.length}</p>
            <p style="font-size: 1.2rem;">That's ${percentage}%!</p>
            <button onclick="showView('main-menu')">Play Again</button>
        `;
    }

    // --- Flashcard Functions ---
    function initFlashcards() {
        currentFlashcards = [...questions].sort(() => 0.5 - Math.random());
        flashcardIndex = 0;
        displayFlashcard();
    }

    function displayFlashcard() {
        if (currentFlashcards.length > 0) {
            const card = currentFlashcards[flashcardIndex];
            const container = document.getElementById('flashcard-container');
            const answer = card.answer[0]; // Show the primary answer

            container.innerHTML = `
                <div class="flashcard" onclick="this.classList.toggle('is-flipped')">
                    <div class="card-face card-front">
                        <div>
                            <small style="font-weight:bold; color: var(--accent-color); display: block; margin-bottom: 10px;">${card.category}</small>
                            <p>${card.question}</p>
                        </div>
                    </div>
                    <div class="card-face card-back">
                        ${answer}
                    </div>
                </div>
                <div class="flashcard-nav">
                    <button onclick="prevFlashcard()">← Prev</button>
                    <span>${flashcardIndex + 1} / ${currentFlashcards.length}</span>
                    <button onclick="nextFlashcard()">Next →</button>
                </div>
            `;
        } else {
            document.getElementById('flashcard-container').innerHTML = `<p>No questions available for flashcards.</p>`;
        }
    }

    function nextFlashcard() {
        flashcardIndex = (flashcardIndex + 1) % currentFlashcards.length;
        displayFlashcard();
    }

    function prevFlashcard() {
        flashcardIndex = (flashcardIndex - 1 + currentFlashcards.length) % currentFlashcards.length;
        displayFlashcard();
    }

} catch (error) {
    console.error("A critical error occurred:", error);
    const body = document.querySelector('body');
    body.innerHTML = `<div style="padding: 20px; text-align: center; color: white; background-color: #2c2a4a; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <h1>Oops! Something went wrong.</h1>
        <p>There was a critical error loading the quiz application. This can happen if the questions database has a syntax error.</p>
        <p>Please check the developer console (F12) for details.</p>
        <p style="background-color: #ff6b6b; color: black; padding: 10px; border-radius: 8px; margin-top: 15px;"><b>Error:</b> ${error.message}</p>
    </div>`;
}