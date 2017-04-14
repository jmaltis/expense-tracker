package com.gigster.service;

import org.springframework.validation.BindingResult;

import com.gigster.data.exception.RestException;

public interface ValidationService {

    void handleBindingResult(BindingResult bindingResult) throws RestException;
}
