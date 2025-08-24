package com.paccy.inventory_managemnt.services.impls;

import com.paccy.inventory_managemnt.entities.User;
import com.paccy.inventory_managemnt.exceptions.UnAuthorizedException;
import com.paccy.inventory_managemnt.exceptions.UserNotFoundException;
import com.paccy.inventory_managemnt.repository.IUserRepository;
import com.paccy.inventory_managemnt.requests.LoginDto;
import com.paccy.inventory_managemnt.responses.AuthResponse;
import com.paccy.inventory_managemnt.security.JwtService;
import com.paccy.inventory_managemnt.services.IAuthService;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {
    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public AuthResponse login(LoginDto loginDto) {
        Optional<User> _user= userRepository.findByEmail(loginDto.email());
        if (_user.isEmpty()){
            throw new UnAuthorizedException("Invalid Credentials(either password or email are incorrect)");
        }

        User user = _user.get();
        if (!passwordEncoder.matches(loginDto.password(),user.getPassword())){
            throw new UnAuthorizedException("Invalid Credentials(either password or email are incorrect)");
        }

//        Generate a new token

        Map<String,Object> claims = new HashMap<>();
        claims.put("userId",user.getId());
        claims.put("names",user.getNames());
        String token= jwtService.generateToken(claims,user);
        return new AuthResponse(token);


    }
}
