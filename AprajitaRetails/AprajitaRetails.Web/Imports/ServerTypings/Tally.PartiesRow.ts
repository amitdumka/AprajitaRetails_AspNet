namespace AprajitaRetails.Tally {
    export interface PartiesRow {
        PartyId?: number;
        PartyName?: string;
        OpenningDate?: string;
        OpenningBalance?: number;
        Address?: string;
        PanNo?: string;
        GstNo?: string;
        LedgerType?: number;
    }

    export namespace PartiesRow {
        export const idProperty = 'PartyId';
        export const nameProperty = 'PartyName';
        export const localTextPrefix = 'Tally.Parties';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PartyId = "PartyId",
            PartyName = "PartyName",
            OpenningDate = "OpenningDate",
            OpenningBalance = "OpenningBalance",
            Address = "Address",
            PanNo = "PanNo",
            GstNo = "GstNo",
            LedgerType = "LedgerType"
        }
    }
}
