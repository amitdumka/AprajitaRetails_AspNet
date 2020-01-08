
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportPurchasesDialog extends Serenity.EntityDialog<ImportPurchasesRow, any> {
        protected getFormKey() { return ImportPurchasesForm.formKey; }
        protected getIdProperty() { return ImportPurchasesRow.idProperty; }
        protected getLocalTextPrefix() { return ImportPurchasesRow.localTextPrefix; }
        protected getNameProperty() { return ImportPurchasesRow.nameProperty; }
        protected getService() { return ImportPurchasesService.baseUrl; }
        protected getDeletePermission() { return ImportPurchasesRow.deletePermission; }
        protected getInsertPermission() { return ImportPurchasesRow.insertPermission; }
        protected getUpdatePermission() { return ImportPurchasesRow.updatePermission; }

        protected form = new ImportPurchasesForm(this.idPrefix);

    }
}