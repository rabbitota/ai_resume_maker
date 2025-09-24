package com.resume.backend.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.aot.generate.Generated;

import java.util.ArrayList;
import java.util.List;


@Entity(name = "user")
@Table(name = "Users")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class UserTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name", nullable = false)
    private String name;
    private String email;
    private String phone;
    private String password;

    @OneToMany(mappedBy = "userTable", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    public List<ResumeData> resumeData = new ArrayList<>();
}


