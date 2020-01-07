
namespace AprajitaRetails.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.CashInBanks")]
    [BasedOnRow(typeof(Entities.CashInBanksRow), CheckNames = true)]
    public class CashInBanksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CashInBankId { get; set; }
        public DateTime CibDate { get; set; }
        public Decimal OpenningBalance { get; set; }
        public Decimal ClosingBalance { get; set; }
        public Decimal CashIn { get; set; }
        public Decimal CashOut { get; set; }
    }
}