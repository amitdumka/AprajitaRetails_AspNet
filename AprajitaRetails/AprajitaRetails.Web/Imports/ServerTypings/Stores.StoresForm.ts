namespace AprajitaRetails.Stores {
    export interface StoresForm {
        StoreCode: Serenity.StringEditor;
        StoreName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        PinCode: Serenity.StringEditor;
        PhoneNo: Serenity.StringEditor;
        StoreManagerName: Serenity.StringEditor;
        StoreManagerPhoneNo: Serenity.StringEditor;
        PanNo: Serenity.StringEditor;
        Gstno: Serenity.StringEditor;
        NoOfEmployees: Serenity.IntegerEditor;
        OpeningDate: Serenity.DateEditor;
        ClosingDate: Serenity.DateEditor;
        Status: Serenity.BooleanEditor;
    }

    export class StoresForm extends Serenity.PrefixedContext {
        static formKey = 'Stores.Stores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StoresForm.init)  {
                StoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(StoresForm, [
                    'StoreCode', w0,
                    'StoreName', w0,
                    'Address', w0,
                    'City', w0,
                    'PinCode', w0,
                    'PhoneNo', w0,
                    'StoreManagerName', w0,
                    'StoreManagerPhoneNo', w0,
                    'PanNo', w0,
                    'Gstno', w0,
                    'NoOfEmployees', w1,
                    'OpeningDate', w2,
                    'ClosingDate', w2,
                    'Status', w3
                ]);
            }
        }
    }
}
