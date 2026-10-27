## Chapter 5: Control Flow

*Learning Path section 1.5.* By the end of this chapter learners can make a program choose between actions and repeat work, which turns a list of instructions into real logic.

**Suggested time:** 6 to 8 hours of guided work plus the project. This is the first chapter where learners often struggle, so split it over three sessions: 5.1 to 5.4 (decisions), 5.5 to 5.7 (loops), then 5.8 to 5.9 and the project.

### Learning objectives

- Make decisions with `if`, `elif` and `else`, including nested conditions.
- Repeat work with `for` loops, `range()` and `while` loops.
- Combine loops inside loops.
- Control a loop with `break`, `continue` and `pass`.
- Use the common loop idioms: `enumerate`, `zip`, `sorted`, `reversed`, `min`, `max` and `sum`.

### 5.1 Making decisions with `if`

Up to now every line of your programs ran, in order, every time. An `if` statement lets Python skip lines. It tests a condition (the `True` or `False` values from Chapter 3) and runs the indented block only when the condition is `True`.

```python
age = 20
if age >= 18:
    print("Adult")
print("Done")
```

**Output**

```text
Adult
Done
```

- The line ends with a colon `:`. Forgetting it is the most common error in this chapter.
- The block is indented by four spaces, exactly as you saw in Chapter 1, section 1.7. The indentation is how Python knows which lines belong to the `if`.
- `print("Done")` is not indented, so it runs every time.

**Physical analogy: the road junction.** A program is a car driving along one road. An `if` is a junction with a sign that says "if the condition is true, turn into this side road". The car drives through the side road, then rejoins the main road.

```text
            condition?
   --------> [ age >= 18 ] --- True ---> [ print("Adult") ] ---+
                  |                                            |
                False                                          |
                  |                                            v
                  +---------------------------------> [ print("Done") ]
```

**Trainer's note:** act it out. Put a chalk line on the floor and have a learner walk it. At the "junction" ask the class a question ("are you 18 or over?") and send the walker left or straight on. This takes five minutes and makes the whole chapter easier. Then link back to Chapter 1: this is the first time indentation changes what a program does, not just how it looks. Ask learners to remove the indentation on `print("Adult")` and read the `IndentationError` aloud.

### 5.2 Two ways: `if` and `else`

Add `else` for the case when the condition is `False`. Exactly one of the two blocks runs.

```python
for_age = 15
if for_age >= 18:
    print("Adult")
else:
    print("Minor")
```

**Output**

```text
Minor
```

`else` has no condition of its own. It means "in every other case".

**Trainer's note:** the variable is called `for_age` here only so that the name `age` is free for later examples. Do not draw attention to it. Ask learners to change the number and predict the output before running. Stress that `else` never has a condition. A learner who writes `else age < 18:` has not understood it yet.

### 5.3 Many ways: `elif`

Use `elif` (short for "else if") when there are more than two outcomes. Python checks from the top and runs the first block whose condition is `True`, then skips the rest.

```python
score = 72
if score >= 70:
    grade = "A"
elif score >= 60:
    grade = "B"
elif score >= 50:
    grade = "C"
else:
    grade = "F"
print(score, grade)
```

**Output**

```text
72 A
```

- The order matters. `72` is also `>= 60`, but the first matching test (`>= 70`) wins and the rest are skipped.
- You can have as many `elif` blocks as you need, but only one `if` and at most one `else`.

**Physical analogy: the sorting office.** A letter goes past a row of sorters. The first sorter whose rule matches takes it, and the letter never reaches the sorters further down.

**Truthiness in conditions.** Chapter 3 explained that every value is truthy or falsy. Here is where that pays off:

```python
name = ""
if name:
    print("Hello", name)
else:
    print("No name given")
```

**Output**

```text
No name given
```

`if name:` is the short, preferred way to say "if name is not empty".

**Trainer's note:** the best test of understanding is to reverse the order. Ask: "what grade does 72 get if we test `>= 50` first?" The answer, `C`, shocks learners and makes the rule stick. Truthiness is the payoff for Chapter 3: say so out loud ("remember the table of falsy values? This is why we learned it"). Both ideas are tested in the exercises.

### 5.4 Nested conditions and a shortcut

A decision can sit inside another decision. Each extra level is indented four more spaces.

```python
age, has_ticket = 20, True
if age >= 18:
    if has_ticket:
        print("Welcome in")
    else:
        print("Buy a ticket")
else:
    print("Too young")
```

**Output**

```text
Welcome in
```

Nesting is fine for two levels. Beyond that, combine tests with `and` and `or` instead, which keeps the code flat and readable. The nested example above is the same as `if age >= 18 and has_ticket:` with two separate messages for the failures.

**One-line choice.** When you only need to pick between two values, Python has a compact form called a conditional expression:

```python
n = 7
label = "even" if n % 2 == 0 else "odd"
print(n, label)
```

**Output**

```text
7 odd
```

Read it as: the value is `"even"` if the test is true, otherwise `"odd"`.

