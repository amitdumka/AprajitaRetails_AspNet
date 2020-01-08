namespace AprajitaRetails.Product {
    export interface BrandsRow {
        BrandId?: number;
        BrandName?: string;
        BCode?: string;
    }

    export namespace BrandsRow {
        export const idProperty = 'BrandId';
        export const nameProperty = 'BrandName';
        export const localTextPrefix = 'Product.Brands';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BrandId = "BrandId",
            BrandName = "BrandName",
            BCode = "BCode"
        }
    }
}
