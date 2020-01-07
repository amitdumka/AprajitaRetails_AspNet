
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringStaffAdvanceReceiptsDialog extends Serenity.EntityDialog<TailoringStaffAdvanceReceiptsRow, any> {
        protected getFormKey() { return TailoringStaffAdvanceReceiptsForm.formKey; }
        protected getIdProperty() { return TailoringStaffAdvanceReceiptsRow.idProperty; }
        protected getLocalTextPrefix() { return TailoringStaffAdvanceReceiptsRow.localTextPrefix; }
        protected getNameProperty() { return TailoringStaffAdvanceReceiptsRow.nameProperty; }
        protected getService() { return TailoringStaffAdvanceReceiptsService.baseUrl; }
        protected getDeletePermission() { return TailoringStaffAdvanceReceiptsRow.deletePermission; }
        protected getInsertPermission() { return TailoringStaffAdvanceReceiptsRow.insertPermission; }
        protected getUpdatePermission() { return TailoringStaffAdvanceReceiptsRow.updatePermission; }

        protected form = new TailoringStaffAdvanceReceiptsForm(this.idPrefix);

    }
}