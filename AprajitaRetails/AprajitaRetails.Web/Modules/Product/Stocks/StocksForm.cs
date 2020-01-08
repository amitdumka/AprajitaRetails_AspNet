
namespace AprajitaRetails.Product.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Product.Stocks")]
    [BasedOnRow(typeof(Entities.StocksRow), CheckNames = true)]
    public class StocksForm
    {
        public Int32 ProductItemId { get; set; }
        public Double Quantity { get; set; }
        public Double SaleQty { get; set; }
        public Double PurchaseQty { get; set; }
        public Int32 Units { get; set; }
    }
}