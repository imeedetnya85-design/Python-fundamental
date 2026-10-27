# Python Foundations

## Instructor Edition · Part 1: Chapters 1–5

Prepared by Ime Edet Nya · CRYOBYTEPRIME · Version 1.3

## Read this first

**Instructor Edition: do not hand this to trainees.** It contains everything in the Trainee Edition plus trainer's notes, exercise solutions, quiz answers, starter code and reference solutions for every project, and a review checklist. The version to hand out is [Python Foundations: Trainee Edition](https://claude.ai/artifact/6kSjkGPHE8hG2SsGrggHMc).

### Where to find the answers

| Material | Where in this edition |
| --- | --- |
| Trainer's notes | Marked **Trainer's note** inside the chapters |
| Chapter 1 exercise solutions | Directly under the Chapter 1 exercises |
| Chapter 1 quiz and Kitchen Analogy answers | The Chapter 1 quick quiz table, and the check under 1.2.1 |
| Chapter 1 project (Business Card) reference solution | Chapter 1 project, under Reference solution |
| Chapter 2 exercise solutions | Directly under the Chapter 2 exercises |
| Chapter 2 quiz and Storage Box Analogy answers | The Chapter 2 quick quiz table, and the check under 2.1.1 |
| Chapter 2 Project A and Project B reference solutions, and Project B understanding-check answers | Chapter 2 projects |
| Checkpoint project solution | Checkpoint project section |
| Chapter 5 exercise solutions, quiz answers and project reference solution | Under the Chapter 5 exercises, the Chapter 5 quiz table, and the Chapter 5 project |
| Chapter 3 exercise solutions, quiz answers and project reference solution | Under the Chapter 3 exercises, the Chapter 3 quiz table, and the Chapter 3 project |
| Chapter 4 exercise solutions, quiz answers and project reference solution | Under the Chapter 4 exercises, the Chapter 4 quiz table, and the Chapter 4 project |
| Review checklist, roadmap | Trainer notes and roadmap, the last section |

### How the Trainee Edition differs

- Adds a welcome page, a contents list and a progress checklist
- Leaves quiz and check-your-understanding answers blank for the learner to fill in
- Gives starter code with `TODO` steps instead of reference solutions
- Removes trainer's notes, solutions, the review checklist, the roadmap and the version history

*Copyright 2026 Ime Edet Nya. All rights reserved. Python and Visual Studio Code are trademarks of their respective owners.*

## About this manual

This manual teaches Python from zero and follows the Python Universal Learning Path (Revised Edition), Phase 1. Part 1 covers Chapter 1 (Setup and First Program, Learning Path section 1.1) and Chapter 2 (Variables, Types, and Input, section 1.2). Chapter *n* matches Phase 1 section 1.*n*, so later chapters line up the same way. Every code sample was run on Python 3.13. The course targets Python 3.12 or newer, with 3.10 as the minimum.

**Audience:** complete beginners with no programming background. **Time:** plan about 6 to 8 hours of guided practice for Part 1. This is an estimate that has not been checked with learners. The Learning Path puts Phase 1 as a whole at 40 to 60 hours.

### How each chapter is built

1. Learning objectives
2. Concept sections with runnable examples and output
3. Common mistakes table
4. Exercises (5 to 10 per chapter, as the Learning Path recommends)
5. Quick quiz
6. Chapter summary
7. Project, with starter code for trainees and a reference solution for you

### What moved because of the Revised Edition

The Revised Edition teaches each idea once, at the moment it is needed. Because of that, several topics from the first draft changed place.

| Topic | First draft (v1.0) | Now (v1.1) | Reason |
| --- | --- | --- | --- |
| Virtual environments | Chapter 1 | Chapter 10 | The Learning Path teaches them with pip and `requirements.txt` (section 1.10). The Kitchen Analogy keeps a marked preview |
| Global and local variables | Chapter 2 | Chapter 7 | Taught once, with functions (section 1.7) |
| Truthiness | Chapter 2 | Chapter 3 | Section 1.3 is Operators and Truthiness |
| User input (`input()`) | Chapter 1 | Chapter 2 | Taught right after type casting, since it returns text |
| f-strings | Chapter 1 | Chapter 2 | Introduced in section 1.2 and expanded in Chapter 4 |
| History and features | Core reading | Optional reading | The Learning Path calls history optional |
| Python version | 3.10 or higher, for `match-case` | 3.12 or newer, 3.10 minimum | `match-case` now belongs to Phase 2 |
| Chapter 1 project | Course Registration Receipt | Business Card (print only) | The receipt needs `input()`, so it became Project A in Chapter 2 |
| Type report in Project B | Used a `for` loop | Four plain `print()` lines | Loops arrive in Chapter 5 |
| Error example in Chapter 2 | Used `try` and `except` | Shows the error message only | Error handling is Chapter 8 |

### Conventions used in this manual

| Label | Meaning |
| --- | --- |
| Output | The exact result printed when the code runs |
| Trainer's note | Teaching advice for the instructor |
| Common mistake | An error beginners often make, with its fix |
| Best practice | The professional standard to follow from day one |
| Preview | A topic learners will meet properly in a later chapter |

### Version history

| Version | Date | Changes |
| --- | --- | --- |
| 1.0 | 25 Oct 2026 | First draft of Chapters 1 and 2, with the Kitchen and Storage Box analogies, the flowchart, projects, and separate Trainee and Instructor editions |
| 1.1 | 26 Oct 2026 | Aligned to the Revised Learning Path: topics moved as listed above, new Business Card project, Course Registration Receipt moved to Chapter 2, more exercises, updated roadmap |
| 1.2 | 27 Oct 2026 | Added Batch 2: Chapter 3 (Operators and Truthiness) and Chapter 4 (Strings), each with exercises, quiz, summary, trainer's notes and a verified project (Shift Pay Calculator, Name Badge Maker) |
| 1.3 | 27 Oct 2026 | Added Batch 3: Chapter 5 (Control Flow) with decision and loop analogies, flow diagrams, exercises, quiz, trainer's notes and the Score Analyser project |

