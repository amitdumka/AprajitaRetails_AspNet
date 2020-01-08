
namespace AprajitaRetails.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.SaleTaxTypes")]
    [BasedOnRow(typeof(Entities.SaleTaxTypesRow), CheckNames = true)]
    public class SaleTaxTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SaleTaxTypeId { get; set; }
        [EditLink]
        public String TaxName { get; set; }
        public Int32 TaxType { get; set; }
        public Decimal CompositeRate { get; set; }
    }
}