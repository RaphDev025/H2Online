import square from 'Assets/images/square.png'
import round from 'Assets/images/round.png'
import TenLiters from 'Assets/images/10Litre 1.png'
import pep from 'Assets/images/bigPep.png'
import bottle from 'Assets/images/pep 1.png'

export const sampleItems = [
    {
        imge: square,
        item: 'Square Gallon',
        unit_price: 25,
        service: 'Refill'
    },
    {
        imge: round,
        item: 'Round Gallon',
        unit_price: 25,
        service: 'Refill'
    },
    {
        imge: TenLiters,
        item: '10 Liters',
        unit_price: 15,
        service: 'Refill'
    },
    {
        imge: pep,
        item: '8 Liters',
        unit_price: 14,
        service: 'Refill'
    },
    {
        imge: pep,
        item: '7 Liters',
        unit_price: 13,
        service: 'Refill'
    },
    {
        imge: pep,
        item: '6 Liters',
        unit_price: 12,
        service: 'Refill'
    },
    {
        imge: pep,
        item: '5 Liters',
        unit_price: 14,
        service: 'Refill'
    },
    {
        imge: pep,
        item: '4 Liters',
        unit_price: 12,
        service: 'Refill'
    },
    {
        imge: bottle,
        item: '1 Liter',
        unit_price: 15,
        service: 'Refill'
    },
    {
        imge: bottle,
        item: '1.5 Liters',
        unit_price: 15,
        service: 'Refill'
    },
    {
        imge: bottle,
        item: '500ml',
        unit_price: 15,
        service: 'Refill'
    },
    {
        imge: bottle,
        item: '250ml',
        unit_price: 15,
        service: 'Refill'
    }
]

