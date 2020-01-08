
namespace AprajitaRetails.Sales.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sales.SalePaymentDetails")]
    [BasedOnRow(typeof(Entities.SalePaymentDetailsRow), CheckNames = true)]
    public class SalePaymentDetailsForm
    {
        public Int32 PayMode { get; set; }
        public Decimal CashAmount { get; set; }
        public Decimal CardAmount { get; set; }
        public Decimal MixAmount { get; set; }
    }
}