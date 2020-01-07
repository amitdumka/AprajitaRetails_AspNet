
namespace AprajitaRetails.CustomTailoring {

    @Serenity.Decorators.registerClass()
    export class TalioringBookingsDialog extends Serenity.EntityDialog<TalioringBookingsRow, any> {
        protected getFormKey() { return TalioringBookingsForm.formKey; }
        protected getIdProperty() { return TalioringBookingsRow.idProperty; }
        protected getLocalTextPrefix() { return TalioringBookingsRow.localTextPrefix; }
        protected getNameProperty() { return TalioringBookingsRow.nameProperty; }
        protected getService() { return TalioringBookingsService.baseUrl; }
        protected getDeletePermission() { return TalioringBookingsRow.deletePermission; }
        protected getInsertPermission() { return TalioringBookingsRow.insertPermission; }
        protected getUpdatePermission() { return TalioringBookingsRow.updatePermission; }

        protected form = new TalioringBookingsForm(this.idPrefix);

    }
}