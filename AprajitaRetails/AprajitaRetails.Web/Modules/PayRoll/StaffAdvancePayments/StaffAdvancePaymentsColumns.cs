
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.StaffAdvancePayments")]
    [BasedOnRow(typeof(Entities.StaffAdvancePaymentsRow), CheckNames = true)]
    public class StaffAdvancePaymentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StaffAdvancePaymentId { get; set; }
        public String EmployeeStaffName { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        [EditLink]
        public String Details { get; set; }
    }
}