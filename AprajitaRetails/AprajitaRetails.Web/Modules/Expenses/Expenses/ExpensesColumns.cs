
namespace AprajitaRetails.Expenses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Expenses.Expenses")]
    [BasedOnRow(typeof(Entities.ExpensesRow), CheckNames = true)]
    public class ExpensesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ExpenseId { get; set; }
        public DateTime ExpDate { get; set; }
        [EditLink]
        public String Particulars { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String PaymentDetails { get; set; }
        public String EmployeeStaffName { get; set; }
        public String PaidTo { get; set; }
        public String Remarks { get; set; }
    }
}