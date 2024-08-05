package com.codejawn.mapper;

import com.codejawn.dto.SignUpDTO;
import com.codejawn.dto.UserAccountDTO;
import com.codejawn.model.UserAccount;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-05T19:12:35-0400",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.8.1 (Homebrew)"
)
@Component
public class UserAccountMapperImpl implements UserAccountMapper {

    @Override
    public UserAccountDTO toUserAccountDTO(UserAccount userAccount) {
        if ( userAccount == null ) {
            return null;
        }

        UserAccountDTO.UserAccountDTOBuilder userAccountDTO = UserAccountDTO.builder();

        userAccountDTO.id( userAccount.getId() );
        userAccountDTO.login( userAccount.getLogin() );

        return userAccountDTO.build();
    }

    @Override
    public UserAccount signUpToUserAccount(SignUpDTO signUpDTO) {
        if ( signUpDTO == null ) {
            return null;
        }

        UserAccount.UserAccountBuilder userAccount = UserAccount.builder();

        userAccount.login( signUpDTO.getLogin() );

        return userAccount.build();
    }
}
