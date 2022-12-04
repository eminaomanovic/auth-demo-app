package com.devsession.demo.response;

import com.devsession.demo.model.Person;

public class AuthResponse {
    private Person person;
    private String token;

    public AuthResponse() {
    }

    public AuthResponse(Person person, String token) {
        this.person = person;
        this.token = token;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

