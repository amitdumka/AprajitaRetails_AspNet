
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class SaleTaxTypesDialog extends Serenity.EntityDialog<SaleTaxTypesRow, any> {
        protected getFormKey() { return SaleTaxTypesForm.formKey; }
        protected getIdProperty() { return SaleTaxTypesRow.idProperty; }
        protected getLocalTextPrefix() { return SaleTaxTypesRow.localTextPrefix; }
        protected getNameProperty() { return SaleTaxTypesRow.nameProperty; }
        protected getService() { return SaleTaxTypesService.baseUrl; }
        protected getDeletePermission() { return SaleTaxTypesRow.deletePermission; }
        protected getInsertPermission() { return SaleTaxTypesRow.insertPermission; }
        protected getUpdatePermission() { return SaleTaxTypesRow.updatePermission; }

        protected form = new SaleTaxTypesForm(this.idPrefix);

    }
}