## Chapter 3: Operators and Truthiness

*Learning Path section 1.3.* By the end of this chapter learners can make Python calculate, compare, combine conditions and decide what counts as true or false.

**Suggested time:** 4 to 5 hours of guided work plus the project. Split it over two sessions: 3.1 to 3.5 first, then 3.6 to 3.9.

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

**Trainer's note:** open with a 2-minute recall: ask learners to name every symbol they have already used (`=`, `+`, `*`, `/`). Then show the table and let them place each one in a family. This makes Chapter 3 feel like organising what they know rather than learning from scratch.

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

**Trainer's note:** `%` is the operator learners find least obvious. Teach it with three real pictures: remainder after sharing sweets, minutes on a clock, and "is this number even?" (`n % 2`). Do not teach the negative-number rule in depth. Show the one example, tell them it exists, and move on. `max()` and `min()` are introduced here because the Chapter 3 project uses `max()`.

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

**Trainer's note:** say it aloud every time: "`=` is store, `==` is ask." Ask learners to read `age = 20` as "age becomes 20" and `age == 20` as "is age equal to 20?". If you have time, show that `print(age = 20)` fails, so they associate the mistake with an error message.

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

**Trainer's note:** run the score example line by line on screen and ask learners to predict each printed value before you press Enter. The last line (`32.0`) is a useful surprise: `/=` turns an `int` into a `float`.

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

**Trainer's note:** use a nightclub-door picture for `and` ("over 18 AND has ID") and a cinema-offer picture for `or` ("student OR senior"). The "returns an operand" idea is the hardest point in the chapter. Do not rush it. The Chapter 2 Mini Shop Invoice already used `input(...).strip() or None`, so point back to it: "this is the line you copied, and now you know how it works."

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

**Trainer's note:** keep the collection examples as reading only. Do not let the session drift into lists. If a learner asks "what are those brackets?", answer "a list, which we meet properly in Chapter 6."

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

**Trainer's note:** this is the first time a list appears in the manual, and it is deliberate, because lists are the clearest way to show two objects with equal contents. Bring two sheets of paper to class if you can. Close the loop with Chapter 2: this is why `result is None` is the right test, and it is the answer to the promise made in section 2.5.

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

**Trainer's note:** the memory trick is "empty or zero is false, everything else is true." Run a prediction game: write ten values on the board, learners call truthy or falsy, then you confirm with `bool()`. Always include `"0"`, `" "` and `"False"`, because these catch nearly everyone. Truthiness becomes practical in Chapter 5 when `if name:` appears.

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

**Trainer's note:** do not ask learners to memorise the table. Tell them the three rules that cover most real code: brackets first, `*` before `+`, and `not` then `and` then `or`. The table is a reference for later. Reinforce the habit of adding parentheses even when they are not strictly needed.

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

**Trainer's note:** the `input()` row is the one you will see most in the project. Learners who skip `float()` get a `TypeError` as soon as they subtract from `hours`. Treat the error message as a teaching moment and ask them to read it aloud.

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

**Solutions** (every solution was run on Python 3.13)

```python
# 1  prints: 3 2 3.4
print(17 // 5, 17 % 5, 17 / 5)

# 2  prints: 2 h 15 min
minutes = 135
print(f"{minutes // 60} h {minutes % 60} min")

# 3  prints: 50 80 False
print(2 + 3 * 4 ** 2, (2 + 3) * 4 ** 2, not 3 > 2 or 4 > 5)

# 4  prints: 1207.5
balance = 1000
balance += 250
balance -= 100
balance *= 1.05
print(balance)

# 5  prints: False True
print(7 % 2 == 0, 8 % 2 == 0)

# 6  prints: 1 8 True False Guest
print(7 % 3, 2 ** 3, "a" in "cat", not (3 > 2), "" or "Guest")

# 7  prints: False True False True False True
print(bool(0), bool("0"), bool(""), bool(" "), bool(None), bool(-1))

# 8  prints, in order: False True True False
age = 17
print(18 <= age <= 65)
age = 18
print(18 <= age <= 65)
age = 65
print(18 <= age <= 65)
age = 66
print(18 <= age <= 65)
```

**Marking guide**

