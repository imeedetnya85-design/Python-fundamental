## Chapter 4: Strings

*Learning Path section 1.4.* By the end of this chapter you can create, slice, build, clean and format text, which is the data type you will handle most often in real programs.

### Learning objectives

- Create strings with single, double and triple quotes, and measure them with `len()`.
- Access characters by index and extract pieces with slicing.
- Explain why strings are immutable.
- Build text with concatenation, f-strings and `format()`.
- Use escape characters and raw strings.
- Clean and transform text with the core string methods.

### 4.1 Creating strings

A string is a sequence of characters. Wrap the text in single or double quotes. Triple quotes allow text over several lines.

```python
a = 'single'
b = "double"
c = """triple
quoted"""
print(a, b)
print(c)
print("It's fine", 'He said "hi"')
print(len("Python"), len(""), len("a b"))
```

**Output**

```text
single double
triple
quoted
It's fine He said "hi"
6 0 3
```

- Single and double quotes behave the same. Choose one style and stay with it.
- Use the other kind of quote to put a quote mark inside the text.
- `len()` counts every character, including spaces. An empty string has length 0.

### 4.2 Indexing and slicing

Picture a string as a row of numbered boxes. Counting starts at 0 from the left, and at -1 from the right.

```text
  P   y   t   h   o   n
  0   1   2   3   4   5     <- positive index
 -6  -5  -4  -3  -2  -1     <- negative index
```

```python
s = "Python"
print(s[0], s[5], s[-1], s[-2])
```

**Output**

```text
P n n o
```

A slice takes a piece: `s[start:stop:step]`. The `start` is included, the `stop` is excluded, and any part can be left out.

```python
print(s[0:2], s[2:], s[:3], s[:], s[::2], s[::-1])
print(s[1:4], s[-3:], s[10:], s[2:2] == "")
```

**Output**

```text
Py thon Pyt Python Pto nohtyP
yth hon  True
```

| Slice | Meaning | Result for `"Python"` |
| --- | --- | --- |
| `s[0:2]` | from 0 up to but not including 2 | `Py` |
| `s[2:]` | from 2 to the end | `thon` |
| `s[:3]` | from the start up to 3 | `Pyt` |
| `s[-3:]` | the last three characters | `hon` |
| `s[::2]` | every second character | `Pto` |
| `s[::-1]` | reversed | `nohtyP` |

A slice never crashes when it goes past the end (`s[10:]` is simply empty), but a single index does: `s[10]` raises an `IndexError`.

### 4.3 Immutability

Strings cannot be changed in place. Trying `s[0] = "J"` raises a `TypeError`. Instead you build a new string and re-label the box.

```python
s = "Python"
s2 = "J" + s[1:]
print(s, s2)
```

**Output**

```text
Python Jython
```

The original `"Python"` is untouched. Think of a printed sticker: you cannot edit the ink, so you print a new sticker and stick it on the box.

### 4.4 Building strings

Three ways to combine text and values:

```python
first, last = "Amara", "Okafor"
print(first + " " + last)
print(f"{first} {last}")
print("{} is {} years old".format("Chidi", 31))
print("{0} {1} {0}".format("a", "b"))
print("-" * 20)
```

**Output**

```text
Amara Okafor
Amara Okafor
Chidi is 31 years old
a b a
--------------------
```

| Method | When to use it |
| --- | --- |
| Concatenation `+` | Joining two or three pieces of text. Every piece must be a string. |
| f-string `f"..."` | The default choice. It is the clearest and allows any expression inside `{}`. |
| `.format()` | Older code, and templates stored away from the values. |
| Repetition `*` | Dividers and padding. |

**f-string power tools.** Inside the braces you can run expressions and add a format specification after a colon:

```python
price = 1234.5
print(f"{3 * 4}", f"{first.upper()}")
print(f"{price:,.2f}", f"{price:10.1f}|", f"{price:<10}|", f"{first:>8}|", f"{first:^9}|", f"{7:03d}", f"{0.256:.1%}")
```

