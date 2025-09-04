package com.paccy.inventory_managemnt.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.paccy.inventory_managemnt.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthResponse {

    private String token;
    private User user;
}
