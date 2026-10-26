## Chapter 2: Variables and Data Types

By the end of this chapter you can store and convert values, choose good names, and predict how Python treats each basic type.

### Learning objectives

- Create variables and follow naming rules
- Use multiple assignment and swap values
- Explain global versus local scope
- Identify Python's core data types
- Work with `int`, `float` and `complex` numbers
- Convert between types safely
- Understand `bool`, truthiness and `None`
- Recognise literals

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
print(age, type(age).__name__)
print(price, type(price).__name__)
print(is_student, type(is_student).__name__)
```

**Output**

```text
25 int
19.99 float
True bool
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
print(x, type(x).__name__)
x = "five"
print(x, type(x).__name__)
x = 2.5
print(x, type(x).__name__)
```

**Output**

```text
5 int
five str
2.5 float
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

| Box | Python value | Is it `None`? | Truthy? |
| --- | --- | --- | --- |
| Holds the number zero | `0` | No | Falsy |
| Holds empty text | `""` | No | Falsy |
| Holds an empty list | `[]` | No | Falsy |
| Empty box | `None` | Yes | Falsy |

These results come from running `v is None` and `bool(v)` on each value. Always test for `None` with `is None`, never with `== 0` or `== ""`.

**Where the analogy bends:** in real Python, the label is stuck onto the item rather than onto a box that holds a copy. After `a = b = 7`, both labels are on the same item, and `a is b` gives `True`. This is harmless for numbers. Chapter 5 shows why it matters for lists.

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

You can list the keywords yourself:

```python
import keyword
print(len(keyword.kwlist), keyword.iskeyword("class"))
```

**Output (Python 3.13)**

```text
35 True
```

The keyword count changes slightly between Python versions.

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

### 2.3 Global and local variables

Scope decides where a variable can be used. A local variable is created inside a function and exists only there. A global variable is created outside functions and is visible everywhere.

```python
def show():
    msg = "local"      # local variable
    print(msg)

show()                 # local
# print(msg)           # NameError: msg is not defined out here
```

To modify a global variable inside a function, declare it with `global`:

```python
counter = 0

def add_one():
    global counter
    counter += 1

add_one(); add_one()
print(counter)         # 2
```

**Common mistake:** without the `global` line, `counter += 1` inside the function raises an `UnboundLocalError`, because Python treats `counter` as a new local variable.

**Best practice:** avoid `global` where you can. Pass values in as arguments and return results instead (covered in Chapter 6).

### 2.4 Data types overview

Use `type()` to inspect any value:

```python
for v in (42, 3.14, 2+3j, "hi", True, None, [1], (1,), {1}, {"a": 1}):
    print(repr(v), type(v).__name__)
```

**Output**

```text
42 int
3.14 float
(2+3j) complex
'hi' str
True bool
None NoneType
[1] list
(1,) tuple
{1} set
{'a': 1} dict
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

Mutable means the object can be changed after creation. This matters a lot in later chapters.

### 2.5 Numbers

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

Computers store decimals in binary, so some values are approximations. This is true in every language. For comparisons use `round()`, and for money use the `decimal` module (covered later).

### 2.6 Type casting and conversion

You convert types with constructor functions: `int()`, `float()`, `str()` and `bool()`.

```python
print(int(3.9), int("15"), float("2.5"), str(100) + "!", bool(0), bool("a"))
# 3 15 2.5 100! False True

print(int("101", 2), int(True), float(3))
# 5 1 3.0
```

**Key points**

- `int(3.9)` gives `3`. It truncates toward zero and does not round.
- `int("101", 2)` reads the text as a binary number.
- Converting invalid text raises an error:

```python
try:
    int("abc")
except ValueError as e:
    print("ValueError:", e)
