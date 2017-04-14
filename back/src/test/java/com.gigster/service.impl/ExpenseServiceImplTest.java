package com.gigster.service.impl;

import static org.mockito.Mockito.verify;
import static org.mockito.MockitoAnnotations.initMocks;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.BlockJUnit4ClassRunner;
import org.mockito.Mock;

import com.gigster.data.Expense;
import com.gigster.repository.ExpenseRepository;
import com.gigster.service.ExpenseService;

@RunWith(BlockJUnit4ClassRunner.class)
public class ExpenseServiceImplTest {

    @Mock
    private ExpenseRepository repository;

    private ExpenseService service;

    @Before
    public void setup() {
        initMocks(this);
        service = new ExpenseServiceImpl(repository);
    }

    @Test
    public void repository_find_all_should_be_called_when_calling_find_all() {
        // When
        service.findAll();

        // Then
        verify(repository).findAll();
    }

    @Test
    public void repository_findById_should_be_called_when_calling_find() {
        // Given
        String id = "123";

        // When
        service.find(id);

        // Then
        verify(repository).findById(id);
    }

    @Test
    public void repository_insert_should_be_called_when_calling_insert() {
        // Given
        Expense expense = buildExpense();

        // When
        service.insert(expense);

        // Then
        verify(repository).insert(expense);
    }

    @Test
    public void repository_save_should_be_called_when_calling_update() {
        // Given
        Expense expense = buildExpense();

        // When
        service.update(expense);

        // Then
        verify(repository).save(expense);
    }

    @Test
    public void repository_delete_should_be_called_when_calling_delete() {
        // Given
        String id = "123";

        // When
        service.delete(id);

        // Then
        verify(repository).delete(id);
    }

    private Expense buildExpense() {
        Expense expense = new Expense();
        expense.setDateTime(LocalDateTime.now());
        expense.setAmount(BigDecimal.TEN);
        expense.setDescription("random description");
        return expense;
    }
}