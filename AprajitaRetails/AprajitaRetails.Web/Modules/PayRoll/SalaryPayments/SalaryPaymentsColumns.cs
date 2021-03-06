﻿
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.SalaryPayments")]
    [BasedOnRow(typeof(Entities.SalaryPaymentsRow), CheckNames = true)]
    public class SalaryPaymentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SalaryPaymentId { get; set; }
        public String EmployeeStaffName { get; set; }
        [EditLink]
        public String SalaryMonth { get; set; }
        public Int32 SalaryComponet { get; set; }
        public DateTime PaymentDate { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
    }
}