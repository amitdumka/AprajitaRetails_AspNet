
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class BankWithdrawalsGrid extends Serenity.EntityGrid<BankWithdrawalsRow, any> {
        protected getColumnsKey() { return 'Banking.BankWithdrawals'; }
        protected getDialogType() { return BankWithdrawalsDialog; }
        protected getIdProperty() { return BankWithdrawalsRow.idProperty; }
        protected getInsertPermission() { return BankWithdrawalsRow.insertPermission; }
        protected getLocalTextPrefix() { return BankWithdrawalsRow.localTextPrefix; }
        protected getService() { return BankWithdrawalsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}