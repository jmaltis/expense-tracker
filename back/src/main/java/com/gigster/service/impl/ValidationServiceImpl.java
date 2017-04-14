package com.gigster.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.*;

import com.gigster.data.exception.RestException;
import com.gigster.service.ValidationService;
import com.gigster.util.Constants;

@Service
public class ValidationServiceImpl implements ValidationService {

    /**
     * Check bindingResults errors for error and throw exceptions if necessary
     *
     * @param bindingResult
     * @throws RestException
     */
    @Override
    public void handleBindingResult(BindingResult bindingResult) throws RestException {
        if (bindingResult.hasErrors()) {
            throwException(bindingResult.getAllErrors());
        }
    }

    private void throwException(List<ObjectError> allErrors) throws RestException {
        String errorMessage = allErrors.stream().map(error -> {
            String fieldMessage = "";
            if (error instanceof FieldError) {
                fieldMessage += ((FieldError) error).getField() + " ";
            }
            fieldMessage += error.getDefaultMessage();
            return fieldMessage;
        }).collect(Collectors.joining("/n"));
        throw new RestException(Constants.VALIDATION_ERROR, errorMessage);
    }

}
