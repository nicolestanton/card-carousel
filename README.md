# Card Carousel using Create React app

This repo contains ann the project code for a crad carousel using data from Simply cook public API. The requirements for this project were as follows:
- Displays only recipes that contain the allergens Crustaceans , Fish or Eggs
- Displays the recipe name, short description and image on the card
- When each card is clicked it should ‘flip over’ to reveal Cooking time,
average rating, the top review text and a chilli heat level (0-3); when clicked
again it should return to normal

The designs for this project can be found [here](https://www.figma.com/design/daCUNPZzpf17U64KsF5lSa/Recipe-carousel?node-id=7-757&node-type=frame&t=DVerhpPgmmpnM4Kl-0)


Considerations whilst developing this carousel:
- accessibility (tabbing)
- test
- code splitting and reusability
- defining correct types for props and API data
- error handling
- fallback images
- responsiveness

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run dev`

Will run the server and the client together.\

## Technical decisions
- I have created a backend for this project using express and node. The reason for this was on initial set up of the project I was running into cors issues when retrieving the data from the API and adding headers to the request wasnt fixing the issue. Therefore after some troubleshooting I found this solution worked for me. 
- I used javascript fetch method instead of the usual axios fetch due to the simplicity of the project and for this speicific use case I didnt need detailed error responses.

## More about this repo

- I have used [react-icons](https://react-icons.github.io/react-icons/) library for any icons on the design
- Tests are using react testing library
- I have used Sass modules to keep styling scope manageable and easy to read