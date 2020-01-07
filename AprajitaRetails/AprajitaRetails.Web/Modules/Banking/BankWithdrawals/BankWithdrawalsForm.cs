
namespace AprajitaRetails.Banking.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Banking.BankWithdrawals")]
    [BasedOnRow(typeof(Entities.BankWithdrawalsRow), CheckNames = true)]
    public class BankWithdrawalsForm
    {
        public DateTime DepoDate { get; set; }
        public Int32 AccountNumberId { get; set; }
        public Decimal Amount { get; set; }
        public String ChequeNo { get; set; }
        public String SignedBy { get; set; }
        public String ApprovedBy { get; set; }
        public String InNameOf { get; set; }
    }
}