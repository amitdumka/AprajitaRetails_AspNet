namespace AprajitaRetails.Purchases {
    export interface PurchaseItemsForm {
        ProductPurchaseId: Serenity.IntegerEditor;
        ProductItemId: Serenity.IntegerEditor;
        Barcode: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Unit: Serenity.IntegerEditor;
        Cost: Serenity.DecimalEditor;
        TaxAmout: Serenity.DecimalEditor;
        PurchaseTaxTypeId: Serenity.IntegerEditor;
        CostValue: Serenity.DecimalEditor;
    }

    export class PurchaseItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Purchases.PurchaseItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseItemsForm.init)  {
                PurchaseItemsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(PurchaseItemsForm, [
                    'ProductPurchaseId', w0,
                    'ProductItemId', w0,
                    'Barcode', w1,
                    'Qty', w2,
                    'Unit', w0,
                    'Cost', w2,
                    'TaxAmout', w2,
                    'PurchaseTaxTypeId', w0,
                    'CostValue', w2
                ]);
            }
        }
    }
}
