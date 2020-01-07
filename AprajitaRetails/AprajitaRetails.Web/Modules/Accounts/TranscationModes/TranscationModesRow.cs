
namespace AprajitaRetails.Accounts.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("AprajitaRetails"), Module("Accounts"), TableName("[dbo].[TranscationModes]")]
    [DisplayName("Transcation Modes"), InstanceName("Transcation Modes")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TranscationModesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Transcation Mode Id"), Identity]
        public Int32? TranscationModeId
        {
            get { return Fields.TranscationModeId[this]; }
            set { Fields.TranscationModeId[this] = value; }
        }

        [DisplayName("Transcation"), QuickSearch]
        public String Transcation
        {
            get { return Fields.Transcation[this]; }
            set { Fields.Transcation[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TranscationModeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Transcation; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TranscationModesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TranscationModeId;
            public StringField Transcation;
        }
    }
}
