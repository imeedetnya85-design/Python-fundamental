## Chapter 3: Operators and Truthiness

*Learning Path section 1.3.* By the end of this chapter you can make Python calculate, compare, combine conditions and decide what counts as true or false.

### Learning objectives

- Use arithmetic, comparison, assignment, logical, membership and identity operators.
- Explain the difference between `==` and `is`.
- Predict whether any value is truthy or falsy.
- Read and write expressions using the correct order of precedence.

### 3.1 What is an operator?

An operator is a symbol that tells Python to do something with values. The values are called operands. In `7 + 2`, the `+` is the operator and `7` and `2` are the operands. Every expression produces a value, and that value has a type.

| Family | Question it answers | Examples |
| --- | --- | --- |
| Arithmetic | What is the result of this calculation? | `+  -  *  /  //  %  **` |
| Comparison | How do these two values relate? | `==  !=  >  <  >=  <=` |
| Assignment | Store this result in a variable | `=  +=  -=  *=  /=` |
| Logical | Are these conditions true together? | `and  or  not` |
| Membership | Is this item inside that collection? | `in  not in` |
| Identity | Are these the very same object? | `is  is not` |

### 3.2 Arithmetic operators

```python
print(7 + 2, 7 - 2, 7 * 2)
print(7 / 2, 7 // 2, 7 % 2)
print(2 ** 10)
```

**Output**

```text
9 5 14
3.5 3 1
1024
```

| Operator | Name | Example | Result |
| --- | --- | --- | --- |
| `+` | Addition | `7 + 2` | `9` |
| `-` | Subtraction | `7 - 2` | `5` |
| `*` | Multiplication | `7 * 2` | `14` |
| `/` | True division (always a float) | `7 / 2` | `3.5` |
| `//` | Floor division (rounds down) | `7 // 2` | `3` |
| `%` | Modulo (the remainder) | `7 % 2` | `1` |
| `**` | Exponent (power) | `2 ** 10` | `1024` |

**Where `//` and `%` earn their keep.** Converting 135 minutes into hours and minutes uses both:

```python
minutes = 135
print(minutes // 60, minutes % 60)
print((14 + 30) % 24)
```

**Output**

```text
2 15
20
```

The second line is a clock: 30 hours after 14:00 wraps around to 20:00 because `% 24` keeps the answer inside 0 to 23.

**Negative numbers.** Floor division rounds toward negative infinity, not toward zero:

```python
print(-7 // 2, -7 % 2)
```

**Output**

```text
-4 1
```

**Helpful built-ins** that work with numbers:

```python
print(abs(-5), round(3.14159, 2), divmod(17, 5))
print(max(3, 9), min(3, 9))
```

**Output**

```text
5 3.14 (3, 2)
9 3
```

**Two operators also work on text.** `+` joins strings and `*` repeats them. Chapter 4 explores this fully.

```python
print("ha" * 3, "Py" + "thon")
print(3 + 2.0, 4 / 2)
```

**Output**

```text
hahaha Python
5.0 2.0
```

Notice that mixing an `int` and a `float` gives a `float`, and `/` always gives a `float`, even when the answer is whole.

### 3.3 Comparison operators

Comparison operators always produce a boolean: `True` or `False`.

```python
age = 20
print(age == 20, age != 20, age > 18, age < 18, age >= 20, age <= 19)
print(1 < age < 30)
print("apple" < "banana", "a" == "A")
```

**Output**

```text
True False True False True False
True
True False
```

- `==` asks a question ("are these equal?"). A single `=` is an instruction ("store this"). Mixing them up is the most common beginner error.
- Python allows chained comparisons: `1 < age < 30` reads exactly like mathematics.
- Text is compared character by character in alphabetical order, and uppercase letters are not equal to lowercase ones.

**Floats and equality.** Recall the floating-point surprise from Chapter 2:

```python
print(0.1 + 0.2 == 0.3, round(0.1 + 0.2, 2) == 0.3)
```

**Output**

