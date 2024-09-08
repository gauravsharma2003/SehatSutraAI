const doctorsData = [
  {
    "image": "/doctor.png",
    "name": "Dr. Sarah Johnson",
    "qualification": "MBBS, MD (Cardiology)",
    "years_of_experience": 12,
    "available_appointments": [
      {
        "date": "2024-09-12",
        "time": "09:00 AM - 11:00 AM"
      },
      {
        "date": "2024-09-15",
        "time": "02:00 PM - 04:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Michael Smith",
    "qualification": "MBBS, MS (Orthopedics)",
    "years_of_experience": 10,
    "available_appointments": [
      {
        "date": "2024-09-14",
        "time": "11:00 AM - 01:00 PM"
      },
      {
        "date": "2024-09-18",
        "time": "10:00 AM - 12:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Emma Williams",
    "qualification": "BDS, MDS (Dentistry)",
    "years_of_experience": 8,
    "available_appointments": [
      {
        "date": "2024-09-10",
        "time": "01:00 PM - 03:00 PM"
      },
      {
        "date": "2024-09-13",
        "time": "09:00 AM - 11:00 AM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. James Brown",
    "qualification": "MBBS, MD (Neurology)",
    "years_of_experience": 15,
    "available_appointments": [
      {
        "date": "2024-09-11",
        "time": "03:00 PM - 05:00 PM"
      },
      {
        "date": "2024-09-16",
        "time": "11:00 AM - 01:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Olivia Davis",
    "qualification": "MBBS, DGO (Gynecology)",
    "years_of_experience": 9,
    "available_appointments": [
      {
        "date": "2024-09-12",
        "time": "10:00 AM - 12:00 PM"
      },
      {
        "date": "2024-09-17",
        "time": "01:00 PM - 03:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. William Miller",
    "qualification": "MBBS, MD (Pediatrics)",
    "years_of_experience": 7,
    "available_appointments": [
      {
        "date": "2024-09-13",
        "time": "09:00 AM - 11:00 AM"
      },
      {
        "date": "2024-09-19",
        "time": "02:00 PM - 04:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Sophia Wilson",
    "qualification": "MBBS, MD (Dermatology)",
    "years_of_experience": 10,
    "available_appointments": [
      {
        "date": "2024-09-10",
        "time": "11:00 AM - 01:00 PM"
      },
      {
        "date": "2024-09-16",
        "time": "09:00 AM - 11:00 AM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Benjamin Lee",
    "qualification": "MBBS, MD (Oncology)",
    "years_of_experience": 14,
    "available_appointments": [
      {
        "date": "2024-09-09",
        "time": "02:00 PM - 04:00 PM"
      },
      {
        "date": "2024-09-14",
        "time": "09:00 AM - 11:00 AM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Ava Thomas",
    "qualification": "BDS, MDS (Oral Surgery)",
    "years_of_experience": 5,
    "available_appointments": [
      {
        "date": "2024-09-12",
        "time": "12:00 PM - 02:00 PM"
      },
      {
        "date": "2024-09-18",
        "time": "03:00 PM - 05:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Henry Walker",
    "qualification": "MBBS, MS (General Surgery)",
    "years_of_experience": 13,
    "available_appointments": [
      {
        "date": "2024-09-11",
        "time": "10:00 AM - 12:00 PM"
      },
      {
        "date": "2024-09-15",
        "time": "01:00 PM - 03:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Mia Martinez",
    "qualification": "MBBS, MD (Psychiatry)",
    "years_of_experience": 11,
    "available_appointments": [
      {
        "date": "2024-09-13",
        "time": "03:00 PM - 05:00 PM"
      },
      {
        "date": "2024-09-17",
        "time": "09:00 AM - 11:00 AM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Daniel Garcia",
    "qualification": "MBBS, MD (Gastroenterology)",
    "years_of_experience": 16,
    "available_appointments": [
      {
        "date": "2024-09-09",
        "time": "10:00 AM - 12:00 PM"
      },
      {
        "date": "2024-09-14",
        "time": "12:00 PM - 02:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Isabella Martinez",
    "qualification": "MBBS, MD (Endocrinology)",
    "years_of_experience": 10,
    "available_appointments": [
      {
        "date": "2024-09-12",
        "time": "02:00 PM - 04:00 PM"
      },
      {
        "date": "2024-09-18",
        "time": "10:00 AM - 12:00 PM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Lucas Clark",
    "qualification": "MBBS, MD (Pulmonology)",
    "years_of_experience": 9,
    "available_appointments": [
      {
        "date": "2024-09-11",
        "time": "11:00 AM - 01:00 PM"
      },
      {
        "date": "2024-09-16",
        "time": "09:00 AM - 11:00 AM"
      }
    ]
  },
  {
    "image": "/doctor.png",
    "name": "Dr. Charlotte Robinson",
    "qualification": "MBBS, MD (Nephrology)",
    "years_of_experience": 12,
    "available_appointments": [
      {
        "date": "2024-09-10",
        "time": "01:00 PM - 03:00 PM"
      },
      {
        "date": "2024-09-15",
        "time": "09:00 AM - 11:00 AM"
      }
    ]
  }
];

export default doctorsData;
