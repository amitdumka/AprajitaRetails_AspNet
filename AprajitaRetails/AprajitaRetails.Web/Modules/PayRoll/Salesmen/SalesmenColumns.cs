
namespace AprajitaRetails.PayRoll.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("PayRoll.Salesmen")]
    [BasedOnRow(typeof(Entities.SalesmenRow), CheckNames = true)]
    public class SalesmenColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SalesmanId { get; set; }
        [EditLink]
        public String SalesmanName { get; set; }
    }
}