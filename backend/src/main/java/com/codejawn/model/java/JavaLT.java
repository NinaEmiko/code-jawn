package com.codejawn.model.java;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
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
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_variables_lt_id", referencedColumnName = "id")
    private JavaVariablesLT javaVariablesLT;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_for_loops_lt_id", referencedColumnName = "id")
    private JavaForLoopsLT javaForLoopsLT;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_conditionals_lt_id", referencedColumnName = "id")
    private JavaConditionalsLT javaConditionalsLT;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_arrays_lt_id", referencedColumnName = "id")
    private JavaArraysLT javaArraysLT;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_collections_lt_id", referencedColumnName = "id")
    private JavaCollectionsLT javaCollectionsLT;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_methods_lt_id", referencedColumnName = "id")
    private JavaMethodsLT javaMethodsLT;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "java_operators_lt_id", referencedColumnName = "id")
    private JavaOperatorsLT javaOperatorsLT;
    @Column(name= "final_is_complete")
    private boolean finalIsComplete;



}
