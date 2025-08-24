
ALTER TABLE products ADD COLUMN user_id UUID;

ALTER TABLE products ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)