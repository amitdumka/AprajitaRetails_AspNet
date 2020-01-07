
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class BankDepositsGrid extends Serenity.EntityGrid<BankDepositsRow, any> {
        protected getColumnsKey() { return 'Banking.BankDeposits'; }
        protected getDialogType() { return BankDepositsDialog; }
        protected getIdProperty() { return BankDepositsRow.idProperty; }
        protected getInsertPermission() { return BankDepositsRow.insertPermission; }
        protected getLocalTextPrefix() { return BankDepositsRow.localTextPrefix; }
        protected getService() { return BankDepositsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}