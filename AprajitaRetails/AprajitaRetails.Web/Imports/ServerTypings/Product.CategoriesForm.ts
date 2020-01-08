namespace AprajitaRetails.Product {
    export interface CategoriesForm {
        CategoryName: Serenity.StringEditor;
        IsPrimaryCategory: Serenity.BooleanEditor;
        IsSecondaryCategory: Serenity.BooleanEditor;
    }

    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Product.Categories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesForm.init)  {
                CategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.BooleanEditor;

                Q.initFormType(CategoriesForm, [
                    'CategoryName', w0,
                    'IsPrimaryCategory', w1,
                    'IsSecondaryCategory', w1
                ]);
            }
        }
    }
}
