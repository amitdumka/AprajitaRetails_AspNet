
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportSaleItemWisesGrid extends Serenity.EntityGrid<ImportSaleItemWisesRow, any> {
        protected getColumnsKey() { return 'Voyager.ImportSaleItemWises'; }
        protected getDialogType() { return ImportSaleItemWisesDialog; }
        protected getIdProperty() { return ImportSaleItemWisesRow.idProperty; }
        protected getInsertPermission() { return ImportSaleItemWisesRow.insertPermission; }
        protected getLocalTextPrefix() { return ImportSaleItemWisesRow.localTextPrefix; }
        protected getService() { return ImportSaleItemWisesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}