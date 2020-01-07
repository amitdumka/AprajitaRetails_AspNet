namespace AprajitaRetails.Banking {
    export interface ChequesLogsRow {
        ChequesLogId?: number;
        BankName?: string;
        AccountNumber?: string;
        ChequesDate?: string;
        DepositDate?: string;
        ClearedDate?: string;
        IssuedBy?: string;
        IssuedTo?: string;
        Amount?: number;
        IsPdc?: boolean;
        IsIssuedByAprajitaRetails?: boolean;
        IsDepositedOnAprajitaRetails?: boolean;
        Remarks?: string;
    }

    export namespace ChequesLogsRow {
        export const idProperty = 'ChequesLogId';
        export const nameProperty = 'BankName';
        export const localTextPrefix = 'Banking.ChequesLogs';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ChequesLogId = "ChequesLogId",
            BankName = "BankName",
            AccountNumber = "AccountNumber",
            ChequesDate = "ChequesDate",
            DepositDate = "DepositDate",
            ClearedDate = "ClearedDate",
            IssuedBy = "IssuedBy",
            IssuedTo = "IssuedTo",
            Amount = "Amount",
            IsPdc = "IsPdc",
            IsIssuedByAprajitaRetails = "IsIssuedByAprajitaRetails",
            IsDepositedOnAprajitaRetails = "IsDepositedOnAprajitaRetails",
            Remarks = "Remarks"
        }
    }
}
