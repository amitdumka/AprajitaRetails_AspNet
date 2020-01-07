
namespace AprajitaRetails.Expenses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Expenses.Payments")]
    [BasedOnRow(typeof(Entities.PaymentsRow), CheckNames = true)]
    public class PaymentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PaymentId { get; set; }
        public DateTime PayDate { get; set; }
        [EditLink]
        public String PaymentPartry { get; set; }
        public Int32 PayMode { get; set; }
        public String PaymentDetails { get; set; }
        public Decimal Amount { get; set; }
        public String PaymentSlipNo { get; set; }
        public String Remarks { get; set; }
    }
}