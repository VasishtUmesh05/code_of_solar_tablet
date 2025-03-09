import tkinter as tk

class window:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Hello World")
        self.root.geometry("400x400")
        self.label = tk.Label(self.root, text="Hello World")
        self.label.pack()
        self.root.mainloop()
        
if __name__ == "__main__":
    window().root.mainloop()