**Output**

```text
12 AMARA
1,234.50     1234.5| 1234.5    |    Amara|   Amara  | 007 25.6%
```

| Specifier | Meaning | Example result |
| --- | --- | --- |
| `:,.2f` | thousands comma, 2 decimals | `1,234.50` |
| `:10.1f` | width 10, 1 decimal | `     1234.5 ` |
| `:<10` | left-align in width 10 | ` 1234.5     ` |
| `:>8` | right-align in width 8 | `    Amara ` |
| `:^9` | centre in width 9 | `  Amara  ` |
| `:03d` | pad an integer with zeros to width 3 | `007` |
| `:.1%` | percentage with 1 decimal | `25.6%` |

**Common mistake:** `"Age: " + 31` raises a `TypeError`. Convert first: `"Age: " + str(31)`, or simply use an f-string.

### 4.5 Escape characters and raw strings

A backslash inside a string starts an escape sequence.

```python
print("Line1\nLine2")
print("Col1\tCol2")
print("She said \"hi\"")
print('It\'s')
print("Back\\slash")
print(r"C:\new\table")
print(len("\n"), len(r"\n"))
```

**Output**

```text
Line1
Line2
Col1	Col2
She said "hi"
It's
Back\slash
C:\new\table
1 2
```

| Escape | Meaning |
| --- | --- |
| `\n` | new line |
| `\t` | tab |
| `\"` and `\'` | a quote mark |
| `\\` | one backslash |

A raw string (`r"..."`) switches escapes off, which is ideal for Windows file paths. The last line shows why: `"\n"` is a single new-line character (length 1), but `r"\n"` is two literal characters (length 2).

### 4.6 String methods

Methods are actions attached to a value, written `value.method()`. They never change the original string because strings are immutable. They return a new one.

**Cleaning and case**

```python
t = "  Hello, World  "
print(repr(t.strip()), repr(t.lstrip()), repr(t.rstrip()))
t = "Hello, World"
print(t.upper(), t.lower(), t.title(), t.capitalize(), t.swapcase())
```

**Output**

```text
'Hello, World' 'Hello, World  ' '  Hello, World'
HELLO, WORLD hello, world Hello, World Hello, world hELLO, wORLD
```

**Searching and replacing**

```python
print(t.find("World"), t.find("xyz"), t.index("o"), t.count("l"))
print(t.replace("World", "Python"), t.replace("l", "L", 1))
print(t.startswith("Hello"), t.endswith("!"))
```

**Output**

```text
7 -1 4 3
Hello, Python HeLlo, World
True False
```

`find()` returns -1 when the text is not found. `index()` does the same job but raises a `ValueError`, which you will learn to handle in Chapter 8.

**Splitting and joining**

```python
print("a,b,c".split(","), "one two  three".split())
print("-".join(["a", "b", "c"]))
print(" ".join("a,b,c".split(",")))
```

**Output**

```text
['a', 'b', 'c'] ['one', 'two', 'three']
a-b-c
a b c
```

`split()` turns text into a list of pieces (Chapter 6 covers lists), and `join()` turns a list back into one string. Splitting with no argument splits on any run of spaces.

**Testing and padding**

```python
print("abc".isalpha(), "123".isdigit(), "ab1".isalnum(), "  ".isspace(), "abc".islower(), "ABC".isupper())
print("5".zfill(3), "ab".center(6, "*"), "ab".ljust(5, ".") + "|", "ab".rjust(5) + "|")
```

**Output**

```text
True True True True True True
005 **ab** ab...|    ab|
```

**Methods return new strings.** This is the most important point of the chapter:

```python
x = "hello"
x.upper()
print(x)
x = x.upper()
print(x)
```

**Output**

```text
hello
HELLO
```

