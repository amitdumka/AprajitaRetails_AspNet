
namespace AprajitaRetails.PayRoll.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PayRoll.StaffAdvancePayments")]
    [BasedOnRow(typeof(Entities.StaffAdvancePaymentsRow), CheckNames = true)]
    public class StaffAdvancePaymentsForm
    {
        public Int32 EmployeeId { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
    }
}