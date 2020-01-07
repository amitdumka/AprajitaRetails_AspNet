namespace AprajitaRetails.PayRoll {
    export namespace StaffAdvanceReceiptsService {
        export const baseUrl = 'PayRoll/StaffAdvanceReceipts';

        export declare function Create(request: Serenity.SaveRequest<StaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PayRoll/StaffAdvanceReceipts/Create",
            Update = "PayRoll/StaffAdvanceReceipts/Update",
            Delete = "PayRoll/StaffAdvanceReceipts/Delete",
            Retrieve = "PayRoll/StaffAdvanceReceipts/Retrieve",
            List = "PayRoll/StaffAdvanceReceipts/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StaffAdvanceReceiptsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
