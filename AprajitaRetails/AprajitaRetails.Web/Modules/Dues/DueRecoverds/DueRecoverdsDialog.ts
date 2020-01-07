
namespace AprajitaRetails.Dues {

    @Serenity.Decorators.registerClass()
    export class DueRecoverdsDialog extends Serenity.EntityDialog<DueRecoverdsRow, any> {
        protected getFormKey() { return DueRecoverdsForm.formKey; }
        protected getIdProperty() { return DueRecoverdsRow.idProperty; }
        protected getLocalTextPrefix() { return DueRecoverdsRow.localTextPrefix; }
        protected getNameProperty() { return DueRecoverdsRow.nameProperty; }
        protected getService() { return DueRecoverdsService.baseUrl; }
        protected getDeletePermission() { return DueRecoverdsRow.deletePermission; }
        protected getInsertPermission() { return DueRecoverdsRow.insertPermission; }
        protected getUpdatePermission() { return DueRecoverdsRow.updatePermission; }

        protected form = new DueRecoverdsForm(this.idPrefix);

    }
}