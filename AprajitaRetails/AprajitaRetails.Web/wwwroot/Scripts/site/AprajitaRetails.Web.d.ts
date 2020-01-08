/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface CardPaymentDetailsForm {
        SaleInvoiceId: Serenity.IntegerEditor;
        CardType: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        AuthCode: Serenity.IntegerEditor;
        LastDigit: Serenity.IntegerEditor;
    }
    class CardPaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface CardPaymentDetailsRow {
        CardPaymentDetailId?: number;
        SaleInvoiceId?: number;
        CardType?: number;
        Amount?: number;
        AuthCode?: number;
        LastDigit?: number;
        CardPaymentDetailPayMode?: number;
        CardPaymentDetailCashAmount?: number;
        CardPaymentDetailCardAmount?: number;
        CardPaymentDetailMixAmount?: number;
    }
    namespace CardPaymentDetailsRow {
        const idProperty = "CardPaymentDetailId";
        const localTextPrefix = "Accounts.CardPaymentDetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CardPaymentDetailId = "CardPaymentDetailId",
            SaleInvoiceId = "SaleInvoiceId",
            CardType = "CardType",
            Amount = "Amount",
            AuthCode = "AuthCode",
            LastDigit = "LastDigit",
            CardPaymentDetailPayMode = "CardPaymentDetailPayMode",
            CardPaymentDetailCashAmount = "CardPaymentDetailCashAmount",
            CardPaymentDetailCardAmount = "CardPaymentDetailCardAmount",
            CardPaymentDetailMixAmount = "CardPaymentDetailMixAmount"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace CardPaymentDetailsService {
        const baseUrl = "Accounts/CardPaymentDetails";
        function Create(request: Serenity.SaveRequest<CardPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CardPaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CardPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CardPaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/CardPaymentDetails/Create",
            Update = "Accounts/CardPaymentDetails/Update",
            Delete = "Accounts/CardPaymentDetails/Delete",
            Retrieve = "Accounts/CardPaymentDetails/Retrieve",
            List = "Accounts/CardPaymentDetails/List"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface CashInBanksForm {
        CibDate: Serenity.DateEditor;
        OpenningBalance: Serenity.DecimalEditor;
        ClosingBalance: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
    }
    class CashInBanksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface CashInBanksRow {
        CashInBankId?: number;
        CibDate?: string;
        OpenningBalance?: number;
        ClosingBalance?: number;
        CashIn?: number;
        CashOut?: number;
    }
    namespace CashInBanksRow {
        const idProperty = "CashInBankId";
        const localTextPrefix = "Accounts.CashInBanks";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CashInBankId = "CashInBankId",
            CibDate = "CibDate",
            OpenningBalance = "OpenningBalance",
            ClosingBalance = "ClosingBalance",
            CashIn = "CashIn",
            CashOut = "CashOut"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace CashInBanksService {
        const baseUrl = "Accounts/CashInBanks";
        function Create(request: Serenity.SaveRequest<CashInBanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashInBanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashInBanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashInBanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/CashInBanks/Create",
            Update = "Accounts/CashInBanks/Update",
            Delete = "Accounts/CashInBanks/Delete",
            Retrieve = "Accounts/CashInBanks/Retrieve",
            List = "Accounts/CashInBanks/List"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface CashInHandsForm {
        CihDate: Serenity.DateEditor;
        OpenningBalance: Serenity.DecimalEditor;
        ClosingBalance: Serenity.DecimalEditor;
        CashIn: Serenity.DecimalEditor;
        CashOut: Serenity.DecimalEditor;
    }
    class CashInHandsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface CashInHandsRow {
        CashInHandId?: number;
        CihDate?: string;
        OpenningBalance?: number;
        ClosingBalance?: number;
        CashIn?: number;
        CashOut?: number;
    }
    namespace CashInHandsRow {
        const idProperty = "CashInHandId";
        const localTextPrefix = "Accounts.CashInHands";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CashInHandId = "CashInHandId",
            CihDate = "CihDate",
            OpenningBalance = "OpenningBalance",
            ClosingBalance = "ClosingBalance",
            CashIn = "CashIn",
            CashOut = "CashOut"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace CashInHandsService {
        const baseUrl = "Accounts/CashInHands";
        function Create(request: Serenity.SaveRequest<CashInHandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashInHandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashInHandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashInHandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/CashInHands/Create",
            Update = "Accounts/CashInHands/Update",
            Delete = "Accounts/CashInHands/Delete",
            Retrieve = "Accounts/CashInHands/Retrieve",
            List = "Accounts/CashInHands/List"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface PurchaseTaxTypesForm {
        TaxName: Serenity.StringEditor;
        TaxType: Serenity.IntegerEditor;
        CompositeRate: Serenity.DecimalEditor;
    }
    class PurchaseTaxTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface PurchaseTaxTypesRow {
        PurchaseTaxTypeId?: number;
        TaxName?: string;
        TaxType?: number;
        CompositeRate?: number;
    }
    namespace PurchaseTaxTypesRow {
        const idProperty = "PurchaseTaxTypeId";
        const nameProperty = "TaxName";
        const localTextPrefix = "Accounts.PurchaseTaxTypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PurchaseTaxTypeId = "PurchaseTaxTypeId",
            TaxName = "TaxName",
            TaxType = "TaxType",
            CompositeRate = "CompositeRate"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace PurchaseTaxTypesService {
        const baseUrl = "Accounts/PurchaseTaxTypes";
        function Create(request: Serenity.SaveRequest<PurchaseTaxTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseTaxTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseTaxTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseTaxTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/PurchaseTaxTypes/Create",
            Update = "Accounts/PurchaseTaxTypes/Update",
            Delete = "Accounts/PurchaseTaxTypes/Delete",
            Retrieve = "Accounts/PurchaseTaxTypes/Retrieve",
            List = "Accounts/PurchaseTaxTypes/List"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface SaleTaxTypesForm {
        TaxName: Serenity.StringEditor;
        TaxType: Serenity.IntegerEditor;
        CompositeRate: Serenity.DecimalEditor;
    }
    class SaleTaxTypesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface SaleTaxTypesRow {
        SaleTaxTypeId?: number;
        TaxName?: string;
        TaxType?: number;
        CompositeRate?: number;
    }
    namespace SaleTaxTypesRow {
        const idProperty = "SaleTaxTypeId";
        const nameProperty = "TaxName";
        const localTextPrefix = "Accounts.SaleTaxTypes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SaleTaxTypeId = "SaleTaxTypeId",
            TaxName = "TaxName",
            TaxType = "TaxType",
            CompositeRate = "CompositeRate"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace SaleTaxTypesService {
        const baseUrl = "Accounts/SaleTaxTypes";
        function Create(request: Serenity.SaveRequest<SaleTaxTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaleTaxTypesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleTaxTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleTaxTypesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/SaleTaxTypes/Create",
            Update = "Accounts/SaleTaxTypes/Update",
            Delete = "Accounts/SaleTaxTypes/Delete",
            Retrieve = "Accounts/SaleTaxTypes/Retrieve",
            List = "Accounts/SaleTaxTypes/List"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface SuspenseAccountsForm {
        EntryDate: Serenity.DateEditor;
        ReferanceDetails: Serenity.StringEditor;
        InAmount: Serenity.DecimalEditor;
        OutAmount: Serenity.DecimalEditor;
        IsCleared: Serenity.BooleanEditor;
        ClearedDetails: Serenity.StringEditor;
        ReviewBy: Serenity.StringEditor;
    }
    class SuspenseAccountsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface SuspenseAccountsRow {
        SuspenseAccountId?: number;
        EntryDate?: string;
        ReferanceDetails?: string;
        InAmount?: number;
        OutAmount?: number;
        IsCleared?: boolean;
        ClearedDetails?: string;
        ReviewBy?: string;
    }
    namespace SuspenseAccountsRow {
        const idProperty = "SuspenseAccountId";
        const nameProperty = "ReferanceDetails";
        const localTextPrefix = "Accounts.SuspenseAccounts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SuspenseAccountId = "SuspenseAccountId",
            EntryDate = "EntryDate",
            ReferanceDetails = "ReferanceDetails",
            InAmount = "InAmount",
            OutAmount = "OutAmount",
            IsCleared = "IsCleared",
            ClearedDetails = "ClearedDetails",
            ReviewBy = "ReviewBy"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace SuspenseAccountsService {
        const baseUrl = "Accounts/SuspenseAccounts";
        function Create(request: Serenity.SaveRequest<SuspenseAccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuspenseAccountsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuspenseAccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuspenseAccountsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/SuspenseAccounts/Create",
            Update = "Accounts/SuspenseAccounts/Update",
            Delete = "Accounts/SuspenseAccounts/Delete",
            Retrieve = "Accounts/SuspenseAccounts/Retrieve",
            List = "Accounts/SuspenseAccounts/List"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
}
declare namespace AprajitaRetails.Accounts {
    interface TranscationModesForm {
        Transcation: Serenity.StringEditor;
    }
    class TranscationModesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Accounts {
    interface TranscationModesRow {
        TranscationModeId?: number;
        Transcation?: string;
    }
    namespace TranscationModesRow {
        const idProperty = "TranscationModeId";
        const nameProperty = "Transcation";
        const localTextPrefix = "Accounts.TranscationModes";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TranscationModeId = "TranscationModeId",
            Transcation = "Transcation"
        }
    }
}
declare namespace AprajitaRetails.Accounts {
    namespace TranscationModesService {
        const baseUrl = "Accounts/TranscationModes";
        function Create(request: Serenity.SaveRequest<TranscationModesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TranscationModesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TranscationModesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TranscationModesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Accounts/TranscationModes/Create",
            Update = "Accounts/TranscationModes/Update",
            Delete = "Accounts/TranscationModes/Delete",
            Retrieve = "Accounts/TranscationModes/Retrieve",
            List = "Accounts/TranscationModes/List"
        }
    }
}
declare namespace AprajitaRetails.Administration {
}
declare namespace AprajitaRetails.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace AprajitaRetails.Administration {
}
declare namespace AprajitaRetails.Administration {
}
declare namespace AprajitaRetails.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace AprajitaRetails.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace AprajitaRetails.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    interface SergenConnection {
        Key?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    interface SergenGenerateOptions {
        Row?: boolean;
        Service?: boolean;
        UI?: boolean;
    }
}
declare namespace AprajitaRetails.Administration {
    interface SergenGenerateRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
        Table?: SergenTable;
        GenerateOptions?: SergenGenerateOptions;
    }
}
declare namespace AprajitaRetails.Administration {
    interface SergenListTablesRequest extends Serenity.ServiceRequest {
        ConnectionKey?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    namespace SergenService {
        const baseUrl = "Administration/Sergen";
        function ListConnections(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<SergenConnection>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListTables(request: SergenListTablesRequest, onSuccess?: (response: Serenity.ListResponse<SergenTable>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Generate(request: SergenGenerateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            ListConnections = "Administration/Sergen/ListConnections",
            ListTables = "Administration/Sergen/ListTables",
            Generate = "Administration/Sergen/Generate"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    interface SergenTable {
        Tablename?: string;
        Identifier?: string;
        Module?: string;
        PermissionKey?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace AprajitaRetails.Administration {
}
declare namespace AprajitaRetails.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace AprajitaRetails.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace AprajitaRetails.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace AprajitaRetails.Banking {
}
declare namespace AprajitaRetails.Banking {
    interface AccountNumbersForm {
        BankId: Serenity.IntegerEditor;
        Account: Serenity.StringEditor;
    }
    class AccountNumbersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Banking {
    interface AccountNumbersRow {
        AccountNumberId?: number;
        BankId?: number;
        Account?: string;
        BankBankName?: string;
    }
    namespace AccountNumbersRow {
        const idProperty = "AccountNumberId";
        const nameProperty = "Account";
        const localTextPrefix = "Banking.AccountNumbers";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AccountNumberId = "AccountNumberId",
            BankId = "BankId",
            Account = "Account",
            BankBankName = "BankBankName"
        }
    }
}
declare namespace AprajitaRetails.Banking {
    namespace AccountNumbersService {
        const baseUrl = "Banking/AccountNumbers";
        function Create(request: Serenity.SaveRequest<AccountNumbersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AccountNumbersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AccountNumbersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AccountNumbersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Banking/AccountNumbers/Create",
            Update = "Banking/AccountNumbers/Update",
            Delete = "Banking/AccountNumbers/Delete",
            Retrieve = "Banking/AccountNumbers/Retrieve",
            List = "Banking/AccountNumbers/List"
        }
    }
}
declare namespace AprajitaRetails.Banking {
}
declare namespace AprajitaRetails.Banking {
    interface BankDepositsForm {
        DepoDate: Serenity.DateEditor;
        AccountNumberId: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class BankDepositsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Banking {
    interface BankDepositsRow {
        BankDepositId?: number;
        DepoDate?: string;
        AccountNumberId?: number;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        Remarks?: string;
        AccountNumberBankId?: number;
        AccountNumberAccount?: string;
    }
    namespace BankDepositsRow {
        const idProperty = "BankDepositId";
        const nameProperty = "Details";
        const localTextPrefix = "Banking.BankDeposits";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            BankDepositId = "BankDepositId",
            DepoDate = "DepoDate",
            AccountNumberId = "AccountNumberId",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            Remarks = "Remarks",
            AccountNumberBankId = "AccountNumberBankId",
            AccountNumberAccount = "AccountNumberAccount"
        }
    }
}
declare namespace AprajitaRetails.Banking {
    namespace BankDepositsService {
        const baseUrl = "Banking/BankDeposits";
        function Create(request: Serenity.SaveRequest<BankDepositsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankDepositsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankDepositsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankDepositsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Banking/BankDeposits/Create",
            Update = "Banking/BankDeposits/Update",
            Delete = "Banking/BankDeposits/Delete",
            Retrieve = "Banking/BankDeposits/Retrieve",
            List = "Banking/BankDeposits/List"
        }
    }
}
declare namespace AprajitaRetails.Banking {
}
declare namespace AprajitaRetails.Banking {
    interface BanksForm {
        BankName: Serenity.StringEditor;
    }
    class BanksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Banking {
    interface BanksRow {
        BankId?: number;
        BankName?: string;
    }
    namespace BanksRow {
        const idProperty = "BankId";
        const nameProperty = "BankName";
        const localTextPrefix = "Banking.Banks";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            BankId = "BankId",
            BankName = "BankName"
        }
    }
}
declare namespace AprajitaRetails.Banking {
    namespace BanksService {
        const baseUrl = "Banking/Banks";
        function Create(request: Serenity.SaveRequest<BanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BanksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BanksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Banking/Banks/Create",
            Update = "Banking/Banks/Update",
            Delete = "Banking/Banks/Delete",
            Retrieve = "Banking/Banks/Retrieve",
            List = "Banking/Banks/List"
        }
    }
}
declare namespace AprajitaRetails.Banking {
}
declare namespace AprajitaRetails.Banking {
    interface BankWithdrawalsForm {
        DepoDate: Serenity.DateEditor;
        AccountNumberId: Serenity.IntegerEditor;
        Amount: Serenity.DecimalEditor;
        ChequeNo: Serenity.StringEditor;
        SignedBy: Serenity.StringEditor;
        ApprovedBy: Serenity.StringEditor;
        InNameOf: Serenity.StringEditor;
    }
    class BankWithdrawalsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Banking {
    interface BankWithdrawalsRow {
        BankWithdrawalId?: number;
        DepoDate?: string;
        AccountNumberId?: number;
        Amount?: number;
        ChequeNo?: string;
        SignedBy?: string;
        ApprovedBy?: string;
        InNameOf?: string;
        AccountNumberBankId?: number;
        AccountNumberAccount?: string;
    }
    namespace BankWithdrawalsRow {
        const idProperty = "BankWithdrawalId";
        const nameProperty = "ChequeNo";
        const localTextPrefix = "Banking.BankWithdrawals";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            BankWithdrawalId = "BankWithdrawalId",
            DepoDate = "DepoDate",
            AccountNumberId = "AccountNumberId",
            Amount = "Amount",
            ChequeNo = "ChequeNo",
            SignedBy = "SignedBy",
            ApprovedBy = "ApprovedBy",
            InNameOf = "InNameOf",
            AccountNumberBankId = "AccountNumberBankId",
            AccountNumberAccount = "AccountNumberAccount"
        }
    }
}
declare namespace AprajitaRetails.Banking {
    namespace BankWithdrawalsService {
        const baseUrl = "Banking/BankWithdrawals";
        function Create(request: Serenity.SaveRequest<BankWithdrawalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BankWithdrawalsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BankWithdrawalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BankWithdrawalsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Banking/BankWithdrawals/Create",
            Update = "Banking/BankWithdrawals/Update",
            Delete = "Banking/BankWithdrawals/Delete",
            Retrieve = "Banking/BankWithdrawals/Retrieve",
            List = "Banking/BankWithdrawals/List"
        }
    }
}
declare namespace AprajitaRetails.Banking {
}
declare namespace AprajitaRetails.Banking {
    interface ChequesLogsForm {
        BankName: Serenity.StringEditor;
        AccountNumber: Serenity.StringEditor;
        ChequesDate: Serenity.DateEditor;
        DepositDate: Serenity.DateEditor;
        ClearedDate: Serenity.DateEditor;
        IssuedBy: Serenity.StringEditor;
        IssuedTo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        IsPdc: Serenity.BooleanEditor;
        IsIssuedByAprajitaRetails: Serenity.BooleanEditor;
        IsDepositedOnAprajitaRetails: Serenity.BooleanEditor;
        Remarks: Serenity.StringEditor;
    }
    class ChequesLogsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Banking {
    interface ChequesLogsRow {
        ChequesLogId?: number;
        BankName?: string;
        AccountNumber?: string;
        ChequesDate?: string;
        DepositDate?: string;
        ClearedDate?: string;
        IssuedBy?: string;
        IssuedTo?: string;
        Amount?: number;
        IsPdc?: boolean;
        IsIssuedByAprajitaRetails?: boolean;
        IsDepositedOnAprajitaRetails?: boolean;
        Remarks?: string;
    }
    namespace ChequesLogsRow {
        const idProperty = "ChequesLogId";
        const nameProperty = "BankName";
        const localTextPrefix = "Banking.ChequesLogs";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ChequesLogId = "ChequesLogId",
            BankName = "BankName",
            AccountNumber = "AccountNumber",
            ChequesDate = "ChequesDate",
            DepositDate = "DepositDate",
            ClearedDate = "ClearedDate",
            IssuedBy = "IssuedBy",
            IssuedTo = "IssuedTo",
            Amount = "Amount",
            IsPdc = "IsPdc",
            IsIssuedByAprajitaRetails = "IsIssuedByAprajitaRetails",
            IsDepositedOnAprajitaRetails = "IsDepositedOnAprajitaRetails",
            Remarks = "Remarks"
        }
    }
}
declare namespace AprajitaRetails.Banking {
    namespace ChequesLogsService {
        const baseUrl = "Banking/ChequesLogs";
        function Create(request: Serenity.SaveRequest<ChequesLogsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ChequesLogsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ChequesLogsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ChequesLogsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Banking/ChequesLogs/Create",
            Update = "Banking/ChequesLogs/Update",
            Delete = "Banking/ChequesLogs/Delete",
            Retrieve = "Banking/ChequesLogs/Retrieve",
            List = "Banking/ChequesLogs/List"
        }
    }
}
declare namespace AprajitaRetails.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace AprajitaRetails.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace AprajitaRetails.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace AprajitaRetails.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace AprajitaRetails.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace AprajitaRetails.CustomTailoring {
}
declare namespace AprajitaRetails.CustomTailoring {
    interface TalioringBookingsForm {
        BookingDate: Serenity.DateEditor;
        CustName: Serenity.StringEditor;
        DeliveryDate: Serenity.DateEditor;
        TryDate: Serenity.DateEditor;
        BookingSlipNo: Serenity.StringEditor;
        TotalAmount: Serenity.DecimalEditor;
        TotalQty: Serenity.IntegerEditor;
        ShirtQty: Serenity.IntegerEditor;
        ShirtPrice: Serenity.DecimalEditor;
        PantQty: Serenity.IntegerEditor;
        PantPrice: Serenity.DecimalEditor;
        CoatQty: Serenity.IntegerEditor;
        CoatPrice: Serenity.DecimalEditor;
        KurtaQty: Serenity.IntegerEditor;
        KurtaPrice: Serenity.DecimalEditor;
        BundiQty: Serenity.IntegerEditor;
        BundiPrice: Serenity.DecimalEditor;
        Others: Serenity.IntegerEditor;
        OthersPrice: Serenity.DecimalEditor;
        IsDelivered: Serenity.BooleanEditor;
    }
    class TalioringBookingsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    interface TalioringBookingsRow {
        TalioringBookingId?: number;
        BookingDate?: string;
        CustName?: string;
        DeliveryDate?: string;
        TryDate?: string;
        BookingSlipNo?: string;
        TotalAmount?: number;
        TotalQty?: number;
        ShirtQty?: number;
        ShirtPrice?: number;
        PantQty?: number;
        PantPrice?: number;
        CoatQty?: number;
        CoatPrice?: number;
        KurtaQty?: number;
        KurtaPrice?: number;
        BundiQty?: number;
        BundiPrice?: number;
        Others?: number;
        OthersPrice?: number;
        IsDelivered?: boolean;
    }
    namespace TalioringBookingsRow {
        const idProperty = "TalioringBookingId";
        const nameProperty = "CustName";
        const localTextPrefix = "CustomTailoring.TalioringBookings";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TalioringBookingId = "TalioringBookingId",
            BookingDate = "BookingDate",
            CustName = "CustName",
            DeliveryDate = "DeliveryDate",
            TryDate = "TryDate",
            BookingSlipNo = "BookingSlipNo",
            TotalAmount = "TotalAmount",
            TotalQty = "TotalQty",
            ShirtQty = "ShirtQty",
            ShirtPrice = "ShirtPrice",
            PantQty = "PantQty",
            PantPrice = "PantPrice",
            CoatQty = "CoatQty",
            CoatPrice = "CoatPrice",
            KurtaQty = "KurtaQty",
            KurtaPrice = "KurtaPrice",
            BundiQty = "BundiQty",
            BundiPrice = "BundiPrice",
            Others = "Others",
            OthersPrice = "OthersPrice",
            IsDelivered = "IsDelivered"
        }
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    namespace TalioringBookingsService {
        const baseUrl = "CustomTailoring/TalioringBookings";
        function Create(request: Serenity.SaveRequest<TalioringBookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TalioringBookingsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TalioringBookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TalioringBookingsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CustomTailoring/TalioringBookings/Create",
            Update = "CustomTailoring/TalioringBookings/Update",
            Delete = "CustomTailoring/TalioringBookings/Delete",
            Retrieve = "CustomTailoring/TalioringBookings/Retrieve",
            List = "CustomTailoring/TalioringBookings/List"
        }
    }
}
declare namespace AprajitaRetails.CustomTailoring {
}
declare namespace AprajitaRetails.CustomTailoring {
    interface TalioringDeliveriesForm {
        DeliveryDate: Serenity.DateEditor;
        TalioringBookingId: Serenity.IntegerEditor;
        InvNo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
    }
    class TalioringDeliveriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    interface TalioringDeliveriesRow {
        TalioringDeliveryId?: number;
        DeliveryDate?: string;
        TalioringBookingId?: number;
        InvNo?: string;
        Amount?: number;
        Remarks?: string;
        TalioringBookingBookingDate?: string;
        TalioringBookingCustName?: string;
        TalioringBookingDeliveryDate?: string;
        TalioringBookingTryDate?: string;
        TalioringBookingBookingSlipNo?: string;
        TalioringBookingTotalAmount?: number;
        TalioringBookingTotalQty?: number;
        TalioringBookingShirtQty?: number;
        TalioringBookingShirtPrice?: number;
        TalioringBookingPantQty?: number;
        TalioringBookingPantPrice?: number;
        TalioringBookingCoatQty?: number;
        TalioringBookingCoatPrice?: number;
        TalioringBookingKurtaQty?: number;
        TalioringBookingKurtaPrice?: number;
        TalioringBookingBundiQty?: number;
        TalioringBookingBundiPrice?: number;
        TalioringBookingOthers?: number;
        TalioringBookingOthersPrice?: number;
        TalioringBookingIsDelivered?: boolean;
    }
    namespace TalioringDeliveriesRow {
        const idProperty = "TalioringDeliveryId";
        const nameProperty = "InvNo";
        const localTextPrefix = "CustomTailoring.TalioringDeliveries";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TalioringDeliveryId = "TalioringDeliveryId",
            DeliveryDate = "DeliveryDate",
            TalioringBookingId = "TalioringBookingId",
            InvNo = "InvNo",
            Amount = "Amount",
            Remarks = "Remarks",
            TalioringBookingBookingDate = "TalioringBookingBookingDate",
            TalioringBookingCustName = "TalioringBookingCustName",
            TalioringBookingDeliveryDate = "TalioringBookingDeliveryDate",
            TalioringBookingTryDate = "TalioringBookingTryDate",
            TalioringBookingBookingSlipNo = "TalioringBookingBookingSlipNo",
            TalioringBookingTotalAmount = "TalioringBookingTotalAmount",
            TalioringBookingTotalQty = "TalioringBookingTotalQty",
            TalioringBookingShirtQty = "TalioringBookingShirtQty",
            TalioringBookingShirtPrice = "TalioringBookingShirtPrice",
            TalioringBookingPantQty = "TalioringBookingPantQty",
            TalioringBookingPantPrice = "TalioringBookingPantPrice",
            TalioringBookingCoatQty = "TalioringBookingCoatQty",
            TalioringBookingCoatPrice = "TalioringBookingCoatPrice",
            TalioringBookingKurtaQty = "TalioringBookingKurtaQty",
            TalioringBookingKurtaPrice = "TalioringBookingKurtaPrice",
            TalioringBookingBundiQty = "TalioringBookingBundiQty",
            TalioringBookingBundiPrice = "TalioringBookingBundiPrice",
            TalioringBookingOthers = "TalioringBookingOthers",
            TalioringBookingOthersPrice = "TalioringBookingOthersPrice",
            TalioringBookingIsDelivered = "TalioringBookingIsDelivered"
        }
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    namespace TalioringDeliveriesService {
        const baseUrl = "CustomTailoring/TalioringDeliveries";
        function Create(request: Serenity.SaveRequest<TalioringDeliveriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TalioringDeliveriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TalioringDeliveriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TalioringDeliveriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "CustomTailoring/TalioringDeliveries/Create",
            Update = "CustomTailoring/TalioringDeliveries/Update",
            Delete = "CustomTailoring/TalioringDeliveries/Delete",
            Retrieve = "CustomTailoring/TalioringDeliveries/Retrieve",
            List = "CustomTailoring/TalioringDeliveries/List"
        }
    }
}
declare namespace AprajitaRetails.Dues {
}
declare namespace AprajitaRetails.Dues {
    interface DueRecoverdsForm {
        PaidDate: Serenity.DateEditor;
        DuesListId: Serenity.IntegerEditor;
        AmountPaid: Serenity.DecimalEditor;
        IsPartialPayment: Serenity.BooleanEditor;
        Modes: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }
    class DueRecoverdsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Dues {
    interface DueRecoverdsRow {
        DueRecoverdId?: number;
        PaidDate?: string;
        DuesListId?: number;
        AmountPaid?: number;
        IsPartialPayment?: boolean;
        Modes?: number;
        Remarks?: string;
        DuesListAmount?: number;
        DuesListIsRecovered?: boolean;
        DuesListDailySaleId?: number;
        DuesListRecoveryDate?: string;
        DuesListIsPartialRecovery?: boolean;
    }
    namespace DueRecoverdsRow {
        const idProperty = "DueRecoverdId";
        const nameProperty = "Remarks";
        const localTextPrefix = "Dues.DueRecoverds";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DueRecoverdId = "DueRecoverdId",
            PaidDate = "PaidDate",
            DuesListId = "DuesListId",
            AmountPaid = "AmountPaid",
            IsPartialPayment = "IsPartialPayment",
            Modes = "Modes",
            Remarks = "Remarks",
            DuesListAmount = "DuesListAmount",
            DuesListIsRecovered = "DuesListIsRecovered",
            DuesListDailySaleId = "DuesListDailySaleId",
            DuesListRecoveryDate = "DuesListRecoveryDate",
            DuesListIsPartialRecovery = "DuesListIsPartialRecovery"
        }
    }
}
declare namespace AprajitaRetails.Dues {
    namespace DueRecoverdsService {
        const baseUrl = "Dues/DueRecoverds";
        function Create(request: Serenity.SaveRequest<DueRecoverdsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DueRecoverdsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DueRecoverdsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DueRecoverdsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Dues/DueRecoverds/Create",
            Update = "Dues/DueRecoverds/Update",
            Delete = "Dues/DueRecoverds/Delete",
            Retrieve = "Dues/DueRecoverds/Retrieve",
            List = "Dues/DueRecoverds/List"
        }
    }
}
declare namespace AprajitaRetails.Dues {
}
declare namespace AprajitaRetails.Dues {
    interface DuesListsForm {
        Amount: Serenity.DecimalEditor;
        IsRecovered: Serenity.BooleanEditor;
        DailySaleId: Serenity.IntegerEditor;
        RecoveryDate: Serenity.DateEditor;
        IsPartialRecovery: Serenity.BooleanEditor;
    }
    class DuesListsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Dues {
    interface DuesListsRow {
        DuesListId?: number;
        Amount?: number;
        IsRecovered?: boolean;
        DailySaleId?: number;
        RecoveryDate?: string;
        IsPartialRecovery?: boolean;
        DailySaleSaleDate?: string;
        DailySaleInvNo?: string;
        DailySaleAmount?: number;
        DailySalePayMode?: number;
        DailySaleCashAmount?: number;
        DailySaleSalesmanId?: number;
        DailySaleIsDue?: boolean;
        DailySaleIsManualBill?: boolean;
        DailySaleIsTailoringBill?: boolean;
        DailySaleRemarks?: string;
        DailySaleIsSaleReturn?: boolean;
    }
    namespace DuesListsRow {
        const idProperty = "DuesListId";
        const localTextPrefix = "Dues.DuesLists";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DuesListId = "DuesListId",
            Amount = "Amount",
            IsRecovered = "IsRecovered",
            DailySaleId = "DailySaleId",
            RecoveryDate = "RecoveryDate",
            IsPartialRecovery = "IsPartialRecovery",
            DailySaleSaleDate = "DailySaleSaleDate",
            DailySaleInvNo = "DailySaleInvNo",
            DailySaleAmount = "DailySaleAmount",
            DailySalePayMode = "DailySalePayMode",
            DailySaleCashAmount = "DailySaleCashAmount",
            DailySaleSalesmanId = "DailySaleSalesmanId",
            DailySaleIsDue = "DailySaleIsDue",
            DailySaleIsManualBill = "DailySaleIsManualBill",
            DailySaleIsTailoringBill = "DailySaleIsTailoringBill",
            DailySaleRemarks = "DailySaleRemarks",
            DailySaleIsSaleReturn = "DailySaleIsSaleReturn"
        }
    }
}
declare namespace AprajitaRetails.Dues {
    namespace DuesListsService {
        const baseUrl = "Dues/DuesLists";
        function Create(request: Serenity.SaveRequest<DuesListsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DuesListsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DuesListsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DuesListsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Dues/DuesLists/Create",
            Update = "Dues/DuesLists/Update",
            Delete = "Dues/DuesLists/Delete",
            Retrieve = "Dues/DuesLists/Retrieve",
            List = "Dues/DuesLists/List"
        }
    }
}
declare namespace AprajitaRetails {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace AprajitaRetails {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace AprajitaRetails.Expenses {
}
declare namespace AprajitaRetails.Expenses {
    interface CashPaymentsForm {
        PaymentDate: Serenity.DateEditor;
        TranscationModeId: Serenity.IntegerEditor;
        PaidTo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        SlipNo: Serenity.StringEditor;
    }
    class CashPaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Expenses {
    interface CashPaymentsRow {
        CashPaymentId?: number;
        PaymentDate?: string;
        TranscationModeId?: number;
        PaidTo?: string;
        Amount?: number;
        SlipNo?: string;
        TranscationModeTranscation?: string;
    }
    namespace CashPaymentsRow {
        const idProperty = "CashPaymentId";
        const nameProperty = "PaidTo";
        const localTextPrefix = "Expenses.CashPayments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CashPaymentId = "CashPaymentId",
            PaymentDate = "PaymentDate",
            TranscationModeId = "TranscationModeId",
            PaidTo = "PaidTo",
            Amount = "Amount",
            SlipNo = "SlipNo",
            TranscationModeTranscation = "TranscationModeTranscation"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
    namespace CashPaymentsService {
        const baseUrl = "Expenses/CashPayments";
        function Create(request: Serenity.SaveRequest<CashPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Expenses/CashPayments/Create",
            Update = "Expenses/CashPayments/Update",
            Delete = "Expenses/CashPayments/Delete",
            Retrieve = "Expenses/CashPayments/Retrieve",
            List = "Expenses/CashPayments/List"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
}
declare namespace AprajitaRetails.Expenses {
    interface ExpensesForm {
        ExpDate: Serenity.DateEditor;
        Particulars: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        PaymentDetails: Serenity.StringEditor;
        EmployeeId: Serenity.IntegerEditor;
        PaidTo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class ExpensesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Expenses {
    interface ExpensesRow {
        ExpenseId?: number;
        ExpDate?: string;
        Particulars?: string;
        Amount?: number;
        PayMode?: number;
        PaymentDetails?: string;
        EmployeeId?: number;
        PaidTo?: string;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace ExpensesRow {
        const idProperty = "ExpenseId";
        const nameProperty = "Particulars";
        const localTextPrefix = "Expenses.Expenses";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ExpenseId = "ExpenseId",
            ExpDate = "ExpDate",
            Particulars = "Particulars",
            Amount = "Amount",
            PayMode = "PayMode",
            PaymentDetails = "PaymentDetails",
            EmployeeId = "EmployeeId",
            PaidTo = "PaidTo",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
    namespace ExpensesService {
        const baseUrl = "Expenses/Expenses";
        function Create(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Expenses/Expenses/Create",
            Update = "Expenses/Expenses/Update",
            Delete = "Expenses/Expenses/Delete",
            Retrieve = "Expenses/Expenses/Retrieve",
            List = "Expenses/Expenses/List"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
}
declare namespace AprajitaRetails.Expenses {
    interface PaymentsForm {
        PayDate: Serenity.DateEditor;
        PaymentPartry: Serenity.StringEditor;
        PayMode: Serenity.IntegerEditor;
        PaymentDetails: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        PaymentSlipNo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class PaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Expenses {
    interface PaymentsRow {
        PaymentId?: number;
        PayDate?: string;
        PaymentPartry?: string;
        PayMode?: number;
        PaymentDetails?: string;
        Amount?: number;
        PaymentSlipNo?: string;
        Remarks?: string;
    }
    namespace PaymentsRow {
        const idProperty = "PaymentId";
        const nameProperty = "PaymentPartry";
        const localTextPrefix = "Expenses.Payments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PaymentId = "PaymentId",
            PayDate = "PayDate",
            PaymentPartry = "PaymentPartry",
            PayMode = "PayMode",
            PaymentDetails = "PaymentDetails",
            Amount = "Amount",
            PaymentSlipNo = "PaymentSlipNo",
            Remarks = "Remarks"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
    namespace PaymentsService {
        const baseUrl = "Expenses/Payments";
        function Create(request: Serenity.SaveRequest<PaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Expenses/Payments/Create",
            Update = "Expenses/Payments/Update",
            Delete = "Expenses/Payments/Delete",
            Retrieve = "Expenses/Payments/Retrieve",
            List = "Expenses/Payments/List"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
}
declare namespace AprajitaRetails.Expenses {
    interface PettyCashExpensesForm {
        ExpDate: Serenity.DateEditor;
        Particulars: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        EmployeeId: Serenity.IntegerEditor;
        PaidTo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class PettyCashExpensesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Expenses {
    interface PettyCashExpensesRow {
        PettyCashExpenseId?: number;
        ExpDate?: string;
        Particulars?: string;
        Amount?: number;
        EmployeeId?: number;
        PaidTo?: string;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace PettyCashExpensesRow {
        const idProperty = "PettyCashExpenseId";
        const nameProperty = "Particulars";
        const localTextPrefix = "Expenses.PettyCashExpenses";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PettyCashExpenseId = "PettyCashExpenseId",
            ExpDate = "ExpDate",
            Particulars = "Particulars",
            Amount = "Amount",
            EmployeeId = "EmployeeId",
            PaidTo = "PaidTo",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.Expenses {
    namespace PettyCashExpensesService {
        const baseUrl = "Expenses/PettyCashExpenses";
        function Create(request: Serenity.SaveRequest<PettyCashExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PettyCashExpensesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PettyCashExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PettyCashExpensesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Expenses/PettyCashExpenses/Create",
            Update = "Expenses/PettyCashExpenses/Update",
            Delete = "Expenses/PettyCashExpenses/Delete",
            Retrieve = "Expenses/PettyCashExpenses/Retrieve",
            List = "Expenses/PettyCashExpenses/List"
        }
    }
}
declare namespace AprajitaRetails {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace AprajitaRetails {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace AprajitaRetails.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace AprajitaRetails.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace AprajitaRetails.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace AprajitaRetails.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace AprajitaRetails.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface AttendancesForm {
        EmployeeId: Serenity.IntegerEditor;
        AttDate: Serenity.DateEditor;
        EntryTime: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }
    class AttendancesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface AttendancesRow {
        AttendanceId?: number;
        EmployeeId?: number;
        AttDate?: string;
        EntryTime?: string;
        Status?: number;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace AttendancesRow {
        const idProperty = "AttendanceId";
        const nameProperty = "EntryTime";
        const localTextPrefix = "PayRoll.Attendances";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AttendanceId = "AttendanceId",
            EmployeeId = "EmployeeId",
            AttDate = "AttDate",
            EntryTime = "EntryTime",
            Status = "Status",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace AttendancesService {
        const baseUrl = "PayRoll/Attendances";
        function Create(request: Serenity.SaveRequest<AttendancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AttendancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AttendancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AttendancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/Attendances/Create",
            Update = "PayRoll/Attendances/Update",
            Delete = "PayRoll/Attendances/Delete",
            Retrieve = "PayRoll/Attendances/Retrieve",
            List = "PayRoll/Attendances/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface CurrentSalariesForm {
        EmployeeId: Serenity.IntegerEditor;
        BasicSalary: Serenity.DecimalEditor;
        SundaySalary: Serenity.DecimalEditor;
        LpRate: Serenity.DecimalEditor;
        IncentiveRate: Serenity.DecimalEditor;
        IncentiveTarget: Serenity.DecimalEditor;
        WowBillRate: Serenity.DecimalEditor;
        WowBillTarget: Serenity.DecimalEditor;
        IsSundayBillable: Serenity.BooleanEditor;
        EffectiveDate: Serenity.DateEditor;
        CloseDate: Serenity.DateEditor;
        IsEffective: Serenity.BooleanEditor;
    }
    class CurrentSalariesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface CurrentSalariesRow {
        CurrentSalaryId?: number;
        EmployeeId?: number;
        BasicSalary?: number;
        SundaySalary?: number;
        LpRate?: number;
        IncentiveRate?: number;
        IncentiveTarget?: number;
        WowBillRate?: number;
        WowBillTarget?: number;
        IsSundayBillable?: boolean;
        EffectiveDate?: string;
        CloseDate?: string;
        IsEffective?: boolean;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace CurrentSalariesRow {
        const idProperty = "CurrentSalaryId";
        const localTextPrefix = "PayRoll.CurrentSalaries";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CurrentSalaryId = "CurrentSalaryId",
            EmployeeId = "EmployeeId",
            BasicSalary = "BasicSalary",
            SundaySalary = "SundaySalary",
            LpRate = "LpRate",
            IncentiveRate = "IncentiveRate",
            IncentiveTarget = "IncentiveTarget",
            WowBillRate = "WowBillRate",
            WowBillTarget = "WowBillTarget",
            IsSundayBillable = "IsSundayBillable",
            EffectiveDate = "EffectiveDate",
            CloseDate = "CloseDate",
            IsEffective = "IsEffective",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace CurrentSalariesService {
        const baseUrl = "PayRoll/CurrentSalaries";
        function Create(request: Serenity.SaveRequest<CurrentSalariesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CurrentSalariesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrentSalariesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrentSalariesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/CurrentSalaries/Create",
            Update = "PayRoll/CurrentSalaries/Update",
            Delete = "PayRoll/CurrentSalaries/Delete",
            Retrieve = "PayRoll/CurrentSalaries/Retrieve",
            List = "PayRoll/CurrentSalaries/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface EmployeesForm {
        StaffName: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        JoiningDate: Serenity.DateEditor;
        LeavingDate: Serenity.DateEditor;
        IsWorking: Serenity.BooleanEditor;
    }
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface EmployeesRow {
        EmployeeId?: number;
        StaffName?: string;
        MobileNo?: string;
        JoiningDate?: string;
        LeavingDate?: string;
        IsWorking?: boolean;
    }
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const nameProperty = "StaffName";
        const localTextPrefix = "PayRoll.Employees";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            EmployeeId = "EmployeeId",
            StaffName = "StaffName",
            MobileNo = "MobileNo",
            JoiningDate = "JoiningDate",
            LeavingDate = "LeavingDate",
            IsWorking = "IsWorking"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace EmployeesService {
        const baseUrl = "PayRoll/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/Employees/Create",
            Update = "PayRoll/Employees/Update",
            Delete = "PayRoll/Employees/Delete",
            Retrieve = "PayRoll/Employees/Retrieve",
            List = "PayRoll/Employees/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface PaySlipsForm {
        OnDate: Serenity.DateEditor;
        Month: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
        CurrentSalaryId: Serenity.IntegerEditor;
        BasicSalary: Serenity.DecimalEditor;
        NoOfDaysPresent: Serenity.IntegerEditor;
        TotalSale: Serenity.DecimalEditor;
        SaleIncentive: Serenity.DecimalEditor;
        WowBillAmount: Serenity.DecimalEditor;
        WowBillIncentive: Serenity.DecimalEditor;
        LastPcsAmount: Serenity.DecimalEditor;
        LastPCsIncentive: Serenity.DecimalEditor;
        OthersIncentive: Serenity.DecimalEditor;
        GrossSalary: Serenity.DecimalEditor;
        StandardDeductions: Serenity.DecimalEditor;
        TdsDeductions: Serenity.DecimalEditor;
        PfDeductions: Serenity.DecimalEditor;
        AdvanceDeducations: Serenity.DecimalEditor;
        OtherDeductions: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
    }
    class PaySlipsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface PaySlipsRow {
        PaySlipId?: number;
        OnDate?: string;
        Month?: number;
        Year?: number;
        EmployeeId?: number;
        CurrentSalaryId?: number;
        BasicSalary?: number;
        NoOfDaysPresent?: number;
        TotalSale?: number;
        SaleIncentive?: number;
        WowBillAmount?: number;
        WowBillIncentive?: number;
        LastPcsAmount?: number;
        LastPCsIncentive?: number;
        OthersIncentive?: number;
        GrossSalary?: number;
        StandardDeductions?: number;
        TdsDeductions?: number;
        PfDeductions?: number;
        AdvanceDeducations?: number;
        OtherDeductions?: number;
        Remarks?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
        CurrentSalaryEmployeeId?: number;
        CurrentSalaryBasicSalary?: number;
        CurrentSalarySundaySalary?: number;
        CurrentSalaryLpRate?: number;
        CurrentSalaryIncentiveRate?: number;
        CurrentSalaryIncentiveTarget?: number;
        CurrentSalaryWowBillRate?: number;
        CurrentSalaryWowBillTarget?: number;
        CurrentSalaryIsSundayBillable?: boolean;
        CurrentSalaryEffectiveDate?: string;
        CurrentSalaryCloseDate?: string;
        CurrentSalaryIsEffective?: boolean;
    }
    namespace PaySlipsRow {
        const idProperty = "PaySlipId";
        const nameProperty = "Remarks";
        const localTextPrefix = "PayRoll.PaySlips";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PaySlipId = "PaySlipId",
            OnDate = "OnDate",
            Month = "Month",
            Year = "Year",
            EmployeeId = "EmployeeId",
            CurrentSalaryId = "CurrentSalaryId",
            BasicSalary = "BasicSalary",
            NoOfDaysPresent = "NoOfDaysPresent",
            TotalSale = "TotalSale",
            SaleIncentive = "SaleIncentive",
            WowBillAmount = "WowBillAmount",
            WowBillIncentive = "WowBillIncentive",
            LastPcsAmount = "LastPcsAmount",
            LastPCsIncentive = "LastPCsIncentive",
            OthersIncentive = "OthersIncentive",
            GrossSalary = "GrossSalary",
            StandardDeductions = "StandardDeductions",
            TdsDeductions = "TdsDeductions",
            PfDeductions = "PfDeductions",
            AdvanceDeducations = "AdvanceDeducations",
            OtherDeductions = "OtherDeductions",
            Remarks = "Remarks",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking",
            CurrentSalaryEmployeeId = "CurrentSalaryEmployeeId",
            CurrentSalaryBasicSalary = "CurrentSalaryBasicSalary",
            CurrentSalarySundaySalary = "CurrentSalarySundaySalary",
            CurrentSalaryLpRate = "CurrentSalaryLpRate",
            CurrentSalaryIncentiveRate = "CurrentSalaryIncentiveRate",
            CurrentSalaryIncentiveTarget = "CurrentSalaryIncentiveTarget",
            CurrentSalaryWowBillRate = "CurrentSalaryWowBillRate",
            CurrentSalaryWowBillTarget = "CurrentSalaryWowBillTarget",
            CurrentSalaryIsSundayBillable = "CurrentSalaryIsSundayBillable",
            CurrentSalaryEffectiveDate = "CurrentSalaryEffectiveDate",
            CurrentSalaryCloseDate = "CurrentSalaryCloseDate",
            CurrentSalaryIsEffective = "CurrentSalaryIsEffective"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace PaySlipsService {
        const baseUrl = "PayRoll/PaySlips";
        function Create(request: Serenity.SaveRequest<PaySlipsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PaySlipsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PaySlipsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PaySlipsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/PaySlips/Create",
            Update = "PayRoll/PaySlips/Update",
            Delete = "PayRoll/PaySlips/Delete",
            Retrieve = "PayRoll/PaySlips/Retrieve",
            List = "PayRoll/PaySlips/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface SalaryPaymentsForm {
        EmployeeId: Serenity.IntegerEditor;
        SalaryMonth: Serenity.StringEditor;
        SalaryComponet: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }
    class SalaryPaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface SalaryPaymentsRow {
        SalaryPaymentId?: number;
        EmployeeId?: number;
        SalaryMonth?: string;
        SalaryComponet?: number;
        PaymentDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace SalaryPaymentsRow {
        const idProperty = "SalaryPaymentId";
        const nameProperty = "SalaryMonth";
        const localTextPrefix = "PayRoll.SalaryPayments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SalaryPaymentId = "SalaryPaymentId",
            EmployeeId = "EmployeeId",
            SalaryMonth = "SalaryMonth",
            SalaryComponet = "SalaryComponet",
            PaymentDate = "PaymentDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace SalaryPaymentsService {
        const baseUrl = "PayRoll/SalaryPayments";
        function Create(request: Serenity.SaveRequest<SalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/SalaryPayments/Create",
            Update = "PayRoll/SalaryPayments/Update",
            Delete = "PayRoll/SalaryPayments/Delete",
            Retrieve = "PayRoll/SalaryPayments/Retrieve",
            List = "PayRoll/SalaryPayments/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface SalesmenForm {
        SalesmanName: Serenity.StringEditor;
    }
    class SalesmenForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface SalesmenRow {
        SalesmanId?: number;
        SalesmanName?: string;
    }
    namespace SalesmenRow {
        const idProperty = "SalesmanId";
        const nameProperty = "SalesmanName";
        const localTextPrefix = "PayRoll.Salesmen";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SalesmanId = "SalesmanId",
            SalesmanName = "SalesmanName"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace SalesmenService {
        const baseUrl = "PayRoll/Salesmen";
        function Create(request: Serenity.SaveRequest<SalesmenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesmenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesmenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesmenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/Salesmen/Create",
            Update = "PayRoll/Salesmen/Update",
            Delete = "PayRoll/Salesmen/Delete",
            Retrieve = "PayRoll/Salesmen/Retrieve",
            List = "PayRoll/Salesmen/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface StaffAdvancePaymentsForm {
        EmployeeId: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }
    class StaffAdvancePaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface StaffAdvancePaymentsRow {
        StaffAdvancePaymentId?: number;
        EmployeeId?: number;
        PaymentDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace StaffAdvancePaymentsRow {
        const idProperty = "StaffAdvancePaymentId";
        const nameProperty = "Details";
        const localTextPrefix = "PayRoll.StaffAdvancePayments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            StaffAdvancePaymentId = "StaffAdvancePaymentId",
            EmployeeId = "EmployeeId",
            PaymentDate = "PaymentDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace StaffAdvancePaymentsService {
        const baseUrl = "PayRoll/StaffAdvancePayments";
        function Create(request: Serenity.SaveRequest<StaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/StaffAdvancePayments/Create",
            Update = "PayRoll/StaffAdvancePayments/Update",
            Delete = "PayRoll/StaffAdvancePayments/Delete",
            Retrieve = "PayRoll/StaffAdvancePayments/Retrieve",
            List = "PayRoll/StaffAdvancePayments/List"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
}
declare namespace AprajitaRetails.PayRoll {
    interface StaffAdvanceReceiptsForm {
        EmployeeId: Serenity.IntegerEditor;
        ReceiptDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }
    class StaffAdvanceReceiptsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.PayRoll {
    interface StaffAdvanceReceiptsRow {
        StaffAdvanceReceiptId?: number;
        EmployeeId?: number;
        ReceiptDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        EmployeeStaffName?: string;
        EmployeeMobileNo?: string;
        EmployeeJoiningDate?: string;
        EmployeeLeavingDate?: string;
        EmployeeIsWorking?: boolean;
    }
    namespace StaffAdvanceReceiptsRow {
        const idProperty = "StaffAdvanceReceiptId";
        const nameProperty = "Details";
        const localTextPrefix = "PayRoll.StaffAdvanceReceipts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            StaffAdvanceReceiptId = "StaffAdvanceReceiptId",
            EmployeeId = "EmployeeId",
            ReceiptDate = "ReceiptDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            EmployeeStaffName = "EmployeeStaffName",
            EmployeeMobileNo = "EmployeeMobileNo",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeLeavingDate = "EmployeeLeavingDate",
            EmployeeIsWorking = "EmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.PayRoll {
    namespace StaffAdvanceReceiptsService {
        const baseUrl = "PayRoll/StaffAdvanceReceipts";
        function Create(request: Serenity.SaveRequest<StaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "PayRoll/StaffAdvanceReceipts/Create",
            Update = "PayRoll/StaffAdvanceReceipts/Update",
            Delete = "PayRoll/StaffAdvanceReceipts/Delete",
            Retrieve = "PayRoll/StaffAdvanceReceipts/Retrieve",
            List = "PayRoll/StaffAdvanceReceipts/List"
        }
    }
}
declare namespace AprajitaRetails.Process {
}
declare namespace AprajitaRetails.Process {
    interface EndOfDaysForm {
        EodDate: Serenity.DateEditor;
        Shirting: Serenity.DecimalEditor;
        Suiting: Serenity.DecimalEditor;
        Uspa: Serenity.IntegerEditor;
        FmArrow: Serenity.IntegerEditor;
        Rwt: Serenity.IntegerEditor;
        Access: Serenity.IntegerEditor;
        CashInHand: Serenity.DecimalEditor;
    }
    class EndOfDaysForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Process {
    interface EndOfDaysRow {
        EndOfDayId?: number;
        EodDate?: string;
        Shirting?: number;
        Suiting?: number;
        Uspa?: number;
        FmArrow?: number;
        Rwt?: number;
        Access?: number;
        CashInHand?: number;
    }
    namespace EndOfDaysRow {
        const idProperty = "EndOfDayId";
        const localTextPrefix = "Process.EndOfDays";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            EndOfDayId = "EndOfDayId",
            EodDate = "EodDate",
            Shirting = "Shirting",
            Suiting = "Suiting",
            Uspa = "Uspa",
            FmArrow = "FmArrow",
            Rwt = "Rwt",
            Access = "Access",
            CashInHand = "CashInHand"
        }
    }
}
declare namespace AprajitaRetails.Process {
    namespace EndOfDaysService {
        const baseUrl = "Process/EndOfDays";
        function Create(request: Serenity.SaveRequest<EndOfDaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EndOfDaysRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EndOfDaysRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EndOfDaysRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Process/EndOfDays/Create",
            Update = "Process/EndOfDays/Update",
            Delete = "Process/EndOfDays/Delete",
            Retrieve = "Process/EndOfDays/Retrieve",
            List = "Process/EndOfDays/List"
        }
    }
}
declare namespace AprajitaRetails.Process {
}
declare namespace AprajitaRetails.Process {
    interface MonthEndsForm {
        EntryDate: Serenity.DateEditor;
        Month: Serenity.IntegerEditor;
        Year: Serenity.IntegerEditor;
        TotalBill: Serenity.DecimalEditor;
        TotalFabric: Serenity.DecimalEditor;
        TotalRmz: Serenity.DecimalEditor;
        TotalAccess: Serenity.DecimalEditor;
        TotalOthers: Serenity.DecimalEditor;
        TotalAmountFabric: Serenity.DecimalEditor;
        TotalAmountRmz: Serenity.DecimalEditor;
        TotalAmountAccess: Serenity.DecimalEditor;
        TotalAmountOthers: Serenity.DecimalEditor;
        TotalSaleIncome: Serenity.DecimalEditor;
        TotalTailoringIncome: Serenity.DecimalEditor;
        TotalOtherIncome: Serenity.DecimalEditor;
        TotalInward: Serenity.DecimalEditor;
        TotalInwardByAmitKumar: Serenity.DecimalEditor;
        TotalInwardOthers: Serenity.DecimalEditor;
        TotalDues: Serenity.DecimalEditor;
        TotalDuesOfMonth: Serenity.DecimalEditor;
        TotalDuesRecovered: Serenity.DecimalEditor;
        TotalExpenses: Serenity.DecimalEditor;
        TotalOnBookExpenes: Serenity.DecimalEditor;
        TotalCashExpenses: Serenity.DecimalEditor;
        TotalSalary: Serenity.DecimalEditor;
        TotalTailoringExpenses: Serenity.DecimalEditor;
        TotalTrimsAndOtherExpenses: Serenity.DecimalEditor;
        TotalHomeExpenses: Serenity.DecimalEditor;
        TotalOtherHomeExpenses: Serenity.DecimalEditor;
        TotalOtherExpenses: Serenity.DecimalEditor;
        TotalPayments: Serenity.DecimalEditor;
        TotalRecipts: Serenity.DecimalEditor;
    }
    class MonthEndsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Process {
    interface MonthEndsRow {
        MonthEndId?: number;
        EntryDate?: string;
        Month?: number;
        Year?: number;
        TotalBill?: number;
        TotalFabric?: number;
        TotalRmz?: number;
        TotalAccess?: number;
        TotalOthers?: number;
        TotalAmountFabric?: number;
        TotalAmountRmz?: number;
        TotalAmountAccess?: number;
        TotalAmountOthers?: number;
        TotalSaleIncome?: number;
        TotalTailoringIncome?: number;
        TotalOtherIncome?: number;
        TotalInward?: number;
        TotalInwardByAmitKumar?: number;
        TotalInwardOthers?: number;
        TotalDues?: number;
        TotalDuesOfMonth?: number;
        TotalDuesRecovered?: number;
        TotalExpenses?: number;
        TotalOnBookExpenes?: number;
        TotalCashExpenses?: number;
        TotalSalary?: number;
        TotalTailoringExpenses?: number;
        TotalTrimsAndOtherExpenses?: number;
        TotalHomeExpenses?: number;
        TotalOtherHomeExpenses?: number;
        TotalOtherExpenses?: number;
        TotalPayments?: number;
        TotalRecipts?: number;
    }
    namespace MonthEndsRow {
        const idProperty = "MonthEndId";
        const localTextPrefix = "Process.MonthEnds";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MonthEndId = "MonthEndId",
            EntryDate = "EntryDate",
            Month = "Month",
            Year = "Year",
            TotalBill = "TotalBill",
            TotalFabric = "TotalFabric",
            TotalRmz = "TotalRmz",
            TotalAccess = "TotalAccess",
            TotalOthers = "TotalOthers",
            TotalAmountFabric = "TotalAmountFabric",
            TotalAmountRmz = "TotalAmountRmz",
            TotalAmountAccess = "TotalAmountAccess",
            TotalAmountOthers = "TotalAmountOthers",
            TotalSaleIncome = "TotalSaleIncome",
            TotalTailoringIncome = "TotalTailoringIncome",
            TotalOtherIncome = "TotalOtherIncome",
            TotalInward = "TotalInward",
            TotalInwardByAmitKumar = "TotalInwardByAmitKumar",
            TotalInwardOthers = "TotalInwardOthers",
            TotalDues = "TotalDues",
            TotalDuesOfMonth = "TotalDuesOfMonth",
            TotalDuesRecovered = "TotalDuesRecovered",
            TotalExpenses = "TotalExpenses",
            TotalOnBookExpenes = "TotalOnBookExpenes",
            TotalCashExpenses = "TotalCashExpenses",
            TotalSalary = "TotalSalary",
            TotalTailoringExpenses = "TotalTailoringExpenses",
            TotalTrimsAndOtherExpenses = "TotalTrimsAndOtherExpenses",
            TotalHomeExpenses = "TotalHomeExpenses",
            TotalOtherHomeExpenses = "TotalOtherHomeExpenses",
            TotalOtherExpenses = "TotalOtherExpenses",
            TotalPayments = "TotalPayments",
            TotalRecipts = "TotalRecipts"
        }
    }
}
declare namespace AprajitaRetails.Process {
    namespace MonthEndsService {
        const baseUrl = "Process/MonthEnds";
        function Create(request: Serenity.SaveRequest<MonthEndsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MonthEndsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MonthEndsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MonthEndsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Process/MonthEnds/Create",
            Update = "Process/MonthEnds/Update",
            Delete = "Process/MonthEnds/Delete",
            Retrieve = "Process/MonthEnds/Retrieve",
            List = "Process/MonthEnds/List"
        }
    }
}
declare namespace AprajitaRetails.Product {
}
declare namespace AprajitaRetails.Product {
    interface BrandsForm {
        BrandName: Serenity.StringEditor;
        BCode: Serenity.StringEditor;
    }
    class BrandsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Product {
    interface BrandsRow {
        BrandId?: number;
        BrandName?: string;
        BCode?: string;
    }
    namespace BrandsRow {
        const idProperty = "BrandId";
        const nameProperty = "BrandName";
        const localTextPrefix = "Product.Brands";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            BrandId = "BrandId",
            BrandName = "BrandName",
            BCode = "BCode"
        }
    }
}
declare namespace AprajitaRetails.Product {
    namespace BrandsService {
        const baseUrl = "Product/Brands";
        function Create(request: Serenity.SaveRequest<BrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BrandsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BrandsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Product/Brands/Create",
            Update = "Product/Brands/Update",
            Delete = "Product/Brands/Delete",
            Retrieve = "Product/Brands/Retrieve",
            List = "Product/Brands/List"
        }
    }
}
declare namespace AprajitaRetails.Product {
}
declare namespace AprajitaRetails.Product {
    interface CategoriesForm {
        CategoryName: Serenity.StringEditor;
        IsPrimaryCategory: Serenity.BooleanEditor;
        IsSecondaryCategory: Serenity.BooleanEditor;
    }
    class CategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Product {
    interface CategoriesRow {
        CategoryId?: number;
        CategoryName?: string;
        IsPrimaryCategory?: boolean;
        IsSecondaryCategory?: boolean;
    }
    namespace CategoriesRow {
        const idProperty = "CategoryId";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Product.Categories";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            IsPrimaryCategory = "IsPrimaryCategory",
            IsSecondaryCategory = "IsSecondaryCategory"
        }
    }
}
declare namespace AprajitaRetails.Product {
    namespace CategoriesService {
        const baseUrl = "Product/Categories";
        function Create(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Product/Categories/Create",
            Update = "Product/Categories/Update",
            Delete = "Product/Categories/Delete",
            Retrieve = "Product/Categories/Retrieve",
            List = "Product/Categories/List"
        }
    }
}
declare namespace AprajitaRetails.Product {
}
declare namespace AprajitaRetails.Product {
    interface ProductItemsForm {
        Barcode: Serenity.StringEditor;
        BrandId: Serenity.IntegerEditor;
        StyleCode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ItemDesc: Serenity.StringEditor;
        Categorys: Serenity.IntegerEditor;
        Mrp: Serenity.DecimalEditor;
        TaxRate: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
        Size: Serenity.IntegerEditor;
        Units: Serenity.IntegerEditor;
        MainCategoryCategoryId: Serenity.IntegerEditor;
        ProductCategoryCategoryId: Serenity.IntegerEditor;
        ProductTypeCategoryId: Serenity.IntegerEditor;
    }
    class ProductItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Product {
    interface ProductItemsRow {
        ProductItemId?: number;
        Barcode?: string;
        BrandId?: number;
        StyleCode?: string;
        ProductName?: string;
        ItemDesc?: string;
        Categorys?: number;
        Mrp?: number;
        TaxRate?: number;
        Cost?: number;
        Size?: number;
        Units?: number;
        MainCategoryCategoryId?: number;
        ProductCategoryCategoryId?: number;
        ProductTypeCategoryId?: number;
        BrandBrandName?: string;
        BrandBCode?: string;
        MainCategoryCategoryCategoryName?: string;
        MainCategoryCategoryIsPrimaryCategory?: boolean;
        MainCategoryCategoryIsSecondaryCategory?: boolean;
        ProductCategoryCategoryCategoryName?: string;
        ProductCategoryCategoryIsPrimaryCategory?: boolean;
        ProductCategoryCategoryIsSecondaryCategory?: boolean;
        ProductTypeCategoryCategoryName?: string;
        ProductTypeCategoryIsPrimaryCategory?: boolean;
        ProductTypeCategoryIsSecondaryCategory?: boolean;
    }
    namespace ProductItemsRow {
        const idProperty = "ProductItemId";
        const nameProperty = "Barcode";
        const localTextPrefix = "Product.ProductItems";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ProductItemId = "ProductItemId",
            Barcode = "Barcode",
            BrandId = "BrandId",
            StyleCode = "StyleCode",
            ProductName = "ProductName",
            ItemDesc = "ItemDesc",
            Categorys = "Categorys",
            Mrp = "Mrp",
            TaxRate = "TaxRate",
            Cost = "Cost",
            Size = "Size",
            Units = "Units",
            MainCategoryCategoryId = "MainCategoryCategoryId",
            ProductCategoryCategoryId = "ProductCategoryCategoryId",
            ProductTypeCategoryId = "ProductTypeCategoryId",
            BrandBrandName = "BrandBrandName",
            BrandBCode = "BrandBCode",
            MainCategoryCategoryCategoryName = "MainCategoryCategoryCategoryName",
            MainCategoryCategoryIsPrimaryCategory = "MainCategoryCategoryIsPrimaryCategory",
            MainCategoryCategoryIsSecondaryCategory = "MainCategoryCategoryIsSecondaryCategory",
            ProductCategoryCategoryCategoryName = "ProductCategoryCategoryCategoryName",
            ProductCategoryCategoryIsPrimaryCategory = "ProductCategoryCategoryIsPrimaryCategory",
            ProductCategoryCategoryIsSecondaryCategory = "ProductCategoryCategoryIsSecondaryCategory",
            ProductTypeCategoryCategoryName = "ProductTypeCategoryCategoryName",
            ProductTypeCategoryIsPrimaryCategory = "ProductTypeCategoryIsPrimaryCategory",
            ProductTypeCategoryIsSecondaryCategory = "ProductTypeCategoryIsSecondaryCategory"
        }
    }
}
declare namespace AprajitaRetails.Product {
    namespace ProductItemsService {
        const baseUrl = "Product/ProductItems";
        function Create(request: Serenity.SaveRequest<ProductItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Product/ProductItems/Create",
            Update = "Product/ProductItems/Update",
            Delete = "Product/ProductItems/Delete",
            Retrieve = "Product/ProductItems/Retrieve",
            List = "Product/ProductItems/List"
        }
    }
}
declare namespace AprajitaRetails.Product {
}
declare namespace AprajitaRetails.Product {
    interface StocksForm {
        ProductItemId: Serenity.IntegerEditor;
        Quantity: Serenity.DecimalEditor;
        SaleQty: Serenity.DecimalEditor;
        PurchaseQty: Serenity.DecimalEditor;
        Units: Serenity.IntegerEditor;
    }
    class StocksForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Product {
    interface StocksRow {
        StockId?: number;
        ProductItemId?: number;
        Quantity?: number;
        SaleQty?: number;
        PurchaseQty?: number;
        Units?: number;
        ProductItemBarcode?: string;
        ProductItemBrandId?: number;
        ProductItemStyleCode?: string;
        ProductItemProductName?: string;
        ProductItemItemDesc?: string;
        ProductItemCategorys?: number;
        ProductItemMrp?: number;
        ProductItemTaxRate?: number;
        ProductItemCost?: number;
        ProductItemSize?: number;
        ProductItemUnits?: number;
        ProductItemMainCategoryCategoryId?: number;
        ProductItemProductCategoryCategoryId?: number;
        ProductItemProductTypeCategoryId?: number;
    }
    namespace StocksRow {
        const idProperty = "StockId";
        const localTextPrefix = "Product.Stocks";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            StockId = "StockId",
            ProductItemId = "ProductItemId",
            Quantity = "Quantity",
            SaleQty = "SaleQty",
            PurchaseQty = "PurchaseQty",
            Units = "Units",
            ProductItemBarcode = "ProductItemBarcode",
            ProductItemBrandId = "ProductItemBrandId",
            ProductItemStyleCode = "ProductItemStyleCode",
            ProductItemProductName = "ProductItemProductName",
            ProductItemItemDesc = "ProductItemItemDesc",
            ProductItemCategorys = "ProductItemCategorys",
            ProductItemMrp = "ProductItemMrp",
            ProductItemTaxRate = "ProductItemTaxRate",
            ProductItemCost = "ProductItemCost",
            ProductItemSize = "ProductItemSize",
            ProductItemUnits = "ProductItemUnits",
            ProductItemMainCategoryCategoryId = "ProductItemMainCategoryCategoryId",
            ProductItemProductCategoryCategoryId = "ProductItemProductCategoryCategoryId",
            ProductItemProductTypeCategoryId = "ProductItemProductTypeCategoryId"
        }
    }
}
declare namespace AprajitaRetails.Product {
    namespace StocksService {
        const baseUrl = "Product/Stocks";
        function Create(request: Serenity.SaveRequest<StocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StocksRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StocksRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Product/Stocks/Create",
            Update = "Product/Stocks/Update",
            Delete = "Product/Stocks/Delete",
            Retrieve = "Product/Stocks/Retrieve",
            List = "Product/Stocks/List"
        }
    }
}
declare namespace AprajitaRetails.Product {
}
declare namespace AprajitaRetails.Product {
    interface SuppliersForm {
        SuppilerName: Serenity.StringEditor;
        Warehouse: Serenity.StringEditor;
    }
    class SuppliersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Product {
    interface SuppliersRow {
        SupplierId?: number;
        SuppilerName?: string;
        Warehouse?: string;
    }
    namespace SuppliersRow {
        const idProperty = "SupplierId";
        const nameProperty = "SuppilerName";
        const localTextPrefix = "Product.Suppliers";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SupplierId = "SupplierId",
            SuppilerName = "SuppilerName",
            Warehouse = "Warehouse"
        }
    }
}
declare namespace AprajitaRetails.Product {
    namespace SuppliersService {
        const baseUrl = "Product/Suppliers";
        function Create(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SuppliersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SuppliersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Product/Suppliers/Create",
            Update = "Product/Suppliers/Update",
            Delete = "Product/Suppliers/Delete",
            Retrieve = "Product/Suppliers/Retrieve",
            List = "Product/Suppliers/List"
        }
    }
}
declare namespace AprajitaRetails.Purchases {
}
declare namespace AprajitaRetails.Purchases {
    interface ProductPurchasesForm {
        InWardNo: Serenity.StringEditor;
        InWardDate: Serenity.DateEditor;
        PurchaseDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        TotalQty: Serenity.DecimalEditor;
        TotalBasicAmount: Serenity.DecimalEditor;
        ShippingCost: Serenity.DecimalEditor;
        TotalTax: Serenity.DecimalEditor;
        TotalAmount: Serenity.DecimalEditor;
        Remarks: Serenity.StringEditor;
        SupplierId: Serenity.IntegerEditor;
        IsPaid: Serenity.BooleanEditor;
    }
    class ProductPurchasesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Purchases {
    interface ProductPurchasesRow {
        ProductPurchaseId?: number;
        InWardNo?: string;
        InWardDate?: string;
        PurchaseDate?: string;
        InvoiceNo?: string;
        TotalQty?: number;
        TotalBasicAmount?: number;
        ShippingCost?: number;
        TotalTax?: number;
        TotalAmount?: number;
        Remarks?: string;
        SupplierId?: number;
        IsPaid?: boolean;
        SupplierSuppilerName?: string;
        SupplierWarehouse?: string;
    }
    namespace ProductPurchasesRow {
        const idProperty = "ProductPurchaseId";
        const nameProperty = "InWardNo";
        const localTextPrefix = "Purchases.ProductPurchases";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ProductPurchaseId = "ProductPurchaseId",
            InWardNo = "InWardNo",
            InWardDate = "InWardDate",
            PurchaseDate = "PurchaseDate",
            InvoiceNo = "InvoiceNo",
            TotalQty = "TotalQty",
            TotalBasicAmount = "TotalBasicAmount",
            ShippingCost = "ShippingCost",
            TotalTax = "TotalTax",
            TotalAmount = "TotalAmount",
            Remarks = "Remarks",
            SupplierId = "SupplierId",
            IsPaid = "IsPaid",
            SupplierSuppilerName = "SupplierSuppilerName",
            SupplierWarehouse = "SupplierWarehouse"
        }
    }
}
declare namespace AprajitaRetails.Purchases {
    namespace ProductPurchasesService {
        const baseUrl = "Purchases/ProductPurchases";
        function Create(request: Serenity.SaveRequest<ProductPurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductPurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductPurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductPurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchases/ProductPurchases/Create",
            Update = "Purchases/ProductPurchases/Update",
            Delete = "Purchases/ProductPurchases/Delete",
            Retrieve = "Purchases/ProductPurchases/Retrieve",
            List = "Purchases/ProductPurchases/List"
        }
    }
}
declare namespace AprajitaRetails.Purchases {
}
declare namespace AprajitaRetails.Purchases {
    interface PurchaseItemsForm {
        ProductPurchaseId: Serenity.IntegerEditor;
        ProductItemId: Serenity.IntegerEditor;
        Barcode: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Unit: Serenity.IntegerEditor;
        Cost: Serenity.DecimalEditor;
        TaxAmout: Serenity.DecimalEditor;
        PurchaseTaxTypeId: Serenity.IntegerEditor;
        CostValue: Serenity.DecimalEditor;
    }
    class PurchaseItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Purchases {
    interface PurchaseItemsRow {
        PurchaseItemId?: number;
        ProductPurchaseId?: number;
        ProductItemId?: number;
        Barcode?: string;
        Qty?: number;
        Unit?: number;
        Cost?: number;
        TaxAmout?: number;
        PurchaseTaxTypeId?: number;
        CostValue?: number;
        ProductPurchaseInWardNo?: string;
        ProductPurchaseInWardDate?: string;
        ProductPurchasePurchaseDate?: string;
        ProductPurchaseInvoiceNo?: string;
        ProductPurchaseTotalQty?: number;
        ProductPurchaseTotalBasicAmount?: number;
        ProductPurchaseShippingCost?: number;
        ProductPurchaseTotalTax?: number;
        ProductPurchaseTotalAmount?: number;
        ProductPurchaseRemarks?: string;
        ProductPurchaseSupplierId?: number;
        ProductPurchaseIsPaid?: boolean;
        ProductItemBarcode?: string;
        ProductItemBrandId?: number;
        ProductItemStyleCode?: string;
        ProductItemProductName?: string;
        ProductItemItemDesc?: string;
        ProductItemCategorys?: number;
        ProductItemMrp?: number;
        ProductItemTaxRate?: number;
        ProductItemCost?: number;
        ProductItemSize?: number;
        ProductItemUnits?: number;
        ProductItemMainCategoryCategoryId?: number;
        ProductItemProductCategoryCategoryId?: number;
        ProductItemProductTypeCategoryId?: number;
        PurchaseTaxTypeTaxName?: string;
        PurchaseTaxTypeTaxType?: number;
        PurchaseTaxTypeCompositeRate?: number;
    }
    namespace PurchaseItemsRow {
        const idProperty = "PurchaseItemId";
        const nameProperty = "Barcode";
        const localTextPrefix = "Purchases.PurchaseItems";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PurchaseItemId = "PurchaseItemId",
            ProductPurchaseId = "ProductPurchaseId",
            ProductItemId = "ProductItemId",
            Barcode = "Barcode",
            Qty = "Qty",
            Unit = "Unit",
            Cost = "Cost",
            TaxAmout = "TaxAmout",
            PurchaseTaxTypeId = "PurchaseTaxTypeId",
            CostValue = "CostValue",
            ProductPurchaseInWardNo = "ProductPurchaseInWardNo",
            ProductPurchaseInWardDate = "ProductPurchaseInWardDate",
            ProductPurchasePurchaseDate = "ProductPurchasePurchaseDate",
            ProductPurchaseInvoiceNo = "ProductPurchaseInvoiceNo",
            ProductPurchaseTotalQty = "ProductPurchaseTotalQty",
            ProductPurchaseTotalBasicAmount = "ProductPurchaseTotalBasicAmount",
            ProductPurchaseShippingCost = "ProductPurchaseShippingCost",
            ProductPurchaseTotalTax = "ProductPurchaseTotalTax",
            ProductPurchaseTotalAmount = "ProductPurchaseTotalAmount",
            ProductPurchaseRemarks = "ProductPurchaseRemarks",
            ProductPurchaseSupplierId = "ProductPurchaseSupplierId",
            ProductPurchaseIsPaid = "ProductPurchaseIsPaid",
            ProductItemBarcode = "ProductItemBarcode",
            ProductItemBrandId = "ProductItemBrandId",
            ProductItemStyleCode = "ProductItemStyleCode",
            ProductItemProductName = "ProductItemProductName",
            ProductItemItemDesc = "ProductItemItemDesc",
            ProductItemCategorys = "ProductItemCategorys",
            ProductItemMrp = "ProductItemMrp",
            ProductItemTaxRate = "ProductItemTaxRate",
            ProductItemCost = "ProductItemCost",
            ProductItemSize = "ProductItemSize",
            ProductItemUnits = "ProductItemUnits",
            ProductItemMainCategoryCategoryId = "ProductItemMainCategoryCategoryId",
            ProductItemProductCategoryCategoryId = "ProductItemProductCategoryCategoryId",
            ProductItemProductTypeCategoryId = "ProductItemProductTypeCategoryId",
            PurchaseTaxTypeTaxName = "PurchaseTaxTypeTaxName",
            PurchaseTaxTypeTaxType = "PurchaseTaxTypeTaxType",
            PurchaseTaxTypeCompositeRate = "PurchaseTaxTypeCompositeRate"
        }
    }
}
declare namespace AprajitaRetails.Purchases {
    namespace PurchaseItemsService {
        const baseUrl = "Purchases/PurchaseItems";
        function Create(request: Serenity.SaveRequest<PurchaseItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PurchaseItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchaseItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchaseItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Purchases/PurchaseItems/Create",
            Update = "Purchases/PurchaseItems/Update",
            Delete = "Purchases/PurchaseItems/Delete",
            Retrieve = "Purchases/PurchaseItems/Retrieve",
            List = "Purchases/PurchaseItems/List"
        }
    }
}
declare namespace AprajitaRetails.Receipts {
}
declare namespace AprajitaRetails.Receipts {
    interface CashReceiptsForm {
        InwardDate: Serenity.DateEditor;
        TranscationModeId: Serenity.IntegerEditor;
        ReceiptFrom: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        SlipNo: Serenity.StringEditor;
    }
    class CashReceiptsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Receipts {
    interface CashReceiptsRow {
        CashReceiptId?: number;
        InwardDate?: string;
        TranscationModeId?: number;
        ReceiptFrom?: string;
        Amount?: number;
        SlipNo?: string;
        TranscationModeTranscation?: string;
    }
    namespace CashReceiptsRow {
        const idProperty = "CashReceiptId";
        const nameProperty = "ReceiptFrom";
        const localTextPrefix = "Receipts.CashReceipts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CashReceiptId = "CashReceiptId",
            InwardDate = "InwardDate",
            TranscationModeId = "TranscationModeId",
            ReceiptFrom = "ReceiptFrom",
            Amount = "Amount",
            SlipNo = "SlipNo",
            TranscationModeTranscation = "TranscationModeTranscation"
        }
    }
}
declare namespace AprajitaRetails.Receipts {
    namespace CashReceiptsService {
        const baseUrl = "Receipts/CashReceipts";
        function Create(request: Serenity.SaveRequest<CashReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CashReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CashReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CashReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Receipts/CashReceipts/Create",
            Update = "Receipts/CashReceipts/Update",
            Delete = "Receipts/CashReceipts/Delete",
            Retrieve = "Receipts/CashReceipts/Retrieve",
            List = "Receipts/CashReceipts/List"
        }
    }
}
declare namespace AprajitaRetails.Receipts {
}
declare namespace AprajitaRetails.Receipts {
    interface ReceiptsForm {
        RecieptDate: Serenity.DateEditor;
        ReceiptFrom: Serenity.StringEditor;
        PayMode: Serenity.IntegerEditor;
        ReceiptDetails: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        RecieptSlipNo: Serenity.StringEditor;
        Remarks: Serenity.StringEditor;
    }
    class ReceiptsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Receipts {
    interface ReceiptsRow {
        ReceiptId?: number;
        RecieptDate?: string;
        ReceiptFrom?: string;
        PayMode?: number;
        ReceiptDetails?: string;
        Amount?: number;
        RecieptSlipNo?: string;
        Remarks?: string;
    }
    namespace ReceiptsRow {
        const idProperty = "ReceiptId";
        const nameProperty = "ReceiptFrom";
        const localTextPrefix = "Receipts.Receipts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ReceiptId = "ReceiptId",
            RecieptDate = "RecieptDate",
            ReceiptFrom = "ReceiptFrom",
            PayMode = "PayMode",
            ReceiptDetails = "ReceiptDetails",
            Amount = "Amount",
            RecieptSlipNo = "RecieptSlipNo",
            Remarks = "Remarks"
        }
    }
}
declare namespace AprajitaRetails.Receipts {
    namespace ReceiptsService {
        const baseUrl = "Receipts/Receipts";
        function Create(request: Serenity.SaveRequest<ReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Receipts/Receipts/Create",
            Update = "Receipts/Receipts/Update",
            Delete = "Receipts/Receipts/Delete",
            Retrieve = "Receipts/Receipts/Retrieve",
            List = "Receipts/Receipts/List"
        }
    }
}
declare namespace AprajitaRetails.Sales {
}
declare namespace AprajitaRetails.Sales {
    interface CustomersForm {
        FirstName: Serenity.StringEditor;
        LastName: Serenity.StringEditor;
        Age: Serenity.IntegerEditor;
        DateOfBirth: Serenity.DateEditor;
        City: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        Gender: Serenity.IntegerEditor;
        NoOfBills: Serenity.IntegerEditor;
        TotalAmount: Serenity.DecimalEditor;
        CreatedDate: Serenity.DateEditor;
    }
    class CustomersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Sales {
    interface CustomersRow {
        CustomerId?: number;
        FirstName?: string;
        LastName?: string;
        Age?: number;
        DateOfBirth?: string;
        City?: string;
        MobileNo?: string;
        Gender?: number;
        NoOfBills?: number;
        TotalAmount?: number;
        CreatedDate?: string;
    }
    namespace CustomersRow {
        const idProperty = "CustomerId";
        const nameProperty = "FirstName";
        const localTextPrefix = "Sales.Customers";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CustomerId = "CustomerId",
            FirstName = "FirstName",
            LastName = "LastName",
            Age = "Age",
            DateOfBirth = "DateOfBirth",
            City = "City",
            MobileNo = "MobileNo",
            Gender = "Gender",
            NoOfBills = "NoOfBills",
            TotalAmount = "TotalAmount",
            CreatedDate = "CreatedDate"
        }
    }
}
declare namespace AprajitaRetails.Sales {
    namespace CustomersService {
        const baseUrl = "Sales/Customers";
        function Create(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Customers/Create",
            Update = "Sales/Customers/Update",
            Delete = "Sales/Customers/Delete",
            Retrieve = "Sales/Customers/Retrieve",
            List = "Sales/Customers/List"
        }
    }
}
declare namespace AprajitaRetails.Sales {
}
declare namespace AprajitaRetails.Sales {
    interface DailySalesForm {
        SaleDate: Serenity.DateEditor;
        InvNo: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        CashAmount: Serenity.DecimalEditor;
        SalesmanId: Serenity.IntegerEditor;
        IsDue: Serenity.BooleanEditor;
        IsManualBill: Serenity.BooleanEditor;
        IsTailoringBill: Serenity.BooleanEditor;
        Remarks: Serenity.StringEditor;
        IsSaleReturn: Serenity.BooleanEditor;
    }
    class DailySalesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Sales {
    interface DailySalesRow {
        DailySaleId?: number;
        SaleDate?: string;
        InvNo?: string;
        Amount?: number;
        PayMode?: number;
        CashAmount?: number;
        SalesmanId?: number;
        IsDue?: boolean;
        IsManualBill?: boolean;
        IsTailoringBill?: boolean;
        Remarks?: string;
        IsSaleReturn?: boolean;
        SalesmanSalesmanName?: string;
    }
    namespace DailySalesRow {
        const idProperty = "DailySaleId";
        const nameProperty = "InvNo";
        const localTextPrefix = "Sales.DailySales";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            DailySaleId = "DailySaleId",
            SaleDate = "SaleDate",
            InvNo = "InvNo",
            Amount = "Amount",
            PayMode = "PayMode",
            CashAmount = "CashAmount",
            SalesmanId = "SalesmanId",
            IsDue = "IsDue",
            IsManualBill = "IsManualBill",
            IsTailoringBill = "IsTailoringBill",
            Remarks = "Remarks",
            IsSaleReturn = "IsSaleReturn",
            SalesmanSalesmanName = "SalesmanSalesmanName"
        }
    }
}
declare namespace AprajitaRetails.Sales {
    namespace DailySalesService {
        const baseUrl = "Sales/DailySales";
        function Create(request: Serenity.SaveRequest<DailySalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DailySalesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DailySalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DailySalesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/DailySales/Create",
            Update = "Sales/DailySales/Update",
            Delete = "Sales/DailySales/Delete",
            Retrieve = "Sales/DailySales/Retrieve",
            List = "Sales/DailySales/List"
        }
    }
}
declare namespace AprajitaRetails.Sales {
}
declare namespace AprajitaRetails.Sales {
    interface SaleInvoicesForm {
        CustomerId: Serenity.IntegerEditor;
        OnDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        TotalItems: Serenity.IntegerEditor;
        TotalQty: Serenity.DecimalEditor;
        TotalBillAmount: Serenity.DecimalEditor;
        TotalDiscountAmount: Serenity.DecimalEditor;
        RoundOffAmount: Serenity.DecimalEditor;
        TotalTaxAmount: Serenity.DecimalEditor;
    }
    class SaleInvoicesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Sales {
    interface SaleInvoicesRow {
        SaleInvoiceId?: number;
        CustomerId?: number;
        OnDate?: string;
        InvoiceNo?: string;
        TotalItems?: number;
        TotalQty?: number;
        TotalBillAmount?: number;
        TotalDiscountAmount?: number;
        RoundOffAmount?: number;
        TotalTaxAmount?: number;
    }
    namespace SaleInvoicesRow {
        const idProperty = "SaleInvoiceId";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Sales.SaleInvoices";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SaleInvoiceId = "SaleInvoiceId",
            CustomerId = "CustomerId",
            OnDate = "OnDate",
            InvoiceNo = "InvoiceNo",
            TotalItems = "TotalItems",
            TotalQty = "TotalQty",
            TotalBillAmount = "TotalBillAmount",
            TotalDiscountAmount = "TotalDiscountAmount",
            RoundOffAmount = "RoundOffAmount",
            TotalTaxAmount = "TotalTaxAmount"
        }
    }
}
declare namespace AprajitaRetails.Sales {
    namespace SaleInvoicesService {
        const baseUrl = "Sales/SaleInvoices";
        function Create(request: Serenity.SaveRequest<SaleInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaleInvoicesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleInvoicesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SaleInvoices/Create",
            Update = "Sales/SaleInvoices/Update",
            Delete = "Sales/SaleInvoices/Delete",
            Retrieve = "Sales/SaleInvoices/Retrieve",
            List = "Sales/SaleInvoices/List"
        }
    }
}
declare namespace AprajitaRetails.Sales {
}
declare namespace AprajitaRetails.Sales {
    interface SaleItemsForm {
        SaleInvoiceId: Serenity.IntegerEditor;
        ProductItemId: Serenity.IntegerEditor;
        BarCode: Serenity.StringEditor;
        Qty: Serenity.DecimalEditor;
        Units: Serenity.IntegerEditor;
        Mrp: Serenity.DecimalEditor;
        BasicAmount: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        TaxAmount: Serenity.DecimalEditor;
        SaleTaxTypeId: Serenity.IntegerEditor;
        BillAmount: Serenity.DecimalEditor;
        SalesmanId: Serenity.IntegerEditor;
    }
    class SaleItemsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Sales {
    interface SaleItemsRow {
        SaleItemId?: number;
        SaleInvoiceId?: number;
        ProductItemId?: number;
        BarCode?: string;
        Qty?: number;
        Units?: number;
        Mrp?: number;
        BasicAmount?: number;
        Discount?: number;
        TaxAmount?: number;
        SaleTaxTypeId?: number;
        BillAmount?: number;
        SalesmanId?: number;
        SaleInvoiceCustomerId?: number;
        SaleInvoiceOnDate?: string;
        SaleInvoiceInvoiceNo?: string;
        SaleInvoiceTotalItems?: number;
        SaleInvoiceTotalQty?: number;
        SaleInvoiceTotalBillAmount?: number;
        SaleInvoiceTotalDiscountAmount?: number;
        SaleInvoiceRoundOffAmount?: number;
        SaleInvoiceTotalTaxAmount?: number;
        ProductItemBarcode?: string;
        ProductItemBrandId?: number;
        ProductItemStyleCode?: string;
        ProductItemProductName?: string;
        ProductItemItemDesc?: string;
        ProductItemCategorys?: number;
        ProductItemMrp?: number;
        ProductItemTaxRate?: number;
        ProductItemCost?: number;
        ProductItemSize?: number;
        ProductItemUnits?: number;
        ProductItemMainCategoryCategoryId?: number;
        ProductItemProductCategoryCategoryId?: number;
        ProductItemProductTypeCategoryId?: number;
        SaleTaxTypeTaxName?: string;
        SaleTaxTypeTaxType?: number;
        SaleTaxTypeCompositeRate?: number;
        SalesmanSalesmanName?: string;
    }
    namespace SaleItemsRow {
        const idProperty = "SaleItemId";
        const nameProperty = "BarCode";
        const localTextPrefix = "Sales.SaleItems";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SaleItemId = "SaleItemId",
            SaleInvoiceId = "SaleInvoiceId",
            ProductItemId = "ProductItemId",
            BarCode = "BarCode",
            Qty = "Qty",
            Units = "Units",
            Mrp = "Mrp",
            BasicAmount = "BasicAmount",
            Discount = "Discount",
            TaxAmount = "TaxAmount",
            SaleTaxTypeId = "SaleTaxTypeId",
            BillAmount = "BillAmount",
            SalesmanId = "SalesmanId",
            SaleInvoiceCustomerId = "SaleInvoiceCustomerId",
            SaleInvoiceOnDate = "SaleInvoiceOnDate",
            SaleInvoiceInvoiceNo = "SaleInvoiceInvoiceNo",
            SaleInvoiceTotalItems = "SaleInvoiceTotalItems",
            SaleInvoiceTotalQty = "SaleInvoiceTotalQty",
            SaleInvoiceTotalBillAmount = "SaleInvoiceTotalBillAmount",
            SaleInvoiceTotalDiscountAmount = "SaleInvoiceTotalDiscountAmount",
            SaleInvoiceRoundOffAmount = "SaleInvoiceRoundOffAmount",
            SaleInvoiceTotalTaxAmount = "SaleInvoiceTotalTaxAmount",
            ProductItemBarcode = "ProductItemBarcode",
            ProductItemBrandId = "ProductItemBrandId",
            ProductItemStyleCode = "ProductItemStyleCode",
            ProductItemProductName = "ProductItemProductName",
            ProductItemItemDesc = "ProductItemItemDesc",
            ProductItemCategorys = "ProductItemCategorys",
            ProductItemMrp = "ProductItemMrp",
            ProductItemTaxRate = "ProductItemTaxRate",
            ProductItemCost = "ProductItemCost",
            ProductItemSize = "ProductItemSize",
            ProductItemUnits = "ProductItemUnits",
            ProductItemMainCategoryCategoryId = "ProductItemMainCategoryCategoryId",
            ProductItemProductCategoryCategoryId = "ProductItemProductCategoryCategoryId",
            ProductItemProductTypeCategoryId = "ProductItemProductTypeCategoryId",
            SaleTaxTypeTaxName = "SaleTaxTypeTaxName",
            SaleTaxTypeTaxType = "SaleTaxTypeTaxType",
            SaleTaxTypeCompositeRate = "SaleTaxTypeCompositeRate",
            SalesmanSalesmanName = "SalesmanSalesmanName"
        }
    }
}
declare namespace AprajitaRetails.Sales {
    namespace SaleItemsService {
        const baseUrl = "Sales/SaleItems";
        function Create(request: Serenity.SaveRequest<SaleItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SaleItemsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SaleItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SaleItemsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SaleItems/Create",
            Update = "Sales/SaleItems/Update",
            Delete = "Sales/SaleItems/Delete",
            Retrieve = "Sales/SaleItems/Retrieve",
            List = "Sales/SaleItems/List"
        }
    }
}
declare namespace AprajitaRetails.Sales {
}
declare namespace AprajitaRetails.Sales {
    interface SalePaymentDetailsForm {
        PayMode: Serenity.IntegerEditor;
        CashAmount: Serenity.DecimalEditor;
        CardAmount: Serenity.DecimalEditor;
        MixAmount: Serenity.DecimalEditor;
    }
    class SalePaymentDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Sales {
    interface SalePaymentDetailsRow {
        SalePaymentDetailId?: number;
        PayMode?: number;
        CashAmount?: number;
        CardAmount?: number;
        MixAmount?: number;
        SalePaymentDetailCustomerId?: number;
        SalePaymentDetailOnDate?: string;
        SalePaymentDetailInvoiceNo?: string;
        SalePaymentDetailTotalItems?: number;
        SalePaymentDetailTotalQty?: number;
        SalePaymentDetailTotalBillAmount?: number;
        SalePaymentDetailTotalDiscountAmount?: number;
        SalePaymentDetailRoundOffAmount?: number;
        SalePaymentDetailTotalTaxAmount?: number;
    }
    namespace SalePaymentDetailsRow {
        const idProperty = "SalePaymentDetailId";
        const localTextPrefix = "Sales.SalePaymentDetails";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SalePaymentDetailId = "SalePaymentDetailId",
            PayMode = "PayMode",
            CashAmount = "CashAmount",
            CardAmount = "CardAmount",
            MixAmount = "MixAmount",
            SalePaymentDetailCustomerId = "SalePaymentDetailCustomerId",
            SalePaymentDetailOnDate = "SalePaymentDetailOnDate",
            SalePaymentDetailInvoiceNo = "SalePaymentDetailInvoiceNo",
            SalePaymentDetailTotalItems = "SalePaymentDetailTotalItems",
            SalePaymentDetailTotalQty = "SalePaymentDetailTotalQty",
            SalePaymentDetailTotalBillAmount = "SalePaymentDetailTotalBillAmount",
            SalePaymentDetailTotalDiscountAmount = "SalePaymentDetailTotalDiscountAmount",
            SalePaymentDetailRoundOffAmount = "SalePaymentDetailRoundOffAmount",
            SalePaymentDetailTotalTaxAmount = "SalePaymentDetailTotalTaxAmount"
        }
    }
}
declare namespace AprajitaRetails.Sales {
    namespace SalePaymentDetailsService {
        const baseUrl = "Sales/SalePaymentDetails";
        function Create(request: Serenity.SaveRequest<SalePaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalePaymentDetailsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalePaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalePaymentDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/SalePaymentDetails/Create",
            Update = "Sales/SalePaymentDetails/Update",
            Delete = "Sales/SalePaymentDetails/Delete",
            Retrieve = "Sales/SalePaymentDetails/Retrieve",
            List = "Sales/SalePaymentDetails/List"
        }
    }
}
declare namespace AprajitaRetails.Sales {
}
declare namespace AprajitaRetails.Sales {
    interface SalesmenForm {
        SalesmanName: Serenity.StringEditor;
    }
    class SalesmenForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Sales {
    interface SalesmenRow {
        SalesmanId?: number;
        SalesmanName?: string;
    }
    namespace SalesmenRow {
        const idProperty = "SalesmanId";
        const nameProperty = "SalesmanName";
        const localTextPrefix = "Sales.Salesmen";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SalesmanId = "SalesmanId",
            SalesmanName = "SalesmanName"
        }
    }
}
declare namespace AprajitaRetails.Sales {
    namespace SalesmenService {
        const baseUrl = "Sales/Salesmen";
        function Create(request: Serenity.SaveRequest<SalesmenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SalesmenRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SalesmenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesmenRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Sales/Salesmen/Create",
            Update = "Sales/Salesmen/Update",
            Delete = "Sales/Salesmen/Delete",
            Retrieve = "Sales/Salesmen/Retrieve",
            List = "Sales/Salesmen/List"
        }
    }
}
declare namespace AprajitaRetails {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace AprajitaRetails.Stores {
}
declare namespace AprajitaRetails.Stores {
    interface StoresForm {
        StoreCode: Serenity.StringEditor;
        StoreName: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        PinCode: Serenity.StringEditor;
        PhoneNo: Serenity.StringEditor;
        StoreManagerName: Serenity.StringEditor;
        StoreManagerPhoneNo: Serenity.StringEditor;
        PanNo: Serenity.StringEditor;
        Gstno: Serenity.StringEditor;
        NoOfEmployees: Serenity.IntegerEditor;
        OpeningDate: Serenity.DateEditor;
        ClosingDate: Serenity.DateEditor;
        Status: Serenity.BooleanEditor;
    }
    class StoresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Stores {
    interface StoresRow {
        StoreId?: number;
        StoreCode?: string;
        StoreName?: string;
        Address?: string;
        City?: string;
        PinCode?: string;
        PhoneNo?: string;
        StoreManagerName?: string;
        StoreManagerPhoneNo?: string;
        PanNo?: string;
        Gstno?: string;
        NoOfEmployees?: number;
        OpeningDate?: string;
        ClosingDate?: string;
        Status?: boolean;
    }
    namespace StoresRow {
        const idProperty = "StoreId";
        const nameProperty = "StoreCode";
        const localTextPrefix = "Stores.Stores";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            StoreId = "StoreId",
            StoreCode = "StoreCode",
            StoreName = "StoreName",
            Address = "Address",
            City = "City",
            PinCode = "PinCode",
            PhoneNo = "PhoneNo",
            StoreManagerName = "StoreManagerName",
            StoreManagerPhoneNo = "StoreManagerPhoneNo",
            PanNo = "PanNo",
            Gstno = "Gstno",
            NoOfEmployees = "NoOfEmployees",
            OpeningDate = "OpeningDate",
            ClosingDate = "ClosingDate",
            Status = "Status"
        }
    }
}
declare namespace AprajitaRetails.Stores {
    namespace StoresService {
        const baseUrl = "Stores/Stores";
        function Create(request: Serenity.SaveRequest<StoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StoresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Stores/Stores/Create",
            Update = "Stores/Stores/Update",
            Delete = "Stores/Stores/Delete",
            Retrieve = "Stores/Stores/Retrieve",
            List = "Stores/Stores/List"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
}
declare namespace AprajitaRetails.Tailors {
    interface TailorAttendancesForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        AttDate: Serenity.DateEditor;
        EntryTime: Serenity.StringEditor;
        Status: Serenity.IntegerEditor;
        Remarks: Serenity.StringEditor;
    }
    class TailorAttendancesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tailors {
    interface TailorAttendancesRow {
        TailorAttendanceId?: number;
        TailoringEmployeeId?: number;
        AttDate?: string;
        EntryTime?: string;
        Status?: number;
        Remarks?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }
    namespace TailorAttendancesRow {
        const idProperty = "TailorAttendanceId";
        const nameProperty = "EntryTime";
        const localTextPrefix = "Tailors.TailorAttendances";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TailorAttendanceId = "TailorAttendanceId",
            TailoringEmployeeId = "TailoringEmployeeId",
            AttDate = "AttDate",
            EntryTime = "EntryTime",
            Status = "Status",
            Remarks = "Remarks",
            TailoringEmployeeStaffName = "TailoringEmployeeStaffName",
            TailoringEmployeeMobileNo = "TailoringEmployeeMobileNo",
            TailoringEmployeeJoiningDate = "TailoringEmployeeJoiningDate",
            TailoringEmployeeLeavingDate = "TailoringEmployeeLeavingDate",
            TailoringEmployeeIsWorking = "TailoringEmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
    namespace TailorAttendancesService {
        const baseUrl = "Tailors/TailorAttendances";
        function Create(request: Serenity.SaveRequest<TailorAttendancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TailorAttendancesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailorAttendancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailorAttendancesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tailors/TailorAttendances/Create",
            Update = "Tailors/TailorAttendances/Update",
            Delete = "Tailors/TailorAttendances/Delete",
            Retrieve = "Tailors/TailorAttendances/Retrieve",
            List = "Tailors/TailorAttendances/List"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringEmployeesForm {
        StaffName: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        JoiningDate: Serenity.DateEditor;
        LeavingDate: Serenity.DateEditor;
        IsWorking: Serenity.BooleanEditor;
    }
    class TailoringEmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringEmployeesRow {
        TailoringEmployeeId?: number;
        StaffName?: string;
        MobileNo?: string;
        JoiningDate?: string;
        LeavingDate?: string;
        IsWorking?: boolean;
    }
    namespace TailoringEmployeesRow {
        const idProperty = "TailoringEmployeeId";
        const nameProperty = "StaffName";
        const localTextPrefix = "Tailors.TailoringEmployees";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TailoringEmployeeId = "TailoringEmployeeId",
            StaffName = "StaffName",
            MobileNo = "MobileNo",
            JoiningDate = "JoiningDate",
            LeavingDate = "LeavingDate",
            IsWorking = "IsWorking"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
    namespace TailoringEmployeesService {
        const baseUrl = "Tailors/TailoringEmployees";
        function Create(request: Serenity.SaveRequest<TailoringEmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TailoringEmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringEmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringEmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tailors/TailoringEmployees/Create",
            Update = "Tailors/TailoringEmployees/Update",
            Delete = "Tailors/TailoringEmployees/Delete",
            Retrieve = "Tailors/TailoringEmployees/Retrieve",
            List = "Tailors/TailoringEmployees/List"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringSalaryPaymentsForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        SalaryMonth: Serenity.StringEditor;
        SalaryComponet: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }
    class TailoringSalaryPaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringSalaryPaymentsRow {
        TailoringSalaryPaymentId?: number;
        TailoringEmployeeId?: number;
        SalaryMonth?: string;
        SalaryComponet?: number;
        PaymentDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }
    namespace TailoringSalaryPaymentsRow {
        const idProperty = "TailoringSalaryPaymentId";
        const nameProperty = "SalaryMonth";
        const localTextPrefix = "Tailors.TailoringSalaryPayments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TailoringSalaryPaymentId = "TailoringSalaryPaymentId",
            TailoringEmployeeId = "TailoringEmployeeId",
            SalaryMonth = "SalaryMonth",
            SalaryComponet = "SalaryComponet",
            PaymentDate = "PaymentDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            TailoringEmployeeStaffName = "TailoringEmployeeStaffName",
            TailoringEmployeeMobileNo = "TailoringEmployeeMobileNo",
            TailoringEmployeeJoiningDate = "TailoringEmployeeJoiningDate",
            TailoringEmployeeLeavingDate = "TailoringEmployeeLeavingDate",
            TailoringEmployeeIsWorking = "TailoringEmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
    namespace TailoringSalaryPaymentsService {
        const baseUrl = "Tailors/TailoringSalaryPayments";
        function Create(request: Serenity.SaveRequest<TailoringSalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TailoringSalaryPaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringSalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringSalaryPaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tailors/TailoringSalaryPayments/Create",
            Update = "Tailors/TailoringSalaryPayments/Update",
            Delete = "Tailors/TailoringSalaryPayments/Delete",
            Retrieve = "Tailors/TailoringSalaryPayments/Retrieve",
            List = "Tailors/TailoringSalaryPayments/List"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringStaffAdvancePaymentsForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        PaymentDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }
    class TailoringStaffAdvancePaymentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringStaffAdvancePaymentsRow {
        TailoringStaffAdvancePaymentId?: number;
        TailoringEmployeeId?: number;
        PaymentDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }
    namespace TailoringStaffAdvancePaymentsRow {
        const idProperty = "TailoringStaffAdvancePaymentId";
        const nameProperty = "Details";
        const localTextPrefix = "Tailors.TailoringStaffAdvancePayments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TailoringStaffAdvancePaymentId = "TailoringStaffAdvancePaymentId",
            TailoringEmployeeId = "TailoringEmployeeId",
            PaymentDate = "PaymentDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            TailoringEmployeeStaffName = "TailoringEmployeeStaffName",
            TailoringEmployeeMobileNo = "TailoringEmployeeMobileNo",
            TailoringEmployeeJoiningDate = "TailoringEmployeeJoiningDate",
            TailoringEmployeeLeavingDate = "TailoringEmployeeLeavingDate",
            TailoringEmployeeIsWorking = "TailoringEmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
    namespace TailoringStaffAdvancePaymentsService {
        const baseUrl = "Tailors/TailoringStaffAdvancePayments";
        function Create(request: Serenity.SaveRequest<TailoringStaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TailoringStaffAdvancePaymentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringStaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringStaffAdvancePaymentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tailors/TailoringStaffAdvancePayments/Create",
            Update = "Tailors/TailoringStaffAdvancePayments/Update",
            Delete = "Tailors/TailoringStaffAdvancePayments/Delete",
            Retrieve = "Tailors/TailoringStaffAdvancePayments/Retrieve",
            List = "Tailors/TailoringStaffAdvancePayments/List"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringStaffAdvanceReceiptsForm {
        TailoringEmployeeId: Serenity.IntegerEditor;
        ReceiptDate: Serenity.DateEditor;
        Amount: Serenity.DecimalEditor;
        PayMode: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
    }
    class TailoringStaffAdvanceReceiptsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tailors {
    interface TailoringStaffAdvanceReceiptsRow {
        TailoringStaffAdvanceReceiptId?: number;
        TailoringEmployeeId?: number;
        ReceiptDate?: string;
        Amount?: number;
        PayMode?: number;
        Details?: string;
        TailoringEmployeeStaffName?: string;
        TailoringEmployeeMobileNo?: string;
        TailoringEmployeeJoiningDate?: string;
        TailoringEmployeeLeavingDate?: string;
        TailoringEmployeeIsWorking?: boolean;
    }
    namespace TailoringStaffAdvanceReceiptsRow {
        const idProperty = "TailoringStaffAdvanceReceiptId";
        const nameProperty = "Details";
        const localTextPrefix = "Tailors.TailoringStaffAdvanceReceipts";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            TailoringStaffAdvanceReceiptId = "TailoringStaffAdvanceReceiptId",
            TailoringEmployeeId = "TailoringEmployeeId",
            ReceiptDate = "ReceiptDate",
            Amount = "Amount",
            PayMode = "PayMode",
            Details = "Details",
            TailoringEmployeeStaffName = "TailoringEmployeeStaffName",
            TailoringEmployeeMobileNo = "TailoringEmployeeMobileNo",
            TailoringEmployeeJoiningDate = "TailoringEmployeeJoiningDate",
            TailoringEmployeeLeavingDate = "TailoringEmployeeLeavingDate",
            TailoringEmployeeIsWorking = "TailoringEmployeeIsWorking"
        }
    }
}
declare namespace AprajitaRetails.Tailors {
    namespace TailoringStaffAdvanceReceiptsService {
        const baseUrl = "Tailors/TailoringStaffAdvanceReceipts";
        function Create(request: Serenity.SaveRequest<TailoringStaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TailoringStaffAdvanceReceiptsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TailoringStaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TailoringStaffAdvanceReceiptsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tailors/TailoringStaffAdvanceReceipts/Create",
            Update = "Tailors/TailoringStaffAdvanceReceipts/Update",
            Delete = "Tailors/TailoringStaffAdvanceReceipts/Delete",
            Retrieve = "Tailors/TailoringStaffAdvanceReceipts/Retrieve",
            List = "Tailors/TailoringStaffAdvanceReceipts/List"
        }
    }
}
declare namespace AprajitaRetails.Tally {
}
declare namespace AprajitaRetails.Tally {
    interface LedgerEntriesForm {
        PartyId: Serenity.IntegerEditor;
        EntryDate: Serenity.DateEditor;
        Particulars: Serenity.StringEditor;
        AmountIn: Serenity.DecimalEditor;
        AmountOut: Serenity.DecimalEditor;
        Balance: Serenity.DecimalEditor;
    }
    class LedgerEntriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tally {
    interface LedgerEntriesRow {
        LedgerEntryId?: number;
        PartyId?: number;
        EntryDate?: string;
        Particulars?: string;
        AmountIn?: number;
        AmountOut?: number;
        Balance?: number;
        PartyPartyName?: string;
        PartyOpenningDate?: string;
        PartyOpenningBalance?: number;
        PartyAddress?: string;
        PartyPanNo?: string;
        PartyGstNo?: string;
        PartyLedgerType?: number;
    }
    namespace LedgerEntriesRow {
        const idProperty = "LedgerEntryId";
        const nameProperty = "Particulars";
        const localTextPrefix = "Tally.LedgerEntries";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LedgerEntryId = "LedgerEntryId",
            PartyId = "PartyId",
            EntryDate = "EntryDate",
            Particulars = "Particulars",
            AmountIn = "AmountIn",
            AmountOut = "AmountOut",
            Balance = "Balance",
            PartyPartyName = "PartyPartyName",
            PartyOpenningDate = "PartyOpenningDate",
            PartyOpenningBalance = "PartyOpenningBalance",
            PartyAddress = "PartyAddress",
            PartyPanNo = "PartyPanNo",
            PartyGstNo = "PartyGstNo",
            PartyLedgerType = "PartyLedgerType"
        }
    }
}
declare namespace AprajitaRetails.Tally {
    namespace LedgerEntriesService {
        const baseUrl = "Tally/LedgerEntries";
        function Create(request: Serenity.SaveRequest<LedgerEntriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LedgerEntriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LedgerEntriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LedgerEntriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tally/LedgerEntries/Create",
            Update = "Tally/LedgerEntries/Update",
            Delete = "Tally/LedgerEntries/Delete",
            Retrieve = "Tally/LedgerEntries/Retrieve",
            List = "Tally/LedgerEntries/List"
        }
    }
}
declare namespace AprajitaRetails.Tally {
}
declare namespace AprajitaRetails.Tally {
    interface LedgerMastersForm {
        PartyId: Serenity.IntegerEditor;
        CreatingDate: Serenity.DateEditor;
        LedgerType: Serenity.IntegerEditor;
    }
    class LedgerMastersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tally {
    interface LedgerMastersRow {
        LedgerMasterId?: number;
        PartyId?: number;
        CreatingDate?: string;
        LedgerType?: number;
        PartyPartyName?: string;
        PartyOpenningDate?: string;
        PartyOpenningBalance?: number;
        PartyAddress?: string;
        PartyPanNo?: string;
        PartyGstNo?: string;
        PartyLedgerType?: number;
    }
    namespace LedgerMastersRow {
        const idProperty = "LedgerMasterId";
        const localTextPrefix = "Tally.LedgerMasters";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            LedgerMasterId = "LedgerMasterId",
            PartyId = "PartyId",
            CreatingDate = "CreatingDate",
            LedgerType = "LedgerType",
            PartyPartyName = "PartyPartyName",
            PartyOpenningDate = "PartyOpenningDate",
            PartyOpenningBalance = "PartyOpenningBalance",
            PartyAddress = "PartyAddress",
            PartyPanNo = "PartyPanNo",
            PartyGstNo = "PartyGstNo",
            PartyLedgerType = "PartyLedgerType"
        }
    }
}
declare namespace AprajitaRetails.Tally {
    namespace LedgerMastersService {
        const baseUrl = "Tally/LedgerMasters";
        function Create(request: Serenity.SaveRequest<LedgerMastersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LedgerMastersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LedgerMastersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LedgerMastersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tally/LedgerMasters/Create",
            Update = "Tally/LedgerMasters/Update",
            Delete = "Tally/LedgerMasters/Delete",
            Retrieve = "Tally/LedgerMasters/Retrieve",
            List = "Tally/LedgerMasters/List"
        }
    }
}
declare namespace AprajitaRetails.Tally {
}
declare namespace AprajitaRetails.Tally {
    interface PartiesForm {
        PartyName: Serenity.StringEditor;
        OpenningDate: Serenity.DateEditor;
        OpenningBalance: Serenity.DecimalEditor;
        Address: Serenity.StringEditor;
        PanNo: Serenity.StringEditor;
        GstNo: Serenity.StringEditor;
        LedgerType: Serenity.IntegerEditor;
    }
    class PartiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Tally {
    interface PartiesRow {
        PartyId?: number;
        PartyName?: string;
        OpenningDate?: string;
        OpenningBalance?: number;
        Address?: string;
        PanNo?: string;
        GstNo?: string;
        LedgerType?: number;
    }
    namespace PartiesRow {
        const idProperty = "PartyId";
        const nameProperty = "PartyName";
        const localTextPrefix = "Tally.Parties";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            PartyId = "PartyId",
            PartyName = "PartyName",
            OpenningDate = "OpenningDate",
            OpenningBalance = "OpenningBalance",
            Address = "Address",
            PanNo = "PanNo",
            GstNo = "GstNo",
            LedgerType = "LedgerType"
        }
    }
}
declare namespace AprajitaRetails.Tally {
    namespace PartiesService {
        const baseUrl = "Tally/Parties";
        function Create(request: Serenity.SaveRequest<PartiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PartiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PartiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PartiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Tally/Parties/Create",
            Update = "Tally/Parties/Update",
            Delete = "Tally/Parties/Delete",
            Retrieve = "Tally/Parties/Retrieve",
            List = "Tally/Parties/List"
        }
    }
}
declare namespace AprajitaRetails.Texts {
}
declare namespace AprajitaRetails.Voyager {
}
declare namespace AprajitaRetails.Voyager {
    interface ImportInWardsForm {
        InWardNo: Serenity.StringEditor;
        InWardDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        PartyName: Serenity.StringEditor;
        TotalQty: Serenity.DecimalEditor;
        TotalMrpValue: Serenity.DecimalEditor;
        TotalCost: Serenity.DecimalEditor;
        ImportDate: Serenity.DateEditor;
    }
    class ImportInWardsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Voyager {
    interface ImportInWardsRow {
        ImportInWardId?: number;
        InWardNo?: string;
        InWardDate?: string;
        InvoiceNo?: string;
        InvoiceDate?: string;
        PartyName?: string;
        TotalQty?: number;
        TotalMrpValue?: number;
        TotalCost?: number;
        ImportDate?: string;
    }
    namespace ImportInWardsRow {
        const idProperty = "ImportInWardId";
        const nameProperty = "InWardNo";
        const localTextPrefix = "Voyager.ImportInWards";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ImportInWardId = "ImportInWardId",
            InWardNo = "InWardNo",
            InWardDate = "InWardDate",
            InvoiceNo = "InvoiceNo",
            InvoiceDate = "InvoiceDate",
            PartyName = "PartyName",
            TotalQty = "TotalQty",
            TotalMrpValue = "TotalMrpValue",
            TotalCost = "TotalCost",
            ImportDate = "ImportDate"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
    namespace ImportInWardsService {
        const baseUrl = "Voyager/ImportInWards";
        function Create(request: Serenity.SaveRequest<ImportInWardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportInWardsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportInWardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportInWardsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Voyager/ImportInWards/Create",
            Update = "Voyager/ImportInWards/Update",
            Delete = "Voyager/ImportInWards/Delete",
            Retrieve = "Voyager/ImportInWards/Retrieve",
            List = "Voyager/ImportInWards/List"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
}
declare namespace AprajitaRetails.Voyager {
    interface ImportPurchasesForm {
        GrnNo: Serenity.StringEditor;
        GrnDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceDate: Serenity.DateEditor;
        SupplierName: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        StyleCode: Serenity.StringEditor;
        ItemDesc: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Mrp: Serenity.DecimalEditor;
        MrpValue: Serenity.DecimalEditor;
        Cost: Serenity.DecimalEditor;
        CostValue: Serenity.DecimalEditor;
        TaxAmt: Serenity.DecimalEditor;
        IsVatBill: Serenity.BooleanEditor;
        IsLocal: Serenity.BooleanEditor;
        IsDataConsumed: Serenity.BooleanEditor;
        ImportTime: Serenity.DateEditor;
    }
    class ImportPurchasesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Voyager {
    interface ImportPurchasesRow {
        ImportPurchaseId?: number;
        GrnNo?: string;
        GrnDate?: string;
        InvoiceNo?: string;
        InvoiceDate?: string;
        SupplierName?: string;
        Barcode?: string;
        ProductName?: string;
        StyleCode?: string;
        ItemDesc?: string;
        Quantity?: number;
        Mrp?: number;
        MrpValue?: number;
        Cost?: number;
        CostValue?: number;
        TaxAmt?: number;
        IsVatBill?: boolean;
        IsLocal?: boolean;
        IsDataConsumed?: boolean;
        ImportTime?: string;
    }
    namespace ImportPurchasesRow {
        const idProperty = "ImportPurchaseId";
        const nameProperty = "GrnNo";
        const localTextPrefix = "Voyager.ImportPurchases";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ImportPurchaseId = "ImportPurchaseId",
            GrnNo = "GrnNo",
            GrnDate = "GrnDate",
            InvoiceNo = "InvoiceNo",
            InvoiceDate = "InvoiceDate",
            SupplierName = "SupplierName",
            Barcode = "Barcode",
            ProductName = "ProductName",
            StyleCode = "StyleCode",
            ItemDesc = "ItemDesc",
            Quantity = "Quantity",
            Mrp = "Mrp",
            MrpValue = "MrpValue",
            Cost = "Cost",
            CostValue = "CostValue",
            TaxAmt = "TaxAmt",
            IsVatBill = "IsVatBill",
            IsLocal = "IsLocal",
            IsDataConsumed = "IsDataConsumed",
            ImportTime = "ImportTime"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
    namespace ImportPurchasesService {
        const baseUrl = "Voyager/ImportPurchases";
        function Create(request: Serenity.SaveRequest<ImportPurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportPurchasesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportPurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportPurchasesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Voyager/ImportPurchases/Create",
            Update = "Voyager/ImportPurchases/Update",
            Delete = "Voyager/ImportPurchases/Delete",
            Retrieve = "Voyager/ImportPurchases/Retrieve",
            List = "Voyager/ImportPurchases/List"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
}
declare namespace AprajitaRetails.Voyager {
    interface ImportSaleItemWisesForm {
        InvoiceDate: Serenity.DateEditor;
        InvoiceNo: Serenity.StringEditor;
        InvoiceType: Serenity.StringEditor;
        BrandName: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ItemDesc: Serenity.StringEditor;
        HsnCode: Serenity.StringEditor;
        Barcode: Serenity.StringEditor;
        StyleCode: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Mrp: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BasicRate: Serenity.DecimalEditor;
        Tax: Serenity.DecimalEditor;
        Sgst: Serenity.DecimalEditor;
        Cgst: Serenity.DecimalEditor;
        LineTotal: Serenity.DecimalEditor;
        RoundOff: Serenity.DecimalEditor;
        BillAmnt: Serenity.DecimalEditor;
        PaymentType: Serenity.StringEditor;
        Saleman: Serenity.StringEditor;
        IsDataConsumed: Serenity.BooleanEditor;
        ImportTime: Serenity.DateEditor;
    }
    class ImportSaleItemWisesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Voyager {
    interface ImportSaleItemWisesRow {
        ImportSaleItemWiseId?: number;
        InvoiceDate?: string;
        InvoiceNo?: string;
        InvoiceType?: string;
        BrandName?: string;
        ProductName?: string;
        ItemDesc?: string;
        HsnCode?: string;
        Barcode?: string;
        StyleCode?: string;
        Quantity?: number;
        Mrp?: number;
        Discount?: number;
        BasicRate?: number;
        Tax?: number;
        Sgst?: number;
        Cgst?: number;
        LineTotal?: number;
        RoundOff?: number;
        BillAmnt?: number;
        PaymentType?: string;
        Saleman?: string;
        IsDataConsumed?: boolean;
        ImportTime?: string;
    }
    namespace ImportSaleItemWisesRow {
        const idProperty = "ImportSaleItemWiseId";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Voyager.ImportSaleItemWises";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ImportSaleItemWiseId = "ImportSaleItemWiseId",
            InvoiceDate = "InvoiceDate",
            InvoiceNo = "InvoiceNo",
            InvoiceType = "InvoiceType",
            BrandName = "BrandName",
            ProductName = "ProductName",
            ItemDesc = "ItemDesc",
            HsnCode = "HsnCode",
            Barcode = "Barcode",
            StyleCode = "StyleCode",
            Quantity = "Quantity",
            Mrp = "Mrp",
            Discount = "Discount",
            BasicRate = "BasicRate",
            Tax = "Tax",
            Sgst = "Sgst",
            Cgst = "Cgst",
            LineTotal = "LineTotal",
            RoundOff = "RoundOff",
            BillAmnt = "BillAmnt",
            PaymentType = "PaymentType",
            Saleman = "Saleman",
            IsDataConsumed = "IsDataConsumed",
            ImportTime = "ImportTime"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
    namespace ImportSaleItemWisesService {
        const baseUrl = "Voyager/ImportSaleItemWises";
        function Create(request: Serenity.SaveRequest<ImportSaleItemWisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportSaleItemWisesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportSaleItemWisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportSaleItemWisesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Voyager/ImportSaleItemWises/Create",
            Update = "Voyager/ImportSaleItemWises/Update",
            Delete = "Voyager/ImportSaleItemWises/Delete",
            Retrieve = "Voyager/ImportSaleItemWises/Retrieve",
            List = "Voyager/ImportSaleItemWises/List"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
}
declare namespace AprajitaRetails.Voyager {
    interface ImportSaleRegistersForm {
        InvoiceNo: Serenity.StringEditor;
        InvoiceType: Serenity.StringEditor;
        InvoiceDate: Serenity.StringEditor;
        Quantity: Serenity.DecimalEditor;
        Mrp: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
        BasicRate: Serenity.DecimalEditor;
        Tax: Serenity.DecimalEditor;
        RoundOff: Serenity.DecimalEditor;
        BillAmnt: Serenity.DecimalEditor;
        PaymentType: Serenity.StringEditor;
        IsConsumed: Serenity.BooleanEditor;
        ImportTime: Serenity.DateEditor;
    }
    class ImportSaleRegistersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace AprajitaRetails.Voyager {
    interface ImportSaleRegistersRow {
        ImportSaleRegisterId?: number;
        InvoiceNo?: string;
        InvoiceType?: string;
        InvoiceDate?: string;
        Quantity?: number;
        Mrp?: number;
        Discount?: number;
        BasicRate?: number;
        Tax?: number;
        RoundOff?: number;
        BillAmnt?: number;
        PaymentType?: string;
        IsConsumed?: boolean;
        ImportTime?: string;
    }
    namespace ImportSaleRegistersRow {
        const idProperty = "ImportSaleRegisterId";
        const nameProperty = "InvoiceNo";
        const localTextPrefix = "Voyager.ImportSaleRegisters";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ImportSaleRegisterId = "ImportSaleRegisterId",
            InvoiceNo = "InvoiceNo",
            InvoiceType = "InvoiceType",
            InvoiceDate = "InvoiceDate",
            Quantity = "Quantity",
            Mrp = "Mrp",
            Discount = "Discount",
            BasicRate = "BasicRate",
            Tax = "Tax",
            RoundOff = "RoundOff",
            BillAmnt = "BillAmnt",
            PaymentType = "PaymentType",
            IsConsumed = "IsConsumed",
            ImportTime = "ImportTime"
        }
    }
}
declare namespace AprajitaRetails.Voyager {
    namespace ImportSaleRegistersService {
        const baseUrl = "Voyager/ImportSaleRegisters";
        function Create(request: Serenity.SaveRequest<ImportSaleRegistersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ImportSaleRegistersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ImportSaleRegistersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ImportSaleRegistersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Voyager/ImportSaleRegisters/Create",
            Update = "Voyager/ImportSaleRegisters/Update",
            Delete = "Voyager/ImportSaleRegisters/Delete",
            Retrieve = "Voyager/ImportSaleRegisters/Retrieve",
            List = "Voyager/ImportSaleRegisters/List"
        }
    }
}
declare namespace AprajitaRetails.LanguageList {
    function getValue(): string[][];
}
declare namespace AprajitaRetails.ScriptInitialization {
}
declare namespace AprajitaRetails.Accounts {
    class CardPaymentDetailsDialog extends Serenity.EntityDialog<CardPaymentDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CardPaymentDetailsForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class CardPaymentDetailsGrid extends Serenity.EntityGrid<CardPaymentDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CardPaymentDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Accounts {
    class CashInBanksDialog extends Serenity.EntityDialog<CashInBanksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashInBanksForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class CashInBanksGrid extends Serenity.EntityGrid<CashInBanksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashInBanksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Accounts {
    class CashInHandsDialog extends Serenity.EntityDialog<CashInHandsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashInHandsForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class CashInHandsGrid extends Serenity.EntityGrid<CashInHandsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashInHandsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Accounts {
    class PurchaseTaxTypesDialog extends Serenity.EntityDialog<PurchaseTaxTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseTaxTypesForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class PurchaseTaxTypesGrid extends Serenity.EntityGrid<PurchaseTaxTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseTaxTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Accounts {
    class SaleTaxTypesDialog extends Serenity.EntityDialog<SaleTaxTypesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SaleTaxTypesForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class SaleTaxTypesGrid extends Serenity.EntityGrid<SaleTaxTypesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleTaxTypesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Accounts {
    class SuspenseAccountsDialog extends Serenity.EntityDialog<SuspenseAccountsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuspenseAccountsForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class SuspenseAccountsGrid extends Serenity.EntityGrid<SuspenseAccountsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuspenseAccountsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Accounts {
    class TranscationModesDialog extends Serenity.EntityDialog<TranscationModesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TranscationModesForm;
    }
}
declare namespace AprajitaRetails.Accounts {
    class TranscationModesGrid extends Serenity.EntityGrid<TranscationModesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TranscationModesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace AprajitaRetails.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace AprajitaRetails.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace AprajitaRetails.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace AprajitaRetails.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare var Vue: any;
declare namespace AprajitaRetails.Administration {
    class SergenPanel extends Serenity.Widget<any> {
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace AprajitaRetails.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace AprajitaRetails.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace AprajitaRetails.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace AprajitaRetails.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace AprajitaRetails.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace AprajitaRetails.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace AprajitaRetails.Banking {
    class AccountNumbersDialog extends Serenity.EntityDialog<AccountNumbersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AccountNumbersForm;
    }
}
declare namespace AprajitaRetails.Banking {
    class AccountNumbersGrid extends Serenity.EntityGrid<AccountNumbersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AccountNumbersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Banking {
    class BankDepositsDialog extends Serenity.EntityDialog<BankDepositsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BankDepositsForm;
    }
}
declare namespace AprajitaRetails.Banking {
    class BankDepositsGrid extends Serenity.EntityGrid<BankDepositsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankDepositsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Banking {
    class BanksDialog extends Serenity.EntityDialog<BanksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BanksForm;
    }
}
declare namespace AprajitaRetails.Banking {
    class BanksGrid extends Serenity.EntityGrid<BanksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BanksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Banking {
    class BankWithdrawalsDialog extends Serenity.EntityDialog<BankWithdrawalsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BankWithdrawalsForm;
    }
}
declare namespace AprajitaRetails.Banking {
    class BankWithdrawalsGrid extends Serenity.EntityGrid<BankWithdrawalsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BankWithdrawalsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Banking {
    class ChequesLogsDialog extends Serenity.EntityDialog<ChequesLogsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ChequesLogsForm;
    }
}
declare namespace AprajitaRetails.Banking {
    class ChequesLogsGrid extends Serenity.EntityGrid<ChequesLogsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ChequesLogsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace AprajitaRetails.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace AprajitaRetails.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace AprajitaRetails.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace AprajitaRetails.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace AprajitaRetails.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace AprajitaRetails.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace AprajitaRetails {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace AprajitaRetails.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace AprajitaRetails.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace AprajitaRetails.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace AprajitaRetails.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace AprajitaRetails.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace AprajitaRetails.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace AprajitaRetails.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace AprajitaRetails.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    class TalioringBookingsDialog extends Serenity.EntityDialog<TalioringBookingsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TalioringBookingsForm;
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    class TalioringBookingsGrid extends Serenity.EntityGrid<TalioringBookingsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TalioringBookingsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    class TalioringDeliveriesDialog extends Serenity.EntityDialog<TalioringDeliveriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TalioringDeliveriesForm;
    }
}
declare namespace AprajitaRetails.CustomTailoring {
    class TalioringDeliveriesGrid extends Serenity.EntityGrid<TalioringDeliveriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TalioringDeliveriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Dues {
    class DueRecoverdsDialog extends Serenity.EntityDialog<DueRecoverdsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DueRecoverdsForm;
    }
}
declare namespace AprajitaRetails.Dues {
    class DueRecoverdsGrid extends Serenity.EntityGrid<DueRecoverdsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DueRecoverdsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Dues {
    class DuesListsDialog extends Serenity.EntityDialog<DuesListsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DuesListsForm;
    }
}
declare namespace AprajitaRetails.Dues {
    class DuesListsGrid extends Serenity.EntityGrid<DuesListsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DuesListsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Expenses {
    class CashPaymentsDialog extends Serenity.EntityDialog<CashPaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashPaymentsForm;
    }
}
declare namespace AprajitaRetails.Expenses {
    class CashPaymentsGrid extends Serenity.EntityGrid<CashPaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashPaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Expenses {
    class ExpensesDialog extends Serenity.EntityDialog<ExpensesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpensesForm;
    }
}
declare namespace AprajitaRetails.Expenses {
    class ExpensesGrid extends Serenity.EntityGrid<ExpensesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpensesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Expenses {
    class PaymentsDialog extends Serenity.EntityDialog<PaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PaymentsForm;
    }
}
declare namespace AprajitaRetails.Expenses {
    class PaymentsGrid extends Serenity.EntityGrid<PaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Expenses {
    class PettyCashExpensesDialog extends Serenity.EntityDialog<PettyCashExpensesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PettyCashExpensesForm;
    }
}
declare namespace AprajitaRetails.Expenses {
    class PettyCashExpensesGrid extends Serenity.EntityGrid<PettyCashExpensesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PettyCashExpensesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class AttendancesDialog extends Serenity.EntityDialog<AttendancesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AttendancesForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class AttendancesGrid extends Serenity.EntityGrid<AttendancesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AttendancesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class CurrentSalariesDialog extends Serenity.EntityDialog<CurrentSalariesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CurrentSalariesForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class CurrentSalariesGrid extends Serenity.EntityGrid<CurrentSalariesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CurrentSalariesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeesForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class PaySlipsDialog extends Serenity.EntityDialog<PaySlipsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PaySlipsForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class PaySlipsGrid extends Serenity.EntityGrid<PaySlipsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PaySlipsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class SalaryPaymentsDialog extends Serenity.EntityDialog<SalaryPaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalaryPaymentsForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class SalaryPaymentsGrid extends Serenity.EntityGrid<SalaryPaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalaryPaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class SalesmenDialog extends Serenity.EntityDialog<SalesmenRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesmenForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class SalesmenGrid extends Serenity.EntityGrid<SalesmenRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesmenDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class StaffAdvancePaymentsDialog extends Serenity.EntityDialog<StaffAdvancePaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StaffAdvancePaymentsForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class StaffAdvancePaymentsGrid extends Serenity.EntityGrid<StaffAdvancePaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StaffAdvancePaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.PayRoll {
    class StaffAdvanceReceiptsDialog extends Serenity.EntityDialog<StaffAdvanceReceiptsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StaffAdvanceReceiptsForm;
    }
}
declare namespace AprajitaRetails.PayRoll {
    class StaffAdvanceReceiptsGrid extends Serenity.EntityGrid<StaffAdvanceReceiptsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StaffAdvanceReceiptsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Process {
    class EndOfDaysDialog extends Serenity.EntityDialog<EndOfDaysRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EndOfDaysForm;
    }
}
declare namespace AprajitaRetails.Process {
    class EndOfDaysGrid extends Serenity.EntityGrid<EndOfDaysRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EndOfDaysDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Process {
    class MonthEndsDialog extends Serenity.EntityDialog<MonthEndsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MonthEndsForm;
    }
}
declare namespace AprajitaRetails.Process {
    class MonthEndsGrid extends Serenity.EntityGrid<MonthEndsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MonthEndsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Product {
    class BrandsDialog extends Serenity.EntityDialog<BrandsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BrandsForm;
    }
}
declare namespace AprajitaRetails.Product {
    class BrandsGrid extends Serenity.EntityGrid<BrandsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BrandsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Product {
    class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoriesForm;
    }
}
declare namespace AprajitaRetails.Product {
    class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Product {
    class ProductItemsDialog extends Serenity.EntityDialog<ProductItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductItemsForm;
    }
}
declare namespace AprajitaRetails.Product {
    class ProductItemsGrid extends Serenity.EntityGrid<ProductItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Product {
    class StocksDialog extends Serenity.EntityDialog<StocksRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StocksForm;
    }
}
declare namespace AprajitaRetails.Product {
    class StocksGrid extends Serenity.EntityGrid<StocksRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StocksDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Product {
    class SuppliersDialog extends Serenity.EntityDialog<SuppliersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SuppliersForm;
    }
}
declare namespace AprajitaRetails.Product {
    class SuppliersGrid extends Serenity.EntityGrid<SuppliersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SuppliersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Purchases {
    class ProductPurchasesDialog extends Serenity.EntityDialog<ProductPurchasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ProductPurchasesForm;
    }
}
declare namespace AprajitaRetails.Purchases {
    class ProductPurchasesGrid extends Serenity.EntityGrid<ProductPurchasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductPurchasesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Purchases {
    class PurchaseItemsDialog extends Serenity.EntityDialog<PurchaseItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PurchaseItemsForm;
    }
}
declare namespace AprajitaRetails.Purchases {
    class PurchaseItemsGrid extends Serenity.EntityGrid<PurchaseItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PurchaseItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Receipts {
    class CashReceiptsDialog extends Serenity.EntityDialog<CashReceiptsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CashReceiptsForm;
    }
}
declare namespace AprajitaRetails.Receipts {
    class CashReceiptsGrid extends Serenity.EntityGrid<CashReceiptsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CashReceiptsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Receipts {
    class ReceiptsDialog extends Serenity.EntityDialog<ReceiptsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ReceiptsForm;
    }
}
declare namespace AprajitaRetails.Receipts {
    class ReceiptsGrid extends Serenity.EntityGrid<ReceiptsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ReceiptsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Sales {
    class CustomersDialog extends Serenity.EntityDialog<CustomersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomersForm;
    }
}
declare namespace AprajitaRetails.Sales {
    class CustomersGrid extends Serenity.EntityGrid<CustomersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Sales {
    class DailySalesDialog extends Serenity.EntityDialog<DailySalesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DailySalesForm;
    }
}
declare namespace AprajitaRetails.Sales {
    class DailySalesGrid extends Serenity.EntityGrid<DailySalesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DailySalesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Sales {
    class SaleInvoicesDialog extends Serenity.EntityDialog<SaleInvoicesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SaleInvoicesForm;
    }
}
declare namespace AprajitaRetails.Sales {
    class SaleInvoicesGrid extends Serenity.EntityGrid<SaleInvoicesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleInvoicesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Sales {
    class SaleItemsDialog extends Serenity.EntityDialog<SaleItemsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SaleItemsForm;
    }
}
declare namespace AprajitaRetails.Sales {
    class SaleItemsGrid extends Serenity.EntityGrid<SaleItemsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SaleItemsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Sales {
    class SalePaymentDetailsDialog extends Serenity.EntityDialog<SalePaymentDetailsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalePaymentDetailsForm;
    }
}
declare namespace AprajitaRetails.Sales {
    class SalePaymentDetailsGrid extends Serenity.EntityGrid<SalePaymentDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalePaymentDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Sales {
    class SalesmenDialog extends Serenity.EntityDialog<SalesmenRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: SalesmenForm;
    }
}
declare namespace AprajitaRetails.Sales {
    class SalesmenGrid extends Serenity.EntityGrid<SalesmenRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SalesmenDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Stores {
    class StoresDialog extends Serenity.EntityDialog<StoresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: StoresForm;
    }
}
declare namespace AprajitaRetails.Stores {
    class StoresGrid extends Serenity.EntityGrid<StoresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StoresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailorAttendancesDialog extends Serenity.EntityDialog<TailorAttendancesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TailorAttendancesForm;
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailorAttendancesGrid extends Serenity.EntityGrid<TailorAttendancesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TailorAttendancesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringEmployeesDialog extends Serenity.EntityDialog<TailoringEmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TailoringEmployeesForm;
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringEmployeesGrid extends Serenity.EntityGrid<TailoringEmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TailoringEmployeesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringSalaryPaymentsDialog extends Serenity.EntityDialog<TailoringSalaryPaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TailoringSalaryPaymentsForm;
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringSalaryPaymentsGrid extends Serenity.EntityGrid<TailoringSalaryPaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TailoringSalaryPaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringStaffAdvancePaymentsDialog extends Serenity.EntityDialog<TailoringStaffAdvancePaymentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TailoringStaffAdvancePaymentsForm;
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringStaffAdvancePaymentsGrid extends Serenity.EntityGrid<TailoringStaffAdvancePaymentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TailoringStaffAdvancePaymentsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringStaffAdvanceReceiptsDialog extends Serenity.EntityDialog<TailoringStaffAdvanceReceiptsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: TailoringStaffAdvanceReceiptsForm;
    }
}
declare namespace AprajitaRetails.Tailors {
    class TailoringStaffAdvanceReceiptsGrid extends Serenity.EntityGrid<TailoringStaffAdvanceReceiptsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TailoringStaffAdvanceReceiptsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tally {
    class LedgerEntriesDialog extends Serenity.EntityDialog<LedgerEntriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LedgerEntriesForm;
    }
}
declare namespace AprajitaRetails.Tally {
    class LedgerEntriesGrid extends Serenity.EntityGrid<LedgerEntriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LedgerEntriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tally {
    class LedgerMastersDialog extends Serenity.EntityDialog<LedgerMastersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: LedgerMastersForm;
    }
}
declare namespace AprajitaRetails.Tally {
    class LedgerMastersGrid extends Serenity.EntityGrid<LedgerMastersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LedgerMastersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Tally {
    class PartiesDialog extends Serenity.EntityDialog<PartiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PartiesForm;
    }
}
declare namespace AprajitaRetails.Tally {
    class PartiesGrid extends Serenity.EntityGrid<PartiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PartiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportInWardsDialog extends Serenity.EntityDialog<ImportInWardsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ImportInWardsForm;
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportInWardsGrid extends Serenity.EntityGrid<ImportInWardsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportInWardsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportPurchasesDialog extends Serenity.EntityDialog<ImportPurchasesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ImportPurchasesForm;
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportPurchasesGrid extends Serenity.EntityGrid<ImportPurchasesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportPurchasesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportSaleItemWisesDialog extends Serenity.EntityDialog<ImportSaleItemWisesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ImportSaleItemWisesForm;
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportSaleItemWisesGrid extends Serenity.EntityGrid<ImportSaleItemWisesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportSaleItemWisesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportSaleRegistersDialog extends Serenity.EntityDialog<ImportSaleRegistersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ImportSaleRegistersForm;
    }
}
declare namespace AprajitaRetails.Voyager {
    class ImportSaleRegistersGrid extends Serenity.EntityGrid<ImportSaleRegistersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ImportSaleRegistersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace AprajitaRetails.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace AprajitaRetails.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
