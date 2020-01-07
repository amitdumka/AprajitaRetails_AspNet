
namespace AprajitaRetails.Dues {

    @Serenity.Decorators.registerClass()
    export class DuesListsGrid extends Serenity.EntityGrid<DuesListsRow, any> {
        protected getColumnsKey() { return 'Dues.DuesLists'; }
        protected getDialogType() { return DuesListsDialog; }
        protected getIdProperty() { return DuesListsRow.idProperty; }
        protected getInsertPermission() { return DuesListsRow.insertPermission; }
        protected getLocalTextPrefix() { return DuesListsRow.localTextPrefix; }
        protected getService() { return DuesListsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}