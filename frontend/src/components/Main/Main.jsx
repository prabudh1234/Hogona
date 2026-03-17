import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../Assets/ktm.jpg";
import img1 from "../../Assets/patan.jpg";
import img2 from "../../Assets/taudaha.jpg";
import img3 from "../../Assets/godawari.jpg";
import img4 from "../../Assets/pashupatinath.jpg";
import img5 from "../../Assets/macchapuchre.jpg";
import img6 from "../../Assets/abc.jpg";
import img7 from "../../Assets/ebc.jpg";
import img8 from "../../Assets/Pokhara.jpg";
import img9 from "../../Assets/Kotilingeshwara.jpg";
import img10 from "../../Assets/Hampi.jpg";
import img11 from "../../Assets/Kerala_Houseboat.jpg";  // FIXED: Removed space
import img12 from "../../Assets/Bengaluru_Fort.jpg";    // FIXED: Removed space
import img13 from "../../Assets/Chikkamagaluru.jpg";
import img14 from "../../Assets/Mysore.jpg";
import img15 from "../../Assets/Murudeshwar.jpg";
import img16 from "../../Assets/udupi.jpg";
import img17 from "../../Assets/Munnar.jpg";
import img18 from "../../Assets/ladakh.jpg";
import pangong from "../../Assets/pangong.jpg";
import nubra from "../../Assets/nubra.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

