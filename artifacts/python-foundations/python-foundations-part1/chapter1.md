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

