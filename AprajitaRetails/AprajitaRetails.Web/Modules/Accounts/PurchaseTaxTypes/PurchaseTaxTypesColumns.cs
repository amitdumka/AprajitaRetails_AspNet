
namespace AprajitaRetails.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.PurchaseTaxTypes")]
    [BasedOnRow(typeof(Entities.PurchaseTaxTypesRow), CheckNames = true)]
    public class PurchaseTaxTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PurchaseTaxTypeId { get; set; }
        [EditLink]
        public String TaxName { get; set; }
        public Int32 TaxType { get; set; }
        public Decimal CompositeRate { get; set; }
    }
}