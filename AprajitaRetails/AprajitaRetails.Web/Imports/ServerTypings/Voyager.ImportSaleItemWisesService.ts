namespace AprajitaRetails.Voyager {
    export namespace ImportSaleItemWisesService {
        export const baseUrl = 'Voyager/ImportSaleItemWises';

        export declare function Create(request: Serenity.SaveRequest<ImportSaleItemWisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ImportSaleItemWisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportSaleItemWisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportSaleItemWisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Voyager/ImportSaleItemWises/Create",
            Update = "Voyager/ImportSaleItemWises/Update",
            Delete = "Voyager/ImportSaleItemWises/Delete",
            Retrieve = "Voyager/ImportSaleItemWises/Retrieve",
            List = "Voyager/ImportSaleItemWises/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ImportSaleItemWisesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
