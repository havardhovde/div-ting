# i = 1
# while i < 6:
#     print(i)
#     i += 1

i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1  

# fruits = ["apple", "banana", "cherry"]
# for x in fruits:
#     if x == "banana":
#         continue 
#     print(x)    

for x in "banana":
    print(x)

for x in range(6):
    print(x)
else:
    print("Finally finished!")

adj = ["Red", "Big", "Tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
    for y in fruits:
        print(x,y)