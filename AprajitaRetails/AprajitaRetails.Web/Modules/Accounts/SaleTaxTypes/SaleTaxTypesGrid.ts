
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class SaleTaxTypesGrid extends Serenity.EntityGrid<SaleTaxTypesRow, any> {
        protected getColumnsKey() { return 'Accounts.SaleTaxTypes'; }
        protected getDialogType() { return SaleTaxTypesDialog; }
        protected getIdProperty() { return SaleTaxTypesRow.idProperty; }
        protected getInsertPermission() { return SaleTaxTypesRow.insertPermission; }
        protected getLocalTextPrefix() { return SaleTaxTypesRow.localTextPrefix; }
        protected getService() { return SaleTaxTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}