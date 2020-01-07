
namespace AprajitaRetails.CustomTailoring.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CustomTailoring.TalioringBookings")]
    [BasedOnRow(typeof(Entities.TalioringBookingsRow), CheckNames = true)]
    public class TalioringBookingsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TalioringBookingId { get; set; }
        public DateTime BookingDate { get; set; }
        [EditLink]
        public String CustName { get; set; }
        public DateTime DeliveryDate { get; set; }
        public DateTime TryDate { get; set; }
        public String BookingSlipNo { get; set; }
        public Decimal TotalAmount { get; set; }
        public Int32 TotalQty { get; set; }
        public Int32 ShirtQty { get; set; }
        public Decimal ShirtPrice { get; set; }
        public Int32 PantQty { get; set; }
        public Decimal PantPrice { get; set; }
        public Int32 CoatQty { get; set; }
        public Decimal CoatPrice { get; set; }
        public Int32 KurtaQty { get; set; }
        public Decimal KurtaPrice { get; set; }
        public Int32 BundiQty { get; set; }
        public Decimal BundiPrice { get; set; }
        public Int32 Others { get; set; }
        public Decimal OthersPrice { get; set; }
        public Boolean IsDelivered { get; set; }
    }
}