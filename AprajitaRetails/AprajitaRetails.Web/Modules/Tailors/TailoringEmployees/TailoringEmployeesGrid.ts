
namespace AprajitaRetails.Tailors {

    @Serenity.Decorators.registerClass()
    export class TailoringEmployeesGrid extends Serenity.EntityGrid<TailoringEmployeesRow, any> {
        protected getColumnsKey() { return 'Tailors.TailoringEmployees'; }
        protected getDialogType() { return TailoringEmployeesDialog; }
        protected getIdProperty() { return TailoringEmployeesRow.idProperty; }
        protected getInsertPermission() { return TailoringEmployeesRow.insertPermission; }
        protected getLocalTextPrefix() { return TailoringEmployeesRow.localTextPrefix; }
        protected getService() { return TailoringEmployeesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}