**Trainer's note:** the line `age, has_ticket = 20, True` assigns two variables at once, which is the multiple assignment learners met in section 2.2. Mention it only if someone asks. The conditional expression is a convenience, not a requirement. If the class is struggling, skip it now and revisit it before the Chapter 5 project, where it appears once.

### 5.5 Repeating with `for` and `range()`

A `for` loop repeats a block once for every item in a sequence. `range()` produces a sequence of numbers.

```python
for i in range(5):
    print(i, end=" ")
print()
for i in range(1, 6):
    print(i, end=" ")
print()
for i in range(10, 0, -3):
    print(i, end=" ")
print()
```

**Output**

```text
0 1 2 3 4 
1 2 3 4 5 
10 7 4 1 
```

| Call | Produces | Rule |
| --- | --- | --- |
| `range(5)` | `0 1 2 3 4` | starts at 0, stops before 5 |
| `range(1, 6)` | `1 2 3 4 5` | starts at 1, stops before 6 |
| `range(10, 0, -3)` | `10 7 4 1` | the third number is the step |

The stop value is excluded, exactly like slicing in Chapter 4.

A `for` loop also walks through the characters of a string:

```python
for ch in "Cat":
    print(ch)
```

**Output**

```text
C
a
t
```

**The accumulator pattern.** Start a variable at zero, then add to it on every lap:

```python
total = 0
for n in range(1, 6):
    total += n
print("total", total)
```

**Output**

```text
total 15
```

**Physical analogy: laps on a running track.** `range(5)` is a rule that says "run five laps". The loop variable `i` is the lap counter written on the board after each lap.

```text
   range(5) gives 0, 1, 2, 3, 4

   +--> take next value ---> run the indented block --+
   |                                                    |
   +------------- more values left? <------------------+
                      |
                  no more values
                      |
                      v
               continue after the loop
```

**Trainer's note:** loops are the biggest conceptual jump so far. Use a "human trace table": write `i` and `total` on the board, and have the class call out the new values after each lap. Do this for the accumulator example before moving on. The `end=" "` argument comes from Chapter 1, so mention that it revises a skill. Common confusion: learners expect `range(5)` to include 5. Point to the slicing rule from Chapter 4 (the stop is excluded) and let them see the link themselves. Looping over a string shows that a `for` loop is not just for numbers.

### 5.6 Repeating with `while`

A `while` loop repeats as long as its condition is `True`. Use it when you do not know in advance how many laps you need.

```python
count = 3
while count > 0:
    print(count)
    count -= 1
print("Liftoff")
```

**Output**

```text
3
2
1
Liftoff
```

- Something inside the loop must eventually make the condition `False`. Here it is `count -= 1`. If you forget it, the loop never ends (an infinite loop). Stop a runaway program with `Ctrl+C`.
- `for` is for "do this for each item". `while` is for "keep going until something changes".

**Physical analogy: stirring the sauce.** Keep stirring while the sauce is still thin. Each stir is one lap, and you stop only when the sauce thickens.

**Trainer's note:** make every learner create an infinite loop on purpose and stop it with `Ctrl+C`. It removes the fear. On a shared screen, comment out the `count -= 1` line and let it run. Many learners panic the first time it happens by accident, and a panic in week three costs more time than a planned demonstration. Remind them that in an IDE the stop button works too. The `+=` and `-=` shortcuts come from Chapter 3, section 3.4.

### 5.7 Nested loops

A loop inside a loop runs the inner loop completely for every lap of the outer loop.

```python
for row in range(1, 4):
    for col in range(1, 4):
        print(row * col, end=" ")
    print()
```

**Output**

```text
1 2 3 
2 4 6 
3 6 9 
```

The outer loop picks the row, the inner loop walks across the columns, and the bare `print()` at the end of each row starts a new line. Think of the hands of a clock: for each hour the minute hand does a full circle.

**Trainer's note:** the bare `print()` is the part learners miss. Ask: "what if I delete it?" and let them see everything run onto one line. Use a stack of three rows of seats in a cinema as the picture. The pattern of printing a grid will return in the capstone.

### 5.8 Controlling a loop: `break`, `continue`, `pass`

| Keyword | What it does |
| --- | --- |
| `break` | stops the whole loop immediately |
| `continue` | skips the rest of this lap and goes to the next one |
| `pass` | does nothing; a placeholder where a block is required |

```python
for n in range(1, 10):
    if n == 5:
        break
    print(n, end=" ")
print()
for n in range(1, 8):
    if n % 2 == 0:
        continue
    print(n, end=" ")
print()
for n in range(3):
    pass
```

**Output**

```text
1 2 3 4 
1 3 5 7 
```

The first loop stops when `n` reaches 5. The second skips every even number. The third loop runs three times and does nothing, which is useful when you are sketching a program and want to fill in the block later.

**Putting it together.** A guessing game that stops as soon as the guess is right. The list of guesses is a Chapter 6 preview; read it as "the guesses 3, 9 and 7, one after another".

