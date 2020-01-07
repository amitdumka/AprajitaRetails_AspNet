
namespace AprajitaRetails.Banking.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Banking.ChequesLogs")]
    [BasedOnRow(typeof(Entities.ChequesLogsRow), CheckNames = true)]
    public class ChequesLogsForm
    {
        public String BankName { get; set; }
        public String AccountNumber { get; set; }
        public DateTime ChequesDate { get; set; }
        public DateTime DepositDate { get; set; }
        public DateTime ClearedDate { get; set; }
        public String IssuedBy { get; set; }
        public String IssuedTo { get; set; }
        public Decimal Amount { get; set; }
        public Boolean IsPdc { get; set; }
        public Boolean IsIssuedByAprajitaRetails { get; set; }
        public Boolean IsDepositedOnAprajitaRetails { get; set; }
        public String Remarks { get; set; }
    }
}