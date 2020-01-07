
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.CurrentSalaries")]
    [BasedOnRow(typeof(Entities.CurrentSalariesRow), CheckNames = true)]
    public class CurrentSalariesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CurrentSalaryId { get; set; }
        public String EmployeeStaffName { get; set; }
        public Decimal BasicSalary { get; set; }
        public Decimal SundaySalary { get; set; }
        public Decimal LpRate { get; set; }
        public Decimal IncentiveRate { get; set; }
        public Decimal IncentiveTarget { get; set; }
        public Decimal WowBillRate { get; set; }
        public Decimal WowBillTarget { get; set; }
        public Boolean IsSundayBillable { get; set; }
        public DateTime EffectiveDate { get; set; }
        public DateTime CloseDate { get; set; }
        public Boolean IsEffective { get; set; }
    }
}