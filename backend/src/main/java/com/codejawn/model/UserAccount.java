package com.codejawn.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user_account")
public class UserAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Password is required")
    @Size(min = 8)
    private String password;

    @NotEmpty(message = "Username is required")
    @Size(min = 8)
    @Column(unique = true)
    private String username;

    @NotEmpty(message = "Email is required")
    @Email
    @Column(unique = true)
    private String email;

    @ManyToMany
    @JoinTable(
        name = "user_account_role",
        joinColumns = @JoinColumn(name = "user_account_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    @JsonManagedReference
    private List<Role> roles = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "lesson_tracker_id", referencedColumnName = "id")
    private LessonTracker lessonTracker;

    @Column
    private Boolean subscriptionActive;

}
