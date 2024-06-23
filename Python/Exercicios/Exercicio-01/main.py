"""
Exercício 1: Classe Pessoa
Crie uma classe Pessoa que possui os atributos nome e idade. A classe deve ter um método exibir_informacoes que imprime as informações da pessoa.
"""

class Pessoa:
    def __init__(self, nome, idade) -> None:
        self.nome = nome
        self.idade = idade

    def show_information(self):
        print(f'Você invocou a pessoa de nome {self.nome} com a idade de {self.idade}')


first_person = Pessoa('Henrique', 19)
first_person.show_information()

second_person = Pessoa('Carlos', 19)
second_person.show_information()