
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.PaySlips")]
    [BasedOnRow(typeof(Entities.PaySlipsRow), CheckNames = true)]
    public class PaySlipsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PaySlipId { get; set; }
        public DateTime OnDate { get; set; }
        public Int32 Month { get; set; }
        public Int32 Year { get; set; }
        public String EmployeeStaffName { get; set; }
        public Int32 CurrentSalaryId { get; set; }
        public Decimal BasicSalary { get; set; }
        public Int32 NoOfDaysPresent { get; set; }
        public Decimal TotalSale { get; set; }
        public Decimal SaleIncentive { get; set; }
        public Decimal WowBillAmount { get; set; }
        public Decimal WowBillIncentive { get; set; }
        public Decimal LastPcsAmount { get; set; }
        public Decimal LastPCsIncentive { get; set; }
        public Decimal OthersIncentive { get; set; }
        public Decimal GrossSalary { get; set; }
        public Decimal StandardDeductions { get; set; }
        public Decimal TdsDeductions { get; set; }
        public Decimal PfDeductions { get; set; }
        public Decimal AdvanceDeducations { get; set; }
        public Decimal OtherDeductions { get; set; }
        [EditLink]
        public String Remarks { get; set; }
    }
}