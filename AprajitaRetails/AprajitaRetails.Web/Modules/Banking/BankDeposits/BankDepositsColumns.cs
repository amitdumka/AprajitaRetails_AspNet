
namespace AprajitaRetails.Banking.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Banking.BankDeposits")]
    [BasedOnRow(typeof(Entities.BankDepositsRow), CheckNames = true)]
    public class BankDepositsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BankDepositId { get; set; }
        public DateTime DepoDate { get; set; }
        public String AccountNumberAccount { get; set; }
        public Decimal Amount { get; set; }
        public Int32 PayMode { get; set; }
        [EditLink]
        public String Details { get; set; }
        public String Remarks { get; set; }
    }
}