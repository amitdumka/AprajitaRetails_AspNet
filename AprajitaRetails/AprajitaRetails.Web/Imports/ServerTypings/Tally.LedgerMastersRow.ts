namespace AprajitaRetails.Tally {
    export interface LedgerMastersRow {
        LedgerMasterId?: number;
        PartyId?: number;
        CreatingDate?: string;
        LedgerType?: number;
        PartyPartyName?: string;
        PartyOpenningDate?: string;
        PartyOpenningBalance?: number;
        PartyAddress?: string;
        PartyPanNo?: string;
        PartyGstNo?: string;
        PartyLedgerType?: number;
    }

    export namespace LedgerMastersRow {
        export const idProperty = 'LedgerMasterId';
        export const localTextPrefix = 'Tally.LedgerMasters';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LedgerMasterId = "LedgerMasterId",
            PartyId = "PartyId",
            CreatingDate = "CreatingDate",
            LedgerType = "LedgerType",
            PartyPartyName = "PartyPartyName",
            PartyOpenningDate = "PartyOpenningDate",
            PartyOpenningBalance = "PartyOpenningBalance",
            PartyAddress = "PartyAddress",
            PartyPanNo = "PartyPanNo",
            PartyGstNo = "PartyGstNo",
            PartyLedgerType = "PartyLedgerType"
        }
    }
}
