namespace AprajitaRetails.Tailors {
    export namespace TailoringStaffAdvanceReceiptsService {
        export const baseUrl = 'Tailors/TailoringStaffAdvanceReceipts';

        export declare function Create(request: Serenity.SaveRequest<TailoringStaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TailoringStaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringStaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringStaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Tailors/TailoringStaffAdvanceReceipts/Create",
            Update = "Tailors/TailoringStaffAdvanceReceipts/Update",
            Delete = "Tailors/TailoringStaffAdvanceReceipts/Delete",
            Retrieve = "Tailors/TailoringStaffAdvanceReceipts/Retrieve",
            List = "Tailors/TailoringStaffAdvanceReceipts/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TailoringStaffAdvanceReceiptsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
