
namespace AprajitaRetails.Purchases.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Purchases.PurchaseItems")]
    [BasedOnRow(typeof(Entities.PurchaseItemsRow), CheckNames = true)]
    public class PurchaseItemsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PurchaseItemId { get; set; }
        public String ProductPurchaseInWardNo { get; set; }
        public String ProductItemBarcode { get; set; }
        [EditLink]
        public String Barcode { get; set; }
        public Double Qty { get; set; }
        public Int32 Unit { get; set; }
        public Decimal Cost { get; set; }
        public Decimal TaxAmout { get; set; }
        public String PurchaseTaxTypeTaxName { get; set; }
        public Decimal CostValue { get; set; }
    }
}