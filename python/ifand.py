voksen = input("Er du voksen= (ja/nei)")
gravid = input("Er du gravid= (ja/nei)")

if voksen.casefold() == "ja" and gravid.casefold() == "nei":
    print("velkommen ombord!")
    
else :
    print("du får dessverre ikke lov")