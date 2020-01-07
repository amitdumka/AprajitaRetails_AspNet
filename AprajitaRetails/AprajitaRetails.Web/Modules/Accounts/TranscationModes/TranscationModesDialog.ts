
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class TranscationModesDialog extends Serenity.EntityDialog<TranscationModesRow, any> {
        protected getFormKey() { return TranscationModesForm.formKey; }
        protected getIdProperty() { return TranscationModesRow.idProperty; }
        protected getLocalTextPrefix() { return TranscationModesRow.localTextPrefix; }
        protected getNameProperty() { return TranscationModesRow.nameProperty; }
        protected getService() { return TranscationModesService.baseUrl; }
        protected getDeletePermission() { return TranscationModesRow.deletePermission; }
        protected getInsertPermission() { return TranscationModesRow.insertPermission; }
        protected getUpdatePermission() { return TranscationModesRow.updatePermission; }

        protected form = new TranscationModesForm(this.idPrefix);

    }
}