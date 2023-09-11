# CryptoTrends


## Description
Utilizes Twitter API to visual social sentiment regarding cryptocurrencies.  This project was a part of my senior project.


## Updates

 - May be issues with API pull due to Twitter API price changes. (08/2023)


## Table of Contents
- [Project Description](#project-description)
- [SDLC Methodolgy](#sdlc-methodology)
- [Project Phases](#project-phases)
- [Technologies Used](#technologies-used)
- [Installation and Usage](#installation-and-usage)
- [Acknowledgments](#acknowledgements)
- [License](#license)

## SDLC Methodolgy



## Project Phases

The project went through the following phases:

1. **Planning**:  The application was developed to solve the problem of achieving a somewhat reasonable metric when deciding to invent in cryptocurrencies.  Unlike equities, which are representations of a publicly held business, a currency is a representation of a country's economic standing.  Since crytpocurrencies do not apply to either of the previous situations, it is difficult to get a metric on its "value".  The conclusion is that cryptocurrencies derive most of their value from the "network effect".  Therefore, being able to measure social sentiment for these cryptocurrencies utilizing a social media platform will provide us with some indication on individuals feel about a particular token.
2. **Analysis**: 
3. **Design**:  We will be using nodejs with express to set up our server.  The server will pull data from the social media platform's API, and return it to our database.  The front-end will be built using HTML, CSS, and JavaScript.  We will use JavaScript to pull the data from the database, and display it on the webpage.
4. **Development**:  The first stage was developing our server.  An initial compatibalility issue occured when trying to import modules, so we decided to not use the ES6 modules in our server.  The second step was connecting our selected API to the server.  For this, we utilized RapidAPI to pull cryptocurrency data from Twitter.  The third step was selecting and incorpoarting our database.  For this, we utilized NeDB and built the neccesary pipeline to have the API data get inserted into our database.
5. **Testing**:  We incorporated nodemon to assist increase the efficiency of seeing the output of our changes to the codebase to prevent the constant start and restart of our server.  We utilized module and integration testing the most when developing the application.
6. **Deployment**:  The website was deployed on localhost. 
7. **Maintenance/Updates**:  We are looking to deploy the application utilizing google firebase.  This will also include transferring the databse used from NeDB to Firestore.


## Technologies Used
- **Programming Languages**:  JavaScript, HTML, CSS
- **Frameworks**:  NodeJS, ExpressJS
- **Databases**:  NeDB, lightweight version of MongoDB
- **Development Tools**:  VSCode IDE
- **Additional**: RapidAPI


** Installation and Usage

## Acknowledgments

## License






