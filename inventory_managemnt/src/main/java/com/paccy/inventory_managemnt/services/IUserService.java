package com.paccy.inventory_managemnt.services;


import com.paccy.inventory_managemnt.entities.User;
import com.paccy.inventory_managemnt.requests.CreateUserDto;

import java.util.UUID;

public interface IUserService {
    User createUser(CreateUserDto createUserDto);
    User getUserById(UUID id);
    User getMe(String token);
}
