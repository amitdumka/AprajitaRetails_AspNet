
namespace AprajitaRetails.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Voyager"), Module("Accounts"), TableName("[dbo].[PurchaseTaxTypes]")]
    [DisplayName("Purchase Tax Types"), InstanceName("Purchase Tax Types")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PurchaseTaxTypesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Tax Type Id"), Identity]
        public Int32? PurchaseTaxTypeId
        {
            get { return Fields.PurchaseTaxTypeId[this]; }
            set { Fields.PurchaseTaxTypeId[this] = value; }
        }

        [DisplayName("Tax Name"), QuickSearch]
        public String TaxName
        {
            get { return Fields.TaxName[this]; }
            set { Fields.TaxName[this] = value; }
        }

        [DisplayName("Tax Type"), NotNull]
        public Int32? TaxType
        {
            get { return Fields.TaxType[this]; }
            set { Fields.TaxType[this] = value; }
        }

        [DisplayName("Composite Rate"), Size(19), Scale(4), NotNull]
        public Decimal? CompositeRate
        {
            get { return Fields.CompositeRate[this]; }
            set { Fields.CompositeRate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseTaxTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TaxName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseTaxTypesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PurchaseTaxTypeId;
            public StringField TaxName;
            public Int32Field TaxType;
            public DecimalField CompositeRate;
        }
    }
}
