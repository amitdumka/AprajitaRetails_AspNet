
namespace AprajitaRetails.Expenses.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Expenses.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesForm
    {
        public DateTime ExpDate { get; set; }
        public String Particulars { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String PaymentDetails { get; set; }
        public Int32 EmployeeId { get; set; }
        public String PaidTo { get; set; }
        public String Remarks { get; set; }
    }
}