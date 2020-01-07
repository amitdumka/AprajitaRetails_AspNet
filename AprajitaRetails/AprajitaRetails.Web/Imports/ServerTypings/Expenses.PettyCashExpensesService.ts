namespace AprajitaRetails.Expenses {
    export namespace PettyCashExpensesService {
        export const baseUrl = 'Expenses/PettyCashExpenses';

        export declare function Create(request: Serenity.SaveRequest<PettyCashExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PettyCashExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PettyCashExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PettyCashExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Expenses/PettyCashExpenses/Create",
            Update = "Expenses/PettyCashExpenses/Update",
            Delete = "Expenses/PettyCashExpenses/Delete",
            Retrieve = "Expenses/PettyCashExpenses/Retrieve",
            List = "Expenses/PettyCashExpenses/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PettyCashExpensesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