// Export Data so it can be used in DestinationDetails and Packages
export const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Kathmandu Durbar Square",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Kathmandu Durbar Square, a UNESCO World Heritage Site, is one of three squares within Kathmandu Valley in Nepal. Durbar Square (durbar translates to \"palace\" or \"a court held by a prince\") is an important site for Buddhist and Hindu rituals, holy ceremonies, royal events, and kingly coronations.",
    duration: "1 Day",
    groupSize: "2-15 People",
    images: [img, img1, img2],
    itinerary: [
      {
        day: 1,
        title: "Explore Kathmandu Durbar Square",
        morning: "Start your day with a guided tour of the ancient palaces and temples. Visit Hanuman Dhoka, the old royal palace complex.",
        afternoon: "Explore Kumari Ghar (House of the Living Goddess), see traditional Newari architecture, and visit local craft shops.",
        evening: "Enjoy traditional Newari cuisine at a local restaurant. Evening photography session during golden hour.",
      }
    ],
    costBreakdown: {
      guideFee: 1500,
      entryFee: 1000,
      transportation: 1000,
      meals: 1000,
      miscellaneous: 500,
    },
    included: [
      "Professional tour guide",
      "Entry fees to monuments",
      "Traditional lunch",
      "Transportation within city"
    ],
    excluded: [
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance"
    ]
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "Patan Durbar Square",
    location: "Lalitpur",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Patan Durbar Square, a UNESCO World Heritage Site, is one of three squares within Kathmandu Valley in Nepal. Durbar Square (durbar translates to \"palace\" or \"a court held by a prince\") is an important site for Buddhist and Hindu rituals, holy ceremonies, royal events, and kingly coronations.",
    duration: "1 Day",
    groupSize: "2-15 People",
    images: [img1, img, img3],
    itinerary: [
      {
        day: 1,
        title: "Patan Heritage Walk",
        morning: "Visit Patan Museum and Krishna Mandir. Explore the ancient architecture and intricate wood carvings.",
        afternoon: "Walk through traditional Newari neighborhoods, visit local metalwork and handicraft workshops.",
        evening: "Sunset view from Patan Durbar Square, traditional dinner at a rooftop restaurant.",
      }
    ],
    costBreakdown: {
      guideFee: 1500,
      entryFee: 1000,
      transportation: 1000,
      meals: 1000,
      miscellaneous: 500,
    },
    included: [
      "Expert cultural guide",
      "Museum entry fees",
      "Traditional Newari lunch",
      "Local transportation"
    ],
    excluded: [
      "Shopping expenses",
      "Personal items",
      "Tips"
    ]
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: "Taudaha",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "3000",
    description:
      "The lake is believed to be a remnant pool of the huge lake that once existed where now the city of Kathmandu sits. According to mythology, a Buddhist mythical character Manjushree cut the hill in the valley's south, allowing the lake's water to drain off, thereby creating land that was duly occupied by people.",
    duration: "Half Day",
    groupSize: "2-20 People",
    images: [img2, img3, img4],
    itinerary: [
      {
        day: 1,
        title: "Taudaha Lake Nature Trip",
        morning: "Boat ride on Taudaha Lake, bird watching session. Learn about the mythology and local legends.",
        afternoon: "Picnic lunch by the lakeside, nature walk around the perimeter. Optional cycling.",
        evening: "Return to city with sunset views of the valley.",
      }
    ],
    costBreakdown: {
      guideFee: 800,
      boatRide: 500,
      transportation: 700,
      meals: 800,
      miscellaneous: 200,
    },
    included: [
      "Boat ride",
      "Nature guide",
      "Picnic lunch",
      "Round trip transportation"
    ],
    excluded: [
      "Bicycle rental (optional)",
      "Extra snacks",
      "Photography fees"
    ]
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: "Godawari",
    location: "Lalitpur",
    grade: "CULTURAL RELAX",
    fees: "3000",
    description:
      "Godawari is one of the popular hiking destinations in Nepal for its rich wildlife and splendid environment. Godawari is also famous for its botanical garden and Godawari temple (Kunda and navadhara). Mt. Phulchowki is located in Godawari which is the highest peak in Kathmandu valley.",
    duration: "1 Day",
    groupSize: "2-12 People",
    images: [img3, img2, img5],
    itinerary: [
      {
        day: 1,
        title: "Godawari Botanical Garden & Hiking",
        morning: "Visit Godawari Botanical Garden, explore diverse flora. Light hiking to nearby viewpoints.",
        afternoon: "Visit Godawari Temple, sacred kunda (pond). Lunch at local restaurant with valley views.",
        evening: "Optional short hike on Phulchowki trail. Return to Kathmandu.",
      }
    ],
    costBreakdown: {
      guideFee: 1000,
      entryFee: 500,
      transportation: 800,
      meals: 600,
      miscellaneous: 100,
    },
    included: [
      "Hiking guide",
      "Garden entry fee",
      "Lunch with local cuisine",
      "Private vehicle"
    ],
    excluded: [
      "Extra hiking gear",
      "Beverages",
      "Personal expenses"
    ]
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: "Pashupatinath Temple",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Pashupatinath Temple, place of worship in the Kathmandu Valley on the Baghmati River, on the eastern outskirts of the city of Kathmandu, that is the holiest site in Nepal. It is devoted to the Hindu god Shiva in his form as Pashupati, protector of animals.",
    duration: "Half Day",
    groupSize: "2-15 People",
    images: [img4, img, img1],
    itinerary: [
      {
        day: 1,
        title: "Spiritual Journey at Pashupatinath",
        morning: "Visit Pashupatinath Temple complex, witness morning prayers and rituals. Explore Arya Ghat cremation area (from respectful distance).",
        afternoon: "Visit nearby Guhyeshwari Temple, explore Sleshmantak Forest. Learn about Hindu traditions and Shiva worship.",
        evening: "Evening Aarti ceremony by the Bagmati River.",
      }
    ],
    costBreakdown: {
      guideFee: 1500,
      entryFee: 1500,
      transportation: 1000,
      meals: 800,
      miscellaneous: 200,
    },
    included: [
      "Religious site expert guide",
      "Temple entry fees",
      "Light refreshments",
      "Transportation"
    ],
    excluded: [
      "Donation/offerings (optional)",
      "Photography permits",
      "Personal items"
    ]
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: "Macchapuchre",
    location: "Gandaki",
    grade: "ADVENTURE TREK",
    fees: "6000",
    description:
      "Machapuchare is at the end of a long spur ridge, coming south out of the main backbone of the Annapurna massif, which forms the eastern boundary of the Annapurna Sanctuary. The peak is about 25 km (16 mi) north of Pokhara, the provincial capital of the Gandaki Province.",
    duration: "1 Day",
    groupSize: "2-10 People",
    images: [img5, img6, img8],
    itinerary: [
      {
        day: 1,
        title: "Macchapuchre Base Camp Day Trek",
        morning: "Early morning drive to trek starting point. Begin trek through rhododendron forests with mountain views.",
        afternoon: "Reach Macchapuchre Base Camp viewpoint. Packed lunch with panoramic Annapurna views.",
        evening: "Descend back to starting point. Drive to Pokhara.",
      }
    ],
    costBreakdown: {
      guideFee: 2000,
      permits: 1000,
      transportation: 1500,
      meals: 1000,
      miscellaneous: 500,
    },
    included: [
      "Trekking guide and porter",
      "All permits and fees",
      "Meals during trek",
      "Round trip transportation"
    ],
    excluded: [
      "Trekking gear rental",
      "Personal trekking equipment",
      "Travel insurance"
    ]
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: "Annapurna Base Camp",
    location: "Gandaki",
    grade: "ADVENTURE TREK",
    fees: "5000",
    description:
      "Annapurna is a mountain situated in the Annapurna mountain range of Gandaki Province, north-central Nepal. Mount Annapurna I is the tenth highest mountain in the world at 8,091 metres (26,545 ft).",
    duration: "7-10 Days",
    groupSize: "2-12 People",
    images: [img6, img5, img7],
    itinerary: [
      {
        day: 1,
        title: "Pokhara to Nayapul, Trek to Tikhedhunga",
        morning: "Drive from Pokhara to Nayapul (1.5 hours). Begin trek through terraced fields and traditional villages.",
        afternoon: "Lunch at Birethanti. Continue trek to Tikhedhunga.",
        evening: "Arrive at teahouse, rest and acclimatization. Dinner with group.",
      },
      {
        day: 2,
        title: "Tikhedhunga to Ghorepani",
        morning: "Climb stone steps to Ulleri village. Breakfast with mountain views.",
        afternoon: "Trek through rhododendron forest to Ghorepani.",
        evening: "Settle in teahouse. Explore the village.",
      }
    ],
    costBreakdown: {
      guideFee: 8000,
      porterFee: 7000,
      permits: 3000,
      accommodation: 15000,
      meals: 18000,
      transportation: 3000,
      insurance: 2000,
      miscellaneous: 2000,
    },
    included: [
      "Experienced trekking guide and porter",
      "All necessary permits (ACAP, TIMS)",
      "Teahouse accommodation",
      "Three meals a day during trek",
      "Round trip transportation",
      "Guide and porter insurance"
    ],
    excluded: [
      "International flights",
      "Nepal visa fees",
      "Travel insurance",
      "Personal trekking gear",
      "Beverages and snacks",
      "Tips for guide and porter",
      "Emergency evacuation"
    ]
  },
  {
    id: 8,
    imgSrc: img7,
    destTitle: "Everest Base Camp",
    location: "Lukla",
    grade: "EXTREME TREK",
    fees: "6900",
    description:
      "The base camps are rudimentary campsites at the base of Mount Everest that are used by mountain climbers during their ascent and descent. They are also visited by hikers. South Base Camp is used when climbing via the southeast ridge, while North Base Camp is used when climbing via the northeast ridge.",
    duration: "12-14 Days",
    groupSize: "2-10 People",
    images: [img7, img6, img5],
    itinerary: [
      {
        day: 1,
        title: "Fly to Lukla, Trek to Phakding",
        morning: "Scenic flight from Kathmandu to Lukla (2,840m). Meet porter and guide team.",
        afternoon: "Begin trek to Phakding through pine forests along Dudh Koshi river.",
        evening: "First night in Sherpa teahouse.",
      }
    ],
    costBreakdown: {
      flightLukla: 15000,
      guideFee: 12000,
      porterFee: 10000,
      permits: 5000,
      accommodation: 20000,
      meals: 25000,
      insurance: 3000,
      emergency: 2000,
      miscellaneous: 3900,
    },
    included: [
      "Kathmandu-Lukla-Kathmandu flights",
      "Experienced EBC trekking guide",
      "Porter service (1 porter for 2 trekkers)",
      "All permits (Sagarmatha Park, TIMS)",
      "Teahouse accommodation",
      "Three meals daily during trek",
      "Guide and porter insurance and equipment",
      "First aid kit"
    ],
    excluded: [
      "International airfare",
      "Nepal entry visa",
      "Travel and rescue insurance",
      "Personal trekking equipment",
      "Extra beverages and snacks",
      "WiFi and battery charging",
      "Hot showers",
      "Tips for guide and porter",
      "Emergency helicopter evacuation"
    ]
  },
  {
    id: 9,
    imgSrc: img8,
    destTitle: "Pokhara",
    location: "Kaski",
    grade: "LEISURE RELAX",
    fees: "5999",
    description:
      "Pokhara's spellbinding beauty has been the subject of many travel writers. Its pristine air, the spectacular backdrop of the snowy peaks of the Annapurna Range and the serene Phewa, Begnas and Rupa Lakes, makes this destination 'the Jewel of the Himalaya'.",
    duration: "2-3 Days",
    groupSize: "2-20 People",
    images: [img8, img5, img6],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Phewa Lake Activities",
        morning: "Arrive in Pokhara, check into lakeside hotel.",
        afternoon: "Boat ride on Phewa Lake, visit Tal Barahi Temple. Explore Lakeside market.",
        evening: "Sunset from World Peace Pagoda. Dinner at lakeside restaurant.",
      }
    ],
    costBreakdown: {
      accommodation: 3000,
      transportation: 1000,
      activities: 1500,
      meals: 2000,
      guideFee: 800,
      miscellaneous: 699,
    },
    included: [
      "2 nights hotel accommodation",
      "Daily breakfast",
      "Phewa Lake boat ride",
      "Sarangkot sunrise tour",
      "Local guide",
      "All transportation"
    ],
    excluded: [
      "Lunch and dinner",
      "Paragliding (NPR 8000-12000)",
      "Zip-lining fees",
      "Museum entry fees",
      "Personal expenses",
      "Adventure sports"
    ]
  },
  {
    id: 10,
    imgSrc: img9,
    destTitle: "Kotilingeshwara Temple",
    location: "Kolar",
    grade: "SPIRITUAL TOUR",
    fees: "2999",
    description:
      "Kotilingeshwara is famous for housing millions of Shiva Lingas, including one of the largest Shiva Lingas in the world. It is a major pilgrimage destination in Karnataka, attracting devotees from across India seeking spiritual blessings.",
    duration: "1 Day",
    groupSize: "2-25 People",
    images: [img9, img4, img14],
    itinerary: [
      {
        day: 1,
        title: "Divine Darshan at Kotilingeshwara",
        morning: "Early morning departure from Bangalore. Arrive at Kotilingeshwara Temple, witness the magnificent 108-feet tall Shiva Linga.",
        afternoon: "Explore the temple complex with millions of small Shiva Lingas. Participate in special puja and aarti. Traditional vegetarian lunch.",
        evening: "Visit nearby Kolar Gold Fields Museum. Return to Bangalore with sunset views.",
      }
    ],
    costBreakdown: {
      transportation: 1200,
      guideFee: 600,
      entryFee: 200,
      meals: 700,
      miscellaneous: 299,
    },
    included: [
      "Round trip AC transportation",
      "Temple guide",
      "Entry and puja fees",
      "Traditional lunch",
      "Bottled water"
    ],
    excluded: [
      "Personal offerings to temple",
      "Photography fees",
      "Shopping expenses",
      "Extra snacks"
    ]
  },
  {
    id: 11,
    imgSrc: img10,
    destTitle: "Hampi",
    location: "Karnataka",
    grade: "HERITAGE TOUR",
    fees: "4999",
    description:
      "Hampi, a UNESCO World Heritage Site, is known for its ancient temples, ruins, and stunning landscapes from the Vijayanagara Empire. The archaeological site spans over 4,100 hectares and contains more than 1,600 surviving monuments.",
    duration: "2 Days",
    groupSize: "2-15 People",
    images: [img10, img12, img14],
    itinerary: [
      {
        day: 1,
        title: "Sacred & Royal Hampi",
        morning: "Depart early from Bangalore. Visit Virupaksha Temple, one of the oldest functioning temples. Explore Hemakuta Hill for panoramic views.",
        afternoon: "Visit Vittala Temple Complex with the famous Stone Chariot. Explore the musical pillars and intricate carvings. Lunch at local restaurant.",
        evening: "Watch sunset from Matanga Hill. Check into heritage hotel. Dinner with traditional Karnataka cuisine.",
      }
    ],
    costBreakdown: {
      transportation: 1500,
      accommodation: 1200,
      guideFee: 800,
      entryFees: 500,
      meals: 800,
      miscellaneous: 199,
    },
    included: [
      "AC vehicle for entire trip",
      "1 night heritage hotel stay",
      "Expert archaeologist guide",
      "All monument entry fees",
      "Breakfast and 2 lunches",
      "Coracle boat ride"
    ],
    excluded: [
      "Dinner on Day 1",
      "Personal expenses",
      "Camera fees at monuments",
      "Tips for guide and driver"
    ]
  },
  {
    id: 12,
    imgSrc: img11,
    destTitle: "Kerala House Boat",
    location: "Alappuzha",
    grade: "NATURE RELAX",
    fees: "8999",
    description:
      "Experience the peaceful backwaters of Kerala on a traditional houseboat with scenic canals, coconut trees, and village life. Cruise through the serene waterways of Alleppey, known as the Venice of the East, and witness authentic Kerala lifestyle.",
    duration: "2 Days / 1 Night",
    groupSize: "2-8 People",
    images: [img11, img17, img13],
    itinerary: [
      {
        day: 1,
        title: "Backwater Cruise Begins",
        morning: "Pick up from Cochin. Drive to Alleppey boat jetty. Board your private houseboat around noon. Welcome drink and briefing.",
        afternoon: "Cruise through narrow canals and Vembanad Lake. Watch village life, paddy fields, and coconut groves. Traditional Kerala lunch on board.",
        evening: "Sunset cruise with tea and snacks. Anchor for the night in peaceful backwaters. Authentic Kerala dinner with fresh catch of the day.",
      }
    ],
    costBreakdown: {
      houseboatRental: 6000,
      meals: 1500,
      transportation: 800,
      guideFee: 400,
      miscellaneous: 299,
    },
    included: [
      "Private AC houseboat with bedroom",
      "All meals (lunch, dinner, breakfast)",
      "Houseboat crew and chef",
      "Pick up and drop from Cochin",
      "Village walk guide",
      "Welcome drinks and refreshments"
    ],
    excluded: [
      "Alcoholic beverages",
      "Personal expenses",
      "Tips for crew",
      "Camera fees (if any)"
    ]
  },
  {
    id: 13,
    imgSrc: img12,
    destTitle: "Bengaluru Fort",
    location: "Bengaluru",
    grade: "HISTORICAL TOUR",
    fees: "1999",
    description:
      "Bangalore Fort is a historical landmark built by Kempegowda and later strengthened by Tipu Sultan, reflecting rich cultural heritage. This 16th-century fort showcases the evolution of Bangalore from a mud fort to a stone fortress.",
    duration: "Half Day",
    groupSize: "2-20 People",
    images: [img12, img14, img9],
    itinerary: [
      {
        day: 1,
        title: "Historical Bangalore Walk",
        morning: "Meet at Bangalore Fort. Guided tour of the fort ruins, Delhi Gate, and museum. Learn about Kempegowda and Tipu Sultan's history.",
        afternoon: "Visit nearby Tipu Sultan's Summer Palace. Explore Indo-Islamic architecture and beautiful teak pillars. Walk through KR Market area. Traditional South Indian lunch.",
        evening: "Visit Bull Temple and Bugle Rock. Return with historical insights.",
      }
    ],
    costBreakdown: {
      guideFee: 700,
      entryFees: 300,
      transportation: 500,
      meals: 400,
      miscellaneous: 99,
    },
    included: [
      "Professional history guide",
      "All entry fees",
      "Local transportation",
      "Traditional lunch",
      "Bottled water"
    ],
    excluded: [
      "Personal shopping",
      "Extra snacks",
      "Photography fees",
      "Tips"
    ]
  },
  {
    id: 14,
    imgSrc: img13,
    destTitle: "Chikkamagaluru",
    location: "Karnataka",
    grade: "HILL STATION",
    fees: "5999",
    description:
      "Chikkamagaluru is known for its coffee plantations, misty hills, trekking trails, and serene environment in the Western Ghats. It's the birthplace of coffee in India and offers breathtaking landscapes, waterfalls, and adventure activities.",
    duration: "2 Days / 1 Night",
    groupSize: "2-12 People",
    images: [img13, img17, img3],
    itinerary: [
      {
        day: 1,
        title: "Coffee Land Exploration",
        morning: "Depart from Bangalore early morning. En route visit Yagachi Dam. Arrive at Chikkamagaluru, check into coffee estate resort.",
        afternoon: "Coffee plantation walk with expert. Learn about coffee cultivation from bean to cup. Visit Hirekolale Lake for scenic views. Lunch at resort.",
        evening: "Trek to Mullayanagiri Peak (highest in Karnataka) or relaxing evening at resort. Bonfire and coffee tasting session. Dinner with local Malnad cuisine.",
      }
    ],
    costBreakdown: {
      accommodation: 2000,
      transportation: 1500,
      guideFee: 800,
      meals: 1200,
      activities: 300,
      miscellaneous: 199,
    },
    included: [
      "1 night stay in coffee estate resort",
      "All meals (1 lunch, 1 dinner, 1 breakfast, 1 lunch)",
      "Coffee plantation tour",
      "Trekking guide",
      "AC vehicle transportation",
      "All entry fees"
    ],
    excluded: [
      "Personal expenses",
      "Adventure activities (zip-lining, etc.)",
      "Camera fees",
      "Tips for guide and driver"
    ]
  },
  {
    id: 15,
    imgSrc: img14,
    destTitle: "Mysore Palace",
    location: "Mysuru",
    grade: "ROYAL HERITAGE",
    fees: "3999",
    description:
      "Mysore Palace is one of the most magnificent royal palaces in India, famous for its architecture and Dussehra celebrations. The palace is a stunning example of Indo-Saracenic architecture and serves as the official residence of the Wadiyar dynasty.",
    duration: "1 Day",
    groupSize: "2-20 People",
    images: [img14, img12, img9],
    itinerary: [
      {
        day: 1,
        title: "Royal Mysore Heritage Tour",
        morning: "Depart from Bangalore. Visit Mysore Palace - explore Durbar Hall, Kalyana Mantapa, and royal artifacts. Audio guide tour of the palace.",
        afternoon: "Visit Chamundi Hill and Chamundeshwari Temple. See Nandi Bull statue. Panoramic city views. Traditional Mysore lunch (Mysore Masala Dosa!).",
        evening: "Visit St. Philomena's Cathedral. Shopping at Devaraja Market for Mysore silk, sandalwood, and sweets. Return to Bangalore.",
      }
    ],
    costBreakdown: {
      transportation: 1500,
      guideFee: 700,
      entryFees: 500,
      meals: 800,
      miscellaneous: 499,
    },
    included: [
      "AC vehicle round trip",
      "Expert palace guide",
      "All entry fees",
      "Palace audio guide",
      "Traditional Mysore lunch",
      "Bottled water"
    ],
    excluded: [
      "Camera fees inside palace",
      "Shopping expenses",
      "Personal expenses",
      "Tips"
    ]
  },
  {
    id: 16,
    imgSrc: img15,
    destTitle: "Murudeshwara",
    location: "Karnataka",
    grade: "COASTAL SPIRITUAL",
    fees: "4999",
    description:
      "Murudeshwara is famous for the world's second-tallest Shiva statue, located along the Arabian Sea with breathtaking views. The 123-feet tall Lord Shiva statue overlooks the sea and is a major pilgrimage and tourist destination.",
    duration: "2 Days / 1 Night",
    groupSize: "2-15 People",
    images: [img15, img16, img11],
    itinerary: [
      {
        day: 1,
        title: "Coastal Temple & Beach",
        morning: "Depart from Bangalore/Mangalore. Arrive at Murudeshwara. Visit the magnificent Shiva Temple and 123-feet tall statue.",
        afternoon: "Explore the temple tower (20 stories). Elevator ride for panoramic Arabian Sea views. Visit the temple museum. Beach time at Murudeshwara Beach. Lunch at sea-view restaurant.",
        evening: "Watch sunset from beach. Check into beach resort. Evening aarti at temple. Dinner with coastal Karnataka seafood.",
      }
    ],
    costBreakdown: {
      accommodation: 1500,
      transportation: 1500,
      guideFee: 500,
      meals: 900,
      activities: 400,
      miscellaneous: 199,
    },
    included: [
      "1 night beach resort stay",
      "All meals (2 lunches, 1 dinner, 1 breakfast)",
      "Temple guide",
      "AC vehicle transportation",
      "Temple entry and tower lift",
      "Boat for temple island visit"
    ],
    excluded: [
      "Water sports activities",
      "Scuba diving and snorkeling",
      "Camera fees at temple",
      "Personal expenses",
      "Tips"
    ]
  },
  {
    id: 17,
    imgSrc: img16,
    destTitle: "Udupi",
    location: "Karnataka",
    grade: "CULTURAL COASTAL",
    fees: "3499",
    description:
      "Udupi is known for the Krishna Temple, beautiful beaches, and authentic South Indian vegetarian cuisine. This coastal town is a perfect blend of spirituality, culinary heritage, and pristine beaches along the Arabian Sea.",
    duration: "1 Day",
    groupSize: "2-18 People",
    images: [img16, img15, img11],
    itinerary: [
      {
        day: 1,
        title: "Temple Town & Beach Tour",
        morning: "Depart from Mangalore/Bangalore. Visit the famous Sri Krishna Temple. Witness unique puja through the window (Kanakana Kindi). Participate in temple rituals.",
        afternoon: "Traditional Udupi cuisine lunch at famous restaurant. Visit Malpe Beach. Take boat to St. Mary's Island - see unique hexagonal basaltic rock formations.",
        evening: "Sunset at Malpe Beach. Fresh seafood dinner. Visit local markets. Return journey.",
      }
    ],
    costBreakdown: {
      transportation: 1200,
      guideFee: 500,
      boatRide: 400,
      meals: 1000,
      entryFees: 200,
      miscellaneous: 199,
    },
    included: [
      "AC vehicle round trip",
      "Temple and cultural guide",
      "Boat ride to St. Mary's Island",
      "Traditional Udupi lunch",
      "Seafood dinner",
      "All entry fees"
    ],
    excluded: [
      "Water sports at beach",
      "Personal shopping",
      "Camera fees",
      "Tips for guide"
    ]
  },
  {
    id: 18,
    imgSrc: img17,
    destTitle: "Munnar",
    location: "Kerala",
    grade: "HILL STATION",
    fees: "6999",
    description:
      "Munnar is a breathtaking hill station known for tea plantations, misty valleys, waterfalls, and cool climate. Located at 1,600 meters above sea level, Munnar offers stunning landscapes, rare flora and fauna, and the famous Neelakurinji flowers.",
    duration: "2 Days / 1 Night",
    groupSize: "2-12 People",
    images: [img17, img11, img13],
    itinerary: [
      {
        day: 1,
        title: "Tea Gardens & Waterfalls",
        morning: "Depart from Cochin. Scenic drive through Western Ghats. En route visit Cheeyappara and Valara Waterfalls. Photo stops at view points.",
        afternoon: "Arrive in Munnar. Check into hill resort. Lunch at resort. Visit Tea Museum - learn about tea processing. Walk through endless tea plantations.",
        evening: "Visit Munnar town market. Evening at leisure. Bonfire at resort. Dinner with Kerala specialties.",
      },
      {
        day: 2,
        title: "Top Station & Wildlife",
        morning: "Early morning visit to Top Station (highest point) for sunrise and panoramic views. Breakfast at resort. Visit Eravikulam National Park - spot Nilgiri Tahr.",
        afternoon: "Visit Mattupetty Dam and Echo Point. Boating at Kundala Lake. Traditional Kerala lunch. Photo session at tea gardens.",
        evening: "Depart for Cochin with tea packets and memories.",
      }
    ],
    costBreakdown: {
      accommodation: 2500,
      transportation: 1800,
      guideFee: 600,
      entryFees: 700,
      meals: 1200,
      miscellaneous: 199,
    },
    included: [
      "1 night stay in hill resort",
      "All meals (2 lunches, 1 dinner, 1 breakfast)",
      "AC vehicle for entire trip",
      "Local guide for tea gardens",
      "Tea Museum entry",
      "National Park entry fee",
      "Boating at Kundala Lake"
    ],
    excluded: [
      "Jeep safari in National Park",
      "Personal expenses",
      "Camera fees at parks",
      "Additional adventure activities",
      "Tips for guide and driver"
    ]
  },
  {
  id: 19,
  imgSrc: ladakh,
  destTitle: "Ladakh",
  location: "Jammu & Kashmir",
  grade: "ADVENTURE",
  fees: "8999",
  description:
    "Ladakh is known for its breathtaking landscapes, high-altitude passes, monasteries, and adventure tourism.",
},

{
  id: 20,
  imgSrc: pangong,
  destTitle: "Pangong Lake",
  location: "Ladakh",
  grade: "NATURE",
  fees: "9999",
  description:
    "Pangong Lake is a stunning high-altitude lake famous for its changing colors and scenic beauty.",
},

{
  id: 21,
  imgSrc: nubra,
  destTitle: "Nubra Valley",
  location: "Ladakh",
  grade: "DESERT MOUNTAIN",
  fees: "9499",
  description:
    "Nubra Valley is known for sand dunes, double-humped camels, and beautiful monasteries.",
}
];

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleDetailsClick = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>₹ {fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button 
                    className="btn flex"
                    onClick={() => handleDetailsClick(id)}
                  >
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;