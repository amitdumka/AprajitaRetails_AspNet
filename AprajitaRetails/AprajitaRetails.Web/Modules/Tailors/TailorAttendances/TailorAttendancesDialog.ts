
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailorAttendancesDialog extends Serenity.EntityDialog<TailorAttendancesRow, any> {
        protected getFormKey() { return TailorAttendancesForm.formKey; }
        protected getIdProperty() { return TailorAttendancesRow.idProperty; }
        protected getLocalTextPrefix() { return TailorAttendancesRow.localTextPrefix; }
        protected getNameProperty() { return TailorAttendancesRow.nameProperty; }
        protected getService() { return TailorAttendancesService.baseUrl; }
        protected getDeletePermission() { return TailorAttendancesRow.deletePermission; }
        protected getInsertPermission() { return TailorAttendancesRow.insertPermission; }
        protected getUpdatePermission() { return TailorAttendancesRow.updatePermission; }

        protected form = new TailorAttendancesForm(this.idPrefix);

    }
}