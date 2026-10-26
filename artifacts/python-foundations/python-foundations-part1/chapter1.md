## Chapter 1: Setup and First Program

*Learning Path section 1.1.* By the end of this chapter you can install Python, set up your editor, and write and run your first programs that show output.

### Learning objectives

- Describe in a few sentences what Python is
- Install Python and confirm it works
- Start the REPL and run a script from the terminal
- Set up VS Code as your code editor
- Write, save and run your first program
- Use correct syntax, indentation and comments
- Display output with `print()`

### 1.1 What is Python?

Python is a high-level, general-purpose programming language designed to be readable, so code looks close to plain English.

| Term | Meaning |
| --- | --- |
| High-level | You focus on solving the problem, not on managing computer memory |
| General-purpose | Used for websites, data analysis, AI, automation, security and more |
| Interpreted | Code is run line by line by a program called the interpreter |
| Dynamically typed | You don't declare variable types; Python works them out |

**Where Python is used:** data analysis, machine learning, web backends, automation scripts, cybersecurity tools, DevOps, scientific computing and teaching.

### 1.2 History and features (optional reading)

*This part is optional. If you want to start practising, skip to 1.2.1 and come back to the history later.*

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

Before touching any commands, picture a restaurant kitchen. This mental model explains the ideas that confuse most beginners: the interpreter, the REPL and, later in the course, the virtual environment.

| Kitchen | Python | What it means in practice |
| --- | --- | --- |
| The recipe | Your program (a `.py` file) | Step-by-step instructions that you write |
| Head Chef | The Python interpreter | Reads your recipe one line at a time and carries out each instruction |
| Tasting spoon | The REPL (the `>>>` prompt) | Try one small step and taste the result straight away, without cooking the whole dish |
| Serving counter | Terminal output | Where finished results and error messages appear |
| Private kitchen station (Preview) | A virtual environment (`.venv`) | Your own workspace with its own tools and ingredients, so other projects cannot interfere. You build one in Chapter 10 |
| Ingredients delivered to your station (Preview) | Packages installed with pip | Extra tools that arrive in your station only. Also Chapter 10 |

**How to use the analogy**

- **The Head Chef** cannot read your mind. The chef follows the recipe exactly as written, from top to bottom. If a line makes no sense, the chef stops at that line and tells you what is wrong. That message is a Python error.
- **The tasting spoon** lets you test one idea quickly. When you close the REPL the taste is gone, so anything worth keeping goes into a written recipe, which is a `.py` file.
- **The private kitchen station** is a preview. Later, each project will get its own station so that one project's tools never ruin another's dish.

**Where the analogy bends:** a human chef can guess what you meant and improvise. The Python interpreter never guesses. It only follows the rules of the language, which is why small typing errors matter.

**Check your understanding**

| Question | Your answer |
| --- | --- |
| Which kitchen role runs your code? |  |
| What is the REPL like? |  |
| What happens to a tasting-spoon test when you close the REPL? |  |

### 1.3 Installing Python

1. **Download.** Go to python.org, open Downloads, and get the latest stable Python 3 release for your operating system. This course targets Python 3.12 or newer. Python 3.10 is the minimum, because it is needed for `match-case`, which you meet in Phase 2.
2. **Install.**
   - Windows: tick **"Add python.exe to PATH"** on the first installer screen, then click Install Now. Missing this tick is the most common beginner problem.
   - macOS / Linux: use the installer from python.org, or your package manager (`brew install python`, `sudo apt install python3`).
3. **Verify.** Open a terminal (Command Prompt or PowerShell on Windows, Terminal on macOS/Linux) and run:

```bash
python --version        # Windows (often also works on macOS/Linux)
python3 --version       # macOS / Linux
```

Expected: a version number such as `Python 3.13.x`. Any version from 3.12 upwards is fine.

### 1.4 The Python interpreter and the REPL

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

### 1.5 Your first program: Hello World

Create a file named `hello.py`:

```python
print("Hello, World!")
```

Run it from the terminal with `python hello.py`.

**Output**

```text
Hello, World!
```

`print()` is a built-in function. The text inside the quotes is a string.

### 1.6 Setting up VS Code

1. Download Visual Studio Code from code.visualstudio.com and install it.
2. Open Extensions (square icon on the left) and install the **Python** extension by Microsoft.
3. Choose File, then Open Folder, and pick a folder for your Python practice files.
4. Press `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac), choose **Python: Select Interpreter**, and pick the Python 3.12 or newer that you installed.
5. Create `hello.py`, then click the Run button (top right) or run it in the integrated terminal.

**Useful habits:** save often (`Ctrl+S`), and use the integrated terminal so you never leave the editor.

### 1.7 Basic syntax and indentation

Python uses indentation (leading spaces) to define blocks of code, instead of the curly braces used in many other languages.

```python
x = 10
if x > 5:
    print("x is greater than 5")
    print("still inside the if block")
print("outside the if block")
```

Variables (`x = 10`) are explained in Chapter 2 and `if` in Chapter 5. For now, just notice the indentation.

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

### 1.8 Comments

Comments are notes for humans. Python ignores them.

```python
# This is a single-line comment
print("Hello")  # inline comment explaining this line

