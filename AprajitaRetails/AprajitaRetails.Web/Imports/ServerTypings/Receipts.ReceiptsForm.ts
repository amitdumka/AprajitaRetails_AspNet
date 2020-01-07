namespace AprajitaRetails.Receipts {
    export interface ReceiptsForm {
        RecieptDate: Serenity.DateEditor;
        ReceiptFrom: Serenity.StringEditor;
        PayMode: Serenity.IntegerEditor;
        ReceiptDetails: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        RecieptSlipNo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }

    export class ReceiptsForm extends Serenity.PrefixedContext {
        static formKey = 'Receipts.Receipts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ReceiptsForm.init)  {
                ReceiptsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ReceiptsForm, [
                    'RecieptDate', w0,
                    'ReceiptFrom', w1,
                    'PayMode', w2,
                    'ReceiptDetails', w1,
                    'Amount', w3,
                    'RecieptSlipNo', w1,
                    'Remarks', w1
                ]);
            }
        }
    }
}
