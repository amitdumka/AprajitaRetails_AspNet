
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.StaffAdvanceReceipts")]
    [BasedOnRow(typeof(Entities.StaffAdvanceReceiptsRow), CheckNames = true)]
    public class StaffAdvanceReceiptsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StaffAdvanceReceiptId { get; set; }
        public String EmployeeStaffName { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        [EditLink]
        public String Details { get; set; }
    }
}