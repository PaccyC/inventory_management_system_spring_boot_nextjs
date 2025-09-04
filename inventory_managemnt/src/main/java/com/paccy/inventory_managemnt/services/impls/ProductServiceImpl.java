package com.paccy.inventory_managemnt.services.impls;

import com.paccy.inventory_managemnt.entities.Product;
import com.paccy.inventory_managemnt.entities.Supplier;
import com.paccy.inventory_managemnt.entities.User;
import com.paccy.inventory_managemnt.exceptions.AppException;
import com.paccy.inventory_managemnt.repository.IProductRepository;
import com.paccy.inventory_managemnt.repository.ISupplierRepository;
import com.paccy.inventory_managemnt.requests.CreateProductDto;
import com.paccy.inventory_managemnt.services.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements IProductService {
    private final IProductRepository productRepository;
    private final UserServiceImpl userService;
    private final ISupplierRepository supplierRepository;


    @Override
    public Product createProduct(CreateProductDto createProductDto, MultipartFile imageFile, String token){

        Product product = new Product();
        if (imageFile != null && !imageFile.isEmpty()){
            try {
                product.setPictureUrl(imageFile.getBytes());
            } catch (IOException e) {
                throw new RuntimeException("Failed to read image file", e);
            }
        }
        product.setName(createProductDto.name());
        product.setDescription(createProductDto.description());
        product.setUnitPrice(createProductDto.unitPrice());
        product.setManufactureDate(createProductDto.mfgDate());
        product.setQuantity(createProductDto.quantity());
        product.setExpiryDate(createProductDto.expiryDate());
        product.setUser(userService.getMe(token));

        Supplier supplier = supplierRepository.findById(createProductDto.supplierId()).orElseThrow(
                () -> new AppException("Supplier not found")
        );
        product.setSupplier(supplier);


        return productRepository.save(product);
    }

    @Override
    public Product getProductById(UUID id) {
        return  productRepository.findById(id).orElseThrow(
                ()-> new AppException("Product not found")
        );
    }

    @Override
    public Page<Product> getAllProducts(int page, int size,String token) {
        Pageable pageable= PageRequest.of(page,size);

        User user= userService.getMe(token);


        Page<Product> products= productRepository.findAllByUser(user,pageable);
        return products;
    }
}
