namespace AprajitaRetails.Purchases {
    export interface ProductPurchasesForm {
        InWardNo: Serenity.StringEditor;
        InWardDate: Serenity.DateEditor;
        PurchaseDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        TotalQty: Serenity.DecimalEditor;
        TotalBasicAmount: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        SupplierId: Serenity.IntegerEditor;
        IsPaid: Serenity.BooleanEditor;
    }

    export class ProductPurchasesForm extends Serenity.PrefixedContext {
        static formKey = 'Purchases.ProductPurchases';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductPurchasesForm.init)  {
                ProductPurchasesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(ProductPurchasesForm, [
                    'InWardNo', w0,
                    'InWardDate', w1,
                    'PurchaseDate', w1,
                    'InvoiceNo', w0,
                    'TotalQty', w2,
                    'TotalBasicAmount', w2,
                    'ShippingCost', w2,
                    'TotalTax', w2,
                    'TotalAmount', w2,
                    'Remarks', w0,
                    'SupplierId', w3,
                    'IsPaid', w4
                ]);
            }
        }
    }
}
