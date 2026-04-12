#!/usr/bin/env python3
"""Module implementing a basic asynchronous coroutine with random delay."""
import asyncio
import random
 
 
async def wait_random(max_delay: int = 10) -> float:
    """Wait for a random delay between 0 and max_delay seconds and return it.
 
    Args:
        max_delay: The maximum number of seconds to wait (default: 10).
 
    Returns:
        The actual delay waited as a float.
    """
    delay: float = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay