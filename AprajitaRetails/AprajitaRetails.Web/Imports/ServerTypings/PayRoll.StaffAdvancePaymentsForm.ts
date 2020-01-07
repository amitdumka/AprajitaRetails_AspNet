namespace AprajitaRetails.PayRoll {
    export interface StaffAdvancePaymentsForm {
        EmployeeId: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }

    export class StaffAdvancePaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.StaffAdvancePayments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StaffAdvancePaymentsForm.init)  {
                StaffAdvancePaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(StaffAdvancePaymentsForm, [
                    'EmployeeId', w0,
                    'PaymentDate', w1,
                    'Amount', w2,
                    'PayMode', w0,
                    'Details', w3
                ]);
            }
        }
    }
}
