namespace AprajitaRetails.Tally {
    export interface LedgerEntriesRow {
        LedgerEntryId?: number;
        PartyId?: number;
        EntryDate?: string;
        Particulars?: string;
        AmountIn?: number;
        AmountOut?: number;
        Balance?: number;
        PartyPartyName?: string;
        PartyOpenningDate?: string;
        PartyOpenningBalance?: number;
        PartyAddress?: string;
        PartyPanNo?: string;
        PartyGstNo?: string;
        PartyLedgerType?: number;
    }

    export namespace LedgerEntriesRow {
        export const idProperty = 'LedgerEntryId';
        export const nameProperty = 'Particulars';
        export const localTextPrefix = 'Tally.LedgerEntries';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            LedgerEntryId = "LedgerEntryId",
            PartyId = "PartyId",
            EntryDate = "EntryDate",
            Particulars = "Particulars",
            AmountIn = "AmountIn",
            AmountOut = "AmountOut",
            Balance = "Balance",
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
