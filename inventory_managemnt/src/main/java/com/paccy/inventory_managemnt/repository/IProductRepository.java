package com.paccy.inventory_managemnt.repository;


import com.paccy.inventory_managemnt.entities.Product;
import com.paccy.inventory_managemnt.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IProductRepository extends JpaRepository<Product, UUID> {
    Page<Product> findAllByUser(User user, Pageable pageable);
}
