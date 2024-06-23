"""
Exercício 3: Classe ContaBancaria
Crie uma classe ContaBancaria que possui os atributos SALDO. 
A classe deve ter métodos depositar (para adicionar dinheiro) e sacar (para retirar dinheiro, verificando se há balance suficiente).
"""

class ContaBancaria:
    def __init__(self) -> None:
        self.balance = 0
        self.contador = 0

    def show_balance(self):
        if self.contador == 0:
            print(f'Olá, seja bem-vindo ao nosso banco! Seu saldo é de: R${self.balance}')
            self.contador += 1
        else:
            print(f'Olá, seu saldo é de: R${self.balance}')

    def deposit_balance(self):
        deposit = int(input('Quanto você quer depositar? R$'))
        self.balance += deposit
        print(f'Você depositou R${deposit}. Seu novo saldo é R${self.balance}')

    def withdraw_balance(self):
        withdraw = int(input('Quanto você quer retirar? R$'))
        if self.balance == 0:
            response = input(f'Seu saldo é de R$ 0. Ainda assim você pode retirar, mas ficará negativado! [S/N]: ')
            if response.upper() == 'S':
                self.calculate_negative_balance(withdraw)
            return
        elif self.balance < 0 and self.balance - withdraw < -200:
            response = input(f'Parece que você já está negativo. Mas desde que não ultrapasse o limite de R$ -200, você ainda pode retirar. [S/N]: ')
            if response.upper() == 'S':
                self.calculate_negative_balance(withdraw)
            return
        elif self.balance - withdraw < -200:
            print(f'Você ultrapassou o limite de R$ -200. Não é possível realizar essa retirada.')
        else:
            self.balance -= withdraw
            print(f'Você retirou R${withdraw}. Seu novo saldo é R${self.balance}')

    def calculate_negative_balance(self, amount):
        if self.balance - amount < -200:
            print(f'Você ultrapassou o limite de R$ -200. Não é possível realizar essa retirada.')
        else:
            self.balance -= amount
            print(f'Você retirou R${amount}. Seu novo saldo é R${self.balance}')

# Criando a conta bancária
conta = ContaBancaria()

# Loop de interação com o usuário
while True:
    print("\nEscolha uma operação:")
    print("1. Ver saldo")
    print("2. Depositar")
    print("3. Sacar")
    print("4. Sair")

    opcao = input("Digite a opção desejada (1/2/3/4): ")

    if opcao == '1':
        conta.show_balance()
    elif opcao == '2':
        conta.deposit_balance()
    elif opcao == '3':
        conta.withdraw_balance()
    elif opcao == '4':
        print("Obrigado por usar nosso banco. Até a próxima!")
        break
    else:
        print("Opção inválida. Por favor, escolha novamente.")
