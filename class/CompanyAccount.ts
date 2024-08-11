import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private load: number = 0

  constructor(name: string, accountNumber: number, load: number){
    super(name, accountNumber)
    this.load = load
  }

  getLoan = (load: number): number => {
    if(this.validateStatus())
    console.log(`Empréstimo realizado com sucesso! R$${load} verifique seu saldo atual.`)
    return this.balance += load
  }

}
