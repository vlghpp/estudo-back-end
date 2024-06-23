"""
Exercício 2: Classe Retângulo
Crie uma classe Retangulo que possui os atributos largura e altura. A classe deve ter um método calcular_area que retorna a área do retângulo.
"""

class Retangulo:
    def __init__(self, altura, largura) -> None:
        self.altura = altura
        self.largura = largura

    def calculate_area(self):
        result_area = self.altura * self.largura
        print(f'A àrea do seu retânculo de {self.altura}m x {self.largura}m é de: {result_area}m')

first_retangulo = Retangulo(10, 10)
first_retangulo.calculate_area()