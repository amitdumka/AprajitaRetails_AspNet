
namespace AprajitaRetails.Voyager.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Voyager.CardPaymentDetails")]
    [BasedOnRow(typeof(Entities.CardPaymentDetailsRow), CheckNames = true)]
    public class CardPaymentDetailsForm
    {
        public Int32 SaleInvoiceId { get; set; }
        public Int32 CardType { get; set; }
        public Decimal Amount { get; set; }
        public Int32 AuthCode { get; set; }
        public Int32 LastDigit { get; set; }
    }
}