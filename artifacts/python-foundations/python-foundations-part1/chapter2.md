## Chapter 2: Variables, Types, and Input

*Learning Path section 1.2.* By the end of this chapter you can store and convert values, read input from a user, format your output, and predict how Python treats each basic type.

### Learning objectives

- Create variables and follow naming rules
- Use multiple assignment and swap values
- Identify Python's core data types and check them with `type()`
- Work with `int`, `float` and `complex` numbers
- Understand `bool` and `None`
- Recognise literals
- Convert between types safely
- Read user input with `input()` and convert it
- Format output with f-strings

### 2.1 Variables and naming rules

#### 2.1.1 The Labeled Storage Box Analogy

Before writing a single variable, picture a storage room full of boxes. Every box has a label on the front and holds one item. This model explains what a variable is, why types exist, and what `None` means.

| Storage room | Python | What it means in practice |
| --- | --- | --- |
| Labeled storage box | A variable | A named place that holds a value |
| The label on the front | The variable name | How you find the value again, for example `age` |
| The item inside | The value | For example `25` |
| Putting an item in and sticking on a label | Assignment (`age = 25`) | The `=` sign stores the value under that name |
| The physical shape of the box | The data type | An `int` box fits whole numbers, a `float` box fits decimals, a `bool` box holds only `True` or `False` |
| Magical boxes: erase the label, replace the item and the label | Dynamic typing | Reassign a variable and Python replaces the old content and the old type label |
| An empty labeled box | `None` | The label exists, but nothing is inside |

**The shape of the box (data types)**

Each box is built for one kind of item. The diagram shows three boxes, each with a label, a type and a value.

```text
Label: age             Label: price           Label: is_student
+------------------+   +------------------+   +------------------+
| Type: int        |   | Type: float      |   | Type: bool       |
| (whole numbers)  |   | (decimals)       |   | (True / False)   |
|                  |   |                  |   |                  |
|        25        |   |      19.99       |   |       True       |
+------------------+   +------------------+   +------------------+
age = 25               price = 19.99          is_student = True
```

| Diagram part | Meaning | In Python |
| --- | --- | --- |
| `Label:` | The variable name | `age`, `price`, `is_student` |
| `Type:` | The shape of the box | `int`, `float`, `bool` |
| Value in the middle | The item inside | `25`, `19.99`, `True` |
| Line under the box | The code that creates the box | `age = 25` |

Python confirms the shape of each box with `type()`:

```python
age = 25
price = 19.99
is_student = True
print(age, type(age))
print(price, type(price))
print(is_student, type(is_student))
```

**Output**

```text
25 <class 'int'>
19.99 <class 'float'>
True <class 'bool'>
```

**Magical boxes (dynamic typing)**

Python boxes are magical. You can empty a box, put in a different kind of item, and the box erases its old type label and writes a new one.

```text
x = 5                x = "five"           x = 2.5
+------------+       +------------+       +------------+
| int        |  -->  | str        |  -->  | float      |
|     5      |       |   "five"   |       |    2.5     |
+------------+       +------------+       +------------+
Same label (x): new value in, old content and old type label out.
```

```python
x = 5
print(x, type(x))
x = "five"
print(x, type(x))
x = 2.5
print(x, type(x))
```

**Output**

```text
5 <class 'int'>
five <class 'str'>
2.5 <class 'float'>
```

**The empty box (None)**

`None` is a labeled box with nothing inside. It is not the same as a box holding zero or a box holding empty text.

```text
+--------------------+
| Type: NoneType     |
|                    |
|      (empty)       |
+--------------------+
result = None
```

| Box | Python value | Is it `None`? |
| --- | --- | --- |
| Holds the number zero | `0` | No |
| Holds empty text | `""` | No |
| Empty box | `None` | Yes |

Python agrees: `0 == None` and `"" == None` are both `False`. In section 2.5 you will see how to test for `None` properly.

**Where the analogy bends:** in real Python, the label is stuck onto the item rather than onto a box that holds a copy. After `a = b = 7`, both labels are on the same item. This is harmless for numbers. Chapter 6 shows why it matters for lists.

**Check your understanding**

| Question | Your answer |
| --- | --- |
| Which part of the analogy is the data type? |  |
| What happens when you run `x = "five"` after `x = 5`? |  |
| Is a box holding `0` the same as an empty box? |  |

#### 2.1.2 Variables in code

A variable is a name that refers to a value stored in memory. You create one by assigning with `=`. No declaration is needed.

```python
name = "Amara"
age = 25
height = 1.68
is_student = True
```

