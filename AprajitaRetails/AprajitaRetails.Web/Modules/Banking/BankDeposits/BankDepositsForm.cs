
namespace AprajitaRetails.Banking.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Banking.BankDeposits")]
    [BasedOnRow(typeof(Entities.BankDepositsRow), CheckNames = true)]
    public class BankDepositsForm
    {
        public DateTime DepoDate { get; set; }
        public Int32 AccountNumberId { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        public String Details { get; set; }
        public String Remarks { get; set; }
    }
}