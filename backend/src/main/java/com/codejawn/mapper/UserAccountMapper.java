package com.codejawn.mapper;

import com.codejawn.dto.UserAccountDTO;
import com.codejawn.model.UserAccount;
import com.codejawn.dto.SignUpDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserAccountMapper {

    UserAccountDTO toUserAccountDTO(UserAccount userAccount);

    @Mapping(target = "password", ignore = true)
    UserAccount signUpToUserAccount(SignUpDTO signUpDTO);

}