- Exercise 3: the third result is `False` because `not 3 > 2` is `not True`, which is `False`, and `4 > 5` is also `False`. Learners who answer `True` applied `not` to the whole expression.
- Exercise 4: accept `1207.5`. If a learner prints `1207.50` they used a format specifier, which is a good sign.
- Exercise 7: only `0`, `""` and `None` are falsy. The sentence should say "they are zero, empty or nothing". `"0"` and `" "` are truthy because they contain a character.
- Exercise 8: accept `age >= 18 and age <= 65` as correct too, and then show the chained form.

### Chapter 3 quiz

Answer from memory first, then check by running code.

| # | Question | Model answer |
| --- | --- | --- |
| 1 | What is the difference between `/` and `//`? | `/` gives the exact result as a float (`7 / 2` is `3.5`). `//` rounds down to a whole number (`7 // 2` is `3`). |
| 2 | What does `%` calculate? | The remainder after division (`7 % 2` is `1`). |
| 3 | What is the difference between `==` and `is`? | `==` compares values. `is` asks whether two names point to the very same object. Use `is` only with `None`. |
| 4 | Is the text `"False"` truthy or falsy? | Truthy, because any non-empty text is truthy. |
| 5 | What does `"" or "Guest"` produce? | `"Guest"`, because the empty text is falsy so `or` returns the right-hand side. |
| 6 | Which is evaluated first in `2 + 3 * 4`? | The multiplication `3 * 4`, so the result is `14`. |

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

**Reference solution** (run and checked on Python 3.13)

```python
# Shift Pay Calculator - Chapter 3 project
print("=== Shift Pay Calculator ===")
name = input("Employee name: ").strip().title()
hours = float(input("Hours worked: "))
rate = float(input("Hourly rate: "))
is_weekend = input("Weekend shift? (yes/no): ").strip().lower() == "yes"

REGULAR_LIMIT = 40
OVERTIME_MULT = 1.5

overtime_hours = max(hours - REGULAR_LIMIT, 0.0)
regular_hours = hours - overtime_hours
basic = regular_hours * rate
overtime = overtime_hours * rate * OVERTIME_MULT
bonus = (basic + overtime) * 0.10 * is_weekend
gross = basic + overtime + bonus
has_overtime = overtime_hours > 0

print()
print(f"Employee      : {name}")
print(f"Regular hours : {regular_hours}")
print(f"Overtime hours: {overtime_hours}")
print(f"Basic pay     : {basic:,.2f}")
print(f"Overtime pay  : {overtime:,.2f}")
print(f"Weekend bonus : {bonus:,.2f}")
print(f"Gross pay     : {gross:,.2f}")
print(f"Overtime?     : {has_overtime}")
print(f"Full-time?    : {hours >= 35 and rate > 0}")
print(f"Whole hours?  : {hours % 1 == 0}")
```

**Expected result** (the learner's typed input shown after each prompt):

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

**Test cases**

| Name | Hours | Rate | Weekend | Overtime hours | Gross pay | Overtime? | Full-time? | Whole hours? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| chidi eze | 45 | 2000 | yes | 5.0 | 104,500.00 | True | True | True |
| amara okafor | 30 | 1500 | no | 0.0 | 45,000.00 | False | False | True |
| ngozi bello | 38.5 | 1000 | yes | 0.0 | 42,350.00 | False | True | False |
| ade bola | 40 | 1000 | no | 0.0 | 40,000.00 | False | True | True |

**Trainer's note:** common problems, in the order you will meet them.

- Skipping `float()` on hours or rate gives a `TypeError` at the subtraction. Ask the learner to read the message.
- Using `int()` for hours works for 45 but fails for 38.5. The third test case exists to catch this.
- Writing `bonus = ... * "yes"` instead of using the boolean. Remind them that `is_weekend` is already `True` or `False`, and that `True` counts as 1 in arithmetic (Chapter 2, section 2.5).
- Forgetting `max()` and getting negative overtime for 30 hours. The second test case catches this.
- The `Overtime hours: 0.0` line is deliberate. `max(..., 0.0)` keeps the type a float so the report is consistent. If a learner prints `0`, that is fine and not an error.

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

A score of 16 or more out of 20 means the learner is ready for Chapter 4.

