
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class AccountNumbersGrid extends Serenity.EntityGrid<AccountNumbersRow, any> {
        protected getColumnsKey() { return 'Banking.AccountNumbers'; }
        protected getDialogType() { return AccountNumbersDialog; }
        protected getIdProperty() { return AccountNumbersRow.idProperty; }
        protected getInsertPermission() { return AccountNumbersRow.insertPermission; }
        protected getLocalTextPrefix() { return AccountNumbersRow.localTextPrefix; }
        protected getService() { return AccountNumbersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}