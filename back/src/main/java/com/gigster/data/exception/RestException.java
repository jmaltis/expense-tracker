package com.gigster.data.exception;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class RestException extends Exception {

    private Integer code;
    private String message;

}
