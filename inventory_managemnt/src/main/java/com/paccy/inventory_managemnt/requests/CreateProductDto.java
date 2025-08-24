package com.paccy.inventory_managemnt.requests;

import java.time.LocalDate;

public record CreateProductDto(
        String name,
        String description,
        Double quantity,
        Double unitPrice,
        LocalDate mfgDate,
        LocalDate expiryDate
) {
}
