## PLAN!

## BACKEND

- Setup DB url (new elephant)
- run `npm i`
- Create models and add validations
- Set up relations
- Add some seeds
- Try out some queries.

## Feature 1.

Backend:

- Create a spaces router.
- Set up a GET - /spaces route that returns all spaces
- Test it! via browser or via httpie.

## Commit -> set up spaces router with get all spaces route.

Front:

- Create a Homepage component
- Plug in to a Route in App.js
- Set up a `spaces` redux slice in my store to keep this data.
- Create a thunk action to fetch the spaces => axios.get..
- set up a useEffect in Homepage to dispatch this thunk
- console.log the response
- Create a `case` in the reducer and try to get the data into the store => redux devTools.

## Commit => Set up homepage and spaces slice, fetch all spaces data

- Create and use a Selector to get this data into my homepage component. (useSelector)
- Render it => map and render the spaces.

## COMMIT => Get data into homepage and render it.

## Feature 2:

Backend:

- set up a GET - /spaces/:id route that INCLUDES the stories.
- Try it out -> httpie

Frontend:

- A new page component for the details
- Set it up on the router at `/spaces/:id`.
- Set up a thunk that requests this route and gets me a specific space by id. => start with a hardcoded id (maybe)
- Console.log the space+stories in the thunk. should be good.
- useParams from the router in the component to get the `id` and pass it to the thunk.
- Create a new case in the spaces reducer to store the details of this space.
- Dispatch the detailsSpace data to redux.
- Check my reduxDevTools.
- Set up a new selector to get this data.
- USe in the component and render space + stories.
- Remember to use colors from the space's data.

## PLAN 2

## models - Backend setup:

- Create a ElephantSQL DB and set up url in config.json
- Create a model for `space`
- Create a model for `story`
- Set up the relations migration (foreign keys => `userId` + `spaceId`)
- Set up relations in the models (hasMany, belongsTo, etc).
- Create some seeds for spaces and story.
- Try out some queries. findAll spaces, findByPk a space include stories, findByPk a user include his space

## Feature 1. List of spaces

Backend:

- Make a route that returns all the spaces.
- Try it out through httpie.

Frontend:

- Homepage is kinda set up.
- Fetch the data. => Thunk + axios and console.log the data.
- Setup a new slice (reduces) to store the spaces.
- Set up case and actions for this.
- Get data into redux and see it through the devTools.
- Set up a selector to get this data into my homepage
- Render it => set up a component like spaceCard that renders each space.

Space reducer:
Initial state =>
{ loading: true, allSpaces: [], details: {} || null }.

# COMMIT!

## Feature 2. Details of a space:

Backend:

- Create an express route that returns a specific space.
- GET - `spaces/:id`. router.get(`spaces/:id`, (req, res, next) => {...}) include the stories.
- Try it out with httpie, check im getting the space I want with the correct stories.

FrontEnd:

- Set up frontend route `/spaces/:id` and create a new page component for it.
- Set up a thunk to do the fetching.
- Have a place in redux to store this specific space.
- Get the space into redux => see devTools
- Selector and bring it to the page component
- Render it.
