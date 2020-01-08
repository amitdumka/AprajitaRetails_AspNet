using AprajitaRetails.Accounts.Endpoints;
using AprajitaRetails.Accounts.Entities;
using Serenity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AprajitaRetails.Web.Ops.Trigers
{
    public class OnInsert
    {
        public void GetCashInHand(DateTime onDate)
        {
            var query = new SqlQuery();
            query.Select("CashIn");
            query.Select("CashInHandId");
            query.Select("CashOut");
            query.From("CashInHands");
            query.Where(new Criteria("CIHDate")==onDate);
            
        }

        public void UpdateCashInHand(IUnitOfWork uow,DateTime? onDate,  decimal? cashIn, decimal? cashOut) {
            //On Insert/Create Just Add Value
                   
           
           var onj=  uow.Connection.List<CashInHandsRow>().Where(c=>c.CihDate==onDate).FirstOrDefault();
            if (onj != null)
            {
                onj.CashIn += cashIn; onj.CashOut += cashOut;
                uow.Connection.UpdateById<CashInHandsRow>(onj);
            }
            else
            {
                CashInHandsRow myRow = new CashInHandsRow
                {
                    CashIn = cashIn,
                    CashOut = cashOut,
                    ClosingBalance = 0,
                    OpenningBalance = 0,
                    CihDate = onDate
                };
                uow.Connection.Insert<CashInHandsRow>(myRow);
            }
           


        }

        

        public void UpdateCashInBank(IUnitOfWork uow, DateTime? onDate, decimal? cashIn, decimal? cashOut) {
            var onj = uow.Connection.List<CashInBanksRow>().Where(c => c.CibDate == onDate).FirstOrDefault();
            if (onj != null)
            {
                onj.CashIn += cashIn; onj.CashOut += cashOut;
                uow.Connection.UpdateById<CashInBanksRow>(onj);
            }
            else
            {
                CashInBanksRow myRow = new CashInBanksRow
                {
                    CashIn = cashIn,
                    CashOut = cashOut,
                    ClosingBalance = 0,
                    OpenningBalance = 0,
                    CibDate = onDate
                };
                uow.Connection.Insert<CashInBanksRow>(myRow);
            }
        }

    }

    public class OnUpdate
    {
        public void UpdateCashInHand(IUnitOfWork uow, DateTime? onDate, decimal? cashIn, decimal? cashOut) { }
        public void UpdateCashInBank(IUnitOfWork uow, DateTime? onDate, decimal? cashIn, decimal? cashOut) { }
    }

    public class OnDelete
    {
        // On Delete Just Subract Value

        public void UpdateCashInHand(IUnitOfWork uow, DateTime? onDate, decimal? cashIn, decimal? cashOut) {
            var onj = uow.Connection.List<CashInHandsRow>().Where(c => c.CihDate == onDate).FirstOrDefault();
            if (onj != null)
            {
                onj.CashIn -= cashIn; onj.CashOut -= cashOut;
                uow.Connection.UpdateById<CashInHandsRow>(onj);
            }
            else
            {// Just In Case
                CashInHandsRow myRow = new CashInHandsRow
                {
                    CashIn = cashIn,
                    CashOut = cashOut,
                    ClosingBalance = 0,
                    OpenningBalance = 0,
                    CihDate = onDate
                };
                uow.Connection.Insert<CashInHandsRow>(myRow);
            }

        }
        public void UpdateCashInBank(IUnitOfWork uow, DateTime? onDate, decimal? cashIn, decimal? cashOut) {
            var onj = uow.Connection.List<CashInBanksRow>().Where(c => c.CibDate == onDate).FirstOrDefault();
            if (onj != null)
            {
                onj.CashIn += cashIn; onj.CashOut += cashOut;
                uow.Connection.UpdateById<CashInBanksRow>(onj);
            }
            else
            {
                CashInBanksRow myRow = new CashInBanksRow
                {
                    CashIn = cashIn,
                    CashOut = cashOut,
                    ClosingBalance = 0,
                    OpenningBalance = 0,
                    CibDate = onDate
                };
                uow.Connection.Insert<CashInBanksRow>(myRow);
            }

        }
    }


   
}
