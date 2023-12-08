lines = []

with open("top-1k-ingredients.txt", "r") as f:
    for line in f.readlines():
        line = line.strip("\n")
        line = line.split(";")
        lines.append(line)

with open("ingredients.json", "w") as t:
    t.write("[\n")
    last = len(lines)-1
    for key, line in enumerate(lines):
        line = f'"ing_id":"{line[1]}", "name":"{line[0]}"'
        if key == last:
            print("last")
            t.write(f'\t{{{line}}}\n')
        else:
            t.write(f'\t{{{line}}},\n')
    t.write("]")