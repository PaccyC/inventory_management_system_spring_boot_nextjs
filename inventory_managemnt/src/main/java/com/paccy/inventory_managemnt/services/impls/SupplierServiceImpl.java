package com.paccy.inventory_managemnt.services.impls;


import com.paccy.inventory_managemnt.entities.Supplier;
import com.paccy.inventory_managemnt.repository.ISupplierRepository;
import com.paccy.inventory_managemnt.requests.CreateSupplierDto;
import com.paccy.inventory_managemnt.services.ISupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SupplierServiceImpl implements ISupplierService {

    private final ISupplierRepository supplierRepository;

    @Override
    public Supplier createSupplier(CreateSupplierDto createSupplierDto) {
        Supplier supplier= Supplier
                .builder()
                .names(createSupplierDto.names())
                .email(createSupplierDto.email())
                .phoneNumber(createSupplierDto.phoneNumber())
                .build();

        return supplierRepository.save(supplier);
    }

    @Override
    public Supplier getSupplierById(UUID supplierId) {
        return supplierRepository.findById(supplierId).orElseThrow(
                ()-> new RuntimeException("Supplier not found")
        );

    }

    @Override
    public Page<Supplier> getSuppliers(int page, int size) {
        Pageable pageable= PageRequest.of(page,size);
        Page<Supplier> suppliers = supplierRepository.findAll(pageable);
        return suppliers;
    }
}
