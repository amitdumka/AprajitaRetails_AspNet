
namespace AprajitaRetails.Tally.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Tally.Parties")]
    [BasedOnRow(typeof(Entities.PartiesRow), CheckNames = true)]
    public class PartiesForm
    {
        public String PartyName { get; set; }
        public DateTime OpenningDate { get; set; }
        public Decimal OpenningBalance { get; set; }
        public String Address { get; set; }
        public String PanNo { get; set; }
        public String GstNo { get; set; }
        public Int32 LedgerType { get; set; }
    }
}