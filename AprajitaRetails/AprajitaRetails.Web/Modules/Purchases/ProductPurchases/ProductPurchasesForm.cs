
namespace AprajitaRetails.Purchases.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Purchases.ProductPurchases")]
    [BasedOnRow(typeof(Entities.ProductPurchasesRow), CheckNames = true)]
    public class ProductPurchasesForm
    {
        public String InWardNo { get; set; }
        public DateTime InWardDate { get; set; }
        public DateTime PurchaseDate { get; set; }
        public String InvoiceNo { get; set; }
        public Double TotalQty { get; set; }
        public Decimal TotalBasicAmount { get; set; }
        public Decimal ShippingCost { get; set; }
        public Decimal TotalTax { get; set; }
        public Decimal TotalAmount { get; set; }
        public String Remarks { get; set; }
        public Int32 SupplierId { get; set; }
        public Boolean IsPaid { get; set; }
    }
}