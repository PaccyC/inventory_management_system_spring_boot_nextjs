import { publicApiClient } from "../apiClient";

export const registerUser= async({names,email,password,}:CreateUserInterface)=>{
    try {
        
        const response=await publicApiClient.post("/users/signup",{
         names,
         email,
         password,
     
        })
        console.log("response",response);
        
        if(response.status != 201){
            throw new Error('Error while registering a user')
        }
        const data= response.data.data;
        return data;
    } catch (error) {
        console.log('Error while logging in',error);
        
    }
}

export const loginUser= async (email:string,password:string)=>{
    try {
        const response= await publicApiClient.post("/auth/login",{
            email,
            password
        })
        if(response.status !== 200){
            throw new Error("Error while logging in");
        }
        return response.data.data;
        
    } catch (error) {
        console.log("Error while logging in ",error);
        
    }

}