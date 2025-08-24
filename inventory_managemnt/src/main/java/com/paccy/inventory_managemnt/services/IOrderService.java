package com.paccy.inventory_managemnt.services;

import com.paccy.inventory_managemnt.entities.Order;
import com.paccy.inventory_managemnt.requests.CreateOrderDto;

public interface IOrderService {

    Order createOrder(CreateOrderDto createOrderDto);
}
