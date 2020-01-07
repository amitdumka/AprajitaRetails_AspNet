namespace AprajitaRetails.PayRoll {
    export namespace CurrentSalariesService {
        export const baseUrl = 'PayRoll/CurrentSalaries';

        export declare function Create(request: Serenity.SaveRequest<CurrentSalariesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CurrentSalariesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrentSalariesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrentSalariesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PayRoll/CurrentSalaries/Create",
            Update = "PayRoll/CurrentSalaries/Update",
            Delete = "PayRoll/CurrentSalaries/Delete",
            Retrieve = "PayRoll/CurrentSalaries/Retrieve",
            List = "PayRoll/CurrentSalaries/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CurrentSalariesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
