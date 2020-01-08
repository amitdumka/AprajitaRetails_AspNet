
namespace AprajitaRetails.Product.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Product.Stocks")]
    [BasedOnRow(typeof(Entities.StocksRow), CheckNames = true)]
    public class StocksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StockId { get; set; }
        public String ProductItemBarcode { get; set; }
        public Double Quantity { get; set; }
        public Double SaleQty { get; set; }
        public Double PurchaseQty { get; set; }
        public Int32 Units { get; set; }
    }
}