
namespace AprajitaRetails.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.CashInBanks")]
    [BasedOnRow(typeof(Entities.CashInBanksRow), CheckNames = true)]
    public class CashInBanksForm
    {
        public DateTime CibDate { get; set; }
        public Decimal OpenningBalance { get; set; }
        public Decimal ClosingBalance { get; set; }
        public Decimal CashIn { get; set; }
        public Decimal CashOut { get; set; }
    }
}