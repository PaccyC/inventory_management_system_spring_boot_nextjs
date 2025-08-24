package com.paccy.inventory_managemnt.responses;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public  class ApiResponse <T>{

    private final Date timeStamp= new Date();
    private HttpStatus status;
    private String message;
    private T data;

    public  ApiResponse(HttpStatus status, String message, T data) {
        this.status= status;
        this.message = message;
        this.data = data;
    }


    public ResponseEntity<ApiResponse<T>> toResponseEntity(){
        assert  status != null;
        return   ResponseEntity.status(status).body(this);
    }}
