namespace AprajitaRetails.PayRoll {
    export namespace StaffAdvancePaymentsService {
        export const baseUrl = 'PayRoll/StaffAdvancePayments';

        export declare function Create(request: Serenity.SaveRequest<StaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<StaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PayRoll/StaffAdvancePayments/Create",
            Update = "PayRoll/StaffAdvancePayments/Update",
            Delete = "PayRoll/StaffAdvancePayments/Delete",
            Retrieve = "PayRoll/StaffAdvancePayments/Retrieve",
            List = "PayRoll/StaffAdvancePayments/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>StaffAdvancePaymentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
