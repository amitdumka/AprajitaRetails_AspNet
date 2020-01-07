
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class SalesmenDialog extends Serenity.EntityDialog<SalesmenRow, any> {
        protected getFormKey() { return SalesmenForm.formKey; }
        protected getIdProperty() { return SalesmenRow.idProperty; }
        protected getLocalTextPrefix() { return SalesmenRow.localTextPrefix; }
        protected getNameProperty() { return SalesmenRow.nameProperty; }
        protected getService() { return SalesmenService.baseUrl; }
        protected getDeletePermission() { return SalesmenRow.deletePermission; }
        protected getInsertPermission() { return SalesmenRow.insertPermission; }
        protected getUpdatePermission() { return SalesmenRow.updatePermission; }

        protected form = new SalesmenForm(this.idPrefix);

    }
}