Files
===============		

server.ts
---------------	
This file contains the main entry point for the Express server. It initializes the Express application, sets up middleware for parsing JSON requests, imports route handlers from router.ts, and starts the server listening on the specified port.

router.ts
---------------	
This file defines the route handlers for various API endpoints. You can define your API routes and corresponding logic in this file.

db.ts
---------------	
This file contains the logic to establish a connection to the MongoDB database. It exports a function Get() that returns a database connection object.


dataLoader.ts
---------------	
This file contains the logic to load data into MongoDB collections. It exports a function loadData(data, collectionName) which takes data and the name of the collection as parameters and inserts the data into the specified collection.

data.ts
---------------	
This file contains the data to be loaded into MongoDB collections. Update this file with your desired data.

Endpoints
===============	

router.ts
This router file defines the route handlers for various API endpoints related to managing ride requests and bids between clients and fleets.

Endpoints

GET /api/clients
---------------
Retrieves a list of clients from the database.


GET /api/rides
---------------
Retrieves a list of ride requests, including details like pickup/drop-off locations, date-time, and proposed prices.


GET /api/rides/:id
---------------
Retrieves details of a specific ride request identified by id, including bids received for that ride.


POST /api/rides/:id/:clientId/:pickup/:dropoff/:price
---------------
Allows clients to request a ride by providing details such as pickup location, drop-off location, and proposed price.


PUT /api/rides/:id/bids/:fleet/:bidAmount
---------------
Allows fleets to place bids on a specific ride request identified by id.


GET /api/fleets
---------------
Retrieves a list of fleets from the database.


Dependencies
===============
express: Fast, unopinionated, minimalist web framework for Node.js.
mongodb: The official MongoDB driver for Node.js.
