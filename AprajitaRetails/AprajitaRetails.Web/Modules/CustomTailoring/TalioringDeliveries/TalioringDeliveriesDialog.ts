
namespace AprajitaRetails.CustomTailoring {

    @Serenity.Decorators.registerClass()
    export class TalioringDeliveriesDialog extends Serenity.EntityDialog<TalioringDeliveriesRow, any> {
        protected getFormKey() { return TalioringDeliveriesForm.formKey; }
        protected getIdProperty() { return TalioringDeliveriesRow.idProperty; }
        protected getLocalTextPrefix() { return TalioringDeliveriesRow.localTextPrefix; }
        protected getNameProperty() { return TalioringDeliveriesRow.nameProperty; }
        protected getService() { return TalioringDeliveriesService.baseUrl; }
        protected getDeletePermission() { return TalioringDeliveriesRow.deletePermission; }
        protected getInsertPermission() { return TalioringDeliveriesRow.insertPermission; }
        protected getUpdatePermission() { return TalioringDeliveriesRow.updatePermission; }

        protected form = new TalioringDeliveriesForm(this.idPrefix);

    }
}