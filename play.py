from Tkinter import *

root = Tk()
frame = Frame(root)

top = Label(frame, text='I am the top')
top.grid(row=0, column=1)

center = Label(frame, text='I am the center\nBlah balh', width=40)
center.grid(row=1, column=1)

bottom = Label(frame, text='I am the bottom')
bottom.grid(row=2, column=1)

left = Label(frame, text='Left\nThen\nLeft\nAgain')
left.grid(row=0, column=0, rowspan=3, sticky=S+N)

right = Label(frame, text='Right\nThen\nRight\nAgain')
right.grid(row=0, column=2, rowspan=3, sticky=S+N)

frame.pack()
frame.mainloop()
root.destroy()