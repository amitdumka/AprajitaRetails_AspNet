namespace AprajitaRetails.Product {
    export interface BrandsForm {
        BrandName: Serenity.StringEditor;
        BCode: Serenity.StringEditor;
    }

    export class BrandsForm extends Serenity.PrefixedContext {
        static formKey = 'Product.Brands';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BrandsForm.init)  {
                BrandsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(BrandsForm, [
                    'BrandName', w0,
                    'BCode', w0
                ]);
            }
        }
    }
}
