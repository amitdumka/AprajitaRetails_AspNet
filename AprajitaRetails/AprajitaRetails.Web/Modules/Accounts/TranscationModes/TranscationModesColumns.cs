
namespace AprajitaRetails.Accounts.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Accounts.TranscationModes")]
    [BasedOnRow(typeof(Entities.TranscationModesRow), CheckNames = true)]
    public class TranscationModesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TranscationModeId { get; set; }
        [EditLink]
        public String Transcation { get; set; }
    }
}