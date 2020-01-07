
namespace AprajitaRetails.Dues {

    @Serenity.Decorators.registerClass()
    export class DueRecoverdsGrid extends Serenity.EntityGrid<DueRecoverdsRow, any> {
        protected getColumnsKey() { return 'Dues.DueRecoverds'; }
        protected getDialogType() { return DueRecoverdsDialog; }
        protected getIdProperty() { return DueRecoverdsRow.idProperty; }
        protected getInsertPermission() { return DueRecoverdsRow.insertPermission; }
        protected getLocalTextPrefix() { return DueRecoverdsRow.localTextPrefix; }
        protected getService() { return DueRecoverdsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}