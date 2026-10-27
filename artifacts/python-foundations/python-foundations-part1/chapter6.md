## Chapter 6: Core Collections (Part 1: Lists and Tuples)

*Learning Path section 1.6.* Chapter 6 is long, so it is taught in two parts. This part covers lists and tuples. Part 2 will cover sets, dictionaries, mutable versus immutable types, aliasing and copying. By the end of this part you can store many values under one name, change them, loop through them and sort them.

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

### Common mistakes in Chapter 6 (Part 1)

| Mistake | Example | Fix |
| --- | --- | --- |
| Index beyond the end | `fruits[5]` on a 3-item list raises `IndexError` | The last index is `len(items) - 1`, or use `-1` |
| Saving the result of `sort()` or `append()` | `x = x.sort()` makes `x` equal to `None` | Call the method on its own line |
| Mixing up `append` and `extend` | `a.append([3, 4])` adds a list inside the list | Use `extend` to add each item |
| Removing an item that is not there | `remove("grape")` raises `ValueError` | Check with `in` first |
| Changing a list while looping over it | removing items inside `for item in items:` | Loop over a copy, or build a new list |
| Forgetting the comma in a one-item tuple | `(5)` is the number 5 | Write `(5,)` |
| Trying to change a tuple | `point[0] = 9` raises `TypeError` | Build a new tuple, or use a list |
| Wrong number of variables when unpacking | `a, b = (1, 2, 3)` raises `ValueError` | Match the count, or collect the rest with `*` |

### Chapter 6 (Part 1) exercises

Try each exercise in a file or the REPL. Write your answers and observations in your own notebook.

1. Create `numbers = [4, 8, 15, 16, 23]`. Print the first item, the last item, the slice from index 1 up to 4, and the length.
2. Start with `colors = ["red", "green"]`. Add `"blue"` at the end, add `"yellow"` at the start, remove `"green"`, then print the list.
3. With `prices = [120.5, 80, 45.25]`, use a loop to find the total, then print the average rounded to 2 decimal places.
4. Use `enumerate` to print `names = ["Amara", "Chidi", "Ngozi"]` as a numbered list starting at 1, in the form `1. Amara`.
5. Print `[5, 2, 9, 1]` sorted from smallest and from largest using `sorted()`, and show that the original list is unchanged. Then sort the list in place.
6. Sort `["banana", "apple", "Cherry"]` so that the capital letter does not change the order.
7. Unpack the tuple `(3, 4)` into `x` and `y`, print `x * y`, then swap two variables with one line.
8. Use a starred variable to split `[10, 20, 30, 40]` into the first item and the rest.
9. Turn `"ada,grace,alan"` into a list, sort it, and print the names joined with `" | "`.

### Chapter 6 (Part 1) quiz

Answer from memory first, then check by running code.

| # | Question | Your answer |
| --- | --- | --- |
| 1 | What is the difference between `append()` and `extend()`? |  |
| 2 | What does `x = x.sort()` do to `x`? |  |
| 3 | Why does `(5)` not make a tuple, and what does? |  |
| 4 | When would you choose a tuple instead of a list? |  |
| 5 | What is the difference between `sort()` and `sorted()`? |  |
| 6 | What does `first, *rest = [1, 2, 3]` store in `rest`? |  |

### Chapter 6 (Part 1) summary

- A list is an ordered, changeable collection written with square brackets. Indexing, slicing, `len()` and `in` work as they do for strings.
- Lists change in place: assign to an index, or use `append`, `insert`, `extend`, `remove`, `pop`, `del` and `clear`.
- Loop with `for item in items`, with `enumerate` when you need a counter, and with `range(len(items))` when you need positions.
- `sort()` changes the list and returns `None`. `sorted()` returns a new list. `key=` chooses what to compare.
- A tuple is an ordered collection that cannot be changed. A one-item tuple needs a trailing comma.
- Unpacking copies items into variables, and `*` collects the rest.
- Choose a list for a group that changes, and a tuple for a fixed group, such as a coordinate or a (name, price) pair.

## Chapter 6 Project A: Shopping List Manager

**Goal:** build a menu-driven program that keeps a basket of items. Each item is a (name, price) tuple stored in a list.

**Skills practised:** lists, tuples, tuple unpacking, `append`, `pop`, `sorted`, `enumerate`, loops with `break` and `continue`, `if`/`elif`/`else`, `sum`, `min`, `max`, `input()` and f-string alignment.

