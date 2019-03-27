def giBeskjed():
    print("Jeg sier dette bare en gang!")

def kallVidere():
    print("Her kommer det")
    giBeskjed()
    print("Og en gang til")
    giBeskjed()
    print("Det var ikke mye")

print("Hei, jeg vil si det noe")
kallVidere()
print("Fikk du det likevel med deg?")

def p1():
    print("B")
    print("C")

def p2():
    p1()
    print("A")

p1()
p2()