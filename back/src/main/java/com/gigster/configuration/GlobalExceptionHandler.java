package com.gigster.configuration;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.gigster.data.exception.RestException;
import com.gigster.data.response.ErrorResponse;
import com.gigster.util.Constants;

/**
 * Handle exceptions
 */
@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {

    /**
     * Handle rest exception (400)
     */
    @ExceptionHandler(RestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleBadRequest(RestException exception) {
        return ErrorResponse.fromException(exception);
    }

    /**
     * Handle any other exception (500)
     */
    @ExceptionHandler(Throwable.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleBadRequest(Throwable e) {
        return new ErrorResponse(Constants.INTERNAL_ERROR, "Internal Error");
    }

}
