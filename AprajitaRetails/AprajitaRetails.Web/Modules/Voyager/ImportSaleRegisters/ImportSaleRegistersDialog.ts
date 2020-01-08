
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportSaleRegistersDialog extends Serenity.EntityDialog<ImportSaleRegistersRow, any> {
        protected getFormKey() { return ImportSaleRegistersForm.formKey; }
        protected getIdProperty() { return ImportSaleRegistersRow.idProperty; }
        protected getLocalTextPrefix() { return ImportSaleRegistersRow.localTextPrefix; }
        protected getNameProperty() { return ImportSaleRegistersRow.nameProperty; }
        protected getService() { return ImportSaleRegistersService.baseUrl; }
        protected getDeletePermission() { return ImportSaleRegistersRow.deletePermission; }
        protected getInsertPermission() { return ImportSaleRegistersRow.insertPermission; }
        protected getUpdatePermission() { return ImportSaleRegistersRow.updatePermission; }

        protected form = new ImportSaleRegistersForm(this.idPrefix);

    }
}