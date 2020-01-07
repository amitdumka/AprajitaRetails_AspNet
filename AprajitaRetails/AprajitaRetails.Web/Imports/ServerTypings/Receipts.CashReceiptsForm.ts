namespace AprajitaRetails.Receipts {
    export interface CashReceiptsForm {
        InwardDate: Serenity.DateEditor;
        TranscationModeId: Serenity.IntegerEditor;
        ReceiptFrom: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        SlipNo: Serenity.StringEditor;
    }

    export class CashReceiptsForm extends Serenity.PrefixedContext {
        static formKey = 'Receipts.CashReceipts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CashReceiptsForm.init)  {
                CashReceiptsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(CashReceiptsForm, [
                    'InwardDate', w0,
                    'TranscationModeId', w1,
                    'ReceiptFrom', w2,
                    'Amount', w3,
                    'SlipNo', w2
                ]);
            }
        }
    }
}
