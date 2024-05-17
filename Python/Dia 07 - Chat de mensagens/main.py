import os

mensagem = []

nome =  input("Digite seu nome: ")

while True:
    #Limpando o terminal

    os.system('cls')


    if len(mensagem) > 0:
        for m in mensagem:
            print(m['nome'], "-", m['texto'])
    
    print("__________________")

    #obtendo texto

    texto = input("Mensagem: ")
    if texto == "fim":
        print("--------- Obrigado por usar nosso chat! ---------")
        break
    

    #adicionando mensagem na lista

    mensagem.append({
        "nome": nome,
        "texto": texto
    })