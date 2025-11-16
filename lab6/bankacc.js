class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    accInfo() {
        console.log(`accNo: ${this.accountNumber}`);
        console.log(`acc ezen: ${this.accountHolder}`);
        console.log(`uldegdel: ${this.balance}`);
    }

    munguHiih(nemehMungu) {
        this.balance = this.balance + nemehMungu;
        console.log(nemehMungu, 'nemegdlee')
        console.log(`${this.accountNumber} dansnii uldegdel ${this.balance} tugrug uldlee.
        `);
    }
    munguAvah(avahMungu) {
        this.balance = this.balance - avahMungu;
        console.log(avahMungu, 'hasagdlaa')
        console.log(`${this.accountNumber} dansnii uldegdel ${this.balance} tugrug uldlee.
        `);
    }
}
let acc1 = new BankAccount(5024887452, "Bat", 12900000)
acc1.accInfo();
acc1.munguHiih(1000000);
acc1.accInfo();
acc1.munguAvah(2100000);
acc1.accInfo();
acc1.munguAvah(11800000);
acc1.accInfo();