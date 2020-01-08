namespace AprajitaRetails.Sales {
    export interface SaleItemsForm {
        SaleInvoiceId: Serenity.IntegerEditor;
        ProductItemId: Serenity.IntegerEditor;
        BarCode: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Units: Serenity.IntegerEditor;
        Mrp: Serenity.DecimalEditor;
        BasicAmount: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        SaleTaxTypeId: Serenity.IntegerEditor;
        BillAmount: Serenity.DecimalEditor;
        SalesmanId: Serenity.IntegerEditor;
    }

    export class SaleItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SaleItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SaleItemsForm.init)  {
                SaleItemsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(SaleItemsForm, [
                    'SaleInvoiceId', w0,
                    'ProductItemId', w0,
                    'BarCode', w1,
                    'Qty', w2,
                    'Units', w0,
                    'Mrp', w2,
                    'BasicAmount', w2,
                    'Discount', w2,
                    'TaxAmount', w2,
                    'SaleTaxTypeId', w0,
                    'BillAmount', w2,
                    'SalesmanId', w0
                ]);
            }
        }
    }
}