```text
False True
```

When comparing decimals, round both sides first.

### 3.4 Assignment operators

An augmented assignment updates a variable using its own current value.

```python
score = 10
score += 5
print(score)
score -= 3
print(score)
score *= 2
print(score)
score //= 5
print(score)
score **= 3
print(score)
score /= 2
print(score)
```

**Output**

```text
15
12
24
4
64
32.0
```

| Shortcut | Same as |
| --- | --- |
| `x += 5` | `x = x + 5` |
| `x -= 5` | `x = x - 5` |
| `x *= 5` | `x = x * 5` |
| `x /= 5` | `x = x / 5` |
| `x //= 5` | `x = x // 5` |
| `x %= 5` | `x = x % 5` |
| `x **= 5` | `x = x ** 5` |

In the labeled-box picture from Chapter 2: Python opens the box, reads the value, calculates, then puts the new value back in the same box.

### 3.5 Logical operators

| Operator | Meaning | True when |
| --- | --- | --- |
| `and` | Both | both sides are true |
| `or` | Either | at least one side is true |
| `not` | Opposite | the value is false |

```python
age = 25
has_id = True
print(age >= 18 and has_id)
print(age < 18 or has_id)
print(not has_id)
```

**Output**

```text
True
True
False
```

**Short-circuiting.** Python stops as soon as the answer is certain. With `and`, if the left side is false the right side is never evaluated. This protects you from errors:

```python
x = 0
print(x != 0 and 10 / x > 1)
```

**Output**

```text
False
```

Without short-circuiting, `10 / x` would crash with a division by zero.

**`and` and `or` return a value, not just `True` or `False`.** They return whichever operand decided the result. This gives a very useful default-value habit:

```python
print("" or "Guest")
print("Amara" or "Guest")
print(0 or 5)
print(3 and 4)
```

**Output**

```text
Guest
Amara
5
4
```

Read `name or "Guest"` as: use `name` if it holds something, otherwise use `"Guest"`. You will meet this again in the projects.

### 3.6 Membership operators

`in` and `not in` ask whether something is inside something else.

```python
print("a" in "banana", "z" in "banana", "nan" in "banana")
print("x" not in "banana")
print(3 in (1, 2, 3), "Aba" in ["Lagos", "Aba"])
```

**Output**

```text
True False True
True
True True
```

For text, `in` checks for a substring. The last line previews collections (Chapter 6): `in` works on lists and tuples too, and you can read those lines now as "is this item in the group?".

### 3.7 Identity operators

`==` asks "do these have the same value?". `is` asks "are these the very same object in memory?".

```python
a = [1, 2]
b = [1, 2]
c = a
print(a == b, a is b, a is c)
x = None
print(x is None, x is not None)
```

**Output**

```text
True False True
True False
```

Physical analogy: two printed copies of the same report are equal (`==`) but they are two separate sheets of paper (`is` is `False`). `c = a` does not copy the sheet; it sticks a second label on the same sheet.

**Rule of thumb:** use `==` to compare values, and use `is` only for `None` (`is None`, `is not None`). The list syntax `[1, 2]` is a Chapter 6 preview; here it only illustrates the idea.

### 3.8 Truthiness

Python can treat any value as true or false when a condition needs one. Use `bool()` to see which.

```python
print(bool(0), bool(0.0), bool(""), bool(None))
print(bool(1), bool(-3), bool("0"), bool(" "), bool("False"))
print(bool([]), bool([0]), bool(()), bool({}))
```

**Output**

```text
False False False False
True True True True True
False True False False
```

| Falsy (counts as False) | Truthy (counts as True) |
| --- | --- |
| `0`, `0.0` | any other number, including `-3` |
| `""` (empty text) | any text with characters, even `"0"`, `" "` and `"False"` |
| `None` | everything that is not falsy |
| empty collections: `[]`, `()`, `{}` | collections with at least one item |

A practical use is testing for an empty answer:

```python
name = ""
print(not name)
```

