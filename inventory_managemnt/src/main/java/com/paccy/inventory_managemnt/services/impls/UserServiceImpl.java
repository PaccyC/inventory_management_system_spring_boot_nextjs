package com.paccy.inventory_managemnt.services.impls;

import com.paccy.inventory_managemnt.entities.User;
import com.paccy.inventory_managemnt.exceptions.UnAuthorizedException;
import com.paccy.inventory_managemnt.exceptions.UserExistsException;
import com.paccy.inventory_managemnt.exceptions.UserNotFoundException;
import com.paccy.inventory_managemnt.repository.IUserRepository;
import com.paccy.inventory_managemnt.requests.CreateUserDto;
import com.paccy.inventory_managemnt.security.JwtService;
import com.paccy.inventory_managemnt.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

private  final IUserRepository userRepository;
private final PasswordEncoder passwordEncoder;
private final JwtService jwtService;

    @Override
    public User createUser(CreateUserDto createUserDto) {
        Optional<User> _user= userRepository.findByEmail(createUserDto.email());
        if (_user.isPresent()){
            throw new UserExistsException("User already exists");
        }

        User user= User
                .builder()
                .names(createUserDto.names())
                .email(createUserDto.email())
                .password(passwordEncoder.encode(createUserDto.password())
                )
                .build();

        return userRepository.save(user);
    }

    @Override
    public User getUserById(UUID id) {
       return  userRepository.findById(id).orElseThrow(
                ()-> new UserNotFoundException("User not found")
        );

    }

    @Override
    public User getMe(String token) {

        String email= jwtService.extractUsername(token);

//        Find user in the database

        User user= userRepository.findByEmail(email).orElseThrow(
                ()-> new UnAuthorizedException("User not found")
        );
        return user;
    }
}
