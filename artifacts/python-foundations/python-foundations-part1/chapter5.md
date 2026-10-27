## Chapter 5: Control Flow

*Learning Path section 1.5.* By the end of this chapter you can make a program choose between actions and repeat work, which turns a list of instructions into real logic.

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

### Chapter 5 quiz

Answer from memory first, then check by running code.

| # | Question | Your answer |
| --- | --- | --- |
| 1 | What does the colon at the end of an `if` line do? |  |
| 2 | In an `if`/`elif`/`else` chain, how many blocks can run? |  |
| 3 | What numbers does `range(2, 10, 3)` produce? |  |
| 4 | When would you choose `while` instead of `for`? |  |
| 5 | What is the difference between `break` and `continue`? |  |
| 6 | What does `enumerate(items, start=1)` give you? |  |

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

**Expected result** (typed input shown after each prompt):

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

A second check: `ade`, then `30`, `20`, `-5`, `done` must give `Scores   : 2 valid, 1 skipped`, `Average  : 25.0`, `Passed   : 0 of 2`, `Grade    : F` and `Result   : Needs more practice`. Typing only `done` must print `No valid scores were entered.`

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

A score of 16 or more out of 20 means you are ready for Chapter 6.