Python decides the type from the value, and a variable can be reassigned to a different type later (dynamic typing).

**Naming rules (required)**

1. Start with a letter or underscore, never a digit.
2. Contain only letters, digits and underscores.
3. Names are case-sensitive.
4. Cannot be a reserved keyword such as `if`, `for`, `class` or `True`.

**Naming conventions (professional standard)**

- Use `snake_case`: `student_name`, `total_price`.
- Choose descriptive names: `monthly_salary`, not `ms`.
- Constants use UPPER\_CASE: `MAX_USERS = 100`.

| Name | Valid? | Why |
| --- | --- | --- |
| `user_name` | Yes | Follows the rules |
| `_temp` | Yes | Underscore start is allowed |
| `total2` | Yes | Digit not at the start |
| `2total` | No | Starts with a digit |
| `my-name` | No | Hyphen is not allowed |
| `class` | No | Reserved keyword |

Python reserves about 35 keywords, such as `if`, `for`, `class`, `True` and `None`. Your editor shows them in a different colour. You cannot use them as variable names.

**Preview:** where a variable can be used (its scope) is explained in Chapter 7, together with functions.

### 2.2 Multiple assignment

```python
a = b = c = 0               # same value to several names
x, y, z = 1, 2, 3           # different values at once
print(a, b, c, x, y, z)     # 0 0 0 1 2 3

x, y = y, x                 # swap two variables, no temp needed
print(x, y)                 # 2 1

first, *rest = [1, 2, 3, 4] # starred name collects the remainder
print(first, rest)          # 1 [2, 3, 4]
```

### 2.3 Data types overview and type()

Use `type()` to check the type of any value:

```python
print(type(42))
print(type(3.14))
print(type(2+3j))
print(type("hi"))
print(type(True))
print(type(None))
print(type([1]))
print(type((1,)))
print(type({1}))
print(type({"a": 1}))
```

**Output**

