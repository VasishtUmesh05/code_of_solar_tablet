import tkinter as tk

root = tk.Tk()

def window(title: str,height: int | float, width: int | float, full_screen: bool | None ) -> None:
    root.title(f"{title}")
    root.geometry(f"{width}x{height}+0+0")
    root.attributes(f"-fullscreen",full_screen)
    
def run() -> None:
    root.mainloop()