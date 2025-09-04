package com.paccy.inventory_managemnt.requests;

import java.time.LocalDate;
import java.util.UUID;

public record CreateProductDto(
        String name,
        String description,
        Double quantity,
        Double unitPrice,
        LocalDate mfgDate,
        LocalDate expiryDate,
        UUID supplierId
) {
}
