notas = []

for x in range(5):
    print("Aluno", x)
    nota_aluno = float(input("Digite sua nota: "))
    nome_aluno = input("Digite seu nome: ")
    aluno = [nota_aluno, nome_aluno]
    notas.append(aluno)
    print("")

c = 0
for x in notas:
    print("O aluno: ", notas[c][1], "tirou a nota:", notas[c][0])
    c+=1