```python
secret = 7
guesses = [3, 9, 7]
tries = 0
for g in guesses:
    tries += 1
    if g == secret:
        print("Correct in", tries)
        break
    elif g < secret:
        print(g, "too low")
    else:
        print(g, "too high")
```

**Output**

```text
3 too low
9 too high
Correct in 3
```

**Trainer's note:** `break` is a door out of the loop, and `continue` is a door back to the start of the next lap. Draw both on the lap diagram from 5.5. The guessing game gathers decisions, loops, counters and `break` in one short example, so run it with a different `secret` and ask learners to predict each line. The list is a deliberate preview, kept to one line of reading. Do not teach lists here. The Learning Path teaches them properly in Chapter 6, and the project below uses no lists at all.

### 5.9 Common loop idioms

These built-in helpers solve everyday jobs. They work on any group of items. Lists are a Chapter 6 preview here, so read `["Amara", "Chidi", "Ngozi"]` as "three names in a row".

```python
names = ["Amara", "Chidi", "Ngozi"]
scores = [72, 55, 90]
for i, nm in enumerate(names, start=1):
    print(i, nm)
for nm, sc in zip(names, scores):
    print(nm, sc)
print(sorted(scores), sorted(scores, reverse=True), list(reversed(names)))
print(min(scores), max(scores), sum(scores), sum(scores) / len(scores))
```

**Output**

```text
1 Amara
2 Chidi
3 Ngozi
Amara 72
Chidi 55
Ngozi 90
[55, 72, 90] [90, 72, 55] ['Ngozi', 'Chidi', 'Amara']
55 90 217 72.33333333333333
```

| Idiom | What it does |
| --- | --- |
| `enumerate(items, start=1)` | gives a counter and the item together |
| `zip(a, b)` | walks two groups side by side |
| `sorted(items)` | a new, sorted copy (`reverse=True` for largest first) |
| `reversed(items)` | the items in the opposite order |
| `min()` / `max()` | smallest and largest |
| `sum()` | the total |

So you never need to write `i = 0` and `i += 1` by hand when `enumerate` does it for you. The long decimal in the last line is the floating-point effect from Chapter 2. Use `round(value, 1)` or `{value:.1f}` when you print an average.

**Trainer's note:** this section is a tour, not a deep lesson. The Learning Path places these idioms in Chapter 5, but they work best once learners have seen lists, so plan to return to them in Chapter 6 with fresh exercises. Here, the goal is only recognition: "there is a built-in for counting, pairing, sorting and totalling." The two unpacking forms (`for i, nm in ...`) are new syntax. Read them aloud as "for each pair, call the first part i and the second part nm". `sorted()` returns a new sorted copy and does not change the original, which echoes the string-method rule from Chapter 4: results must be used or stored.

### Common mistakes in Chapter 5

| Mistake | Example | Fix |
| --- | --- | --- |
| Forgetting the colon | `if age >= 18` | End the line with `:` |
| Wrong or missing indentation | the body is not indented, or lines are mixed with tabs | Indent every block by four spaces |
| Using `=` instead of `==` in a condition | `if age = 18:` is a `SyntaxError` | Use `==` to compare |
| Wrong order of `elif` tests | testing `>= 50` before `>= 70` | Put the strictest test first |
| Off-by-one with `range()` | `range(5)` stops at 4 | The stop value is excluded |
| Infinite `while` loop | forgetting `count -= 1` | Make sure the condition can become `False`, and use `Ctrl+C` to stop |
| Changing the loop variable and expecting it to affect the loop | `for i in range(3): i = 10` | The next lap overwrites `i` |
| Comparing text from `input()` with a number | `if age > 18:` when `age` is text | Convert first with `int()` or `float()` |
| Putting `print()` at the wrong indent | the total prints inside the loop | Unindent to print once after the loop |

**Trainer's note:** indentation errors are the most common stoppers in this chapter. Tell learners to configure the editor to show whitespace, and to use the Tab key (which inserts four spaces) and never mix tabs with spaces. When you review code, read the error message aloud first and let the learner find the line.

### Chapter 5 exercises

Try each exercise in a file or the REPL. Write your answers and observations in your own notebook.

1. Set `n = 7`. Use `if` and `else` to print `7 is odd` or `7 is even`. Then change `n` to 10 and check.
2. For each score in `(85, 65, 45)`, print the score and its grade: 70 or more is `A`, 60 or more is `B`, anything else is `F`.
3. Use a `for` loop and `range()` to print the numbers 1 to 10 on one line.
4. Use a `for` loop to add up the even numbers from 2 to 20, and print the total.
5. Use a `while` loop to count down from 5 to 1, then print `Go!`.
6. Print the first five lines of the 7 times table in the form `7 x 1 = 7`.
7. Write FizzBuzz for 1 to 15: print `Fizz` for multiples of 3, `Buzz` for multiples of 5, `FizzBuzz` for both, and the number otherwise.
8. Use `break` to find and print the first number from 1 to 49 that is a multiple of both 4 and 6.
9. Given `scores = [72, 55, 90]`, use `enumerate` and `sorted` to print a ranking from highest to lowest, in the form `1 90`.