**Output**

```text
True
```

**Common trap:** the text `"False"` and the text `"0"` are truthy because they are non-empty. Only the real `False` and the number `0` are falsy.

### 3.9 Operator precedence

When an expression has several operators, Python follows a fixed order, from highest to lowest:

| Level | Operators |
| --- | --- |
| 1 (first) | `( )` parentheses |
| 2 | `**` |
| 3 | unary `-x` |
| 4 | `*  /  //  %` |
| 5 | `+  -` |
| 6 | `==  !=  <  >  <=  >=  in  is` |
| 7 | `not` |
| 8 | `and` |
| 9 (last) | `or` |

```python
print(2 + 3 * 4)
print((2 + 3) * 4)
print(2 ** 3 ** 2)
print(-2 ** 2)
print(10 - 4 - 3)
print(not True or True)
print(1 + 2 == 3 and 4 > 3)
```

**Output**

```text
14
20
512
-4
3
True
True
```

- Multiplication happens before addition, so `2 + 3 * 4` is `14`.
- `**` groups from the right: `2 ** 3 ** 2` is `2 ** 9`.
- `-2 ** 2` is `-(2 ** 2)`, which is `-4`.
- Operators of equal level work left to right, so `10 - 4 - 3` is `(10 - 4) - 3`.

**Habit:** when an expression makes you pause, add parentheses. Clear code beats clever code.

### Common mistakes in Chapter 3

| Mistake | Example | Fix |
| --- | --- | --- |
| Using `=` when you mean `==` | writing `age = 18` to ask a question | `=` stores a value, `==` compares two values |
| Expecting `/` to give a whole number | `7 / 2` gives `3.5`, and `4 / 2` gives `2.0` | Use `//` when you need a whole-number result |
| Comparing floats with `==` | `0.1 + 0.2 == 0.3` is `False` | Round both sides before comparing |
| Using `is` to compare values | `x is 5` raises a warning | Use `==` for values, `is` only for `None` |
| Treating the text `"False"` as `False` | `bool("False")` is `True` | Any non-empty text is truthy |
| Comparing text from `input()` with a number | `"5" > 3` raises a `TypeError` | Convert first with `int()` or `float()` |
| Trusting your memory of precedence | `-2 ** 2` is `-4`, not `4` | Add parentheses to show your intent |

### Chapter 3 exercises

Try each exercise in a file or the REPL before checking anything. Write your answers and observations in your own notebook.

1. Predict the output of `print(17 // 5, 17 % 5, 17 / 5)`, then run it.
2. A video lasts 135 minutes. Using `//` and `%`, print it as hours and minutes.
3. Predict the three results, then check them: `2 + 3 * 4 ** 2`, `(2 + 3) * 4 ** 2`, `not 3 > 2 or 4 > 5`.
4. Start with `balance = 1000`. Apply `+= 250`, then `-= 100`, then `*= 1.05`, and print the final balance.
5. Use `%` to test whether `7` and `8` are even. Each test must print `True` or `False`.
6. Predict the value of each: `7 % 3`, `2 ** 3`, `"a" in "cat"`, `not (3 > 2)`, `"" or "Guest"`.
7. Predict `bool(x)` for each of these values, then confirm with Python: `0`, `"0"`, `""`, `" "`, `None`, `-1`. Write one sentence on what the falsy ones share.
8. Write one expression that is `True` only when `age` is between 18 and 65 inclusive. Test it with 17, 18, 65 and 66.

### Chapter 3 quiz

Answer from memory first, then check by running code.

| # | Question | Your answer |
| --- | --- | --- |
| 1 | What is the difference between `/` and `//`? |  |
| 2 | What does `%` calculate? |  |
| 3 | What is the difference between `==` and `is`? |  |
| 4 | Is the text `"False"` truthy or falsy? |  |
| 5 | What does `"" or "Guest"` produce? |  |
| 6 | Which is evaluated first in `2 + 3 * 4`? |  |

### Chapter 3 summary

