
namespace AprajitaRetails.Banking.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Banking.Banks")]
    [BasedOnRow(typeof(Entities.BanksRow), CheckNames = true)]
    public class BanksColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BankId { get; set; }
        [EditLink]
        public String BankName { get; set; }
    }
}