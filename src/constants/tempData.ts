

export const invitation = {
  image:
    "https://img.freepik.com/free-photo/view-mountain-with-dreamy-aesthetic_23-2151700214.jpg?t=st=1755340353~exp=1755343953~hmac=f90ade31c067e3a7ca20b211254cfe3751fb3ed6b9ed4824de099ae08f1500ed&w=1480",
  title: "Sumit’s Stay Invitation",
  description:
    "Experience cozy mountain living with home-cooked meals by the Rawat family in Manali.",
  rating: 4.8,
  reviews: 120,
  category: "Local Home Stay",
  location: { address: "123, Rajpur Road, Near IT Park, Dehradun" },
  amenities: ["AC", "Wi-Fi", "Washing Machine", "Electricity"],
  beds: "3 (1d + 2s)",
  maxGuests: 4,
  bedrooms: 2,
  about: "Stay with the Rawat family in a traditional Himachali wooden home...",
  host: {
    name: "Sumit Rawat",
    avatar:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671145.jpg",
    rating: 4.8,
    reviews: 120,
    hostingSince: "last 3 months",
  },
  offerings: [
    "Private Room with View",
    "Morning Chai & Local Breakfast (Optional ₹100)",
    "Home-cooked Dinner (₹200)",
    "Guided Walk to Waterfall (Optional)",
    "Bonfire Experience (₹150 per guest)",
  ],
  rules: [
    "No loud music after 10 PM",
    "No smoking inside rooms",
    "Check-in: 12:00 PM",
    "Check-out: 11:00 AM",
    "Respect local customs",
  ],
  cancellation: [
    "Full refund before 48 hours of check-in",
    "50% refund within 24 hours",
    "No refund if canceled on the same day",
  ],
  map: "",
  price: 2080,
  dates: { checkIn: "Wed, 4 Sep 25", checkOut: "Sat, 7 Sep 25" },
};


export const hosts = [
  {
    title: "3BHK Villa with Mountain View",
    address: "123, Rajpur Road, Near IT Park, Dehradun",
    rating: "4.8/5 (120)",
    price: 900,
    hostedBy: "Abhinav",
    imageUrl:
      "https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?w=740",
  },
  {
    title: "Cozy Studio in City Center",
    address: "45, Paltan Bazar, Dehradun",
    rating: "4.6/5 (90)",
    price: 650,
    imageUrl:
      "https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683419.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
  },
  {
    title: "Luxury Treehouse Escape",
    address: "Forest Retreat, Sahastradhara Road",
    rating: "4.9/5 (75)",
    price: 1200,
    imageUrl:
      "https://img.freepik.com/free-photo/luxury-architecture-exterior-design_23-2151920954.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
  },
  {
    title: "Budget Hostel for Backpackers",
    address: "6, ISBT Road, Near Bus Stand",
    rating: "4.3/5 (210)",
    price: 300,
    imageUrl:
      "https://img.freepik.com/free-photo/luxury-modern-style-bedroom-interior-hotel-bedroom-generative-ai-illustration_1258-151610.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
  },
  {
    title: "Riverside Cottage Retreat",
    address: "Rishikesh Highway, near Tapovan",
    rating: "4.7/5 (130)",
    price: 850,
    imageUrl:
      "https://img.freepik.com/free-photo/wooden-cottage-snowy-forest-night_181624-49557.jpg?w=740",
  },
  {
    title: "Mountain Cabin with Bonfire",
    address: "Mussoorie Road, Dehradun",
    rating: "4.5/5 (98)",
    price: 750,
    imageUrl:
      "https://img.freepik.com/free-photo/small-cozy-cabin-wooden-deck-winter-evening-generative-ai_188544-12587.jpg?w=740",
  },
  {
    title: "Modern Apartment with Workspace",
    address: "IT Park Road, Dehradun",
    rating: "4.6/5 (102)",
    price: 700,
    imageUrl:
      "https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263520.jpg?uid=R93375402&ga=GA1.1.2066988049.1747821106&semt=ais_hybrid&w=740",
  },
];

export const packages = [
  {
    title: "Ram's Invitation",
    address: "Aamwala, Rajpur Road, Dehradun",
    rating: "4.9/5 (203)",
    price: 1200,
    hostedBy: "Ram",
    guests: 4,
    days: 2,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Rishi's Invitation",
    address: "Mussoorie Road, Clement Town, Dehradun",
    rating: "4.7/5 (178)",
    price: 950,
    hostedBy: "Rishi",
    guests: 3,
    days: 1,
    imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
  },

  {
    title: "Meera's Cozy Stay",
    address: "Jakhan, Dehradun",
    rating: "4.6/5 (140)",
    price: 1100,
    hostedBy: "Meera",
    guests: 2,
    days: 2,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
  },
  {
    title: "Karan's Nature Retreat",
    address: "Maldevta, Forest Road, Dehradun",
    rating: "4.8/5 (210)",
    price: 1800,
    hostedBy: "Karan",
    guests: 6,
    days: 2,
    imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
];

export const indianStates = {
  Uttarakhand: ["Mussoorie", "Rishikesh", "Nainital", "Auli", "Dehradun"],
  "Himachal Pradesh": [
    "Manali",
    "Shimla",
    "Dharamshala",
    "Kasol",
    "Spiti Valley",
  ],
  Goa: ["Calangute", "Baga Beach", "Panaji", "Anjuna", "Palolem"],
  Rajasthan: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur", "Pushkar"],
  Kerala: ["Munnar", "Alleppey", "Kochi", "Wayanad", "Kovalam"],
  Maharashtra: ["Lonavala", "Mahabaleshwar", "Mumbai", "Pune", "Nashik"],
  "Tamil Nadu": ["Ooty", "Kodaikanal", "Chennai", "Mahabalipuram", "Madurai"],
  Karnataka: ["Coorg", "Chikmagalur", "Bangalore", "Gokarna", "Hampi"],
  Sikkim: ["Gangtok", "Lachung", "Pelling", "Namchi", "Tsomgo Lake"],
  "West Bengal": ["Darjeeling", "Kolkata", "Sundarbans", "Kalimpong", "Digha"],
};
