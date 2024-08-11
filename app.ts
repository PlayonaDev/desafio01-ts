import { CompanyAccount } from './class/CompanyAccount'
import { InvestimentAccount } from './class/InvestimentoAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(1500)
peopleAccount.withdraw()
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, 10000)
companyAccount.deposit(5500)
companyAccount.getLoan(1500)
console.log(companyAccount)

const investimentAccount: InvestimentAccount = new InvestimentAccount('Vitor Augusto', 21025455)
investimentAccount.investmentDeposit(400)
console.log(investimentAccount)