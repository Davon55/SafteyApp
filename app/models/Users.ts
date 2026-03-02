export class Users
{
    private id: number = -1;
    private firstName: String = "";
    private lastName: String = "";
    private userName: String = "";
    private password: String = "";
    private email: String = "";
    private phoneNumber: String = "";

    constructor(id: number, firstName: String, lastName: String, userName: String, password: String, email: String, phoneNumber: String)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
   
    public Users()
    {
        this.id;
        this.firstName;
        this.lastName;
        this.userName;
        this.password;
        this.email;
        this.phoneNumber;
    }

   get Id(): number
   {
    return this.id;
   }

   set Id(id: number)
   {
     this.id = id;
   }

   get FirstName(): String
   {
    return this.firstName;
   }
   set FirstName(firstName: String)
   {
    this.firstName = firstName;
   }

   get LastName(): String
   {
    return this.lastName;
   }
   set LastName(lastName: String)
   {
    this.lastName = lastName;
   }

   get UserName(): String
   {
    return this.userName;
   }
   set UserName(userName: String)
   {
    this.userName = userName;
   }

   get Password(): String
   {
    return this.password;
   }
   set Password(password: String)
   {
    this.password = password;
   }

   get Email(): String
   {
    return this.email;
   }
   set Email(email: String)
   {
    this.email = email;
   }

   get PhoneNumber(): String
   {
    return this.phoneNumber;
   }
   set PhoneNumber(phoneNumber: String)
   {
    this.phoneNumber = phoneNumber;
   }

}