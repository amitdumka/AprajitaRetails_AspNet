
namespace AprajitaRetails.Receipts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Receipts.CashReceipts")]
    [BasedOnRow(typeof(Entities.CashReceiptsRow), CheckNames = true)]
    public class CashReceiptsForm
    {
        public DateTime InwardDate { get; set; }
        public Int32 TranscationModeId { get; set; }
        public String ReceiptFrom { get; set; }
        public Decimal Amount { get; set; }
        public String SlipNo { get; set; }
    }
}