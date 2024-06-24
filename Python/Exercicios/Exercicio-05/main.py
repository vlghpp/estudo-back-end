"""
Exercício 5: Sistema de Gerenciamento de Funcionários
Crie um sistema de gerenciamento de funcionários. O sistema deve ter uma classe Funcionario com os atributos nome, cargo e salario. 
Crie uma classe Gerente que herda de Funcionario e adiciona o atributo departamento. 
O sistema deve permitir adicionar, remover e listar funcionários, bem como calcular a folha de pagamento total.
"""

class Employee:
    def __init__(self, identity, name, office, salary) -> None:
        self.identity = identity
        self.name = name
        self.office = office
        self.salary = salary
    def show_details(self):
        print(f'ID: {self.identity}, Nome: {self.name}, Cargo: {self.office}, Salário: R${self.salary}')

class Manager(Employee):
    def __init__(self,identify, name, office, salary,departament) -> None:
        super().__init__(identify, name, office, salary)
        self.departament = departament
        self.company = {}

    def show_employees(self):
        if not self.company:
            print(f'Não há funcionários nesta empresa.')
        else:
            for employee in self.company.values():
                employee.show_details()
                
    def add_employee(self, employee):
        if employee.identity in self.company:
            print(f'O funcionário com o {employee.identity} já existe!')
        elif employee.identity is not self.company:
            self.company[employee.identity] = employee
    
    def remove_employee(self, identity):
        if identity in self.company:
            del self.company[identity]
            print(f'Funcionário removido com sucesso!')
        else:
            print(f'Este funcionário não existe!')

employee_1 = Employee(1, 'Henrique', 'Programador Back-End', 5000)
employee_2 = Employee(2, 'Alice', 'Designer', 4000)
employee_3 = Employee(3, 'João', 'Gerente de Projetos', 6000)

manager = Manager(0, 'Carlos', 'Gerente Geral', 8000, 'Tecnologia')

manager.add_employee(employee_1)
manager.add_employee(employee_2)
manager.add_employee(employee_3)
manager.show_employees()


