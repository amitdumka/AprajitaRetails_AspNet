
namespace AprajitaRetails.PayRoll.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("PayRoll.CurrentSalaries")]
    [BasedOnRow(typeof(Entities.CurrentSalariesRow), CheckNames = true)]
    public class CurrentSalariesForm
    {
        public Int32 EmployeeId { get; set; }
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