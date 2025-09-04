

interface User {
id:string;
names:string;
email:string;
password?:string;
username:string;
}


interface Product {
    id:string;
    name:string;
    description:string;
    unitPrice:number;
    pictureUrl:string;
    quantity:string;
    mfgDate:string;
    expDate:string;


}

interface Supplier {
    id:string;
    names:string;
    phoneNumber:string;
    email:string;
}

interface CreateUserInterface {
 names:string;
email:string;
password:string;

}

interface CreateUserResponse {
 timeStamp:string;
message:string;
status:number;
data:User;

}



export type ICreateProduct={

    name:string;
    description:string;
    unitPrice:number;
    quantity:number;
    imageFile:File;
    mfgDate:string;
    expDate:string;
}