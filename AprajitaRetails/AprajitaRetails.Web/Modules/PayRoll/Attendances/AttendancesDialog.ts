
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class AttendancesDialog extends Serenity.EntityDialog<AttendancesRow, any> {
        protected getFormKey() { return AttendancesForm.formKey; }
        protected getIdProperty() { return AttendancesRow.idProperty; }
        protected getLocalTextPrefix() { return AttendancesRow.localTextPrefix; }
        protected getNameProperty() { return AttendancesRow.nameProperty; }
        protected getService() { return AttendancesService.baseUrl; }
        protected getDeletePermission() { return AttendancesRow.deletePermission; }
        protected getInsertPermission() { return AttendancesRow.insertPermission; }
        protected getUpdatePermission() { return AttendancesRow.updatePermission; }

        protected form = new AttendancesForm(this.idPrefix);

    }
}