namespace AprajitaRetails.Product {
    export interface ProductItemsRow {
        ProductItemId?: number;
        Barcode?: string;
        BrandId?: number;
        StyleCode?: string;
        ProductName?: string;
        ItemDesc?: string;
        Categorys?: number;
        Mrp?: number;
        TaxRate?: number;
        Cost?: number;
        Size?: number;
        Units?: number;
        MainCategoryCategoryId?: number;
        ProductCategoryCategoryId?: number;
        ProductTypeCategoryId?: number;
        BrandBrandName?: string;
        BrandBCode?: string;
        MainCategoryCategoryCategoryName?: string;
        MainCategoryCategoryIsPrimaryCategory?: boolean;
        MainCategoryCategoryIsSecondaryCategory?: boolean;
        ProductCategoryCategoryCategoryName?: string;
        ProductCategoryCategoryIsPrimaryCategory?: boolean;
        ProductCategoryCategoryIsSecondaryCategory?: boolean;
        ProductTypeCategoryCategoryName?: string;
        ProductTypeCategoryIsPrimaryCategory?: boolean;
        ProductTypeCategoryIsSecondaryCategory?: boolean;
    }

    export namespace ProductItemsRow {
        export const idProperty = 'ProductItemId';
        export const nameProperty = 'Barcode';
        export const localTextPrefix = 'Product.ProductItems';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProductItemId = "ProductItemId",
            Barcode = "Barcode",
            BrandId = "BrandId",
            StyleCode = "StyleCode",
            ProductName = "ProductName",
            ItemDesc = "ItemDesc",
            Categorys = "Categorys",
            Mrp = "Mrp",
            TaxRate = "TaxRate",
            Cost = "Cost",
            Size = "Size",
            Units = "Units",
            MainCategoryCategoryId = "MainCategoryCategoryId",
            ProductCategoryCategoryId = "ProductCategoryCategoryId",
            ProductTypeCategoryId = "ProductTypeCategoryId",
            BrandBrandName = "BrandBrandName",
            BrandBCode = "BrandBCode",
            MainCategoryCategoryCategoryName = "MainCategoryCategoryCategoryName",
            MainCategoryCategoryIsPrimaryCategory = "MainCategoryCategoryIsPrimaryCategory",
            MainCategoryCategoryIsSecondaryCategory = "MainCategoryCategoryIsSecondaryCategory",
            ProductCategoryCategoryCategoryName = "ProductCategoryCategoryCategoryName",
            ProductCategoryCategoryIsPrimaryCategory = "ProductCategoryCategoryIsPrimaryCategory",
            ProductCategoryCategoryIsSecondaryCategory = "ProductCategoryCategoryIsSecondaryCategory",
            ProductTypeCategoryCategoryName = "ProductTypeCategoryCategoryName",
            ProductTypeCategoryIsPrimaryCategory = "ProductTypeCategoryIsPrimaryCategory",
            ProductTypeCategoryIsSecondaryCategory = "ProductTypeCategoryIsSecondaryCategory"
        }
    }
}