**Solutions** (every solution was run on Python 3.13)

```python
# 1  prints: 7 is odd
n = 7
if n % 2 == 0:
    print(n, "is even")
else:
    print(n, "is odd")

# 2  prints: 85 A / 65 B / 45 F (one per line)
for score in (85, 65, 45):
    if score >= 70:
        grade = "A"
    elif score >= 60:
        grade = "B"
    else:
        grade = "F"
    print(score, grade)

# 3  prints: 1 2 3 4 5 6 7 8 9 10
for i in range(1, 11):
    print(i, end=" ")
print()

# 4  prints: 110
total = 0
for i in range(2, 21, 2):
    total += i
print(total)

# 5  prints: 5 4 3 2 1 Go!
count = 5
while count >= 1:
    print(count, end=" ")
    count -= 1
print("Go!")

# 6  prints: 7 x 1 = 7 ... 7 x 5 = 35
for i in range(1, 6):
    print(f"7 x {i} = {7 * i}")

# 7  FizzBuzz: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

# 8  prints: First: 12
for n in range(1, 50):
    if n % 4 == 0 and n % 6 == 0:
        print("First:", n)
        break

# 9  prints: 1 90 / 2 72 / 3 55
scores = [72, 55, 90]
for rank, sc in enumerate(sorted(scores, reverse=True), start=1):
    print(rank, sc)
```

**Marking guide**

- Exercise 4: accept `sum(range(2, 21, 2))` as a correct alternative, and then show the long form, because the accumulator pattern is the skill being tested.
- Exercise 5: a learner who writes `while count > 1` stops at 2. Ask them to trace the last lap.
- Exercise 7: the `FizzBuzz` test must come first. If it comes last, `15` prints `Fizz`. This is the same "order of `elif`" lesson as 5.3. An alternative that tests `i % 3 == 0 and i % 5 == 0` first is also correct.
- Exercise 8: the answer is `12`, the lowest common multiple of 4 and 6. Ask whether the loop keeps running after the answer, and let learners see why `break` matters.
- Exercise 9: `enumerate` over `sorted(...)` is the preview of idioms working together. Accept a hand-written counter, and then show the `enumerate` version.

### Chapter 5 quiz

Answer from memory first, then check by running code.

| # | Question | Model answer |
| --- | --- | --- |
| 1 | What does the colon at the end of an `if` line do? | It marks the end of the condition and tells Python an indented block follows. |
| 2 | In an `if`/`elif`/`else` chain, how many blocks can run? | At most one: the first whose condition is true, or the `else` if none is. |
| 3 | What numbers does `range(2, 10, 3)` produce? | `2, 5, 8`. It starts at 2, steps by 3 and stops before 10. |
| 4 | When would you choose `while` instead of `for`? | When you do not know in advance how many laps are needed, and want to repeat until a condition changes. |
| 5 | What is the difference between `break` and `continue`? | `break` leaves the whole loop. `continue` skips the rest of the current lap and moves to the next. |
| 6 | What does `enumerate(items, start=1)` give you? | Each item together with a counter that starts at 1. |

### Chapter 5 summary

- `if`, `elif` and `else` choose which block runs. Only the first matching block runs, so order your tests carefully.
- Every block starts after a colon and is indented by four spaces.
- Any value can be a condition. Empty text, `0` and `None` count as false.
- `for` repeats once per item, and `range(start, stop, step)` makes counting sequences. The stop is excluded.
- `while` repeats until its condition becomes false. Something inside must change the condition.
- Loops can be nested. The inner loop runs completely for each lap of the outer loop.
- `break` leaves a loop, `continue` skips to the next lap and `pass` does nothing.
- `enumerate`, `zip`, `sorted`, `reversed`, `min`, `max` and `sum` replace many hand-written counters.

## Chapter 5 Project: Score Analyser

**Goal:** build a program that collects test scores from a user, ignores bad entries, and prints a summary with an overall grade.

**Skills practised:** `while` loops, `break`, `continue`, `if`/`elif`/`else`, the accumulator pattern, tracking highest and lowest values, `None`, string methods and f-string formatting.

**Requirements**

1. Ask for the student name and clean it with `.strip().title()`.
2. Repeat asking for a score, numbering the prompts (`Score 1:`, `Score 2:` and so on), until the user types `done`.
3. Skip any entry that is not a number, and any number above 100. Print a short message and count it as skipped.
4. For each valid score, add it to the total, update the highest and lowest scores, and count it as a pass when it is 50 or more.
5. After the loop, if there are no valid scores print `No valid scores were entered.`
6. Otherwise calculate the average and a grade: 70 or more is `A`, 60 or more is `B`, 50 or more is `C`, otherwise `F`.
7. Print the report shown below. Use a conditional expression for the final result line.

