package com.gigster.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.gigster.data.Expense;

public interface ExpenseRepository extends MongoRepository<Expense, String> {

    Expense findById(String id);

}

