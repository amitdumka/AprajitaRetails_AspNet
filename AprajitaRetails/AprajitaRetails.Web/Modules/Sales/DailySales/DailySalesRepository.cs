
namespace AprajitaRetails.Sales.Repositories
{
    using AprajitaRetails.Web.Ops.Trigers;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.DailySalesRow;

    public class DailySalesRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            var res= new MySaveHandler().Process(uow, request, SaveRequestType.Create);
            if (res.Error==null )
            {
                new OnInsert().UpdateCashInHand(uow, request.Entity.SaleDate, request.Entity.CashAmount, 0);
            }
            return res;
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
           var res= new MyDeleteHandler().Process(uow, request);
            //if (res.Error == null)
            //{
            //    new OnInsert().UpdateCashInHand(uow, request.Entity.SaleDate, request.Entity.CashAmount, 0);
            //}
            return res;
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> { }
    }
}