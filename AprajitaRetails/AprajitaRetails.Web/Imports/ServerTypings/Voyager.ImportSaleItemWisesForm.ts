namespace AprajitaRetails.Voyager {
    export interface ImportSaleItemWisesForm {
        InvoiceDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceType: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ItemDesc: Serenity.StringEditor;
        HsnCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        StyleCode: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Mrp: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BasicRate: Serenity.DecimalEditor;
        Tax: Serenity.DecimalEditor;
        Sgst: Serenity.DecimalEditor;
        Cgst: Serenity.DecimalEditor;
        LineTotal: Serenity.DecimalEditor;
        RoundOff: Serenity.DecimalEditor;
        BillAmnt: Serenity.DecimalEditor;
        PaymentType: Serenity.StringEditor;
        Saleman: Serenity.StringEditor;
        IsDataConsumed: Serenity.BooleanEditor;
        ImportTime: Serenity.DateEditor;
    }

    export class ImportSaleItemWisesForm extends Serenity.PrefixedContext {
        static formKey = 'Voyager.ImportSaleItemWises';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportSaleItemWisesForm.init)  {
                ImportSaleItemWisesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ImportSaleItemWisesForm, [
                    'InvoiceDate', w0,
                    'InvoiceNo', w1,
                    'InvoiceType', w1,
                    'BrandName', w1,
                    'ProductName', w1,
                    'ItemDesc', w1,
                    'HsnCode', w1,
                    'Barcode', w1,
                    'StyleCode', w1,
                    'Quantity', w2,
                    'Mrp', w2,
                    'Discount', w2,
                    'BasicRate', w2,
                    'Tax', w2,
                    'Sgst', w2,
                    'Cgst', w2,
                    'LineTotal', w2,
                    'RoundOff', w2,
                    'BillAmnt', w2,
                    'PaymentType', w1,
                    'Saleman', w1,
                    'IsDataConsumed', w3,
                    'ImportTime', w0
                ]);
            }
        }
    }
}
