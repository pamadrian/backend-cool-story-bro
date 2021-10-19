#### Backend

- Connecting to a remote DB like an ElephantSQL instance
- Generating models & migrations using sequelize-cli
- Doing database validation using sequelize models (e.g. allowNull: false, unique: true)
- Implementing hasMany, hasOne and belongsTo relations
- Adding foreign keys to models in migrations
- Adding relations to sequelize models
- Generating seed data using sequelize-cli
- Creating, updating & deleting records from the database using sequelize models
- Querying the database using sequelize models
- Eager loading related models using sequelize `include`
- Implementing GET / POST / PATCH / DELETE routes in express
- Sending responses with express
- Setting status codes to responses in express
- Seperating routes using the express Router
- Using the auth middleware to manage authorization for routes in express

## SET UP BACK END

1. SET UP DB URL

# DONE

2. RUN NPM I

# DONE

3. CREATE MODELS FOR SPACE & STORY

# DONE

4. SET UP MIGRATIONS FOR SPACE & STORY

# DONE

5. DO DATABASE VALIDATIONS USING THE SEQUELIZE MODELS

# DONE

6. SET UP RELATIONS:
   space belongs to user - > user has one space
   # DONE
   story belongs to space - > space has many stories
   # DONE
7. ADD SEEDS (at least 2 spaces and 4 stories)

# DONE

8. TRY OUT QUERIES

# DONE

## FEATURE 1

1. FRONTEND ROUTE '/' DISPLAYS A LIST OF SPACES

- Set up a GET - /spaces route that returns all spaces
- Test it! via browser or via httpie.

# DONE

2. SPACES HAVE A BACKGROUND COLOR

# DONE

3. DATA IS MANAGED USING REDUX

4. EACH SPACE HAS A VISIT SPACE BUTTON, IT LINKS TO A SPACE'S DETAILS.

#### Frontend

- Basic knowledge of React
  - components
  - props
  - useState
  - useEffect
  - event listeners & handlers
- Routing & dynamic routing using react-router-dom
- Making a reducers that transform the redux state
- Using selectors to take state from the redux store and use it in your components
- Dispatching actions from your components to change the redux state
- Seperating reducers & actions & selectors
- Using async actions (redux thunk)
- Sending GET / POST / PATCH and DELETE requests using axios
- Setting an authorization header with a JWT to make an authorized request
