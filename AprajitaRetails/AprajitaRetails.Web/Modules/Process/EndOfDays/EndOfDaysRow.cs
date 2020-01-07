
namespace AprajitaRetails.Process.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Process"), TableName("[dbo].[EndOfDays]")]
    [DisplayName("End Of Days"), InstanceName("End Of Days")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EndOfDaysRow : Row, IIdRow
    {
        [DisplayName("End Of Day Id"), Identity]
        public Int32? EndOfDayId
        {
            get { return Fields.EndOfDayId[this]; }
            set { Fields.EndOfDayId[this] = value; }
        }

        [DisplayName("Eod Date"), Column("EOD_Date"), NotNull]
        public DateTime? EodDate
        {
            get { return Fields.EodDate[this]; }
            set { Fields.EodDate[this] = value; }
        }

        [DisplayName("Shirting"), NotNull]
        public Single? Shirting
        {
            get { return Fields.Shirting[this]; }
            set { Fields.Shirting[this] = value; }
        }

        [DisplayName("Suiting"), NotNull]
        public Single? Suiting
        {
            get { return Fields.Suiting[this]; }
            set { Fields.Suiting[this] = value; }
        }

        [DisplayName("Uspa"), Column("USPA"), NotNull]
        public Int32? Uspa
        {
            get { return Fields.Uspa[this]; }
            set { Fields.Uspa[this] = value; }
        }

        [DisplayName("Fm Arrow"), Column("FM_Arrow"), NotNull]
        public Int32? FmArrow
        {
            get { return Fields.FmArrow[this]; }
            set { Fields.FmArrow[this] = value; }
        }

        [DisplayName("Rwt"), Column("RWT"), NotNull]
        public Int32? Rwt
        {
            get { return Fields.Rwt[this]; }
            set { Fields.Rwt[this] = value; }
        }

        [DisplayName("Access"), NotNull]
        public Int32? Access
        {
            get { return Fields.Access[this]; }
            set { Fields.Access[this] = value; }
        }

        [DisplayName("Cash In Hand"), Size(18), Scale(2), NotNull]
        public Decimal? CashInHand
        {
            get { return Fields.CashInHand[this]; }
            set { Fields.CashInHand[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EndOfDayId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EndOfDaysRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EndOfDayId;
            public DateTimeField EodDate;
            public SingleField Shirting;
            public SingleField Suiting;
            public Int32Field Uspa;
            public Int32Field FmArrow;
            public Int32Field Rwt;
            public Int32Field Access;
            public DecimalField CashInHand;
        }
    }
}
