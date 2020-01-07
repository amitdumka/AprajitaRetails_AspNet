namespace AprajitaRetails.CustomTailoring {
    export interface TalioringDeliveriesRow {
        TalioringDeliveryId?: number;
        DeliveryDate?: string;
        TalioringBookingId?: number;
        InvNo?: string;
        Amount?: number;
        Remarks?: string;
        TalioringBookingBookingDate?: string;
        TalioringBookingCustName?: string;
        TalioringBookingDeliveryDate?: string;
        TalioringBookingTryDate?: string;
        TalioringBookingBookingSlipNo?: string;
        TalioringBookingTotalAmount?: number;
        TalioringBookingTotalQty?: number;
        TalioringBookingShirtQty?: number;
        TalioringBookingShirtPrice?: number;
        TalioringBookingPantQty?: number;
        TalioringBookingPantPrice?: number;
        TalioringBookingCoatQty?: number;
        TalioringBookingCoatPrice?: number;
        TalioringBookingKurtaQty?: number;
        TalioringBookingKurtaPrice?: number;
        TalioringBookingBundiQty?: number;
        TalioringBookingBundiPrice?: number;
        TalioringBookingOthers?: number;
        TalioringBookingOthersPrice?: number;
        TalioringBookingIsDelivered?: boolean;
    }

    export namespace TalioringDeliveriesRow {
        export const idProperty = 'TalioringDeliveryId';
        export const nameProperty = 'InvNo';
        export const localTextPrefix = 'CustomTailoring.TalioringDeliveries';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TalioringDeliveryId = "TalioringDeliveryId",
            DeliveryDate = "DeliveryDate",
            TalioringBookingId = "TalioringBookingId",
            InvNo = "InvNo",
            Amount = "Amount",
            Remarks = "Remarks",
            TalioringBookingBookingDate = "TalioringBookingBookingDate",
            TalioringBookingCustName = "TalioringBookingCustName",
            TalioringBookingDeliveryDate = "TalioringBookingDeliveryDate",
            TalioringBookingTryDate = "TalioringBookingTryDate",
            TalioringBookingBookingSlipNo = "TalioringBookingBookingSlipNo",
            TalioringBookingTotalAmount = "TalioringBookingTotalAmount",
            TalioringBookingTotalQty = "TalioringBookingTotalQty",
            TalioringBookingShirtQty = "TalioringBookingShirtQty",
            TalioringBookingShirtPrice = "TalioringBookingShirtPrice",
            TalioringBookingPantQty = "TalioringBookingPantQty",
            TalioringBookingPantPrice = "TalioringBookingPantPrice",
            TalioringBookingCoatQty = "TalioringBookingCoatQty",
            TalioringBookingCoatPrice = "TalioringBookingCoatPrice",
            TalioringBookingKurtaQty = "TalioringBookingKurtaQty",
            TalioringBookingKurtaPrice = "TalioringBookingKurtaPrice",
            TalioringBookingBundiQty = "TalioringBookingBundiQty",
            TalioringBookingBundiPrice = "TalioringBookingBundiPrice",
            TalioringBookingOthers = "TalioringBookingOthers",
            TalioringBookingOthersPrice = "TalioringBookingOthersPrice",
            TalioringBookingIsDelivered = "TalioringBookingIsDelivered"
        }
    }
}
