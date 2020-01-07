
namespace AprajitaRetails.Process {

    @Serenity.Decorators.registerClass()
    export class EndOfDaysDialog extends Serenity.EntityDialog<EndOfDaysRow, any> {
        protected getFormKey() { return EndOfDaysForm.formKey; }
        protected getIdProperty() { return EndOfDaysRow.idProperty; }
        protected getLocalTextPrefix() { return EndOfDaysRow.localTextPrefix; }
        protected getService() { return EndOfDaysService.baseUrl; }
        protected getDeletePermission() { return EndOfDaysRow.deletePermission; }
        protected getInsertPermission() { return EndOfDaysRow.insertPermission; }
        protected getUpdatePermission() { return EndOfDaysRow.updatePermission; }

        protected form = new EndOfDaysForm(this.idPrefix);

    }
}