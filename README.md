# Reel-Seat

## Structure
```bash
.
├───assets
├───client
│   ├───public
│   └───src
│       ├───api
│       ├───assets
│       ├───components
│       ├───context
│       ├───hooks
│       ├───pages
│       └───utils
└───server
    ├───controllers
    ├───middleware
    ├───models
    ├───routes
    └───utils
```

## Description

Reel-Seat is a movie booking system that enables users to browse the latest movies, view their plots, and select seats in a theatre for an upcoming show. It integrates movie data from the [TMDB API](https://www.themoviedb.org/) and supports real-time seat reservation.

## Features
- User authentication is implemented using JWT Auth and HTTP cookies.
- CRON jobs run hourly to refresh movie listings and seat availability in the database.
- Users can explore detailed movie plots before booking.
- Users can choose their preferred seats using a dynamic seat map

## Tech Stack
- Language: Javascript
- Frontend: React.js, Chakra UI
- Backend: Node.js, Express.js
- Database: PostgreSQL (Sequelize ORM)

## Demo
https://github.com/user-attachments/assets/04af8145-87d2-4ef2-aa0c-545fdff0cfef


## Challenges
- Customizing Chakra-UI components like the checkboxes for seat selection required a lot of research and digging in.
- Clearly defining the relationship between the seat and movie models was time-consuming, especially while repopulating the database.


## Ways to improve

- Create a customized dashboard for users.
- Integrate payment processing for ticket purchases.
- Add features like seat reservation timeout and cancellation options.

