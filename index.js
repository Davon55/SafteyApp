//Application Dependencies
const { Users } = require('./lib/app/models/Users');
const {UsersDAO} = require('./lib/app/database/UsersDAO.js')
const cors = require('cors');
// parse the bodies of all incoming requests
const bodyParser = require('body-parser');

//create instance of an Express Application on port 3000
const express = require('express');
const app = express();
const port = 3000;

//Database configuration
const dbHost = "localhost";
const dbPort = 3306;
const dbUsername = "root";
const dbPassword = "root";

app.use(cors());

app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`All listening on port ${port}`);
});

//Get the default route
app.get('/', function (req, res)
{
    res.send("This is the default route");
})

//GET route at /user/:id to return a user with a specific id
app.get('/user/:id', function(req, res)
{
    console.log('In GET /user/:id' + req.params.id)
    let userId = Number(req.params.id)
    let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findUserById(userId, function(user)
    {
        if(user == null)
        res.status(200).json({"error": "Invalid User id"})
        else
        res.json(user);
        
        
    })
    
});



//GET route at /user to return all users
app.get('/user', function(req, res)
{
    console.log('In GET /user return all users')
    let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findAllUsers(function(user)
    {
        res.json(user);
    })
});

//GET route at /user to return all users
app.get('/user/:firstname/:id', function(req, res)
{
    let userId = Number(req.params.id)
    let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
    console.log('In GET /user/firstname/:id return a user' + userId)
    dao.findUserById(userId,function(user)
    {
        if(user == null)
        res.status(200).json({"error": "Invalid Album id"})
        else
        res.json(user);
    })
});
//GET route at /user/search/firstname/:search to return a specific user by firstname
app.get('/user/search/firstname/:search', function(req, res)
{
    console.log('In GET /user/search/firstname/:search for ' + req.params.search)
    let searchTerm = String(req.params.search);
    let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findByFirstName(searchTerm, function(user)
    {
        res.json(user);
    })

});

//GET route at /user/search/lastname/:search to return a specific user by lastname
app.get('/user/search/lastname/:search', function(req, res)
{
    console.log('In GET /user/search/lastname/:search for ' + req.params.search)
    let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
    dao.findByLastName(req.params.search, function(user)
    {
        res.json(user);
    })
});

//POST route to create a new user and add the user to the database
app.post('/user', function(req, res)
{
    //if invalid post then return 400 response else add the user to the database
    console.log('In POST /user route with post of ' + JSON.stringify(req.body));
    if( !req.body.firstName)
    {
        //Check for a valid POST body, note this should validate every field of the POST
        res.status(400).json({error: 'Invalid User Posted'});
    }
    else{
        
        let user = new Users(-1, req.body.firstName, req.body.lastName, req.body.userName, 
            req.body.password, req.body.email, req.body.phoneNumber);

        //use userDAO to create a user from the data and return an OK response
        let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
        dao.createUser(user, function(userId)
        {
            if(userId == -1)
            res.status(200).json({"error": "Creating user failed"});
            else
            res.status(200).json({"success": "Creating user passed with an User Id of" + userId})
        })
    }
})

//PUT route to update a current user in the database
app.put('/user', function(req,res)
{
    //If invalid update then return 400 response else update the current user 
    console.log('In PUT /user/ route with a PUT of ' + JSON.stringify(req.body));
    console.log("req.body.title = " + req.body.firstName);
    console.log("req.body.artist = " + req.body.lastName);
    console.log("req.body.description = " + req.body.userName);
    console.log("req.body.year = " + req.body.password);
    if( !req.body)
    {
        //Check for a valid PUT body
       res.status(400).json({error: 'Invalid user updated'});
     
        
    }
   
        let user = new Users(req.body.id, req.body.firstName, req.body.lastName, req.body.userName, req.body.password, req.body.email, req.body.phoneNumber);


        //user userDAO to create a user from the data and return an OK response
        let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
        dao.updateUser(user, function(rowsChanged)
        {
            if(rowsChanged === -1)
                return  res.status(200).json({"error": "Updating user failed"});
            else
                return  res.status(200).json({"success": "Updating user passed "});
            
        })
    


});

//DELETE route to delete a current user in the database
app.delete('/user/:id', function(req,res)
{
    console.log('In DELETE route /user/:id ' + req.params.id)
    let dao = new UsersDAO(dbHost, dbPort, dbUsername, dbPassword)
    let userId = req.params.id
    dao.deleteUser(userId, function(user)
    {
        if(user == -1)
        res.status(200).json({"error": "Deleting user failed"})
        else
        res.status(200).json({"success": "Deleted user at ", userId})
    })
})


