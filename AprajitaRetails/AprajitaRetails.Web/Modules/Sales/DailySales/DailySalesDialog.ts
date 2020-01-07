
namespace AprajitaRetails.Sales {

    @Serenity.Decorators.registerClass()
    export class DailySalesDialog extends Serenity.EntityDialog<DailySalesRow, any> {
        protected getFormKey() { return DailySalesForm.formKey; }
        protected getIdProperty() { return DailySalesRow.idProperty; }
        protected getLocalTextPrefix() { return DailySalesRow.localTextPrefix; }
        protected getNameProperty() { return DailySalesRow.nameProperty; }
        protected getService() { return DailySalesService.baseUrl; }
        protected getDeletePermission() { return DailySalesRow.deletePermission; }
        protected getInsertPermission() { return DailySalesRow.insertPermission; }
        protected getUpdatePermission() { return DailySalesRow.updatePermission; }

        protected form = new DailySalesForm(this.idPrefix);

    }
}