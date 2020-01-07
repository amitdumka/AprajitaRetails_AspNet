
namespace AprajitaRetails.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.CashInHands")]
    [BasedOnRow(typeof(Entities.CashInHandsRow), CheckNames = true)]
    public class CashInHandsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CashInHandId { get; set; }
        public DateTime CihDate { get; set; }
        public Decimal OpenningBalance { get; set; }
        public Decimal ClosingBalance { get; set; }
        public Decimal CashIn { get; set; }
        public Decimal CashOut { get; set; }
    }
}