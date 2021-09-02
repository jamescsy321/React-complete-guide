import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("in Expense");
    console.log(selectedYear);
    setFilterYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={filterYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpense} />
          <ExpenseList items={filteredExpense} />
        </Card>
      </li>
    </div>
  );
}
export default Expenses;
