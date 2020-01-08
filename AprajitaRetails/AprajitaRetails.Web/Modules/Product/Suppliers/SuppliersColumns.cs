
namespace AprajitaRetails.Product.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Product.Suppliers")]
    [BasedOnRow(typeof(Entities.SuppliersRow), CheckNames = true)]
    public class SuppliersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupplierId { get; set; }
        [EditLink]
        public String SuppilerName { get; set; }
        public String Warehouse { get; set; }
    }
}