namespace AprajitaRetails.Tailors {
    export interface TailorAttendancesForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        AttDate: Serenity.DateEditor;
        EntryTime: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }

    export class TailorAttendancesForm extends Serenity.PrefixedContext {
        static formKey = 'Tailors.TailorAttendances';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TailorAttendancesForm.init)  {
                TailorAttendancesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;

                Q.initFormType(TailorAttendancesForm, [
                    'TailoringEmployeeId', w0,
                    'AttDate', w1,
                    'EntryTime', w2,
                    'Status', w0,
                    'Remarks', w2
                ]);
            }
        }
    }
}
