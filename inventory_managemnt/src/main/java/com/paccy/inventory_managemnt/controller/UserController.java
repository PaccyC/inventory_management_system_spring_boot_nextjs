package com.paccy.inventory_managemnt.controller;


import com.paccy.inventory_managemnt.entities.User;
import com.paccy.inventory_managemnt.requests.CreateUserDto;
import com.paccy.inventory_managemnt.responses.ApiResponse;
import com.paccy.inventory_managemnt.services.impls.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;


    @PostMapping("/signup")
    private ResponseEntity<ApiResponse<User>> createUser(@RequestBody CreateUserDto createUserDto) {

        User response= userService.createUser(createUserDto);
        return new ApiResponse<>(HttpStatus.CREATED,"User created successfully",response).toResponseEntity();
    }



    @GetMapping("/{id}")
    private ResponseEntity<ApiResponse<User>> getUserById(
            @PathVariable(name ="id")UUID id
            ){
        User response= userService.getUserById(id);
        return new ApiResponse<>(HttpStatus.OK,"User retrieved successfully",response).toResponseEntity();
    }

    @GetMapping("/me")
    private ResponseEntity<ApiResponse<User>> getMe(
            @RequestHeader("Authorization") String authHeader
    ){
        String token = authHeader.substring(7).trim();
        User response= userService.getMe(token);
        return new ApiResponse<>(HttpStatus.OK,"User profile retrieved successfully",response).toResponseEntity();
    }
}