- Operators combine operands into expressions, and every expression produces a value.
- `/` always gives a float, `//` rounds down and `%` gives the remainder.
- Comparison operators give `True` or `False`, and can be chained: `1 < age < 30`.
- Augmented assignment (`+=`, `-=`, and so on) updates a variable in place.
- `and`, `or` and `not` combine conditions, short-circuit, and `and`/`or` return one of their operands.
- `in` tests for membership, `is` tests for the same object. Use `is` only with `None`.
- Falsy values: `0`, `0.0`, `""`, `None` and empty collections. Everything else is truthy.
- When in doubt about precedence, use parentheses.

## Chapter 3 Project: Shift Pay Calculator

**Goal:** build a program that reads a worker's hours and rate, then calculates regular pay, overtime pay, an optional weekend bonus and a gross total.

**Skills practised:** arithmetic operators, comparison operators, logical operators, truthiness, `max()`, `input()`, type conversion and f-string formatting.

**Requirements**

1. Ask for the employee name, hours worked, hourly rate and whether it was a weekend shift (`yes` or `no`).
2. Clean the name with `.strip().title()` and store the weekend answer as a boolean using `.strip().lower() == "yes"`.
3. Use named constants: `REGULAR_LIMIT = 40` and `OVERTIME_MULT = 1.5`.
4. Overtime hours are the hours above 40, and never below zero. Use `max(hours - REGULAR_LIMIT, 0.0)`.
5. Regular pay uses the remaining hours at the normal rate. Overtime pay uses the multiplier.
6. The weekend bonus is 10% of basic plus overtime pay, and `0` on a weekday. Use the boolean as a number instead of writing a condition.
7. Print a report with money formatted as `{value:,.2f}` and three yes/no checks: overtime worked, full-time (35 hours or more and rate above 0), and whole hours.

**Build it in steps**

1. Collect and clean the four inputs.
2. Calculate overtime hours, regular hours, basic pay and overtime pay.
3. Add the weekend bonus and gross pay.
4. Print the report and the three checks.

**Starter code**

```python
# Shift Pay Calculator - Chapter 3 project
print("=== Shift Pay Calculator ===")

# TODO 1: read and clean the four inputs
name = ...
hours = ...
rate = ...
is_weekend = ...

REGULAR_LIMIT = 40
OVERTIME_MULT = 1.5

# TODO 2: overtime_hours, regular_hours
# TODO 3: basic, overtime pay
# TODO 4: bonus (10% of basic + overtime), using is_weekend as 0 or 1
# TODO 5: gross

# TODO 6: print the report (see Expected result)
```

**Expected result** (typed input shown after each prompt):

```text
Employee name: chidi eze
Hours worked: 45
Hourly rate: 2000
Weekend shift? (yes/no): yes

Employee      : Chidi Eze
Regular hours : 40.0
Overtime hours: 5.0
Basic pay     : 80,000.00
Overtime pay  : 15,000.00
Weekend bonus : 9,500.00
Gross pay     : 104,500.00
Overtime?     : True
Full-time?    : True
Whole hours?  : True
```

A second check: `amara okafor`, `30`, `1500`, `no` must give `Overtime hours: 0.0`, `Gross pay     : 45,000.00`, `Overtime?     : False` and `Full-time?    : False`.

**Extension tasks**

1. Add a 5% tax line and print the net pay.
2. Add a check that prints `True` when gross pay is above 100,000 and the shift was a weekend.
3. Ask for a second worker and compare which gross pay is higher, printing the result as a boolean.

**Self-check**

| Criterion | Points | Your score |
| --- | --- | --- |
| Program runs without errors | 4 |  |
| Inputs are cleaned and converted correctly | 4 |  |
| Constants are used instead of repeated numbers | 3 |  |
| Overtime and bonus calculations are correct for both test cases | 5 |  |
| Report is aligned and money is formatted with commas | 4 |  |

A score of 16 or more out of 20 means you are ready for Chapter 4.

