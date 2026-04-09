# Advanced Python - Asynchronous Programming

## Description
This project focuses on the basics of asynchronous programming in Python using the `asyncio` library. It covers defining coroutines, using `await`, running concurrent tasks, measuring performance, and using the `random` module for simulations.

## Learning Objectives
By the end of this project, you will be able to explain the following concepts:
- `async` and `await` syntax
- How to execute an async program with `asyncio`
- How to run concurrent coroutines at the same time with `asyncio.gather`
- How to create `asyncio.Task`s
- How to use the `random` module

## Requirements
- **Editors:** `vi`, `vim`, `emacs`
- **Environment:** All files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.9)
- **File Endings:** All files must end with a new line
- **Shebang:** The first line of all your files must be exactly `#!/usr/bin/env python3`
- **Style Guidelines:** Your code should use the `pycodestyle` style (version 2.5)
- **Permissions:** All files must be executable
- **File Length:** The length of your files will be tested using `wc`
- **Documentation:**
  - All modules should have documentation
  - All functions should have documentation
  - Documentation must be a complete sentence explaining the purpose of the module or function

## Tasks

### 0. The basics of async
- File: [0-basic_async_syntax.py](file:///Users/lucasscianna/holbertonschool-web_back_end/python_async_function/0-basic_async_syntax.py)
- Write an asynchronous coroutine `wait_random` that takes in an integer argument `max_delay` (default 10) and waits for a random delay between 0 and `max_delay` seconds.

### 1. Let's execute multiple coroutines at the same time with async
- File: [1-concurrent_coroutines.py](file:///Users/lucasscianna/holbertonschool-web_back_end/python_async_function/1-concurrent_coroutines.py)
- Import `wait_random` from the previous file and write an async routine `wait_n` that spawns `wait_random` `n` times with the specified `max_delay`.

### 2. Measure the runtime
- File: [2-measure_runtime.py](file:///Users/lucasscianna/holbertonschool-web_back_end/python_async_function/2-measure_runtime.py)
- Create a `measure_time` function with integers `n` and `max_delay` as arguments that measures the total execution time for `wait_n(n, max_delay)`, and returns `total_time / n`.

### 3. Tasks
- File: [3-tasks.py](file:///Users/lucasscianna/holbertonschool-web_back_end/python_async_function/3-tasks.py)
- Write a function `task_wait_random` that takes an integer `max_delay` and returns a `asyncio.Task`.

### 4. Tasks
- File: [4-tasks.py](file:///Users/lucasscianna/holbertonschool-web_back_end/python_async_function/4-tasks.py)
- Take the code from `wait_n` and alter it into a new function `task_wait_n`. The code is nearly identical except `task_wait_random` is being called.