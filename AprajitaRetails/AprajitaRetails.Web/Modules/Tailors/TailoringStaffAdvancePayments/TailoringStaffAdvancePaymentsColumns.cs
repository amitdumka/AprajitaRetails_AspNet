
namespace AprajitaRetails.Tailors.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tailors.TailoringStaffAdvancePayments")]
    [BasedOnRow(typeof(Entities.TailoringStaffAdvancePaymentsRow), CheckNames = true)]
    public class TailoringStaffAdvancePaymentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TailoringStaffAdvancePaymentId { get; set; }
        public String TailoringEmployeeStaffName { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        [EditLink]
        public String Details { get; set; }
    }
}