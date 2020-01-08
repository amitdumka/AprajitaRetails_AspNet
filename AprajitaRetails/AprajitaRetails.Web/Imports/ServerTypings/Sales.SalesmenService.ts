namespace AprajitaRetails.Sales {
    export namespace SalesmenService {
        export const baseUrl = 'Sales/Salesmen';

        export declare function Create(request: Serenity.SaveRequest<SalesmenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SalesmenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesmenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesmenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Sales/Salesmen/Create",
            Update = "Sales/Salesmen/Update",
            Delete = "Sales/Salesmen/Delete",
            Retrieve = "Sales/Salesmen/Retrieve",
            List = "Sales/Salesmen/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SalesmenService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
