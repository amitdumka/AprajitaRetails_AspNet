namespace AprajitaRetails.Product {
    export interface ProductItemsForm {
        Barcode: Serenity.StringEditor;
        BrandId: Serenity.IntegerEditor;
        StyleCode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ItemDesc: Serenity.StringEditor;
        Categorys: Serenity.IntegerEditor;
        Mrp: Serenity.DecimalEditor;
        TaxRate: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
        Size: Serenity.IntegerEditor;
        Units: Serenity.IntegerEditor;
        MainCategoryCategoryId: Serenity.IntegerEditor;
        ProductCategoryCategoryId: Serenity.IntegerEditor;
        ProductTypeCategoryId: Serenity.IntegerEditor;
    }

    export class ProductItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Product.ProductItems';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductItemsForm.init)  {
                ProductItemsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ProductItemsForm, [
                    'Barcode', w0,
                    'BrandId', w1,
                    'StyleCode', w0,
                    'ProductName', w0,
                    'ItemDesc', w0,
                    'Categorys', w1,
                    'Mrp', w2,
                    'TaxRate', w2,
                    'Cost', w2,
                    'Size', w1,
                    'Units', w1,
                    'MainCategoryCategoryId', w1,
                    'ProductCategoryCategoryId', w1,
                    'ProductTypeCategoryId', w1
                ]);
            }
        }
    }
}
