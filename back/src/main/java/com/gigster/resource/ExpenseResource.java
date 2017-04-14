package com.gigster.resource;

import static com.gigster.constants.UrlConstants.EXPENSES;
import static com.gigster.constants.UrlConstants.ID;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.PATCH;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.gigster.data.Expense;
import com.gigster.data.exception.RestException;
import com.gigster.service.ExpenseService;
import com.gigster.service.ValidationService;

@RestController
@RequestMapping(value = EXPENSES, produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
public class ExpenseResource {

    private final ValidationService validationService;
    private final ExpenseService expenseService;

    @Autowired
    public ExpenseResource(ValidationService validationService, ExpenseService expenseService) {
        this.validationService = validationService;
        this.expenseService = expenseService;
    }

    @RequestMapping(method = GET)
    public ResponseEntity getAll() {
        return new ResponseEntity<>(expenseService.findAll(), OK);
    }

    @RequestMapping(value = ID, method = GET)
    public ResponseEntity getById(@PathVariable String id) {
        return new ResponseEntity<>(expenseService.find(id), OK);
    }

    @RequestMapping(method = POST)
    public ResponseEntity create(@Valid @RequestBody Expense entity, BindingResult bindingResult) throws RestException {
        validationService.handleBindingResult(bindingResult);
        return new ResponseEntity<>(expenseService.insert(entity), CREATED);
    }

    @RequestMapping(value = ID, method = PATCH)
    public ResponseEntity patch(@PathVariable String id, @Valid @RequestBody Expense entity,
                    BindingResult bindingResult) throws RestException {
        validationService.handleBindingResult(bindingResult);
        entity.setId(id);
        return new ResponseEntity<>(expenseService.update(entity), OK);
    }

    @RequestMapping(value = ID, method = DELETE)
    public ResponseEntity delete(@PathVariable String id) {
        expenseService.delete(id);
        return new ResponseEntity<>(NO_CONTENT);
    }

}
