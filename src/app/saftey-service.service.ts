import { Injectable } from '@angular/core';
import { User } from './models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


//The injectable defines the class as a service in Angular and allows angular to inject it into a component
// as a dependency 
@Injectable({
  providedIn: 'root'
})
export class SafteyServiceService {

  //create an array of empty users, 
  users: User[] = [];



  //HTTPClient is a mechanism for communicating with a remote server over HTTP
  constructor(private http: HttpClient, private router: Router) { }

  //host and port 
  hostname: string = 'http://localhost:3000';


   /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

  public getUsers(callback: any)
  {
    //return all users
    //the catchError() operator intercepts what failed, and then passes the error to the error handling function
    //the handError() reportes the rror and then returns an innocuous results 
    this.http.get<User[]>(this.hostname + '/user').pipe(catchError(this.handleError<User[]>('getUsers', [])))
    .subscribe((data) => {
     let  users: User[] = [];
        for(let x = 0; x < data.length; ++x)
        {
          users.push(new User(
            data[x]['id'],
            data[x]['firstName'],
            data[x]['lastName'],
            data[x]['userName'],
            data[x]['password'],
            data[x]['email'],
            data[x]['phoneNumber']))
        }
        callback(users);
    })
  }

  public getUser(id: number, firstname: string, callback: any)
  {
      //get a specific user
      this.http.get<User>(this.hostname + '/user/' + firstname + '/' + id)
      .subscribe((data) =>
      {
        let  users: User = new User(
            data['id'],
            data['firstName'],
            data['lastName'],
            data['userName'],
            data['password'],
            data['email'],
            data['phoneNumber'])
        callback(users);
      })
  }

 
  public getUserById(id: number, callback: any)
  { 
    //get a specific user by Id
    this.http.get<User>(this.hostname + '/user' + '/' + id).pipe(catchError(this.handleError<User>('getUserById', )))
    .subscribe((data) => {
      let user: User = new User(data['id'],
            data['firstName'],
            data['lastName'],
            data['userName'],
            data['password'],
            data['email'],
            data['phoneNumber'])
       callback(user)
    })
    
  }

  public searchUser(term: string, callback: any)
  {
      //search for a user by first or last name
      this.http.get<User[]>(this.hostname + '/user/' + term).pipe(catchError(this.handleError<User[]>('getUserById', [])))
      .subscribe((data) => {

        callback(data);
      })
  }

  public login(username: string, password: string, callback: any)
  {
    this.http.post<User>(this.hostname + "/user", {username, password})
   .subscribe((data) =>
   {

     callback(data);
    this.router.navigateByUrl('homepage');

  }); 
  }


  //create a new user
  public createAlbum(user: User, callback: any) 
 {
  this.http.post<User>(this.hostname + "/user", user)
   .subscribe((data) =>
   {

  callback(data);

  }); 
  }

  //update a current user
  public updateUser(user: User, callback: any)
 {
    this.http.put<User>(this.hostname + '/user', user)
    .subscribe((data) =>
    {
      callback(data);
    })
 }

 //de;ete a user
 public deleteUser(id: number, callback: any)
 {
  this.http.delete(this.hostname + "/user/" + id)

  .subscribe((data) =>
  
  {
  
  callback(data);
  
  });
 }

}

