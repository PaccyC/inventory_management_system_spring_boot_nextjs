package com.paccy.inventory_managemnt.requests;


import com.paccy.inventory_managemnt.enums.EOrderStatus;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public record CreateOrderDto(
        List<OrderProductDto> products,
        Date expectedDelivery,
        EOrderStatus orderStatus
) {
    public record OrderProductDto(
            UUID productId,
            int quantity
    ) {}
}