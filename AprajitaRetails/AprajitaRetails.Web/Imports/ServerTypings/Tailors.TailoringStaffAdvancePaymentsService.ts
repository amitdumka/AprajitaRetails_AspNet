namespace AprajitaRetails.Tailors {
    export namespace TailoringStaffAdvancePaymentsService {
        export const baseUrl = 'Tailors/TailoringStaffAdvancePayments';

        export declare function Create(request: Serenity.SaveRequest<TailoringStaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TailoringStaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringStaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringStaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Tailors/TailoringStaffAdvancePayments/Create",
            Update = "Tailors/TailoringStaffAdvancePayments/Update",
            Delete = "Tailors/TailoringStaffAdvancePayments/Delete",
            Retrieve = "Tailors/TailoringStaffAdvancePayments/Retrieve",
            List = "Tailors/TailoringStaffAdvancePayments/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TailoringStaffAdvancePaymentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
