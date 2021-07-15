import React from "react";
import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./NewExpenses/ExpenseFilter";

const Expenses = (props) => {
  const saveYearDataHandler = (enteredYear) => {
    console.log("filter");
    console.log(enteredYear);
  };

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter onChangedFilter={saveYearDataHandler} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </div>
    </div>
  );
};

export default Expenses;
////////////////////////////////////////////


import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const yearChangedHandler = (event) => {
    //event.preventDefault();
    setEnteredYear(event.target.value);

    props.onChangedFilter(enteredYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearChangedHandler} value={enteredYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

