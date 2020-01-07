
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class SuspenseAccountsGrid extends Serenity.EntityGrid<SuspenseAccountsRow, any> {
        protected getColumnsKey() { return 'Accounts.SuspenseAccounts'; }
        protected getDialogType() { return SuspenseAccountsDialog; }
        protected getIdProperty() { return SuspenseAccountsRow.idProperty; }
        protected getInsertPermission() { return SuspenseAccountsRow.insertPermission; }
        protected getLocalTextPrefix() { return SuspenseAccountsRow.localTextPrefix; }
        protected getService() { return SuspenseAccountsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}