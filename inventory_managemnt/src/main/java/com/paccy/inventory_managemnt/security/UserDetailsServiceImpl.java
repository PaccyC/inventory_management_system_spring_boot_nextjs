package com.paccy.inventory_managemnt.security;


import com.paccy.inventory_managemnt.entities.User;
import com.paccy.inventory_managemnt.exceptions.UserNotFoundException;
import com.paccy.inventory_managemnt.repository.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    private final IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
      Optional<User> _user= userRepository.findByEmail(username);
      if (_user.isEmpty()){
          throw new UserNotFoundException("User not found!");
      }
      User user= _user.get();

        return  new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword(),
                List.of()
        );
    }
}
