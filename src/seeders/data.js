const users = [
  {
    name: 'Sajjad Ali',
    email: 'sajjadramzan1211@gmail.com',
    phone_number: '+124578963',
    password: '$2a$10$hgzpYdzwAxxL3AlstZeLweTTtjLPZP0Jll.73lLz1D.DQks6ELUz.',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
];

const blogUsers = [...users];

const quotes = [
  {
    quote:
      'You can avoid reality, but you cannot avoid the consequences of avoiding reality.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote:
      "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote:
      "If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit.",
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote: 'Believe you can and you’re halfway there.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote: 'The only real mistake is the one from which we learn nothing.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote:
      'Time is too slow for those who wait, too swift for those who fear, too long for those who grieve, too short for those who rejoice, but for those who love, time is eternity.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote:
      'Happiness is not something ready-made. It comes from your own actions.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote: 'Be not afraid of going slowly, be afraid only of standing still.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote: 'I’m a slow walker, but I never walk back.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    quote: 'The most wasted of days is one without laughter.',
    user_id: 1,
    created_at: Date.now(),
    updated_at: Date.now(),
  },
];

const blogs = [
  {
    user_id: 1,
    title: 'Cats Obedient Training',
    body: 'If you’re having trouble with other elements of your kitten’s training, such as getting her to stay still for grooming or getting her acclimated to travelling by car, you can use the clicker approach to assist you. What about your cat? We all know that dogs can be trained to follow basic orders, but what about your cat? Given that cats are more self-sufficient and less gregarious than dogs, they are less likely to seek praise in the same manner that dogs do.',
    image: 'cat.jpg',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    user_id: 1,
    title: 'Can Dogs Consume Eggs',
    body: 'Eggs are a rich source of protein, as are other dairy products. They can be great when boiled, fried, or scrambled for breakfast; they’re important components of many popular desserts, and they can be surprisingly delicious when added to burgers or sandwiches. In contrast, eating raw or undercooked eggs can expose people to potentially harmful microorganisms such as salmonella.',
    image: 'dogs.jpg',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    user_id: 1,
    title: 'Cycling',
    body: 'Cycling can help to protect you from serious diseases such as stroke, heart attack, some cancers, depression, diabetes, obesity and arthritis. Riding a bike is healthy, fun and a low-impact form of exercise for all ages.',
    image: 'bikes.jpg',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    user_id: 1,
    title: 'Natural Things',
    body: 'That’s the one that scared me the most,” says Rigby, who is the telescope’s operations project scientist at NASA’s Goddard Space Flight Center in Greenbelt, Maryland. “I could just visualize this beautiful telescope, the gold mirrors in space, focusing the light to nothing with no secondary mirror there.',
    image: 'nature.jpg',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    user_id: 1,
    title: 'Palm trees',
    body: 'Not to be confused with the heather family Ericaceae, the arum family Araceae or the ivy family Araliaceae. "Palm tree" and "Palm leaves" redirect here. For other uses, see Palm tree (disambiguation). For the French pastry, see palmier.',
    image: 'palm.jpg',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
  {
    user_id: 1,
    title: 'Parachute',
    body: "A parachute is a device used to slow the motion of an object through an atmosphere by creating drag or, in a ram-air parachute, aerodynamic lift. A major application is to support people, for recreation or as a safety device for aviators, who can exit from an aircraft at height and descend safely to earth. A parachute is usually made of a light, strong fabric. Early parachutes were made of silk. The most common fabric today is nylon. A parachute's canopy is typically dome-shaped, but some are rectangles, inverted domes, and other shapes.",
    image: 'parachute.jpg',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
];

const species = [{ name: 'Dog' }, { name: 'Cat' }, { name: 'Bird' }];

const dogBreeds = [
  { name: 'Labrador Retriever', species_id: 1 },
  { name: 'German Shepherd', species_id: 1 },
  { name: 'Bulldog', species_id: 1 },
  { name: 'Beagle', species_id: 1 },
  { name: 'Poodle', species_id: 1 },
  { name: 'Rottweiler', species_id: 1 },
  { name: 'Golden Retriever', species_id: 1 },
  { name: 'Dachshund', species_id: 1 },
  { name: 'Siberian Husky', species_id: 1 },
  { name: 'Boxer', species_id: 1 },
];
const catBreeds = [
  { name: 'Siamese', species_id: 2 },
  { name: 'Maine Coon', species_id: 2 },
  { name: 'Persian', species_id: 2 },
  { name: 'Sphynx', species_id: 2 },
  { name: 'British Shorthair', species_id: 2 },
  { name: 'Scottish Fold', species_id: 2 },
  { name: 'Bengal', species_id: 2 },
  { name: 'Abyssinian', species_id: 2 },
  { name: 'American Shorthair', species_id: 2 },
];
const birdBreeds = [
  { name: 'African Grey Parrot', species_id: 3 },
  { name: 'Cockatiel', species_id: 3 },
  { name: 'Budgerigar', species_id: 3 },
  { name: 'Amazon Parrot', species_id: 3 },
  { name: 'Canary', species_id: 3 },
  { name: 'Finch', species_id: 3 },
  { name: 'Macaw', species_id: 3 },
  { name: 'Poultry', species_id: 3 },
  { name: 'Cockatoo', species_id: 3 },
  { name: 'Lovebird', species_id: 3 },
];
const speciesBreeds = {
  dogs: dogBreeds,
  cats: catBreeds,
  birds: birdBreeds,
};
const dogsData = [
  {
    name: 'Max',
    age: 2,
    gender: 'male',
    color: 'brown',
    description:
      'Max is a friendly and playful Labrador Retriever. He loves to play fetch and go for long walks. He is well-trained and obedient, but can also be stubborn at times. He is great with children and other pets, and is a loving and loyal companion. He is an energetic and active dog who always wants to be by your side.',
    user_id: 1,
    species_id: 1,
    breed_id: 1,
  },
  {
    name: 'Bella',
    age: 3,
    gender: 'female',
    color: 'black',
    description:
      'Bella is a loyal and protective German Shepherd. She is highly intelligent and easily trained, making her a great candidate for working or service roles. She is also great with children and other pets. Bella is a natural guard dog, and will fiercely protect her family and home. She is a powerful and confident dog who commands respect.',
    user_id: 1,
    species_id: 1,
    breed_id: 2,
  },
  {
    name: 'Charlie',
    age: 4,
    gender: 'male',
    color: 'white',
    description:
      'Charlie is a lazy and loving Bulldog. He is a relaxed and easy-going dog who is content to spend most of his day lounging around the house. He is a great companion for someone who wants a low-maintenance pet. He is also great with children and other pets. He has a gentle nature and a friendly personality. He is a playful and affectionate dog who loves to be cuddled.',
    user_id: 1,
    species_id: 1,
    breed_id: 3,
  },
  {
    name: 'Daisy',
    age: 1,
    gender: 'female',
    color: 'brown',
    description:
      'Daisy is an energetic and curious Beagle. She has a keen sense of smell and loves to explore the outdoors. She is an independent and determined dog who can be stubborn at times. She is great with children and other pets. She is a playful and affectionate dog who loves to be around people. She is a great companion for someone who wants an active and adventurous pet.',
    user_id: 1,
    species_id: 1,
    breed_id: 4,
  },
  {
    name: 'Lucy',
    age: 5,
    gender: 'female',
    color: 'white',
    description:
      'Lucy is an intelligent and elegant Poodle. She is highly trainable and excels in obedience and agility training. She is a great companion for someone who wants a pet that can participate in dog sports or competitions. She is also great with children and other pets. She has a sweet and loving personality. She is a playful and affectionate dog who loves to be around people.',
    user_id: 1,
    species_id: 1,
    breed_id: 5,
  },
];

const catsData = [
  {
    name: 'Whiskers',
    age: 3,
    gender: 'male',
    color: 'black',
    description:
      'Whiskers is a playful and affectionate 3-year-old male Siamese cat. He has a sleek black coat and piercing blue eyes. He loves to play with toys and cuddle with his owners. He is also very curious and loves to explore his surroundings. He is a great addition to any family.',
    user_id: 1,
    species_id: 2,
    breed_id: 11,
  },
  {
    name: 'Fluffy',
    age: 2,
    gender: 'female',
    color: 'gray',
    description:
      'Fluffy is a 2-year-old female Maine Coon cat. She has a soft gray coat and green eyes. She is a gentle and loving cat, who loves to be around people. She is very social and loves to play. She is also very intelligent and can be easily trained. She is a perfect companion for a family or an individual.',
    user_id: 1,
    species_id: 2,
    breed_id: 12,
  },
  {
    name: 'Simba',
    age: 5,
    gender: 'male',
    color: 'orange',
    description:
      'Simba is a 5-year-old male Persian cat. He has a long and fluffy orange coat, and big round eyes. He is a very sweet and affectionate cat, who loves to be petted and cuddled. He is also very playful and loves to chase toys. He is a great companion for a family or an individual.',
    user_id: 1,
    species_id: 2,
    breed_id: 13,
  },
  {
    name: 'Nala',
    age: 4,
    gender: 'female',
    color: 'brown',
    description:
      'Nala is a 4-year-old female Sphynx cat. She has a wrinkled skin and big ears. She is a very affectionate cat, who loves to be around people. She is also very active and loves to play. She is very intelligent and can be easily trained. She is a perfect companion for a family or an individual.',
    user_id: 1,
    species_id: 2,
    breed_id: 14,
  },
  {
    name: 'Mittens',
    age: 1,
    gender: 'female',
    color: 'white',
    description:
      'Mittens is a 1-year-old female British Shorthair cat. She has a short and fluffy white coat and big round eyes. She is a very gentle and loving cat, who loves to be around people. She is also very social and loves to play. She is a great addition to any family.',
    user_id: 1,
    species_id: 2,
    breed_id: 15,
  },
];

const birdsData = [
  {
    name: 'African Grey Parrot',
    age: 3,
    gender: 'Female',
    color: 'Grey',
    description:
      'The African Grey Parrot is a highly intelligent bird known for its ability to mimic human speech and learn a wide variety of words and phrases. They make great pets for those who are willing to invest time and energy into training and interacting with them. They are also known for their playful and sociable personalities.',
    user_id: 1,
    species_id: 3,
    breed_id: 20,
  },
  {
    name: 'Cockatiel',
    age: 5,
    gender: 'Male',
    color: 'Grey and Yellow',
    description:
      'The Cockatiel is a small, friendly bird that is known for its easy-going personality and affectionate nature. They are great for first-time bird owners, as they are relatively low-maintenance and easy to care for. They also make great companions for people of all ages, as they are playful, curious, and enjoy interacting with their owners.',
    user_id: 1,
    species_id: 3,
    breed_id: 21,
  },
  {
    name: 'Budgerigar',
    age: 2,
    gender: 'Female',
    color: 'Green',
    description:
      'The Budgerigar, also known as the Budgie, is a small, colorful parrot that is native to Australia. They are known for their playful, energetic personalities and their ability to learn a wide variety of words and phrases. They are also relatively easy to care for and make great pets for people of all ages.',
    user_id: 1,
    species_id: 3,
    breed_id: 22,
  },
  {
    name: 'Amazon Parrot',
    age: 8,
    gender: 'Male',
    color: 'Green',
    description:
      'The Amazon Parrot is a large, intelligent bird that is known for its playful, curious personality and its ability to mimic human speech. They are also known for their strong bond with their owners and can be very affectionate. However, they can also be quite demanding and require a lot of time and attention from their owners.',
    user_id: 1,
    species_id: 3,
    breed_id: 23,
  },
  {
    name: 'Canary',
    age: 1,
    gender: 'Female',
    color: 'Yellow',
    description:
      'The Canary is a small, brightly colored songbird that is known for its cheerful and melodious singing. They are also relatively easy to care for and make great pets for people of all ages. They are also known for their playful and sociable personalities.',
    user_id: 1,
    species_id: 3,
    breed_id: 24,
  },
  {
    name: 'Finch',
    age: 2,
    gender: 'Male',
    color: 'Red',
    description:
      'The Finch is a small, brightly colored bird that is known for its cheerful and melodious singing. They are also relatively easy to care for and make great pets for people of all ages. They are also known for their playful and sociable personalities.',
    user_id: 1,
    species_id: 3,
    breed_id: 25,
  },
];
const petsData = {
  dogs: dogsData,
  cats: catsData,
  birds: birdsData,
};

const petImages = [
  {
    pet_id: 1,
    is_main: 1,
    image: 'd_1_1.jpg',
  },
  {
    pet_id: 1,
    is_main: 0,
    image: 'd_1_2.jpg',
  },
  {
    pet_id: 1,
    is_main: 0,
    image: 'd_1_3.jpg',
  },
  {
    pet_id: 2,
    is_main: 1,
    image: 'd_2_1.jpg',
  },
  {
    pet_id: 2,
    is_main: 0,
    image: 'd_2_2.jpg',
  },
  {
    pet_id: 2,
    is_main: 0,
    image: 'd_2_3.jpg',
  },
  {
    pet_id: 3,
    is_main: 1,
    image: 'd_3_1.jpg',
  },
  {
    pet_id: 3,
    is_main: 0,
    image: 'd_3_2.jpg',
  },
  {
    pet_id: 3,
    is_main: 0,
    image: 'd_3_3.jpg',
  },
  {
    pet_id: 4,
    is_main: 1,
    image: 'd_4_1.jpg',
  },
  {
    pet_id: 4,
    is_main: 0,
    image: 'd_4_2.jpg',
  },
  {
    pet_id: 4,
    is_main: 0,
    image: 'd_4_3.jpg',
  },
  {
    pet_id: 5,
    is_main: 1,
    image: 'd_5_1.jpg',
  },
  {
    pet_id: 5,
    is_main: 0,
    image: 'd_5_2.jpg',
  },
  {
    pet_id: 5,
    is_main: 0,
    image: 'd_5_3.jpg',
  },
  {
    pet_id: 6,
    is_main: 1,
    image: 'c_1_1.jpg',
  },
  {
    pet_id: 6,
    is_main: 0,
    image: 'c_1_2.jpg',
  },
  {
    pet_id: 6,
    is_main: 0,
    image: 'c_1_3.jpg',
  },
  {
    pet_id: 7,
    is_main: 1,
    image: 'c_2_1.jpg',
  },
  {
    pet_id: 7,
    is_main: 0,
    image: 'c_2_2.jpg',
  },
  {
    pet_id: 7,
    is_main: 0,
    image: 'c_2_3.jpg',
  },
  {
    pet_id: 8,
    is_main: 1,
    image: 'c_3_1.jpg',
  },
  {
    pet_id: 8,
    is_main: 0,
    image: 'c_3_2.jpg',
  },
  {
    pet_id: 8,
    is_main: 0,
    image: 'c_3_3.jpg',
  },
  {
    pet_id: 9,
    is_main: 1,
    image: 'c_4_1.jpg',
  },
  {
    pet_id: 9,
    is_main: 0,
    image: 'c_4_2.jpg',
  },
  {
    pet_id: 9,
    is_main: 0,
    image: 'c_4_3.jpg',
  },
  {
    pet_id: 10,
    is_main: 1,
    image: 'c_5_1.jpg',
  },
  {
    pet_id: 10,
    is_main: 0,
    image: 'c_5_2.jpg',
  },
  {
    pet_id: 10,
    is_main: 0,
    image: 'c_5_3.jpg',
  },
  {
    pet_id: 11,
    is_main: 1,
    image: 'b_1_1.jpg',
  },
  {
    pet_id: 11,
    is_main: 0,
    image: 'b_1_2.jpg',
  },
  {
    pet_id: 11,
    is_main: 0,
    image: 'b_1_3.jpg',
  },
  {
    pet_id: 12,
    is_main: 1,
    image: 'b_2_1.jpg',
  },
  {
    pet_id: 12,
    is_main: 0,
    image: 'b_2_2.jpg',
  },
  {
    pet_id: 12,
    is_main: 0,
    image: 'b_2_3.jpg',
  },
  {
    pet_id: 13,
    is_main: 1,
    image: 'b_3_1.jpg',
  },
  {
    pet_id: 13,
    is_main: 0,
    image: 'b_3_2.jpg',
  },
  {
    pet_id: 13,
    is_main: 0,
    image: 'b_3_3.jpg',
  },
  {
    pet_id: 14,
    is_main: 1,
    image: 'b_4_1.jpg',
  },
  {
    pet_id: 14,
    is_main: 0,
    image: 'b_4_2.jpg',
  },
  {
    pet_id: 14,
    is_main: 0,
    image: 'b_4_3.jpg',
  },
  {
    pet_id: 15,
    is_main: 1,
    image: 'b_5_1.jpg',
  },
  {
    pet_id: 15,
    is_main: 0,
    image: 'b_5_2.jpg',
  },
  {
    pet_id: 15,
    is_main: 0,
    image: 'b_5_3.jpg',
  },
  {
    pet_id: 16,
    is_main: 1,
    image: 'b_5_1.jpg',
  },
  {
    pet_id: 16,
    is_main: 0,
    image: 'b_5_2.jpg',
  },
  {
    pet_id: 16,
    is_main: 0,
    image: 'b_5_3.jpg',
  },
];
module.exports = {
  users,
  quotes,
  blogs,
  blogUsers,
  species,
  speciesBreeds,
  petsData,
  petImages,
};
