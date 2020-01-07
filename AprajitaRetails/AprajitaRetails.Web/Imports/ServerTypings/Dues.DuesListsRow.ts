namespace AprajitaRetails.Dues {
    export interface DuesListsRow {
        DuesListId?: number;
        Amount?: number;
        IsRecovered?: boolean;
        DailySaleId?: number;
        RecoveryDate?: string;
        IsPartialRecovery?: boolean;
        DailySaleSaleDate?: string;
        DailySaleInvNo?: string;
        DailySaleAmount?: number;
        DailySalePayMode?: number;
        DailySaleCashAmount?: number;
        DailySaleSalesmanId?: number;
        DailySaleIsDue?: boolean;
        DailySaleIsManualBill?: boolean;
        DailySaleIsTailoringBill?: boolean;
        DailySaleRemarks?: string;
        DailySaleIsSaleReturn?: boolean;
    }

    export namespace DuesListsRow {
        export const idProperty = 'DuesListId';
        export const localTextPrefix = 'Dues.DuesLists';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            DuesListId = "DuesListId",
            Amount = "Amount",
            IsRecovered = "IsRecovered",
            DailySaleId = "DailySaleId",
            RecoveryDate = "RecoveryDate",
            IsPartialRecovery = "IsPartialRecovery",
            DailySaleSaleDate = "DailySaleSaleDate",
            DailySaleInvNo = "DailySaleInvNo",
            DailySaleAmount = "DailySaleAmount",
            DailySalePayMode = "DailySalePayMode",
            DailySaleCashAmount = "DailySaleCashAmount",
            DailySaleSalesmanId = "DailySaleSalesmanId",
            DailySaleIsDue = "DailySaleIsDue",
            DailySaleIsManualBill = "DailySaleIsManualBill",
            DailySaleIsTailoringBill = "DailySaleIsTailoringBill",
            DailySaleRemarks = "DailySaleRemarks",
            DailySaleIsSaleReturn = "DailySaleIsSaleReturn"
        }
    }
}
