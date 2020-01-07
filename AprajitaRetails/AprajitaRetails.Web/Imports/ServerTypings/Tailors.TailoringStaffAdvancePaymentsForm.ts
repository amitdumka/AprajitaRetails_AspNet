namespace AprajitaRetails.Tailors {
    export interface TailoringStaffAdvancePaymentsForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }

    export class TailoringStaffAdvancePaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'Tailors.TailoringStaffAdvancePayments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TailoringStaffAdvancePaymentsForm.init)  {
                TailoringStaffAdvancePaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(TailoringStaffAdvancePaymentsForm, [
                    'TailoringEmployeeId', w0,
                    'PaymentDate', w1,
                    'Amount', w2,
                    'PayMode', w0,
                    'Details', w3
                ]);
            }
        }
    }
}
