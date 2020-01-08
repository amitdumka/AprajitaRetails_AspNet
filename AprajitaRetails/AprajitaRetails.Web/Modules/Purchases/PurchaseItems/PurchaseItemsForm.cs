
namespace AprajitaRetails.Purchases.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Purchases.PurchaseItems")]
    [BasedOnRow(typeof(Entities.PurchaseItemsRow), CheckNames = true)]
    public class PurchaseItemsForm
    {
        public Int32 ProductPurchaseId { get; set; }
        public Int32 ProductItemId { get; set; }
        public String Barcode { get; set; }
        public Double Qty { get; set; }
        public Int32 Unit { get; set; }
        public Decimal Cost { get; set; }
        public Decimal TaxAmout { get; set; }
        public Int32 PurchaseTaxTypeId { get; set; }
        public Decimal CostValue { get; set; }
    }
}