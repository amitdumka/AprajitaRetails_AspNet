
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportSaleItemWisesDialog extends Serenity.EntityDialog<ImportSaleItemWisesRow, any> {
        protected getFormKey() { return ImportSaleItemWisesForm.formKey; }
        protected getIdProperty() { return ImportSaleItemWisesRow.idProperty; }
        protected getLocalTextPrefix() { return ImportSaleItemWisesRow.localTextPrefix; }
        protected getNameProperty() { return ImportSaleItemWisesRow.nameProperty; }
        protected getService() { return ImportSaleItemWisesService.baseUrl; }
        protected getDeletePermission() { return ImportSaleItemWisesRow.deletePermission; }
        protected getInsertPermission() { return ImportSaleItemWisesRow.insertPermission; }
        protected getUpdatePermission() { return ImportSaleItemWisesRow.updatePermission; }

        protected form = new ImportSaleItemWisesForm(this.idPrefix);

    }
}