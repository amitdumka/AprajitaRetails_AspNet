namespace AprajitaRetails.Product {
    export interface SuppliersForm {
        SuppilerName: Serenity.StringEditor;
        Warehouse: Serenity.StringEditor;
    }

    export class SuppliersForm extends Serenity.PrefixedContext {
        static formKey = 'Product.Suppliers';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SuppliersForm.init)  {
                SuppliersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SuppliersForm, [
                    'SuppilerName', w0,
                    'Warehouse', w0
                ]);
            }
        }
    }
}
