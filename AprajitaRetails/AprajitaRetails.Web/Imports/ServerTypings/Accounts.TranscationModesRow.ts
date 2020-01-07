namespace AprajitaRetails.Accounts {
    export interface TranscationModesRow {
        TranscationModeId?: number;
        Transcation?: string;
    }

    export namespace TranscationModesRow {
        export const idProperty = 'TranscationModeId';
        export const nameProperty = 'Transcation';
        export const localTextPrefix = 'Accounts.TranscationModes';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TranscationModeId = "TranscationModeId",
            Transcation = "Transcation"
        }
    }
}
