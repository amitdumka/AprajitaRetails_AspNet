namespace AprajitaRetails.Tailors {
    export namespace TailoringSalaryPaymentsService {
        export const baseUrl = 'Tailors/TailoringSalaryPayments';

        export declare function Create(request: Serenity.SaveRequest<TailoringSalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TailoringSalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringSalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringSalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Tailors/TailoringSalaryPayments/Create",
            Update = "Tailors/TailoringSalaryPayments/Update",
            Delete = "Tailors/TailoringSalaryPayments/Delete",
            Retrieve = "Tailors/TailoringSalaryPayments/Retrieve",
            List = "Tailors/TailoringSalaryPayments/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TailoringSalaryPaymentsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
