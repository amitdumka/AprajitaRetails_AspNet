namespace AprajitaRetails.Sales {
    export interface DailySalesForm {
        SaleDate: Serenity.DateEditor;
        InvNo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        CashAmount: Serenity.DecimalEditor;
        SalesmanId: Serenity.IntegerEditor;
        IsDue: Serenity.BooleanEditor;
        IsManualBill: Serenity.BooleanEditor;
        IsTailoringBill: Serenity.BooleanEditor;
        Remarks: Serenity.StringEditor;
        IsSaleReturn: Serenity.BooleanEditor;
    }

    export class DailySalesForm extends Serenity.PrefixedContext {
        static formKey = 'Sales.DailySales';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DailySalesForm.init)  {
                DailySalesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(DailySalesForm, [
                    'SaleDate', w0,
                    'InvNo', w1,
                    'Amount', w2,
                    'PayMode', w3,
                    'CashAmount', w2,
                    'SalesmanId', w3,
                    'IsDue', w4,
                    'IsManualBill', w4,
                    'IsTailoringBill', w4,
                    'Remarks', w1,
                    'IsSaleReturn', w4
                ]);
            }
        }
    }
}
