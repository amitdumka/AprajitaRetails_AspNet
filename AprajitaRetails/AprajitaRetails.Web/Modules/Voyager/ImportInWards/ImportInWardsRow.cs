
namespace AprajitaRetails.Voyager.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Voyager"), TableName("[dbo].[ImportInWards]")]
    [DisplayName("Import In Wards"), InstanceName("Import In Wards")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ImportInWardsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Import In Ward Id"), Identity]
        public Int32? ImportInWardId
        {
            get { return Fields.ImportInWardId[this]; }
            set { Fields.ImportInWardId[this] = value; }
        }

        [DisplayName("In Ward No"), QuickSearch]
        public String InWardNo
        {
            get { return Fields.InWardNo[this]; }
            set { Fields.InWardNo[this] = value; }
        }

        [DisplayName("In Ward Date"), NotNull]
        public DateTime? InWardDate
        {
            get { return Fields.InWardDate[this]; }
            set { Fields.InWardDate[this] = value; }
        }

        [DisplayName("Invoice No")]
        public String InvoiceNo
        {
            get { return Fields.InvoiceNo[this]; }
            set { Fields.InvoiceNo[this] = value; }
        }

        [DisplayName("Invoice Date"), NotNull]
        public DateTime? InvoiceDate
        {
            get { return Fields.InvoiceDate[this]; }
            set { Fields.InvoiceDate[this] = value; }
        }

        [DisplayName("Party Name")]
        public String PartyName
        {
            get { return Fields.PartyName[this]; }
            set { Fields.PartyName[this] = value; }
        }

        [DisplayName("Total Qty"), Size(18), Scale(2), NotNull]
        public Decimal? TotalQty
        {
            get { return Fields.TotalQty[this]; }
            set { Fields.TotalQty[this] = value; }
        }

        [DisplayName("Total Mrp Value"), Column("TotalMRPValue"), Size(18), Scale(2), NotNull]
        public Decimal? TotalMrpValue
        {
            get { return Fields.TotalMrpValue[this]; }
            set { Fields.TotalMrpValue[this] = value; }
        }

        [DisplayName("Total Cost"), Size(18), Scale(2), NotNull]
        public Decimal? TotalCost
        {
            get { return Fields.TotalCost[this]; }
            set { Fields.TotalCost[this] = value; }
        }

        [DisplayName("Import Date")]
        public DateTime? ImportDate
        {
            get { return Fields.ImportDate[this]; }
            set { Fields.ImportDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ImportInWardId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InWardNo; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImportInWardsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ImportInWardId;
            public StringField InWardNo;
            public DateTimeField InWardDate;
            public StringField InvoiceNo;
            public DateTimeField InvoiceDate;
            public StringField PartyName;
            public DecimalField TotalQty;
            public DecimalField TotalMrpValue;
            public DecimalField TotalCost;
            public DateTimeField ImportDate;
        }
    }
}
