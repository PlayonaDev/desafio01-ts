export abstract class DioAccount {
  static validateStatus() {
    throw new Error("Method not implemented.")
  }
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
  
  getName = (): string => {
    return this.name
  }

  deposit = (balance: number): number => {
    this.balance = balance
    if (this.validateStatus()) {
      console.log(`Deposito realizado com sucesso! Saldo: R$${balance}`)
    }
    return balance
  }

  withdraw = ():  void => {
    if(this.validateStatus() && this.balance > 0){
      console.log(`Realize seu saque! Saldo disponível: R$${this.balance}`)
    }
    else {
      console.log(`Saldo insuficiente: ${this.balance}`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

   validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
