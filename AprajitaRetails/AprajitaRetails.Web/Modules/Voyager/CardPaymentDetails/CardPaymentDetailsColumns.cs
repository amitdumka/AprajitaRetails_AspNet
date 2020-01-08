
namespace AprajitaRetails.Voyager.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Voyager.CardPaymentDetails")]
    [BasedOnRow(typeof(Entities.CardPaymentDetailsRow), CheckNames = true)]
    public class CardPaymentDetailsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CardPaymentDetailId { get; set; }
        public Int32 SaleInvoiceId { get; set; }
        public Int32 CardType { get; set; }
        public Decimal Amount { get; set; }
        public Int32 AuthCode { get; set; }
        public Int32 LastDigit { get; set; }
    }
}