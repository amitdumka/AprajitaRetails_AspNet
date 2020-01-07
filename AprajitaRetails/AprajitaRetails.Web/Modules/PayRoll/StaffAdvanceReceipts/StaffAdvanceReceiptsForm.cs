
namespace AprajitaRetails.PayRoll.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PayRoll.StaffAdvanceReceipts")]
    [BasedOnRow(typeof(Entities.StaffAdvanceReceiptsRow), CheckNames = true)]
    public class StaffAdvanceReceiptsForm
    {
        public Int32 EmployeeId { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
    }
}