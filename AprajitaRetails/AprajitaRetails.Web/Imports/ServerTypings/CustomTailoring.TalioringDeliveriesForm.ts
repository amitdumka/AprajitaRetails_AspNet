namespace AprajitaRetails.CustomTailoring {
    export interface TalioringDeliveriesForm {
        DeliveryDate: Serenity.DateEditor;
        TalioringBookingId: Serenity.IntegerEditor;
        InvNo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
    }

    export class TalioringDeliveriesForm extends Serenity.PrefixedContext {
        static formKey = 'CustomTailoring.TalioringDeliveries';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TalioringDeliveriesForm.init)  {
                TalioringDeliveriesForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.StringEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(TalioringDeliveriesForm, [
                    'DeliveryDate', w0,
                    'TalioringBookingId', w1,
                    'InvNo', w2,
                    'Amount', w3,
                    'Remarks', w2
                ]);
            }
        }
    }
}
