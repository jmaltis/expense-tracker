package com.gigster.data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "expenses")
public class Expense {

    @Id
    String id;
    LocalDateTime dateTime;
    BigDecimal amount;
    String description;

}
