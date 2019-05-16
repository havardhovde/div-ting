op1 = 3
op2 = 5

for i in range(1,100):
    if i % op1 == 0 and i % op2 == 0:
        print("fizzbuzz")
    elif i % op1 == 0:
        print("fizz")
    elif i % op2 == 0:
        print("buzz")
    else:
        print(i)