
namespace AprajitaRetails.Expenses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Expenses.Payments")]
    [BasedOnRow(typeof(Entities.PaymentsRow), CheckNames = true)]
    public class PaymentsForm
    {
        public DateTime PayDate { get; set; }
        public String PaymentPartry { get; set; }
        public Int32 PayMode { get; set; }
        public String PaymentDetails { get; set; }
        public Decimal Amount { get; set; }
        public String PaymentSlipNo { get; set; }
        public String Remarks { get; set; }
    }
}