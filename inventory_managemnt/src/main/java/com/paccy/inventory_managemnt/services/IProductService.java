package com.paccy.inventory_managemnt.services;

import com.paccy.inventory_managemnt.entities.Product;
import com.paccy.inventory_managemnt.requests.CreateProductDto;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

public interface IProductService {
   Product createProduct(CreateProductDto createProductDto, MultipartFile imageFile,String token);
   Product getProductById(UUID id);
   Page<Product> getAllProducts(int page,int size,String token);

}
