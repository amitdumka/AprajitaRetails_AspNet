
namespace AprajitaRetails.Product.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Product.ProductItems")]
    [BasedOnRow(typeof(Entities.ProductItemsRow), CheckNames = true)]
    public class ProductItemsForm
    {
        public String Barcode { get; set; }
        public Int32 BrandId { get; set; }
        public String StyleCode { get; set; }
        public String ProductName { get; set; }
        public String ItemDesc { get; set; }
        public Int32 Categorys { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal TaxRate { get; set; }
        public Decimal Cost { get; set; }
        public Int32 Size { get; set; }
        public Int32 Units { get; set; }
        public Int32 MainCategoryCategoryId { get; set; }
        public Int32 ProductCategoryCategoryId { get; set; }
        public Int32 ProductTypeCategoryId { get; set; }
    }
}