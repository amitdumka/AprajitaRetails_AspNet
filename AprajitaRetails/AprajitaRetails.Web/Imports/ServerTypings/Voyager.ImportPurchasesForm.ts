namespace AprajitaRetails.Voyager {
    export interface ImportPurchasesForm {
        GrnNo: Serenity.StringEditor;
        GrnDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        SupplierName: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        StyleCode: Serenity.StringEditor;
        ItemDesc: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Mrp: Serenity.DecimalEditor;
        MrpValue: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
        CostValue: Serenity.DecimalEditor;
        TaxAmt: Serenity.DecimalEditor;
        IsVatBill: Serenity.BooleanEditor;
        IsLocal: Serenity.BooleanEditor;
        IsDataConsumed: Serenity.BooleanEditor;
        ImportTime: Serenity.DateEditor;
    }

    export class ImportPurchasesForm extends Serenity.PrefixedContext {
        static formKey = 'Voyager.ImportPurchases';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ImportPurchasesForm.init)  {
                ImportPurchasesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(ImportPurchasesForm, [
                    'GrnNo', w0,
                    'GrnDate', w1,
                    'InvoiceNo', w0,
                    'InvoiceDate', w1,
                    'SupplierName', w0,
                    'Barcode', w0,
                    'ProductName', w0,
                    'StyleCode', w0,
                    'ItemDesc', w0,
                    'Quantity', w2,
                    'Mrp', w2,
                    'MrpValue', w2,
                    'Cost', w2,
                    'CostValue', w2,
                    'TaxAmt', w2,
                    'IsVatBill', w3,
                    'IsLocal', w3,
                    'IsDataConsumed', w3,
                    'ImportTime', w1
                ]);
            }
        }
    }
}
