#!/usr/bin/env python3
"""Provides a function that sums a list of integers and floats."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of a list containing integers and floats."""
    return float(sum(mxd_lst))
