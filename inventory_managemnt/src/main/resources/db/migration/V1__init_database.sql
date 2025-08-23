-- USERS TABLE
CREATE TABLE users (
                       id UUID PRIMARY KEY,
                       names VARCHAR(255) NOT NULL,
                       email VARCHAR(255) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL
);

-- SUPPLIERS TABLE
CREATE TABLE suppliers (
                           id UUID PRIMARY KEY,
                           names VARCHAR(255),
                           phone_number VARCHAR(50),
                           email VARCHAR(255)
);

-- PRODUCTS TABLE
CREATE TABLE products (
                          id UUID PRIMARY KEY,
                          name VARCHAR(255),
                          description TEXT,
                          unit_price DOUBLE PRECISION,
                          picture_url VARCHAR(500),
                          quantity DOUBLE PRECISION,
                          manufacture_date DATE,
                          expiry_date DATE,
                          supplier_id UUID,
                          CONSTRAINT fk_supplier FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- ORDERS TABLE
CREATE TABLE orders (
                        id UUID PRIMARY KEY,
                        order_value DOUBLE PRECISION,
                        quantity INT,
                        expected_delivery DATE,
                        order_status VARCHAR(50)
);

-- ORDER_PRODUCTS (Join Table)
CREATE TABLE order_products (
                                order_id UUID,
                                product_id UUID,
                                PRIMARY KEY (order_id, product_id),
                                CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders(id),
                                CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(id)
);
