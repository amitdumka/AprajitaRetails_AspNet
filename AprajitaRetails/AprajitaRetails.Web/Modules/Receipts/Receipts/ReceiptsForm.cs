
namespace AprajitaRetails.Receipts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Receipts.Receipts")]
    [BasedOnRow(typeof(Entities.ReceiptsRow), CheckNames = true)]
    public class ReceiptsForm
    {
        public DateTime RecieptDate { get; set; }
        public String ReceiptFrom { get; set; }
        public Int32 PayMode { get; set; }
        public String ReceiptDetails { get; set; }
        public Decimal Amount { get; set; }
        public String RecieptSlipNo { get; set; }
        public String Remarks { get; set; }
    }
}