"""
A triple-quoted string on its own is often used
for multi-line notes (technically a string, not a comment).
"""
```

**Best practice:** explain why, not what the code obviously does.

| Weak | Better |
| --- | --- |
| `x = x + 1  # add 1 to x` | `x = x + 1  # move to the next student record` |

### 1.9 Output with print()

`print()` shows text, numbers and results on the screen. Give it several items separated by commas.

```python
print("Python", "is", "fun")              # Python is fun
print("Python", "is", "fun", sep="-")     # Python-is-fun
print("Loading", end="...")               # no newline at the end
print("done")                             # Loading...done
print("2 + 3 =", 2 + 3)                   # 2 + 3 = 5
```

- `sep` sets the separator between items (default is a space).
- `end` sets what is printed at the end (default is a newline).
- An empty `print()` prints a blank line.

Chapter 2 adds a more powerful way to build output, called f-strings.

### Common mistakes (Chapter 1)

When Python reports an error, read the last line first. It names the type of error and describes the problem. Chapter 8 teaches full debugging.

| Mistake | Result | Fix |
| --- | --- | --- |
| Forgetting to tick "Add to PATH" | `'python' is not recognized` | Reinstall, or add Python to PATH |
| Wrong indentation | `IndentationError` | Use 4 spaces consistently |
| Missing colon after `if` | `SyntaxError` | Add `:` |
| Mismatched quotes `"hi'` | `SyntaxError` | Open and close with the same quote |
| Using `Print()` | `NameError` | Python is case-sensitive: `print()` |
| Writing `print "hi"` | `SyntaxError: Missing parentheses` | Use `print("hi")` |

### Chapter 1 exercises

Try each exercise on your own first. Your trainer will review your answers with you.

1. **Warm-up:** print your full name and country on two separate lines.
2. **Business card lines:** print three lines: your name, your job title and your city.
3. **Fix it:** this program has an error. Find and fix it.

```python
age = 20
if age >= 18:
print("Adult")
```

4. **Separators:** print `Python is fun` with hyphens between the words, using `sep=`.
5. **Challenge:** print `Loading...` and then `Done!` on the same line using `end=`.
6. **REPL practice:** start the REPL, work out `12 * 7`, `100 - 35` and `2 ** 5`, then leave with `exit()`.
7. **Comment it:** write a three-line program, with a comment above each line explaining why it is there.

### Chapter 1 quick quiz

| Question | Your answer |
| --- | --- |
| What does the `>>>` prompt indicate? |  |
| What is the recommended indentation? |  |
| Which command runs a file called `hello.py` from the terminal? |  |
| Which symbol starts a comment? |  |
| Is `Name` the same as `name`? |  |

### Chapter 1 summary

- Python is readable, versatile and free. Always use Python 3, version 3.12 or newer for this course.
- Run code in the REPL for experiments and in `.py` scripts for programs.
- Indentation is part of the syntax. Use 4 spaces.
- Comments explain why. Python ignores them.
- `print()` shows output, and `sep` and `end` control its layout.

### Chapter 1 project: Business Card

**Goal:** build a program that prints a neat digital business card. It uses everything in this chapter and takes about 30 minutes.

**Skills practised:** creating and running a script, comments, `print()` with several items, `sep` and `end`.

**Requirements**

1. Start the file with a comment containing the program name, your name and the date.
2. Print a border line, your name, your job title, and a second border line.
3. Print your phone number, email and city, one per line, using `sep=" : "` so each label and value are separated by a colon.
4. Print `Skills:` followed by three skills on the same line, separated by `|`, using `end=`.
5. Print a closing border line and a thank-you message.
6. Add a comment above each logical step.

**Build it in stages**

1. Create `business_card.py`, paste in the starter code below, and run it.
2. Replace each `TODO` with working code, one at a time. Run the program after each change.
3. Compare your output with the expected result.

**Starter code**

```python
# Business Card
# Programmer: ____________   Date: ____________

# TODO 1: print a top border line made of 30 = characters
# TODO 2: print your name and your job title on two lines
# TODO 3: print a second border line
# TODO 4: print your phone, email and city, each on its own line, using sep=" : "
# TODO 5: print Skills: and then three skills on one line, separated by " | ", using end=
# TODO 6: print a closing border line and a thank-you message
```

**Expected result** (your card shows your own details)

```text
==============================
AMARA OKAFOR
Python Trainee
==============================
Phone : 0803 000 0000
Email : amara@example.com
City : Aba
Skills: Python | Excel | Teamwork
==============================
Thank you for your time!
```

**Extension challenges**

1. Add a website line using `sep=""` so that ` Web:  ` and the address join without an extra space.
2. Print a blank line between the sections using an empty `print()`.
3. Print a second card for a friend, below the first.

**Self-check**

| Criterion | Points |
| --- | --- |
| Program runs without errors | 4 |
| `sep` is used correctly for the three detail lines | 4 |
| `end` is used correctly to put the skills on one line | 4 |
| Every logical step has a clear comment | 4 |
| Card layout is neat and matches the expected result | 4 |

A score of 16 or more out of 20 means you are ready for Chapter 2.

