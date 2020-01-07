
namespace AprajitaRetails.Expenses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Expenses.CashPayments")]
    [BasedOnRow(typeof(Entities.CashPaymentsRow), CheckNames = true)]
    public class CashPaymentsForm
    {
        public DateTime PaymentDate { get; set; }
        public Int32 TranscationModeId { get; set; }
        public String PaidTo { get; set; }
        public Decimal Amount { get; set; }
        public String SlipNo { get; set; }
    }
}