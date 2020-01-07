namespace AprajitaRetails.Tailors {
    export interface TailoringStaffAdvanceReceiptsForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        ReceiptDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }

    export class TailoringStaffAdvanceReceiptsForm extends Serenity.PrefixedContext {
        static formKey = 'Tailors.TailoringStaffAdvanceReceipts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TailoringStaffAdvanceReceiptsForm.init)  {
                TailoringStaffAdvanceReceiptsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(TailoringStaffAdvanceReceiptsForm, [
                    'TailoringEmployeeId', w0,
                    'ReceiptDate', w1,
                    'Amount', w2,
                    'PayMode', w0,
                    'Details', w3
                ]);
            }
        }
    }
}
