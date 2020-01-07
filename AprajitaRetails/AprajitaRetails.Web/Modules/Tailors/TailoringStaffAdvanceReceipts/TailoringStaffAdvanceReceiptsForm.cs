
namespace AprajitaRetails.Tailors.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tailors.TailoringStaffAdvanceReceipts")]
    [BasedOnRow(typeof(Entities.TailoringStaffAdvanceReceiptsRow), CheckNames = true)]
    public class TailoringStaffAdvanceReceiptsForm
    {
        public Int32 TailoringEmployeeId { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
    }
}