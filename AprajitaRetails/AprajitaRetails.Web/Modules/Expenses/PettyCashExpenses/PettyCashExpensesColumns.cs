
namespace AprajitaRetails.Expenses.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Expenses.PettyCashExpenses")]
    [BasedOnRow(typeof(Entities.PettyCashExpensesRow), CheckNames = true)]
    public class PettyCashExpensesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PettyCashExpenseId { get; set; }
        public DateTime ExpDate { get; set; }
        [EditLink]
        public String Particulars { get; set; }
        public Decimal Amount { get; set; }
        public String EmployeeStaffName { get; set; }
        public String PaidTo { get; set; }
        public String Remarks { get; set; }
    }
}