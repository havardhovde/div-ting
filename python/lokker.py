num1 = 3
num2 = 5

for i in range(1,20):
    if i % num1 == 0 and i % num2 == 0:
        print("FizzBuzz")
    elif i % num1 == 0:
        print("Fizz")
    elif i % num2 == 0:
        print("Buzz")
    else:
        print(i)