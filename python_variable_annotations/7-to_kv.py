#!/usr/bin/env python3
"""Provides a function that converts a key and value to a tuple."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with the string and the square of the value."""
    return (k, v ** 2)