export const sampleMeterData = [
    {
        date: "May/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Jun/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Jan/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Feb/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },        {
        date: "Mar/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Apr/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Jul/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Sep/19/2023",
        readAM: "97240165",
        readPM: "99133168"
    },        {
        date: "Oct/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Aug/5/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Aug/9/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "Aug/29/2023",
        readAM: "97240165",
        readPM: "99133168"
    },        {
        date: "Aug/19/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/1/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/6/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/7/2023",
        readAM: "97240165",
        readPM: "99133168"
    },        {
        date: "May/18/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/11/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/13/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/14/2023",
        readAM: "97240165",
        readPM: "99133168"
    },        {
        date: "May/15/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/4/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/3/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
    {
        date: "May/20/2023",
        readAM: "97240165",
        readPM: "99133168"
    },
]

export const sampleCustomers = [
    {
        id: '3423335600090673',
        name: 'Maria Isla',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 1500,
        paymentStatus: 'Credits',
        createdAt: 'Jul 6, 2023',
        coins: 245,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423339994890673',
        name: 'Jeselle  Isla',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 500,
        paymentStatus: 'Credits',
        createdAt: 'Feb 6, 2023',
        coins: 235,
        gallonsOwned: [
            {
                gallon: "Round Gallon",
                qty: 2
            },
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423338884890673',
        name: 'Juan Isla',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 5100,
        paymentStatus: 'Credits',
        createdAt: 'Apr 6, 2023',
        coins: 225,
        gallonsOwned: [
            {
                gallon: "Round Gallon",
                qty: 2
            },
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335622290673',
        name: 'Alan Isla',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 5200,
        paymentStatus: 'Credits',
        createdAt: 'Jan 6, 2023',
        coins: 215,
        gallonsOwned: [
            {
                gallon: "Round Gallon",
                qty: 2
            },
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335333890673',
        name: 'Raphael Isla 3',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 0,
        paymentStatus: 'Paid',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Round Gallon",
                qty: 2
            },
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335777890673',
        name: 'Raphael Isla 4',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 500,
        paymentStatus: 'Credits',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Round Gallon",
                qty: 2
            },
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335444890673',
        name: 'Raphael Isla 5',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 500,
        paymentStatus: 'Credits',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Round Gallon",
                qty: 2
            },
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335554890673',
        name: 'Raphael Isla',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 500,
        paymentStatus: 'Credits',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            },
            {
                gallon: "Round Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335656490673',
        name: 'Raphael Isla 6',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 0,
        paymentStatus: 'Paid',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            },
            {
                gallon: "Round Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423323174890673',
        name: 'Raphael Isla 7',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 0,
        paymentStatus: 'Paid',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            },
            {
                gallon: "Round Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423789674890673',
        name: 'Raphael Isla 8',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 0,
        paymentStatus: 'Paid',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            },
            {
                gallon: "Round Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335673420673',
        name: 'Raphael Isla 9',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 0,
        paymentStatus: 'Paid',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
    {
        id: '3423335674567673',
        name: 'Raphael Isla 10',
        phone: '09269603768',
        address: '558 M De Jesus St.',
        credit: 0,
        paymentStatus: 'Paid',
        createdAt: 'june 6, 2023',
        coins: 25,
        gallonsOwned: [
            {
                gallon: "Square Gallon",
                qty: 2
            }
        ]
    },
]

export const customers = [
    {
        "name": "Mrs. Weston White",
        "contact": "(457) 482-5223 x756",
        "address": "West North Alvisland, Robb Neck, 353",
        "gallon_Ownership": [
          {
            "name": "Square Gallon",
            "quantity": 5
          },
          {
            "name": "Round Gallon",
            "quantity": 3
          },
          {
            "name": "10 Liters",
            "quantity": 2
          }
        ]
    },
    {
        "name": "Kristofer Barton",
        "contact": "1-172-007-2924",
        "address": "New North Karimouth, Dooley Place, 959",
        "gallon_Ownership": [
          {
            "name": "Square Gallon",
            "quantity": 2
          },
          {
            "name": "Round Gallon",
            "quantity": 1
          },
          {
            "name": "8 Liters",
            "quantity": 4
          }
        ]
      },
    {
      "name": "Giovanni Zieme",
      "contact": "660.793.2980 x3360",
      "address": "South East Chad, Schamberger Drive, 70207"
    },
    {
      "name": "Neoma Runolfsdottir",
      "contact": "019-533-7965",
      "address": "East Conradchester, West Route, 33573"
    },
    {
      "name": "Hollis Keeling",
      "contact": "(418) 931-1301",
      "address": "Lake Jazminshire, Kutch Stravenue, 12861"
    },
    {
      "name": "Marta Hagenes",
      "contact": "1-354-772-2174 x5114",
      "address": "East Lloydview, O'Kon Gateway, 53112"
    },
    {
      "name": "Jude Schneider III",
      "contact": "926-752-6635",
      "address": "South South Allieland, Williamson Circle, 41376"
    },
    {
      "name": "Mrs. Kianna Morar",
      "contact": "(739) 786-1806 x420",
      "address": "West Dalemouth, Kris Fields, 50847"
    },
    {
      "name": "Lon Stokes",
      "contact": "1-014-464-5081 x698",
      "address": "Port Lake Mabel, Angela Park, 87389"
    },
    {
      "name": "Jarret Littel",
      "contact": "(053) 153-8929 x3174",
      "address": "Lake North Deshaun, Camren Hills, 55861"
    },
    {
      "name": "Christy Jaskolski",
      "contact": "287.819.7179",
      "address": "West Wintheiserburgh, Wyman Underpass, 41975"
    },
    {
      "name": "Tito Nicolas",
      "contact": "(705) 551-7361 x88009",
      "address": "New Hoegerfort, Erica Tunnel, 72776"
    },
    {
      "name": "Jason Abernathy",
      "contact": "701-960-2550",
      "address": "New Chaddton, Nicole Walk, 28771"
    },
    {
      "name": "Oda Price",
      "contact": "075-360-7730 x263",
      "address": "West Roobhaven, Pfannerstill Mill, 95665"
    },
    {
      "name": "Jovani Beatty",
      "contact": "(661) 725-4464 x9183",
      "address": "Lake Port Genesisside, Harber Centers, 45079"
    },
    {
      "name": "Betty Gottlieb",
      "contact": "(727) 730-5700 x4634",
      "address": "East Hermistonville, Newton Track, 75279"
    },
    {
      "name": "Aletha Walter",
      "contact": "369.388.3994",
      "address": "East Cronaton, Reilly Glen, 53375"
    },
    {
      "name": "Ruthie VonRueden V",
      "contact": "1-536-793-6292 x6177",
      "address": "North Letitiaside, Welch Summit, 36526"
    },
    {
      "name": "Joyce Breitenberg",
      "contact": "1-175-562-7295 x082",
      "address": "West Bauchbury, Sibyl Field, 64626"
    },
    {
      "name": "Lane Gusikowski",
      "contact": "726-289-2245 x79267",
      "address": "East Astridburgh, Swaniawski Plains, 86633"
    }
]

export const orderHistory = [
    {
    "_id": "6545e948fc13ae18105539ec",
    "date": "10/06/2022",
    "total": 901.25,
    "payment": 
      {
        "settled_Date": "10/6/2022",
        "status": "Paid",
        "paid": 79.0,
        "balance": 620.12,
        "method": "Cash"
      }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "593 Hagan Terrace",
        "status": "Out for Delivery",
        "courier": "Warlito"
      }
    ,
    "customer": 
        {
            "name": "Paulina",
            "contact": "869-411-2028",
            "address": "26481 Packers Place"
    },
    "items": [
        {
            "item": "Square Gallon",
            "qty": 3,
            "service": "Refill",
            "unit_price": 142.84,
            "sub_total": 194.47
        },
        {
            "item": "10 Liters",
            "qty": 7,
            "service": "Refill",
            "unit_price": 501.48,
            "sub_total": 969.88
        }
    ]
  }, {
    "_id": "6545e948fc13ae18105539ed",
    "date": "10/06/2022",
    "total": 204.99,
    "payment": 
        {
            "settled_Date": "10/6/2022",
            "status": "Credited",
            "paid": 79.0,
            "balance": 620.12,
            "method": "Cash"
        }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "4 Burning Wood Pass",
        "status": "Delivered",
        "courier": "Warlito"
      }
    ,
    "customer": 
        {
            "name": "Paulina",
            "contact": "869-411-2028",
            "address": "26481 Packers Place"
        }
    ,
    "items": [
        {
            "item": "Square Gallon",
            "qty": 3,
            "service": "Refill",
            "unit_price": 142.84,
            "sub_total": 194.47
          },
          {
            "item": "10 Liters",
            "qty": 7,
            "service": "Refill",
            "unit_price": 501.48,
            "sub_total": 969.88
          }
    ]
  }, {
    "_id": "6545e948fc13ae18105539ee",
    "date": "10/06/2022",
    "total": 382.92,
    "payment": 
        {
            "settled_Date": "10/6/2022",
            "status": "Paid",
            "paid": 79.0,
            "balance": 0,
            "method": "Cash"
        }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "1168 Burning Wood Center",
        "status": "Out for Delivery",
        "courier": "Warlito"
      }
    ,
    "customer": 
      {
        "name": "Paulina",
        "contact": "869-411-2028",
        "address": "26481 Packers Place"
      }
    ,
    "items": [
      {
        "item": "Square Gallon",
        "qty": 8,
        "service": "Purchase",
        "unit_price": 61.03,
        "sub_total": 264.67
      }
    ]
  }, {
    "_id": "6545e948fc13ae18105539ef",
    "date": "10/06/2022",
    "total": 206.25,
    "payment": 
        {
            "settled_Date": "10/6/2022",
            "status": "Credited",
            "paid": 79.0,
            "balance": 620.12,
            "method": "Cash"
        }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "00267 Mcbride Hill",
        "status": "Awaiting Delivery",
        "courier": "Warlito"
      }
    ,
    "customer": 
      {
        "name": "Tiebout",
        "contact": "161-295-8798",
        "address": "024 Namekagon Street"
      }
    ,
    "items": [
        {
            "item": "Square Gallon",
            "qty": 3,
            "service": "Refill",
            "unit_price": 142.84,
            "sub_total": 194.47
          },
          {
            "item": "10 Liters",
            "qty": 7,
            "service": "Refill",
            "unit_price": 501.48,
            "sub_total": 969.88
          }
    ]
  }, {
    "_id": "6545e948fc13ae18105539f0",
    "date": "10/06/2022",
    "total": 418.46,
    "payment": 
      {
        "settled_Date": "10/6/2022",
        "status": "Paid",
        "paid": 45.31,
        "balance": 0,
        "method": "Cash"
      }
    ,
    "vendor": "Roderic",
    "delivery": 
        {
            "date": "10/6/2022",
            "address": "5648 Bowman Terrace",
            "status": "For Pickup",
            "courier": "Warlito"
        }
    ,
    "customer": 
      {
        "name": "Myranda",
        "contact": "737-642-5315",
        "address": "00 Graceland Avenue"
      }
    ,
    "items": [
        {
            "item": "Square Gallon",
            "qty": 3,
            "service": "Refill",
            "unit_price": 142.84,
            "sub_total": 194.47
          },
          {
            "item": "10 Liters",
            "qty": 7,
            "service": "Refill",
            "unit_price": 501.48,
            "sub_total": 969.88
          }
    ]
  }, {
    "_id": "6545e948fc13ae18105539f1",
    "date": "10/06/2022",
    "total": 755.37,
    "payment": 
        {
            "settled_Date": "10/6/2022",
            "status": "Credited",
            "paid": 79.0,
            "balance": 620.12,
            "method": "Cash"
        }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "5 Hoffman Street",
        "status": "Delivered",
        "courier": "Warlito"
      }
    ,
    "customer": 
      {
        "name": "Janeczka",
        "contact": "618-617-8447",
        "address": "0 Center Crossing"
      }
    ,
    "items": [
      {
        "item": "Square Gallon",
        "qty": 2,
        "service": "Purchase",
        "unit_price": 889.13,
        "sub_total": 229.97
      }
    ]
  }, {
    "_id": "6545e948fc13ae18105539f2",
    "date": "10/06/2022",
    "total": 552.5,
    "payment": 
      {
        "settled_Date": "10/6/2022",
        "status": "Paid",
        "paid": 677.66,
        "balance": 0,
        "method": "GCash"
      }
    ,
    "vendor": "Roderic",
    "delivery": 
        {
            "date": "10/6/2022",
            "address": "5648 Bowman Terrace",
            "status": "For Pickup",
            "courier": "Warlito"
        }
    ,
    "customer": 
        {
            "name": "Paulina",
            "contact": "869-411-2028",
            "address": "26481 Packers Place"
        }
    ,
    "items": [
      {
        "item": "10 Liters",
        "qty": 4,
        "service": "Refill",
        "unit_price": 900.11,
        "sub_total": 223.09
      }
    ]
  }, {
    "_id": "6545e948fc13ae18105539f3",
    "date": "10/06/2022",
    "total": 972.33,
    "payment": 
      {
        "settled_Date": "10/6/2022",
        "status": "Credited",
        "paid": 403.14,
        "balance": 283.19,
        "method": "GCash"
      }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "7782 South Alley",
        "status": "Out for Delivery",
        "courier": "Warlito"
      }
    ,
    "customer": 
        {
            "name": "Paulina",
            "contact": "869-411-2028",
            "address": "26481 Packers Place"
        }
    ,
    "items": [
      {
        "item": "Square Gallon",
        "qty": 3,
        "service": "Purchase",
        "unit_price": 733.61,
        "sub_total": 966.66
      }
    ]
  }, {
    "_id": "6545e948fc13ae18105539f4",
    "date": "10/06/2022",
    "total": 459.14,
    "payment": 
        {
            "settled_Date": "10/6/2022",
            "status": "Paid",
            "paid": 79.0,
            "balance": 0,
            "method": "Cash"
        }
    ,
    "vendor": "Roderic",
    "delivery": 
        {
            "date": "10/6/2022",
            "address": "5648 Bowman Terrace",
            "status": "For Pickup",
            "courier": "Warlito"
        }
    ,
    "customer": 
      {
        "name": "Sissie",
        "contact": "670-117-2512",
        "address": "15299 Mandrake Crossing"
      }
    ,
    "items": [
      {
        "item": "10 Liters",
        "qty": 9,
        "service": "Refill",
        "unit_price": 869.19,
        "sub_total": 525.53
      }
    ]
  }, {
    "_id": "6545e948fc13ae18105539f5",
    "date": "10/06/2022",
    "total": 606.85,
    "payment": 
        {
            "settled_Date": "10/6/2022",
            "status": "Paid",
            "paid": 79.0,
            "balance": 0,
            "method": "Cash"
        }
    ,
    "vendor": "Roderic",
    "delivery": 
      {
        "date": "10/6/2022",
        "address": "5648 Bowman Terrace",
        "status": "For Pickup",
        "courier": "Warlito"
      }
    ,
    "customer": 
        {
            "name": "Paulina",
            "contact": "869-411-2028",
            "address": "26481 Packers Place"
        },
    "items": [
      {
        "item": "Square Gallon",
        "qty": 3,
        "service": "Refill",
        "unit_price": 142.84,
        "sub_total": 194.47
      },
      {
        "item": "10 Liters",
        "qty": 7,
        "service": "Refill",
        "unit_price": 501.48,
        "sub_total": 969.88
      }
    ]
}]

