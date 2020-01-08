namespace AprajitaRetails.Stores {
    export interface StoresRow {
        StoreId?: number;
        StoreCode?: string;
        StoreName?: string;
        Address?: string;
        City?: string;
        PinCode?: string;
        PhoneNo?: string;
        StoreManagerName?: string;
        StoreManagerPhoneNo?: string;
        PanNo?: string;
        Gstno?: string;
        NoOfEmployees?: number;
        OpeningDate?: string;
        ClosingDate?: string;
        Status?: boolean;
    }

    export namespace StoresRow {
        export const idProperty = 'StoreId';
        export const nameProperty = 'StoreCode';
        export const localTextPrefix = 'Stores.Stores';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            StoreId = "StoreId",
            StoreCode = "StoreCode",
            StoreName = "StoreName",
            Address = "Address",
            City = "City",
            PinCode = "PinCode",
            PhoneNo = "PhoneNo",
            StoreManagerName = "StoreManagerName",
            StoreManagerPhoneNo = "StoreManagerPhoneNo",
            PanNo = "PanNo",
            Gstno = "Gstno",
            NoOfEmployees = "NoOfEmployees",
            OpeningDate = "OpeningDate",
            ClosingDate = "ClosingDate",
            Status = "Status"
        }
    }
}