```text
<class 'int'>
<class 'float'>
<class 'complex'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

| Category | Types | Mutable? |
| --- | --- | --- |
| Numeric | `int`, `float`, `complex` | No |
| Text | `str` | No |
| Boolean | `bool` | No |
| Sequence | `list`, `tuple`, `range` | `list`: yes; `tuple`, `range`: no |
| Set | `set`, `frozenset` | `set`: yes |
| Mapping | `dict` | Yes |
| Nothing | `NoneType` | Not applicable |

Mutable means the object can be changed after creation. You will study lists, tuples, sets and dictionaries in Chapter 6. For now, just recognise their names.

### 2.4 Numbers

**Integers (`int`)** are whole numbers of any size, with no overflow limit.

```python
print(1_000_000)             # 1000000  (underscores improve readability)
print(0b1010, 0o17, 0xFF)    # 10 15 255  (binary, octal, hexadecimal)
```

**Floats (`float`)** are decimal numbers.

```python
print(1e3)                   # 1000.0   (scientific notation)
```

**Complex (`complex`)** numbers have a real and an imaginary part, and are mostly used in science and engineering.

```python
c = 2 + 3j
print(c.real, c.imag, abs(3+4j))    # 2.0 3.0 5.0
```

**Basic arithmetic**

```python
print(7 / 2, 7 // 2, 7 % 2, 2 ** 10)   # 3.5 3 1 1024
```

| Operator | Meaning | Result for 7 and 2 |
| --- | --- | --- |
| `/` | True division (always a float) | `3.5` |
| `//` | Floor division | `3` |
| `%` | Remainder (modulus) | `1` |
| `**` | Power | `49` |

Chapter 3 covers all operators in depth.

**Floating-point precision**

```python
print(0.1 + 0.2)               # 0.30000000000000004
print(round(0.1 + 0.2, 2))     # 0.3
```

Computers store decimals in binary, so some values are approximations. This is true in every language. Use `round()` when you need a tidy result, and for money use the `decimal` module (covered later).

### 2.5 Booleans and None

**Booleans.** `bool` has only two values, `True` and `False` (capitalised). They come from comparisons such as `5 > 3`, which Chapter 3 covers, and they are used to make decisions in Chapter 5. In arithmetic, `True` counts as 1 and `False` counts as 0:

```python
print(int(True), int(False), True + True)
```

**Output**

```text
1 0 2
```

**Preview:** Chapter 3 explains truthiness, which is how Python decides whether any value counts as `True` or `False` in a condition.

**None.** `None` means "no value". It is the only value of type `NoneType`. To test for it, use `is`:

```python
result = None
print(result)            # None
print(type(result))      # <class 'NoneType'>
print(result is None)    # True
```

Chapter 3 explains why `is` is better than `==` for this test.

### 2.6 Literals

A literal is a fixed value written directly in code.

| Kind | Examples |
| --- | --- |
| Integer | `42`, `0xFF`, `1_000` |
| Float | `3.14`, `1e3` |
| Complex | `2+3j` |
| String | `"hello"`, `'hi'`, `"""multi-line"""` |
| Boolean | `True`, `False` |
| Special | `None` |
| Collections | `[1, 2]`, `(1, 2)`, `{1, 2}`, `{"a": 1}` |

### 2.7 Type casting and conversion

You convert types with constructor functions: `int()`, `float()`, `str()` and `bool()`.

```python
print(int(3.9), int("15"), float("2.5"), str(100) + "!")
print(bool(0), bool(1), bool(""), bool("a"))
print(int("101", 2), int(True), float(3), 3 + 2.0)
```

**Output**

```text
3 15 2.5 100!
False True False True
5 1 3.0 5.0
```

**Key points**

- `int(3.9)` gives `3`. It truncates toward zero and does not round.
- `int("101", 2)` reads the text as a binary number.
- `bool()` gives `False` for zero and empty text, and `True` for everything else. Chapter 3 covers this fully.
- **Implicit conversion:** Python converts automatically in mixed arithmetic. For example, `3 + 2.0` gives `5.0`.
- Converting invalid text stops the program with an error:

```text
ValueError: invalid literal for int() with base 10: 'abc'
```

Chapter 8 shows how to handle errors like this one.

### 2.8 User input with input()

`input()` pauses the program, shows a prompt and returns what the user typed.

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

Sample session:

```text
What is your name? Amara
Hello, Amara!
```

**Critical point:** `input()` always returns a string, even if the user types a number. This is why it comes right after type casting. Convert the text when you need a number:

```python
age = input("Your age: ")
print(type(age))
print(age + "1")
print(int(age) + 1)
```

If the user types `25`, the output is:

```text
<class 'str'>
251
26
```

The text `"25"` plus the text `"1"` joins into `"251"`. Only after `int()` does Python treat it as a number. The usual pattern is to convert at once:

```python
age = int(input("Your age: "))
print(f"Next year you will be {age + 1}.")
```

Typing `25` gives `Next year you will be 26.` If the user types text that is not a number, such as `abc`, the program stops with a `ValueError`. You will learn to handle that in Chapter 8.

### 2.9 f-strings

An f-string is text with an `f` in front of the opening quote. Anything inside curly braces `{}` is replaced by its value.

```python
name = "Amara"
age = 25
print(f"My name is {name} and I am {age} years old.")
print(f"Next year you will be {age + 1}.")

price = 1234.5678
print(f"Price: {price:.2f}")        # 2 decimal places
print(f"Big number: {1234567:,}")   # thousands separator
print(f"Total: {price:,.2f}")       # both together
```

**Output**

```text
My name is Amara and I am 25 years old.
Next year you will be 26.
Price: 1234.57
Big number: 1,234,567
Total: 1,234.57
```

| Format | Meaning | Example result |
| --- | --- | --- |
| `{value}` | Insert the value as it is | `Amara` |
| `{value:.2f}` | Float with 2 decimal places | `1234.57` |
| `{value:,}` | Whole number with thousands separators | `1,234,567` |
| `{value:,.2f}` | Both together | `1,234.57` |
| `{a + b}` | Any expression | `26` |

**Common mistake:** forgetting the `f`. Without it, `print("Hello {name}")` shows the braces and the word `name` instead of the value. Chapter 4 expands f-strings and also covers `format()`.

### Common mistakes (Chapter 2)

| Mistake | Fix |
| --- | --- |
| `2name = "x"` | Names cannot start with a digit |
| `class = 5` | Keywords cannot be used as names |
| `"5" + 3` raises `TypeError` | Convert first: `int("5") + 3` |
| `int("3.7")` raises `ValueError` | Use `int(float("3.7"))` |
| `age = input(...)` then `age + 1` | `input()` returns text. Use `int(input(...))` |
| `print("Hello {name}")` | Add the `f`: `print(f"Hello {name}")` |
| `x == None` | Use `x is None` |
| Expecting `0.1 + 0.2` to equal `0.3` exactly | Floats are approximate. Use `round()` |

### Chapter 2 exercises

Try each exercise on your own first. Your trainer will review your answers with you.

1. **Valid or invalid?** Decide for each: `my_var`, `1st_place`, `total-price`, `_count`, `for`, `Total`.
2. **Swap:** set `a = 5` and `b = 9`, and swap them without a third variable.
3. **Temperature converter:** convert 100 degrees Celsius to Fahrenheit using F = C × 9/5 + 32. Then try 0.
4. **Predict the output** (write your guess, then run it):

```python
print(type(5 / 1), type(5 // 1), type("5"), type(5 > 3))
```

5. **Fix the conversion:** explain why `int("3.7")` fails, and write a version that gives `3`.
6. **Safe converter:** ask the user for a number as text, convert it to a float, and print it doubled.
7. **Greeter:** ask for the user's name and city, and print `Hello Amara from Aba!` using an f-string.
8. **Rectangle:** ask for a length and a width (decimals allowed), then print the area.

### Chapter 2 quick quiz

| Question | Your answer |
| --- | --- |
| Which is a valid variable name: `2fast`, `fast_2`, `fast-2`? |  |
| What does `7 // 2` return? |  |
| What does `int(3.9)` return? |  |
| How should you test whether a value is `None`? |  |
| What type does `input()` always return? |  |
| What does `f"{3 + 4}"` give? |  |

### Chapter 2 summary

- Variables are names bound to values. Use `snake_case`, and never use keywords.
- Python is dynamically typed, so check types with `type()`.
- Numbers come in `int`, `float` and `complex`. Floats are approximate.
- `True` counts as 1 and `False` counts as 0. `None` means "no value" and is tested with `is`.
- Convert explicitly with `int()`, `float()`, `str()` and `bool()`.
- `input()` always returns text, so convert it when you need a number.
- f-strings put values into text, and `:.2f` and `:,` format numbers.

## Chapter 2 projects

Chapter 2 ends with two projects. Project A practises input, conversion and f-strings. Project B adds constants, booleans and `None`. Do them in order.

### Chapter 2 Project A: Course Registration Receipt

**Goal:** build a program that registers a student for a course and prints a neat receipt. It takes about 30 to 40 minutes.

**Skills practised:** `input()`, converting text to numbers with `int()` and `float()`, f-strings, number formatting, comments and `print()`.

**Requirements**

1. Ask for the student's name, the course title, the course fee (a decimal number) and the number of instalments (a whole number).
2. Calculate the amount of each instalment.
3. Print a receipt with a header line, the four details, and a closing welcome message.
4. Show money with a thousands separator and two decimal places.
5. Add a comment above each logical step.

**Build it in stages**

1. Create `registration.py`, paste in the starter code below, and run it.
2. Replace each `TODO` with working code, one at a time. Run the program after each change.
3. Convert the fee with `float()` and the instalments with `int()`.
4. Print the receipt one line at a time, using f-strings.
5. Finish with the welcome message.

**Starter code**

```python
# Course Registration Receipt
# Name: ____________   Date: ____________

print("=== COURSE REGISTRATION ===")

# TODO 1: ask for the student's name and store it in a variable
# TODO 2: ask for the course title
# TODO 3: ask for the course fee and convert it to a float
# TODO 4: ask for the number of instalments and convert it to an int
# TODO 5: calculate the amount of each instalment
# TODO 6: print the receipt (header, four details, welcome message) using f-strings
```

**New tool:** `"=" * 32` repeats the text 32 times, which is a quick way to draw a line. You will study this properly in Chapter 3 (operators) and Chapter 4 (strings). For now, use it for the header and footer lines of your receipt.

**Expected result** (typed input shown after each prompt)

```text
=== COURSE REGISTRATION ===
Student name: Amara Okafor
Course title: Python Foundations
Course fee: 150000
Number of instalments: 3

================================
REGISTRATION RECEIPT
================================
Student     : Amara Okafor
Course      : Python Foundations
Total fee   : 150,000.00
Instalments : 3 x 50,000.00
================================
Welcome aboard, Amara Okafor!
```

**Extension challenges**

1. Ask for a deposit already paid, and split only the remaining balance across the instalments.
2. Add a registration date typed in by the user, and print it on the receipt.
3. Print the receipt header using `sep` so that `REGISTRATION`, `RECEIPT` and the course title appear on one line separated by `|`.

**Self-check**

| Criterion | Points |
| --- | --- |
| Program runs without errors | 4 |
| Fee and instalments are converted to the correct types | 4 |
| Money is shown with commas and two decimals | 4 |
| Every logical step has a clear comment | 4 |
| Receipt layout is neat and readable | 4 |

A score of 16 or more out of 20 means you are ready for Project B.

### Chapter 2 Project B: Mini Shop Invoice

**Goal:** build an invoice calculator for a small shop. It uses constants, type conversion, booleans and `None`, and takes about 40 to 50 minutes.

**Skills practised:** naming variables and constants, `float()` and `int()` conversion, booleans, `None`, `round()` and `type()`.

**Requirements**

1. Define two constants in UPPER\_CASE: a tax rate of 7.5% and a member discount of 10%.
2. Ask for the item name, unit price, quantity, whether the customer is a member, and an optional coupon code.
3. Store membership as a boolean, and store a missing coupon as `None`.
4. Calculate the subtotal, discount, tax and total. Round the total to 2 decimal places.
5. Print the invoice, then a type report showing the type of each input variable.

**Build it in stages**

1. Create `invoice.py`, paste in the starter code below, and run it.
2. Replace each `TODO` with working code. Print each variable with `type()` to confirm it holds what you expect.
3. Add the calculations one at a time, printing each result.
4. Format the invoice with f-strings.
5. Paste the type report block at the end.

**Starter code**

```python
# Mini Shop Invoice
# Name: ____________   Date: ____________

# Constants: UPPER_CASE names for values that never change
TAX_RATE = 0.075
MEMBER_DISCOUNT = 0.10

# TODO 1: ask for the item name, the unit price (float) and the quantity (int)
# TODO 2: ask whether the customer is a member; store True or False in is_member
# TODO 3: ask for a coupon code; store None when the user just presses Enter
# TODO 4: calculate subtotal, discount, after_discount, tax and total
# TODO 5: print the invoice
# TODO 6: paste the type report block (below) at the end of your program
```

**New tools** (new syntax: copy the patterns, you will learn them in later chapters)

```python
answer = input("...").strip().lower()   # removes stray spaces and capital letters (Chapter 4)
flag = answer == "yes"                    # True when the answer is yes, otherwise False (Chapter 3)
text = input("...").strip() or None       # None when the user just presses Enter (Chapter 3)
```

Hint for the discount: `True` counts as 1 and `False` counts as 0 in arithmetic (section 2.5). How could you use `is_member` that way?

**Type report block** (paste at the end of your program)

```python
print("\n----- TYPE REPORT -----")
print("unit_price :", type(unit_price))
print("quantity   :", type(quantity))
print("is_member  :", type(is_member))
print("coupon_code:", type(coupon_code))
```

**Expected result** (member, no coupon)

```text
Item name: Notebook
Unit price: 450.50
Quantity: 3
Member? (yes/no): yes
Coupon code (Enter for none):

----- INVOICE -----
Item      : Notebook x 3
Subtotal  : 1,351.50
Discount  : 135.15
Tax       : 91.23
TOTAL     : 1,307.58
Member    : True
Coupon    : None
Has coupon: False

----- TYPE REPORT -----
unit_price : <class 'float'>
quantity   : <class 'int'>
is_member  : <class 'bool'>
coupon_code: <class 'NoneType'>
```

**Test cases to check your work**

| Item | Price | Qty | Member | Coupon | Expected total | Coupon type |
| --- | --- | --- | --- | --- | --- | --- |
| Notebook | 450.50 | 3 | yes | (none) | 1,307.58 | `<class 'NoneType'>` |
| Pen | 100 | 2 | no | SAVE10 | 215.00 | `<class 'str'>` |

**Understanding check**

| Question | Your answer |
| --- | --- |
| Why is `discount` shown as `0.00` for a non-member? |  |
| How does `... or None` turn an empty coupon into `None`? |  |
| Why is `.strip().lower()` used on the membership answer? |  |
| What would happen if `quantity` were read without `int()`? |  |

**Extension challenges**

1. Add a `DELIVERY_FEE` constant and a yes/no delivery question. Multiply the fee by the boolean, the same way the discount works.
2. Print the type of `subtotal`, `discount` and `total`, and explain each one.
3. Change the tax rate to 5% by editing one line only. Explain why a constant makes this easy.

**Self-check**

| Criterion | Points |
| --- | --- |
| Constants are defined in UPPER\_CASE and used in the calculations | 4 |
| Every input is converted to the correct type | 4 |
| Membership is a true boolean and a missing coupon is `None` | 4 |
| Both test cases give the expected totals | 4 |
| Invoice and type report are neat and readable | 4 |

A score of 16 or more out of 20 means you are ready for Chapter 3.

