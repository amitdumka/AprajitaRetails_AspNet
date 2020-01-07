namespace AprajitaRetails.Banking {
    export interface BanksRow {
        BankId?: number;
        BankName?: string;
    }

    export namespace BanksRow {
        export const idProperty = 'BankId';
        export const nameProperty = 'BankName';
        export const localTextPrefix = 'Banking.Banks';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BankId = "BankId",
            BankName = "BankName"
        }
    }
}
