package com.paccy.inventory_managemnt.controller;


import com.paccy.inventory_managemnt.entities.Product;
import com.paccy.inventory_managemnt.requests.CreateProductDto;
import com.paccy.inventory_managemnt.responses.ApiResponse;
import com.paccy.inventory_managemnt.services.impls.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;


@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductServiceImpl productService;

    @PostMapping
    public ResponseEntity<ApiResponse<Product>> createProduct(
            @ModelAttribute CreateProductDto createProductDto,
            @RequestParam("imageFile") MultipartFile imageFile,
            @RequestHeader("Authorization") String authHeader
    )  {
        String token = authHeader.substring(7).trim();
        Product product = productService.createProduct(createProductDto, imageFile, token);

        return new ApiResponse<>(
                HttpStatus.CREATED,
                "Product created successfully",
                product
        ).toResponseEntity();
    }


    @GetMapping("/{id}")
    public  ResponseEntity<ApiResponse<Product>> getProductById(
            @PathVariable("id")UUID id
            ){

        Product product = productService.getProductById(id);
        return new ApiResponse<>(HttpStatus.OK,"Product details retrieved successfully",product).toResponseEntity();

    }

    @GetMapping
    public  ResponseEntity<ApiResponse<Page<Product>>> getAllProducts(
            @RequestHeader("Authorization") String authHeader,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ){

        String token = authHeader.substring(7).trim();
        Page<Product> products = productService.getAllProducts(page,size,token);
        return new  ApiResponse<>(HttpStatus.OK,"Your products retrieved successfully",products).toResponseEntity();
    }
}

