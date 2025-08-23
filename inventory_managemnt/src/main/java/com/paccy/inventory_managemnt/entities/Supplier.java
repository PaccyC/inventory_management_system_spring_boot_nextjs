package com.paccy.inventory_managemnt.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "suppliers")
public class Supplier {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String names;
    private String phoneNumber;
    private String email;


    @OneToMany(mappedBy = "supplier", fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<Product> product;
}
