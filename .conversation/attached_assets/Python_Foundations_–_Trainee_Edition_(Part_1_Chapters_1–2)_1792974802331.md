# Python Foundations

## Trainee Edition · Part 1: Chapters 1–2

Oct 25, 2026 · @Edet

Prepared by Ime Edet Nya · CRYOBYTEPRIME · Version 1.0

## Welcome to Python Foundations

This workbook takes you from zero to writing your first complete Python programs, with no programming experience needed. Part 1 covers Chapter 1 (Introduction & Environment) and Chapter 2 (Variables and Data Types).

### What you will be able to do after Part 1

- Explain what Python is and install it on your computer
- Set up VS Code and a virtual environment for your projects
- Write, save and run Python programs
- Take input from a user and display formatted output
- Store information in variables and choose the right data type
- Convert between data types and understand `True`, `False` and `None`

### What you need

| Item | Why you need it |
| --- | --- |
| A computer (Windows, macOS or Linux) | To install Python and write code |
| An internet connection | To download Python and Visual Studio Code |
| Python 3 | The language itself. You install it in Chapter 1 |
| Visual Studio Code with the Python extension | Your code editor. You set it up in Chapter 1 |
| A notebook or pen | To write quiz answers and notes |

### How to study each chapter

1. Read the learning objectives so you know the goal.
2. **Type every example yourself.** Do not copy and paste. Typing builds memory and helps you spot details.
3. Run each example and compare your output with the output shown in the workbook.
4. Try the exercises on your own before asking for help. Your trainer will go through your answers with you.
5. Complete the quick quiz and write your answers in the table.
6. Build the chapter project from the starter code.

### Habits that make you a better programmer

- Practise a little every day. Short, regular sessions beat one long session.
- Read error messages carefully. They tell you what went wrong and on which line.
- Work in small steps and run your program after every change.
- When you ask for help, show your code and the exact error message.

### Conventions used in this workbook

| Label | Meaning |
| --- | --- |
| Output | The exact result printed when the code runs |
| Common mistake | An error beginners often make, with its fix |
| Best practice | The professional standard to follow from day one |
| Check your understanding | Short questions to test what you just learned |
| Project | A hands-on build that combines the chapter's skills |

All code in this workbook was tested on Python 3.13. Newer Python 3 versions work the same way for everything in Part 1.

*Copyright 2026 Ime Edet Nya. All rights reserved. Python and Visual Studio Code are trademarks of their respective owners.*

## Contents

Part 1 has two chapters, each ending with a project, and a capstone that combines both.

**Chapter 1: Introduction & Environment**

- 1.1 What is Python?
- 1.2 History and features, including 1.2.1 The Kitchen Analogy
- 1.3 Installation and environment setup
- 1.4 The Python interpreter, with the Installation & Execution flowchart
- 1.5 Virtual environments
- 1.6 Your first program: Hello World
- 1.7 Setting up a code editor (VS Code)
- 1.8 Basic syntax and indentation
- 1.9 Comments
- 1.10 Output with `print()`
- 1.11 User input
- Exercises, quick quiz and summary
- **Project: Course Registration Receipt**

**Chapter 2: Variables and Data Types**

- 2.1 Variables and naming rules, including 2.1.1 The Labeled Storage Box Analogy
- 2.2 Multiple assignment
- 2.3 Global and local variables
- 2.4 Data types overview
- 2.5 Numbers
- 2.6 Type casting and conversion
- 2.7 Booleans and `None`
- 2.8 Literals
- Exercises, quick quiz and summary
- **Project: Mini Shop Invoice**

**Part 1 capstone:** Student Profile Card

**My progress checklist and what comes next**

## Chapter 1: Introduction & Environment

By the end of this chapter you can install Python, set up a project environment, and write and run programs that take input and show output.

### Learning objectives

- Explain what Python is and why it is so widely used
- Install Python and confirm it works
- Create and activate a virtual environment
- Write, save and run your first program in VS Code
- Use correct syntax, indentation and comments
- Take user input and display output with `print()`

### 1.1 What is Python?

Python is a high-level, general-purpose programming language designed to be readable, so code looks close to plain English.

| Term | Meaning |
| --- | --- |
| High-level | You focus on solving the problem, not on managing computer memory |
| General-purpose | Used for websites, data analysis, AI, automation, security and more |
| Interpreted | Code is run line by line by a program called the interpreter |
| Dynamically typed | You don't declare variable types; Python works them out |

**Where Python is used:** data analysis, machine learning, web backends, automation scripts, cybersecurity tools, DevOps, scientific computing and teaching.

### 1.2 History and features

