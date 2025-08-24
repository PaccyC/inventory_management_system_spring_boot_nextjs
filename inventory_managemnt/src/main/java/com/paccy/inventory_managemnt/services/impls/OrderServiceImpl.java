package com.paccy.inventory_managemnt.services.impls;


import com.paccy.inventory_managemnt.entities.Order;
import com.paccy.inventory_managemnt.entities.Product;
import com.paccy.inventory_managemnt.enums.EOrderStatus;
import com.paccy.inventory_managemnt.repository.IOrderRepository;
import com.paccy.inventory_managemnt.repository.IProductRepository;
import com.paccy.inventory_managemnt.requests.CreateOrderDto;
import com.paccy.inventory_managemnt.services.IOrderService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements IOrderService {
    private final IOrderRepository orderRepository;
    private final IProductRepository productRepository;

    @Transactional
    public Order createOrder(CreateOrderDto createOrderDto) {
        Order order = new Order();
        List<Product> orderProducts = new ArrayList<>();
        int totalQuantity = 0;
        double totalValue = 0.0;

        for (CreateOrderDto.OrderProductDto opDto : createOrderDto.products()) {
            Product product = productRepository.findById(opDto.productId())
                    .orElseThrow(() -> new RuntimeException("Product not found: " + opDto.productId()));

            if (product.getQuantity() - opDto.quantity() < 0) {
                throw new RuntimeException("Quantity exceeds available quantity: " + opDto.quantity());
            }
            product.setQuantity(product.getQuantity() - opDto.quantity());
            productRepository.save(product);
            // Add product multiple times according to its quantity
            for (int i = 0; i < opDto.quantity(); i++) {
                orderProducts.add(product);


            }

            totalQuantity += opDto.quantity();
            totalValue += product.getUnitPrice() * opDto.quantity();
        }

        order.setProduct(orderProducts);
        order.setQuantity(totalQuantity);
        order.setOrderValue(totalValue);
        order.setExpectedDelivery(createOrderDto.expectedDelivery());
        order.setOrderStatus(createOrderDto.orderStatus() != null
                ? createOrderDto.orderStatus()
                : EOrderStatus.PENDING);


        return orderRepository.save(order);
    }

}
