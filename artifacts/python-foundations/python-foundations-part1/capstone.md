## Checkpoint project: Student Profile Card

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
Age type   : <class 'int'>
```

A second check: `Chidi Eze`, `31`, `1.8` and `no` should show `Height     : 1.80 m`, `Student    : False` and `Age        : 31 (next year: 32)`.

**Extension tasks**

1. Add a city field and print it on the card.
2. Print the height in centimetres as a whole number.
3. Add a line showing the year the person was born (use a fixed current year for now).

