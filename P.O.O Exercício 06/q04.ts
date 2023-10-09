class Conta {
    private _numero: string;
    private _nome: string;
    private _saldo: number;
 
     constructor(_numero: string, _nome: string, _saldo: number) {
         this._numero = _numero
         this._nome = _nome
         this._saldo = _saldo
     }
 
     get numero() {
         return this._numero
     }
 
     get nome() {
         return this._nome
     }
 
     get saldo() {
         return this._saldo
     }
 
     public depositar(valor: number): void {
         this._saldo = this._saldo + valor
     }
 
     public sacar(valor: number): boolean {
         if (this._saldo - valor < 0) {
             return false
         }
 
         this._saldo = this._saldo - valor
         return true
     }
 
     public consultar_Saldo(): number {
         return this._saldo
     }
 
     public transferir(contaDestino: Conta, valor: number): boolean {
         if (!this.sacar(valor)) {
             return false
         }
 
         contaDestino.depositar(valor)
         return true
     }
 }
 
 class Banco {
     private contas: Conta[] = []
 
     public inserir(conta: Conta): void {
         let ja_existe: boolean = false
         for (let i: number = 0; i < this.contas.length; i++) {
             if (this.contas[i].numero == conta.numero) {
                 ja_existe = true
             }
         }
         if (ja_existe == false) {
         this.contas.push(conta)
         }
         else {
             console.log('Não foi possível inserir a conta pois seu número já pertence a uma conta existente.')
         }
     }
 
     public consultar(_numero: string): Conta {
         let contaProcurada!: Conta
 
         for (let i: number = 0; i < this.contas.length; i++) {
             if (this.contas[i].numero == _numero) {
                 contaProcurada = this.contas[i]
                 break
             }
         }
 
         return contaProcurada
     }
 
     private consultarPorIndice(_numero: string): number {
         let indiceProcurado: number = -1
 
         for (let i: number = 0; i < this.contas.length; i++) {
             if (this.contas[i].numero == _numero) {
                 indiceProcurado = i
                 break
             }
         }
 
         return indiceProcurado
     }
 
     public alterar(conta: Conta): void {
         let indiceProcurado: number =
                 this.consultarPorIndice(conta.numero)
         
         if (indiceProcurado != -1) {
             this.contas[indiceProcurado] = conta
         }
     }
 
     public excluir(_numero: string): void {
         let indiceProcurado = this.consultarPorIndice(_numero)
 
         if (indiceProcurado != -1) {
             for (let i = indiceProcurado; i < this.contas.length; i++) {
                 this.contas[i] = this.contas[i+1]
             }
             this.contas.pop()
             
         }
     }
 
     public sacar(_numero: string, valor: number): void {
         let indiceProcurado: number = this.consultarPorIndice(_numero)
 
         if (indiceProcurado != -1) {
             let conta: Conta = this.contas[indiceProcurado]
             conta.sacar(valor)
         }
     }
 
     public transferir(_numeroCredito: string, _numeroDebito: string, valor: number) {
         let conta_credito: Conta = this.consultar(_numeroCredito)
         let conta_debito: Conta = this.consultar(_numeroDebito)
 
         conta_debito.transferir(conta_credito, valor)
     }
 
     public retornar_quantidade() {
         return this.contas.length
     }
 
     public retornar_valor_total() {
         let valor_total: number = 0
 
         for (let i: number = 0; i < this.contas.length; i++) {
             valor_total += this.contas[i].saldo
         }
 
         return valor_total
     }
 
     public retornar_media() {
         let soma_dos_valores: number = this.retornar_valor_total()
         let quantidade_de_contas: number = this.retornar_quantidade()
         let media: number = soma_dos_valores / quantidade_de_contas
 
         return media
     }
 }
 
 let banco = new Banco()
 
 banco.inserir(new Conta('1', 'João', 1000))
 banco.inserir(new Conta('2', 'Maria', 500))
 banco.inserir(new Conta('3', 'Pedro', 1500))
 
 let conta_02 = banco.consultar('2')
 console.log('Conta de Maria:', conta_02)
 
 conta_02.depositar(300)
 console.log('Saldo de Maria após depósito:', conta_02.saldo)
 
 conta_02.sacar(200)
 console.log('Saldo de Maria após saque:', conta_02.saldo)
 
 let conta_03 = banco.consultar('3')
 console.log('Saldo de Pedro antes da transferência:', conta_03.saldo)
 banco.transferir('2', '3', 200)
 console.log('Saldo de Pedro após a transferência:', conta_03.saldo)
 
 console.log('Número de contas antes da exclusão:', banco.retornar_quantidade())
 banco.excluir('1')
 console.log('Número de contas após a exclusão:', banco.retornar_quantidade())
 
 console.log('Valor total de todos os saldos:', banco.retornar_valor_total())
 console.log('Média dos saldos:', banco.retornar_media())
 