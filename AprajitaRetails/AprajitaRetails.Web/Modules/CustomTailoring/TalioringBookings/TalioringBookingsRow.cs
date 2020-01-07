
namespace AprajitaRetails.CustomTailoring.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("CustomTailoring"), TableName("[dbo].[TalioringBookings]")]
    [DisplayName("Talioring Bookings"), InstanceName("Talioring Bookings")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TalioringBookingsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Talioring Booking Id"), Identity]
        public Int32? TalioringBookingId
        {
            get { return Fields.TalioringBookingId[this]; }
            set { Fields.TalioringBookingId[this] = value; }
        }

        [DisplayName("Booking Date"), NotNull]
        public DateTime? BookingDate
        {
            get { return Fields.BookingDate[this]; }
            set { Fields.BookingDate[this] = value; }
        }

        [DisplayName("Cust Name"), QuickSearch]
        public String CustName
        {
            get { return Fields.CustName[this]; }
            set { Fields.CustName[this] = value; }
        }

        [DisplayName("Delivery Date"), NotNull]
        public DateTime? DeliveryDate
        {
            get { return Fields.DeliveryDate[this]; }
            set { Fields.DeliveryDate[this] = value; }
        }

        [DisplayName("Try Date"), NotNull]
        public DateTime? TryDate
        {
            get { return Fields.TryDate[this]; }
            set { Fields.TryDate[this] = value; }
        }

        [DisplayName("Booking Slip No")]
        public String BookingSlipNo
        {
            get { return Fields.BookingSlipNo[this]; }
            set { Fields.BookingSlipNo[this] = value; }
        }

        [DisplayName("Total Amount"), Size(19), Scale(4), NotNull]
        public Decimal? TotalAmount
        {
            get { return Fields.TotalAmount[this]; }
            set { Fields.TotalAmount[this] = value; }
        }

        [DisplayName("Total Qty"), NotNull]
        public Int32? TotalQty
        {
            get { return Fields.TotalQty[this]; }
            set { Fields.TotalQty[this] = value; }
        }

        [DisplayName("Shirt Qty"), NotNull]
        public Int32? ShirtQty
        {
            get { return Fields.ShirtQty[this]; }
            set { Fields.ShirtQty[this] = value; }
        }

        [DisplayName("Shirt Price"), Size(19), Scale(4), NotNull]
        public Decimal? ShirtPrice
        {
            get { return Fields.ShirtPrice[this]; }
            set { Fields.ShirtPrice[this] = value; }
        }

        [DisplayName("Pant Qty"), NotNull]
        public Int32? PantQty
        {
            get { return Fields.PantQty[this]; }
            set { Fields.PantQty[this] = value; }
        }

        [DisplayName("Pant Price"), Size(19), Scale(4), NotNull]
        public Decimal? PantPrice
        {
            get { return Fields.PantPrice[this]; }
            set { Fields.PantPrice[this] = value; }
        }

        [DisplayName("Coat Qty"), NotNull]
        public Int32? CoatQty
        {
            get { return Fields.CoatQty[this]; }
            set { Fields.CoatQty[this] = value; }
        }

        [DisplayName("Coat Price"), Size(19), Scale(4), NotNull]
        public Decimal? CoatPrice
        {
            get { return Fields.CoatPrice[this]; }
            set { Fields.CoatPrice[this] = value; }
        }

        [DisplayName("Kurta Qty"), NotNull]
        public Int32? KurtaQty
        {
            get { return Fields.KurtaQty[this]; }
            set { Fields.KurtaQty[this] = value; }
        }

        [DisplayName("Kurta Price"), Size(19), Scale(4), NotNull]
        public Decimal? KurtaPrice
        {
            get { return Fields.KurtaPrice[this]; }
            set { Fields.KurtaPrice[this] = value; }
        }

        [DisplayName("Bundi Qty"), NotNull]
        public Int32? BundiQty
        {
            get { return Fields.BundiQty[this]; }
            set { Fields.BundiQty[this] = value; }
        }

        [DisplayName("Bundi Price"), Size(19), Scale(4), NotNull]
        public Decimal? BundiPrice
        {
            get { return Fields.BundiPrice[this]; }
            set { Fields.BundiPrice[this] = value; }
        }

        [DisplayName("Others"), NotNull]
        public Int32? Others
        {
            get { return Fields.Others[this]; }
            set { Fields.Others[this] = value; }
        }

        [DisplayName("Others Price"), Size(19), Scale(4), NotNull]
        public Decimal? OthersPrice
        {
            get { return Fields.OthersPrice[this]; }
            set { Fields.OthersPrice[this] = value; }
        }

        [DisplayName("Is Delivered"), NotNull]
        public Boolean? IsDelivered
        {
            get { return Fields.IsDelivered[this]; }
            set { Fields.IsDelivered[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TalioringBookingId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TalioringBookingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TalioringBookingId;
            public DateTimeField BookingDate;
            public StringField CustName;
            public DateTimeField DeliveryDate;
            public DateTimeField TryDate;
            public StringField BookingSlipNo;
            public DecimalField TotalAmount;
            public Int32Field TotalQty;
            public Int32Field ShirtQty;
            public DecimalField ShirtPrice;
            public Int32Field PantQty;
            public DecimalField PantPrice;
            public Int32Field CoatQty;
            public DecimalField CoatPrice;
            public Int32Field KurtaQty;
            public DecimalField KurtaPrice;
            public Int32Field BundiQty;
            public DecimalField BundiPrice;
            public Int32Field Others;
            public DecimalField OthersPrice;
            public BooleanField IsDelivered;
        }
    }
}
