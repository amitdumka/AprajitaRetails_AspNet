namespace AprajitaRetails.Sales {
    export namespace SalePaymentDetailsService {
        export const baseUrl = 'Sales/SalePaymentDetails';

        export declare function Create(request: Serenity.SaveRequest<SalePaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SalePaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalePaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalePaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Sales/SalePaymentDetails/Create",
            Update = "Sales/SalePaymentDetails/Update",
            Delete = "Sales/SalePaymentDetails/Delete",
            Retrieve = "Sales/SalePaymentDetails/Retrieve",
            List = "Sales/SalePaymentDetails/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SalePaymentDetailsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