export const users = [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@example.com',
          age: 30,
          city: 'New York',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane@example.com',
          age: 28,
          city: 'Los Angeles',
        },
        {
            id: 3,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 4,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 5,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 6,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 7,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 8,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 9,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 10,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 11,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 12,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 13,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 14,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
          {
            id: 15,
            name: 'John Doe',
            email: 'john@example.com',
            age: 30,
            city: 'New York',
          },
          {
            id: 16,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 28,
            city: 'Los Angeles',
          },
]

export const doughnutData = [25, 30, 15, 50]

export const inventoryContents = [
    {
        id: 1,
        item: 'Square Gallon',
        max: 50,
        stock: 20,
        unitPrice: 340,
    },
    {
        id: 2,
        item: 'Round Gallon',
        max: 50,
        stock: 35,
        unitPrice: 340,
    },
    {
        id: 3,
        item: 'Square Gallon',
        max: 50,
        stock: 20,
        unitPrice: 340,
    },
    {
        id: 4,
        item: 'Round Gallon',
        max: 50,
        stock: 15,
        unitPrice: 340,
    },
    {
        id: 5,
        item: 'Square Gallon',
        max: 25,
        stock: 25,
        unitPrice: 340,
    },
    {
        id: 6,
        item: 'Round Gallon',
        max: 70,
        stock: 14,
        unitPrice: 340,
    },
]

