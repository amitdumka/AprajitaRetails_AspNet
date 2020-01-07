namespace AprajitaRetails.PayRoll {
    export interface CurrentSalariesForm {
        EmployeeId: Serenity.IntegerEditor;
        BasicSalary: Serenity.DecimalEditor;
        SundaySalary: Serenity.DecimalEditor;
        LpRate: Serenity.DecimalEditor;
        IncentiveRate: Serenity.DecimalEditor;
        IncentiveTarget: Serenity.DecimalEditor;
        WowBillRate: Serenity.DecimalEditor;
        WowBillTarget: Serenity.DecimalEditor;
        IsSundayBillable: Serenity.BooleanEditor;
        EffectiveDate: Serenity.DateEditor;
        CloseDate: Serenity.DateEditor;
        IsEffective: Serenity.BooleanEditor;
    }

    export class CurrentSalariesForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.CurrentSalaries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CurrentSalariesForm.init)  {
                CurrentSalariesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.DateEditor;

                Q.initFormType(CurrentSalariesForm, [
                    'EmployeeId', w0,
                    'BasicSalary', w1,
                    'SundaySalary', w1,
                    'LpRate', w1,
                    'IncentiveRate', w1,
                    'IncentiveTarget', w1,
                    'WowBillRate', w1,
                    'WowBillTarget', w1,
                    'IsSundayBillable', w2,
                    'EffectiveDate', w3,
                    'CloseDate', w3,
                    'IsEffective', w2
                ]);
            }
        }
    }
}
