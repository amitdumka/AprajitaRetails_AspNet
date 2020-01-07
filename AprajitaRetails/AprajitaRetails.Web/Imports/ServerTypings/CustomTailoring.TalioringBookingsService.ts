namespace AprajitaRetails.CustomTailoring {
    export namespace TalioringBookingsService {
        export const baseUrl = 'CustomTailoring/TalioringBookings';

        export declare function Create(request: Serenity.SaveRequest<TalioringBookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TalioringBookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TalioringBookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TalioringBookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "CustomTailoring/TalioringBookings/Create",
            Update = "CustomTailoring/TalioringBookings/Update",
            Delete = "CustomTailoring/TalioringBookings/Delete",
            Retrieve = "CustomTailoring/TalioringBookings/Retrieve",
            List = "CustomTailoring/TalioringBookings/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TalioringBookingsService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
