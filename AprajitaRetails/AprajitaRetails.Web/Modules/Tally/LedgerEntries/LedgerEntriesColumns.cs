
namespace AprajitaRetails.Tally.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Tally.LedgerEntries")]
    [BasedOnRow(typeof(Entities.LedgerEntriesRow), CheckNames = true)]
    public class LedgerEntriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 LedgerEntryId { get; set; }
        public String PartyPartyName { get; set; }
        public DateTime EntryDate { get; set; }
        [EditLink]
        public String Particulars { get; set; }
        public Decimal AmountIn { get; set; }
        public Decimal AmountOut { get; set; }
        public Decimal Balance { get; set; }
    }
}