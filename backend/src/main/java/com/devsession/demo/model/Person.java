package com.devsession.demo.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Getter
@Setter
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    @Size(min = 2, max = 50)
    private String firstName;

    @NotBlank
    @Column(nullable = false)
    @Size(min = 2, max = 50)
    private String lastName;

    @NotBlank
    @Column(nullable = false, unique = true)
    @Size(max = 320)
    @Email
    private String email;

    @NotBlank
    @Column(nullable = false)
    @Size(max = 128)
    private String password;

    @Column(nullable = false)
    private Boolean active = true;

    public Person() {
    }

    public Person(Long id) {
        this.id = id;
    }

    public Person(@NotBlank @Size(min = 2, max = 50) String firstName,
                  @NotBlank @Size(min = 2, max = 50) String lastName,
                  @NotBlank @Size(max = 320) @Email String email,
                  @NotBlank @Size(max = 128) String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
