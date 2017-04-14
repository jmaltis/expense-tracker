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
import com.gigster.service.ExpenseService;

@RestController
@RequestMapping(value = EXPENSES, produces = APPLICATION_JSON_VALUE, consumes = APPLICATION_JSON_VALUE)
public class ExpenseResource {

    private final ExpenseService service;

    @Autowired
    public ExpenseResource(ExpenseService service) {
        this.service = service;
    }

    @RequestMapping(method = GET)
    public ResponseEntity getAll() {
        return new ResponseEntity<>(service.findAll(), OK);
    }

    @RequestMapping(value = ID, method = GET)
    public ResponseEntity getById(@PathVariable String id) {
        return new ResponseEntity<>(service.find(id), OK);
    }

    @RequestMapping(method = POST)
    public ResponseEntity create(@Valid @RequestBody Expense entity, BindingResult bindingResult) {
        return new ResponseEntity<>(service.insert(entity), CREATED);
    }

    @RequestMapping(value = ID, method = PATCH)
    public ResponseEntity patch(@PathVariable String id, @Valid @RequestBody Expense entity,
                    BindingResult bindingResult) {
        entity.setId(id);
        return new ResponseEntity<>(service.update(entity), OK);
    }

    @RequestMapping(value = ID, method = DELETE)
    public ResponseEntity delete(@PathVariable String id) {
        service.delete(id);
        return new ResponseEntity<>(NO_CONTENT);
    }

}