export const reservations = [
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    },
    {
        'id': '2587954632156312',
        'customer_id': '5687499621036520',
        'address': '558 M De Jesus St.',
        'schedule': 'Jun 7, 2023, Mon. 3:30 PM every 3 days',
        'creationDate': 'Jun 4, 2023, Mon. 3:30 PM',
        'phone': '09269607368'
    }
]

export const logisticsData = [
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Awaiting Delivery',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Awaiting Delivery',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Complete',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Complete',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'On Site Refill',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'On Site Refill',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Out for Delivery',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Out for Delivery',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Awaiting Delivery',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'Awaiting Delivery',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'For Pickup',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    },
    {
        id: '5689237845124679',
        order_id: '7889455612237946',
        customer: 'Raphael Isla',
        phone: '09269607368',
        address: '558 M De Jesus St.',
        courier: 'Warlito',
        progress: 'For Pickup',
        delivered_at: 'Oct 10, 2023, Mon, 3:30 PM'
    }
]

export const tableData = [
    {
        id: '7946137845128951',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Paid',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128952',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Credited',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128953',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Paid',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128954',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Paid',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128955',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Paid',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128956',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Paid',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128957',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Pending',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128958',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Credited',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128959',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Credited',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128960',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Credited',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128961',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Pending',
        vendor: 'Kristine',
        Delivery: 'Complete'
    },
    {
        id: '7946137845128962',
        date: 'Oct 10, 2023',
        customer: 'Raphael Isla',
        items: 2,
        Total: 50.00,
        payment: 'Pending',
        vendor: 'Kristine',
        Delivery: 'Complete'
    }
]

