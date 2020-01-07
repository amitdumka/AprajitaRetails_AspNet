
namespace AprajitaRetails.Banking {

    @Serenity.Decorators.registerClass()
    export class ChequesLogsDialog extends Serenity.EntityDialog<ChequesLogsRow, any> {
        protected getFormKey() { return ChequesLogsForm.formKey; }
        protected getIdProperty() { return ChequesLogsRow.idProperty; }
        protected getLocalTextPrefix() { return ChequesLogsRow.localTextPrefix; }
        protected getNameProperty() { return ChequesLogsRow.nameProperty; }
        protected getService() { return ChequesLogsService.baseUrl; }
        protected getDeletePermission() { return ChequesLogsRow.deletePermission; }
        protected getInsertPermission() { return ChequesLogsRow.insertPermission; }
        protected getUpdatePermission() { return ChequesLogsRow.updatePermission; }

        protected form = new ChequesLogsForm(this.idPrefix);

    }
}