
namespace AprajitaRetails.Tally.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tally.LedgerEntries")]
    [BasedOnRow(typeof(Entities.LedgerEntriesRow), CheckNames = true)]
    public class LedgerEntriesForm
    {
        public Int32 PartyId { get; set; }
        public DateTime EntryDate { get; set; }
        public String Particulars { get; set; }
        public Decimal AmountIn { get; set; }
        public Decimal AmountOut { get; set; }
        public Decimal Balance { get; set; }
    }
}