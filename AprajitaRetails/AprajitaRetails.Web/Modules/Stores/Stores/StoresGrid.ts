
namespace AprajitaRetails.Stores {

    @Serenity.Decorators.registerClass()
    export class StoresGrid extends Serenity.EntityGrid<StoresRow, any> {
        protected getColumnsKey() { return 'Stores.Stores'; }
        protected getDialogType() { return StoresDialog; }
        protected getIdProperty() { return StoresRow.idProperty; }
        protected getInsertPermission() { return StoresRow.insertPermission; }
        protected getLocalTextPrefix() { return StoresRow.localTextPrefix; }
        protected getService() { return StoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}