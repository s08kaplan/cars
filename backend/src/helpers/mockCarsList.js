const cars = [
  {
    "brandName": "Volkswagen",
    "model": "Jetta",
    "typeOfCar": "Sedan",
    "year": 2005,
    "image": [
      "https://platform.cstatic-images.com/large/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/s0pXesNru77lcjdzks9oXg3d4j0.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/qULs4-0enPtd5tTydH9-yQ4NnFE.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/TFQhl04oK-lvwoSeUhK1BRtTCiY.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/3ceO-pfkr8QUAFZMvXgByvj9ftY.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/FOTDTd5UAVbFa8drk1hD3IFRPfk.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/FOTDTd5UAVbFa8drk1hD3IFRPfk.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/XM8lYBp_WqtOmxL-Q-0vl7Thohc.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/a869ac52-7ed9-54e1-9103-c3385e5409eb/0914ecf0-31fd-4d42-8636-90199dbf780a/ba9dy7g9TGfDlho_FDUyJVvhE0g.jpg",

    ],
    "vehicleIdentificationNumber": "UXPWT4BGP05FGWRW3",
    "color": "Metalic",
    "mileAge": 31332,
    "fuelType": "Hybrid",
    "transmission": "Manual",
    "boughtPrice":45000,
    "requiredPrice": 46365,
    "available": true,
    "features": [
      "Bluetooth",
      "Navigation System",
      "Backup Camera",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2018-04-25 00:00:00",
          "reason": "Speeding",
          "amount": 277
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "F0JXZA7MW6",
      "validFrom": "2022-12-30 00:00:00",
      "validUntil": "2025-04-09 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-03-03 00:00:00",
      "passed": true,
      "nextDueDate": "2026-04-08 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 310,
      "recentPasses": [
        {
          "date": "2002-07-20 00:00:00",
          "location": "Izmir",
          "cost": 30
        }
      ]
    }
  },
  {
    "brandName": "Volkswagen",
    "model": "Jetta",
    "typeOfCar": "Sedan",
    "year": 2009,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/Mikd-kPIQgNKFA4s9ANiWOTdZgA.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/GXIAdzLdHT_Ww4AF1KxR_3-D61Q.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/mWhkET3uhlSCp3d9486-qp9ZmU4.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/yZlY7rsWOlHgRxRRC0LJonutvAU.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/B0Cr0EJUuCxORLbrJ_4Bjsvt0Xc.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/QU5ccWvRBDyQXQD86CEV1pydko0.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/WXWFwwqAnvEIoG-KUmd0vPHiU5A.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/c59b5415-dc06-5650-b64b-581cac62b69b/a456a6b0-7d36-479a-91cc-e113346280cc/dNgZKwlURGl3fmKzgFvSTNkLG-U.jpg"
    ],
    "vehicleIdentificationNumber": "VK2HZWUS9D3XT7A48",
    "color": "White",
    "mileAge": 94089,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":79550,
    "soldPrice": 80483,
    "available": false,
    "features": [
      "Bluetooth",
      "Backup Camera",
      "Sunroof",
      "Navigation System",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2006-01-14 00:00:00",
      "fines": [
        {
          "date": "2007-12-17 00:00:00",
          "reason": "Speeding",
          "amount": 448
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "IJ7560LFIB",
      "validFrom": "2022-08-08 00:00:00",
      "validUntil": "2025-02-05 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-11-18 00:00:00",
      "passed": false,
      "nextDueDate": "2026-11-30 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 3,
      "recentPasses": [
        {
          "date": "2004-02-21 00:00:00",
          "location": "Izmir",
          "cost": 19
        },
        {
          "date": "2009-06-01 00:00:00",
          "location": "Ankara",
          "cost": 18
        }
      ]
    }
  },
  {
    "brandName": "Toyota",
    "model": "Camry",
    "typeOfCar": "Sedan",
    "year": 2020,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/dad34780-e407-5b78-b4c3-7239350606ca/3bb5de5d-3ab3-4068-a49c-96bd157cd924/5DL33pDiA599sehalB_dYSJrw74.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/dad34780-e407-5b78-b4c3-7239350606ca/3bb5de5d-3ab3-4068-a49c-96bd157cd924/tUV_a-c9mwxV2Qy2765SDdgOA9s.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/dad34780-e407-5b78-b4c3-7239350606ca/3bb5de5d-3ab3-4068-a49c-96bd157cd924/qr5F22i7oCXO5jmCk8YjZZ3WdWY.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/dad34780-e407-5b78-b4c3-7239350606ca/3bb5de5d-3ab3-4068-a49c-96bd157cd924/6wKIk75tUgbWuWw2dhLIr3f--pI.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/dad34780-e407-5b78-b4c3-7239350606ca/3bb5de5d-3ab3-4068-a49c-96bd157cd924/zmQBwUUAFHxzzgbNZl6A1X1ja3I.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/dad34780-e407-5b78-b4c3-7239350606ca/3bb5de5d-3ab3-4068-a49c-96bd157cd924/EAb-AE1Qk3uFINDqQaeLlQTbr2E.jpg"
    ],
    "vehicleIdentificationNumber": "6AMH5J1YA3GY25RT4",
    "color": "Black",
    "mileAge": 39405,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":66125,
    "soldPrice": 67042,
    "available": false,
    "features": [
      "Sunroof",
      "Navigation System",
      "Backup Camera",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2019-10-10 00:00:00",
      "fines": [
        {
          "date": "2011-09-27 00:00:00",
          "reason": "Speeding",
          "amount": 211
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "6PKL33B2L5",
      "validFrom": "2022-11-12 00:00:00",
      "validUntil": "2024-10-10 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-12-28 00:00:00",
      "passed": true,
      "nextDueDate": "2025-12-10 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 34,
      "recentPasses": []
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Elantra",
    "typeOfCar": "Sedan",
    "year": 2023,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/567a80fa-3708-5d9a-97ff-b816056ac237/e8a7937c-6ed2-4f14-9d58-2d02c985c0a2/Xt82OERNkCgrFtHnlx5tFjWdhe0.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/567a80fa-3708-5d9a-97ff-b816056ac237/e8a7937c-6ed2-4f14-9d58-2d02c985c0a2/2yVf3QDyKa3rdE7VwJp2r7HZTRo.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/567a80fa-3708-5d9a-97ff-b816056ac237/e8a7937c-6ed2-4f14-9d58-2d02c985c0a2/-4VmP7SkkFVd5rFFpGppgjeDj7s.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/567a80fa-3708-5d9a-97ff-b816056ac237/e8a7937c-6ed2-4f14-9d58-2d02c985c0a2/wSvaoHM24-RgQl8EyoRiKb-V4zM.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/567a80fa-3708-5d9a-97ff-b816056ac237/e8a7937c-6ed2-4f14-9d58-2d02c985c0a2/tKyrtoMWzA14IGD3trHsGvxe57k.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/567a80fa-3708-5d9a-97ff-b816056ac237/e8a7937c-6ed2-4f14-9d58-2d02c985c0a2/Qgj57-X67YXQqfefCSa6ey53kRE.jpg"
    ],
    "vehicleIdentificationNumber": "7F4TFCPB3SAHUZCE1",
    "color": "Silver",
    "mileAge": 70836,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":20890,
    "requiredPrice": 21576,
    "available": true,
    "features": [
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "BKBLZAZT5F",
      "validFrom": "2022-06-12 00:00:00",
      "validUntil": "2025-09-16 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-11-25 00:00:00",
      "passed": true,
      "nextDueDate": "2025-09-24 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 397,
      "recentPasses": [
        {
          "date": "2009-01-28 00:00:00",
          "location": "Ankara",
          "cost": 19
        }
      ]
    }
  },
  {
    "brandName": "Kia",
    "model": "Sorento",
    "typeOfCar": "Hatchback",
    "year": 2024,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/a43e2dae-540b-543e-999e-75116f5b84bb/8018b9bc-5a7d-4bb5-bb8e-01243a307047/Rhw6L6DwN_DdSkIfEHUx_wMeoZw.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/b9580da4-61fd-4ad5-8da4-bbd0f253acc4/64dc3da5-1d6e-4928-b7bd-9bac04147d7f/COXgRjl90RVbbwNWVqpvo6aGs5A.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/b9580da4-61fd-4ad5-8da4-bbd0f253acc4/64dc3da5-1d6e-4928-b7bd-9bac04147d7f/mza1T8rfrNbXot2_nsWcfpBwDeY.jpg"
    ],
    "vehicleIdentificationNumber": "2AAE9S4HWKJJJUW3P",
    "color": "Green",
    "mileAge": 208407,
    "fuelType": "Petrol",
    "transmission": "Manual",
    "boughtPrice": 20875,
    "soldPrice": 21956,
    "available": false,
    "features": [
      "Navigation System",
      "Air Conditioning",
      "Bluetooth",
      "Sunroof",
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2023-03-09 00:00:00",
          "reason": "Speeding",
          "amount": 220
        },
        {
          "date": "2015-04-27 00:00:00",
          "reason": "Speeding",
          "amount": 414
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "UL12TIGZUI",
      "validFrom": "2023-12-12 00:00:00",
      "validUntil": "2025-02-09 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-05-11 00:00:00",
      "passed": true,
      "nextDueDate": "2025-11-04 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 393,
      "recentPasses": [
        {
          "date": "2020-03-06 00:00:00",
          "location": "Istanbul",
          "cost": 38
        },
        {
          "date": "2023-07-27 00:00:00",
          "location": "Antalya",
          "cost": 31
        }
      ]
    }
  },
  {
    "brandName": "Volkswagen",
    "model": "Jetta",
    "typeOfCar": "SUV",
    "year": 2025,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/4b6c9831-2f9c-54b0-bcb1-6e26574d9d30/3cb1a06c-5ff9-4d8a-beef-00478fe15c23/q9NCHPOxNVFgOJyh_KKnJ79mQz8.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/4b6c9831-2f9c-54b0-bcb1-6e26574d9d30/3cb1a06c-5ff9-4d8a-beef-00478fe15c23/S_8w9I_NVqIP65uYc7r3kCo4rxg.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/4b6c9831-2f9c-54b0-bcb1-6e26574d9d30/3cb1a06c-5ff9-4d8a-beef-00478fe15c23/ozuD7ccr0Lf3037Dl371wZOAWnY.jpg"
    ],
    "vehicleIdentificationNumber": "8SLNUL2YAV3A0XCMF",
    "color": "Black",
    "mileAge": 73676,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":13000,
    "requiredPrice": 13334,
    "available": true,
    "features": [
      "Bluetooth",
      "Backup Camera",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2015-09-06 00:00:00",
      "fines": [
        {
          "date": "2013-05-27 00:00:00",
          "reason": "Speeding",
          "amount": 439
        },
        {
          "date": "2010-06-18 00:00:00",
          "reason": "Speeding",
          "amount": 191
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "6TI9KZE81S",
      "validFrom": "2023-04-10 00:00:00",
      "validUntil": "2025-03-24 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": true,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-10-10 00:00:00",
      "passed": true,
      "nextDueDate": "2025-10-02 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 491,
      "recentPasses": [
        {
          "date": "2010-08-19 00:00:00",
          "location": "Istanbul",
          "cost": 38
        },
        {
          "date": "2009-09-27 00:00:00",
          "location": "Izmir",
          "cost": 35
        }
      ]
    }
  },
  {
    "brandName": "BMW",
    "model": "X5",
    "typeOfCar": "Hatchback",
    "year": 2009,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/994bb349-6e61-4dfb-92b3-0a7c4ce60a82/9051c13f-2adb-4b10-8c01-9449ae24ead1/QYKmjAoA-HXOFB8w5EpA_sfHMLY.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/994bb349-6e61-4dfb-92b3-0a7c4ce60a82/9051c13f-2adb-4b10-8c01-9449ae24ead1/S24zE9mOwU0memVV7NPMTV66bHo.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/994bb349-6e61-4dfb-92b3-0a7c4ce60a82/9051c13f-2adb-4b10-8c01-9449ae24ead1/QAzVtGJCSUSGcpZwPVkWrzsMTds.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/994bb349-6e61-4dfb-92b3-0a7c4ce60a82/9051c13f-2adb-4b10-8c01-9449ae24ead1/jCyQL8WIr2qZdafjDNkAk2cOnWM.jpg"
    ],
    "vehicleIdentificationNumber": "2K3MRB6KB32XXMC53",
    "color": "Gray",
    "mileAge": 115636,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":57130,
    "requiredPrice": 58112,
    "available": true,
    "features": [
      "Backup Camera",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": "2020-05-25 00:00:00",
      "fines": [
        {
          "date": "2015-10-18 00:00:00",
          "reason": "Speeding",
          "amount": 127
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "1HR1MVQVMT",
      "validFrom": "2023-08-21 00:00:00",
      "validUntil": "2025-07-11 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-03-05 00:00:00",
      "passed": false,
      "nextDueDate": "2026-04-23 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 498,
      "recentPasses": []
    }
  },
  {
    "brandName": "Ford",
    "model": "Focus",
    "typeOfCar": "SUV",
    "year": 2009,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/0f99a508-953d-502a-8da8-365409c775c4/bda218f1-99b0-41fa-995d-66700f5c698d/u-QjhTM6pBaGMcZVaO7HesDq51s.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/0f99a508-953d-502a-8da8-365409c775c4/bda218f1-99b0-41fa-995d-66700f5c698d/E52x6ndaGpUoXMQ_kxiFwEbc3SM.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/0f99a508-953d-502a-8da8-365409c775c4/bda218f1-99b0-41fa-995d-66700f5c698d/b6Mu4Hulc0gkPPgat3_7KoAwi_8.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/0f99a508-953d-502a-8da8-365409c775c4/bda218f1-99b0-41fa-995d-66700f5c698d/UtMfnVApP8LEkIY33JVDAWQGmWE.jpg"
    ],
    "vehicleIdentificationNumber": "898AVXG6LYX1XNMVB",
    "color": "Gray",
    "mileAge": 250193,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":79885,
    "soldPrice": 80724,
    "available": false,
    "features": [
      "Navigation System",
      "Sunroof",
      "Bluetooth",
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2016-10-10 00:00:00",
          "reason": "Speeding",
          "amount": 402
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "VKUA2L5U78",
      "validFrom": "2022-01-20 00:00:00",
      "validUntil": "2024-07-16 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-10-16 00:00:00",
      "passed": true,
      "nextDueDate": "2026-08-30 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 496,
      "recentPasses": [
        {
          "date": "2023-10-28 00:00:00",
          "location": "Istanbul",
          "cost": 21
        }
      ]
    }
  },
  {
    "brandName": "Kia",
    "model": "Forte",
    "typeOfCar": "Sedan",
    "year": 2014,
    "image": [
      "https://platform.cstatic-images.com/xlarge/in/v2/12a36857-3104-5941-a456-e6775b80da8e/14977520-f8e3-47a3-89c7-5a8ae4f60614/ThhmOzKeV0u-Zgn3fHZgCgzPALU.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/12a36857-3104-5941-a456-e6775b80da8e/14977520-f8e3-47a3-89c7-5a8ae4f60614/FPfiMt87QkY4Vj-nPAq8xeDGgHk.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/12a36857-3104-5941-a456-e6775b80da8e/14977520-f8e3-47a3-89c7-5a8ae4f60614/wbyefx02yK_28StutW5GrROyIGY.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/12a36857-3104-5941-a456-e6775b80da8e/14977520-f8e3-47a3-89c7-5a8ae4f60614/s9-Z7dpfOurO-L1LNcgsssbQSlE.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/12a36857-3104-5941-a456-e6775b80da8e/14977520-f8e3-47a3-89c7-5a8ae4f60614/givA4fuIIfhPuqkcQtaG2N-4dQ8.jpg",
      "https://platform.cstatic-images.com/xlarge/in/v2/12a36857-3104-5941-a456-e6775b80da8e/14977520-f8e3-47a3-89c7-5a8ae4f60614/FDiD7wouXStNoKTzVkgsDg5AZjY.jpg"
    ],
    "vehicleIdentificationNumber": "LZ0R1NMZGGYGHTA8V",
    "color": "Silver",
    "mileAge": 14874,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":24500,
    "requiredPrice": 25488,
    "available": true,
    "features": [
      "Navigation System",
      "Sunroof",
      "Air Conditioning",
      "Backup Camera",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "4PUHE21EM3",
      "validFrom": "2022-11-12 00:00:00",
      "validUntil": "2024-06-20 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-03-27 00:00:00",
      "passed": false,
      "nextDueDate": "2026-03-08 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 363,
      "recentPasses": [
        {
          "date": "2023-02-15 00:00:00",
          "location": "Ankara",
          "cost": 10
        }
      ]
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Elantra",
    "typeOfCar": "SUV",
    "year": 2023,
    "image": [
      "https://example.com/images/hyundai_elantra.jpg"
    ],
    "vehicleIdentificationNumber": "00TPW3E3S5Z1E2FJC",
    "color": "Silver",
    "mileAge": 112965,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":37500,
    "requiredPrice": 39037,
    "available": true,
    "features": [
      "Navigation System",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2009-11-03 00:00:00",
      "fines": [
        {
          "date": "2003-11-01 00:00:00",
          "reason": "Speeding",
          "amount": 363
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "XMDSEOD9TI",
      "validFrom": "2022-01-10 00:00:00",
      "validUntil": "2024-08-30 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-06-27 00:00:00",
      "passed": false,
      "nextDueDate": "2025-04-30 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 105,
      "recentPasses": [
        {
          "date": "2002-08-29 00:00:00",
          "location": "Antalya",
          "cost": 38
        },
        {
          "date": "2020-12-22 00:00:00",
          "location": "Bursa",
          "cost": 37
        },
        {
          "date": "2000-04-06 00:00:00",
          "location": "Bursa",
          "cost": 45
        }
      ]
    }
  },
  {
    "brandName": "Kia",
    "model": "Sportage",
    "typeOfCar": "Hatchback",
    "year": 2019,
    "image": [
      "https://example.com/images/kia_sportage.jpg"
    ],
    "vehicleIdentificationNumber": "SKD3S884HDRTHG0T4",
    "color": "Blue",
    "mileAge": 87290,
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "boughtPrice":15620,
    "requiredPrice": 17648,
    "available": true,
    "features": [
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2020-01-04 00:00:00",
          "reason": "Speeding",
          "amount": 249
        },
        {
          "date": "2023-03-06 00:00:00",
          "reason": "Speeding",
          "amount": 306
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "3V94GSD90G",
      "validFrom": "2023-02-19 00:00:00",
      "validUntil": "2025-05-21 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-10-02 00:00:00",
      "passed": true,
      "nextDueDate": "2025-02-22 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 187,
      "recentPasses": [
        {
          "date": "2002-06-10 00:00:00",
          "location": "Istanbul",
          "cost": 31
        },
        {
          "date": "2022-09-11 00:00:00",
          "location": "Ankara",
          "cost": 24
        }
      ]
    }
  },
  {
    "brandName": "Chevrolet",
    "model": "Cruze",
    "typeOfCar": "Hatchback",
    "year": 2003,
    "image": [
      "https://example.com/images/chevrolet_cruze.jpg"
    ],
    "vehicleIdentificationNumber": "0T0S9GSXDVEX4NAME",
    "color": "Black",
    "mileAge": 134482,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":75480,
    "soldPrice": 77028,
    "available": false,
    "features": [
      "Bluetooth",
      "Sunroof",
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2022-06-25 00:00:00",
      "fines": [
        {
          "date": "2015-07-26 00:00:00",
          "reason": "Speeding",
          "amount": 222
        },
        {
          "date": "2002-12-02 00:00:00",
          "reason": "Speeding",
          "amount": 143
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "YTSJDNL198",
      "validFrom": "2022-09-18 00:00:00",
      "validUntil": "2025-12-10 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-09-23 00:00:00",
      "passed": false,
      "nextDueDate": "2025-11-16 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 199,
      "recentPasses": [
        {
          "date": "2022-03-03 00:00:00",
          "location": "Istanbul",
          "cost": 46
        },
        {
          "date": "2002-12-17 00:00:00",
          "location": "Izmir",
          "cost": 33
        },
        {
          "date": "2013-12-04 00:00:00",
          "location": "Bursa",
          "cost": 28
        }
      ]
    }
  },
  {
    "brandName": "Nissan",
    "model": "Sentra",
    "typeOfCar": "SUV",
    "year": 2005,
    "image": [
      "https://example.com/images/nissan_sentra.jpg"
    ],
    "vehicleIdentificationNumber": "H3Y0DKDJ22SV7ZTED",
    "color": "Green",
    "mileAge": 33740,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":29750,
    "requiredPrice": 30859,
    "available": true,
    "features": [
      "Backup Camera",
      "Bluetooth",
      "Air Conditioning",
      "Sunroof",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": "2008-11-26 00:00:00",
      "fines": [
        {
          "date": "2004-08-13 00:00:00",
          "reason": "Speeding",
          "amount": 322
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "8GP3V7V9K5",
      "validFrom": "2022-06-22 00:00:00",
      "validUntil": "2024-12-19 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-12-27 00:00:00",
      "passed": true,
      "nextDueDate": "2026-10-18 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 195,
      "recentPasses": []
    }
  },
  {
    "brandName": "Chevrolet",
    "model": "Equinox",
    "typeOfCar": "Sedan",
    "year": 2007,
    "image": [
      "https://example.com/images/chevrolet_equinox.jpg"
    ],
    "vehicleIdentificationNumber": "HHXH7UM20VD0SAX90",
    "color": "Silver",
    "mileAge": 181161,
    "fuelType": "Petrol",
    "transmission": "Manual",
    "boughtPrice":63000,
    "requiredPrice": 64366,
    "available": true,
    "features": [
      "Backup Camera",
      "Air Conditioning",
      "Navigation System",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2006-01-31 00:00:00",
          "reason": "Speeding",
          "amount": 220
        },
        {
          "date": "2016-03-04 00:00:00",
          "reason": "Speeding",
          "amount": 369
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "T6U427H7NR",
      "validFrom": "2022-02-06 00:00:00",
      "validUntil": "2024-08-04 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-04-27 00:00:00",
      "passed": true,
      "nextDueDate": "2026-02-25 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 241,
      "recentPasses": [
        {
          "date": "2016-07-25 00:00:00",
          "location": "Bursa",
          "cost": 40
        },
        {
          "date": "2008-10-01 00:00:00",
          "location": "Ankara",
          "cost": 38
        }
      ]
    }
  },
  {
    "brandName": "Volkswagen",
    "model": "Jetta",
    "typeOfCar": "Hatchback",
    "year": 2007,
    "image": [
      "https://example.com/images/volkswagen_jetta.jpg"
    ],
    "vehicleIdentificationNumber": "E3CB6HKDRZDGCFGNJ",
    "color": "White",
    "mileAge": 25668,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":45000,
    "requiredPrice": 46062,
    "available": true,
    "features": [
      "Air Conditioning",
      "Navigation System",
      "Backup Camera",
      "Sunroof",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": "2022-09-19 00:00:00",
      "fines": [
        {
          "date": "2009-09-26 00:00:00",
          "reason": "Speeding",
          "amount": 131
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "CDO1Q815G2",
      "validFrom": "2022-06-13 00:00:00",
      "validUntil": "2024-02-18 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-08-30 00:00:00",
      "passed": true,
      "nextDueDate": "2026-01-31 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 27,
      "recentPasses": []
    }
  },
  {
    "brandName": "Mercedes",
    "model": "GLC",
    "typeOfCar": "Sedan",
    "year": 2008,
    "image": [
      "https://example.com/images/mercedes_glc.jpg"
    ],
    "vehicleIdentificationNumber": "FZ1H5ZLHD293AHTHA",
    "color": "Gray",
    "mileAge": 47018,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":10500,
    "requiredPrice": 11923,
    "available": true,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Sunroof",
      "Navigation System",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2020-10-12 00:00:00",
      "fines": []
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "4X972OVFMB",
      "validFrom": "2022-08-05 00:00:00",
      "validUntil": "2025-10-25 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-07-01 00:00:00",
      "passed": false,
      "nextDueDate": "2026-12-23 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 263,
      "recentPasses": [
        {
          "date": "2024-03-24 00:00:00",
          "location": "Izmir",
          "cost": 46
        }
      ]
    }
  },
  {
    "brandName": "Toyota",
    "model": "Corolla",
    "typeOfCar": "Hatchback",
    "year": 2005,
    "image": [
      "https://example.com/images/toyota_corolla.jpg"
    ],
    "vehicleIdentificationNumber": "3R9JEKNVGF3KHNB2D",
    "color": "Silver",
    "mileAge": 132024,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":82000,
    "soldPrice": 83714,
    "available": false,
    "features": [
      "Bluetooth",
      "Navigation System",
      "Backup Camera",
      "Air Conditioning",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": "2004-10-16 00:00:00",
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "DBT4QA3J42",
      "validFrom": "2022-03-26 00:00:00",
      "validUntil": "2024-03-02 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-09-21 00:00:00",
      "passed": true,
      "nextDueDate": "2025-01-31 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 55,
      "recentPasses": [
        {
          "date": "2023-03-14 00:00:00",
          "location": "Bursa",
          "cost": 24
        },
        {
          "date": "2012-09-16 00:00:00",
          "location": "Antalya",
          "cost": 49
        }
      ]
    }
  },
  {
    "brandName": "Mercedes",
    "model": "C Class",
    "typeOfCar": "Hatchback",
    "year": 2024,
    "image": [
      "https://example.com/images/mercedes_c class.jpg"
    ],
    "vehicleIdentificationNumber": "J3325BZNFUWGXKNX3",
    "color": "Black",
    "mileAge": 242414,
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "boughtPrice":34000,
    "soldPrice": 36066,
    "available": false,
    "features": [
      "Bluetooth",
      "Backup Camera",
      "Sunroof",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "PT1QVV2W3C",
      "validFrom": "2023-10-14 00:00:00",
      "validUntil": "2025-11-20 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-11-28 00:00:00",
      "passed": true,
      "nextDueDate": "2025-07-13 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 36,
      "recentPasses": [
        {
          "date": "2020-06-28 00:00:00",
          "location": "Bursa",
          "cost": 48
        },
        {
          "date": "2001-09-21 00:00:00",
          "location": "Ankara",
          "cost": 45
        },
        {
          "date": "2013-05-18 00:00:00",
          "location": "Izmir",
          "cost": 41
        }
      ]
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Santa Fe",
    "typeOfCar": "SUV",
    "year": 2004,
    "image": [
      "https://example.com/images/hyundai_santa fe.jpg"
    ],
    "vehicleIdentificationNumber": "A974NR2BMMJJFU4LF",
    "color": "Black",
    "mileAge": 179648,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "boughtPrice":85450,
    "requiredPrice": 86966,
    "available": true,
    "features": [
      "Backup Camera",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2013-11-23 00:00:00",
          "reason": "Speeding",
          "amount": 194
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "DEGKLAKMSV",
      "validFrom": "2023-08-02 00:00:00",
      "validUntil": "2025-05-27 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-01-16 00:00:00",
      "passed": true,
      "nextDueDate": "2026-04-06 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 66,
      "recentPasses": [
        {
          "date": "2010-08-22 00:00:00",
          "location": "Istanbul",
          "cost": 26
        },
        {
          "date": "2018-10-13 00:00:00",
          "location": "Antalya",
          "cost": 30
        }
      ]
    }
  },
  {
    "brandName": "Ford",
    "model": "Escape",
    "typeOfCar": "SUV",
    "year": 2009,
    "image": [
      "https://example.com/images/ford_escape.jpg"
    ],
    "vehicleIdentificationNumber": "10ZTXWYF8BJ44AFDD",
    "color": "White",
    "mileAge": 29068,
    "fuelType": "Hybrid",
    "transmission": "Manual",
    "boughtPrice":20000,
    "requiredPrice": 21224,
    "available": true,
    "features": [
      "Sunroof",
      "Navigation System",
      "Air Conditioning",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": "2008-04-27 00:00:00",
      "fines": [
        {
          "date": "2006-07-02 00:00:00",
          "reason": "Speeding",
          "amount": 403
        },
        {
          "date": "2011-07-03 00:00:00",
          "reason": "Speeding",
          "amount": 481
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "MEIHXVL1N0",
      "validFrom": "2022-02-04 00:00:00",
      "validUntil": "2025-07-31 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-10-02 00:00:00",
      "passed": true,
      "nextDueDate": "2025-11-19 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 383,
      "recentPasses": [
        {
          "date": "2008-03-04 00:00:00",
          "location": "Izmir",
          "cost": 31
        },
        {
          "date": "2007-09-01 00:00:00",
          "location": "Izmir",
          "cost": 41
        }
      ]
    }
  },
  {
    "brandName": "Honda",
    "model": "Civic",
    "typeOfCar": "Sedan",
    "year": 2024,
    "image": [
      "https://example.com/images/honda_civic.jpg"
    ],
    "vehicleIdentificationNumber": "16B54JY3EM2CC6W1E",
    "color": "Silver",
    "mileAge": 283233,
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "boughtPrice":32560,
    "requiredPrice": 33913,
    "available": true,
    "features": [
      "Sunroof",
      "Air Conditioning",
      "Navigation System",
      "Bluetooth",
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2014-06-19 00:00:00",
          "reason": "Speeding",
          "amount": 332
        },
        {
          "date": "2017-12-20 00:00:00",
          "reason": "Speeding",
          "amount": 192
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "NY7OIQ4EY5",
      "validFrom": "2023-02-28 00:00:00",
      "validUntil": "2025-12-13 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-11-14 00:00:00",
      "passed": false,
      "nextDueDate": "2026-12-29 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 227,
      "recentPasses": [
        {
          "date": "2006-02-02 00:00:00",
          "location": "Bursa",
          "cost": 45
        }
      ]
    }
  },
  {
    "brandName": "Honda",
    "model": "Civic",
    "typeOfCar": "Sedan",
    "year": 2025,
    "image": [
      "https://example.com/images/honda_civic.jpg"
    ],
    "vehicleIdentificationNumber": "WWK75YZ7BZZ8DZ9UL",
    "color": "Silver",
    "mileAge": 265146,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":62560,
    "soldPrice": 64022,
    "available": false,
    "features": [
      "Sunroof",
      "Bluetooth",
      "Navigation System",
      "Backup Camera",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2023-05-01 00:00:00",
          "reason": "Speeding",
          "amount": 317
        },
        {
          "date": "2001-08-13 00:00:00",
          "reason": "Speeding",
          "amount": 322
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "7IR43YWB2B",
      "validFrom": "2023-09-30 00:00:00",
      "validUntil": "2024-08-30 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-06-24 00:00:00",
      "passed": false,
      "nextDueDate": "2026-01-12 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 397,
      "recentPasses": [
        {
          "date": "2002-11-10 00:00:00",
          "location": "Istanbul",
          "cost": 47
        },
        {
          "date": "2014-06-23 00:00:00",
          "location": "Bursa",
          "cost": 29
        }
      ]
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Santa Fe",
    "typeOfCar": "Sedan",
    "year": 2019,
    "image": [
      "https://example.com/images/hyundai_santa fe.jpg"
    ],
    "vehicleIdentificationNumber": "WW5ADLELNDVPULWYM",
    "color": "Blue",
    "mileAge": 83771,
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "boughtPrice":84000,
    "requiredPrice": 85513,
    "available": true,
    "features": [
      "Navigation System",
      "Air Conditioning",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2014-10-31 00:00:00",
      "fines": [
        {
          "date": "2024-01-17 00:00:00",
          "reason": "Speeding",
          "amount": 312
        },
        {
          "date": "2006-10-21 00:00:00",
          "reason": "Speeding",
          "amount": 142
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "9S7C86O642",
      "validFrom": "2023-01-04 00:00:00",
      "validUntil": "2025-02-07 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-12-19 00:00:00",
      "passed": true,
      "nextDueDate": "2026-09-24 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 311,
      "recentPasses": [
        {
          "date": "2015-05-19 00:00:00",
          "location": "Izmir",
          "cost": 36
        },
        {
          "date": "2023-10-30 00:00:00",
          "location": "Ankara",
          "cost": 11
        }
      ]
    }
  },
  {
    "brandName": "Mercedes",
    "model": "GLC",
    "typeOfCar": "SUV",
    "year": 2007,
    "image": [
      "https://example.com/images/mercedes_glc.jpg"
    ],
    "vehicleIdentificationNumber": "08PVS8ET5ZZKA7EPS",
    "color": "Silver",
    "mileAge": 11333,
    "fuelType": "Hybrid",
    "transmission": "Manual",
    "boughtPrice":82000,
    "soldPrice": 83571,
    "available": false,
    "features": [
      "Air Conditioning",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2005-09-20 00:00:00",
      "fines": [
        {
          "date": "2021-08-25 00:00:00",
          "reason": "Speeding",
          "amount": 385
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "GHOGRB9Q47",
      "validFrom": "2022-12-13 00:00:00",
      "validUntil": "2024-03-31 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-07-11 00:00:00",
      "passed": true,
      "nextDueDate": "2025-08-14 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 357,
      "recentPasses": [
        {
          "date": "2012-03-17 00:00:00",
          "location": "Izmir",
          "cost": 42
        }
      ]
    }
  },
  {
    "brandName": "Toyota",
    "model": "RAV4",
    "typeOfCar": "Sedan",
    "year": 2008,
    "image": [
      "https://example.com/images/toyota_rav4.jpg"
    ],
    "vehicleIdentificationNumber": "NCF0A7R5H1NMKN5NG",
    "color": "Green",
    "mileAge": 197682,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":65650,
    "requiredPrice": 67646,
    "available": true,
    "features": [
      "Air Conditioning",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": "2022-03-17 00:00:00",
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "N1SMRDMXHQ",
      "validFrom": "2023-12-06 00:00:00",
      "validUntil": "2025-03-09 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-06-28 00:00:00",
      "passed": false,
      "nextDueDate": "2026-11-23 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 353,
      "recentPasses": [
        {
          "date": "2001-04-25 00:00:00",
          "location": "Istanbul",
          "cost": 14
        },
        {
          "date": "2022-08-10 00:00:00",
          "location": "Izmir",
          "cost": 20
        },
        {
          "date": "2005-02-26 00:00:00",
          "location": "Bursa",
          "cost": 16
        }
      ]
    }
  },
  {
    "brandName": "Mercedes",
    "model": "C Class",
    "typeOfCar": "SUV",
    "year": 2016,
    "image": [
      "https://example.com/images/mercedes_c class.jpg"
    ],
    "vehicleIdentificationNumber": "4494HW27LURXB91GW",
    "color": "White",
    "mileAge": 230829,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":19584,
    "requiredPrice": 20560,
    "available": true,
    "features": [
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2019-10-23 00:00:00",
      "fines": [
        {
          "date": "2003-07-06 00:00:00",
          "reason": "Speeding",
          "amount": 375
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "451BOLRJS5",
      "validFrom": "2023-07-27 00:00:00",
      "validUntil": "2024-10-23 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-12-09 00:00:00",
      "passed": false,
      "nextDueDate": "2026-05-01 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 157,
      "recentPasses": [
        {
          "date": "2009-10-30 00:00:00",
          "location": "Ankara",
          "cost": 30
        },
        {
          "date": "2005-02-04 00:00:00",
          "location": "Izmir",
          "cost": 45
        }
      ]
    }
  },
  {
    "brandName": "Chevrolet",
    "model": "Equinox",
    "typeOfCar": "SUV",
    "year": 2025,
    "image": [
      "https://example.com/images/chevrolet_equinox.jpg"
    ],
    "vehicleIdentificationNumber": "JG1M70VRN6KTMVFR9",
    "color": "Silver",
    "mileAge": 110857,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":56000,
    "soldPrice": 57262,
    "available": false,
    "features": [
      "Navigation System",
      "Sunroof",
      "Air Conditioning",
      "Backup Camera",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": "2014-06-06 00:00:00",
      "fines": [
        {
          "date": "2021-09-01 00:00:00",
          "reason": "Speeding",
          "amount": 206
        },
        {
          "date": "2009-07-05 00:00:00",
          "reason": "Speeding",
          "amount": 317
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "P8O4DC4NRC",
      "validFrom": "2022-05-18 00:00:00",
      "validUntil": "2024-01-18 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-04-10 00:00:00",
      "passed": true,
      "nextDueDate": "2026-10-08 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 90,
      "recentPasses": [
        {
          "date": "2024-11-17 00:00:00",
          "location": "Antalya",
          "cost": 47
        }
      ]
    }
  },
  {
    "brandName": "BMW",
    "model": "X5",
    "typeOfCar": "SUV",
    "year": 2017,
    "image": [
      "https://example.com/images/bmw_x5.jpg"
    ],
    "vehicleIdentificationNumber": "CRHE1E4FAFFAVG152",
    "color": "White",
    "mileAge": 78267,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":29000,
    "soldPrice": 30192,
    "available": false,
    "features": [
      "Backup Camera",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2021-06-29 00:00:00",
      "fines": [
        {
          "date": "2011-06-04 00:00:00",
          "reason": "Speeding",
          "amount": 258
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "CJ89YWP1SJ",
      "validFrom": "2022-03-27 00:00:00",
      "validUntil": "2024-05-23 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-02-22 00:00:00",
      "passed": false,
      "nextDueDate": "2025-10-14 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 33,
      "recentPasses": [
        {
          "date": "2012-11-04 00:00:00",
          "location": "Ankara",
          "cost": 40
        }
      ]
    }
  },
  {
    "brandName": "Honda",
    "model": "CR-V",
    "typeOfCar": "Hatchback",
    "year": 2004,
    "image": [
      "https://example.com/images/honda_cr-v.jpg"
    ],
    "vehicleIdentificationNumber": "HSV0JXWR2238JPEW2",
    "color": "Black",
    "mileAge": 290593,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":50000,
    "requiredPrice": 51813,
    "available": true,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2003-10-25 00:00:00",
      "fines": [
        {
          "date": "2020-02-01 00:00:00",
          "reason": "Speeding",
          "amount": 225
        },
        {
          "date": "2008-08-12 00:00:00",
          "reason": "Speeding",
          "amount": 436
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "FRKHYRA2ZR",
      "validFrom": "2023-05-14 00:00:00",
      "validUntil": "2024-03-06 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-11-12 00:00:00",
      "passed": true,
      "nextDueDate": "2025-10-29 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 486,
      "recentPasses": [
        {
          "date": "2024-12-05 00:00:00",
          "location": "Ankara",
          "cost": 47
        },
        {
          "date": "2009-12-08 00:00:00",
          "location": "Ankara",
          "cost": 45
        },
        {
          "date": "2020-01-11 00:00:00",
          "location": "Izmir",
          "cost": 11
        }
      ]
    }
  },
  {
    "brandName": "Mercedes",
    "model": "GLA",
    "typeOfCar": "Hatchback",
    "year": 2017,
    "image": [
      "https://example.com/images/mercedes_gla.jpg"
    ],
    "vehicleIdentificationNumber": "MX3W3825GFMU282CH",
    "color": "Silver",
    "mileAge": 88289,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":72586,
    "soldPrice": 73537,
    "available": false,
    "features": [
      "Sunroof",
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": "2005-06-17 00:00:00",
      "fines": [
        {
          "date": "2018-07-17 00:00:00",
          "reason": "Speeding",
          "amount": 120
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "2X5FJCB20C",
      "validFrom": "2023-10-09 00:00:00",
      "validUntil": "2024-05-29 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-07-26 00:00:00",
      "passed": true,
      "nextDueDate": "2025-09-12 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 181,
      "recentPasses": [
        {
          "date": "2014-10-29 00:00:00",
          "location": "Antalya",
          "cost": 43
        },
        {
          "date": "2009-04-15 00:00:00",
          "location": "Istanbul",
          "cost": 41
        },
        {
          "date": "2022-08-07 00:00:00",
          "location": "Istanbul",
          "cost": 19
        }
      ]
    }
  },
  {
    "brandName": "Kia",
    "model": "Forte",
    "typeOfCar": "Sedan",
    "year": 2015,
    "image": [
      "https://example.com/images/kia_forte.jpg"
    ],
    "vehicleIdentificationNumber": "V9RM2L0TNJ2UG1S5W",
    "color": "Black",
    "mileAge": 192692,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":75826,
    "soldPrice": 76217,
    "available": false,
    "features": [
      "Backup Camera",
      "Air Conditioning",
      "Sunroof",
      "Bluetooth",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2007-03-28 00:00:00",
          "reason": "Speeding",
          "amount": 451
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "O01B02URO4",
      "validFrom": "2023-07-23 00:00:00",
      "validUntil": "2024-05-09 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-10-17 00:00:00",
      "passed": false,
      "nextDueDate": "2026-11-17 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 391,
      "recentPasses": [
        {
          "date": "2013-04-02 00:00:00",
          "location": "Izmir",
          "cost": 13
        }
      ]
    }
  },
  {
    "brandName": "Honda",
    "model": "CR-V",
    "typeOfCar": "Hatchback",
    "year": 2009,
    "image": [
      "https://example.com/images/honda_cr-v.jpg"
    ],
    "vehicleIdentificationNumber": "MWLT0W2713CY898SP",
    "color": "Blue",
    "mileAge": 177991,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":34500,
    "soldPrice": 37939,
    "available": false,
    "features": [
      "Sunroof",
      "Air Conditioning",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2009-05-07 00:00:00",
      "fines": [
        {
          "date": "2016-01-01 00:00:00",
          "reason": "Speeding",
          "amount": 318
        },
        {
          "date": "2018-09-29 00:00:00",
          "reason": "Speeding",
          "amount": 253
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "WASW5GNX5F",
      "validFrom": "2022-03-05 00:00:00",
      "validUntil": "2025-11-16 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-11-21 00:00:00",
      "passed": false,
      "nextDueDate": "2025-02-06 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 319,
      "recentPasses": [
        {
          "date": "2021-12-08 00:00:00",
          "location": "Antalya",
          "cost": 38
        },
        {
          "date": "2024-03-26 00:00:00",
          "location": "Izmir",
          "cost": 47
        },
        {
          "date": "2021-01-27 00:00:00",
          "location": "Istanbul",
          "cost": 10
        }
      ]
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Tucson",
    "typeOfCar": "Hatchback",
    "year": 2006,
    "image": [
      "https://example.com/images/hyundai_tucson.jpg"
    ],
    "vehicleIdentificationNumber": "Z54A5V549ABFWY2RY",
    "color": "Silver",
    "mileAge": 291863,
    "fuelType": "Hybrid",
    "transmission": "Manual",
    "boughtPrice":42500,
    "soldPrice": 43670,
    "available": false,
    "features": [
      "Sunroof",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2023-01-19 00:00:00",
          "reason": "Speeding",
          "amount": 365
        },
        {
          "date": "2021-11-17 00:00:00",
          "reason": "Speeding",
          "amount": 292
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "MQT5IXGALB",
      "validFrom": "2023-08-02 00:00:00",
      "validUntil": "2025-06-02 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-05-06 00:00:00",
      "passed": true,
      "nextDueDate": "2026-06-12 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 265,
      "recentPasses": []
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Tucson",
    "typeOfCar": "SUV",
    "year": 2001,
    "image": [
      "https://example.com/images/hyundai_tucson.jpg"
    ],
    "vehicleIdentificationNumber": "J7HAFX22NZLXB8RPV",
    "color": "White",
    "mileAge": 176198,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":28000,
    "requiredPrice": 29806,
    "available": true,
    "features": [
      "Sunroof",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "3DHJGRHCI4",
      "validFrom": "2023-07-18 00:00:00",
      "validUntil": "2024-03-15 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-10-05 00:00:00",
      "passed": true,
      "nextDueDate": "2026-05-15 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 106,
      "recentPasses": []
    }
  },
  {
    "brandName": "Honda",
    "model": "CR-V",
    "typeOfCar": "Hatchback",
    "year": 2025,
    "image": [
      "https://example.com/images/honda_cr-v.jpg"
    ],
    "vehicleIdentificationNumber": "H6WF90KT4XG3XFV6G",
    "color": "Red",
    "mileAge": 139364,
    "fuelType": "Petrol",
    "transmission": "Manual",
    "boughtPrice":7400,
    "soldPrice": 7737,
    "available": false,
    "features": [
      "Navigation System",
      "Backup Camera",
      "Air Conditioning",
      "Sunroof",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2020-01-09 00:00:00",
          "reason": "Speeding",
          "amount": 413
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "UTJDE2PPUO",
      "validFrom": "2022-06-16 00:00:00",
      "validUntil": "2024-05-11 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-05-23 00:00:00",
      "passed": false,
      "nextDueDate": "2026-12-28 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 43,
      "recentPasses": [
        {
          "date": "2000-04-17 00:00:00",
          "location": "Istanbul",
          "cost": 13
        },
        {
          "date": "2009-12-17 00:00:00",
          "location": "Bursa",
          "cost": 29
        }
      ]
    }
  },
  {
    "brandName": "Ford",
    "model": "Escape",
    "typeOfCar": "SUV",
    "year": 2013,
    "image": [
      "https://example.com/images/ford_escape.jpg"
    ],
    "vehicleIdentificationNumber": "N4P20RLLXBJ03GV25",
    "color": "Black",
    "mileAge": 167169,
    "fuelType": "Petrol",
    "transmission": "Manual",
    "boughtPrice":33000,
    "requiredPrice": 35704,
    "available": true,
    "features": [
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2016-08-09 00:00:00",
          "reason": "Speeding",
          "amount": 215
        },
        {
          "date": "2023-10-30 00:00:00",
          "reason": "Speeding",
          "amount": 369
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "CLGLA4RQGR",
      "validFrom": "2022-12-28 00:00:00",
      "validUntil": "2025-03-11 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-05-25 00:00:00",
      "passed": false,
      "nextDueDate": "2026-02-02 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 207,
      "recentPasses": [
        {
          "date": "2018-05-15 00:00:00",
          "location": "Ankara",
          "cost": 39
        }
      ]
    }
  },
  {
    "brandName": "Volkswagen",
    "model": "Tiguan",
    "typeOfCar": "SUV",
    "year": 2007,
    "image": [
      "https://example.com/images/volkswagen_tiguan.jpg"
    ],
    "vehicleIdentificationNumber": "40WK0KPWDUJ7TR5CU",
    "color": "Silver",
    "mileAge": 226613,
    "fuelType": "Petrol",
    "transmission": "Manual",
    "boughtPrice":67589,
    "requiredPrice": 69751,
    "available": true,
    "features": [
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "SADRDWHMML",
      "validFrom": "2023-10-22 00:00:00",
      "validUntil": "2024-05-22 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-01-29 00:00:00",
      "passed": true,
      "nextDueDate": "2026-06-20 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 310,
      "recentPasses": [
        {
          "date": "2002-12-29 00:00:00",
          "location": "Ankara",
          "cost": 36
        },
        {
          "date": "2007-12-21 00:00:00",
          "location": "Antalya",
          "cost": 34
        }
      ]
    }
  },
  {
    "brandName": "Chevrolet",
    "model": "Malibu",
    "typeOfCar": "Hatchback",
    "year": 2015,
    "image": [
      "https://example.com/images/chevrolet_malibu.jpg"
    ],
    "vehicleIdentificationNumber": "52S0WA6KVEYEVJ66G",
    "color": "Silver",
    "mileAge": 120158,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":65750,
    "requiredPrice": 66979,
    "available": true,
    "features": [
      "Bluetooth",
      "Backup Camera",
      "Navigation System",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": "2001-01-14 00:00:00",
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "POY7AY6CJD",
      "validFrom": "2023-09-26 00:00:00",
      "validUntil": "2025-12-16 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-06-12 00:00:00",
      "passed": false,
      "nextDueDate": "2025-04-03 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 294,
      "recentPasses": [
        {
          "date": "2022-03-10 00:00:00",
          "location": "Bursa",
          "cost": 32
        }
      ]
    }
  },
  {
    "brandName": "Toyota",
    "model": "Camry",
    "typeOfCar": "Hatchback",
    "year": 2017,
    "image": [
      "https://example.com/images/toyota_camry.jpg"
    ],
    "vehicleIdentificationNumber": "A5DUYXS8KRZ01GBFY",
    "color": "White",
    "mileAge": 197954,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":27000,
    "soldPrice": 28218,
    "available": false,
    "features": [
      "Navigation System",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": "2024-12-08 00:00:00",
      "fines": [
        {
          "date": "2017-07-06 00:00:00",
          "reason": "Speeding",
          "amount": 371
        },
        {
          "date": "2023-09-16 00:00:00",
          "reason": "Speeding",
          "amount": 222
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "2OVN48D93E",
      "validFrom": "2023-06-01 00:00:00",
      "validUntil": "2024-05-03 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-10-11 00:00:00",
      "passed": true,
      "nextDueDate": "2026-01-11 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 202,
      "recentPasses": []
    }
  },
  {
    "brandName": "Mercedes",
    "model": "GLA",
    "typeOfCar": "SUV",
    "year": 2011,
    "image": [
      "https://example.com/images/mercedes_gla.jpg"
    ],
    "vehicleIdentificationNumber": "KCXPEDAFS5YGWBE4B",
    "color": "Red",
    "mileAge": 221991,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":94000,
    "soldPrice": 97143,
    "available": false,
    "features": [
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2016-12-11 00:00:00",
      "fines": [
        {
          "date": "2024-06-16 00:00:00",
          "reason": "Speeding",
          "amount": 202
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "5X92BL3UY3",
      "validFrom": "2022-03-12 00:00:00",
      "validUntil": "2025-07-07 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-08-17 00:00:00",
      "passed": true,
      "nextDueDate": "2026-04-29 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 160,
      "recentPasses": [
        {
          "date": "2002-12-28 00:00:00",
          "location": "Izmir",
          "cost": 22
        },
        {
          "date": "2005-12-18 00:00:00",
          "location": "Izmir",
          "cost": 37
        }
      ]
    }
  },
  {
    "brandName": "Honda",
    "model": "CR-V",
    "typeOfCar": "Hatchback",
    "year": 2015,
    "image": [
      "https://example.com/images/honda_cr-v.jpg"
    ],
    "vehicleIdentificationNumber": "2LH8UH55NL3TJVB7H",
    "color": "Red",
    "mileAge": 282029,
    "fuelType": "Petrol",
    "transmission": "Automatic",
    "boughtPrice":85000,
    "requiredPrice": 87786,
    "available": true,
    "features": [
      "Sunroof",
      "Bluetooth",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2017-07-30 00:00:00",
      "fines": [
        {
          "date": "2015-05-02 00:00:00",
          "reason": "Speeding",
          "amount": 169
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "XMM00Q2RZI",
      "validFrom": "2023-10-18 00:00:00",
      "validUntil": "2024-07-24 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-12-07 00:00:00",
      "passed": true,
      "nextDueDate": "2025-01-07 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 324,
      "recentPasses": []
    }
  },
  {
    "brandName": "Toyota",
    "model": "RAV4",
    "typeOfCar": "Hatchback",
    "year": 2025,
    "image": [
      "https://example.com/images/toyota_rav4.jpg"
    ],
    "vehicleIdentificationNumber": "FS1HS7K404108N5R6",
    "color": "Green",
    "mileAge": 205537,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":69850,
    "soldPrice": 71806,
    "available": false,
    "features": [
      "Backup Camera",
      "Sunroof",
      "Bluetooth",
      "Navigation System",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2018-10-12 00:00:00",
          "reason": "Speeding",
          "amount": 477
        },
        {
          "date": "2005-02-21 00:00:00",
          "reason": "Speeding",
          "amount": 215
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Zurich",
      "policyNumber": "B9ZV813EMO",
      "validFrom": "2023-05-15 00:00:00",
      "validUntil": "2025-10-12 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-06-03 00:00:00",
      "passed": true,
      "nextDueDate": "2025-02-21 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 320,
      "recentPasses": []
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Santa Fe",
    "typeOfCar": "SUV",
    "year": 2011,
    "image": [
      "https://example.com/images/hyundai_santa fe.jpg"
    ],
    "vehicleIdentificationNumber": "T978B9TKUDM3NCSCM",
    "color": "Blue",
    "mileAge": 35078,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":90000,
    "requiredPrice": 92678,
    "available": true,
    "features": [
      "Air Conditioning",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "TOXMWF1JVH",
      "validFrom": "2022-04-01 00:00:00",
      "validUntil": "2024-03-03 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-10-21 00:00:00",
      "passed": false,
      "nextDueDate": "2025-09-15 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 240,
      "recentPasses": []
    }
  },
  {
    "brandName": "Nissan",
    "model": "Altima",
    "typeOfCar": "SUV",
    "year": 2004,
    "image": [
      "https://example.com/images/nissan_altima.jpg"
    ],
    "vehicleIdentificationNumber": "FJAP6YMC1ZAC53GHN",
    "color": "White",
    "mileAge": 57383,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "boughtPrice":38000,
    "soldPrice": 40066,
    "available": false,
    "features": [
      "Bluetooth",
      "Air Conditioning",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2024-02-26 00:00:00",
          "reason": "Speeding",
          "amount": 437
        },
        {
          "date": "2003-11-13 00:00:00",
          "reason": "Speeding",
          "amount": 269
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "Y277JCBDKI",
      "validFrom": "2022-08-07 00:00:00",
      "validUntil": "2025-07-29 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": true,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-12-24 00:00:00",
      "passed": false,
      "nextDueDate": "2026-05-07 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 87,
      "recentPasses": [
        {
          "date": "2003-07-01 00:00:00",
          "location": "Bursa",
          "cost": 18
        },
        {
          "date": "2006-10-05 00:00:00",
          "location": "Izmir",
          "cost": 32
        }
      ]
    }
  },
  {
    "brandName": "Toyota",
    "model": "Corolla",
    "typeOfCar": "SUV",
    "year": 2025,
    "image": [
      "https://example.com/images/toyota_corolla.jpg"
    ],
    "vehicleIdentificationNumber": "YLFTSEDC0VETHZDUA",
    "color": "White",
    "mileAge": 154844,
    "fuelType": "Hybrid",
    "transmission": "Automatic",
    "boughtPrice":8500,
    "requiredPrice": 10911,
    "available": true,
    "features": [
      "Sunroof",
      "Backup Camera",
      "Bluetooth",
      "Air Conditioning"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "8WNSB4653L",
      "validFrom": "2022-04-28 00:00:00",
      "validUntil": "2024-09-07 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-03-04 00:00:00",
      "passed": true,
      "nextDueDate": "2026-12-06 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 59,
      "recentPasses": [
        {
          "date": "2008-05-31 00:00:00",
          "location": "Istanbul",
          "cost": 33
        },
        {
          "date": "2009-07-29 00:00:00",
          "location": "Bursa",
          "cost": 48
        }
      ]
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Tucson",
    "typeOfCar": "Hatchback",
    "year": 2011,
    "image": [
      "https://example.com/images/hyundai_tucson.jpg"
    ],
    "vehicleIdentificationNumber": "LF1DUZ73RBDHM1H1F",
    "color": "Black",
    "mileAge": 172911,
    "fuelType": "Diesel",
    "transmission": "Manual",
    "boughtPrice":22456,
    "soldPrice": 24682,
    "available": false,
    "features": [
      "Navigation System",
      "Backup Camera",
      "Air Conditioning",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 0,
      "lastAccidentDate": "2000-10-02 00:00:00",
      "fines": [
        {
          "date": "2013-08-13 00:00:00",
          "reason": "Speeding",
          "amount": 242
        },
        {
          "date": "2005-01-21 00:00:00",
          "reason": "Speeding",
          "amount": 138
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "RM3G5GKI3R",
      "validFrom": "2022-02-19 00:00:00",
      "validUntil": "2025-08-25 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-04-28 00:00:00",
      "passed": false,
      "nextDueDate": "2025-01-08 00:00:00",
      "exhaustEmissionLevel": "Low"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": false,
      "balance": 361,
      "recentPasses": []
    }
  },
  {
    "brandName": "Hyundai",
    "model": "Santa Fe",
    "typeOfCar": "Hatchback",
    "year": 2025,
    "image": [
      "https://example.com/images/hyundai_santa fe.jpg"
    ],
    "vehicleIdentificationNumber": "TN4U7G1E5L9SK6ZL1",
    "color": "Gray",
    "mileAge": 241118,
    "fuelType": "Petrol",
    "transmission": "Manual",
    "boughtPrice":82789,
    "soldPrice": 85875,
    "available": false,
    "features": [
      "Sunroof",
      "Air Conditioning",
      "Backup Camera",
      "Navigation System"
    ],
    "trafficInfo": {
      "accidentCount": 3,
      "lastAccidentDate": null,
      "fines": []
    },
    "insuranceStatus": {
      "provider": "Mapfre",
      "policyNumber": "YOBGZSBORI",
      "validFrom": "2022-07-11 00:00:00",
      "validUntil": "2025-09-12 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2022-08-03 00:00:00",
      "passed": true,
      "nextDueDate": "2025-02-15 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 136,
      "recentPasses": [
        {
          "date": "2004-01-14 00:00:00",
          "location": "Antalya",
          "cost": 27
        },
        {
          "date": "2019-10-10 00:00:00",
          "location": "Ankara",
          "cost": 15
        }
      ]
    }
  },
  {
    "brandName": "Kia",
    "model": "Sportage",
    "typeOfCar": "Hatchback",
    "year": 2023,
    "image": [
      "https://example.com/images/kia_sportage.jpg"
    ],
    "vehicleIdentificationNumber": "5WHD1WEEKG947B96S",
    "color": "Green",
    "mileAge": 273242,
    "fuelType": "Electric",
    "transmission": "Automatic",
    "boughtPrice":5000,
    "requiredPrice": 5424,
    "available": true,
    "features": [
      "Backup Camera"
    ],
    "trafficInfo": {
      "accidentCount": 1,
      "lastAccidentDate": "2006-03-18 00:00:00",
      "fines": [
        {
          "date": "2024-07-19 00:00:00",
          "reason": "Speeding",
          "amount": 459
        },
        {
          "date": "2003-12-23 00:00:00",
          "reason": "Speeding",
          "amount": 437
        }
      ]
    },
    "insuranceStatus": {
      "provider": "AXA",
      "policyNumber": "UQC7AM5NX5",
      "validFrom": "2023-11-08 00:00:00",
      "validUntil": "2025-12-30 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": false,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2023-05-26 00:00:00",
      "passed": false,
      "nextDueDate": "2025-08-16 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": false,
      "ogsActive": true,
      "balance": 213,
      "recentPasses": [
        {
          "date": "2005-03-17 00:00:00",
          "location": "Izmir",
          "cost": 38
        },
        {
          "date": "2014-08-06 00:00:00",
          "location": "Bursa",
          "cost": 34
        }
      ]
    }
  },
  {
    "brandName": "BMW",
    "model": "X3",
    "typeOfCar": "Sedan",
    "year": 2021,
    "image": [
      "https://example.com/images/bmw_x3.jpg"
    ],
    "vehicleIdentificationNumber": "T6PULM85YZAWATV8B",
    "color": "Green",
    "mileAge": 268730,
    "fuelType": "Electric",
    "transmission": "Manual",
    "boughtPrice":85236,
    "requiredPrice": 87505,
    "available": true,
    "features": [
      "Air Conditioning",
      "Backup Camera",
      "Sunroof",
      "Bluetooth"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": "2018-02-13 00:00:00",
      "fines": [
        {
          "date": "2005-03-07 00:00:00",
          "reason": "Speeding",
          "amount": 202
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "40KHNABML5",
      "validFrom": "2022-01-15 00:00:00",
      "validUntil": "2025-10-08 00:00:00",
      "isActive": false
    },
    "legalStatus": {
      "hasCriminalRecord": false,
      "hasDebt": true,
      "notes": "No issues"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-12-12 00:00:00",
      "passed": false,
      "nextDueDate": "2025-09-01 00:00:00",
      "exhaustEmissionLevel": "High"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": false,
      "balance": 500,
      "recentPasses": [
        {
          "date": "2005-04-27 00:00:00",
          "location": "Istanbul",
          "cost": 34
        },
        {
          "date": "2003-08-14 00:00:00",
          "location": "Ankara",
          "cost": 26
        }
      ]
    }
  },
  {
    "brandName": "Mercedes",
    "model": "C Class",
    "typeOfCar": "SUV",
    "year": 2021,
    "image": [
      "https://example.com/images/mercedes_c class.jpg"
    ],
    "vehicleIdentificationNumber": "LRZK5U2110SR9HJD7",
    "color": "Silver",
    "mileAge": 238549,
    "fuelType": "Diesel",
    "transmission": "Automatic",
    "boughtPrice":75000,
    "soldPrice": 78194,
    "available": false,
    "features": [
      "Backup Camera",
      "Bluetooth",
      "Sunroof"
    ],
    "trafficInfo": {
      "accidentCount": 2,
      "lastAccidentDate": null,
      "fines": [
        {
          "date": "2002-05-16 00:00:00",
          "reason": "Speeding",
          "amount": 289
        }
      ]
    },
    "insuranceStatus": {
      "provider": "Allianz",
      "policyNumber": "H9AOO1EYBY",
      "validFrom": "2022-02-04 00:00:00",
      "validUntil": "2025-08-30 00:00:00",
      "isActive": true
    },
    "legalStatus": {
      "hasCriminalRecord": true,
      "hasDebt": true,
      "notes": "Under investigation"
    },
    "inspectionStatus": {
      "lastInspectionDate": "2024-06-08 00:00:00",
      "passed": false,
      "nextDueDate": "2026-08-07 00:00:00",
      "exhaustEmissionLevel": "Moderate"
    },
    "tollInfo": {
      "hgsActive": true,
      "ogsActive": true,
      "balance": 446,
      "recentPasses": [
        {
          "date": "2002-07-05 00:00:00",
          "location": "Istanbul",
          "cost": 18
        }
      ]
    }
  }
];

module.exports = { cars }