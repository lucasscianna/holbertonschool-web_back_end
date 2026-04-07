#!/usr/bin/env python3
"""Provides a function that calculates the length of a list of sequences."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples containing sequences and their lengths."""
    return [(i, len(i)) for i in lst]
