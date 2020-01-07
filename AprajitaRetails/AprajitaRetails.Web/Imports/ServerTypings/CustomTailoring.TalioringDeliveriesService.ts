namespace AprajitaRetails.CustomTailoring {
    export namespace TalioringDeliveriesService {
        export const baseUrl = 'CustomTailoring/TalioringDeliveries';

        export declare function Create(request: Serenity.SaveRequest<TalioringDeliveriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TalioringDeliveriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TalioringDeliveriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TalioringDeliveriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CustomTailoring/TalioringDeliveries/Create",
            Update = "CustomTailoring/TalioringDeliveries/Update",
            Delete = "CustomTailoring/TalioringDeliveries/Delete",
            Retrieve = "CustomTailoring/TalioringDeliveries/Retrieve",
            List = "CustomTailoring/TalioringDeliveries/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TalioringDeliveriesService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
