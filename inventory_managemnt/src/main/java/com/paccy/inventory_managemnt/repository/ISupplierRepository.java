package com.paccy.inventory_managemnt.repository;


import com.paccy.inventory_managemnt.entities.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ISupplierRepository extends JpaRepository<Supplier, UUID> {
}
