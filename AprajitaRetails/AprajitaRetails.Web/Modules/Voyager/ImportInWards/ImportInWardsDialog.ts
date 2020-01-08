
namespace AprajitaRetails.Voyager {

    @Serenity.Decorators.registerClass()
    export class ImportInWardsDialog extends Serenity.EntityDialog<ImportInWardsRow, any> {
        protected getFormKey() { return ImportInWardsForm.formKey; }
        protected getIdProperty() { return ImportInWardsRow.idProperty; }
        protected getLocalTextPrefix() { return ImportInWardsRow.localTextPrefix; }
        protected getNameProperty() { return ImportInWardsRow.nameProperty; }
        protected getService() { return ImportInWardsService.baseUrl; }
        protected getDeletePermission() { return ImportInWardsRow.deletePermission; }
        protected getInsertPermission() { return ImportInWardsRow.insertPermission; }
        protected getUpdatePermission() { return ImportInWardsRow.updatePermission; }

        protected form = new ImportInWardsForm(this.idPrefix);

    }
}