*Project B, at the end of Part 2, will extend this idea with sets and dictionaries.*

**Requirements**

1. Print a title and the list of commands: `add`, `remove`, `show`, `total`, `quit`.
2. Keep a list called `basket`. Each item in it is a tuple `(name, price)`.
3. Repeat: read a command with `.strip().lower()`, and act on it until the user types `quit`.
4. `add` asks for a name (title-cased) and a price. If the name is empty or the price is not a number, print `Invalid name or price, nothing added.` and go back to the command prompt. Otherwise append the tuple and print how many items are in the basket.
5. `remove` asks for a name. Search the basket for it. If found, remove that item and print its name and price. If not, print `<Name> is not in the basket.`
6. `show` prints the basket sorted by name, numbered from 1, with the name left-aligned in 12 characters and the price right-aligned in 10 with commas and 2 decimals. If the basket is empty, print `The basket is empty.`
7. `total` prints the item count, total, cheapest and dearest prices. If the basket is empty, print the same empty message.
8. Any other command prints `Unknown command. Use add, remove, show, total or quit.`
9. When the user quits, print `Goodbye! You finished with N item(s).`

**Build it in steps**

1. The empty `basket`, the `while True:` loop and the `quit` command.
2. `add` with its validation.
3. `show`, using `sorted()` and `enumerate`.
4. `total`, using a loop to collect the prices into a list.
5. `remove`, using a loop to find the position, then `pop`.
6. The unknown-command message.

**Starter code**

```python
# Shopping List Manager - Chapter 6 (part 1) project
print("=== Shopping List Manager ===")
print("Commands: add, remove, show, total, quit")

basket = []          # a list of (name, price) tuples

while True:
    command = ...    # TODO 1: read, strip and lowercase

    if command == "quit":
        break

    elif command == "add":
        pass         # TODO 2: read name and price, validate, append a tuple

    elif command == "remove":
        pass         # TODO 3: find the position of the name, then pop it

    elif command == "show":
        pass         # TODO 4: sorted(basket) with enumerate

    elif command == "total":
        pass         # TODO 5: collect prices in a list, then sum, min, max

    else:
        pass         # TODO 6: unknown command message

print()
print(f"Goodbye! You finished with {len(basket)} item(s).")
```

**New tools**

- `for i, (item_name, item_price) in enumerate(basket):` walks the basket with a position and unpacks each tuple.
- `sorted(basket)` sorts a list of tuples by their first part, which is the name.
- `f"{item_name:<12}{item_price:>10,.2f}"` aligns a name on the left and a price on the right.

**Expected result** (typed input shown after each prompt):

```text
=== Shopping List Manager ===
Commands: add, remove, show, total, quit
> show
  The basket is empty.
> add
  Item name: rice
  Price: 1500
  Added Rice. Items in basket: 1
> add
  Item name: beans
  Price: 950.5
  Added Beans. Items in basket: 2
> add
  Item name: apple
  Price: abc
  Invalid name or price, nothing added.
> add
  Item name: milk
  Price: 620
  Added Milk. Items in basket: 3
> show
  1. Beans           950.50
  2. Milk            620.00
  3. Rice          1,500.00
> total
  Items    : 3
  Total    : 3,070.50
  Cheapest : 620.00
  Dearest  : 1,500.00
> remove
  Item to remove: beans
  Removed Beans (950.50)
> remove
  Item to remove: yam
  Yam is not in the basket.
> show
  1. Milk            620.00
  2. Rice          1,500.00
> fly
  Unknown command. Use add, remove, show, total or quit.
> quit

Goodbye! You finished with 2 item(s).
```

**Extension tasks**

1. Add a `clear` command that empties the basket after asking `Are you sure? (yes/no)`.
2. Add a `cheap` command that prints only the items under a price the user types.
3. Add a quantity to each item, so every entry becomes a three-part tuple `(name, price, quantity)`, and make `total` multiply the two.

**Self-check**

| Criterion | Points | Your score |
| --- | --- | --- |
| Program runs without errors and ends on `quit` | 4 |  |
| `add` validates input and stores (name, price) tuples | 4 |  |
| `show` is sorted, numbered and aligned | 4 |  |
| `total` and `remove` work, including the empty and not-found cases | 5 |  |
| The unknown command and goodbye message are correct | 3 |  |

A score of 16 or more out of 20 means you are ready for Chapter 6, Part 2.

