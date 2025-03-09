import tkinter as tk

class ContentSelector(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Learning Tablet")
        self.geometry("600x400")
        self.configure(bg="black")
        
        # Main frame for centering
        main_frame = tk.Frame(self, bg="black")
        main_frame.pack(expand=True)
        
        # Buttons
        self.class_btn = tk.Button(main_frame, text="Classes", font=("Arial", 14, "bold"), width=15, height=2, command=self.show_classes, bg="gray", fg="white")
        self.notes_btn = tk.Button(main_frame, text="Notes", font=("Arial", 14, "bold"), width=15, height=2, command=self.show_notes, bg="gray", fg="white")
        
        self.class_btn.pack(side=tk.LEFT, padx=20, pady=20, expand=True)
        self.notes_btn.pack(side=tk.LEFT, padx=20, pady=20, expand=True)
        
        # Bind resizing
        self.bind("<Configure>", self.resize_buttons)
    
    def show_classes(self):
        self.open_window("Classes", ["Class 1", "Class 2", "Class 3"])
    
    def show_notes(self):
        self.open_window("Notes", ["Note 1", "Note 2", "Note 3"])
    
    def open_window(self, title, items):
        new_window = tk.Toplevel(self)
        new_window.title(title)
        new_window.geometry("600x300")
        new_window.configure(bg="black")
        
        frame = tk.Frame(new_window, bg="black")
        frame.pack(expand=True)
        
        for item in items:
            btn = tk.Button(frame, text=item, font=("Arial", 12), width=10, height=2, bg="gray", fg="white")
            btn.pack(side=tk.LEFT, padx=10, pady=10, expand=True)
    
    def resize_buttons(self, event):
        new_width = max(self.winfo_width() // 15, 10)
        new_height = max(self.winfo_height() // 150, 2)
        self.class_btn.config(width=new_width, height=new_height)
        self.notes_btn.config(width=new_width, height=new_height)

if __name__ == "__main__":
    app = ContentSelector()
    app.mainloop()
