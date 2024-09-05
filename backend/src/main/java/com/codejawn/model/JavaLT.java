package com.codejawn.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "java_lt")
public class JavaLT {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name= "is_complete")
    private boolean isComplete;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_data_types_lt_id", referencedColumnName = "id")
    private JavaDataTypesLT javaDataTypesLT;
    @Column(name= "final_is_complete")
    private boolean finalIsComplete;
}
