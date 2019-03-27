innlest_tekst = input("Hvor gammel er du? ")
tall = int(innlest_tekst)
print("Det doble av din alder er: " + str(tall*2))

fart = int(input(""))
if fart <= 60:
    svar = "Fart: " + str(fart)
else:
    svar = "Fart: over 60."
print(svar)

tall1 = int(input("Skriv tall 1: "))
tall2 = int(input("Skriv tall 2: "))

if tall1 < tall2:
    minst = tall1
else :
    minst = tall2

print(minst)
