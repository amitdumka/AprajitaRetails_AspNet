
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class BanksGrid extends Serenity.EntityGrid<BanksRow, any> {
        protected getColumnsKey() { return 'Banking.Banks'; }
        protected getDialogType() { return BanksDialog; }
        protected getIdProperty() { return BanksRow.idProperty; }
        protected getInsertPermission() { return BanksRow.insertPermission; }
        protected getLocalTextPrefix() { return BanksRow.localTextPrefix; }
        protected getService() { return BanksService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}