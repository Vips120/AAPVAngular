export interface Ilogin {
    FirstName?:string;
    LastName?:string;
    UserIdentity?:string;
    MobileNo?:string;
    EmailId?:string;
    Error?:string;
    UserLogin:{
        UserName:string;
        Password:string;
    }
}