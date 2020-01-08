namespace AprajitaRetails.Sales {
    export namespace SaleInvoicesService {
        export const baseUrl = 'Sales/SaleInvoices';

        export declare function Create(request: Serenity.SaveRequest<SaleInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SaleInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Sales/SaleInvoices/Create",
            Update = "Sales/SaleInvoices/Update",
            Delete = "Sales/SaleInvoices/Delete",
            Retrieve = "Sales/SaleInvoices/Retrieve",
            List = "Sales/SaleInvoices/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SaleInvoicesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
