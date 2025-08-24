package com.paccy.inventory_managemnt.controller;

import com.paccy.inventory_managemnt.entities.Order;
import com.paccy.inventory_managemnt.requests.CreateOrderDto;
import com.paccy.inventory_managemnt.responses.ApiResponse;
import com.paccy.inventory_managemnt.services.impls.OrderServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderServiceImpl orderService;

    @PostMapping
    public ResponseEntity<ApiResponse<Order>> createOrder(@RequestBody CreateOrderDto createOrderDto) {

        Order order = orderService.createOrder(createOrderDto);
        return new ApiResponse<>(HttpStatus.CREATED, "Order created successfully", order).toResponseEntity();
    }
}
