
namespace AprajitaRetails.Tailors.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tailors.TailoringSalaryPayments")]
    [BasedOnRow(typeof(Entities.TailoringSalaryPaymentsRow), CheckNames = true)]
    public class TailoringSalaryPaymentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TailoringSalaryPaymentId { get; set; }
        public String TailoringEmployeeStaffName { get; set; }
        [EditLink]
        public String SalaryMonth { get; set; }
        public Int32 SalaryComponet { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
    }
}