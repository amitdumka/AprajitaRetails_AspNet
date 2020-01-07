
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class PaySlipsDialog extends Serenity.EntityDialog<PaySlipsRow, any> {
        protected getFormKey() { return PaySlipsForm.formKey; }
        protected getIdProperty() { return PaySlipsRow.idProperty; }
        protected getLocalTextPrefix() { return PaySlipsRow.localTextPrefix; }
        protected getNameProperty() { return PaySlipsRow.nameProperty; }
        protected getService() { return PaySlipsService.baseUrl; }
        protected getDeletePermission() { return PaySlipsRow.deletePermission; }
        protected getInsertPermission() { return PaySlipsRow.insertPermission; }
        protected getUpdatePermission() { return PaySlipsRow.updatePermission; }

        protected form = new PaySlipsForm(this.idPrefix);

    }
}