export const productsSoldData = [
    {
        product: 'Square Gallon',
        price: 500.00,
        pcs: 50,
        interactions: 'Purchase'
    },
    {
        product: 'Round Gallon',
        price: 500.00,
        pcs: 50,
        interactions: 'Purchase'
    },
    {
        product: '250 ml',
        price: 500.00,
        pcs: 50,
        interactions: 'Purchase'
    },
    {
        product: 'Square Gallon',
        price: 500.00,
        pcs: 50,
        interactions: 'Purchase'
    },
    {
        product: '10 Liters',
        price: 500.00,
        pcs: 50,
        interactions: 'Purchase'
    },
    {
        product: '500 ml',
        price: 500.00,
        pcs: 50,
        interactions: 'Purchase'
    }
]

export const expensesData = [
    {
        date: 'Oct 10, 2023, Mon, 3:30 PM',
        item: 'ballpen',
        qty: 2,
        unit_price: 8,
        total: 16.00
    },
    {
        date: 'Oct 10, 2023, Mon, 3:30 PM',
        item: 'Food Allowance',
        qty: 2,
        unit_price: 60,
        total: 120.00
    },
    {
        date: 'Oct 10, 2023, Mon, 3:30 PM',
        item: 'Merienda',
        qty: 2,
        unit_price: 20,
        total: 40.00
    },
    {
        date: 'Oct 10, 2023, Mon, 3:30 PM',
        item: 'Glue Stick',
        qty: 3,
        unit_price: 20,
        total: 60.00
    }
]

