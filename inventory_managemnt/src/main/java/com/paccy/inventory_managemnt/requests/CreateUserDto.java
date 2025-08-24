package com.paccy.inventory_managemnt.requests;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;

public record CreateUserDto(
        @NotBlank()
        @NotEmpty()
        String names,

        @NotBlank()
        @NotEmpty()
        String email,
        @NotBlank()
        @NotEmpty()
        @Pattern(regexp = "^[a-zA-Z0-9]{8,}")
        String password) {

}
