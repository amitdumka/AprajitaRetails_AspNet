
namespace AprajitaRetails.Accounts.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Accounts.TranscationModes")]
    [BasedOnRow(typeof(Entities.TranscationModesRow), CheckNames = true)]
    public class TranscationModesForm
    {
        public String Transcation { get; set; }
    }
}