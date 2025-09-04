import { ICreateProduct } from "@/types";
import { protectedApiClient } from "../apiClient";

export const createProduct = async ({ name, description, unitPrice, quantity, mfgDate, expDate, imageFile }: ICreateProduct) => {
    try {
        const formData = new FormData();
        
        formData.append('name', name);
        formData.append('description', description);
        formData.append('unitPrice', unitPrice.toString());
        formData.append('quantity', quantity.toString());
        formData.append('mfgDate', mfgDate);
        formData.append('expDate', expDate);
        formData.append('imageFile', imageFile);
        formData.append("supplierId","17d45666-0319-491a-975d-43cf0bced059")
        
        const response = await protectedApiClient.post("/products", formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status !== 201) {
            throw new Error("Error while creating a product");
        }
        console.log(response);
        
        
        return response.data.data;
    } catch (error) {
        console.log("Error creating product", error);
        throw error; 
    }
}