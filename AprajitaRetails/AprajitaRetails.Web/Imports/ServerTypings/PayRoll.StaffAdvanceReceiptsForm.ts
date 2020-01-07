namespace AprajitaRetails.PayRoll {
    export interface StaffAdvanceReceiptsForm {
        EmployeeId: Serenity.IntegerEditor;
        ReceiptDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }

    export class StaffAdvanceReceiptsForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.StaffAdvanceReceipts';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StaffAdvanceReceiptsForm.init)  {
                StaffAdvanceReceiptsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(StaffAdvanceReceiptsForm, [
                    'EmployeeId', w0,
                    'ReceiptDate', w1,
                    'Amount', w2,
                    'PayMode', w0,
                    'Details', w3
                ]);
            }
        }
    }
}
