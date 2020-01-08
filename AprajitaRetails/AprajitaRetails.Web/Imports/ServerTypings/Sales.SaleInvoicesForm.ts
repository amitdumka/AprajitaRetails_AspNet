namespace AprajitaRetails.Sales {
    export interface SaleInvoicesForm {
        CustomerId: Serenity.IntegerEditor;
        OnDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        TotalItems: Serenity.IntegerEditor;
        TotalQty: Serenity.DecimalEditor;
        TotalBillAmount: Serenity.DecimalEditor;
        TotalDiscountAmount: Serenity.DecimalEditor;
        RoundOffAmount: Serenity.DecimalEditor;
        TotalTaxAmount: Serenity.DecimalEditor;
    }

    export class SaleInvoicesForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.SaleInvoices';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SaleInvoicesForm.init)  {
                SaleInvoicesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(SaleInvoicesForm, [
                    'CustomerId', w0,
                    'OnDate', w1,
                    'InvoiceNo', w2,
                    'TotalItems', w0,
                    'TotalQty', w3,
                    'TotalBillAmount', w3,
                    'TotalDiscountAmount', w3,
                    'RoundOffAmount', w3,
                    'TotalTaxAmount', w3
                ]);
            }
        }
    }
}
