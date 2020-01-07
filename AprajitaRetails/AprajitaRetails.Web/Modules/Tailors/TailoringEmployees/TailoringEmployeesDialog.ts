
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringEmployeesDialog extends Serenity.EntityDialog<TailoringEmployeesRow, any> {
        protected getFormKey() { return TailoringEmployeesForm.formKey; }
        protected getIdProperty() { return TailoringEmployeesRow.idProperty; }
        protected getLocalTextPrefix() { return TailoringEmployeesRow.localTextPrefix; }
        protected getNameProperty() { return TailoringEmployeesRow.nameProperty; }
        protected getService() { return TailoringEmployeesService.baseUrl; }
        protected getDeletePermission() { return TailoringEmployeesRow.deletePermission; }
        protected getInsertPermission() { return TailoringEmployeesRow.insertPermission; }
        protected getUpdatePermission() { return TailoringEmployeesRow.updatePermission; }

        protected form = new TailoringEmployeesForm(this.idPrefix);

    }
}