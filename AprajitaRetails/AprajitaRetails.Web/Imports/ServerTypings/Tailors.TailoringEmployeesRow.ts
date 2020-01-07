namespace AprajitaRetails.Tailors {
    export interface TailoringEmployeesRow {
        TailoringEmployeeId?: number;
        StaffName?: string;
        MobileNo?: string;
        JoiningDate?: string;
        LeavingDate?: string;
        IsWorking?: boolean;
    }

    export namespace TailoringEmployeesRow {
        export const idProperty = 'TailoringEmployeeId';
        export const nameProperty = 'StaffName';
        export const localTextPrefix = 'Tailors.TailoringEmployees';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TailoringEmployeeId = "TailoringEmployeeId",
            StaffName = "StaffName",
            MobileNo = "MobileNo",
            JoiningDate = "JoiningDate",
            LeavingDate = "LeavingDate",
            IsWorking = "IsWorking"
        }
    }
}
