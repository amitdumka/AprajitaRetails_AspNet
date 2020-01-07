namespace AprajitaRetails.PayRoll {
    export interface EmployeesRow {
        EmployeeId?: number;
        StaffName?: string;
        MobileNo?: string;
        JoiningDate?: string;
        LeavingDate?: string;
        IsWorking?: boolean;
    }

    export namespace EmployeesRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'StaffName';
        export const localTextPrefix = 'PayRoll.Employees';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EmployeeId = "EmployeeId",
            StaffName = "StaffName",
            MobileNo = "MobileNo",
            JoiningDate = "JoiningDate",
            LeavingDate = "LeavingDate",
            IsWorking = "IsWorking"
        }
    }
}
