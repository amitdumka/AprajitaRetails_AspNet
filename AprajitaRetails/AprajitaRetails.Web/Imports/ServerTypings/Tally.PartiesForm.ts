namespace AprajitaRetails.Tally {
    export interface PartiesForm {
        PartyName: Serenity.StringEditor;
        OpenningDate: Serenity.DateEditor;
        OpenningBalance: Serenity.DecimalEditor;
        Address: Serenity.StringEditor;
        PanNo: Serenity.StringEditor;
        GstNo: Serenity.StringEditor;
        LedgerType: Serenity.IntegerEditor;
    }

    export class PartiesForm extends Serenity.PrefixedContext {
        static formKey = 'Tally.Parties';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PartiesForm.init)  {
                PartiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(PartiesForm, [
                    'PartyName', w0,
                    'OpenningDate', w1,
                    'OpenningBalance', w2,
                    'Address', w0,
                    'PanNo', w0,
                    'GstNo', w0,
                    'LedgerType', w3
                ]);
            }
        }
    }
}
