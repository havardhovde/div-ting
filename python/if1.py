land = input("Land i skandinavia: ")

if land.casefold() == "norge":
    print("Oslo")

elif land.casefold() == "sverige":
    print("Stockholm")

elif land.casefold() == "dannmark":
    print("København")

else:
    print("Ikke i skandianavia")
    