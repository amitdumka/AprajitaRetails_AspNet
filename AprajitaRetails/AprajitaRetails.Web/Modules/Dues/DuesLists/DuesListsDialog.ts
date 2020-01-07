
namespace AprajitaRetails.Dues {

    @Serenity.Decorators.registerClass()
    export class DuesListsDialog extends Serenity.EntityDialog<DuesListsRow, any> {
        protected getFormKey() { return DuesListsForm.formKey; }
        protected getIdProperty() { return DuesListsRow.idProperty; }
        protected getLocalTextPrefix() { return DuesListsRow.localTextPrefix; }
        protected getService() { return DuesListsService.baseUrl; }
        protected getDeletePermission() { return DuesListsRow.deletePermission; }
        protected getInsertPermission() { return DuesListsRow.insertPermission; }
        protected getUpdatePermission() { return DuesListsRow.updatePermission; }

        protected form = new DuesListsForm(this.idPrefix);

    }
}