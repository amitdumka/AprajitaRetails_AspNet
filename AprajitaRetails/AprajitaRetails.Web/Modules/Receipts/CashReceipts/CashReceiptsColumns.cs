
namespace AprajitaRetails.Receipts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Receipts.CashReceipts")]
    [BasedOnRow(typeof(Entities.CashReceiptsRow), CheckNames = true)]
    public class CashReceiptsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CashReceiptId { get; set; }
        public DateTime InwardDate { get; set; }
        public String TranscationModeTranscation { get; set; }
        [EditLink]
        public String ReceiptFrom { get; set; }
        public Decimal Amount { get; set; }
        public String SlipNo { get; set; }
    }
}