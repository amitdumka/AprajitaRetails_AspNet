
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class CardPaymentDetailsDialog extends Serenity.EntityDialog<CardPaymentDetailsRow, any> {
        protected getFormKey() { return CardPaymentDetailsForm.formKey; }
        protected getIdProperty() { return CardPaymentDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return CardPaymentDetailsRow.localTextPrefix; }
        protected getService() { return CardPaymentDetailsService.baseUrl; }
        protected getDeletePermission() { return CardPaymentDetailsRow.deletePermission; }
        protected getInsertPermission() { return CardPaymentDetailsRow.insertPermission; }
        protected getUpdatePermission() { return CardPaymentDetailsRow.updatePermission; }

        protected form = new CardPaymentDetailsForm(this.idPrefix);

    }
}