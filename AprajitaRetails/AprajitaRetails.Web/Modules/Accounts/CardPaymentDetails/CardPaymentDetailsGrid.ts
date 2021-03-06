﻿
namespace AprajitaRetails.Accounts {

    @Serenity.Decorators.registerClass()
    export class CardPaymentDetailsGrid extends Serenity.EntityGrid<CardPaymentDetailsRow, any> {
        protected getColumnsKey() { return 'Accounts.CardPaymentDetails'; }
        protected getDialogType() { return CardPaymentDetailsDialog; }
        protected getIdProperty() { return CardPaymentDetailsRow.idProperty; }
        protected getInsertPermission() { return CardPaymentDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return CardPaymentDetailsRow.localTextPrefix; }
        protected getService() { return CardPaymentDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}