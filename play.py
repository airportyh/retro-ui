from Tkinter import *

root = Tk()
frame = Frame(root)
master = frame

label1 = Label(master, text="First")
label2 = Label(master, text="Second")

entry1 = Entry(master)
entry2 = Entry(master)

label1.grid(sticky=E)
label2.grid(sticky=E)

entry1.grid(row=0, column=1)
entry2.grid(row=1, column=1)

label3 = Label(master, text='HEY THIS IS BIG')
label3.grid(row=0, column=2, columnspan=2, rowspan=2,
               sticky=W+E+N+S, padx=5, pady=5)

button1 = Button(master, text='Zoom in')
button2 = Button(master, text='Zoom out')

button1.grid(row=2, column=2)
button2.grid(row=2, column=3)

frame.pack()
frame.mainloop()
root.destroy()