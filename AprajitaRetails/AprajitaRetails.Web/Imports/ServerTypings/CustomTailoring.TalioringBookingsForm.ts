namespace AprajitaRetails.CustomTailoring {
    export interface TalioringBookingsForm {
        BookingDate: Serenity.DateEditor;
        CustName: Serenity.StringEditor;
        DeliveryDate: Serenity.DateEditor;
        TryDate: Serenity.DateEditor;
        BookingSlipNo: Serenity.StringEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalQty: Serenity.IntegerEditor;
        ShirtQty: Serenity.IntegerEditor;
        ShirtPrice: Serenity.DecimalEditor;
        PantQty: Serenity.IntegerEditor;
        PantPrice: Serenity.DecimalEditor;
        CoatQty: Serenity.IntegerEditor;
        CoatPrice: Serenity.DecimalEditor;
        KurtaQty: Serenity.IntegerEditor;
        KurtaPrice: Serenity.DecimalEditor;
        BundiQty: Serenity.IntegerEditor;
        BundiPrice: Serenity.DecimalEditor;
        Others: Serenity.IntegerEditor;
        OthersPrice: Serenity.DecimalEditor;
        IsDelivered: Serenity.BooleanEditor;
    }

    export class TalioringBookingsForm extends Serenity.PrefixedContext {
        static formKey = 'CustomTailoring.TalioringBookings';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TalioringBookingsForm.init)  {
                TalioringBookingsForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(TalioringBookingsForm, [
                    'BookingDate', w0,
                    'CustName', w1,
                    'DeliveryDate', w0,
                    'TryDate', w0,
                    'BookingSlipNo', w1,
                    'TotalAmount', w2,
                    'TotalQty', w3,
                    'ShirtQty', w3,
                    'ShirtPrice', w2,
                    'PantQty', w3,
                    'PantPrice', w2,
                    'CoatQty', w3,
                    'CoatPrice', w2,
                    'KurtaQty', w3,
                    'KurtaPrice', w2,
                    'BundiQty', w3,
                    'BundiPrice', w2,
                    'Others', w3,
                    'OthersPrice', w2,
                    'IsDelivered', w4
                ]);
            }
        }
    }
}
