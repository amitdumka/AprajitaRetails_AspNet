namespace AprajitaRetails.Voyager {
    export namespace ImportSaleRegistersService {
        export const baseUrl = 'Voyager/ImportSaleRegisters';

        export declare function Create(request: Serenity.SaveRequest<ImportSaleRegistersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ImportSaleRegistersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportSaleRegistersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportSaleRegistersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Voyager/ImportSaleRegisters/Create",
            Update = "Voyager/ImportSaleRegisters/Update",
            Delete = "Voyager/ImportSaleRegisters/Delete",
            Retrieve = "Voyager/ImportSaleRegisters/Retrieve",
            List = "Voyager/ImportSaleRegisters/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ImportSaleRegistersService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
