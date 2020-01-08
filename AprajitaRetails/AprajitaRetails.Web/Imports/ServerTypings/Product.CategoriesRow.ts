namespace AprajitaRetails.Product {
    export interface CategoriesRow {
        CategoryId?: number;
        CategoryName?: string;
        IsPrimaryCategory?: boolean;
        IsSecondaryCategory?: boolean;
    }

    export namespace CategoriesRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Product.Categories';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            IsPrimaryCategory = "IsPrimaryCategory",
            IsSecondaryCategory = "IsSecondaryCategory"
        }
    }
}
