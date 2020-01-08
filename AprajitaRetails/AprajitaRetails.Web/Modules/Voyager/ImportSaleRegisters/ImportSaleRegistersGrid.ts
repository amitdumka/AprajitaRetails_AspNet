
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportSaleRegistersGrid extends Serenity.EntityGrid<ImportSaleRegistersRow, any> {
        protected getColumnsKey() { return 'Voyager.ImportSaleRegisters'; }
        protected getDialogType() { return ImportSaleRegistersDialog; }
        protected getIdProperty() { return ImportSaleRegistersRow.idProperty; }
        protected getInsertPermission() { return ImportSaleRegistersRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportSaleRegistersRow.localTextPrefix; }
        protected getService() { return ImportSaleRegistersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}