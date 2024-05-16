primeiro_numero = 10
segundo_numero = 30

if primeiro_numero > segundo_numero:
    print(primeiro_numero, "é maior que", segundo_numero)
else:
    print(segundo_numero, "é maior que", primeiro_numero)


# Segundo teste de condicionais> na balada

idade = int(input("Digite sua idade: "))

if(idade >= 18):
    print("PERMITIDO A ENTRADA")
else:
    print("BLOQUEADO, VOCÊ É MENOR DE IDADE!")


# Condições com o else if, que no Python é elif

salario = 3934

if salario <= 3000:
    print("Programador Junior")
elif salario > 3000 and salario <= 6000:
    print("Programador Pleno")
elif salario > 6000 and salario <= 15000:
    print("Programador Sênior")
else:
    print("Gerente de Projetos")