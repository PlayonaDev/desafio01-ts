import { DioAccount } from "./DioAccount"

export class InvestimentAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  investmentDeposit = (balance: number): void => {
     this.balance = balance + 10
    console.log('Deposito na área de investiment realizado com sucesso, foi adicionado 10 reais ao seu saldo')
  }
}