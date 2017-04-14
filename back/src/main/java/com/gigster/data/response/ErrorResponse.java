package com.gigster.data.response;

import com.gigster.data.exception.RestException;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class ErrorResponse {

    private Integer code;
    private String message;

    public static ErrorResponse fromException(RestException exception) {
        return new ErrorResponse(exception.getCode(), exception.getMessage());
    }
}
