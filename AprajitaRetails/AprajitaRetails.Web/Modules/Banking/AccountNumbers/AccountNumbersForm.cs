
namespace AprajitaRetails.Banking.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Banking.AccountNumbers")]
    [BasedOnRow(typeof(Entities.AccountNumbersRow), CheckNames = true)]
    public class AccountNumbersForm
    {
        public Int32 BankId { get; set; }
        public String Account { get; set; }
    }
}