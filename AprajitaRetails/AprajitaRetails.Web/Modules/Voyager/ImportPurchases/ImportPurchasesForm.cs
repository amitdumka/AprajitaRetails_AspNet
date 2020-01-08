
namespace AprajitaRetails.Voyager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Voyager.ImportPurchases")]
    [BasedOnRow(typeof(Entities.ImportPurchasesRow), CheckNames = true)]
    public class ImportPurchasesForm
    {
        public String GrnNo { get; set; }
        public DateTime GrnDate { get; set; }
        public String InvoiceNo { get; set; }
        public DateTime InvoiceDate { get; set; }
        public String SupplierName { get; set; }
        public String Barcode { get; set; }
        public String ProductName { get; set; }
        public String StyleCode { get; set; }
        public String ItemDesc { get; set; }
        public Double Quantity { get; set; }
        public Decimal Mrp { get; set; }
        public Decimal MrpValue { get; set; }
        public Decimal Cost { get; set; }
        public Decimal CostValue { get; set; }
        public Decimal TaxAmt { get; set; }
        public Boolean IsVatBill { get; set; }
        public Boolean IsLocal { get; set; }
        public Boolean IsDataConsumed { get; set; }
        public DateTime ImportTime { get; set; }
    }
}