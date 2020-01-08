
namespace AprajitaRetails.Tally {

    @Serenity.Decorators.registerClass()
    export class PartiesDialog extends Serenity.EntityDialog<PartiesRow, any> {
        protected getFormKey() { return PartiesForm.formKey; }
        protected getIdProperty() { return PartiesRow.idProperty; }
        protected getLocalTextPrefix() { return PartiesRow.localTextPrefix; }
        protected getNameProperty() { return PartiesRow.nameProperty; }
        protected getService() { return PartiesService.baseUrl; }
        protected getDeletePermission() { return PartiesRow.deletePermission; }
        protected getInsertPermission() { return PartiesRow.insertPermission; }
        protected getUpdatePermission() { return PartiesRow.updatePermission; }

        protected form = new PartiesForm(this.idPrefix);

    }
}