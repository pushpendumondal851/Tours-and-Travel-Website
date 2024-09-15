export const hotel1 = [
  {
    hotel_id: "1",
    name: "The Grand Palace Hotel",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1692876817/banbanjara/qw1v5wxlcsdfzh2bcx7k.jpg",
      "https://hotel.hardrock.com/goa/files/6021/HRH_Goa_Pool_9.jpeg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/5f/60/f45c22d94ee8f89acd0944eacae49fb7c4f50d7a539bb4b47f1655c728e4.jpeg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://media.licdn.com/dms/image/D4D12AQFZV-WCSGcQ8Q/article-cover_image-shrink_600_2000/0/1679880757083?e=2147483647&v=beta&t=oM75DL5PYsf9IbbfnFm1PTaEfT99ePWdmn3CUz_c0lw",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },
  {
    hotel_id: "2",
    name: "Hill View Resort",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.jpg?s=612x612&w=0&k=20&c=WjPBCZMD93SFckiZq7b3QdVhgpTkp19QLiuWANT4NuI=",
      "https://traveltradejournal.com/wp-content/uploads/2024/04/The-Grand-Dragon-Ladakh-Facade.jpg",
      "https://daahy6akrtcj2.cloudfront.net/resortsinbangalore.co.in/photos/274202398.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSUM2Qc4PJ2sQuLXTGeYyHlLd38TC_oCOQw&usqp=CAU",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "3",
    name: "Comfort Hotel Inn",
    location: {
      address: "789 Mountain Rd, Hilltown",
      city: "Hilltown",
      state: "Rajasthan",
      country: "India",
      zip_code: "34567",
    },
    description:
      "A cozy inn located in the mountains of Hilltown, Rajasthan, India, offering stunning views and outdoor activities.",
    rating: 4.3,
    images: [
      "https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.jpg?s=612x612&w=0&k=20&c=HvhbHZ8HH_lAjAAI2pmqL4mUipyyAwy31qp5jjKQTO0=",
      "https://assets.cntraveller.in/photos/60ba23dd0f3a5367ec9fe87a/master/w_1600%2Cc_limit/RAJ-Rambagh-Palace-Jaipur-1.jpg",
      "https://hotelnarainniwas.com/uploads/slider/2020-06-04-072635_16.jpg"
      
    ],
    amenities: [
      "Free Wi-Fi",
      "Hiking Trails",
      "Fireplace Lounge",
      "Restaurant",
    ],
    rooms: [
      {
        room_id: "301",
        type: "Standard Room",
        description:
          "Comfortable room with mountain view and essential amenities.",
        price_per_night: 120.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/152517665.jpg?k=cd153c5c297f91876437a0df0c3e067326aeaf2da9b23464114be07ca47c6e16&o=&hp=1",
          "https://www.indianexcursions.co/wp-content/uploads/2015/12/grand-presidential-suite-taj-rambagh-palace-luxury-hotel-jaipur-rajasthan.jpg",
        ],
      },
      {
        room_id: "302",
        type: "Suite",
        description:
          "Spacious suite with a king-sized bed, mountain view, and modern amenities.",
        price_per_night: 250.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://example.com/images/room302-1.jpg",
          "https://example.com/images/room302-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1122334455",
      email: "info@mountainviewinn.com",
      website: "https://www.mountainviewinn.com",
    },
  },
  {
    hotel_id: "4",
    name: "Yatra Dham",
    location: {
      address: "101 Center St, Metropolis",
      city: "Metropolis",
      state: "Kedarnath",
      country: "India",
      zip_code: "54321",
    },
    description:
      "A modern hotel located in the center of Metropolis, Kedarnath, India, ideal for business and leisure travelers.",
    rating: 4.7,
    images: [
      "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg",
      "https://www.tourmyindia.com/blog//wp-content/uploads/2022/03/Behl-Ashram-Kedarnath.jpg",
      "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/cover-for-Hotels-Near-Kedarnath_14th-Feb.jpg",
    ],
    amenities: [
      "Free Wi-Fi",
      "Business Center",
      "Fitness Center",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "401",
        type: "Deluxe Room",
        description:
          "Stylish room with a city view, work desk, and modern amenities.",
        price_per_night: 180.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://images.trvl-media.com/lodging/76000000/75750000/75742300/75742214/598d89ba_w.jpg",
          "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202105121720042806-2249-5c60968896ea11ecb7600a58a9feac02.jpg"
        ],
      },
      {
        room_id: "402",
        type: "Executive Suite",
        description:
          "Spacious suite with separate living area, city view, and premium amenities.",
        price_per_night: 350.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202105121720042806-2249-5c60968896ea11ecb7600a58a9feac02.jpg",
          "https://example.com/images/room402-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+6677889900",
      email: "info@citycenterhotel.com",
      website: "https://www.citycenterhotel.com",
    },
  },
  {
    hotel_id: "5",
    name: "Lakeview Lodge",
    location: {
      address: "202 Lake Rd, Lakeville",
      city: "Lakeville",
      state: "Andaman and Nicobar",
      country: "India",
      zip_code: "65432",
    },
    description:
      "A charming lodge located by the lake in Lakeville, Andaman and Nicobar, India, offering serene views and outdoor activities.",
    rating: 4.6,
    images: [
      "https://www.easemytrip.com/travel/img/andaman-and-nicobar.jpg",
      "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/3e/ac/a7df5acfab68bd63130c51199d3e019dba1f96358c951ee82c96d4a92869.jpeg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bb/ee/4a/seashell-havelock.jpg?w=1200&h=-1&s=1"
    ],
    amenities: ["Free Wi-Fi", "Boat Rentals", "Fishing", "Restaurant"],
    rooms: [
      {
        room_id: "501",
        type: "Standard Room",
        description: "Comfortable room with lake view and essential amenities.",
        price_per_night: 130.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://media.licdn.com/dms/image/C5612AQFUunOgd2GeKA/article-cover_image-shrink_600_2000/0/1520155772948?e=2147483647&v=beta&t=K8-RdYrBJK1qgVAPbEh4iyNOuZ1hL-as1PFM0fkiclk",
          "https://example.com/images/room501-2.jpg",
        ],
      },
      {
        room_id: "502",
        type: "Cabin",
        description:
          "Cozy cabin with a lake view, fireplace, and modern amenities.",
        price_per_night: 220.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://cf.bstatic.com/xdata/images/hotel/max1024x768/244913145.webp?k=457ff41a671e73c0ba11c4d59e38f79baf125f9a2d1d1b3740b1e992d345c451&o=",
          "https://example.com/images/room502-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+4455667788",
      email: "info@lakeviewlodge.com",
      website: "https://www.lakeviewlodge.com",
    },
  },
  {
    "hotel_id": "6",
    "name": "Oasis Resort",
    "location": {
      "address": "303 Desert Rd, Sand City",
      "city": "Sand City",
      "state": "Kashmir",
      "country": "India",
      "zip_code": "76543"
    },
    "description": "A unique resort located in the deserts of Kashmir, offering luxurious accommodations and desert adventures.",
    "rating": 4.9,
    "images": [
      "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-kashmir-in-winter.jpg",
      "https://seoimgak.mmtcdn.com/blog/sites/default/files/images/khyber_1.jpg",
      "https://media.easemytrip.com/media/Blog/India/636967251706354069/636967251706354069536xiC.jpg",
    ],
    "amenities": [
      "Free Wi-Fi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Desert Tours"
    ],
    "rooms": [
      {
        "room_id": "601",
        "type": "Standard Room",
        "description": "Elegant room with desert view and essential amenities.",
        "price_per_night": 160.0,
        "currency": "INR",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": true
          }
        ],
        "images": [
          "https://media-cdn.tripadvisor.com/media/photo-s/2b/2d/1e/66/caption.jpg",
          "https://example.com/images/room601-2.jpg"
        ]
      },
      {
        "room_id": "602",
        "type": "Suite",
        "description": "Luxurious suite with separate living area, desert view, and premium amenities.",
        "price_per_night": 280.0,
        "currency": "INR",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": false
          }
        ],
        "images": [
          "https://www.momondo.com/himg/2b/a5/e2/agoda-329111-129594224-296364.jpg",
          "https://example.com/images/room602-2.jpg"
        ]
      }
    ],
    "contact": {
      "phone": "+5566778899",
      "email": "info@desertoasisresort.com",
      "website": "https://www.desertoasisresort.com"
    }
  },
  {
    "hotel_id": "7",
    "name": "Forest Retreat",
    "location": {
      "address": "404 Forest Rd, Woodland",
      "city": "Woodland",
      "state": "Dooars",
      "country": "India",
      "zip_code": "87654"
    },
    "description": "A serene retreat located in the forests of Dooars, perfect for nature lovers and outdoor enthusiasts.",
    "rating": 4.4,
    "images": [
      "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Tea-Garden-in-Dooars-in-Summer-Morning.jpg",
      "https://res.cloudinary.com/fusionstays/image/upload/c_fill,e_sharpen:100,q_auto,f_auto,fl_progressive,w_750,h_500/v1662312350/nsrf6bkypevx0cualxzd.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6e/47/7b/rainforest-dooars.jpg?w=700&h=-1&s=1"
    ],
    "amenities": [
      "Free Wi-Fi",
      "Hiking Trails",
      "Campfire Area",
      "Restaurant"
    ],
    "rooms": [
      {
        "room_id": "701",
        "type": "Standard Room",
        "description": "Cozy room with forest view and essential amenities.",
        "price_per_night": 110.0,
        "currency": "INR",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": false
          }
        ],
        "images": [
          "https://www.myqvi.com/wp-content/uploads/Sinclairs-Retreat-Dooars-deluxe_room.jpg",
          "https://example.com/images/room701-2.jpg"
        ]
      },
      {
        "room_id": "702",
        "type": "Cabin",
        "description": "Rustic cabin with a forest view, fireplace, and modern amenities.",
        "price_per_night": 200.0,
        "currency": "INR",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": true
          }
        ],
        "images": [
          "https://images4.via.com/static/hotel/images/10/243239/243239_12_f.jpg",
          "https://example.com/images/room702-2.jpg"
        ]
      }
    ],
    "contact": {
      "phone": "+6677889900",
      "email": "info@forestretreat.com",
      "website": "https://www.forestretreat.com"
    }
  },
  {
    "hotel_id": "8",
    "name": "Riverside Hotel",
    "location": {
      "address": "505 River Rd, Rivertown",
      "city": "Rivertown",
      "state": "Kerala",
      "country": "India",
      "zip_code": "98765"
    },
    "description": "A modern hotel located by the river in Kerala, offering scenic views and luxury accommodations.",
    "rating": 4.7,
    "images": [
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201701/kstory_647_010317124538.jpg?size=690:388",
      "https://www.travelandleisure.com/thmb/kQrgajd8lfuQ8EGKpjRbOoUZmg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-leela-ashtamudi-raviz-hotel-pool-KERALALEELA0823-208c9911326c4333ba4dd59cde9b77a7.jpg",
      "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/india/kerala/somatheeram-kerala-india-p.jpg"
    ],
    "amenities": [
      "Free Wi-Fi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Boat Rentals"
    ],
    "rooms": [
      {
        "room_id": "801",
        "type": "Standard Room",
        "description": "Comfortable room with river view and essential amenities.",
        "price_per_night": 140.0,
        "currency": "INR",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": true
          }
        ],
        "images": [
          "https://assets.cntraveller.in/photos/60ba23e5e341ff812178ebb3/master/w_1600%2Cc_limit/Kerala-Kumarakom-Lake-Resort.jpg",
          "https://example.com/images/room801-2.jpg"
        ]
      },
      {
        "room_id": "802",
        "type": "Suite",
        "description": "Luxurious suite with a separate living area, river view, and premium amenities.",
        "price_per_night": 260.0,
        "currency": "INR",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": false
          }
        ],
        "images": [
          "https://assets.cntraveller.in/photos/60ba23e40f3a5367ec9fe886/master/w_1600%2Cc_limit/Kerala-Heritage-Premium-room-Surya-Samudra-Niraamaya-Retreats.jpg",
          "https://example.com/images/room802-2.jpg"
        ]
      }
    ],
    "contact": {
      "phone": "+7788990011",
      "email": "info@riversidehotel.com",
      "website": "https://www.riversidehotel.com"
    }
  },
  {
    "hotel_id": "9",
    "name": "Historic Manor",
    "location": {
      "address": "606 Heritage St, Oldtown",
      "city": "Oldtown",
      "state": "Meghalaya",
      "country": "India",
      "zip_code": "87654"
    },
    "description": "A charming historic manor located in Oldtown, Meghalaya, offering a glimpse into the past with modern comforts.",
    "rating": 4.2,
    "images": [
      "https://wodnesprawy.pl/wp-content/uploads/2024/04/Wodne-Sprawy-9_2024-3.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412902986.jpg?k=1f6f2d6f30e9df2201097fc819cb7308a319eea70dc6af6887453381972f62dc&o=&hp=1",
      "https://cdn.sanity.io/images/ocl5w36p/production/01245b86d418668e5c60f01a7a5958ac0095dccb-3840x1860.jpg"
    ],
    "amenities": [
      "Free Wi-Fi",
      "Historic Tours",
      "Garden",
      "Restaurant"
    ],
    "rooms": [
      {
        "room_id": "901",
        "type": "Standard Room",
        "description": "Classic room with historic decor and modern amenities.",
        "price_per_night": 100.0,
        "currency": "USD",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": true
          }
        ],
        "images": [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/da/9f/a6/hotel-heiga.jpg?w=1200&h=-1&s=1",
          "https://example.com/images/room901-2.jpg"
        ]
      },
      {
        "room_id": "902",
        "type": "Suite",
        "description": "Spacious suite with a separate living area, historic decor, and premium amenities.",
        "price_per_night": 220.0,
        "currency": "USD",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": false
          }
        ],
        "images": [
          "https://media-cdn.tripadvisor.com/media/photo-s/11/17/fe/14/the-superior-suite.jpg",
          "https://example.com/images/room902-2.jpg"
        ]
      }
    ],
    "contact": {
      "phone": "+8899001122",
      "email": "info@historicmanor.com",
      "website": "https://www.historicmanor.com"
    }
  },
  {
    "hotel_id": "10",
    "name": "The Golden Paradise",
    "location": {
      "address": "707 Ocean Blvd, Beach City",
      "city": "Beach City",
      "state": "Uttarakhand",
      "country": "India",
      "zip_code": "54321"
    },
    "description": "A luxurious beachfront resort in Uttarakhand offering stunning ocean views and top-notch amenities.",
    "rating": 4.9,
    "images": [
      "https://www.saffronstays.com/blog/wp-content/uploads/2022/09/best-time-to-visit-auli-750x375.jpg",
      "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/07/naini-retreat-1594885848.jpg",
      "https://assets.cntraveller.in/photos/61925e6c112a7d711c22e0d9/master/w_1600%2Cc_limit/cliff-top-auli.jpg",
    ],
    "amenities": [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports"
    ],
    "rooms": [
      {
        "room_id": "1001",
        "type": "Standard Room",
        "description": "Elegant room with ocean view and essential amenities.",
        "price_per_night": 170.0,
        "currency": "USD",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": true
          }
        ],
        "images": [
          "https://media-cdn.tripadvisor.com/media/photo-s/14/af/7a/e8/junior-suite.jpg",
          "https://example.com/images/room1001-2.jpg"
        ]
      },
      {
        "room_id": "1002",
        "type": "Suite",
        "description": "Luxurious suite with separate living area, ocean view, and premium amenities.",
        "price_per_night": 290.0,
        "currency": "USD",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": false
          }
        ],
        "images": [
          "https://www.momondo.in/himg/d4/3f/1b/expedia_group-2079381-9171f5-562786.jpg",
          "https://example.com/images/room1002-2.jpg"
        ]
      }
    ],
    "contact": {
      "phone": "+9900112233",
      "email": "info@beachfrontparadise.com",
      "website": "https://www.beachfrontparadise.com"
    }
  },
  {
    "hotel_id": "11",
    "name": "Mountain Bliss Resort",
    "location": {
      "address": "456 Highland Rd, Hill Town",
      "city": "Hill Town",
      "state": "Himachal Pradesh",
      "country": "India",
      "zip_code": "65432"
    },
    "description": "A tranquil mountain retreat in Himachal Pradesh with breathtaking views and exceptional services.",
    "rating": 4.7,
    "images": [
      "https://www.saffronstays.com/blog/wp-content/uploads/2022/09/best-time-to-visit-auli-750x375.jpg",
      "https://assets.cntraveller.in/photos/60ba04fc9ff4caf0197fd6ad/master/w_1600%2Cc_limit/wildflowerhallpool.jpg",
      "https://media.radissonhotels.net/image/palchan-hotel-spa-a-member-of-radisson-individuals-retreats/property-amenity/16256-156459-f76802686_3xl.jpg?impolicy=Card"
    ],
    "amenities": [
      "Free Wi-Fi",
      "Infinity Pool",
      "Spa",
      "Hiking Trails",
      "Gourmet Restaurant",
      "Fitness Center"
    ],
    "rooms": [
      {
        "room_id": "2001",
        "type": "Deluxe Room",
        "description": "Spacious room with mountain views and luxurious amenities.",
        "price_per_night": 180.0,
        "currency": "USD",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": true
          }
        ],
        "images": [
          "https://assets.architecturaldigest.in/photos/63a458428df6b9fdb924d64c/3:2/w_1620,h_1080,c_limit/SaffronStays%20Monarch%20Manor1.png",
          "https://example.com/images/room2001-2.jpg"
        ]
      },
      {
        "room_id": "2002",
        "type": "Executive Suite",
        "description": "Elegant suite with separate living area and stunning mountain views.",
        "price_per_night": 320.0,
        "currency": "USD",
        "availability": [
          {
            "date": "2024-07-12",
            "available": true
          },
          {
            "date": "2024-07-13",
            "available": false
          }
        ],
        "images": [
          "https://a0.muscache.com/im/pictures/miso/Hosting-53283257/original/81bbcdf0-18e9-47cd-a8e8-45d82923695a.jpeg?im_w=720",
          "https://example.com/images/room2002-2.jpg"
        ]
      }
    ],
    "contact": {
      "phone": "+9900223344",
      "email": "info@mountainbliss.com",
      "website": "https://www.mountainbliss.com"
    }
  },

  {
    hotel_id: "12",
    name: "Urban Oasis Hotel",
    location: {
      address: "789 City Center Ave, Metro City",
      city: "Metro City",
      state: "Maharashtra",
      country: "Countryland",
      zip_code: "76543",
    },
    description:
      "A modern hotel in the heart of the city, offering comfort and convenience for business and leisure travelers.",
    rating: 4.8,
    images: [
      "https://www.justahotels.com/wp-content/uploads/2023/09/Maharashtra-scaled.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=1200&h=-1&s=1",
      "https://images.trvl-media.com/hotels/38000000/37990000/37982800/37982756/4497f2e4_z.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Rooftop Pool",
      "Gym",
      "Conference Rooms",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "3001",
        type: "Standard Room",
        description: "Comfortable room with city views and modern amenities.",
        price_per_night: 150.0,
        currency: "USD",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/b8/60/suite-hotels.jpg?w=1200&h=-1&s=1",
          "https://example.com/images/room3001-2.jpg",
        ],
      },
      {
        room_id: "3002",
        type: "Penthouse Suite",
        description:
          "Luxurious suite with panoramic city views and exclusive amenities.",
        price_per_night: 450.0,
        currency: "USD",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://5.imimg.com/data5/SELLER/Default/2021/3/ZL/MU/KZ/30956649/sample.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+9900334455",
      email: "info@urbanoasis.com",
      website: "https://www.urbanoasis.com",
    },
  },
  {
    hotel_id: "13",
    name: "Oliver Hotel",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://santorinidave.com/wp-content/uploads/2022/09/goa-resort-near-beach.jpeg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/16/90/f8/exterior.jpg?w=1200&h=-1&s=1",
      "https://r1imghtlak.mmtcdn.com/35b28db6a01511eaa04f0242ac110002.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1506415213/Hotel/Goa/00073444/2815369-Fantastic_One_Bedroom_Villa_7qCsZY.jpg",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1506415289/Hotel/Goa/00073444/2815368-Fabulous_Room_ekXV8d.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },
  {
    hotel_id: "14",
    name: "Sunny Beach Resort",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-945216,resizemode-75,msid-108081970/industry/services/hotels-/-restaurants/go-goa-hospitality-players-cant-have-enough-of-indias-favourite-holiday-destination/go-goa-hotel-players-cant-have-enough-of-the-party-destination.jpg",
      "https://images.trvl-media.com/lodging/2000000/1790000/1782800/1782707/970ff5d4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "https://www.globalodyssey.co/hotels-in-goa/images/lazy_lagoon_sarovar_hotel_goa_big_img1.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://i.pinimg.com/736x/34/78/28/3478288326a363049701286c9be0eea1.jpg",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://content.r9cdn.net/rimg/himg/75/b9/36/ice-330113-97551050-037711.jpg?width=500&height=350&xhint=1152&yhint=1900&crop=true",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },
  {
    hotel_id: "15",
    name: "Coastal Paradise",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2023/3/294032970/WR/JH/BJ/11994245/hotels-for-sale-in-goa.jpg",
      "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/10/Cidade-de-Goa-Resort.jpg?fit=800%2C600&ssl=1",
      "https://images.luxuryhotel.guru/hotelimage.php?p_id=5118045&code=5ef85a9f9a360700cdfe3486ae5607cc&webpage=beach-front-hotels.com&link=https%3A%2F%2Fsubdomain.cloudimg.io%2Fcrop%2F512x384%2Fq70.fcontrast10.fbright0.fsharp5%2Fhttps%3A%2F%2Fq-xx.bstatic.com%2Fxdata%2Fimages%2Fhotel%2Fmax1536%2F273682204.jpg%3Fk%3D1f694cbd8462d063774b7e6d73b21b42cd917c1f1b740e0015f210cefd0fc103%26o%3D"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://assets.cntraveller.in/photos/60ba1d43a1a415b43b10be84/master/w_1600%2Cc_limit/69647586_2510275789036173_1857392876699254784_n.jpg",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://d2mo2a5fvrklap.cloudfront.net/app/uploads/sites/14/2022/08/20043604/familysuite-hero-desktop.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },
  {
    hotel_id: "16",
    name: "Oceanic Bliss",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://content.jdmagicbox.com/comp/goa/h2/0832px832.x832.091016103822.r2h2/catalogue/o-hotel-goa-candolim-goa-hotels-r6v7bt2pdb.jpg",
      "https://santorinidave.com/wp-content/uploads/2022/09/goa-resort-near-beach.jpeg",
      "https://assets.cntraveller.in/photos/60ba1555e1b212c19a817879/16:9/w_1024%2Cc_limit/26-Swimming-Pool-Sunset-.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://i.pinimg.com/736x/34/78/28/3478288326a363049701286c9be0eea1.jpg",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://content.r9cdn.net/rimg/himg/75/b9/36/ice-330113-97551050-037711.jpg?width=500&height=350&xhint=1152&yhint=1900&crop=true",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },
  {
    hotel_id: "17",
    name: "Seaside Retreat",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://gogoacarrentals.com/wp-content/uploads/2019/03/Candolim-Beach.jpg",
      "https://q-xx.bstatic.com/xdata/images/hotel/max1200/404879675.jpg?k=4c356c1d255d418bf06d97e2d6eeadaf0ba545e7810477fe59a16947d9b62d13&o=",
      "https://images.trvl-media.com/lodging/3000000/2710000/2703400/2703358/00a8ece2_y.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_HyZYRXNezHlM1KQVMx0JQUOiR1eoXt_Jw&s",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://hi-cdn.t-rp.co.uk/images/hotels/289879/14?width=870&height=480&crop=false",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },
  {
    hotel_id: "18",
    name: "Summit View Lodge",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://www.authenticindiatours.com/app/uploads/2022/04/Thiksey-Monastery-Leh-Ladakh-Jammu-and-Kashmir-1400x550-c-default.jpg",
      "https://r1imghtlak.ibcdn.com/fvbecfrjnp63hb67nv62phul006t.jpg?downsize=634:357",
      "https://pix10.agoda.net/hotelImages/243/24353753/24353753_21051117530097058059.jpg?ca=19&ce=1&s=414x232&ar=16x9"
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://www.thegranddragonladakh.com/assets/images/stay/luxury-room1.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://www.thegranddragonladakh.com/assets/images/stay/banner2.jpg",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "19",
    name: "Alpine Haven Resort",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://discoverlehladakh.in/wp-content/uploads/2024/01/Leh-Ladakh-in-March-Discover-Leh-Ladakh-1080x530.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/215317267.jpg?k=8b3bb0322166f421d7e7ba84b992e79741cf3a357c47d0a3f0365d40208a642b&o=&hp=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Bx5H07z6DCmj483dHYaU3jsQnnTUa3usHw&s"
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/08/Stok-Palace-Heritage-Hotel-Ladakh.jpg?resize=800%2C533&ssl=1",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2a/29/56/hotel-evergreen-ladakh.jpg?w=700&h=-1&s=1",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "20",
    name: "Mountain Oasis Hotel",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1701252239_996379-kashmir-leh-adakh-tour-package-slider-image.webp",
      "https://www.lehladakhtaxis.com/img/best-hotels-leh-ladakh/the-indus-river-camp-3.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510438148.jpg?k=a4a6aefebb1bc31123cf89b05332234703cb6f95b474d5b293abf6f72aecd971&o=&hp=1"
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxM3rqot9dc2etE15Cut1O-OHuxtkJYoA_Zg&s",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://r1imghtlak.mmtcdn.com/9c208d32560f11eaa0e10242ac110002.jpg",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "21",
    name: "Highland Retreat",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://static.toiimg.com/photo/105293415.cms",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGX9rjQPVKvTQWK-0wB2uLUIsloZBjXaX84g&s",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/1c/10/31/aerial-view.jpg?w=700&h=-1&s=1"
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://r1imghtlak.mmtcdn.com/a992fd5a0c4611ea92c10242ac110005.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://thebodhitreeladakh.com/wp-content/uploads/2021/03/05.jpg",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "22",
    name: "Vista Peak Hotel",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://assets.cntraveller.in/photos/60b9ede771c02e549cd4491a/16:9/w_1360,h_765,c_limit/LehToNubra-705082051-1366x768.jpg",
      "https://content.jdmagicbox.com/comp/leh-ladakh/g9/9999p1985.1985.190815090926.n1g9/catalogue/stone-hedge-hotel-nubra-leh-ladakh-hotels-1io4e7ddsc.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/450774236.jpg?k=6d3982a3e1ec8865d6e0e6cfa26fb1b96163de0b8e7f22875846e520bb2193bb&o=&hp=1",
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://r1imghtlak.mmtcdn.com/a992fd5a0c4611ea92c10242ac110005.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://thebodhitreeladakh.com/wp-content/uploads/2021/03/05.jpg",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "23",
    name: "Pinnacle Retreat",
    location: {
      address: "456 Beach Rd, Seaside Town",
      city: "Seaside Town",
      state: "Ladakh",
      country: "India",
      zip_code: "67890",
    },
    description:
      "A beautiful resort located on the beachfront in Seaside Town, Ladakh, India, perfect for a relaxing getaway.",
    rating: 4.8,
    images: [
      "https://media.glampinghub.com/CACHE/images/accommodations/suman-sharma-tutc-safari-tent-1484826308046/47fdb2c620d9dd26ee5cba31789fd8e8.jpg",
      "https://media.glampinghub.com/CACHE/images/accommodations/suman-sharma-tutc-safari-tent-1484826308053/276a04b28602a83107c0b1a8fcd86805.jpg",
      "https://www.overlandescape.com/storage/accommodations/618fb8dc14579137_chader_trek_camp.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Private Beach",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Water Sports",
    ],
    rooms: [
      {
        room_id: "201",
        type: "Standard Room",
        description:
          "Comfortable room with garden view and essential amenities.",
        price_per_night: 1000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://r1imghtlak.mmtcdn.com/a992fd5a0c4611ea92c10242ac110005.jpg",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
      {
        room_id: "202",
        type: "Ocean View Room",
        description:
          "Room with a stunning view of the ocean, equipped with modern amenities.",
        price_per_night: 2000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://thebodhitreeladakh.com/wp-content/uploads/2021/03/05.jpg",
          "https://example.com/images/room202-2.jpg",
        ],
      },
    ],
    contact: {
      phone: "+0987654321",
      email: "info@seasideresort.com",
      website: "https://www.seasideresort.com",
    },
  },
  {
    hotel_id: "24",
    name: "Palm Grove Hotel",
    location: {
      address: "123 Main St, Cityville",
      city: "Cityville",
      state: "Goa",
      country: "India",
      zip_code: "12345",
    },
    description:
      "A luxurious hotel located in the heart of Cityville, Goa, India, offering world-class amenities and services.",
    rating: 4.5,
    images: [
      "https://img.etimg.com/thumb/width-420,height-315,imgsize-945216,resizemode-75,msid-108081970/industry/services/hotels-/-restaurants/go-goa-hospitality-players-cant-have-enough-of-indias-favourite-holiday-destination/go-goa-hotel-players-cant-have-enough-of-the-party-destination.jpg",
      "https://images.trvl-media.com/lodging/2000000/1790000/1782800/1782707/970ff5d4.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
      "https://www.globalodyssey.co/hotels-in-goa/images/lazy_lagoon_sarovar_hotel_goa_big_img1.jpg"
    ],
    amenities: [
      "Free Wi-Fi",
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Restaurant",
      "Bar",
    ],
    rooms: [
      {
        room_id: "101",
        type: "Deluxe Room",
        description:
          "Spacious room with a king-sized bed, city view, and modern amenities.",
        price_per_night: 1500.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: false,
          },
        ],
        images: [
          "https://i.pinimg.com/736x/34/78/28/3478288326a363049701286c9be0eea1.jpg",
          "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/golden-tulip-bhopal/SLIDER_2_ROOM_kamahd",
        ],
      },
      {
        room_id: "102",
        type: "Suite",
        description:
          "Luxurious suite with separate living area, ocean view, and premium amenities.",
        price_per_night: 3000.0,
        currency: "INR",
        availability: [
          {
            date: "2024-07-12",
            available: true,
          },
          {
            date: "2024-07-13",
            available: true,
          },
        ],
        images: [
          "https://content.r9cdn.net/rimg/himg/75/b9/36/ice-330113-97551050-037711.jpg?width=500&height=350&xhint=1152&yhint=1900&crop=true",
          "https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg",
        ],
      },
    ],
    contact: {
      phone: "+1234567890",
      email: "info@grandpalacehotel.com",
      website: "https://www.grandpalacehotel.com",
    },
  },

];
