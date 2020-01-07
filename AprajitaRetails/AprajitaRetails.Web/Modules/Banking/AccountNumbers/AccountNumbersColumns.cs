
namespace AprajitaRetails.Banking.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Banking.AccountNumbers")]
    [BasedOnRow(typeof(Entities.AccountNumbersRow), CheckNames = true)]
    public class AccountNumbersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AccountNumberId { get; set; }
        public String BankBankName { get; set; }
        [EditLink]
        public String Account { get; set; }
    }
}