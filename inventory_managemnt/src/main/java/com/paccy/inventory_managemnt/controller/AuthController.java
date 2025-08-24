package com.paccy.inventory_managemnt.controller;


import com.paccy.inventory_managemnt.requests.LoginDto;
import com.paccy.inventory_managemnt.responses.ApiResponse;
import com.paccy.inventory_managemnt.responses.AuthResponse;
import com.paccy.inventory_managemnt.services.impls.AuthServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServiceImpl authService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthResponse>> authenticate(
            @RequestBody LoginDto loginDto
            ){
        AuthResponse response= authService.login(loginDto);
        return new ApiResponse<>(HttpStatus.OK,"User logged in successfully",response).toResponseEntity();
    }
}
