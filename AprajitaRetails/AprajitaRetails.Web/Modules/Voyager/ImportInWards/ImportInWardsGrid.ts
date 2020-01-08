
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportInWardsGrid extends Serenity.EntityGrid<ImportInWardsRow, any> {
        protected getColumnsKey() { return 'Voyager.ImportInWards'; }
        protected getDialogType() { return ImportInWardsDialog; }
        protected getIdProperty() { return ImportInWardsRow.idProperty; }
        protected getInsertPermission() { return ImportInWardsRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportInWardsRow.localTextPrefix; }
        protected getService() { return ImportInWardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}