**Build it in steps**

1. Create the counters before the loop: `count`, `total`, `highest`, `lowest`, `passed` and `skipped`.
2. Write the `while True:` loop with the `done` check and `break`.
3. Add the validation with `continue`.
4. Update the totals, then print the report after the loop.

**Starter code**

```python
# Score Analyser - Chapter 5 project
print("=== Score Analyser ===")
student = ...
print("Enter scores from 0 to 100. Type done to finish.")

count = 0
total = 0.0
highest = None
lowest = None
passed = 0
skipped = 0

while True:
    entry = ...          # TODO 1: read, strip and lowercase
    # TODO 2: stop when entry is "done"
    # TODO 3: skip entries that are not numbers (see the tool below)
    # TODO 4: convert to float; skip anything above 100
    # TODO 5: update count, total, highest, lowest, passed

# TODO 6: print the report (see Expected result)
```

**New tool:** to check that text is a number without crashing, use `entry.replace(".", "", 1).isdigit()`. It allows one decimal point and rejects letters and negative signs. Proper error handling with `try` and `except` comes in Chapter 8.

**Reference solution** (run and checked on Python 3.13)

```python
# Score Analyser - Chapter 5 project
print("=== Score Analyser ===")
student = input("Student name: ").strip().title()
print("Enter scores from 0 to 100. Type done to finish.")

count = 0
total = 0.0
highest = None
lowest = None
passed = 0
skipped = 0

while True:
    entry = input(f"Score {count + 1}: ").strip().lower()
    if entry == "done":
        break
    if not entry.replace(".", "", 1).isdigit():
        print("  Not a number, skipped.")
        skipped += 1
        continue
    score = float(entry)
    if score > 100:
        print("  Must be 0 to 100, skipped.")
        skipped += 1
        continue
    count += 1
    total += score
    if highest is None or score > highest:
        highest = score
    if lowest is None or score < lowest:
        lowest = score
    if score >= 50:
        passed += 1

print()
if count == 0:
    print("No valid scores were entered.")
else:
    average = total / count
    if average >= 70:
        grade = "A"
    elif average >= 60:
        grade = "B"
    elif average >= 50:
        grade = "C"
    else:
        grade = "F"
    print(f"Student  : {student}")
    print(f"Scores   : {count} valid, {skipped} skipped")
    print(f"Total    : {total:,.1f}")
    print(f"Average  : {average:.1f}")
    print(f"Highest  : {highest}")
    print(f"Lowest   : {lowest}")
    print(f"Passed   : {passed} of {count}")
    print(f"Grade    : {grade}")
    print("Result   :", "Well done!" if grade != "F" else "Needs more practice")
```