The first `x.upper()` created `"HELLO"` and threw it away. Only the re-assignment kept it.

**Chaining.** Because each method returns a string, you can call another method on the result:

```python
email = "  Ime.Nya@Example.COM "
clean = email.strip().lower()
print(clean, clean.split("@")[0], clean.split("@")[1])
```

**Output**

```text
ime.nya@example.com ime.nya example.com
```

The `[0]` and `[1]` pick items out of the list that `split()` produced, exactly like indexing a string. You will use the same idea on lists in Chapter 6.

| Method | What it does | Example |
| --- | --- | --- |
| `strip()` | remove spaces at both ends | `" hi ".strip()` gives `hi` |
| `upper()` / `lower()` | change case | `"Hi".upper()` gives `HI` |
| `title()` | capitalise each word | `"ada lovelace".title()` gives `Ada Lovelace` |
| `find()` | position of text, or -1 | `"cat".find("a")` gives `1` |
| `replace()` | swap text for other text | `"a-b".replace("-", "")` gives `ab` |
| `split()` | break into a list | `"a,b".split(",")` gives `['a', 'b']` |
| `join()` | combine a list into text | `"-".join(["a", "b"])` gives `a-b` |
| `startswith()` / `endswith()` | test the start or end | `"cat".startswith("c")` gives `True` |
| `zfill()` | pad with zeros on the left | `"5".zfill(3)` gives `005` |

### Common mistakes in Chapter 4

| Mistake | Example | Fix |
| --- | --- | --- |
| Counting from 1 | `"Python"[1]` is `y`, not `P` | The first character is index 0 |
| Off-by-one in slices | `s[0:2]` gives 2 characters, not 3 | The stop index is excluded |
| Indexing past the end | `"abc"[5]` raises an `IndexError` | Check `len()` first, or use a slice, which never crashes |
| Trying to change a character | `s[0] = "J"` raises a `TypeError` | Build a new string: `"J" + s[1:]` |
| Calling a method and ignoring the result | `x.upper()` on its own line changes nothing | Re-assign: `x = x.upper()` |
| Joining text and numbers with `+` | `"Age: " + 31` raises a `TypeError` | Use `str(31)` or an f-string |
| Forgetting the `f` before the quotes | `"Hello {name}"` prints the braces | Write `f"Hello {name}"` |
| Backslashes in Windows paths | `"C:\new"` contains a new line | Use a raw string: `r"C:\new"` |

### Chapter 4 exercises

Try each exercise in a file or the REPL. Write your answers and observations in your own notebook.

1. Set `word = "programming"`. Print its first character, last character, the slice from index 3 up to 7, the reversed word and its length.
2. Using `word`, count how many times `"m"` appears and how many times `"g"` appears.
3. Take the messy text `"  Ime.Nya@Example.COM "`. In one chained expression, remove the outer spaces and lowercase it. Then print the part before the `@` and the part after it.
4. Convert `"ada lovelace"` to title case.
5. A palindrome reads the same backwards. Test `"racecar"` and `"python"` with a slice, and print `True` or `False` for each.
6. Turn `"2026-10-27"` into `27/10/2026` using `split()`, indexing and concatenation.
7. Remove the dashes from `"0803-123-4567"`.
8. Use f-string width settings to print a two-line aligned table with the headings `Item`, `Qty`, `Price` and one row: `Pen`, `2`, `100.00`.

### Chapter 4 quiz

Answer from memory first, then check by running code.

| # | Question | Your answer |
| --- | --- | --- |
| 1 | What is the index of the last character of any string? |  |
| 2 | In `s[2:5]`, which positions are included? |  |
| 3 | Why does `s[0] = "J"` fail? |  |
| 4 | What does `.find()` return when the text is missing? |  |
| 5 | What is the difference between `"\n"` and `r"\n"`? |  |
| 6 | Why does `x.upper()` on its own line seem to do nothing? |  |

### Chapter 4 summary

