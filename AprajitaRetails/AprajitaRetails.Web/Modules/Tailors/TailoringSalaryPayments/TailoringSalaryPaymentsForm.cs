
namespace AprajitaRetails.Tailors.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tailors.TailoringSalaryPayments")]
    [BasedOnRow(typeof(Entities.TailoringSalaryPaymentsRow), CheckNames = true)]
    public class TailoringSalaryPaymentsForm
    {
        public Int32 TailoringEmployeeId { get; set; }
        public String SalaryMonth { get; set; }
        public Int32 SalaryComponet { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
    }
}