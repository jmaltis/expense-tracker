package com.gigster.data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

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
    @NotNull
    LocalDateTime dateTime;
    @NotNull
    @Min(0)
    BigDecimal amount;
    String description;

}