- A string is an immutable sequence of characters. Use `len()` to count them.
- Indexes start at 0 from the left and at -1 from the right. Slices use `[start:stop:step]` and exclude the stop.
- To change a string you build a new one and re-assign it.
- Prefer f-strings for building text, and use format specifiers such as `:,.2f`, `:>8` and `:03d` for alignment and number formatting.
- Escape sequences such as `\n` and `\t` start with a backslash. Raw strings (`r"..."`) switch them off.
- String methods return new strings, so re-assign the result or chain methods together.
- The cleaning pair `.strip().lower()` is the first thing to apply to almost every piece of user input.

## Chapter 4 Project: Name Badge Maker

**Goal:** build a program that takes a person's raw details and produces a centred name badge, a username, a badge ID and a few checks.

**Skills practised:** `input()`, `.strip()`, `.lower()`, `.title()`, `.split()`, indexing, slicing, `.center()`, `.zfill()`, `len()`, f-strings, string repetition and the `in` operator.

**Requirements**

1. Ask for full name, email, course and a cohort code made of digits.
2. Clean each answer: strip the spaces, lowercase the email, title-case the course.
3. Split the name into words. The first word is the first name and the last word is the last name, both title-cased.
4. Initials are the first letter of each, in uppercase.
5. The username is the first initial plus the last name, all lowercase.
6. The email domain is the text after the `@`.
7. The badge ID is the initials, a dash, and the cohort code padded with zeros to 4 digits.
8. Print a badge of width 34 using `+`, `-` and `|` characters, with the name, course and ID centred.
9. Print the username, domain, initials, name length, the first name reversed, and a validity check: the email contains `@` and the domain contains a `.`.

**Build it in steps**

1. Read and clean the four inputs.
2. Derive `first`, `last`, `initials`, `username`, `domain` and `badge_id`.
3. Print the badge border and the three centred lines.
4. Print the extra details and the email check.

**Starter code**

```python
# Name Badge Maker - Chapter 4 project
print("=== Name Badge Maker ===")

# TODO 1: read and clean the four inputs
full_name = ...
email = ...
course = ...
code = ...

# TODO 2: split the name, then build first, last, initials,
#         username, domain and badge_id

width = 34

# TODO 3: print the badge
#   border:      "+" + "-" * width + "+"
#   centred row: "|" + text.center(width) + "|"

# TODO 4: print Username, Domain, Initials, Name len, Reversed, Valid email?
```

**New tool:** `"text".center(width)` pads both sides with spaces so the text sits in the middle of the given width.

**Expected result** (typed input shown after each prompt):

```text
Full name:   ime edet nya 
Email: Ime.Nya@CryoBytePrime.com
Course: python foundations
Cohort code (digits): 7

+----------------------------------+
|             Ime Nya              |
|        Python Foundations        |
|           ID: IN-0007            |
+----------------------------------+
Username : inya
Domain   : cryobyteprime.com
Initials : IN
Name len : 12
Reversed : emI
Valid email? True
```

A second check: `chidi eze`, `chidi@mail.org`, `web basics`, `123` must give the ID `CE-0123`, the username `ceze`, the domain `mail.org` and the reversed first name `idihC`.

**Extension tasks**

1. Print the name in capitals on its own badge line, using `.upper()`.
2. Make the program work when the person types a middle name, and show the middle initial.
3. Print the email with the part before the `@` replaced by asterisks of the same length, for example `*******@cryobyteprime.com`.

**Self-check**

| Criterion | Points | Your score |
| --- | --- | --- |
| Program runs without errors | 4 |  |
| All inputs are cleaned correctly | 4 |  |
| Slicing, splitting and `.zfill()` are used correctly | 5 |  |
| Badge is aligned and exactly 36 characters wide on each row | 4 |  |
| Both test cases match the expected result | 3 |  |

A score of 16 or more out of 20 means you are ready for Chapter 5.

