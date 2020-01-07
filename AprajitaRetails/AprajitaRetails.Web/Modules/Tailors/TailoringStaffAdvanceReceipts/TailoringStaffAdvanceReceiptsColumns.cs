
namespace AprajitaRetails.Tailors.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tailors.TailoringStaffAdvanceReceipts")]
    [BasedOnRow(typeof(Entities.TailoringStaffAdvanceReceiptsRow), CheckNames = true)]
    public class TailoringStaffAdvanceReceiptsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TailoringStaffAdvanceReceiptId { get; set; }
        public String TailoringEmployeeStaffName { get; set; }
        public DateTime ReceiptDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        [EditLink]
        public String Details { get; set; }
    }
}