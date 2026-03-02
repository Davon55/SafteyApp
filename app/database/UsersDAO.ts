import { Users } from "../models/Users";

//MySQL Module dependency
import * as mysql from "mysql";
//Util Module dependency
import * as util from "util";

export class UsersDAO
{
    private host: string = "localhost";
    private port:number = 3306;
    private username: string= "root";
    private password:string= "root";
    private schema:string= "safety";
    public pool = this.initDbConnection();


    private initDbConnection(): any
    {
        return mysql.createPool({
            host: this.host,
            user: this.username,
            port: this.port,
            password: this.password,
            database: this.schema,
            connectionLimit: 10
        });
    }
    
  


    constructor(host: string, port: number, username: string, password: string)
    {
        //Set all class properties
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.pool = this.initDbConnection();
    }

    public findUserById(userId: number, callback: any)
    {
        let user: Users[] = [];

        //get pooled database connection and run queries
        this.pool.getConnection(async function(err: any, connection: any)
        {
            //release connection in the pool
            connection.release();
           //Throw err if an error
            if(err) throw err;

            //Use Promisfy Util to make an async function and run query to get a specific user
            connection.query = util.promisify(connection.query)
            let result1 = await connection.query('SELECT * FROM USERS WHERE id=?', [userId])
            console.log(result1);
             
            
             //throw an error if an error
             if (err) throw err
            //loop through results and return all users by id
            for(let x = 0; x < result1.length; ++x)
            {
                user.push(new Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
            }
            //return list of users
            callback(user);
        })
    }
    
    //CRUD method to find all users
    public findAllUsers(callback: any)
    {
        //list of users to return
        let user: Users[] = [];
        //get pooled database connection and run queries
        this.pool.getConnection(async function(err:any, connection: any) 
        {
            //throw an error if an err
            if(err) throw err;

           //Use Promisfy Util to make an async function and run query to get all users
           connection.query = util.promisify(connection.query)
           let result1 = await connection.query('SELECT * FROM USERS');
           {

            //release connection in the pool
            connection.release();

            //Throw err if an error
            if(err) throw err;
            //loop through results and get all users
            for(let x=0; x < result1.length; ++x)
            {
                
                user.push(new Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
            }
            //return data
           
            callback(user);

           }

        })
    }

    //CRUD method to find a user by firstname 
    public findByFirstName(search: string, callback: any)
    {
        //list of users to return
        let user: Users[] = [];
        //get pooled database connection and run queries
        this.pool.getConnection(async function(err:any, connection: any) 
        {
            //throw an error if an err
            if(err) throw err;

           //Use Promisfy Util to make an async function and run query to get all users
           connection.query = util.promisify(connection.query)
           let result1 = await connection.query('SELECT * FROM USERS WHERE firstname LIKE "%%" ', [search]);
           {

            //release connection in the pool
            connection.release();

            //Throw err if an error
            if(err) throw err;
            //loop through results and get all users
            for(let x=0; x < result1.length; ++x)
            {
                user.push(new Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
            }
            callback(user);

           }

        })
    }

    //CRUD method to find a user by lastname 
    public findByLastName(search: string, callback: any)
    {
        //list of users to return
        let user: Users[] = [];
        //get pooled database connection and run queries
        this.pool.getConnection(async function(err:any, connection: any) 
        {
            //throw an error if an err
            if(err) throw err;

           //Use Promisfy Util to make an async function and run query to get all users
           connection.query = util.promisify(connection.query)
           let result1 = await connection.query('SELECT * FROM users WHERE lastname LIKE "%%" ', [search]);
           {

            //release connection in the pool
            connection.release();

            //Throw err if an error
            if(err) throw err;
            //loop through results and get all users
            for(let x=0; x < result1.length; ++x)
            {
                user.push(new Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
            }
            callback(user);

           }

        })
    }

    //CRUD method to create a user 
    public createUser(user: Users, callback: any)
    {
        
        //get pooled database connection and run queries
        this.pool.getConnection(async function(err:any, connection: any) 
        {
            //release connection in the pool
            connection.release();
            //throw an error if an err
            if(err) throw err;

           //Use Promisfy Util to make an async function and run query to get all users
           connection.query = util.promisify(connection.query)
           let result1 = await connection.query('INSERT INTO users (firstname, lastname, username, password, email, phonenumber) VALUES (?,?,?,?,?,?)', 
           [user.FirstName, user.LastName, user.UserName, user.Password, user.Email, user.PhoneNumber]);
           {
           if(result1.affectedRows != 1)
           callback(-1)
           

            let userID = result1.insertId;
            console.log(userID);
            

           
           callback(userID);
           }
        })
    }

    //CRUD method to create a user 
    public updateUser(user: Users, callback: any)
    {
        
        //get pooled database connection and run queries
        this.pool.getConnection(async function(err:any, connection: any) 
        {
             //release connection in the pool
             connection.release();
            //throw an error if an err
            if(err) throw err;

           //Use Promisfy Util to make an async function and run query to get all users
           
           connection.query = util.promisify(connection.query)
           let result1 = await connection.query('UPDATE users SET firstname=?, lastname=?, username=?, password=?, email=?, phonenumber=? WHERE id=?', [user.FirstName, user.LastName, user.UserName, user.Password, user.Email, user.PhoneNumber, user.Id]);

           if( result1.affectedRows != 1)
            callback(-1);
           {

            
            let userId = result1.insertId;

            callback(userId);

           }

        })
    }
    //CRUD method to delete an album
    public deleteUser(userId: number, callback: any)
    {
        
        //Get a pooled connection to the database, run the query to delete an album
        this.pool.getConnection(async function(err: any, connection: any)
        {
            connection.release();
            //thow an error if an error
            if(err) throw err;
             //use promisfy util to make an async function to delete an Album
            connection.query =  util.promisify(connection.query);
            let result1 = await connection.query('DELETE FROM users WHERE ID=?', [userId])
            if(result1.affectedRows != 1)
            callback(-1);
            
        })
        callback(userId)
    }
}
