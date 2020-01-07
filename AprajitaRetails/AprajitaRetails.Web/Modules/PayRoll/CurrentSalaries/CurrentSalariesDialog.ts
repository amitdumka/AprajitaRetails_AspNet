
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class CurrentSalariesDialog extends Serenity.EntityDialog<CurrentSalariesRow, any> {
        protected getFormKey() { return CurrentSalariesForm.formKey; }
        protected getIdProperty() { return CurrentSalariesRow.idProperty; }
        protected getLocalTextPrefix() { return CurrentSalariesRow.localTextPrefix; }
        protected getService() { return CurrentSalariesService.baseUrl; }
        protected getDeletePermission() { return CurrentSalariesRow.deletePermission; }
        protected getInsertPermission() { return CurrentSalariesRow.insertPermission; }
        protected getUpdatePermission() { return CurrentSalariesRow.updatePermission; }

        protected form = new CurrentSalariesForm(this.idPrefix);

    }
}