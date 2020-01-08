
namespace AprajitaRetails.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.SaleTaxTypes")]
    [BasedOnRow(typeof(Entities.SaleTaxTypesRow), CheckNames = true)]
    public class SaleTaxTypesForm
    {
        public String TaxName { get; set; }
        public Int32 TaxType { get; set; }
        public Decimal CompositeRate { get; set; }
    }
}