
namespace AprajitaRetails.Product.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Product.ProductItems")]
    [BasedOnRow(typeof(Entities.ProductItemsRow), CheckNames = true)]
    public class ProductItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductItemId { get; set; }
        [EditLink]
        public String Barcode { get; set; }
        public String BrandBrandName { get; set; }
        public String StyleCode { get; set; }
        public String ProductName { get; set; }
        public String ItemDesc { get; set; }
        public Int32 Categorys { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal TaxRate { get; set; }
        public Decimal Cost { get; set; }
        public Int32 Size { get; set; }
        public Int32 Units { get; set; }
        public String MainCategoryCategoryCategoryName { get; set; }
        public String ProductCategoryCategoryCategoryName { get; set; }
        public String ProductTypeCategoryCategoryName { get; set; }
    }
}