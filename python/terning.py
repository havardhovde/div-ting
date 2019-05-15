score = []
score.append(int(input("Terning 1: ")))
score.append(int(input("Terning 2: ")))
score.append(int(input("Terning 3: ")))
score.append(int(input("Terning 4: ")))
score.append(int(input("Terning 5: ")))

ulike= set(score)
if len(ulike) == 1:
    print("Yatzy!")
else:
    print("Ikke yatzy.")