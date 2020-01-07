
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class CashInHandsGrid extends Serenity.EntityGrid<CashInHandsRow, any> {
        protected getColumnsKey() { return 'Accounts.CashInHands'; }
        protected getDialogType() { return CashInHandsDialog; }
        protected getIdProperty() { return CashInHandsRow.idProperty; }
        protected getInsertPermission() { return CashInHandsRow.insertPermission; }
        protected getLocalTextPrefix() { return CashInHandsRow.localTextPrefix; }
        protected getService() { return CashInHandsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}