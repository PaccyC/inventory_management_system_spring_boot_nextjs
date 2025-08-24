package com.paccy.inventory_managemnt.controller;

import com.paccy.inventory_managemnt.entities.Supplier;
import com.paccy.inventory_managemnt.requests.CreateSupplierDto;
import com.paccy.inventory_managemnt.responses.ApiResponse;
import com.paccy.inventory_managemnt.services.impls.SupplierServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/suppliers")
@RequiredArgsConstructor
public class SupplierController {

    private final SupplierServiceImpl supplierService;

    @PostMapping
    public ResponseEntity<ApiResponse<Supplier>> createSupplier(
            @RequestBody CreateSupplierDto createSupplierDto
            ){
        Supplier response= supplierService.createSupplier(createSupplierDto);
        return new ApiResponse<>(HttpStatus.CREATED,"Supplier added successfully",response).toResponseEntity();
    }


    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Supplier>> getSupplierById(
            @PathVariable UUID id
    ){
        Supplier response= supplierService.getSupplierById(id);
        return new ApiResponse<>(HttpStatus.OK,"Supplier retrieved successfully",response).toResponseEntity();

    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<Supplier>>> getAllSuppliers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam (defaultValue = "10") int size
    ){
        Page<Supplier> response= supplierService.getSuppliers(page,size);
        return new ApiResponse<>(HttpStatus.OK,"Suppliers retrieved successfully",response).toResponseEntity();

    }
}