- **Creator:** Guido van Rossum, who began the work in the late 1980s in the Netherlands.
- **First release:** 1991.
- **Name:** taken from the comedy show *Monty Python's Flying Circus*, not the snake.
- **Python 2 to Python 3:** Python 3 was released in 2008. Python 2 reached end of life on 1 January 2020, so always learn and use Python 3.

**Key features**

1. Simple, readable syntax, with fewer symbols and less boilerplate than many languages
2. Large standard library (the "batteries included" philosophy)
3. Huge ecosystem of third-party packages
4. Cross-platform: the same code runs on Windows, macOS and Linux
5. Free and open source
6. Multi-paradigm: supports procedural, object-oriented and functional styles

#### 1.2.1 The Kitchen Analogy

Before touching any commands, picture a restaurant kitchen. This mental model explains the three ideas that confuse most beginners: the interpreter, the REPL and the virtual environment.

| Kitchen | Python | What it means in practice |
| --- | --- | --- |
| The recipe | Your program (a `.py` file) | Step-by-step instructions that you write |
| Head Chef | The Python interpreter | Reads your recipe one line at a time and carries out each instruction |
| Tasting spoon | The REPL (the `>>>` prompt) | Try one small step and taste the result straight away, without cooking the whole dish |
| Private kitchen station | A virtual environment (`.venv`) | Your own workspace with its own tools and ingredients, so other projects cannot interfere |
| Ingredients delivered to your station | Packages installed with pip | Extra tools that arrive in your station only (covered in Chapter 7) |
| Serving counter | Terminal output | Where finished results and error messages appear |

**How to use the analogy**

- **The Head Chef** cannot read your mind. The chef follows the recipe exactly as written, from top to bottom. If a line makes no sense, the chef stops at that line and tells you what is wrong. That message is a Python error.
- **The tasting spoon** lets you test one idea quickly. When you close the REPL the taste is gone, so anything worth keeping goes into a written recipe, which is a `.py` file.
- **The private kitchen station** keeps each project separate. Project A can use one version of a tool while project B uses another, and neither ruins the other's dish. A shared kitchen would mean constant clashes.

**Where the analogy bends:** a human chef can guess what you meant and improvise. The Python interpreter never guesses. It only follows the rules of the language, which is why small typing errors matter.

**Check your understanding**

| Question | Your answer |
| --- | --- |
| Which kitchen role runs your code? |  |
| What is the REPL like? |  |
| Why use a virtual environment for each project? |  |

### 1.3 Installation and environment setup

1. **Download.** Go to python.org, open Downloads, and get the latest stable Python 3 release for your operating system. The `match-case` topic later in this course needs Python 3.10 or higher.
2. **Install.**
   - Windows: tick **"Add python.exe to PATH"** on the first installer screen, then click Install Now. Missing this tick is the most common beginner problem.
   - macOS / Linux: use the installer from python.org, or your package manager (`brew install python`, `sudo apt install python3`).
3. **Verify.** Open a terminal (Command Prompt or PowerShell on Windows, Terminal on macOS/Linux) and run:

```bash
python --version        # Windows (often also works on macOS/Linux)
python3 --version       # macOS / Linux
```

Expected: a version number such as `Python 3.13.x`.

### 1.4 The Python interpreter

The interpreter reads your code and executes it. There are two ways to use it.

**Interactive mode (REPL).** Type `python` (or `python3`) and press Enter to get the `>>>` prompt. Use it for quick experiments.

```python
>>> 2 + 3
5
>>> print("Hi")
Hi
>>> exit()
```

**Script mode.** Write code in a file ending in `.py`, then run it. Use it for real programs.

```bash
python my_program.py
```

**Remember:** the REPL is a notepad for testing ideas. Anything you want to keep goes in a `.py` file.

**Installation & execution flowchart**

Read the flowchart from top to bottom. Part A happens once. Part B happens every time you run a program.

```text
INSTALLATION & EXECUTION FLOWCHART

PART A - ONE-TIME INSTALLATION (Section 1.3)

  [ Download Python ]     from python.org
          |
          v
  [ Run installer ]       tick "Add python.exe to PATH" on Windows
          |
          v
  [ Verify ]              python --version  shows  Python 3.x


PART B - EVERY TIME YOU RUN A PROGRAM

  [ Human Mind ]          your idea: the problem you want to solve
          |
          |  you turn the idea into instructions and type them in VS Code
          v
  [ .py File ]            hello.py, saved on disk
          |
          |  you run it:  python hello.py
          v
  [ Python Interpreter ]  reads the file, checks syntax, runs it line by line
          |
          |  results and error messages
          v
  [ Terminal Output ]     Hello, World!
          |
          +--> Output as expected?  Done.
          +--> Error message?  Read it, fix the .py file, save, run again.
```