**Expected result** (the learner's typed input shown after each prompt):

```text
Student name: ngozi bello
Enter scores from 0 to 100. Type done to finish.
Score 1: 72
Score 2: 55
Score 3: abc
  Not a number, skipped.
Score 3: 90
Score 4: 150
  Must be 0 to 100, skipped.
Score 4: 40.5
Score 5: done

Student  : Ngozi Bello
Scores   : 4 valid, 2 skipped
Total    : 257.5
Average  : 64.4
Highest  : 90.0
Lowest   : 40.5
Passed   : 3 of 4
Grade    : B
Result   : Well done!
```

**Test cases**

| Input (after the name) | Valid | Skipped | Average | Passed | Grade |
| --- | --- | --- | --- | --- | --- |
| `72, 55, abc, 90, 150, 40.5, done` | 4 | 2 | 64.4 | 3 of 4 | B |
| `30, 20, -5, done` | 2 | 1 | 25.0 | 0 of 2 | F |
| `done` only | 0 | 0 | none | none | message `No valid scores were entered.` |

**Trainer's note:** what to watch for.

- The prompt numbers do not advance on a skipped entry (`Score 3:` appears twice in the expected result). This is deliberate: the number shows how many valid scores have been counted. Tell learners it is not a bug.
- `highest = None` is the Chapter 2 "empty box" again. The test `highest is None or score > highest` uses short-circuiting from Chapter 3: when `highest` is `None` the right side is never evaluated, so there is no `TypeError`. This is a strong moment to say "you now understand why this line is safe."
- Learners who initialise `highest = 0` get the right answer for positive scores but a wrong `lowest` if they do the same. Use that as a discussion point about why `None` is better as a starting value.
- `-5` is skipped with the message `Not a number`, because `isdigit()` rejects the minus sign. This is acceptable for the project. If a learner asks, say proper validation arrives with `try` and `except` in Chapter 8.
- Forgetting `continue` after a skip means the invalid entry continues to the `float()` line and crashes. Ask the learner to read the traceback.
- The report prints `Highest  : 90.0` as a float. This is expected, because `float(entry)` was used.

**Extension tasks**

1. Print how many scores fell into each grade band, using a counter for each band.
2. Stop automatically after 10 valid scores, even if the user has not typed `done`.
3. Print the range (highest minus lowest) and say whether the scores are `consistent` (range under 20) or `varied`.

**Self-check**

| Criterion | Points | Your score |
| --- | --- | --- |
| Program runs without errors and ends on `done` | 4 |  |
| Bad entries are skipped with a message and counted | 4 |  |
| Total, highest, lowest and passed are updated correctly | 5 |  |
| Average, grade and result line are correct for both test cases | 4 |  |
| The no-valid-scores case is handled | 3 |  |

A score of 16 or more out of 20 means the learner is ready for Chapter 6.

## Chapter 6: Core Collections (Part 1: Lists and Tuples)

*Learning Path section 1.6.* Chapter 6 is long, so it is taught in two parts. This part covers lists and tuples. Part 2 will cover sets, dictionaries, mutable versus immutable types, aliasing and copying. By the end of this part learners can store many values under one name, change them, loop through them and sort them.

**Suggested time:** 7 to 9 hours of guided work plus the project. Plan three sessions: 6.1 to 6.3, then 6.4 and 6.5, then 6.6 to 6.8 and the project.

### Learning objectives

- Create lists and access items by index and slice.
- Change, add and remove list items.
- Loop through lists and use the list methods.
- Sort lists, and explain the difference between `sort()` and `sorted()`.
- Create tuples and explain how they differ from lists.
- Unpack tuples and lists into separate variables.

### 6.1 Why collections?

So far each variable held one value. Real programs hold many: the prices in a basket, the names in a class, the scores in a test. A collection stores many values under one name.

**Physical analogies**

| Collection | Picture | What it means |
| --- | --- | --- |
| List | A shopping list on paper with numbered lines | You can cross out, add, rewrite and reorder items |
| Tuple | A row of lockers that have been locked with a padlock | You can look inside and count them, but you cannot change them |

**Where the analogy bends:** a paper list has line numbers that start at 1. A Python list starts counting at 0, as you saw with strings in Chapter 4.

**Trainer's note:** bring a real shopping list and a padlock if you can. Ask each learner to write three items on a slip of paper, then call out "cross out the second item" to introduce index thinking. The Learning Path says Chapter 6 is where learners meet the first real data structures, so spend the first ten minutes on the question "which of these would you keep as one value, and which as a group?" using their own examples (class register, phone contacts, cinema seats).

### 6.2 Creating and accessing lists

A list is written with square brackets and commas. It can hold any mix of types, and it can be empty.

```python
fruits = ["apple", "banana", "cherry"]
mixed = [1, "two", 3.0, True]
empty = []
print(fruits, mixed, empty)
```

**Output**

```text
['apple', 'banana', 'cherry'] [1, 'two', 3.0, True] []
```

A list is a row of numbered boxes, just like the string diagram in Chapter 4, but each box can hold any value:

```text
  index     0         1          2
          +-------+----------+----------+
 fruits   | apple |  banana  |  cherry  |
          +-------+----------+----------+
  index    -3        -2         -1
```

Indexing, slicing, `len()` and `in` work exactly as they did for strings:

```python
print(len(fruits), fruits[0], fruits[-1], fruits[1:], fruits[::-1])
print("banana" in fruits, "grape" in fruits)
```

**Output**

```text
3 apple cherry ['banana', 'cherry'] ['cherry', 'banana', 'apple']
True False
```

Other ways to make a list, and ways to combine them:

```python
print(list("abc"), list(range(4)), "a,b,c".split(","))
print([1, 2] + [3], [0] * 3)
nested = [[1, 2], [3, 4]]
print(nested[1][0])
```

**Output**

```text
['a', 'b', 'c'] [0, 1, 2, 3] ['a', 'b', 'c']
[1, 2, 3] [0, 0, 0]
3
```

- `list(...)` converts a string or a `range()` into a list. `split()` from Chapter 4 also returns a list.
- `+` joins two lists and `*` repeats a list, as they did for strings.
- A list can hold other lists. `nested[1][0]` means "box 1, then box 0 inside it".

An index beyond the end is an error, just like with strings:

```python
print(fruits[5])
```

**Output**

```text
IndexError: list index out of range
```

**Trainer's note:** this section is mostly revision, because it reuses string indexing from Chapter 4. Let learners discover that for themselves: ask "what do you expect `fruits[1:]` to give?" before showing it. Nested lists are included for recognition only. Do not go deeper than one example. The `IndexError` is shown as output only (without `try` and `except`), because error handling is taught in Chapter 8. Let learners trigger the error themselves so they learn to read the message.

### 6.3 Changing, adding and removing items

Unlike strings, lists can be changed in place. This is called being mutable.

```python
nums = [10, 20, 30]
nums[1] = 25
print(nums)
nums.append(40)
print(nums)
nums.insert(0, 5)
print(nums)
nums.extend([50, 60])
print(nums)
```

**Output**

```text
[10, 25, 30]
[10, 25, 30, 40]
[5, 10, 25, 30, 40]
[5, 10, 25, 30, 40, 50, 60]
```

```python
nums.remove(25)
print(nums)
last = nums.pop()
print(last, nums)
first = nums.pop(0)
print(first, nums)
del nums[1]
print(nums)
nums.clear()
print(nums)
```

**Output**

```text
[5, 10, 30, 40, 50, 60]
60 [5, 10, 30, 40, 50]
5 [10, 30, 40, 50]
[10, 40, 50]
[]
```

| Action | Code | Notes |
| --- | --- | --- |
| Replace an item | `nums[1] = 25` | the index must already exist |
| Add to the end | `nums.append(40)` | adds one item |
| Add at a position | `nums.insert(0, 5)` | pushes the others along |
| Add many items | `nums.extend([50, 60])` | adds each item of the other list |
| Remove by value | `nums.remove(25)` | removes the first match |
| Remove by position | `nums.pop(0)` or `del nums[1]` | `pop()` with no number takes the last item and gives it back |
| Empty the list | `nums.clear()` | the list still exists, with nothing in it |

**`append` versus `extend`.** This pair confuses nearly everyone at first:

```python
a = [1, 2]
a.append([3, 4])
print(a)
b = [1, 2]
b.extend([3, 4])
print(b)
```

**Output**

```text
[1, 2, [3, 4]]
[1, 2, 3, 4]
```

`append` adds its argument as a single item (here a whole list). `extend` adds each item of its argument one by one.

**Important:** these methods change the list itself and return nothing useful. Do not write `nums = nums.append(4)`, because `append` returns `None` and your list would be lost.

**Trainer's note:** this is the section where the mutable/immutable contrast from Chapter 4 becomes visible, and you promised it in section 4.3. Say it directly: "strings could not change, lists can." Run the first block line by line and ask learners to predict each printed list. The `append` versus `extend` pair deserves its own two-minute exercise on the whiteboard, drawing a box inside a box. The warning about `nums = nums.append(4)` connects with Chapter 4's "methods return new strings", but with a twist: list methods change the original and return `None`. Return to this twist in 6.5.

### 6.4 Looping through lists

A `for` loop visits each item. The three patterns below are the ones you will use most.

```python
for f in fruits:
    print(f)
for i, f in enumerate(fruits, start=1):
    print(i, f)
for i in range(len(fruits)):
    print(i, fruits[i])
```

**Output**

```text
apple
banana
cherry
1 apple
2 banana
3 cherry
0 apple
1 banana
2 cherry
```

| Pattern | Use it when |
| --- | --- |
| `for f in fruits:` | you only need the items |
| `for i, f in enumerate(fruits, start=1):` | you need a counter as well |
| `for i in range(len(fruits)):` | you need to change items by position |

The accumulator pattern from Chapter 5 works on lists, and so do the built-ins:

```python
prices = [120.5, 80, 45.25]
total = 0
for p in prices:
    total += p
print(total, sum(prices), max(prices), min(prices))
```

**Output**

```text
245.75 245.75 120.5 45.25
```

**Trainer's note:** this section closes the loop on Chapter 5. Learners used `enumerate` and `zip` on lists as a preview, and now they know what a list is. Say so. Encourage the first pattern as the default and the third only when changing items. Point out that learners must not add or remove items from a list while looping over it, because the loop skips items. Show it once with a short example, then say "build a new list instead."

### 6.5 List methods and sorting

```python
data = [3, 1, 2, 3]
print(data.count(3), data.index(2))
data.sort()
print(data)
data.sort(reverse=True)
print(data)
data.reverse()
print(data)
```

**Output**

```text
2 2
[1, 2, 3, 3]
[3, 3, 2, 1]
[1, 2, 3, 3]
```

| Method | What it does |
| --- | --- |
| `count(x)` | how many times `x` appears |
| `index(x)` | the position of the first `x` (an error if it is missing) |
| `sort()` | sorts the list itself, smallest first |
| `sort(reverse=True)` | sorts the list itself, largest first |
| `reverse()` | flips the order of the list itself |

**`sort()` versus `sorted()`.** `sort()` changes the list and returns `None`. `sorted()` leaves the list alone and gives you a new sorted copy.

```python
words = ["banana", "apple", "Cherry"]
print(sorted(words), sorted(words, key=str.lower), sorted(["kiwi", "banana", "fig"], key=len))
print(words)
x = [3, 1, 2]
print(x.sort())
print(x)
```

**Output**

```text
['Cherry', 'apple', 'banana'] ['apple', 'banana', 'Cherry'] ['fig', 'kiwi', 'banana']
['banana', 'apple', 'Cherry']
None
[1, 2, 3]
```

- By default, uppercase letters sort before lowercase ones, so `Cherry` comes first.
- The `key=` option tells Python what to compare. `key=str.lower` compares the lowercase versions, and `key=len` compares the lengths. You are passing a rule, not calling it, so there are no brackets after `str.lower`. Chapter 7 explains this properly.
- `print(x.sort())` shows `None`, which is the most common sorting mistake: `x = x.sort()` throws your list away.

**Trainer's note:** `key=` is a forward reference to functions (Chapter 7), so teach it as a recipe: "to sort without caring about capitals, write `key=str.lower`." Do not explain function objects now. The `None` output deserves a pause. Ask the class why a method that changes the list in place has nothing to return, and give the answer "it did its job on the list itself." Link back to Chapter 4: string methods return a new string, but `sort()` returns nothing, and `sorted()` is the version that behaves like a string method.

### 6.6 Creating and accessing tuples

A tuple is written with round brackets. It is read like a list (indexing, slicing, `len()`, `in`, `+`, `*`) but it cannot be changed.

```python
point = (3, 4)
single = (5,)
not_tuple = (5)
print(point, single, type(single), type(not_tuple))
print(point[0], point[-1], len(point), point + (5,), point * 2)
rgb = 255, 128, 0
print(rgb, type(rgb))
```

**Output**

```text
(3, 4) (5,) <class 'tuple'> <class 'int'>
3 4 2 (3, 4, 5) (3, 4, 3, 4)
(255, 128, 0) <class 'tuple'>
```

- A tuple with one item needs a trailing comma: `(5,)`. Without it, `(5)` is just the number 5 in brackets.
- The commas make the tuple, not the brackets. `rgb = 255, 128, 0` is a tuple.

Trying to change a tuple is an error:

```python
point[0] = 9
```

**Output**

```text
TypeError: 'tuple' object does not support item assignment
```

The error is the point. A tuple tells every reader of your code "this group of values stays fixed". Use a tuple for things like coordinates, colours, dates and (name, price) pairs. Use a list for a group that will grow, shrink or be re-ordered.

**Trainer's note:** learners nearly always ask "why have tuples if lists can do everything?" Answer with the padlock: a tuple is a promise to the reader that the data will not change, and it can be used where fixed values are needed (later, as dictionary keys). The Chapter 2 flag from section 2.5 about "mutable and immutable types" is picked up in Part 2. For now, the one-item trailing comma is the main trap: set a short quiz question for it.

### 6.7 Unpacking

Unpacking copies the items of a tuple (or list) into separate variables in one line. The number of variables must match the number of items.

```python
x, y = point
print(x, y)
name, age, city = ("Amara", 25, "Aba")
print(name, age, city)
a, b = 1, 2
a, b = b, a
print(a, b)
```

**Output**

```text
3 4
Amara 25 Aba
2 1
```

The line `a, b = b, a` swaps two variables without a spare. It is the same idea as multiple assignment from Chapter 2, section 2.2.

A star `*` collects "all the rest":

```python
first, *rest = [10, 20, 30, 40]
print(first, rest)
*init, last = [10, 20, 30, 40]
print(init, last)
first, *middle, last = [1, 2, 3, 4, 5]
print(first, middle, last)
```

**Output**

```text
10 [20, 30, 40]
[10, 20, 30] 40
1 [2, 3, 4] 5
```

Unpacking also works directly in a `for` loop. You already used this in Chapter 5 with `enumerate`:

```python
for i, (n, p) in enumerate([("pen", 100), ("book", 450)], start=1):
    print(i, n, p)
```

**Output**

```text
1 pen 100
2 book 450
```

Read it as: for each counter `i` and each pair, call the pair's two parts `n` and `p`.

**Trainer's note:** this is where the unpacking you waved through in Chapter 5 (`for i, nm in enumerate(...)`) and the `a, b = b, a` swap finally get explained, so say so. The nested form `for i, (n, p) in ...` is the most demanding line of the chapter. Break it in two on the board: first `for i, pair in enumerate(...)`, then unpack `pair`. Do not expect every learner to produce it unaided. The project uses it, and the starter code gives them the shape.

### 6.8 Tuple methods and converting

Because tuples cannot change, they have only two methods:

```python
t = (1, 2, 2, 3)
print(t.count(2), t.index(3))
print(list(t), tuple([1, 2]), sorted((3, 1, 2)))
```

**Output**

```text
2 3
[1, 2, 2, 3] (1, 2) [1, 2, 3]
```

- `count()` and `index()` behave as they do for lists.
- `list(t)` and `tuple(...)` convert one into the other. `sorted()` works on a tuple but always returns a list.

**Putting strings and lists together.** The `split()` and `join()` pair from Chapter 4 now makes full sense:

```python
parts = "2026-10-27".split("-")
print(parts, "/".join(reversed(parts)))
```

**Output**

```text
['2026', '10', '27'] 27/10/2026
```

**Preview:** lists can change in place, which has a surprising side effect: two names can point at the same list. Part 2 of this chapter explains aliasing and copying. Until then, treat each list as owned by one name.

**Trainer's note:** the date example is the Chapter 4 exercise 6 done in one line, which shows learners how far they have come. Keep the aliasing preview short and do not demonstrate it now. A single mention of the idea in 3.7 (`c = a`) already planted it. If a learner asks about it, say "great question, that is the first topic of Part 2."

