namespace AprajitaRetails.PayRoll {
    export interface AttendancesForm {
        EmployeeId: Serenity.IntegerEditor;
        AttDate: Serenity.DateEditor;
        EntryTime: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }

    export class AttendancesForm extends Serenity.PrefixedContext {
        static formKey = 'PayRoll.Attendances';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AttendancesForm.init)  {
                AttendancesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(AttendancesForm, [
                    'EmployeeId', w0,
                    'AttDate', w1,
                    'EntryTime', w2,
                    'Status', w0,
                    'Remarks', w2
                ]);
            }
        }
    }
}
