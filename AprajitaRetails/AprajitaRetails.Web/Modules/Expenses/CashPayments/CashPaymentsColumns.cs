
namespace AprajitaRetails.Expenses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Expenses.CashPayments")]
    [BasedOnRow(typeof(Entities.CashPaymentsRow), CheckNames = true)]
    public class CashPaymentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CashPaymentId { get; set; }
        public DateTime PaymentDate { get; set; }
        public String TranscationModeTranscation { get; set; }
        [EditLink]
        public String PaidTo { get; set; }
        public Decimal Amount { get; set; }
        public String SlipNo { get; set; }
    }
}