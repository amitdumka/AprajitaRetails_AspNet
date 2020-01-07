
namespace AprajitaRetails.Banking.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Banking.BankWithdrawals")]
    [BasedOnRow(typeof(Entities.BankWithdrawalsRow), CheckNames = true)]
    public class BankWithdrawalsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BankWithdrawalId { get; set; }
        public DateTime DepoDate { get; set; }
        public String AccountNumberAccount { get; set; }
        public Decimal Amount { get; set; }
        [EditLink]
        public String ChequeNo { get; set; }
        public String SignedBy { get; set; }
        public String ApprovedBy { get; set; }
        public String InNameOf { get; set; }
    }
}