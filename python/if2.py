#voksen = input("Er du voksen= (ja/nei)")
#gravid = input("Er du gravid? (ja/nei)")

#if voksen == "ja":
#    print("Du er stor nok, ")
#    if gravid == "ja":
#        print("men du har dessverre ikke lov.")
#    else:
#     print("Velkommen ombord!")

#if voksen =="nei":
#    print("Bli voksen!")

voksen = input("Er du voksen= (ja/nei)")

if voksen == "nei":
    print("Bli voksen!")

if voksen == "ja":
    gravid = input("Er du gravid= (ja/nei)")
    if gravid == "nei":
        print("Velkommen ombord!")
    if gravid == "ja":
        print("Du får desverre ikke lov")
