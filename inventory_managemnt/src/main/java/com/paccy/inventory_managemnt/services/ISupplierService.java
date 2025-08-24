package com.paccy.inventory_managemnt.services;

import com.paccy.inventory_managemnt.entities.Supplier;
import com.paccy.inventory_managemnt.requests.CreateSupplierDto;
import org.springframework.data.domain.Page;

import java.util.UUID;

public interface ISupplierService {

    Supplier createSupplier(CreateSupplierDto createSupplierDto);
    Supplier getSupplierById(UUID supplierId);
    Page<Supplier> getSuppliers(int page,int size);
}
