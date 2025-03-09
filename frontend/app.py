import tkinter as tk

import time
import os
import sys

import threading


root = tk.Tk()

# private function only for this file
def __wait(sec: int | float):
    time.sleep(sec)


def window(title: str,height: int | float, width: int | float, full_screen: bool | None ) -> None:
    """This function create an window where it matches the args given.
    
    Args:
        title (str): Title of the window
        height (int | float): Height of the window
        width (int | float): Width of the window
        full_screen (bool | None): Start in fullscreen
    """
    root.title(f"{title}")
    root.geometry(f"{width}x{height}+0+0")
    root.attributes(f"-fullscreen",full_screen)
    
    # Add ui elements
    
    
def run(delay: int | float | None = 0) -> None:
    """This will run window function with given args or pre-defined args.

    Args:
        delay (int | float | None, optional): delay the start of the app. Defaults to 0.
    """
    __wait(delay)

    root.mainloop()
    