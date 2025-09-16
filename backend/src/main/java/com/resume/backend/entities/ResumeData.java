package com.resume.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "resume")
@Table(name = "ResumeTable")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ResumeData {

    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long rid;
    @Column(name = "name", nullable = false)
    private String name;
    private String email;
    private String phone;
    private String education;

    @OneToOne(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Long uid;
}

