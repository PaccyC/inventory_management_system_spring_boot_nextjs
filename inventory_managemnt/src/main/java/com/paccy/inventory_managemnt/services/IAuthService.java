package com.paccy.inventory_managemnt.services;

import com.paccy.inventory_managemnt.requests.LoginDto;
import com.paccy.inventory_managemnt.responses.AuthResponse;

public interface IAuthService {

   AuthResponse login(LoginDto loginDto);
}