| Stage | Kitchen analogy (1.2.1) | What happens | Example |
| --- | --- | --- | --- |
| Human Mind | The customer's order and your plan | You decide what the program must do | Print a greeting |
| `.py` File | The written recipe | You save your instructions as a text file | `hello.py` |
| Python Interpreter | The Head Chef | Reads and runs the file line by line | `python hello.py` |
| Terminal Output | The serving counter | Results or error messages appear | `Hello, World!` |

**Common mistake:** running a program without saving the file first. The Head Chef then cooks the old saved recipe, so your latest change seems to have no effect. Save with `Ctrl+S` before every run.

### 1.5 Virtual environments

A virtual environment is an isolated folder holding its own Python and installed packages. Each project gets its own, so one project's packages never break another's.

```bash
# 1. Create (inside your project folder)
python -m venv .venv

# 2. Activate
.venv\Scripts\activate          # Windows
source .venv/bin/activate       # macOS / Linux

# 3. You will see (.venv) at the start of your prompt

# 4. Deactivate when finished
deactivate
```

**Common mistake (Windows PowerShell):** if activation is blocked with a "running scripts is disabled" message, use Command Prompt instead, or ask your trainer to help you change the PowerShell execution policy.

**Best practice:** create one virtual environment per project and never install packages globally for project work.

### 1.6 Your first program: Hello World

Create a file named `hello.py`:

```python
print("Hello, World!")
```

Run it with `python hello.py`.

**Output**

```text
Hello, World!
```

`print()` is a built-in function. The text inside the quotes is a string.

### 1.7 Setting up a code editor (VS Code)

1. Download Visual Studio Code from code.visualstudio.com and install it.
2. Open Extensions (square icon on the left) and install the **Python** extension by Microsoft.
3. Choose File, then Open Folder, and pick your project folder.
4. Press `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac), choose **Python: Select Interpreter**, and pick the one inside `.venv`.
5. Create `hello.py`, then click the Run button (top right) or run it in the integrated terminal.

**Useful habits:** save often (`Ctrl+S`), and use the integrated terminal so you never leave the editor.

### 1.8 Basic syntax and indentation

Python uses indentation (leading spaces) to define blocks of code, instead of the curly braces used in many other languages.

```python
x = 10
if x > 5:
    print("x is greater than 5")
    print("still inside the if block")
print("outside the if block")
```

**Output**

```text
x is greater than 5
still inside the if block
outside the if block
```

**Rules**

- Use 4 spaces per indentation level (the PEP 8 standard). Never mix tabs and spaces.
- A line ending in a colon `:` expects an indented block to follow.
- Statements normally end at the end of the line. No semicolons are needed.
- Names are case-sensitive: `Name`, `name` and `NAME` are three different identifiers.

**Line continuation**

```python
total = 1 + 2 + \
        3            # backslash continues the line
print(total)         # 6

items = [
    "apple",
    "banana",
]                    # brackets allow natural line breaks
print(items)         # ['apple', 'banana']
```

### 1.9 Comments

Comments are notes for humans. Python ignores them.

```python
# This is a single-line comment
x = 10  # inline comment explaining this line

"""
A triple-quoted string on its own is often used
for multi-line notes (technically a string, not a comment).
"""
```

**Best practice:** explain why, not what the code obviously does.

| Weak | Better |
| --- | --- |
| `x = x + 1  # add 1 to x` | `x = x + 1  # move to the next student record` |

### 1.10 Output with print()

```python
print("Python", "is", "fun")              # Python is fun
print("Python", "is", "fun", sep="-")     # Python-is-fun
print("Loading", end="...")               # no newline at the end
print("done")                             # Loading...done
```

- `sep` sets the separator between items (default is a space).
- `end` sets what is printed at the end (default is a newline).

**f-strings (formatted output)**

```python
name = "Amara"; age = 25
print(f"My name is {name} and I am {age} years old.")

price = 1234.5678
print(f"Price: {price:.2f}")        # 2 decimal places
print(f"Big number: {1234567:,}")   # thousands separator
```

**Output**

```text
My name is Amara and I am 25 years old.
Price: 1234.57
Big number: 1,234,567
```

### 1.11 User input

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

**Critical point:** `input()` always returns a string, even if the user types a number. Convert it when you need a number:

```python
age = int(input("Your age: "))
print(f"Next year you will be {age + 1}.")
```

Typing `25` gives `Next year you will be 26.` Without `int()`, `age + 1` would fail, because you cannot add a number to text.

### Common mistakes (Chapter 1)

