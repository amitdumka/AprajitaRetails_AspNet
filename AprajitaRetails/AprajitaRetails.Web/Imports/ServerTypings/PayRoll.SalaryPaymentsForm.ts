namespace AprajitaRetails.PayRoll {
    export interface SalaryPaymentsForm {
        EmployeeId: Serenity.IntegerEditor;
        SalaryMonth: Serenity.StringEditor;
        SalaryComponet: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }

    export class SalaryPaymentsForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.SalaryPayments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalaryPaymentsForm.init)  {
                SalaryPaymentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(SalaryPaymentsForm, [
                    'EmployeeId', w0,
                    'SalaryMonth', w1,
                    'SalaryComponet', w0,
                    'PaymentDate', w2,
                    'Amount', w3,
                    'PayMode', w0,
                    'Details', w1
                ]);
            }
        }
    }
}
