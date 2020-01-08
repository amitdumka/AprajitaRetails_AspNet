
namespace AprajitaRetails.Product.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Product.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        public String CategoryName { get; set; }
        public Boolean IsPrimaryCategory { get; set; }
        public Boolean IsSecondaryCategory { get; set; }
    }
}