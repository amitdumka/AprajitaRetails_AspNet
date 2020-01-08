
namespace AprajitaRetails.Product.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Product.Brands")]
    [BasedOnRow(typeof(Entities.BrandsRow), CheckNames = true)]
    public class BrandsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BrandId { get; set; }
        [EditLink]
        public String BrandName { get; set; }
        public String BCode { get; set; }
    }
}