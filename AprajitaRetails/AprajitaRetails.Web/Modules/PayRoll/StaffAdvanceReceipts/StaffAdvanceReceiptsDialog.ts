
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class StaffAdvanceReceiptsDialog extends Serenity.EntityDialog<StaffAdvanceReceiptsRow, any> {
        protected getFormKey() { return StaffAdvanceReceiptsForm.formKey; }
        protected getIdProperty() { return StaffAdvanceReceiptsRow.idProperty; }
        protected getLocalTextPrefix() { return StaffAdvanceReceiptsRow.localTextPrefix; }
        protected getNameProperty() { return StaffAdvanceReceiptsRow.nameProperty; }
        protected getService() { return StaffAdvanceReceiptsService.baseUrl; }
        protected getDeletePermission() { return StaffAdvanceReceiptsRow.deletePermission; }
        protected getInsertPermission() { return StaffAdvanceReceiptsRow.insertPermission; }
        protected getUpdatePermission() { return StaffAdvanceReceiptsRow.updatePermission; }

        protected form = new StaffAdvanceReceiptsForm(this.idPrefix);

    }
}