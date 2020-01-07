namespace AprajitaRetails.CustomTailoring {
    export interface TalioringBookingsRow {
        TalioringBookingId?: number;
        BookingDate?: string;
        CustName?: string;
        DeliveryDate?: string;
        TryDate?: string;
        BookingSlipNo?: string;
        TotalAmount?: number;
        TotalQty?: number;
        ShirtQty?: number;
        ShirtPrice?: number;
        PantQty?: number;
        PantPrice?: number;
        CoatQty?: number;
        CoatPrice?: number;
        KurtaQty?: number;
        KurtaPrice?: number;
        BundiQty?: number;
        BundiPrice?: number;
        Others?: number;
        OthersPrice?: number;
        IsDelivered?: boolean;
    }

    export namespace TalioringBookingsRow {
        export const idProperty = 'TalioringBookingId';
        export const nameProperty = 'CustName';
        export const localTextPrefix = 'CustomTailoring.TalioringBookings';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TalioringBookingId = "TalioringBookingId",
            BookingDate = "BookingDate",
            CustName = "CustName",
            DeliveryDate = "DeliveryDate",
            TryDate = "TryDate",
            BookingSlipNo = "BookingSlipNo",
            TotalAmount = "TotalAmount",
            TotalQty = "TotalQty",
            ShirtQty = "ShirtQty",
            ShirtPrice = "ShirtPrice",
            PantQty = "PantQty",
            PantPrice = "PantPrice",
            CoatQty = "CoatQty",
            CoatPrice = "CoatPrice",
            KurtaQty = "KurtaQty",
            KurtaPrice = "KurtaPrice",
            BundiQty = "BundiQty",
            BundiPrice = "BundiPrice",
            Others = "Others",
            OthersPrice = "OthersPrice",
            IsDelivered = "IsDelivered"
        }
    }
}
