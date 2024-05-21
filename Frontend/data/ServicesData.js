const data = {
  tours: [
    {
      title: "Desert Adventure Tour",
      overview: "Experience the vast Sahara Desert on camelback.",
      included: ["Camel ride", "Meals", "Guide services"],
      notIncluded: ["Personal expenses", "Tips"],
      itinerary: [
        {
          day: 1,
          stops: [
            {
              title: "Camel Trek Start",
              description: "Begin your camel trek into the desert.",
            },
            {
              title: "Lunch at Oasis",
              description: "Enjoy a traditional lunch at an oasis.",
            },
          ],
        },
        {
          day: 2,
          stops: [
            {
              title: "Sunrise Dune Trek",
              description:
                "Experience the breathtaking sunrise over the dunes.",
            },
            {
              title: "Return to Camp",
              description: "Head back to camp for breakfast and departure.",
            },
          ],
        },
      ],
      additionalInfo: [
        "Bring sunscreen and hat",
        "Comfortable clothing recommended",
      ],
      cancellationPolicy: [
        "Free cancellation up to 48 hours before the tour",
        "50% refund for cancellations within 48 hours",
      ],
      photos: ["photolink1", "photolink2"],
      reviews: [
        {
          author: "John Doe",
          date: "2024-05-01",
          review: "Amazing experience!",
          rateScore: 5,
        },
        {
          author: "Jane Smith",
          date: "2024-04-20",
          review: "Highly recommended!",
          rateScore: 4.5,
        },
      ],
      price: "$300",
      bestSeller: true,
      certificateOfExcellence: true,
      location: "Sahara Desert",
      category: "Adventure",
    },
    {
      title: "City Sightseeing Tour",
      overview: "Explore the historical landmarks of Marrakech.",
      included: ["Guided tour", "Entrance fees"],
      notIncluded: ["Meals", "Transportation to meeting point"],
      itinerary: [
        {
          day: 1,
          stops: [
            {
              title: "Bahia Palace",
              description: "Visit the stunning Bahia Palace.",
            },
            {
              title: "Jardin Majorelle",
              description: "Explore the vibrant Jardin Majorelle.",
            },
          ],
        },
      ],
      additionalInfo: ["Tour duration: 4 hours"],
      cancellationPolicy: [
        "Free cancellation up to 24 hours before the tour",
        "No refund for late cancellations",
      ],
      photos: ["photolink3", "photolink4"],
      reviews: [
        {
          author: "Emily Johnson",
          date: "2024-04-15",
          review: "Fantastic tour!",
          rateScore: 4.8,
        },
      ],
      price: "$150",
      bestSeller: false,
      certificateOfExcellence: false,
      location: "Marrakech",
      category: "Sightseeing",
    },
  ],
  accommodation: [
    {
      title: "Sahara Oasis Resort",
      location: "Merzouga, Sahara Desert",
      overview: "Experience luxury in the heart of the desert.",
      description: "Indulge in a tranquil stay amidst breathtaking dunes.",
      facilities: ["Free WiFi", "Spa", "Airport shuttle", "Free parking"],
      availability: "Available",
      roomTypes: [
        {
          type: "Double",
          category: "Luxury",
          maxGuests: 2,
        },
        {
          type: "Family",
          category: "Standard",
          maxGuests: 4,
        },
      ],
      guestReviews: [
        {
          score: 4.5,
          author: "John Doe",
          review: "A wonderful experience!",
        },
        {
          score: 4.2,
          author: "Jane Smith",
          review: "Great stay with excellent service.",
        },
      ],
      houseRules: {
        checkIn: "From 3:00 PM to 12:00 AM",
        checkOut: "From 9:00 AM to 12:00 PM",
        ageRestriction: "No age restriction",
        petsAllowed: true,
        nearbyPlaces: ["Local restaurants", "Desert excursions"],
      },
      photos: ["ph1", "ph2", "ph3"],
    },
    {
      title: "Atlas Mountain Lodge",
      location: "Imlil, Atlas Mountains",
      overview: "Experience nature at its best in the Atlas Mountains.",
      description:
        "Enjoy a cozy retreat surrounded by stunning mountain views.",
      facilities: ["Free WiFi", "Restaurant", "Guided tours", "Parking"],
      availability: "Available",
      roomTypes: [
        {
          type: "Single",
          category: "Standard",
          maxGuests: 1,
        },
        {
          type: "Triple",
          category: "Luxury",
          maxGuests: 3,
        },
      ],
      guestReviews: [
        {
          score: 4.8,
          author: "Emily Johnson",
          review: "An amazing stay with breathtaking views.",
        },
      ],
      houseRules: {
        checkIn: "From 2:00 PM to 11:00 PM",
        checkOut: "From 8:00 AM to 12:00 PM",
        ageRestriction: "Children must be accompanied by adults",
        petsAllowed: false,
        nearbyPlaces: ["Hiking trails", "Local markets"],
      },
      photos: ["ph4", "ph5", "ph6"],
    },
  ],
  carRentals: [
    {
      carType: "SUV",
      brand: "Toyota",
      seats: 5,
      pricePerDay: "$80",
      includesInsurance: true,
      hasGPS: true,
      gear: "Automatic",
    },
    {
      carType: "Sedan",
      brand: "Nissan",
      seats: 4,
      pricePerDay: "$60",
      includesInsurance: true,
      hasGPS: false,
      gear: "Manual",
    },
  ],
  experiences: [
    {
      title: "Berber Cultural Immersion",
      location: "Atlas Mountains",
      overview:
        "Engage in traditional Berber activities and learn about their customs.",
      description:
        "Experience a deep dive into Berber culture with authentic interactions.",
      photos: ["ph1", "ph2", "ph3", "ph4"],
      included: ["Guided tours", "Traditional meal", "Cultural workshops"],
      notIncluded: ["Transportation to meeting point", "Personal expenses"],
      additionalInfo: [
        "Comfortable clothing recommended",
        "Moderate physical activity involved",
      ],
      cancellationPolicy: [
        "Free cancellation up to 24 hours before",
        "50% refund for late cancellations",
      ],
      reviews: [
        {
          score: 4.7,
          rate: "Excellent",
          author: "John Doe",
          dateTime: "2024-05-10T14:30:00",
          reviewTitle: "Authentic Experience",
          reviewDescription: "Highly recommend this immersive tour!",
        },
        {
          score: 4.5,
          rate: "Great",
          author: "Jane Smith",
          dateTime: "2024-05-12T10:45:00",
          reviewTitle: "Insightful Journey",
          reviewDescription: "Loved learning about Berber traditions.",
        },
      ],
      certificateOfExcellence: true,
      isBestSeller: true,
    },
    {
      title: "Cooking Class with a Local Chef",
      location: "Marrakech",
      overview:
        "Learn to prepare authentic Moroccan dishes from a skilled chef.",
      description:
        "Join a hands-on cooking session and savor the flavors of Morocco.",
      photos: ["ph5", "ph6", "ph7", "ph8"],
      included: ["Cooking materials", "Ingredients", "Tasting session"],
      notIncluded: ["Transportation to cooking venue", "Personal expenses"],
      additionalInfo: [
        "Vegetarian options available",
        "Inform about dietary restrictions",
      ],
      cancellationPolicy: [
        "Free cancellation up to 48 hours before",
        "No refund for late cancellations",
      ],
      reviews: [
        {
          score: 4.8,
          rate: "Excellent",
          author: "Emily Johnson",
          dateTime: "2024-05-08T16:00:00",
          reviewTitle: "Delicious Experience",
          reviewDescription: "Fantastic cooking class!",
        },
      ],
      certificateOfExcellence: false,
      isBestSeller: false,
    },
  ],
};

// Function to log all tours and their respective days with properties
function logTours(data) {
  data.tours.forEach((tour) => {
    console.log(`Tour: ${tour.title}`);
    tour.itinerary.days.forEach((day) => {
      console.log(`  ${day.day}:`);
      day.stops.forEach((stop) => {
        console.log(`    Stop: ${stop.title}`);
        console.log(`    Description: ${stop.description}`);
      });
    });
  });
}

// Calling the function
logTours(data);