| Mistake | Result | Fix |
| --- | --- | --- |
| Forgetting to tick "Add to PATH" | `'python' is not recognized` | Reinstall, or add Python to PATH |
| Wrong indentation | `IndentationError` | Use 4 spaces consistently |
| Missing colon after `if` | `SyntaxError` | Add `:` |
| Mismatched quotes `"hi'` | `SyntaxError` | Open and close with the same quote |
| Using `Print()` | `NameError` | Python is case-sensitive: `print()` |
| Treating `input()` as a number | `TypeError` | Wrap with `int()` or `float()` |

### Chapter 1 exercises

Try each exercise on your own first. Your trainer will review your answers with you.

1. **Warm-up:** print your full name and country on two separate lines.
2. **Greeter:** ask for the user's name and city, and print `Hello Amara from Aba!`
3. **Fix it:** this program has an error. Find and fix it.

```python
age = 20
if age >= 18:
print("Adult")
```

4. **Rectangle:** ask for a length and a width (decimals allowed), then print the area.
5. **Challenge:** print `Loading...` and then `Done!` on the same line using `end=`.

### Chapter 1 quick quiz

| Question | Your answer |
| --- | --- |
| What does the `>>>` prompt indicate? |  |
| What is the recommended indentation? |  |
| What type does `input()` always return? |  |
| Which command creates a virtual environment? |  |
| Is `Name` the same variable as `name`? |  |

### Chapter 1 summary

- Python is readable, versatile and free. Always use Python 3.
- Run code in the REPL for experiments and in `.py` scripts for programs.
- Use a virtual environment for every project.
- Indentation is part of the syntax. Use 4 spaces.
- `print()` outputs; `input()` reads text and always returns a string.

### Chapter 1 project: Course Registration Receipt

**Goal:** build a program that registers a student for a course and prints a neat receipt. It uses everything in this chapter.

**Skills practised:** running a script, comments, `input()`, converting text to numbers, `print()` with `sep` and `end`, and f-string formatting.

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
4. Print the receipt one line at a time.
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
# TODO 6: print the receipt (header, four details, welcome message)
```

**New tool:** `"=" * 32` repeats the text 32 times, which is a quick way to draw a line. You will study this properly in later chapters. For now, use it for the header and footer lines of your receipt.

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

A score of 16 or more out of 20 means you are ready for Chapter 2.

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

## Part 1 capstone: Student Profile Card

This project combines Chapters 1 and 2: input, type conversion, f-strings, booleans and `type()`. Build it from scratch in a file called `profile_card.py`, using the requirements and the expected result below. Do not look back at earlier projects until you have tried.

**Requirements**

1. Ask for the full name, age (whole number), height in metres (decimal) and whether the person is a student (yes or no).
2. Store the student answer as a boolean (`True` or `False`).
3. Print a profile card with a heading and one line per detail.
4. Show the age next year, the height with 2 decimal places, and the type of the `age` variable.

**Expected result**

```text
Full name: Amara Okafor
Age: 25
Height in metres: 1.68
Are you a student? (yes/no): yes

--- PROFILE CARD ---
Name       : Amara Okafor
Age        : 25 (next year: 26)
Height     : 1.68 m
Student    : True
Age type   : int
```

A second check: `Chidi Eze`, `31`, `1.8` and `no` should show `Height     : 1.80 m`, `Student    : False` and `Age        : 31 (next year: 32)`.

**Extension tasks**

1. Add a city field and print it on the card.
2. Print the height in centimetres as a whole number.
3. Add a line showing the year the person was born (use a fixed current year for now).

## My progress checklist and what comes next

Tick each item when you have finished it. Ask your trainer about anything you could not complete.

### Chapter 1: Introduction & Environment

- [ ] Python is installed and `python --version` works
- [ ] VS Code and the Python extension are set up
- [ ] I created and activated a virtual environment
- [ ] I ran `hello.py` from the terminal
- [ ] I completed the five Chapter 1 exercises
- [ ] I completed the Chapter 1 quick quiz
- [ ] I built the Course Registration Receipt project and scored 16 or more

### Chapter 2: Variables and Data Types

- [ ] I can name variables correctly and explain why
- [ ] I can predict the type of any basic value
- [ ] I completed the six Chapter 2 exercises
- [ ] I completed the Chapter 2 quick quiz
- [ ] I built the Mini Shop Invoice project and scored 16 or more

### Part 1 capstone

- [ ] I built the Student Profile Card without looking at earlier projects

### What comes next

Part 2 continues with **Chapter 3: Operators** (arithmetic, comparison, logical, membership and identity) and **Chapter 4: Control Flow** (`if`, `elif`, `else`, `match-case`, `for` and `while` loops, and `range()`). Several things you copied as given in the projects, such as `or` and the `for` loop, will be explained there.

### Questions to ask my trainer

-
-
-