# ValueError: invalid literal for int() with base 10: 'abc'
```

`try/except` is covered fully in Chapter 9.

**Implicit conversion:** Python converts automatically in mixed arithmetic. For example, `3 + 2.0` gives `5.0`.

### 2.7 Booleans and None

**Booleans.** `bool` has only two values, `True` and `False` (capitalised). Booleans come from comparisons such as `5 > 3` and are used for decisions. `bool` is a subclass of `int`:

```python
print(isinstance(True, int))    # True
print(int(True))                # 1
```

**Truthiness.** Every value is either truthy or falsy when used in a condition:

```python
print(bool(""), bool(" "), bool([]), bool([0]), bool(0.0), bool(None))
# False True False True False False
```

| Falsy (evaluate to `False`) | Truthy |
| --- | --- |
| `0`, `0.0` | Any non-zero number |
| `""` (empty string) | Any non-empty string, even `" "` |
| `[]`, `()`, `{}`, `set()` | Any non-empty collection, even `[0]` |
| `None` | Almost everything else |

**None.** `None` means "no value". It is the only value of type `NoneType`. Compare with `is`, not `==`:

```python
result = None
print(result is None)    # True
print(type(None))        # <class 'NoneType'>
```

### 2.8 Literals

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

### Common mistakes (Chapter 2)

| Mistake | Fix |
| --- | --- |
| `2name = "x"` | Names cannot start with a digit |
| `class = 5` | Keywords cannot be used as names |
| `"5" + 3` raises `TypeError` | Convert first: `int("5") + 3` |
| `int("3.7")` raises `ValueError` | Use `int(float("3.7"))` |
| `if x == None:` | Use `if x is None:` |
| Expecting `0.1 + 0.2 == 0.3` to be `True` | Use `round()` for float comparisons |
| Changing a global without `global` | Use `global`, or better, pass arguments and return values |

### Chapter 2 exercises

Try each exercise on your own first. Your trainer will review your answers with you.

1. **Valid or invalid?** Decide for each: `my_var`, `1st_place`, `total-price`, `_count`, `for`, `Total`.
2. **Swap:** set `a = 5` and `b = 9`, and swap them without a third variable.
3. **Temperature converter:** convert 100 degrees Celsius to Fahrenheit using F = C × 9/5 + 32. Then try 0.
4. **Predict the output** (write your guess, then run it):

```python
print(type(5 / 1), type(5 // 1), type("5"), type(5 > 3))
```

5. **Truthiness:** without running it, say which of `0`, `"0"`, `[]`, `[[]]`, `None` are falsy.
6. **Safe converter:** ask the user for a number as text, convert it to a float, and print it doubled.

### Chapter 2 quick quiz

| Question | Your answer |
| --- | --- |
| Which is a valid variable name: `2fast`, `fast_2`, `fast-2`? |  |
| What does `7 // 2` return? |  |
| What does `int(3.9)` return? |  |
| How should you test whether a value is `None`? |  |
| Is `bool("False")` `True` or `False`? |  |

### Chapter 2 summary

- Variables are names bound to values. Use `snake_case`, and never use keywords.
- Python is dynamically typed, so check types with `type()`.
- Numbers come in `int`, `float` and `complex`. Floats are approximate.
- Convert explicitly with `int()`, `float()`, `str()` and `bool()`.
- Empty or zero values are falsy. `None` means "no value" and is tested with `is`.
- Prefer local variables. Use `global` sparingly.

### Chapter 2 project: Mini Shop Invoice

**Goal:** build an invoice calculator for a small shop. It uses constants, type conversion, booleans and `None`.

**Skills practised:** naming variables and constants, `float()` and `int()` conversion, booleans from comparisons, truthiness, `None`, `round()` and `type()`.

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
answer = input("...").strip().lower()   # removes stray spaces and capital letters
flag = answer == "yes"                    # True when the answer is yes, otherwise False
text = input("...").strip() or None       # None when the user just presses Enter
```

Hint for the discount: `True` counts as 1 and `False` counts as 0 in arithmetic (section 2.7). How could you use `is_member` that way?

**Type report block** (paste at the end of your program)

```python
print("\n----- TYPE REPORT -----")
for label, value in (("unit_price", unit_price), ("quantity", quantity),
                     ("is_member", is_member), ("coupon_code", coupon_code)):
    print(f"{label:12}{type(value).__name__}")
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
unit_price  float
quantity    int
is_member   bool
coupon_code NoneType
```

**Test cases to check your work**

| Item | Price | Qty | Member | Coupon | Expected total | Coupon type |
| --- | --- | --- | --- | --- | --- | --- |
| Notebook | 450.50 | 3 | yes | (none) | 1,307.58 | `NoneType` |
| Pen | 100 | 2 | no | SAVE10 | 215.00 | `str` |

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

