
namespace AprajitaRetails.Banking.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Banking.Banks")]
    [BasedOnRow(typeof(Entities.BanksRow), CheckNames = true)]
    public class BanksForm
    {
        public String BankName { get; set; }
    }
}