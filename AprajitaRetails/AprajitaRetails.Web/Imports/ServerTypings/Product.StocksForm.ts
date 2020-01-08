namespace AprajitaRetails.Product {
    export interface StocksForm {
        ProductItemId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        SaleQty: Serenity.DecimalEditor;
        PurchaseQty: Serenity.DecimalEditor;
        Units: Serenity.IntegerEditor;
    }

    export class StocksForm extends Serenity.PrefixedContext {
        static formKey = 'Product.Stocks';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StocksForm.init)  {
                StocksForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(StocksForm, [
                    'ProductItemId', w0,
                    'Quantity', w1,
                    'SaleQty', w1,
                    'PurchaseQty', w1,
                    'Units', w0
                ]);
            }
        }
    }
}
