namespace AprajitaRetails.Voyager {
    export interface ImportSaleRegistersForm {
        InvoiceNo: Serenity.StringEditor;
        InvoiceType: Serenity.StringEditor;
        InvoiceDate: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Mrp: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BasicRate: Serenity.DecimalEditor;
        Tax: Serenity.DecimalEditor;
        RoundOff: Serenity.DecimalEditor;
        BillAmnt: Serenity.DecimalEditor;
        PaymentType: Serenity.StringEditor;
        IsConsumed: Serenity.BooleanEditor;
        ImportTime: Serenity.DateEditor;
    }

    export class ImportSaleRegistersForm extends Serenity.PrefixedContext {
        static formKey = 'Voyager.ImportSaleRegisters';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportSaleRegistersForm.init)  {
                ImportSaleRegistersForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(ImportSaleRegistersForm, [
                    'InvoiceNo', w0,
                    'InvoiceType', w0,
                    'InvoiceDate', w0,
                    'Quantity', w1,
                    'Mrp', w1,
                    'Discount', w1,
                    'BasicRate', w1,
                    'Tax', w1,
                    'RoundOff', w1,
                    'BillAmnt', w1,
                    'PaymentType', w0,
                    'IsConsumed', w2,
                    'ImportTime', w3
                ]);
            }
        }
    }
}
