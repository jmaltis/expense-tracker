package com.gigster.resource;

import static org.junit.Assert.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.HttpStatus.OK;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import com.gigster.data.Expense;
import com.gigster.data.exception.RestException;
import com.gigster.service.ExpenseService;
import com.gigster.service.ValidationService;

public class ExpenseResourceTest {

    @Mock
    private ExpenseService expenseService;
    @Mock
    private ValidationService validationService;

    private ExpenseResource resource;

    @Before
    public void setup() {
        initMocks(this);
        resource = new ExpenseResource(validationService, expenseService);
    }

    @Test
    public void service_find_all_should_be_called_when_receiving_get_request() {
        // Given
        List<Expense> result = new ArrayList<>();
        given(expenseService.findAll()).willReturn(result);

        // When
        ResponseEntity response = resource.getAll();

        // Then
        verify(expenseService).findAll();
        assertEquals(response.getBody(), result);
        assertEquals(response.getStatusCode(), OK);
    }

    @Test
    public void service_find_should_be_called_when_receiving_get_request_with_id() {
        // Given
        String id = "123";
        Expense result = new Expense();
        given(expenseService.find(id)).willReturn(result);

        // When
        ResponseEntity response = resource.getById(id);

        // Then
        verify(expenseService).find(id);
        assertEquals(response.getBody(), result);
        assertEquals(response.getStatusCode(), OK);
    }

    @Test
    public void service_find_should_be_called_when_receiving_post_request() throws RestException {
        // Given
        Expense newExpense = new Expense();
        Expense createdExpense = buildExpenseWithId();
        given(expenseService.insert(newExpense)).willReturn(createdExpense);
        BindingResult bindingResult = mock(BindingResult.class);

        // When
        ResponseEntity response = resource.create(newExpense, bindingResult);

        // Then
        verify(expenseService).insert(newExpense);
        verify(validationService).handleBindingResult(bindingResult);
        assertEquals(response.getBody(), createdExpense);
        assertEquals(response.getStatusCode(), CREATED);
    }

    @Test(expected = RestException.class)
    public void exception_should_be_throw_when_receiving_invalid_post_request() throws RestException {
        // Given
        Expense newExpense = new Expense();
        BindingResult bindingResult = mock(BindingResult.class);
        doThrow(new RestException(123, "error")).when(validationService).handleBindingResult(bindingResult);

        // When
        resource.create(newExpense, bindingResult);

        // Then exception thrown
    }

    @Test
    public void service_update_should_be_called_when_receiving_patch_request() throws RestException {
        // Given
        String id = "123";
        Expense updateExpense = new Expense();
        given(expenseService.update(updateExpense)).willReturn(updateExpense);
        BindingResult bindingResult = mock(BindingResult.class);

        // When
        ResponseEntity response = resource.patch(id, updateExpense, bindingResult);

        // Then
        verify(expenseService).update(updateExpense);
        verify(validationService).handleBindingResult(bindingResult);
        assertEquals(response.getBody(), updateExpense);
        assertEquals(response.getStatusCode(), OK);
    }

    @Test
    public void service_delete_should_be_called_when_receiving_delete_request() throws RestException {
        // Given
        String id = "123";

        // When
        ResponseEntity response = resource.delete(id);

        // Then
        verify(expenseService).delete(id);
        assertEquals(response.getStatusCode(), NO_CONTENT);
    }

    private Expense buildExpenseWithId() {
        Expense expense = new Expense();
        expense.setId("33333");
        return expense;
    }

}