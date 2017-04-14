package com.gigster.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gigster.data.Expense;
import com.gigster.repository.ExpenseRepository;
import com.gigster.service.ExpenseService;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private final ExpenseRepository repository;

    @Autowired
    public ExpenseServiceImpl(ExpenseRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Expense> findAll() {
        return repository.findAll();
    }

    @Override
    public Expense find(String id) {
        return repository.findById(id);
    }

    @Override
    public Expense insert(Expense expense) {
        return repository.insert(expense);
    }

    @Override
    public Expense update(Expense expense) {
        return repository.save(expense);
    }

    @Override
    public void delete(String id) {
        repository.delete(id);
    }
}
