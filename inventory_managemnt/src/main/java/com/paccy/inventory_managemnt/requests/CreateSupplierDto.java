package com.paccy.inventory_managemnt.requests;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record CreateSupplierDto(
        @NotBlank()
        @NotEmpty()
        String names,
        @NotBlank()
        @NotEmpty()
        String email,
        @NotBlank()
        @NotEmpty()
        String phoneNumber
) {
}
