
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class CashInBanksGrid extends Serenity.EntityGrid<CashInBanksRow, any> {
        protected getColumnsKey() { return 'Accounts.CashInBanks'; }
        protected getDialogType() { return CashInBanksDialog; }
        protected getIdProperty() { return CashInBanksRow.idProperty; }
        protected getInsertPermission() { return CashInBanksRow.insertPermission; }
        protected getLocalTextPrefix() { return CashInBanksRow.localTextPrefix; }
        protected getService() { return CashInBanksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}