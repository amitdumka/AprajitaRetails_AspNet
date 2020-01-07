namespace AprajitaRetails.PayRoll {
    export interface PaySlipsForm {
        OnDate: Serenity.DateEditor;
        Month: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
        CurrentSalaryId: Serenity.IntegerEditor;
        BasicSalary: Serenity.DecimalEditor;
        NoOfDaysPresent: Serenity.IntegerEditor;
        TotalSale: Serenity.DecimalEditor;
        SaleIncentive: Serenity.DecimalEditor;
        WowBillAmount: Serenity.DecimalEditor;
        WowBillIncentive: Serenity.DecimalEditor;
        LastPcsAmount: Serenity.DecimalEditor;
        LastPCsIncentive: Serenity.DecimalEditor;
        OthersIncentive: Serenity.DecimalEditor;
        GrossSalary: Serenity.DecimalEditor;
        StandardDeductions: Serenity.DecimalEditor;
        TdsDeductions: Serenity.DecimalEditor;
        PfDeductions: Serenity.DecimalEditor;
        AdvanceDeducations: Serenity.DecimalEditor;
        OtherDeductions: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
    }

    export class PaySlipsForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.PaySlips';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaySlipsForm.init)  {
                PaySlipsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(PaySlipsForm, [
                    'OnDate', w0,
                    'Month', w1,
                    'Year', w1,
                    'EmployeeId', w1,
                    'CurrentSalaryId', w1,
                    'BasicSalary', w2,
                    'NoOfDaysPresent', w1,
                    'TotalSale', w2,
                    'SaleIncentive', w2,
                    'WowBillAmount', w2,
                    'WowBillIncentive', w2,
                    'LastPcsAmount', w2,
                    'LastPCsIncentive', w2,
                    'OthersIncentive', w2,
                    'GrossSalary', w2,
                    'StandardDeductions', w2,
                    'TdsDeductions', w2,
                    'PfDeductions', w2,
                    'AdvanceDeducations', w2,
                    'OtherDeductions', w2,
                    'Remarks', w3
                ]);
            }
        }
    }
}
