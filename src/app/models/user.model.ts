export interface User{
    _id?:string;
    fullName:string;
    mobileNo:string;
    email:string;
    password:string;
    userType:USER_TYPE;
    addresses?:Address[];
}

export interface Address{
    line1:string;
    line2?:string;
    addressType:string;
    city:string;
    state:string;
    country?:string;
    zipCode:string;
    locality:string;
    landmark?:string;
    latitude?:string;
    longitude?:string;
}

export enum USER_TYPE{
    "RECIEVER"="RECIEVER",
    "DONATOR"="DONATOR"
}