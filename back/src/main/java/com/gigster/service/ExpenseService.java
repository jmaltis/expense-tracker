package com.gigster.service;

import java.util.List;

import com.gigster.data.Expense;

public interface ExpenseService {

    List<Expense> findAll();

    Expense find(String id);

    Expense insert(Expense expense);

    Expense update(Expense expense);

    void delete(String id);

}
