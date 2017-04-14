package com.gigster.service.impl;

import static java.util.Collections.singletonList;
import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

import org.junit.Test;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.gigster.data.exception.RestException;
import com.gigster.util.Constants;

public class ValidationServiceImplTest {

    private ValidationServiceImpl service = new ValidationServiceImpl();

    @Test(expected = RestException.class)
    public void should_throw_exception_when_has_errors() throws RestException {
        // Given
        BindingResult bindingResult = mock(BindingResult.class);
        given(bindingResult.hasErrors()).willReturn(true);

        // When
        service.handleBindingResult(bindingResult);

        // Then exception thrown
    }

    @Test
    public void exception_should_contain_validation_error() {
        // Given
        BindingResult bindingResult = mock(BindingResult.class);
        given(bindingResult.hasErrors()).willReturn(true);
        given(bindingResult.getAllErrors()).willReturn(
                        singletonList(new FieldError("expense", "amount", "not valid")));

        // When
        try {
            service.handleBindingResult(bindingResult);
        } catch(RestException e) {
            // Then exception thrown
            assertEquals(e.getCode(), Constants.VALIDATION_ERROR);
            assertEquals(e.getMessage(), "amount not valid");
        }
    }
}