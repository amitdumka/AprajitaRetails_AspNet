
namespace AprajitaRetails.PayRoll {

    @Serenity.Decorators.registerClass()
    export class PaySlipsGrid extends Serenity.EntityGrid<PaySlipsRow, any> {
        protected getColumnsKey() { return 'PayRoll.PaySlips'; }
        protected getDialogType() { return PaySlipsDialog; }
        protected getIdProperty() { return PaySlipsRow.idProperty; }
        protected getInsertPermission() { return PaySlipsRow.insertPermission; }
        protected getLocalTextPrefix() { return PaySlipsRow.localTextPrefix; }
        protected getService() { return PaySlipsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}