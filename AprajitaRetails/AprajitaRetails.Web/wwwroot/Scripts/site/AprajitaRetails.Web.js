var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInBanksForm = /** @class */ (function (_super) {
            __extends(CashInBanksForm, _super);
            function CashInBanksForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashInBanksForm.init) {
                    CashInBanksForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(CashInBanksForm, [
                        'CibDate', w0,
                        'OpenningBalance', w1,
                        'ClosingBalance', w1,
                        'CashIn', w1,
                        'CashOut', w1
                    ]);
                }
                return _this;
            }
            CashInBanksForm.formKey = 'Accounts.CashInBanks';
            return CashInBanksForm;
        }(Serenity.PrefixedContext));
        Accounts.CashInBanksForm = CashInBanksForm;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInBanksRow;
        (function (CashInBanksRow) {
            CashInBanksRow.idProperty = 'CashInBankId';
            CashInBanksRow.localTextPrefix = 'Accounts.CashInBanks';
            CashInBanksRow.deletePermission = 'Administration:General';
            CashInBanksRow.insertPermission = 'Administration:General';
            CashInBanksRow.readPermission = 'Administration:General';
            CashInBanksRow.updatePermission = 'Administration:General';
        })(CashInBanksRow = Accounts.CashInBanksRow || (Accounts.CashInBanksRow = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInBanksService;
        (function (CashInBanksService) {
            CashInBanksService.baseUrl = 'Accounts/CashInBanks';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CashInBanksService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashInBanksService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashInBanksService = Accounts.CashInBanksService || (Accounts.CashInBanksService = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInHandsForm = /** @class */ (function (_super) {
            __extends(CashInHandsForm, _super);
            function CashInHandsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashInHandsForm.init) {
                    CashInHandsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(CashInHandsForm, [
                        'CihDate', w0,
                        'OpenningBalance', w1,
                        'ClosingBalance', w1,
                        'CashIn', w1,
                        'CashOut', w1
                    ]);
                }
                return _this;
            }
            CashInHandsForm.formKey = 'Accounts.CashInHands';
            return CashInHandsForm;
        }(Serenity.PrefixedContext));
        Accounts.CashInHandsForm = CashInHandsForm;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInHandsRow;
        (function (CashInHandsRow) {
            CashInHandsRow.idProperty = 'CashInHandId';
            CashInHandsRow.localTextPrefix = 'Accounts.CashInHands';
            CashInHandsRow.deletePermission = 'Administration:General';
            CashInHandsRow.insertPermission = 'Administration:General';
            CashInHandsRow.readPermission = 'Administration:General';
            CashInHandsRow.updatePermission = 'Administration:General';
        })(CashInHandsRow = Accounts.CashInHandsRow || (Accounts.CashInHandsRow = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInHandsService;
        (function (CashInHandsService) {
            CashInHandsService.baseUrl = 'Accounts/CashInHands';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CashInHandsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashInHandsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashInHandsService = Accounts.CashInHandsService || (Accounts.CashInHandsService = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var PurchaseTaxTypesForm = /** @class */ (function (_super) {
            __extends(PurchaseTaxTypesForm, _super);
            function PurchaseTaxTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseTaxTypesForm.init) {
                    PurchaseTaxTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PurchaseTaxTypesForm, [
                        'TaxName', w0,
                        'TaxType', w1,
                        'CompositeRate', w2
                    ]);
                }
                return _this;
            }
            PurchaseTaxTypesForm.formKey = 'Accounts.PurchaseTaxTypes';
            return PurchaseTaxTypesForm;
        }(Serenity.PrefixedContext));
        Accounts.PurchaseTaxTypesForm = PurchaseTaxTypesForm;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var PurchaseTaxTypesRow;
        (function (PurchaseTaxTypesRow) {
            PurchaseTaxTypesRow.idProperty = 'PurchaseTaxTypeId';
            PurchaseTaxTypesRow.nameProperty = 'TaxName';
            PurchaseTaxTypesRow.localTextPrefix = 'Accounts.PurchaseTaxTypes';
            PurchaseTaxTypesRow.deletePermission = 'Administration:General';
            PurchaseTaxTypesRow.insertPermission = 'Administration:General';
            PurchaseTaxTypesRow.readPermission = 'Administration:General';
            PurchaseTaxTypesRow.updatePermission = 'Administration:General';
        })(PurchaseTaxTypesRow = Accounts.PurchaseTaxTypesRow || (Accounts.PurchaseTaxTypesRow = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var PurchaseTaxTypesService;
        (function (PurchaseTaxTypesService) {
            PurchaseTaxTypesService.baseUrl = 'Accounts/PurchaseTaxTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseTaxTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseTaxTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseTaxTypesService = Accounts.PurchaseTaxTypesService || (Accounts.PurchaseTaxTypesService = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SaleTaxTypesForm = /** @class */ (function (_super) {
            __extends(SaleTaxTypesForm, _super);
            function SaleTaxTypesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleTaxTypesForm.init) {
                    SaleTaxTypesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(SaleTaxTypesForm, [
                        'TaxName', w0,
                        'TaxType', w1,
                        'CompositeRate', w2
                    ]);
                }
                return _this;
            }
            SaleTaxTypesForm.formKey = 'Accounts.SaleTaxTypes';
            return SaleTaxTypesForm;
        }(Serenity.PrefixedContext));
        Accounts.SaleTaxTypesForm = SaleTaxTypesForm;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SaleTaxTypesRow;
        (function (SaleTaxTypesRow) {
            SaleTaxTypesRow.idProperty = 'SaleTaxTypeId';
            SaleTaxTypesRow.nameProperty = 'TaxName';
            SaleTaxTypesRow.localTextPrefix = 'Accounts.SaleTaxTypes';
            SaleTaxTypesRow.deletePermission = 'Administration:General';
            SaleTaxTypesRow.insertPermission = 'Administration:General';
            SaleTaxTypesRow.readPermission = 'Administration:General';
            SaleTaxTypesRow.updatePermission = 'Administration:General';
        })(SaleTaxTypesRow = Accounts.SaleTaxTypesRow || (Accounts.SaleTaxTypesRow = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SaleTaxTypesService;
        (function (SaleTaxTypesService) {
            SaleTaxTypesService.baseUrl = 'Accounts/SaleTaxTypes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SaleTaxTypesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleTaxTypesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleTaxTypesService = Accounts.SaleTaxTypesService || (Accounts.SaleTaxTypesService = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SuspenseAccountsForm = /** @class */ (function (_super) {
            __extends(SuspenseAccountsForm, _super);
            function SuspenseAccountsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuspenseAccountsForm.init) {
                    SuspenseAccountsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(SuspenseAccountsForm, [
                        'EntryDate', w0,
                        'ReferanceDetails', w1,
                        'InAmount', w2,
                        'OutAmount', w2,
                        'IsCleared', w3,
                        'ClearedDetails', w1,
                        'ReviewBy', w1
                    ]);
                }
                return _this;
            }
            SuspenseAccountsForm.formKey = 'Accounts.SuspenseAccounts';
            return SuspenseAccountsForm;
        }(Serenity.PrefixedContext));
        Accounts.SuspenseAccountsForm = SuspenseAccountsForm;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SuspenseAccountsRow;
        (function (SuspenseAccountsRow) {
            SuspenseAccountsRow.idProperty = 'SuspenseAccountId';
            SuspenseAccountsRow.nameProperty = 'ReferanceDetails';
            SuspenseAccountsRow.localTextPrefix = 'Accounts.SuspenseAccounts';
            SuspenseAccountsRow.deletePermission = 'Administration:General';
            SuspenseAccountsRow.insertPermission = 'Administration:General';
            SuspenseAccountsRow.readPermission = 'Administration:General';
            SuspenseAccountsRow.updatePermission = 'Administration:General';
        })(SuspenseAccountsRow = Accounts.SuspenseAccountsRow || (Accounts.SuspenseAccountsRow = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SuspenseAccountsService;
        (function (SuspenseAccountsService) {
            SuspenseAccountsService.baseUrl = 'Accounts/SuspenseAccounts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SuspenseAccountsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuspenseAccountsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuspenseAccountsService = Accounts.SuspenseAccountsService || (Accounts.SuspenseAccountsService = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var TranscationModesForm = /** @class */ (function (_super) {
            __extends(TranscationModesForm, _super);
            function TranscationModesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TranscationModesForm.init) {
                    TranscationModesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TranscationModesForm, [
                        'Transcation', w0
                    ]);
                }
                return _this;
            }
            TranscationModesForm.formKey = 'Accounts.TranscationModes';
            return TranscationModesForm;
        }(Serenity.PrefixedContext));
        Accounts.TranscationModesForm = TranscationModesForm;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var TranscationModesRow;
        (function (TranscationModesRow) {
            TranscationModesRow.idProperty = 'TranscationModeId';
            TranscationModesRow.nameProperty = 'Transcation';
            TranscationModesRow.localTextPrefix = 'Accounts.TranscationModes';
            TranscationModesRow.deletePermission = 'Administration:General';
            TranscationModesRow.insertPermission = 'Administration:General';
            TranscationModesRow.readPermission = 'Administration:General';
            TranscationModesRow.updatePermission = 'Administration:General';
        })(TranscationModesRow = Accounts.TranscationModesRow || (Accounts.TranscationModesRow = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var TranscationModesService;
        (function (TranscationModesService) {
            TranscationModesService.baseUrl = 'Accounts/TranscationModes';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TranscationModesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranscationModesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranscationModesService = Accounts.TranscationModesService || (Accounts.TranscationModesService = {}));
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var SergenService;
        (function (SergenService) {
            SergenService.baseUrl = 'Administration/Sergen';
            [
                'ListConnections',
                'ListTables',
                'Generate'
            ].forEach(function (x) {
                SergenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SergenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SergenService = Administration.SergenService || (Administration.SergenService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var AccountNumbersForm = /** @class */ (function (_super) {
            __extends(AccountNumbersForm, _super);
            function AccountNumbersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AccountNumbersForm.init) {
                    AccountNumbersForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(AccountNumbersForm, [
                        'BankId', w0,
                        'Account', w1
                    ]);
                }
                return _this;
            }
            AccountNumbersForm.formKey = 'Banking.AccountNumbers';
            return AccountNumbersForm;
        }(Serenity.PrefixedContext));
        Banking.AccountNumbersForm = AccountNumbersForm;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var AccountNumbersRow;
        (function (AccountNumbersRow) {
            AccountNumbersRow.idProperty = 'AccountNumberId';
            AccountNumbersRow.nameProperty = 'Account';
            AccountNumbersRow.localTextPrefix = 'Banking.AccountNumbers';
            AccountNumbersRow.deletePermission = 'Administration:General';
            AccountNumbersRow.insertPermission = 'Administration:General';
            AccountNumbersRow.readPermission = 'Administration:General';
            AccountNumbersRow.updatePermission = 'Administration:General';
        })(AccountNumbersRow = Banking.AccountNumbersRow || (Banking.AccountNumbersRow = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var AccountNumbersService;
        (function (AccountNumbersService) {
            AccountNumbersService.baseUrl = 'Banking/AccountNumbers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AccountNumbersService[x] = function (r, s, o) {
                    return Q.serviceRequest(AccountNumbersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AccountNumbersService = Banking.AccountNumbersService || (Banking.AccountNumbersService = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankDepositsForm = /** @class */ (function (_super) {
            __extends(BankDepositsForm, _super);
            function BankDepositsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankDepositsForm.init) {
                    BankDepositsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(BankDepositsForm, [
                        'DepoDate', w0,
                        'AccountNumberId', w1,
                        'Amount', w2,
                        'PayMode', w1,
                        'Details', w3,
                        'Remarks', w3
                    ]);
                }
                return _this;
            }
            BankDepositsForm.formKey = 'Banking.BankDeposits';
            return BankDepositsForm;
        }(Serenity.PrefixedContext));
        Banking.BankDepositsForm = BankDepositsForm;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankDepositsRow;
        (function (BankDepositsRow) {
            BankDepositsRow.idProperty = 'BankDepositId';
            BankDepositsRow.nameProperty = 'Details';
            BankDepositsRow.localTextPrefix = 'Banking.BankDeposits';
            BankDepositsRow.deletePermission = 'Administration:General';
            BankDepositsRow.insertPermission = 'Administration:General';
            BankDepositsRow.readPermission = 'Administration:General';
            BankDepositsRow.updatePermission = 'Administration:General';
        })(BankDepositsRow = Banking.BankDepositsRow || (Banking.BankDepositsRow = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankDepositsService;
        (function (BankDepositsService) {
            BankDepositsService.baseUrl = 'Banking/BankDeposits';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BankDepositsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankDepositsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankDepositsService = Banking.BankDepositsService || (Banking.BankDepositsService = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BanksForm = /** @class */ (function (_super) {
            __extends(BanksForm, _super);
            function BanksForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BanksForm.init) {
                    BanksForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BanksForm, [
                        'BankName', w0
                    ]);
                }
                return _this;
            }
            BanksForm.formKey = 'Banking.Banks';
            return BanksForm;
        }(Serenity.PrefixedContext));
        Banking.BanksForm = BanksForm;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BanksRow;
        (function (BanksRow) {
            BanksRow.idProperty = 'BankId';
            BanksRow.nameProperty = 'BankName';
            BanksRow.localTextPrefix = 'Banking.Banks';
            BanksRow.deletePermission = 'Administration:General';
            BanksRow.insertPermission = 'Administration:General';
            BanksRow.readPermission = 'Administration:General';
            BanksRow.updatePermission = 'Administration:General';
        })(BanksRow = Banking.BanksRow || (Banking.BanksRow = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BanksService;
        (function (BanksService) {
            BanksService.baseUrl = 'Banking/Banks';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BanksService[x] = function (r, s, o) {
                    return Q.serviceRequest(BanksService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BanksService = Banking.BanksService || (Banking.BanksService = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankWithdrawalsForm = /** @class */ (function (_super) {
            __extends(BankWithdrawalsForm, _super);
            function BankWithdrawalsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BankWithdrawalsForm.init) {
                    BankWithdrawalsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(BankWithdrawalsForm, [
                        'DepoDate', w0,
                        'AccountNumberId', w1,
                        'Amount', w2,
                        'ChequeNo', w3,
                        'SignedBy', w3,
                        'ApprovedBy', w3,
                        'InNameOf', w3
                    ]);
                }
                return _this;
            }
            BankWithdrawalsForm.formKey = 'Banking.BankWithdrawals';
            return BankWithdrawalsForm;
        }(Serenity.PrefixedContext));
        Banking.BankWithdrawalsForm = BankWithdrawalsForm;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankWithdrawalsRow;
        (function (BankWithdrawalsRow) {
            BankWithdrawalsRow.idProperty = 'BankWithdrawalId';
            BankWithdrawalsRow.nameProperty = 'ChequeNo';
            BankWithdrawalsRow.localTextPrefix = 'Banking.BankWithdrawals';
            BankWithdrawalsRow.deletePermission = 'Administration:General';
            BankWithdrawalsRow.insertPermission = 'Administration:General';
            BankWithdrawalsRow.readPermission = 'Administration:General';
            BankWithdrawalsRow.updatePermission = 'Administration:General';
        })(BankWithdrawalsRow = Banking.BankWithdrawalsRow || (Banking.BankWithdrawalsRow = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankWithdrawalsService;
        (function (BankWithdrawalsService) {
            BankWithdrawalsService.baseUrl = 'Banking/BankWithdrawals';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BankWithdrawalsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BankWithdrawalsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BankWithdrawalsService = Banking.BankWithdrawalsService || (Banking.BankWithdrawalsService = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var ChequesLogsForm = /** @class */ (function (_super) {
            __extends(ChequesLogsForm, _super);
            function ChequesLogsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChequesLogsForm.init) {
                    ChequesLogsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ChequesLogsForm, [
                        'BankName', w0,
                        'AccountNumber', w0,
                        'ChequesDate', w1,
                        'DepositDate', w1,
                        'ClearedDate', w1,
                        'IssuedBy', w0,
                        'IssuedTo', w0,
                        'Amount', w2,
                        'IsPdc', w3,
                        'IsIssuedByAprajitaRetails', w3,
                        'IsDepositedOnAprajitaRetails', w3,
                        'Remarks', w0
                    ]);
                }
                return _this;
            }
            ChequesLogsForm.formKey = 'Banking.ChequesLogs';
            return ChequesLogsForm;
        }(Serenity.PrefixedContext));
        Banking.ChequesLogsForm = ChequesLogsForm;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var ChequesLogsRow;
        (function (ChequesLogsRow) {
            ChequesLogsRow.idProperty = 'ChequesLogId';
            ChequesLogsRow.nameProperty = 'BankName';
            ChequesLogsRow.localTextPrefix = 'Banking.ChequesLogs';
            ChequesLogsRow.deletePermission = 'Administration:General';
            ChequesLogsRow.insertPermission = 'Administration:General';
            ChequesLogsRow.readPermission = 'Administration:General';
            ChequesLogsRow.updatePermission = 'Administration:General';
        })(ChequesLogsRow = Banking.ChequesLogsRow || (Banking.ChequesLogsRow = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var ChequesLogsService;
        (function (ChequesLogsService) {
            ChequesLogsService.baseUrl = 'Banking/ChequesLogs';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ChequesLogsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ChequesLogsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ChequesLogsService = Banking.ChequesLogsService || (Banking.ChequesLogsService = {}));
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringBookingsForm = /** @class */ (function (_super) {
            __extends(TalioringBookingsForm, _super);
            function TalioringBookingsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TalioringBookingsForm.init) {
                    TalioringBookingsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(TalioringBookingsForm, [
                        'BookingDate', w0,
                        'CustName', w1,
                        'DeliveryDate', w0,
                        'TryDate', w0,
                        'BookingSlipNo', w1,
                        'TotalAmount', w2,
                        'TotalQty', w3,
                        'ShirtQty', w3,
                        'ShirtPrice', w2,
                        'PantQty', w3,
                        'PantPrice', w2,
                        'CoatQty', w3,
                        'CoatPrice', w2,
                        'KurtaQty', w3,
                        'KurtaPrice', w2,
                        'BundiQty', w3,
                        'BundiPrice', w2,
                        'Others', w3,
                        'OthersPrice', w2,
                        'IsDelivered', w4
                    ]);
                }
                return _this;
            }
            TalioringBookingsForm.formKey = 'CustomTailoring.TalioringBookings';
            return TalioringBookingsForm;
        }(Serenity.PrefixedContext));
        CustomTailoring.TalioringBookingsForm = TalioringBookingsForm;
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringBookingsRow;
        (function (TalioringBookingsRow) {
            TalioringBookingsRow.idProperty = 'TalioringBookingId';
            TalioringBookingsRow.nameProperty = 'CustName';
            TalioringBookingsRow.localTextPrefix = 'CustomTailoring.TalioringBookings';
            TalioringBookingsRow.deletePermission = 'Administration:General';
            TalioringBookingsRow.insertPermission = 'Administration:General';
            TalioringBookingsRow.readPermission = 'Administration:General';
            TalioringBookingsRow.updatePermission = 'Administration:General';
        })(TalioringBookingsRow = CustomTailoring.TalioringBookingsRow || (CustomTailoring.TalioringBookingsRow = {}));
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringBookingsService;
        (function (TalioringBookingsService) {
            TalioringBookingsService.baseUrl = 'CustomTailoring/TalioringBookings';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TalioringBookingsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TalioringBookingsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TalioringBookingsService = CustomTailoring.TalioringBookingsService || (CustomTailoring.TalioringBookingsService = {}));
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringDeliveriesForm = /** @class */ (function (_super) {
            __extends(TalioringDeliveriesForm, _super);
            function TalioringDeliveriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TalioringDeliveriesForm.init) {
                    TalioringDeliveriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(TalioringDeliveriesForm, [
                        'DeliveryDate', w0,
                        'TalioringBookingId', w1,
                        'InvNo', w2,
                        'Amount', w3,
                        'Remarks', w2
                    ]);
                }
                return _this;
            }
            TalioringDeliveriesForm.formKey = 'CustomTailoring.TalioringDeliveries';
            return TalioringDeliveriesForm;
        }(Serenity.PrefixedContext));
        CustomTailoring.TalioringDeliveriesForm = TalioringDeliveriesForm;
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringDeliveriesRow;
        (function (TalioringDeliveriesRow) {
            TalioringDeliveriesRow.idProperty = 'TalioringDeliveryId';
            TalioringDeliveriesRow.nameProperty = 'InvNo';
            TalioringDeliveriesRow.localTextPrefix = 'CustomTailoring.TalioringDeliveries';
            TalioringDeliveriesRow.deletePermission = 'Administration:General';
            TalioringDeliveriesRow.insertPermission = 'Administration:General';
            TalioringDeliveriesRow.readPermission = 'Administration:General';
            TalioringDeliveriesRow.updatePermission = 'Administration:General';
        })(TalioringDeliveriesRow = CustomTailoring.TalioringDeliveriesRow || (CustomTailoring.TalioringDeliveriesRow = {}));
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringDeliveriesService;
        (function (TalioringDeliveriesService) {
            TalioringDeliveriesService.baseUrl = 'CustomTailoring/TalioringDeliveries';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TalioringDeliveriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TalioringDeliveriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TalioringDeliveriesService = CustomTailoring.TalioringDeliveriesService || (CustomTailoring.TalioringDeliveriesService = {}));
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DueRecoverdsForm = /** @class */ (function (_super) {
            __extends(DueRecoverdsForm, _super);
            function DueRecoverdsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DueRecoverdsForm.init) {
                    DueRecoverdsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.StringEditor;
                    Q.initFormType(DueRecoverdsForm, [
                        'PaidDate', w0,
                        'DuesListId', w1,
                        'AmountPaid', w2,
                        'IsPartialPayment', w3,
                        'Modes', w1,
                        'Remarks', w4
                    ]);
                }
                return _this;
            }
            DueRecoverdsForm.formKey = 'Dues.DueRecoverds';
            return DueRecoverdsForm;
        }(Serenity.PrefixedContext));
        Dues.DueRecoverdsForm = DueRecoverdsForm;
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DueRecoverdsRow;
        (function (DueRecoverdsRow) {
            DueRecoverdsRow.idProperty = 'DueRecoverdId';
            DueRecoverdsRow.nameProperty = 'Remarks';
            DueRecoverdsRow.localTextPrefix = 'Dues.DueRecoverds';
            DueRecoverdsRow.deletePermission = 'Administration:General';
            DueRecoverdsRow.insertPermission = 'Administration:General';
            DueRecoverdsRow.readPermission = 'Administration:General';
            DueRecoverdsRow.updatePermission = 'Administration:General';
        })(DueRecoverdsRow = Dues.DueRecoverdsRow || (Dues.DueRecoverdsRow = {}));
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DueRecoverdsService;
        (function (DueRecoverdsService) {
            DueRecoverdsService.baseUrl = 'Dues/DueRecoverds';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DueRecoverdsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DueRecoverdsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DueRecoverdsService = Dues.DueRecoverdsService || (Dues.DueRecoverdsService = {}));
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DuesListsForm = /** @class */ (function (_super) {
            __extends(DuesListsForm, _super);
            function DuesListsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DuesListsForm.init) {
                    DuesListsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DecimalEditor;
                    var w1 = s.BooleanEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(DuesListsForm, [
                        'Amount', w0,
                        'IsRecovered', w1,
                        'DailySaleId', w2,
                        'RecoveryDate', w3,
                        'IsPartialRecovery', w1
                    ]);
                }
                return _this;
            }
            DuesListsForm.formKey = 'Dues.DuesLists';
            return DuesListsForm;
        }(Serenity.PrefixedContext));
        Dues.DuesListsForm = DuesListsForm;
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DuesListsRow;
        (function (DuesListsRow) {
            DuesListsRow.idProperty = 'DuesListId';
            DuesListsRow.localTextPrefix = 'Dues.DuesLists';
            DuesListsRow.deletePermission = 'Administration:General';
            DuesListsRow.insertPermission = 'Administration:General';
            DuesListsRow.readPermission = 'Administration:General';
            DuesListsRow.updatePermission = 'Administration:General';
        })(DuesListsRow = Dues.DuesListsRow || (Dues.DuesListsRow = {}));
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DuesListsService;
        (function (DuesListsService) {
            DuesListsService.baseUrl = 'Dues/DuesLists';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DuesListsService[x] = function (r, s, o) {
                    return Q.serviceRequest(DuesListsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DuesListsService = Dues.DuesListsService || (Dues.DuesListsService = {}));
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var CashPaymentsForm = /** @class */ (function (_super) {
            __extends(CashPaymentsForm, _super);
            function CashPaymentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashPaymentsForm.init) {
                    CashPaymentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(CashPaymentsForm, [
                        'PaymentDate', w0,
                        'TranscationModeId', w1,
                        'PaidTo', w2,
                        'Amount', w3,
                        'SlipNo', w2
                    ]);
                }
                return _this;
            }
            CashPaymentsForm.formKey = 'Expenses.CashPayments';
            return CashPaymentsForm;
        }(Serenity.PrefixedContext));
        Expenses.CashPaymentsForm = CashPaymentsForm;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var CashPaymentsRow;
        (function (CashPaymentsRow) {
            CashPaymentsRow.idProperty = 'CashPaymentId';
            CashPaymentsRow.nameProperty = 'PaidTo';
            CashPaymentsRow.localTextPrefix = 'Expenses.CashPayments';
            CashPaymentsRow.deletePermission = 'Administration:General';
            CashPaymentsRow.insertPermission = 'Administration:General';
            CashPaymentsRow.readPermission = 'Administration:General';
            CashPaymentsRow.updatePermission = 'Administration:General';
        })(CashPaymentsRow = Expenses.CashPaymentsRow || (Expenses.CashPaymentsRow = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var CashPaymentsService;
        (function (CashPaymentsService) {
            CashPaymentsService.baseUrl = 'Expenses/CashPayments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CashPaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashPaymentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashPaymentsService = Expenses.CashPaymentsService || (Expenses.CashPaymentsService = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var ExpensesForm = /** @class */ (function (_super) {
            __extends(ExpensesForm, _super);
            function ExpensesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ExpensesForm.init) {
                    ExpensesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(ExpensesForm, [
                        'ExpDate', w0,
                        'Particulars', w1,
                        'Amount', w2,
                        'PayMode', w3,
                        'PaymentDetails', w1,
                        'EmployeeId', w3,
                        'PaidTo', w1,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            ExpensesForm.formKey = 'Expenses.Expenses';
            return ExpensesForm;
        }(Serenity.PrefixedContext));
        Expenses.ExpensesForm = ExpensesForm;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var ExpensesRow;
        (function (ExpensesRow) {
            ExpensesRow.idProperty = 'ExpenseId';
            ExpensesRow.nameProperty = 'Particulars';
            ExpensesRow.localTextPrefix = 'Expenses.Expenses';
            ExpensesRow.deletePermission = 'Administration:General';
            ExpensesRow.insertPermission = 'Administration:General';
            ExpensesRow.readPermission = 'Administration:General';
            ExpensesRow.updatePermission = 'Administration:General';
        })(ExpensesRow = Expenses.ExpensesRow || (Expenses.ExpensesRow = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var ExpensesService;
        (function (ExpensesService) {
            ExpensesService.baseUrl = 'Expenses/Expenses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ExpensesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ExpensesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ExpensesService = Expenses.ExpensesService || (Expenses.ExpensesService = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PaymentsForm = /** @class */ (function (_super) {
            __extends(PaymentsForm, _super);
            function PaymentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PaymentsForm.init) {
                    PaymentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(PaymentsForm, [
                        'PayDate', w0,
                        'PaymentPartry', w1,
                        'PayMode', w2,
                        'PaymentDetails', w1,
                        'Amount', w3,
                        'PaymentSlipNo', w1,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            PaymentsForm.formKey = 'Expenses.Payments';
            return PaymentsForm;
        }(Serenity.PrefixedContext));
        Expenses.PaymentsForm = PaymentsForm;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PaymentsRow;
        (function (PaymentsRow) {
            PaymentsRow.idProperty = 'PaymentId';
            PaymentsRow.nameProperty = 'PaymentPartry';
            PaymentsRow.localTextPrefix = 'Expenses.Payments';
            PaymentsRow.deletePermission = 'Administration:General';
            PaymentsRow.insertPermission = 'Administration:General';
            PaymentsRow.readPermission = 'Administration:General';
            PaymentsRow.updatePermission = 'Administration:General';
        })(PaymentsRow = Expenses.PaymentsRow || (Expenses.PaymentsRow = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PaymentsService;
        (function (PaymentsService) {
            PaymentsService.baseUrl = 'Expenses/Payments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaymentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PaymentsService = Expenses.PaymentsService || (Expenses.PaymentsService = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PettyCashExpensesForm = /** @class */ (function (_super) {
            __extends(PettyCashExpensesForm, _super);
            function PettyCashExpensesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PettyCashExpensesForm.init) {
                    PettyCashExpensesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(PettyCashExpensesForm, [
                        'ExpDate', w0,
                        'Particulars', w1,
                        'Amount', w2,
                        'EmployeeId', w3,
                        'PaidTo', w1,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            PettyCashExpensesForm.formKey = 'Expenses.PettyCashExpenses';
            return PettyCashExpensesForm;
        }(Serenity.PrefixedContext));
        Expenses.PettyCashExpensesForm = PettyCashExpensesForm;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PettyCashExpensesRow;
        (function (PettyCashExpensesRow) {
            PettyCashExpensesRow.idProperty = 'PettyCashExpenseId';
            PettyCashExpensesRow.nameProperty = 'Particulars';
            PettyCashExpensesRow.localTextPrefix = 'Expenses.PettyCashExpenses';
            PettyCashExpensesRow.deletePermission = 'Administration:General';
            PettyCashExpensesRow.insertPermission = 'Administration:General';
            PettyCashExpensesRow.readPermission = 'Administration:General';
            PettyCashExpensesRow.updatePermission = 'Administration:General';
        })(PettyCashExpensesRow = Expenses.PettyCashExpensesRow || (Expenses.PettyCashExpensesRow = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PettyCashExpensesService;
        (function (PettyCashExpensesService) {
            PettyCashExpensesService.baseUrl = 'Expenses/PettyCashExpenses';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PettyCashExpensesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PettyCashExpensesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PettyCashExpensesService = Expenses.PettyCashExpensesService || (Expenses.PettyCashExpensesService = {}));
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var AttendancesForm = /** @class */ (function (_super) {
            __extends(AttendancesForm, _super);
            function AttendancesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AttendancesForm.init) {
                    AttendancesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(AttendancesForm, [
                        'EmployeeId', w0,
                        'AttDate', w1,
                        'EntryTime', w2,
                        'Status', w0,
                        'Remarks', w2
                    ]);
                }
                return _this;
            }
            AttendancesForm.formKey = 'PayRoll.Attendances';
            return AttendancesForm;
        }(Serenity.PrefixedContext));
        PayRoll.AttendancesForm = AttendancesForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var AttendancesRow;
        (function (AttendancesRow) {
            AttendancesRow.idProperty = 'AttendanceId';
            AttendancesRow.nameProperty = 'EntryTime';
            AttendancesRow.localTextPrefix = 'PayRoll.Attendances';
            AttendancesRow.deletePermission = 'Administration:General';
            AttendancesRow.insertPermission = 'Administration:General';
            AttendancesRow.readPermission = 'Administration:General';
            AttendancesRow.updatePermission = 'Administration:General';
        })(AttendancesRow = PayRoll.AttendancesRow || (PayRoll.AttendancesRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var AttendancesService;
        (function (AttendancesService) {
            AttendancesService.baseUrl = 'PayRoll/Attendances';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AttendancesService[x] = function (r, s, o) {
                    return Q.serviceRequest(AttendancesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AttendancesService = PayRoll.AttendancesService || (PayRoll.AttendancesService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var CurrentSalariesForm = /** @class */ (function (_super) {
            __extends(CurrentSalariesForm, _super);
            function CurrentSalariesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CurrentSalariesForm.init) {
                    CurrentSalariesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(CurrentSalariesForm, [
                        'EmployeeId', w0,
                        'BasicSalary', w1,
                        'SundaySalary', w1,
                        'LpRate', w1,
                        'IncentiveRate', w1,
                        'IncentiveTarget', w1,
                        'WowBillRate', w1,
                        'WowBillTarget', w1,
                        'IsSundayBillable', w2,
                        'EffectiveDate', w3,
                        'CloseDate', w3,
                        'IsEffective', w2
                    ]);
                }
                return _this;
            }
            CurrentSalariesForm.formKey = 'PayRoll.CurrentSalaries';
            return CurrentSalariesForm;
        }(Serenity.PrefixedContext));
        PayRoll.CurrentSalariesForm = CurrentSalariesForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var CurrentSalariesRow;
        (function (CurrentSalariesRow) {
            CurrentSalariesRow.idProperty = 'CurrentSalaryId';
            CurrentSalariesRow.localTextPrefix = 'PayRoll.CurrentSalaries';
            CurrentSalariesRow.deletePermission = 'Administration:General';
            CurrentSalariesRow.insertPermission = 'Administration:General';
            CurrentSalariesRow.readPermission = 'Administration:General';
            CurrentSalariesRow.updatePermission = 'Administration:General';
        })(CurrentSalariesRow = PayRoll.CurrentSalariesRow || (PayRoll.CurrentSalariesRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var CurrentSalariesService;
        (function (CurrentSalariesService) {
            CurrentSalariesService.baseUrl = 'PayRoll/CurrentSalaries';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CurrentSalariesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CurrentSalariesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CurrentSalariesService = PayRoll.CurrentSalariesService || (PayRoll.CurrentSalariesService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(EmployeesForm, [
                        'StaffName', w0,
                        'MobileNo', w0,
                        'JoiningDate', w1,
                        'LeavingDate', w1,
                        'IsWorking', w2
                    ]);
                }
                return _this;
            }
            EmployeesForm.formKey = 'PayRoll.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        PayRoll.EmployeesForm = EmployeesForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.nameProperty = 'StaffName';
            EmployeesRow.localTextPrefix = 'PayRoll.Employees';
            EmployeesRow.deletePermission = 'Administration:General';
            EmployeesRow.insertPermission = 'Administration:General';
            EmployeesRow.readPermission = 'Administration:General';
            EmployeesRow.updatePermission = 'Administration:General';
        })(EmployeesRow = PayRoll.EmployeesRow || (PayRoll.EmployeesRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'PayRoll/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = PayRoll.EmployeesService || (PayRoll.EmployeesService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var PaySlipsForm = /** @class */ (function (_super) {
            __extends(PaySlipsForm, _super);
            function PaySlipsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PaySlipsForm.init) {
                    PaySlipsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(PaySlipsForm, [
                        'OnDate', w0,
                        'Month', w1,
                        'Year', w1,
                        'EmployeeId', w1,
                        'CurrentSalaryId', w1,
                        'BasicSalary', w2,
                        'NoOfDaysPresent', w1,
                        'TotalSale', w2,
                        'SaleIncentive', w2,
                        'WowBillAmount', w2,
                        'WowBillIncentive', w2,
                        'LastPcsAmount', w2,
                        'LastPCsIncentive', w2,
                        'OthersIncentive', w2,
                        'GrossSalary', w2,
                        'StandardDeductions', w2,
                        'TdsDeductions', w2,
                        'PfDeductions', w2,
                        'AdvanceDeducations', w2,
                        'OtherDeductions', w2,
                        'Remarks', w3
                    ]);
                }
                return _this;
            }
            PaySlipsForm.formKey = 'PayRoll.PaySlips';
            return PaySlipsForm;
        }(Serenity.PrefixedContext));
        PayRoll.PaySlipsForm = PaySlipsForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var PaySlipsRow;
        (function (PaySlipsRow) {
            PaySlipsRow.idProperty = 'PaySlipId';
            PaySlipsRow.nameProperty = 'Remarks';
            PaySlipsRow.localTextPrefix = 'PayRoll.PaySlips';
            PaySlipsRow.deletePermission = 'Administration:General';
            PaySlipsRow.insertPermission = 'Administration:General';
            PaySlipsRow.readPermission = 'Administration:General';
            PaySlipsRow.updatePermission = 'Administration:General';
        })(PaySlipsRow = PayRoll.PaySlipsRow || (PayRoll.PaySlipsRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var PaySlipsService;
        (function (PaySlipsService) {
            PaySlipsService.baseUrl = 'PayRoll/PaySlips';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PaySlipsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PaySlipsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PaySlipsService = PayRoll.PaySlipsService || (PayRoll.PaySlipsService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalaryPaymentsForm = /** @class */ (function (_super) {
            __extends(SalaryPaymentsForm, _super);
            function SalaryPaymentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalaryPaymentsForm.init) {
                    SalaryPaymentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SalaryPaymentsForm, [
                        'EmployeeId', w0,
                        'SalaryMonth', w1,
                        'SalaryComponet', w0,
                        'PaymentDate', w2,
                        'Amount', w3,
                        'PayMode', w0,
                        'Details', w1
                    ]);
                }
                return _this;
            }
            SalaryPaymentsForm.formKey = 'PayRoll.SalaryPayments';
            return SalaryPaymentsForm;
        }(Serenity.PrefixedContext));
        PayRoll.SalaryPaymentsForm = SalaryPaymentsForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalaryPaymentsRow;
        (function (SalaryPaymentsRow) {
            SalaryPaymentsRow.idProperty = 'SalaryPaymentId';
            SalaryPaymentsRow.nameProperty = 'SalaryMonth';
            SalaryPaymentsRow.localTextPrefix = 'PayRoll.SalaryPayments';
            SalaryPaymentsRow.deletePermission = 'Administration:General';
            SalaryPaymentsRow.insertPermission = 'Administration:General';
            SalaryPaymentsRow.readPermission = 'Administration:General';
            SalaryPaymentsRow.updatePermission = 'Administration:General';
        })(SalaryPaymentsRow = PayRoll.SalaryPaymentsRow || (PayRoll.SalaryPaymentsRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalaryPaymentsService;
        (function (SalaryPaymentsService) {
            SalaryPaymentsService.baseUrl = 'PayRoll/SalaryPayments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalaryPaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalaryPaymentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalaryPaymentsService = PayRoll.SalaryPaymentsService || (PayRoll.SalaryPaymentsService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalesmenForm = /** @class */ (function (_super) {
            __extends(SalesmenForm, _super);
            function SalesmenForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesmenForm.init) {
                    SalesmenForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SalesmenForm, [
                        'SalesmanName', w0
                    ]);
                }
                return _this;
            }
            SalesmenForm.formKey = 'PayRoll.Salesmen';
            return SalesmenForm;
        }(Serenity.PrefixedContext));
        PayRoll.SalesmenForm = SalesmenForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalesmenRow;
        (function (SalesmenRow) {
            SalesmenRow.idProperty = 'SalesmanId';
            SalesmenRow.nameProperty = 'SalesmanName';
            SalesmenRow.localTextPrefix = 'PayRoll.Salesmen';
            SalesmenRow.deletePermission = 'Administration:General';
            SalesmenRow.insertPermission = 'Administration:General';
            SalesmenRow.readPermission = 'Administration:General';
            SalesmenRow.updatePermission = 'Administration:General';
        })(SalesmenRow = PayRoll.SalesmenRow || (PayRoll.SalesmenRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalesmenService;
        (function (SalesmenService) {
            SalesmenService.baseUrl = 'PayRoll/Salesmen';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesmenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesmenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesmenService = PayRoll.SalesmenService || (PayRoll.SalesmenService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvancePaymentsForm = /** @class */ (function (_super) {
            __extends(StaffAdvancePaymentsForm, _super);
            function StaffAdvancePaymentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaffAdvancePaymentsForm.init) {
                    StaffAdvancePaymentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(StaffAdvancePaymentsForm, [
                        'EmployeeId', w0,
                        'PaymentDate', w1,
                        'Amount', w2,
                        'PayMode', w0,
                        'Details', w3
                    ]);
                }
                return _this;
            }
            StaffAdvancePaymentsForm.formKey = 'PayRoll.StaffAdvancePayments';
            return StaffAdvancePaymentsForm;
        }(Serenity.PrefixedContext));
        PayRoll.StaffAdvancePaymentsForm = StaffAdvancePaymentsForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvancePaymentsRow;
        (function (StaffAdvancePaymentsRow) {
            StaffAdvancePaymentsRow.idProperty = 'StaffAdvancePaymentId';
            StaffAdvancePaymentsRow.nameProperty = 'Details';
            StaffAdvancePaymentsRow.localTextPrefix = 'PayRoll.StaffAdvancePayments';
            StaffAdvancePaymentsRow.deletePermission = 'Administration:General';
            StaffAdvancePaymentsRow.insertPermission = 'Administration:General';
            StaffAdvancePaymentsRow.readPermission = 'Administration:General';
            StaffAdvancePaymentsRow.updatePermission = 'Administration:General';
        })(StaffAdvancePaymentsRow = PayRoll.StaffAdvancePaymentsRow || (PayRoll.StaffAdvancePaymentsRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvancePaymentsService;
        (function (StaffAdvancePaymentsService) {
            StaffAdvancePaymentsService.baseUrl = 'PayRoll/StaffAdvancePayments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StaffAdvancePaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(StaffAdvancePaymentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StaffAdvancePaymentsService = PayRoll.StaffAdvancePaymentsService || (PayRoll.StaffAdvancePaymentsService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvanceReceiptsForm = /** @class */ (function (_super) {
            __extends(StaffAdvanceReceiptsForm, _super);
            function StaffAdvanceReceiptsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StaffAdvanceReceiptsForm.init) {
                    StaffAdvanceReceiptsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(StaffAdvanceReceiptsForm, [
                        'EmployeeId', w0,
                        'ReceiptDate', w1,
                        'Amount', w2,
                        'PayMode', w0,
                        'Details', w3
                    ]);
                }
                return _this;
            }
            StaffAdvanceReceiptsForm.formKey = 'PayRoll.StaffAdvanceReceipts';
            return StaffAdvanceReceiptsForm;
        }(Serenity.PrefixedContext));
        PayRoll.StaffAdvanceReceiptsForm = StaffAdvanceReceiptsForm;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvanceReceiptsRow;
        (function (StaffAdvanceReceiptsRow) {
            StaffAdvanceReceiptsRow.idProperty = 'StaffAdvanceReceiptId';
            StaffAdvanceReceiptsRow.nameProperty = 'Details';
            StaffAdvanceReceiptsRow.localTextPrefix = 'PayRoll.StaffAdvanceReceipts';
            StaffAdvanceReceiptsRow.deletePermission = 'Administration:General';
            StaffAdvanceReceiptsRow.insertPermission = 'Administration:General';
            StaffAdvanceReceiptsRow.readPermission = 'Administration:General';
            StaffAdvanceReceiptsRow.updatePermission = 'Administration:General';
        })(StaffAdvanceReceiptsRow = PayRoll.StaffAdvanceReceiptsRow || (PayRoll.StaffAdvanceReceiptsRow = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvanceReceiptsService;
        (function (StaffAdvanceReceiptsService) {
            StaffAdvanceReceiptsService.baseUrl = 'PayRoll/StaffAdvanceReceipts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StaffAdvanceReceiptsService[x] = function (r, s, o) {
                    return Q.serviceRequest(StaffAdvanceReceiptsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StaffAdvanceReceiptsService = PayRoll.StaffAdvanceReceiptsService || (PayRoll.StaffAdvanceReceiptsService = {}));
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var EndOfDaysForm = /** @class */ (function (_super) {
            __extends(EndOfDaysForm, _super);
            function EndOfDaysForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EndOfDaysForm.init) {
                    EndOfDaysForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(EndOfDaysForm, [
                        'EodDate', w0,
                        'Shirting', w1,
                        'Suiting', w1,
                        'Uspa', w2,
                        'FmArrow', w2,
                        'Rwt', w2,
                        'Access', w2,
                        'CashInHand', w1
                    ]);
                }
                return _this;
            }
            EndOfDaysForm.formKey = 'Process.EndOfDays';
            return EndOfDaysForm;
        }(Serenity.PrefixedContext));
        Process.EndOfDaysForm = EndOfDaysForm;
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var EndOfDaysRow;
        (function (EndOfDaysRow) {
            EndOfDaysRow.idProperty = 'EndOfDayId';
            EndOfDaysRow.localTextPrefix = 'Process.EndOfDays';
            EndOfDaysRow.deletePermission = 'Administration:General';
            EndOfDaysRow.insertPermission = 'Administration:General';
            EndOfDaysRow.readPermission = 'Administration:General';
            EndOfDaysRow.updatePermission = 'Administration:General';
        })(EndOfDaysRow = Process.EndOfDaysRow || (Process.EndOfDaysRow = {}));
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var EndOfDaysService;
        (function (EndOfDaysService) {
            EndOfDaysService.baseUrl = 'Process/EndOfDays';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EndOfDaysService[x] = function (r, s, o) {
                    return Q.serviceRequest(EndOfDaysService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EndOfDaysService = Process.EndOfDaysService || (Process.EndOfDaysService = {}));
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var MonthEndsForm = /** @class */ (function (_super) {
            __extends(MonthEndsForm, _super);
            function MonthEndsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MonthEndsForm.init) {
                    MonthEndsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(MonthEndsForm, [
                        'EntryDate', w0,
                        'Month', w1,
                        'Year', w1,
                        'TotalBill', w2,
                        'TotalFabric', w2,
                        'TotalRmz', w2,
                        'TotalAccess', w2,
                        'TotalOthers', w2,
                        'TotalAmountFabric', w2,
                        'TotalAmountRmz', w2,
                        'TotalAmountAccess', w2,
                        'TotalAmountOthers', w2,
                        'TotalSaleIncome', w2,
                        'TotalTailoringIncome', w2,
                        'TotalOtherIncome', w2,
                        'TotalInward', w2,
                        'TotalInwardByAmitKumar', w2,
                        'TotalInwardOthers', w2,
                        'TotalDues', w2,
                        'TotalDuesOfMonth', w2,
                        'TotalDuesRecovered', w2,
                        'TotalExpenses', w2,
                        'TotalOnBookExpenes', w2,
                        'TotalCashExpenses', w2,
                        'TotalSalary', w2,
                        'TotalTailoringExpenses', w2,
                        'TotalTrimsAndOtherExpenses', w2,
                        'TotalHomeExpenses', w2,
                        'TotalOtherHomeExpenses', w2,
                        'TotalOtherExpenses', w2,
                        'TotalPayments', w2,
                        'TotalRecipts', w2
                    ]);
                }
                return _this;
            }
            MonthEndsForm.formKey = 'Process.MonthEnds';
            return MonthEndsForm;
        }(Serenity.PrefixedContext));
        Process.MonthEndsForm = MonthEndsForm;
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var MonthEndsRow;
        (function (MonthEndsRow) {
            MonthEndsRow.idProperty = 'MonthEndId';
            MonthEndsRow.localTextPrefix = 'Process.MonthEnds';
            MonthEndsRow.deletePermission = 'Administration:General';
            MonthEndsRow.insertPermission = 'Administration:General';
            MonthEndsRow.readPermission = 'Administration:General';
            MonthEndsRow.updatePermission = 'Administration:General';
        })(MonthEndsRow = Process.MonthEndsRow || (Process.MonthEndsRow = {}));
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var MonthEndsService;
        (function (MonthEndsService) {
            MonthEndsService.baseUrl = 'Process/MonthEnds';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MonthEndsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MonthEndsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MonthEndsService = Process.MonthEndsService || (Process.MonthEndsService = {}));
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var BrandsForm = /** @class */ (function (_super) {
            __extends(BrandsForm, _super);
            function BrandsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!BrandsForm.init) {
                    BrandsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(BrandsForm, [
                        'BrandName', w0,
                        'BCode', w0
                    ]);
                }
                return _this;
            }
            BrandsForm.formKey = 'Product.Brands';
            return BrandsForm;
        }(Serenity.PrefixedContext));
        Product.BrandsForm = BrandsForm;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var BrandsRow;
        (function (BrandsRow) {
            BrandsRow.idProperty = 'BrandId';
            BrandsRow.nameProperty = 'BrandName';
            BrandsRow.localTextPrefix = 'Product.Brands';
            BrandsRow.deletePermission = 'Administration:General';
            BrandsRow.insertPermission = 'Administration:General';
            BrandsRow.readPermission = 'Administration:General';
            BrandsRow.updatePermission = 'Administration:General';
        })(BrandsRow = Product.BrandsRow || (Product.BrandsRow = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var BrandsService;
        (function (BrandsService) {
            BrandsService.baseUrl = 'Product/Brands';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                BrandsService[x] = function (r, s, o) {
                    return Q.serviceRequest(BrandsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(BrandsService = Product.BrandsService || (Product.BrandsService = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.BooleanEditor;
                    Q.initFormType(CategoriesForm, [
                        'CategoryName', w0,
                        'IsPrimaryCategory', w1,
                        'IsSecondaryCategory', w1
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'Product.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        Product.CategoriesForm = CategoriesForm;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'CategoryId';
            CategoriesRow.nameProperty = 'CategoryName';
            CategoriesRow.localTextPrefix = 'Product.Categories';
            CategoriesRow.deletePermission = 'Administration:General';
            CategoriesRow.insertPermission = 'Administration:General';
            CategoriesRow.readPermission = 'Administration:General';
            CategoriesRow.updatePermission = 'Administration:General';
        })(CategoriesRow = Product.CategoriesRow || (Product.CategoriesRow = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'Product/Categories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = Product.CategoriesService || (Product.CategoriesService = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var ProductItemsForm = /** @class */ (function (_super) {
            __extends(ProductItemsForm, _super);
            function ProductItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductItemsForm.init) {
                    ProductItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ProductItemsForm, [
                        'Barcode', w0,
                        'BrandId', w1,
                        'StyleCode', w0,
                        'ProductName', w0,
                        'ItemDesc', w0,
                        'Categorys', w1,
                        'Mrp', w2,
                        'TaxRate', w2,
                        'Cost', w2,
                        'Size', w1,
                        'Units', w1,
                        'MainCategoryCategoryId', w1,
                        'ProductCategoryCategoryId', w1,
                        'ProductTypeCategoryId', w1
                    ]);
                }
                return _this;
            }
            ProductItemsForm.formKey = 'Product.ProductItems';
            return ProductItemsForm;
        }(Serenity.PrefixedContext));
        Product.ProductItemsForm = ProductItemsForm;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var ProductItemsRow;
        (function (ProductItemsRow) {
            ProductItemsRow.idProperty = 'ProductItemId';
            ProductItemsRow.nameProperty = 'Barcode';
            ProductItemsRow.localTextPrefix = 'Product.ProductItems';
            ProductItemsRow.deletePermission = 'Administration:General';
            ProductItemsRow.insertPermission = 'Administration:General';
            ProductItemsRow.readPermission = 'Administration:General';
            ProductItemsRow.updatePermission = 'Administration:General';
        })(ProductItemsRow = Product.ProductItemsRow || (Product.ProductItemsRow = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var ProductItemsService;
        (function (ProductItemsService) {
            ProductItemsService.baseUrl = 'Product/ProductItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductItemsService = Product.ProductItemsService || (Product.ProductItemsService = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var StocksForm = /** @class */ (function (_super) {
            __extends(StocksForm, _super);
            function StocksForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StocksForm.init) {
                    StocksForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(StocksForm, [
                        'ProductItemId', w0,
                        'Quantity', w1,
                        'SaleQty', w1,
                        'PurchaseQty', w1,
                        'Units', w0
                    ]);
                }
                return _this;
            }
            StocksForm.formKey = 'Product.Stocks';
            return StocksForm;
        }(Serenity.PrefixedContext));
        Product.StocksForm = StocksForm;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var StocksRow;
        (function (StocksRow) {
            StocksRow.idProperty = 'StockId';
            StocksRow.localTextPrefix = 'Product.Stocks';
            StocksRow.deletePermission = 'Administration:General';
            StocksRow.insertPermission = 'Administration:General';
            StocksRow.readPermission = 'Administration:General';
            StocksRow.updatePermission = 'Administration:General';
        })(StocksRow = Product.StocksRow || (Product.StocksRow = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var StocksService;
        (function (StocksService) {
            StocksService.baseUrl = 'Product/Stocks';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StocksService[x] = function (r, s, o) {
                    return Q.serviceRequest(StocksService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StocksService = Product.StocksService || (Product.StocksService = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var SuppliersForm = /** @class */ (function (_super) {
            __extends(SuppliersForm, _super);
            function SuppliersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SuppliersForm.init) {
                    SuppliersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SuppliersForm, [
                        'SuppilerName', w0,
                        'Warehouse', w0
                    ]);
                }
                return _this;
            }
            SuppliersForm.formKey = 'Product.Suppliers';
            return SuppliersForm;
        }(Serenity.PrefixedContext));
        Product.SuppliersForm = SuppliersForm;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var SuppliersRow;
        (function (SuppliersRow) {
            SuppliersRow.idProperty = 'SupplierId';
            SuppliersRow.nameProperty = 'SuppilerName';
            SuppliersRow.localTextPrefix = 'Product.Suppliers';
            SuppliersRow.deletePermission = 'Administration:General';
            SuppliersRow.insertPermission = 'Administration:General';
            SuppliersRow.readPermission = 'Administration:General';
            SuppliersRow.updatePermission = 'Administration:General';
        })(SuppliersRow = Product.SuppliersRow || (Product.SuppliersRow = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var SuppliersService;
        (function (SuppliersService) {
            SuppliersService.baseUrl = 'Product/Suppliers';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SuppliersService[x] = function (r, s, o) {
                    return Q.serviceRequest(SuppliersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SuppliersService = Product.SuppliersService || (Product.SuppliersService = {}));
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var ProductPurchasesForm = /** @class */ (function (_super) {
            __extends(ProductPurchasesForm, _super);
            function ProductPurchasesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductPurchasesForm.init) {
                    ProductPurchasesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(ProductPurchasesForm, [
                        'InWardNo', w0,
                        'InWardDate', w1,
                        'PurchaseDate', w1,
                        'InvoiceNo', w0,
                        'TotalQty', w2,
                        'TotalBasicAmount', w2,
                        'ShippingCost', w2,
                        'TotalTax', w2,
                        'TotalAmount', w2,
                        'Remarks', w0,
                        'SupplierId', w3,
                        'IsPaid', w4
                    ]);
                }
                return _this;
            }
            ProductPurchasesForm.formKey = 'Purchases.ProductPurchases';
            return ProductPurchasesForm;
        }(Serenity.PrefixedContext));
        Purchases.ProductPurchasesForm = ProductPurchasesForm;
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var ProductPurchasesRow;
        (function (ProductPurchasesRow) {
            ProductPurchasesRow.idProperty = 'ProductPurchaseId';
            ProductPurchasesRow.nameProperty = 'InWardNo';
            ProductPurchasesRow.localTextPrefix = 'Purchases.ProductPurchases';
            ProductPurchasesRow.deletePermission = 'Administration:General';
            ProductPurchasesRow.insertPermission = 'Administration:General';
            ProductPurchasesRow.readPermission = 'Administration:General';
            ProductPurchasesRow.updatePermission = 'Administration:General';
        })(ProductPurchasesRow = Purchases.ProductPurchasesRow || (Purchases.ProductPurchasesRow = {}));
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var ProductPurchasesService;
        (function (ProductPurchasesService) {
            ProductPurchasesService.baseUrl = 'Purchases/ProductPurchases';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductPurchasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductPurchasesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductPurchasesService = Purchases.ProductPurchasesService || (Purchases.ProductPurchasesService = {}));
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var PurchaseItemsForm = /** @class */ (function (_super) {
            __extends(PurchaseItemsForm, _super);
            function PurchaseItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PurchaseItemsForm.init) {
                    PurchaseItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(PurchaseItemsForm, [
                        'ProductPurchaseId', w0,
                        'ProductItemId', w0,
                        'Barcode', w1,
                        'Qty', w2,
                        'Unit', w0,
                        'Cost', w2,
                        'TaxAmout', w2,
                        'PurchaseTaxTypeId', w0,
                        'CostValue', w2
                    ]);
                }
                return _this;
            }
            PurchaseItemsForm.formKey = 'Purchases.PurchaseItems';
            return PurchaseItemsForm;
        }(Serenity.PrefixedContext));
        Purchases.PurchaseItemsForm = PurchaseItemsForm;
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var PurchaseItemsRow;
        (function (PurchaseItemsRow) {
            PurchaseItemsRow.idProperty = 'PurchaseItemId';
            PurchaseItemsRow.nameProperty = 'Barcode';
            PurchaseItemsRow.localTextPrefix = 'Purchases.PurchaseItems';
            PurchaseItemsRow.deletePermission = 'Administration:General';
            PurchaseItemsRow.insertPermission = 'Administration:General';
            PurchaseItemsRow.readPermission = 'Administration:General';
            PurchaseItemsRow.updatePermission = 'Administration:General';
        })(PurchaseItemsRow = Purchases.PurchaseItemsRow || (Purchases.PurchaseItemsRow = {}));
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var PurchaseItemsService;
        (function (PurchaseItemsService) {
            PurchaseItemsService.baseUrl = 'Purchases/PurchaseItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PurchaseItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(PurchaseItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PurchaseItemsService = Purchases.PurchaseItemsService || (Purchases.PurchaseItemsService = {}));
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var CashReceiptsForm = /** @class */ (function (_super) {
            __extends(CashReceiptsForm, _super);
            function CashReceiptsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CashReceiptsForm.init) {
                    CashReceiptsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(CashReceiptsForm, [
                        'InwardDate', w0,
                        'TranscationModeId', w1,
                        'ReceiptFrom', w2,
                        'Amount', w3,
                        'SlipNo', w2
                    ]);
                }
                return _this;
            }
            CashReceiptsForm.formKey = 'Receipts.CashReceipts';
            return CashReceiptsForm;
        }(Serenity.PrefixedContext));
        Receipts.CashReceiptsForm = CashReceiptsForm;
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var CashReceiptsRow;
        (function (CashReceiptsRow) {
            CashReceiptsRow.idProperty = 'CashReceiptId';
            CashReceiptsRow.nameProperty = 'ReceiptFrom';
            CashReceiptsRow.localTextPrefix = 'Receipts.CashReceipts';
            CashReceiptsRow.deletePermission = 'Administration:General';
            CashReceiptsRow.insertPermission = 'Administration:General';
            CashReceiptsRow.readPermission = 'Administration:General';
            CashReceiptsRow.updatePermission = 'Administration:General';
        })(CashReceiptsRow = Receipts.CashReceiptsRow || (Receipts.CashReceiptsRow = {}));
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var CashReceiptsService;
        (function (CashReceiptsService) {
            CashReceiptsService.baseUrl = 'Receipts/CashReceipts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CashReceiptsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CashReceiptsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CashReceiptsService = Receipts.CashReceiptsService || (Receipts.CashReceiptsService = {}));
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var ReceiptsForm = /** @class */ (function (_super) {
            __extends(ReceiptsForm, _super);
            function ReceiptsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ReceiptsForm.init) {
                    ReceiptsForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.IntegerEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(ReceiptsForm, [
                        'RecieptDate', w0,
                        'ReceiptFrom', w1,
                        'PayMode', w2,
                        'ReceiptDetails', w1,
                        'Amount', w3,
                        'RecieptSlipNo', w1,
                        'Remarks', w1
                    ]);
                }
                return _this;
            }
            ReceiptsForm.formKey = 'Receipts.Receipts';
            return ReceiptsForm;
        }(Serenity.PrefixedContext));
        Receipts.ReceiptsForm = ReceiptsForm;
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var ReceiptsRow;
        (function (ReceiptsRow) {
            ReceiptsRow.idProperty = 'ReceiptId';
            ReceiptsRow.nameProperty = 'ReceiptFrom';
            ReceiptsRow.localTextPrefix = 'Receipts.Receipts';
            ReceiptsRow.deletePermission = 'Administration:General';
            ReceiptsRow.insertPermission = 'Administration:General';
            ReceiptsRow.readPermission = 'Administration:General';
            ReceiptsRow.updatePermission = 'Administration:General';
        })(ReceiptsRow = Receipts.ReceiptsRow || (Receipts.ReceiptsRow = {}));
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var ReceiptsService;
        (function (ReceiptsService) {
            ReceiptsService.baseUrl = 'Receipts/Receipts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ReceiptsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ReceiptsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ReceiptsService = Receipts.ReceiptsService || (Receipts.ReceiptsService = {}));
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var DailySalesForm = /** @class */ (function (_super) {
            __extends(DailySalesForm, _super);
            function DailySalesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!DailySalesForm.init) {
                    DailySalesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(DailySalesForm, [
                        'SaleDate', w0,
                        'InvNo', w1,
                        'Amount', w2,
                        'PayMode', w3,
                        'CashAmount', w2,
                        'SalesmanId', w3,
                        'IsDue', w4,
                        'IsManualBill', w4,
                        'IsTailoringBill', w4,
                        'Remarks', w1,
                        'IsSaleReturn', w4
                    ]);
                }
                return _this;
            }
            DailySalesForm.formKey = 'Sales.DailySales';
            return DailySalesForm;
        }(Serenity.PrefixedContext));
        Sales.DailySalesForm = DailySalesForm;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var DailySalesRow;
        (function (DailySalesRow) {
            DailySalesRow.idProperty = 'DailySaleId';
            DailySalesRow.nameProperty = 'InvNo';
            DailySalesRow.localTextPrefix = 'Sales.DailySales';
            DailySalesRow.deletePermission = 'Administration:General';
            DailySalesRow.insertPermission = 'Administration:General';
            DailySalesRow.readPermission = 'Administration:General';
            DailySalesRow.updatePermission = 'Administration:General';
        })(DailySalesRow = Sales.DailySalesRow || (Sales.DailySalesRow = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var DailySalesService;
        (function (DailySalesService) {
            DailySalesService.baseUrl = 'Sales/DailySales';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                DailySalesService[x] = function (r, s, o) {
                    return Q.serviceRequest(DailySalesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(DailySalesService = Sales.DailySalesService || (Sales.DailySalesService = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleInvoicesForm = /** @class */ (function (_super) {
            __extends(SaleInvoicesForm, _super);
            function SaleInvoicesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleInvoicesForm.init) {
                    SaleInvoicesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(SaleInvoicesForm, [
                        'CustomerId', w0,
                        'OnDate', w1,
                        'InvoiceNo', w2,
                        'TotalItems', w0,
                        'TotalQty', w3,
                        'TotalBillAmount', w3,
                        'TotalDiscountAmount', w3,
                        'RoundOffAmount', w3,
                        'TotalTaxAmount', w3
                    ]);
                }
                return _this;
            }
            SaleInvoicesForm.formKey = 'Sales.SaleInvoices';
            return SaleInvoicesForm;
        }(Serenity.PrefixedContext));
        Sales.SaleInvoicesForm = SaleInvoicesForm;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleInvoicesRow;
        (function (SaleInvoicesRow) {
            SaleInvoicesRow.idProperty = 'SaleInvoiceId';
            SaleInvoicesRow.nameProperty = 'InvoiceNo';
            SaleInvoicesRow.localTextPrefix = 'Sales.SaleInvoices';
            SaleInvoicesRow.deletePermission = 'Administration:General';
            SaleInvoicesRow.insertPermission = 'Administration:General';
            SaleInvoicesRow.readPermission = 'Administration:General';
            SaleInvoicesRow.updatePermission = 'Administration:General';
        })(SaleInvoicesRow = Sales.SaleInvoicesRow || (Sales.SaleInvoicesRow = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleInvoicesService;
        (function (SaleInvoicesService) {
            SaleInvoicesService.baseUrl = 'Sales/SaleInvoices';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SaleInvoicesService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleInvoicesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleInvoicesService = Sales.SaleInvoicesService || (Sales.SaleInvoicesService = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleItemsForm = /** @class */ (function (_super) {
            __extends(SaleItemsForm, _super);
            function SaleItemsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SaleItemsForm.init) {
                    SaleItemsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(SaleItemsForm, [
                        'SaleInvoiceId', w0,
                        'ProductItemId', w0,
                        'BarCode', w1,
                        'Qty', w2,
                        'Units', w0,
                        'Mrp', w2,
                        'BasicAmount', w2,
                        'Discount', w2,
                        'TaxAmount', w2,
                        'SaleTaxTypeId', w0,
                        'BillAmount', w2,
                        'SalesmanId', w0
                    ]);
                }
                return _this;
            }
            SaleItemsForm.formKey = 'Sales.SaleItems';
            return SaleItemsForm;
        }(Serenity.PrefixedContext));
        Sales.SaleItemsForm = SaleItemsForm;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleItemsRow;
        (function (SaleItemsRow) {
            SaleItemsRow.idProperty = 'SaleItemId';
            SaleItemsRow.nameProperty = 'BarCode';
            SaleItemsRow.localTextPrefix = 'Sales.SaleItems';
            SaleItemsRow.deletePermission = 'Administration:General';
            SaleItemsRow.insertPermission = 'Administration:General';
            SaleItemsRow.readPermission = 'Administration:General';
            SaleItemsRow.updatePermission = 'Administration:General';
        })(SaleItemsRow = Sales.SaleItemsRow || (Sales.SaleItemsRow = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleItemsService;
        (function (SaleItemsService) {
            SaleItemsService.baseUrl = 'Sales/SaleItems';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SaleItemsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SaleItemsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SaleItemsService = Sales.SaleItemsService || (Sales.SaleItemsService = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalePaymentDetailsForm = /** @class */ (function (_super) {
            __extends(SalePaymentDetailsForm, _super);
            function SalePaymentDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalePaymentDetailsForm.init) {
                    SalePaymentDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(SalePaymentDetailsForm, [
                        'PayMode', w0,
                        'CashAmount', w1,
                        'CardAmount', w1,
                        'MixAmount', w1
                    ]);
                }
                return _this;
            }
            SalePaymentDetailsForm.formKey = 'Sales.SalePaymentDetails';
            return SalePaymentDetailsForm;
        }(Serenity.PrefixedContext));
        Sales.SalePaymentDetailsForm = SalePaymentDetailsForm;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalePaymentDetailsRow;
        (function (SalePaymentDetailsRow) {
            SalePaymentDetailsRow.idProperty = 'SalePaymentDetailId';
            SalePaymentDetailsRow.localTextPrefix = 'Sales.SalePaymentDetails';
            SalePaymentDetailsRow.deletePermission = 'Administration:General';
            SalePaymentDetailsRow.insertPermission = 'Administration:General';
            SalePaymentDetailsRow.readPermission = 'Administration:General';
            SalePaymentDetailsRow.updatePermission = 'Administration:General';
        })(SalePaymentDetailsRow = Sales.SalePaymentDetailsRow || (Sales.SalePaymentDetailsRow = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalePaymentDetailsService;
        (function (SalePaymentDetailsService) {
            SalePaymentDetailsService.baseUrl = 'Sales/SalePaymentDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalePaymentDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalePaymentDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalePaymentDetailsService = Sales.SalePaymentDetailsService || (Sales.SalePaymentDetailsService = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalesmenForm = /** @class */ (function (_super) {
            __extends(SalesmenForm, _super);
            function SalesmenForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SalesmenForm.init) {
                    SalesmenForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SalesmenForm, [
                        'SalesmanName', w0
                    ]);
                }
                return _this;
            }
            SalesmenForm.formKey = 'Sales.Salesmen';
            return SalesmenForm;
        }(Serenity.PrefixedContext));
        Sales.SalesmenForm = SalesmenForm;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalesmenRow;
        (function (SalesmenRow) {
            SalesmenRow.idProperty = 'SalesmanId';
            SalesmenRow.nameProperty = 'SalesmanName';
            SalesmenRow.localTextPrefix = 'Sales.Salesmen';
            SalesmenRow.deletePermission = 'Administration:General';
            SalesmenRow.insertPermission = 'Administration:General';
            SalesmenRow.readPermission = 'Administration:General';
            SalesmenRow.updatePermission = 'Administration:General';
        })(SalesmenRow = Sales.SalesmenRow || (Sales.SalesmenRow = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalesmenService;
        (function (SalesmenService) {
            SalesmenService.baseUrl = 'Sales/Salesmen';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SalesmenService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesmenService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesmenService = Sales.SalesmenService || (Sales.SalesmenService = {}));
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Stores;
    (function (Stores) {
        var StoresForm = /** @class */ (function (_super) {
            __extends(StoresForm, _super);
            function StoresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StoresForm.init) {
                    StoresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(StoresForm, [
                        'StoreCode', w0,
                        'StoreName', w0,
                        'Address', w0,
                        'City', w0,
                        'PinCode', w0,
                        'PhoneNo', w0,
                        'StoreManagerName', w0,
                        'StoreManagerPhoneNo', w0,
                        'PanNo', w0,
                        'Gstno', w0,
                        'NoOfEmployees', w1,
                        'OpeningDate', w2,
                        'ClosingDate', w2,
                        'Status', w3
                    ]);
                }
                return _this;
            }
            StoresForm.formKey = 'Stores.Stores';
            return StoresForm;
        }(Serenity.PrefixedContext));
        Stores.StoresForm = StoresForm;
    })(Stores = AprajitaRetails.Stores || (AprajitaRetails.Stores = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Stores;
    (function (Stores) {
        var StoresRow;
        (function (StoresRow) {
            StoresRow.idProperty = 'StoreId';
            StoresRow.nameProperty = 'StoreCode';
            StoresRow.localTextPrefix = 'Stores.Stores';
            StoresRow.deletePermission = 'Administration:General';
            StoresRow.insertPermission = 'Administration:General';
            StoresRow.readPermission = 'Administration:General';
            StoresRow.updatePermission = 'Administration:General';
        })(StoresRow = Stores.StoresRow || (Stores.StoresRow = {}));
    })(Stores = AprajitaRetails.Stores || (AprajitaRetails.Stores = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Stores;
    (function (Stores) {
        var StoresService;
        (function (StoresService) {
            StoresService.baseUrl = 'Stores/Stores';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StoresService[x] = function (r, s, o) {
                    return Q.serviceRequest(StoresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StoresService = Stores.StoresService || (Stores.StoresService = {}));
    })(Stores = AprajitaRetails.Stores || (AprajitaRetails.Stores = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailorAttendancesForm = /** @class */ (function (_super) {
            __extends(TailorAttendancesForm, _super);
            function TailorAttendancesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TailorAttendancesForm.init) {
                    TailorAttendancesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    Q.initFormType(TailorAttendancesForm, [
                        'TailoringEmployeeId', w0,
                        'AttDate', w1,
                        'EntryTime', w2,
                        'Status', w0,
                        'Remarks', w2
                    ]);
                }
                return _this;
            }
            TailorAttendancesForm.formKey = 'Tailors.TailorAttendances';
            return TailorAttendancesForm;
        }(Serenity.PrefixedContext));
        Tailors.TailorAttendancesForm = TailorAttendancesForm;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailorAttendancesRow;
        (function (TailorAttendancesRow) {
            TailorAttendancesRow.idProperty = 'TailorAttendanceId';
            TailorAttendancesRow.nameProperty = 'EntryTime';
            TailorAttendancesRow.localTextPrefix = 'Tailors.TailorAttendances';
            TailorAttendancesRow.deletePermission = 'Administration:General';
            TailorAttendancesRow.insertPermission = 'Administration:General';
            TailorAttendancesRow.readPermission = 'Administration:General';
            TailorAttendancesRow.updatePermission = 'Administration:General';
        })(TailorAttendancesRow = Tailors.TailorAttendancesRow || (Tailors.TailorAttendancesRow = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailorAttendancesService;
        (function (TailorAttendancesService) {
            TailorAttendancesService.baseUrl = 'Tailors/TailorAttendances';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TailorAttendancesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TailorAttendancesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TailorAttendancesService = Tailors.TailorAttendancesService || (Tailors.TailorAttendancesService = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringEmployeesForm = /** @class */ (function (_super) {
            __extends(TailoringEmployeesForm, _super);
            function TailoringEmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TailoringEmployeesForm.init) {
                    TailoringEmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.BooleanEditor;
                    Q.initFormType(TailoringEmployeesForm, [
                        'StaffName', w0,
                        'MobileNo', w0,
                        'JoiningDate', w1,
                        'LeavingDate', w1,
                        'IsWorking', w2
                    ]);
                }
                return _this;
            }
            TailoringEmployeesForm.formKey = 'Tailors.TailoringEmployees';
            return TailoringEmployeesForm;
        }(Serenity.PrefixedContext));
        Tailors.TailoringEmployeesForm = TailoringEmployeesForm;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringEmployeesRow;
        (function (TailoringEmployeesRow) {
            TailoringEmployeesRow.idProperty = 'TailoringEmployeeId';
            TailoringEmployeesRow.nameProperty = 'StaffName';
            TailoringEmployeesRow.localTextPrefix = 'Tailors.TailoringEmployees';
            TailoringEmployeesRow.deletePermission = 'Administration:General';
            TailoringEmployeesRow.insertPermission = 'Administration:General';
            TailoringEmployeesRow.readPermission = 'Administration:General';
            TailoringEmployeesRow.updatePermission = 'Administration:General';
        })(TailoringEmployeesRow = Tailors.TailoringEmployeesRow || (Tailors.TailoringEmployeesRow = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringEmployeesService;
        (function (TailoringEmployeesService) {
            TailoringEmployeesService.baseUrl = 'Tailors/TailoringEmployees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TailoringEmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(TailoringEmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TailoringEmployeesService = Tailors.TailoringEmployeesService || (Tailors.TailoringEmployeesService = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringSalaryPaymentsForm = /** @class */ (function (_super) {
            __extends(TailoringSalaryPaymentsForm, _super);
            function TailoringSalaryPaymentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TailoringSalaryPaymentsForm.init) {
                    TailoringSalaryPaymentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(TailoringSalaryPaymentsForm, [
                        'TailoringEmployeeId', w0,
                        'SalaryMonth', w1,
                        'SalaryComponet', w0,
                        'PaymentDate', w2,
                        'Amount', w3,
                        'PayMode', w0,
                        'Details', w1
                    ]);
                }
                return _this;
            }
            TailoringSalaryPaymentsForm.formKey = 'Tailors.TailoringSalaryPayments';
            return TailoringSalaryPaymentsForm;
        }(Serenity.PrefixedContext));
        Tailors.TailoringSalaryPaymentsForm = TailoringSalaryPaymentsForm;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringSalaryPaymentsRow;
        (function (TailoringSalaryPaymentsRow) {
            TailoringSalaryPaymentsRow.idProperty = 'TailoringSalaryPaymentId';
            TailoringSalaryPaymentsRow.nameProperty = 'SalaryMonth';
            TailoringSalaryPaymentsRow.localTextPrefix = 'Tailors.TailoringSalaryPayments';
            TailoringSalaryPaymentsRow.deletePermission = 'Administration:General';
            TailoringSalaryPaymentsRow.insertPermission = 'Administration:General';
            TailoringSalaryPaymentsRow.readPermission = 'Administration:General';
            TailoringSalaryPaymentsRow.updatePermission = 'Administration:General';
        })(TailoringSalaryPaymentsRow = Tailors.TailoringSalaryPaymentsRow || (Tailors.TailoringSalaryPaymentsRow = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringSalaryPaymentsService;
        (function (TailoringSalaryPaymentsService) {
            TailoringSalaryPaymentsService.baseUrl = 'Tailors/TailoringSalaryPayments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TailoringSalaryPaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TailoringSalaryPaymentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TailoringSalaryPaymentsService = Tailors.TailoringSalaryPaymentsService || (Tailors.TailoringSalaryPaymentsService = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvancePaymentsForm = /** @class */ (function (_super) {
            __extends(TailoringStaffAdvancePaymentsForm, _super);
            function TailoringStaffAdvancePaymentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TailoringStaffAdvancePaymentsForm.init) {
                    TailoringStaffAdvancePaymentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(TailoringStaffAdvancePaymentsForm, [
                        'TailoringEmployeeId', w0,
                        'PaymentDate', w1,
                        'Amount', w2,
                        'PayMode', w0,
                        'Details', w3
                    ]);
                }
                return _this;
            }
            TailoringStaffAdvancePaymentsForm.formKey = 'Tailors.TailoringStaffAdvancePayments';
            return TailoringStaffAdvancePaymentsForm;
        }(Serenity.PrefixedContext));
        Tailors.TailoringStaffAdvancePaymentsForm = TailoringStaffAdvancePaymentsForm;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvancePaymentsRow;
        (function (TailoringStaffAdvancePaymentsRow) {
            TailoringStaffAdvancePaymentsRow.idProperty = 'TailoringStaffAdvancePaymentId';
            TailoringStaffAdvancePaymentsRow.nameProperty = 'Details';
            TailoringStaffAdvancePaymentsRow.localTextPrefix = 'Tailors.TailoringStaffAdvancePayments';
            TailoringStaffAdvancePaymentsRow.deletePermission = 'Administration:General';
            TailoringStaffAdvancePaymentsRow.insertPermission = 'Administration:General';
            TailoringStaffAdvancePaymentsRow.readPermission = 'Administration:General';
            TailoringStaffAdvancePaymentsRow.updatePermission = 'Administration:General';
        })(TailoringStaffAdvancePaymentsRow = Tailors.TailoringStaffAdvancePaymentsRow || (Tailors.TailoringStaffAdvancePaymentsRow = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvancePaymentsService;
        (function (TailoringStaffAdvancePaymentsService) {
            TailoringStaffAdvancePaymentsService.baseUrl = 'Tailors/TailoringStaffAdvancePayments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TailoringStaffAdvancePaymentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TailoringStaffAdvancePaymentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TailoringStaffAdvancePaymentsService = Tailors.TailoringStaffAdvancePaymentsService || (Tailors.TailoringStaffAdvancePaymentsService = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvanceReceiptsForm = /** @class */ (function (_super) {
            __extends(TailoringStaffAdvanceReceiptsForm, _super);
            function TailoringStaffAdvanceReceiptsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TailoringStaffAdvanceReceiptsForm.init) {
                    TailoringStaffAdvanceReceiptsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.StringEditor;
                    Q.initFormType(TailoringStaffAdvanceReceiptsForm, [
                        'TailoringEmployeeId', w0,
                        'ReceiptDate', w1,
                        'Amount', w2,
                        'PayMode', w0,
                        'Details', w3
                    ]);
                }
                return _this;
            }
            TailoringStaffAdvanceReceiptsForm.formKey = 'Tailors.TailoringStaffAdvanceReceipts';
            return TailoringStaffAdvanceReceiptsForm;
        }(Serenity.PrefixedContext));
        Tailors.TailoringStaffAdvanceReceiptsForm = TailoringStaffAdvanceReceiptsForm;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvanceReceiptsRow;
        (function (TailoringStaffAdvanceReceiptsRow) {
            TailoringStaffAdvanceReceiptsRow.idProperty = 'TailoringStaffAdvanceReceiptId';
            TailoringStaffAdvanceReceiptsRow.nameProperty = 'Details';
            TailoringStaffAdvanceReceiptsRow.localTextPrefix = 'Tailors.TailoringStaffAdvanceReceipts';
            TailoringStaffAdvanceReceiptsRow.deletePermission = 'Administration:General';
            TailoringStaffAdvanceReceiptsRow.insertPermission = 'Administration:General';
            TailoringStaffAdvanceReceiptsRow.readPermission = 'Administration:General';
            TailoringStaffAdvanceReceiptsRow.updatePermission = 'Administration:General';
        })(TailoringStaffAdvanceReceiptsRow = Tailors.TailoringStaffAdvanceReceiptsRow || (Tailors.TailoringStaffAdvanceReceiptsRow = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvanceReceiptsService;
        (function (TailoringStaffAdvanceReceiptsService) {
            TailoringStaffAdvanceReceiptsService.baseUrl = 'Tailors/TailoringStaffAdvanceReceipts';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TailoringStaffAdvanceReceiptsService[x] = function (r, s, o) {
                    return Q.serviceRequest(TailoringStaffAdvanceReceiptsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TailoringStaffAdvanceReceiptsService = Tailors.TailoringStaffAdvanceReceiptsService || (Tailors.TailoringStaffAdvanceReceiptsService = {}));
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerEntriesForm = /** @class */ (function (_super) {
            __extends(LedgerEntriesForm, _super);
            function LedgerEntriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LedgerEntriesForm.init) {
                    LedgerEntriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.DecimalEditor;
                    Q.initFormType(LedgerEntriesForm, [
                        'PartyId', w0,
                        'EntryDate', w1,
                        'Particulars', w2,
                        'AmountIn', w3,
                        'AmountOut', w3,
                        'Balance', w3
                    ]);
                }
                return _this;
            }
            LedgerEntriesForm.formKey = 'Tally.LedgerEntries';
            return LedgerEntriesForm;
        }(Serenity.PrefixedContext));
        Tally.LedgerEntriesForm = LedgerEntriesForm;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerEntriesRow;
        (function (LedgerEntriesRow) {
            LedgerEntriesRow.idProperty = 'LedgerEntryId';
            LedgerEntriesRow.nameProperty = 'Particulars';
            LedgerEntriesRow.localTextPrefix = 'Tally.LedgerEntries';
            LedgerEntriesRow.deletePermission = 'Administration:General';
            LedgerEntriesRow.insertPermission = 'Administration:General';
            LedgerEntriesRow.readPermission = 'Administration:General';
            LedgerEntriesRow.updatePermission = 'Administration:General';
        })(LedgerEntriesRow = Tally.LedgerEntriesRow || (Tally.LedgerEntriesRow = {}));
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerEntriesService;
        (function (LedgerEntriesService) {
            LedgerEntriesService.baseUrl = 'Tally/LedgerEntries';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LedgerEntriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(LedgerEntriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LedgerEntriesService = Tally.LedgerEntriesService || (Tally.LedgerEntriesService = {}));
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerMastersForm = /** @class */ (function (_super) {
            __extends(LedgerMastersForm, _super);
            function LedgerMastersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LedgerMastersForm.init) {
                    LedgerMastersForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DateEditor;
                    Q.initFormType(LedgerMastersForm, [
                        'PartyId', w0,
                        'CreatingDate', w1,
                        'LedgerType', w0
                    ]);
                }
                return _this;
            }
            LedgerMastersForm.formKey = 'Tally.LedgerMasters';
            return LedgerMastersForm;
        }(Serenity.PrefixedContext));
        Tally.LedgerMastersForm = LedgerMastersForm;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerMastersRow;
        (function (LedgerMastersRow) {
            LedgerMastersRow.idProperty = 'LedgerMasterId';
            LedgerMastersRow.localTextPrefix = 'Tally.LedgerMasters';
            LedgerMastersRow.deletePermission = 'Administration:General';
            LedgerMastersRow.insertPermission = 'Administration:General';
            LedgerMastersRow.readPermission = 'Administration:General';
            LedgerMastersRow.updatePermission = 'Administration:General';
        })(LedgerMastersRow = Tally.LedgerMastersRow || (Tally.LedgerMastersRow = {}));
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerMastersService;
        (function (LedgerMastersService) {
            LedgerMastersService.baseUrl = 'Tally/LedgerMasters';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LedgerMastersService[x] = function (r, s, o) {
                    return Q.serviceRequest(LedgerMastersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LedgerMastersService = Tally.LedgerMastersService || (Tally.LedgerMastersService = {}));
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var PartiesForm = /** @class */ (function (_super) {
            __extends(PartiesForm, _super);
            function PartiesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PartiesForm.init) {
                    PartiesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.IntegerEditor;
                    Q.initFormType(PartiesForm, [
                        'PartyName', w0,
                        'OpenningDate', w1,
                        'OpenningBalance', w2,
                        'Address', w0,
                        'PanNo', w0,
                        'GstNo', w0,
                        'LedgerType', w3
                    ]);
                }
                return _this;
            }
            PartiesForm.formKey = 'Tally.Parties';
            return PartiesForm;
        }(Serenity.PrefixedContext));
        Tally.PartiesForm = PartiesForm;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var PartiesRow;
        (function (PartiesRow) {
            PartiesRow.idProperty = 'PartyId';
            PartiesRow.nameProperty = 'PartyName';
            PartiesRow.localTextPrefix = 'Tally.Parties';
            PartiesRow.deletePermission = 'Administration:General';
            PartiesRow.insertPermission = 'Administration:General';
            PartiesRow.readPermission = 'Administration:General';
            PartiesRow.updatePermission = 'Administration:General';
        })(PartiesRow = Tally.PartiesRow || (Tally.PartiesRow = {}));
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var PartiesService;
        (function (PartiesService) {
            PartiesService.baseUrl = 'Tally/Parties';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PartiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(PartiesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PartiesService = Tally.PartiesService || (Tally.PartiesService = {}));
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Texts;
    (function (Texts) {
        AprajitaRetails['Texts'] = Q.proxyTexts(Texts, '', { Db: { Accounts: { CashInBanks: { CashIn: 1, CashInBankId: 1, CashOut: 1, CibDate: 1, ClosingBalance: 1, OpenningBalance: 1 }, CashInHands: { CashIn: 1, CashInHandId: 1, CashOut: 1, CihDate: 1, ClosingBalance: 1, OpenningBalance: 1 }, PurchaseTaxTypes: { CompositeRate: 1, PurchaseTaxTypeId: 1, TaxName: 1, TaxType: 1 }, SaleTaxTypes: { CompositeRate: 1, SaleTaxTypeId: 1, TaxName: 1, TaxType: 1 }, SuspenseAccounts: { ClearedDetails: 1, EntryDate: 1, InAmount: 1, IsCleared: 1, OutAmount: 1, ReferanceDetails: 1, ReviewBy: 1, SuspenseAccountId: 1 }, TranscationModes: { Transcation: 1, TranscationModeId: 1 } }, Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Banking: { AccountNumbers: { Account: 1, AccountNumberId: 1, BankBankName: 1, BankId: 1 }, BankDeposits: { AccountNumberAccount: 1, AccountNumberBankId: 1, AccountNumberId: 1, Amount: 1, BankDepositId: 1, DepoDate: 1, Details: 1, PayMode: 1, Remarks: 1 }, BankWithdrawals: { AccountNumberAccount: 1, AccountNumberBankId: 1, AccountNumberId: 1, Amount: 1, ApprovedBy: 1, BankWithdrawalId: 1, ChequeNo: 1, DepoDate: 1, InNameOf: 1, SignedBy: 1 }, Banks: { BankId: 1, BankName: 1 }, ChequesLogs: { AccountNumber: 1, Amount: 1, BankName: 1, ChequesDate: 1, ChequesLogId: 1, ClearedDate: 1, DepositDate: 1, IsDepositedOnAprajitaRetails: 1, IsIssuedByAprajitaRetails: 1, IsPdc: 1, IssuedBy: 1, IssuedTo: 1, Remarks: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, CustomTailoring: { TalioringBookings: { BookingDate: 1, BookingSlipNo: 1, BundiPrice: 1, BundiQty: 1, CoatPrice: 1, CoatQty: 1, CustName: 1, DeliveryDate: 1, IsDelivered: 1, KurtaPrice: 1, KurtaQty: 1, Others: 1, OthersPrice: 1, PantPrice: 1, PantQty: 1, ShirtPrice: 1, ShirtQty: 1, TalioringBookingId: 1, TotalAmount: 1, TotalQty: 1, TryDate: 1 }, TalioringDeliveries: { Amount: 1, DeliveryDate: 1, InvNo: 1, Remarks: 1, TalioringBookingBookingDate: 1, TalioringBookingBookingSlipNo: 1, TalioringBookingBundiPrice: 1, TalioringBookingBundiQty: 1, TalioringBookingCoatPrice: 1, TalioringBookingCoatQty: 1, TalioringBookingCustName: 1, TalioringBookingDeliveryDate: 1, TalioringBookingId: 1, TalioringBookingIsDelivered: 1, TalioringBookingKurtaPrice: 1, TalioringBookingKurtaQty: 1, TalioringBookingOthers: 1, TalioringBookingOthersPrice: 1, TalioringBookingPantPrice: 1, TalioringBookingPantQty: 1, TalioringBookingShirtPrice: 1, TalioringBookingShirtQty: 1, TalioringBookingTotalAmount: 1, TalioringBookingTotalQty: 1, TalioringBookingTryDate: 1, TalioringDeliveryId: 1 } }, Dues: { DueRecoverds: { AmountPaid: 1, DueRecoverdId: 1, DuesListAmount: 1, DuesListDailySaleId: 1, DuesListId: 1, DuesListIsPartialRecovery: 1, DuesListIsRecovered: 1, DuesListRecoveryDate: 1, IsPartialPayment: 1, Modes: 1, PaidDate: 1, Remarks: 1 }, DuesLists: { Amount: 1, DailySaleAmount: 1, DailySaleCashAmount: 1, DailySaleId: 1, DailySaleInvNo: 1, DailySaleIsDue: 1, DailySaleIsManualBill: 1, DailySaleIsSaleReturn: 1, DailySaleIsTailoringBill: 1, DailySalePayMode: 1, DailySaleRemarks: 1, DailySaleSaleDate: 1, DailySaleSalesmanId: 1, DuesListId: 1, IsPartialRecovery: 1, IsRecovered: 1, RecoveryDate: 1 } }, Expenses: { CashPayments: { Amount: 1, CashPaymentId: 1, PaidTo: 1, PaymentDate: 1, SlipNo: 1, TranscationModeId: 1, TranscationModeTranscation: 1 }, Expenses: { Amount: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, ExpDate: 1, ExpenseId: 1, PaidTo: 1, Particulars: 1, PayMode: 1, PaymentDetails: 1, Remarks: 1 }, Payments: { Amount: 1, PayDate: 1, PayMode: 1, PaymentDetails: 1, PaymentId: 1, PaymentPartry: 1, PaymentSlipNo: 1, Remarks: 1 }, PettyCashExpenses: { Amount: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, ExpDate: 1, PaidTo: 1, Particulars: 1, PettyCashExpenseId: 1, Remarks: 1 } }, PayRoll: { Attendances: { AttDate: 1, AttendanceId: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, EntryTime: 1, Remarks: 1, Status: 1 }, CurrentSalaries: { BasicSalary: 1, CloseDate: 1, CurrentSalaryId: 1, EffectiveDate: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, IncentiveRate: 1, IncentiveTarget: 1, IsEffective: 1, IsSundayBillable: 1, LpRate: 1, SundaySalary: 1, WowBillRate: 1, WowBillTarget: 1 }, Employees: { EmployeeId: 1, IsWorking: 1, JoiningDate: 1, LeavingDate: 1, MobileNo: 1, StaffName: 1 }, PaySlips: { AdvanceDeducations: 1, BasicSalary: 1, CurrentSalaryBasicSalary: 1, CurrentSalaryCloseDate: 1, CurrentSalaryEffectiveDate: 1, CurrentSalaryEmployeeId: 1, CurrentSalaryId: 1, CurrentSalaryIncentiveRate: 1, CurrentSalaryIncentiveTarget: 1, CurrentSalaryIsEffective: 1, CurrentSalaryIsSundayBillable: 1, CurrentSalaryLpRate: 1, CurrentSalarySundaySalary: 1, CurrentSalaryWowBillRate: 1, CurrentSalaryWowBillTarget: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, GrossSalary: 1, LastPCsIncentive: 1, LastPcsAmount: 1, Month: 1, NoOfDaysPresent: 1, OnDate: 1, OtherDeductions: 1, OthersIncentive: 1, PaySlipId: 1, PfDeductions: 1, Remarks: 1, SaleIncentive: 1, StandardDeductions: 1, TdsDeductions: 1, TotalSale: 1, WowBillAmount: 1, WowBillIncentive: 1, Year: 1 }, SalaryPayments: { Amount: 1, Details: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, PayMode: 1, PaymentDate: 1, SalaryComponet: 1, SalaryMonth: 1, SalaryPaymentId: 1 }, Salesmen: { SalesmanId: 1, SalesmanName: 1 }, StaffAdvancePayments: { Amount: 1, Details: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, PayMode: 1, PaymentDate: 1, StaffAdvancePaymentId: 1 }, StaffAdvanceReceipts: { Amount: 1, Details: 1, EmployeeId: 1, EmployeeIsWorking: 1, EmployeeJoiningDate: 1, EmployeeLeavingDate: 1, EmployeeMobileNo: 1, EmployeeStaffName: 1, PayMode: 1, ReceiptDate: 1, StaffAdvanceReceiptId: 1 } }, Process: { EndOfDays: { Access: 1, CashInHand: 1, EndOfDayId: 1, EodDate: 1, FmArrow: 1, Rwt: 1, Shirting: 1, Suiting: 1, Uspa: 1 }, MonthEnds: { EntryDate: 1, Month: 1, MonthEndId: 1, TotalAccess: 1, TotalAmountAccess: 1, TotalAmountFabric: 1, TotalAmountOthers: 1, TotalAmountRmz: 1, TotalBill: 1, TotalCashExpenses: 1, TotalDues: 1, TotalDuesOfMonth: 1, TotalDuesRecovered: 1, TotalExpenses: 1, TotalFabric: 1, TotalHomeExpenses: 1, TotalInward: 1, TotalInwardByAmitKumar: 1, TotalInwardOthers: 1, TotalOnBookExpenes: 1, TotalOtherExpenses: 1, TotalOtherHomeExpenses: 1, TotalOtherIncome: 1, TotalOthers: 1, TotalPayments: 1, TotalRecipts: 1, TotalRmz: 1, TotalSalary: 1, TotalSaleIncome: 1, TotalTailoringExpenses: 1, TotalTailoringIncome: 1, TotalTrimsAndOtherExpenses: 1, Year: 1 } }, Product: { Brands: { BCode: 1, BrandId: 1, BrandName: 1 }, Categories: { CategoryId: 1, CategoryName: 1, IsPrimaryCategory: 1, IsSecondaryCategory: 1 }, ProductItems: { Barcode: 1, BrandBCode: 1, BrandBrandName: 1, BrandId: 1, Categorys: 1, Cost: 1, ItemDesc: 1, MainCategoryCategoryCategoryName: 1, MainCategoryCategoryId: 1, MainCategoryCategoryIsPrimaryCategory: 1, MainCategoryCategoryIsSecondaryCategory: 1, Mrp: 1, ProductCategoryCategoryCategoryName: 1, ProductCategoryCategoryId: 1, ProductCategoryCategoryIsPrimaryCategory: 1, ProductCategoryCategoryIsSecondaryCategory: 1, ProductItemId: 1, ProductName: 1, ProductTypeCategoryCategoryName: 1, ProductTypeCategoryId: 1, ProductTypeCategoryIsPrimaryCategory: 1, ProductTypeCategoryIsSecondaryCategory: 1, Size: 1, StyleCode: 1, TaxRate: 1, Units: 1 }, Stocks: { ProductItemBarcode: 1, ProductItemBrandId: 1, ProductItemCategorys: 1, ProductItemCost: 1, ProductItemId: 1, ProductItemItemDesc: 1, ProductItemMainCategoryCategoryId: 1, ProductItemMrp: 1, ProductItemProductCategoryCategoryId: 1, ProductItemProductName: 1, ProductItemProductTypeCategoryId: 1, ProductItemSize: 1, ProductItemStyleCode: 1, ProductItemTaxRate: 1, ProductItemUnits: 1, PurchaseQty: 1, Quantity: 1, SaleQty: 1, StockId: 1, Units: 1 }, Suppliers: { SuppilerName: 1, SupplierId: 1, Warehouse: 1 } }, Purchases: { ProductPurchases: { InWardDate: 1, InWardNo: 1, InvoiceNo: 1, IsPaid: 1, ProductPurchaseId: 1, PurchaseDate: 1, Remarks: 1, ShippingCost: 1, SupplierId: 1, SupplierSuppilerName: 1, SupplierWarehouse: 1, TotalAmount: 1, TotalBasicAmount: 1, TotalQty: 1, TotalTax: 1 }, PurchaseItems: { Barcode: 1, Cost: 1, CostValue: 1, ProductItemBarcode: 1, ProductItemBrandId: 1, ProductItemCategorys: 1, ProductItemCost: 1, ProductItemId: 1, ProductItemItemDesc: 1, ProductItemMainCategoryCategoryId: 1, ProductItemMrp: 1, ProductItemProductCategoryCategoryId: 1, ProductItemProductName: 1, ProductItemProductTypeCategoryId: 1, ProductItemSize: 1, ProductItemStyleCode: 1, ProductItemTaxRate: 1, ProductItemUnits: 1, ProductPurchaseId: 1, ProductPurchaseInWardDate: 1, ProductPurchaseInWardNo: 1, ProductPurchaseInvoiceNo: 1, ProductPurchaseIsPaid: 1, ProductPurchasePurchaseDate: 1, ProductPurchaseRemarks: 1, ProductPurchaseShippingCost: 1, ProductPurchaseSupplierId: 1, ProductPurchaseTotalAmount: 1, ProductPurchaseTotalBasicAmount: 1, ProductPurchaseTotalQty: 1, ProductPurchaseTotalTax: 1, PurchaseItemId: 1, PurchaseTaxTypeCompositeRate: 1, PurchaseTaxTypeId: 1, PurchaseTaxTypeTaxName: 1, PurchaseTaxTypeTaxType: 1, Qty: 1, TaxAmout: 1, Unit: 1 } }, Receipts: { CashReceipts: { Amount: 1, CashReceiptId: 1, InwardDate: 1, ReceiptFrom: 1, SlipNo: 1, TranscationModeId: 1, TranscationModeTranscation: 1 }, Receipts: { Amount: 1, PayMode: 1, ReceiptDetails: 1, ReceiptFrom: 1, ReceiptId: 1, RecieptDate: 1, RecieptSlipNo: 1, Remarks: 1 } }, Sales: { DailySales: { Amount: 1, CashAmount: 1, DailySaleId: 1, InvNo: 1, IsDue: 1, IsManualBill: 1, IsSaleReturn: 1, IsTailoringBill: 1, PayMode: 1, Remarks: 1, SaleDate: 1, SalesmanId: 1, SalesmanSalesmanName: 1 }, SaleInvoices: { CustomerId: 1, InvoiceNo: 1, OnDate: 1, RoundOffAmount: 1, SaleInvoiceId: 1, TotalBillAmount: 1, TotalDiscountAmount: 1, TotalItems: 1, TotalQty: 1, TotalTaxAmount: 1 }, SaleItems: { BarCode: 1, BasicAmount: 1, BillAmount: 1, Discount: 1, Mrp: 1, ProductItemBarcode: 1, ProductItemBrandId: 1, ProductItemCategorys: 1, ProductItemCost: 1, ProductItemId: 1, ProductItemItemDesc: 1, ProductItemMainCategoryCategoryId: 1, ProductItemMrp: 1, ProductItemProductCategoryCategoryId: 1, ProductItemProductName: 1, ProductItemProductTypeCategoryId: 1, ProductItemSize: 1, ProductItemStyleCode: 1, ProductItemTaxRate: 1, ProductItemUnits: 1, Qty: 1, SaleInvoiceCustomerId: 1, SaleInvoiceId: 1, SaleInvoiceInvoiceNo: 1, SaleInvoiceOnDate: 1, SaleInvoiceRoundOffAmount: 1, SaleInvoiceTotalBillAmount: 1, SaleInvoiceTotalDiscountAmount: 1, SaleInvoiceTotalItems: 1, SaleInvoiceTotalQty: 1, SaleInvoiceTotalTaxAmount: 1, SaleItemId: 1, SaleTaxTypeCompositeRate: 1, SaleTaxTypeId: 1, SaleTaxTypeTaxName: 1, SaleTaxTypeTaxType: 1, SalesmanId: 1, SalesmanSalesmanName: 1, TaxAmount: 1, Units: 1 }, SalePaymentDetails: { CardAmount: 1, CashAmount: 1, MixAmount: 1, PayMode: 1, SalePaymentDetailCustomerId: 1, SalePaymentDetailId: 1, SalePaymentDetailInvoiceNo: 1, SalePaymentDetailOnDate: 1, SalePaymentDetailRoundOffAmount: 1, SalePaymentDetailTotalBillAmount: 1, SalePaymentDetailTotalDiscountAmount: 1, SalePaymentDetailTotalItems: 1, SalePaymentDetailTotalQty: 1, SalePaymentDetailTotalTaxAmount: 1 }, Salesmen: { SalesmanId: 1, SalesmanName: 1 } }, Stores: { Stores: { Address: 1, City: 1, ClosingDate: 1, Gstno: 1, NoOfEmployees: 1, OpeningDate: 1, PanNo: 1, PhoneNo: 1, PinCode: 1, Status: 1, StoreCode: 1, StoreId: 1, StoreManagerName: 1, StoreManagerPhoneNo: 1, StoreName: 1 } }, Tailors: { TailorAttendances: { AttDate: 1, EntryTime: 1, Remarks: 1, Status: 1, TailorAttendanceId: 1, TailoringEmployeeId: 1, TailoringEmployeeIsWorking: 1, TailoringEmployeeJoiningDate: 1, TailoringEmployeeLeavingDate: 1, TailoringEmployeeMobileNo: 1, TailoringEmployeeStaffName: 1 }, TailoringEmployees: { IsWorking: 1, JoiningDate: 1, LeavingDate: 1, MobileNo: 1, StaffName: 1, TailoringEmployeeId: 1 }, TailoringSalaryPayments: { Amount: 1, Details: 1, PayMode: 1, PaymentDate: 1, SalaryComponet: 1, SalaryMonth: 1, TailoringEmployeeId: 1, TailoringEmployeeIsWorking: 1, TailoringEmployeeJoiningDate: 1, TailoringEmployeeLeavingDate: 1, TailoringEmployeeMobileNo: 1, TailoringEmployeeStaffName: 1, TailoringSalaryPaymentId: 1 }, TailoringStaffAdvancePayments: { Amount: 1, Details: 1, PayMode: 1, PaymentDate: 1, TailoringEmployeeId: 1, TailoringEmployeeIsWorking: 1, TailoringEmployeeJoiningDate: 1, TailoringEmployeeLeavingDate: 1, TailoringEmployeeMobileNo: 1, TailoringEmployeeStaffName: 1, TailoringStaffAdvancePaymentId: 1 }, TailoringStaffAdvanceReceipts: { Amount: 1, Details: 1, PayMode: 1, ReceiptDate: 1, TailoringEmployeeId: 1, TailoringEmployeeIsWorking: 1, TailoringEmployeeJoiningDate: 1, TailoringEmployeeLeavingDate: 1, TailoringEmployeeMobileNo: 1, TailoringEmployeeStaffName: 1, TailoringStaffAdvanceReceiptId: 1 } }, Tally: { LedgerEntries: { AmountIn: 1, AmountOut: 1, Balance: 1, EntryDate: 1, LedgerEntryId: 1, Particulars: 1, PartyAddress: 1, PartyGstNo: 1, PartyId: 1, PartyLedgerType: 1, PartyOpenningBalance: 1, PartyOpenningDate: 1, PartyPanNo: 1, PartyPartyName: 1 }, LedgerMasters: { CreatingDate: 1, LedgerMasterId: 1, LedgerType: 1, PartyAddress: 1, PartyGstNo: 1, PartyId: 1, PartyLedgerType: 1, PartyOpenningBalance: 1, PartyOpenningDate: 1, PartyPanNo: 1, PartyPartyName: 1 }, Parties: { Address: 1, GstNo: 1, LedgerType: 1, OpenningBalance: 1, OpenningDate: 1, PanNo: 1, PartyId: 1, PartyName: 1 } }, Voyager: { CardPaymentDetails: { Amount: 1, AuthCode: 1, CardPaymentDetailCardAmount: 1, CardPaymentDetailCashAmount: 1, CardPaymentDetailId: 1, CardPaymentDetailMixAmount: 1, CardPaymentDetailPayMode: 1, CardType: 1, LastDigit: 1, SaleInvoiceId: 1 }, ImportInWards: { ImportDate: 1, ImportInWardId: 1, InWardDate: 1, InWardNo: 1, InvoiceDate: 1, InvoiceNo: 1, PartyName: 1, TotalCost: 1, TotalMrpValue: 1, TotalQty: 1 }, ImportPurchases: { Barcode: 1, Cost: 1, CostValue: 1, GrnDate: 1, GrnNo: 1, ImportPurchaseId: 1, ImportTime: 1, InvoiceDate: 1, InvoiceNo: 1, IsDataConsumed: 1, IsLocal: 1, IsVatBill: 1, ItemDesc: 1, Mrp: 1, MrpValue: 1, ProductName: 1, Quantity: 1, StyleCode: 1, SupplierName: 1, TaxAmt: 1 }, ImportSaleItemWises: { Barcode: 1, BasicRate: 1, BillAmnt: 1, BrandName: 1, Cgst: 1, Discount: 1, HsnCode: 1, ImportSaleItemWiseId: 1, ImportTime: 1, InvoiceDate: 1, InvoiceNo: 1, InvoiceType: 1, IsDataConsumed: 1, ItemDesc: 1, LineTotal: 1, Mrp: 1, PaymentType: 1, ProductName: 1, Quantity: 1, RoundOff: 1, Saleman: 1, Sgst: 1, StyleCode: 1, Tax: 1 }, ImportSaleRegisters: { BasicRate: 1, BillAmnt: 1, Discount: 1, ImportSaleRegisterId: 1, ImportTime: 1, InvoiceDate: 1, InvoiceNo: 1, InvoiceType: 1, IsConsumed: 1, Mrp: 1, PaymentType: 1, Quantity: 1, RoundOff: 1, Tax: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = AprajitaRetails.Texts || (AprajitaRetails.Texts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var CardPaymentDetailsForm = /** @class */ (function (_super) {
            __extends(CardPaymentDetailsForm, _super);
            function CardPaymentDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CardPaymentDetailsForm.init) {
                    CardPaymentDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(CardPaymentDetailsForm, [
                        'SaleInvoiceId', w0,
                        'CardType', w0,
                        'Amount', w1,
                        'AuthCode', w0,
                        'LastDigit', w0
                    ]);
                }
                return _this;
            }
            CardPaymentDetailsForm.formKey = 'Voyager.CardPaymentDetails';
            return CardPaymentDetailsForm;
        }(Serenity.PrefixedContext));
        Voyager.CardPaymentDetailsForm = CardPaymentDetailsForm;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var CardPaymentDetailsRow;
        (function (CardPaymentDetailsRow) {
            CardPaymentDetailsRow.idProperty = 'CardPaymentDetailId';
            CardPaymentDetailsRow.localTextPrefix = 'Voyager.CardPaymentDetails';
            CardPaymentDetailsRow.deletePermission = 'Administration:General';
            CardPaymentDetailsRow.insertPermission = 'Administration:General';
            CardPaymentDetailsRow.readPermission = 'Administration:General';
            CardPaymentDetailsRow.updatePermission = 'Administration:General';
        })(CardPaymentDetailsRow = Voyager.CardPaymentDetailsRow || (Voyager.CardPaymentDetailsRow = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var CardPaymentDetailsService;
        (function (CardPaymentDetailsService) {
            CardPaymentDetailsService.baseUrl = 'Voyager/CardPaymentDetails';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CardPaymentDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(CardPaymentDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CardPaymentDetailsService = Voyager.CardPaymentDetailsService || (Voyager.CardPaymentDetailsService = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportInWardsForm = /** @class */ (function (_super) {
            __extends(ImportInWardsForm, _super);
            function ImportInWardsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportInWardsForm.init) {
                    ImportInWardsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(ImportInWardsForm, [
                        'InWardNo', w0,
                        'InWardDate', w1,
                        'InvoiceNo', w0,
                        'InvoiceDate', w1,
                        'PartyName', w0,
                        'TotalQty', w2,
                        'TotalMrpValue', w2,
                        'TotalCost', w2,
                        'ImportDate', w1
                    ]);
                }
                return _this;
            }
            ImportInWardsForm.formKey = 'Voyager.ImportInWards';
            return ImportInWardsForm;
        }(Serenity.PrefixedContext));
        Voyager.ImportInWardsForm = ImportInWardsForm;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportInWardsRow;
        (function (ImportInWardsRow) {
            ImportInWardsRow.idProperty = 'ImportInWardId';
            ImportInWardsRow.nameProperty = 'InWardNo';
            ImportInWardsRow.localTextPrefix = 'Voyager.ImportInWards';
            ImportInWardsRow.deletePermission = 'Administration:General';
            ImportInWardsRow.insertPermission = 'Administration:General';
            ImportInWardsRow.readPermission = 'Administration:General';
            ImportInWardsRow.updatePermission = 'Administration:General';
        })(ImportInWardsRow = Voyager.ImportInWardsRow || (Voyager.ImportInWardsRow = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportInWardsService;
        (function (ImportInWardsService) {
            ImportInWardsService.baseUrl = 'Voyager/ImportInWards';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportInWardsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportInWardsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportInWardsService = Voyager.ImportInWardsService || (Voyager.ImportInWardsService = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportPurchasesForm = /** @class */ (function (_super) {
            __extends(ImportPurchasesForm, _super);
            function ImportPurchasesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportPurchasesForm.init) {
                    ImportPurchasesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ImportPurchasesForm, [
                        'GrnNo', w0,
                        'GrnDate', w1,
                        'InvoiceNo', w0,
                        'InvoiceDate', w1,
                        'SupplierName', w0,
                        'Barcode', w0,
                        'ProductName', w0,
                        'StyleCode', w0,
                        'ItemDesc', w0,
                        'Quantity', w2,
                        'Mrp', w2,
                        'MrpValue', w2,
                        'Cost', w2,
                        'CostValue', w2,
                        'TaxAmt', w2,
                        'IsVatBill', w3,
                        'IsLocal', w3,
                        'IsDataConsumed', w3,
                        'ImportTime', w1
                    ]);
                }
                return _this;
            }
            ImportPurchasesForm.formKey = 'Voyager.ImportPurchases';
            return ImportPurchasesForm;
        }(Serenity.PrefixedContext));
        Voyager.ImportPurchasesForm = ImportPurchasesForm;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportPurchasesRow;
        (function (ImportPurchasesRow) {
            ImportPurchasesRow.idProperty = 'ImportPurchaseId';
            ImportPurchasesRow.nameProperty = 'GrnNo';
            ImportPurchasesRow.localTextPrefix = 'Voyager.ImportPurchases';
            ImportPurchasesRow.deletePermission = 'Administration:General';
            ImportPurchasesRow.insertPermission = 'Administration:General';
            ImportPurchasesRow.readPermission = 'Administration:General';
            ImportPurchasesRow.updatePermission = 'Administration:General';
        })(ImportPurchasesRow = Voyager.ImportPurchasesRow || (Voyager.ImportPurchasesRow = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportPurchasesService;
        (function (ImportPurchasesService) {
            ImportPurchasesService.baseUrl = 'Voyager/ImportPurchases';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportPurchasesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportPurchasesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportPurchasesService = Voyager.ImportPurchasesService || (Voyager.ImportPurchasesService = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleItemWisesForm = /** @class */ (function (_super) {
            __extends(ImportSaleItemWisesForm, _super);
            function ImportSaleItemWisesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportSaleItemWisesForm.init) {
                    ImportSaleItemWisesForm.init = true;
                    var s = Serenity;
                    var w0 = s.DateEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DecimalEditor;
                    var w3 = s.BooleanEditor;
                    Q.initFormType(ImportSaleItemWisesForm, [
                        'InvoiceDate', w0,
                        'InvoiceNo', w1,
                        'InvoiceType', w1,
                        'BrandName', w1,
                        'ProductName', w1,
                        'ItemDesc', w1,
                        'HsnCode', w1,
                        'Barcode', w1,
                        'StyleCode', w1,
                        'Quantity', w2,
                        'Mrp', w2,
                        'Discount', w2,
                        'BasicRate', w2,
                        'Tax', w2,
                        'Sgst', w2,
                        'Cgst', w2,
                        'LineTotal', w2,
                        'RoundOff', w2,
                        'BillAmnt', w2,
                        'PaymentType', w1,
                        'Saleman', w1,
                        'IsDataConsumed', w3,
                        'ImportTime', w0
                    ]);
                }
                return _this;
            }
            ImportSaleItemWisesForm.formKey = 'Voyager.ImportSaleItemWises';
            return ImportSaleItemWisesForm;
        }(Serenity.PrefixedContext));
        Voyager.ImportSaleItemWisesForm = ImportSaleItemWisesForm;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleItemWisesRow;
        (function (ImportSaleItemWisesRow) {
            ImportSaleItemWisesRow.idProperty = 'ImportSaleItemWiseId';
            ImportSaleItemWisesRow.nameProperty = 'InvoiceNo';
            ImportSaleItemWisesRow.localTextPrefix = 'Voyager.ImportSaleItemWises';
            ImportSaleItemWisesRow.deletePermission = 'Administration:General';
            ImportSaleItemWisesRow.insertPermission = 'Administration:General';
            ImportSaleItemWisesRow.readPermission = 'Administration:General';
            ImportSaleItemWisesRow.updatePermission = 'Administration:General';
        })(ImportSaleItemWisesRow = Voyager.ImportSaleItemWisesRow || (Voyager.ImportSaleItemWisesRow = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleItemWisesService;
        (function (ImportSaleItemWisesService) {
            ImportSaleItemWisesService.baseUrl = 'Voyager/ImportSaleItemWises';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportSaleItemWisesService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportSaleItemWisesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportSaleItemWisesService = Voyager.ImportSaleItemWisesService || (Voyager.ImportSaleItemWisesService = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleRegistersForm = /** @class */ (function (_super) {
            __extends(ImportSaleRegistersForm, _super);
            function ImportSaleRegistersForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ImportSaleRegistersForm.init) {
                    ImportSaleRegistersForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.DateEditor;
                    Q.initFormType(ImportSaleRegistersForm, [
                        'InvoiceNo', w0,
                        'InvoiceType', w0,
                        'InvoiceDate', w0,
                        'Quantity', w1,
                        'Mrp', w1,
                        'Discount', w1,
                        'BasicRate', w1,
                        'Tax', w1,
                        'RoundOff', w1,
                        'BillAmnt', w1,
                        'PaymentType', w0,
                        'IsConsumed', w2,
                        'ImportTime', w3
                    ]);
                }
                return _this;
            }
            ImportSaleRegistersForm.formKey = 'Voyager.ImportSaleRegisters';
            return ImportSaleRegistersForm;
        }(Serenity.PrefixedContext));
        Voyager.ImportSaleRegistersForm = ImportSaleRegistersForm;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleRegistersRow;
        (function (ImportSaleRegistersRow) {
            ImportSaleRegistersRow.idProperty = 'ImportSaleRegisterId';
            ImportSaleRegistersRow.nameProperty = 'InvoiceNo';
            ImportSaleRegistersRow.localTextPrefix = 'Voyager.ImportSaleRegisters';
            ImportSaleRegistersRow.deletePermission = 'Administration:General';
            ImportSaleRegistersRow.insertPermission = 'Administration:General';
            ImportSaleRegistersRow.readPermission = 'Administration:General';
            ImportSaleRegistersRow.updatePermission = 'Administration:General';
        })(ImportSaleRegistersRow = Voyager.ImportSaleRegistersRow || (Voyager.ImportSaleRegistersRow = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleRegistersService;
        (function (ImportSaleRegistersService) {
            ImportSaleRegistersService.baseUrl = 'Voyager/ImportSaleRegisters';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ImportSaleRegistersService[x] = function (r, s, o) {
                    return Q.serviceRequest(ImportSaleRegistersService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ImportSaleRegistersService = Voyager.ImportSaleRegistersService || (Voyager.ImportSaleRegistersService = {}));
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = AprajitaRetails.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = AprajitaRetails.LanguageList || (AprajitaRetails.LanguageList = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var AprajitaRetails;
(function (AprajitaRetails) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('AprajitaRetails');
        Serenity.EntityDialog.defaultLanguageList = AprajitaRetails.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = AprajitaRetails.ScriptInitialization || (AprajitaRetails.ScriptInitialization = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInBanksDialog = /** @class */ (function (_super) {
            __extends(CashInBanksDialog, _super);
            function CashInBanksDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.CashInBanksForm(_this.idPrefix);
                return _this;
            }
            CashInBanksDialog.prototype.getFormKey = function () { return Accounts.CashInBanksForm.formKey; };
            CashInBanksDialog.prototype.getIdProperty = function () { return Accounts.CashInBanksRow.idProperty; };
            CashInBanksDialog.prototype.getLocalTextPrefix = function () { return Accounts.CashInBanksRow.localTextPrefix; };
            CashInBanksDialog.prototype.getService = function () { return Accounts.CashInBanksService.baseUrl; };
            CashInBanksDialog.prototype.getDeletePermission = function () { return Accounts.CashInBanksRow.deletePermission; };
            CashInBanksDialog.prototype.getInsertPermission = function () { return Accounts.CashInBanksRow.insertPermission; };
            CashInBanksDialog.prototype.getUpdatePermission = function () { return Accounts.CashInBanksRow.updatePermission; };
            CashInBanksDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CashInBanksDialog);
            return CashInBanksDialog;
        }(Serenity.EntityDialog));
        Accounts.CashInBanksDialog = CashInBanksDialog;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInBanksGrid = /** @class */ (function (_super) {
            __extends(CashInBanksGrid, _super);
            function CashInBanksGrid(container) {
                return _super.call(this, container) || this;
            }
            CashInBanksGrid.prototype.getColumnsKey = function () { return 'Accounts.CashInBanks'; };
            CashInBanksGrid.prototype.getDialogType = function () { return Accounts.CashInBanksDialog; };
            CashInBanksGrid.prototype.getIdProperty = function () { return Accounts.CashInBanksRow.idProperty; };
            CashInBanksGrid.prototype.getInsertPermission = function () { return Accounts.CashInBanksRow.insertPermission; };
            CashInBanksGrid.prototype.getLocalTextPrefix = function () { return Accounts.CashInBanksRow.localTextPrefix; };
            CashInBanksGrid.prototype.getService = function () { return Accounts.CashInBanksService.baseUrl; };
            CashInBanksGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashInBanksGrid);
            return CashInBanksGrid;
        }(Serenity.EntityGrid));
        Accounts.CashInBanksGrid = CashInBanksGrid;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInHandsDialog = /** @class */ (function (_super) {
            __extends(CashInHandsDialog, _super);
            function CashInHandsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.CashInHandsForm(_this.idPrefix);
                return _this;
            }
            CashInHandsDialog.prototype.getFormKey = function () { return Accounts.CashInHandsForm.formKey; };
            CashInHandsDialog.prototype.getIdProperty = function () { return Accounts.CashInHandsRow.idProperty; };
            CashInHandsDialog.prototype.getLocalTextPrefix = function () { return Accounts.CashInHandsRow.localTextPrefix; };
            CashInHandsDialog.prototype.getService = function () { return Accounts.CashInHandsService.baseUrl; };
            CashInHandsDialog.prototype.getDeletePermission = function () { return Accounts.CashInHandsRow.deletePermission; };
            CashInHandsDialog.prototype.getInsertPermission = function () { return Accounts.CashInHandsRow.insertPermission; };
            CashInHandsDialog.prototype.getUpdatePermission = function () { return Accounts.CashInHandsRow.updatePermission; };
            CashInHandsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CashInHandsDialog);
            return CashInHandsDialog;
        }(Serenity.EntityDialog));
        Accounts.CashInHandsDialog = CashInHandsDialog;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var CashInHandsGrid = /** @class */ (function (_super) {
            __extends(CashInHandsGrid, _super);
            function CashInHandsGrid(container) {
                return _super.call(this, container) || this;
            }
            CashInHandsGrid.prototype.getColumnsKey = function () { return 'Accounts.CashInHands'; };
            CashInHandsGrid.prototype.getDialogType = function () { return Accounts.CashInHandsDialog; };
            CashInHandsGrid.prototype.getIdProperty = function () { return Accounts.CashInHandsRow.idProperty; };
            CashInHandsGrid.prototype.getInsertPermission = function () { return Accounts.CashInHandsRow.insertPermission; };
            CashInHandsGrid.prototype.getLocalTextPrefix = function () { return Accounts.CashInHandsRow.localTextPrefix; };
            CashInHandsGrid.prototype.getService = function () { return Accounts.CashInHandsService.baseUrl; };
            CashInHandsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashInHandsGrid);
            return CashInHandsGrid;
        }(Serenity.EntityGrid));
        Accounts.CashInHandsGrid = CashInHandsGrid;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var PurchaseTaxTypesDialog = /** @class */ (function (_super) {
            __extends(PurchaseTaxTypesDialog, _super);
            function PurchaseTaxTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.PurchaseTaxTypesForm(_this.idPrefix);
                return _this;
            }
            PurchaseTaxTypesDialog.prototype.getFormKey = function () { return Accounts.PurchaseTaxTypesForm.formKey; };
            PurchaseTaxTypesDialog.prototype.getIdProperty = function () { return Accounts.PurchaseTaxTypesRow.idProperty; };
            PurchaseTaxTypesDialog.prototype.getLocalTextPrefix = function () { return Accounts.PurchaseTaxTypesRow.localTextPrefix; };
            PurchaseTaxTypesDialog.prototype.getNameProperty = function () { return Accounts.PurchaseTaxTypesRow.nameProperty; };
            PurchaseTaxTypesDialog.prototype.getService = function () { return Accounts.PurchaseTaxTypesService.baseUrl; };
            PurchaseTaxTypesDialog.prototype.getDeletePermission = function () { return Accounts.PurchaseTaxTypesRow.deletePermission; };
            PurchaseTaxTypesDialog.prototype.getInsertPermission = function () { return Accounts.PurchaseTaxTypesRow.insertPermission; };
            PurchaseTaxTypesDialog.prototype.getUpdatePermission = function () { return Accounts.PurchaseTaxTypesRow.updatePermission; };
            PurchaseTaxTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTaxTypesDialog);
            return PurchaseTaxTypesDialog;
        }(Serenity.EntityDialog));
        Accounts.PurchaseTaxTypesDialog = PurchaseTaxTypesDialog;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var PurchaseTaxTypesGrid = /** @class */ (function (_super) {
            __extends(PurchaseTaxTypesGrid, _super);
            function PurchaseTaxTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseTaxTypesGrid.prototype.getColumnsKey = function () { return 'Accounts.PurchaseTaxTypes'; };
            PurchaseTaxTypesGrid.prototype.getDialogType = function () { return Accounts.PurchaseTaxTypesDialog; };
            PurchaseTaxTypesGrid.prototype.getIdProperty = function () { return Accounts.PurchaseTaxTypesRow.idProperty; };
            PurchaseTaxTypesGrid.prototype.getInsertPermission = function () { return Accounts.PurchaseTaxTypesRow.insertPermission; };
            PurchaseTaxTypesGrid.prototype.getLocalTextPrefix = function () { return Accounts.PurchaseTaxTypesRow.localTextPrefix; };
            PurchaseTaxTypesGrid.prototype.getService = function () { return Accounts.PurchaseTaxTypesService.baseUrl; };
            PurchaseTaxTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseTaxTypesGrid);
            return PurchaseTaxTypesGrid;
        }(Serenity.EntityGrid));
        Accounts.PurchaseTaxTypesGrid = PurchaseTaxTypesGrid;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SaleTaxTypesDialog = /** @class */ (function (_super) {
            __extends(SaleTaxTypesDialog, _super);
            function SaleTaxTypesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.SaleTaxTypesForm(_this.idPrefix);
                return _this;
            }
            SaleTaxTypesDialog.prototype.getFormKey = function () { return Accounts.SaleTaxTypesForm.formKey; };
            SaleTaxTypesDialog.prototype.getIdProperty = function () { return Accounts.SaleTaxTypesRow.idProperty; };
            SaleTaxTypesDialog.prototype.getLocalTextPrefix = function () { return Accounts.SaleTaxTypesRow.localTextPrefix; };
            SaleTaxTypesDialog.prototype.getNameProperty = function () { return Accounts.SaleTaxTypesRow.nameProperty; };
            SaleTaxTypesDialog.prototype.getService = function () { return Accounts.SaleTaxTypesService.baseUrl; };
            SaleTaxTypesDialog.prototype.getDeletePermission = function () { return Accounts.SaleTaxTypesRow.deletePermission; };
            SaleTaxTypesDialog.prototype.getInsertPermission = function () { return Accounts.SaleTaxTypesRow.insertPermission; };
            SaleTaxTypesDialog.prototype.getUpdatePermission = function () { return Accounts.SaleTaxTypesRow.updatePermission; };
            SaleTaxTypesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleTaxTypesDialog);
            return SaleTaxTypesDialog;
        }(Serenity.EntityDialog));
        Accounts.SaleTaxTypesDialog = SaleTaxTypesDialog;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SaleTaxTypesGrid = /** @class */ (function (_super) {
            __extends(SaleTaxTypesGrid, _super);
            function SaleTaxTypesGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleTaxTypesGrid.prototype.getColumnsKey = function () { return 'Accounts.SaleTaxTypes'; };
            SaleTaxTypesGrid.prototype.getDialogType = function () { return Accounts.SaleTaxTypesDialog; };
            SaleTaxTypesGrid.prototype.getIdProperty = function () { return Accounts.SaleTaxTypesRow.idProperty; };
            SaleTaxTypesGrid.prototype.getInsertPermission = function () { return Accounts.SaleTaxTypesRow.insertPermission; };
            SaleTaxTypesGrid.prototype.getLocalTextPrefix = function () { return Accounts.SaleTaxTypesRow.localTextPrefix; };
            SaleTaxTypesGrid.prototype.getService = function () { return Accounts.SaleTaxTypesService.baseUrl; };
            SaleTaxTypesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleTaxTypesGrid);
            return SaleTaxTypesGrid;
        }(Serenity.EntityGrid));
        Accounts.SaleTaxTypesGrid = SaleTaxTypesGrid;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SuspenseAccountsDialog = /** @class */ (function (_super) {
            __extends(SuspenseAccountsDialog, _super);
            function SuspenseAccountsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.SuspenseAccountsForm(_this.idPrefix);
                return _this;
            }
            SuspenseAccountsDialog.prototype.getFormKey = function () { return Accounts.SuspenseAccountsForm.formKey; };
            SuspenseAccountsDialog.prototype.getIdProperty = function () { return Accounts.SuspenseAccountsRow.idProperty; };
            SuspenseAccountsDialog.prototype.getLocalTextPrefix = function () { return Accounts.SuspenseAccountsRow.localTextPrefix; };
            SuspenseAccountsDialog.prototype.getNameProperty = function () { return Accounts.SuspenseAccountsRow.nameProperty; };
            SuspenseAccountsDialog.prototype.getService = function () { return Accounts.SuspenseAccountsService.baseUrl; };
            SuspenseAccountsDialog.prototype.getDeletePermission = function () { return Accounts.SuspenseAccountsRow.deletePermission; };
            SuspenseAccountsDialog.prototype.getInsertPermission = function () { return Accounts.SuspenseAccountsRow.insertPermission; };
            SuspenseAccountsDialog.prototype.getUpdatePermission = function () { return Accounts.SuspenseAccountsRow.updatePermission; };
            SuspenseAccountsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SuspenseAccountsDialog);
            return SuspenseAccountsDialog;
        }(Serenity.EntityDialog));
        Accounts.SuspenseAccountsDialog = SuspenseAccountsDialog;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var SuspenseAccountsGrid = /** @class */ (function (_super) {
            __extends(SuspenseAccountsGrid, _super);
            function SuspenseAccountsGrid(container) {
                return _super.call(this, container) || this;
            }
            SuspenseAccountsGrid.prototype.getColumnsKey = function () { return 'Accounts.SuspenseAccounts'; };
            SuspenseAccountsGrid.prototype.getDialogType = function () { return Accounts.SuspenseAccountsDialog; };
            SuspenseAccountsGrid.prototype.getIdProperty = function () { return Accounts.SuspenseAccountsRow.idProperty; };
            SuspenseAccountsGrid.prototype.getInsertPermission = function () { return Accounts.SuspenseAccountsRow.insertPermission; };
            SuspenseAccountsGrid.prototype.getLocalTextPrefix = function () { return Accounts.SuspenseAccountsRow.localTextPrefix; };
            SuspenseAccountsGrid.prototype.getService = function () { return Accounts.SuspenseAccountsService.baseUrl; };
            SuspenseAccountsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SuspenseAccountsGrid);
            return SuspenseAccountsGrid;
        }(Serenity.EntityGrid));
        Accounts.SuspenseAccountsGrid = SuspenseAccountsGrid;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var TranscationModesDialog = /** @class */ (function (_super) {
            __extends(TranscationModesDialog, _super);
            function TranscationModesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Accounts.TranscationModesForm(_this.idPrefix);
                return _this;
            }
            TranscationModesDialog.prototype.getFormKey = function () { return Accounts.TranscationModesForm.formKey; };
            TranscationModesDialog.prototype.getIdProperty = function () { return Accounts.TranscationModesRow.idProperty; };
            TranscationModesDialog.prototype.getLocalTextPrefix = function () { return Accounts.TranscationModesRow.localTextPrefix; };
            TranscationModesDialog.prototype.getNameProperty = function () { return Accounts.TranscationModesRow.nameProperty; };
            TranscationModesDialog.prototype.getService = function () { return Accounts.TranscationModesService.baseUrl; };
            TranscationModesDialog.prototype.getDeletePermission = function () { return Accounts.TranscationModesRow.deletePermission; };
            TranscationModesDialog.prototype.getInsertPermission = function () { return Accounts.TranscationModesRow.insertPermission; };
            TranscationModesDialog.prototype.getUpdatePermission = function () { return Accounts.TranscationModesRow.updatePermission; };
            TranscationModesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TranscationModesDialog);
            return TranscationModesDialog;
        }(Serenity.EntityDialog));
        Accounts.TranscationModesDialog = TranscationModesDialog;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Accounts;
    (function (Accounts) {
        var TranscationModesGrid = /** @class */ (function (_super) {
            __extends(TranscationModesGrid, _super);
            function TranscationModesGrid(container) {
                return _super.call(this, container) || this;
            }
            TranscationModesGrid.prototype.getColumnsKey = function () { return 'Accounts.TranscationModes'; };
            TranscationModesGrid.prototype.getDialogType = function () { return Accounts.TranscationModesDialog; };
            TranscationModesGrid.prototype.getIdProperty = function () { return Accounts.TranscationModesRow.idProperty; };
            TranscationModesGrid.prototype.getInsertPermission = function () { return Accounts.TranscationModesRow.insertPermission; };
            TranscationModesGrid.prototype.getLocalTextPrefix = function () { return Accounts.TranscationModesRow.localTextPrefix; };
            TranscationModesGrid.prototype.getService = function () { return Accounts.TranscationModesService.baseUrl; };
            TranscationModesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranscationModesGrid);
            return TranscationModesGrid;
        }(Serenity.EntityGrid));
        Accounts.TranscationModesGrid = TranscationModesGrid;
    })(Accounts = AprajitaRetails.Accounts || (AprajitaRetails.Accounts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var SergenPanel = /** @class */ (function (_super) {
            __extends(SergenPanel, _super);
            function SergenPanel(container) {
                var _this = _super.call(this, container) || this;
                var vm = new Vue({
                    el: $('<div/>').appendTo(_this.element)[0],
                    data: {
                        connection: "",
                        connections: [],
                        tables: [],
                        generate: {
                            Row: true,
                            Service: true,
                            UI: true
                        }
                    },
                    methods: {
                        generateCode: function (table) {
                            if (!table.Identifier) {
                                Q.notifyError("Identifier cannot be empty!");
                                return;
                            }
                            if (!table.Module) {
                                Q.notifyError("Module cannot be empty!");
                                return;
                            }
                            Administration.SergenService.Generate({
                                ConnectionKey: this.connection,
                                Table: table,
                                GenerateOptions: this.generate
                            }, function (r) {
                                Q.notifySuccess("Code for selected table is generated. You'll need to rebuild your project.");
                            });
                        }
                    },
                    watch: {
                        connection: function (val) {
                            if (!val || !val.length)
                                vm.tables = [];
                            else
                                Administration.SergenService.ListTables({
                                    ConnectionKey: val
                                }, function (response) { return vm.tables = response.Entities; });
                        }
                    },
                    template: Q.getTemplate('Administration.SergenPanel')
                });
                Administration.SergenService.ListConnections({}, function (response) { return vm.connections = response.Entities; });
                return _this;
            }
            return SergenPanel;
        }(Serenity.Widget));
        Administration.SergenPanel = SergenPanel;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = AprajitaRetails.Administration || (AprajitaRetails.Administration = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var AccountNumbersDialog = /** @class */ (function (_super) {
            __extends(AccountNumbersDialog, _super);
            function AccountNumbersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banking.AccountNumbersForm(_this.idPrefix);
                return _this;
            }
            AccountNumbersDialog.prototype.getFormKey = function () { return Banking.AccountNumbersForm.formKey; };
            AccountNumbersDialog.prototype.getIdProperty = function () { return Banking.AccountNumbersRow.idProperty; };
            AccountNumbersDialog.prototype.getLocalTextPrefix = function () { return Banking.AccountNumbersRow.localTextPrefix; };
            AccountNumbersDialog.prototype.getNameProperty = function () { return Banking.AccountNumbersRow.nameProperty; };
            AccountNumbersDialog.prototype.getService = function () { return Banking.AccountNumbersService.baseUrl; };
            AccountNumbersDialog.prototype.getDeletePermission = function () { return Banking.AccountNumbersRow.deletePermission; };
            AccountNumbersDialog.prototype.getInsertPermission = function () { return Banking.AccountNumbersRow.insertPermission; };
            AccountNumbersDialog.prototype.getUpdatePermission = function () { return Banking.AccountNumbersRow.updatePermission; };
            AccountNumbersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountNumbersDialog);
            return AccountNumbersDialog;
        }(Serenity.EntityDialog));
        Banking.AccountNumbersDialog = AccountNumbersDialog;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var AccountNumbersGrid = /** @class */ (function (_super) {
            __extends(AccountNumbersGrid, _super);
            function AccountNumbersGrid(container) {
                return _super.call(this, container) || this;
            }
            AccountNumbersGrid.prototype.getColumnsKey = function () { return 'Banking.AccountNumbers'; };
            AccountNumbersGrid.prototype.getDialogType = function () { return Banking.AccountNumbersDialog; };
            AccountNumbersGrid.prototype.getIdProperty = function () { return Banking.AccountNumbersRow.idProperty; };
            AccountNumbersGrid.prototype.getInsertPermission = function () { return Banking.AccountNumbersRow.insertPermission; };
            AccountNumbersGrid.prototype.getLocalTextPrefix = function () { return Banking.AccountNumbersRow.localTextPrefix; };
            AccountNumbersGrid.prototype.getService = function () { return Banking.AccountNumbersService.baseUrl; };
            AccountNumbersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AccountNumbersGrid);
            return AccountNumbersGrid;
        }(Serenity.EntityGrid));
        Banking.AccountNumbersGrid = AccountNumbersGrid;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankDepositsDialog = /** @class */ (function (_super) {
            __extends(BankDepositsDialog, _super);
            function BankDepositsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banking.BankDepositsForm(_this.idPrefix);
                return _this;
            }
            BankDepositsDialog.prototype.getFormKey = function () { return Banking.BankDepositsForm.formKey; };
            BankDepositsDialog.prototype.getIdProperty = function () { return Banking.BankDepositsRow.idProperty; };
            BankDepositsDialog.prototype.getLocalTextPrefix = function () { return Banking.BankDepositsRow.localTextPrefix; };
            BankDepositsDialog.prototype.getNameProperty = function () { return Banking.BankDepositsRow.nameProperty; };
            BankDepositsDialog.prototype.getService = function () { return Banking.BankDepositsService.baseUrl; };
            BankDepositsDialog.prototype.getDeletePermission = function () { return Banking.BankDepositsRow.deletePermission; };
            BankDepositsDialog.prototype.getInsertPermission = function () { return Banking.BankDepositsRow.insertPermission; };
            BankDepositsDialog.prototype.getUpdatePermission = function () { return Banking.BankDepositsRow.updatePermission; };
            BankDepositsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BankDepositsDialog);
            return BankDepositsDialog;
        }(Serenity.EntityDialog));
        Banking.BankDepositsDialog = BankDepositsDialog;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankDepositsGrid = /** @class */ (function (_super) {
            __extends(BankDepositsGrid, _super);
            function BankDepositsGrid(container) {
                return _super.call(this, container) || this;
            }
            BankDepositsGrid.prototype.getColumnsKey = function () { return 'Banking.BankDeposits'; };
            BankDepositsGrid.prototype.getDialogType = function () { return Banking.BankDepositsDialog; };
            BankDepositsGrid.prototype.getIdProperty = function () { return Banking.BankDepositsRow.idProperty; };
            BankDepositsGrid.prototype.getInsertPermission = function () { return Banking.BankDepositsRow.insertPermission; };
            BankDepositsGrid.prototype.getLocalTextPrefix = function () { return Banking.BankDepositsRow.localTextPrefix; };
            BankDepositsGrid.prototype.getService = function () { return Banking.BankDepositsService.baseUrl; };
            BankDepositsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankDepositsGrid);
            return BankDepositsGrid;
        }(Serenity.EntityGrid));
        Banking.BankDepositsGrid = BankDepositsGrid;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BanksDialog = /** @class */ (function (_super) {
            __extends(BanksDialog, _super);
            function BanksDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banking.BanksForm(_this.idPrefix);
                return _this;
            }
            BanksDialog.prototype.getFormKey = function () { return Banking.BanksForm.formKey; };
            BanksDialog.prototype.getIdProperty = function () { return Banking.BanksRow.idProperty; };
            BanksDialog.prototype.getLocalTextPrefix = function () { return Banking.BanksRow.localTextPrefix; };
            BanksDialog.prototype.getNameProperty = function () { return Banking.BanksRow.nameProperty; };
            BanksDialog.prototype.getService = function () { return Banking.BanksService.baseUrl; };
            BanksDialog.prototype.getDeletePermission = function () { return Banking.BanksRow.deletePermission; };
            BanksDialog.prototype.getInsertPermission = function () { return Banking.BanksRow.insertPermission; };
            BanksDialog.prototype.getUpdatePermission = function () { return Banking.BanksRow.updatePermission; };
            BanksDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BanksDialog);
            return BanksDialog;
        }(Serenity.EntityDialog));
        Banking.BanksDialog = BanksDialog;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BanksGrid = /** @class */ (function (_super) {
            __extends(BanksGrid, _super);
            function BanksGrid(container) {
                return _super.call(this, container) || this;
            }
            BanksGrid.prototype.getColumnsKey = function () { return 'Banking.Banks'; };
            BanksGrid.prototype.getDialogType = function () { return Banking.BanksDialog; };
            BanksGrid.prototype.getIdProperty = function () { return Banking.BanksRow.idProperty; };
            BanksGrid.prototype.getInsertPermission = function () { return Banking.BanksRow.insertPermission; };
            BanksGrid.prototype.getLocalTextPrefix = function () { return Banking.BanksRow.localTextPrefix; };
            BanksGrid.prototype.getService = function () { return Banking.BanksService.baseUrl; };
            BanksGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BanksGrid);
            return BanksGrid;
        }(Serenity.EntityGrid));
        Banking.BanksGrid = BanksGrid;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankWithdrawalsDialog = /** @class */ (function (_super) {
            __extends(BankWithdrawalsDialog, _super);
            function BankWithdrawalsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banking.BankWithdrawalsForm(_this.idPrefix);
                return _this;
            }
            BankWithdrawalsDialog.prototype.getFormKey = function () { return Banking.BankWithdrawalsForm.formKey; };
            BankWithdrawalsDialog.prototype.getIdProperty = function () { return Banking.BankWithdrawalsRow.idProperty; };
            BankWithdrawalsDialog.prototype.getLocalTextPrefix = function () { return Banking.BankWithdrawalsRow.localTextPrefix; };
            BankWithdrawalsDialog.prototype.getNameProperty = function () { return Banking.BankWithdrawalsRow.nameProperty; };
            BankWithdrawalsDialog.prototype.getService = function () { return Banking.BankWithdrawalsService.baseUrl; };
            BankWithdrawalsDialog.prototype.getDeletePermission = function () { return Banking.BankWithdrawalsRow.deletePermission; };
            BankWithdrawalsDialog.prototype.getInsertPermission = function () { return Banking.BankWithdrawalsRow.insertPermission; };
            BankWithdrawalsDialog.prototype.getUpdatePermission = function () { return Banking.BankWithdrawalsRow.updatePermission; };
            BankWithdrawalsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BankWithdrawalsDialog);
            return BankWithdrawalsDialog;
        }(Serenity.EntityDialog));
        Banking.BankWithdrawalsDialog = BankWithdrawalsDialog;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var BankWithdrawalsGrid = /** @class */ (function (_super) {
            __extends(BankWithdrawalsGrid, _super);
            function BankWithdrawalsGrid(container) {
                return _super.call(this, container) || this;
            }
            BankWithdrawalsGrid.prototype.getColumnsKey = function () { return 'Banking.BankWithdrawals'; };
            BankWithdrawalsGrid.prototype.getDialogType = function () { return Banking.BankWithdrawalsDialog; };
            BankWithdrawalsGrid.prototype.getIdProperty = function () { return Banking.BankWithdrawalsRow.idProperty; };
            BankWithdrawalsGrid.prototype.getInsertPermission = function () { return Banking.BankWithdrawalsRow.insertPermission; };
            BankWithdrawalsGrid.prototype.getLocalTextPrefix = function () { return Banking.BankWithdrawalsRow.localTextPrefix; };
            BankWithdrawalsGrid.prototype.getService = function () { return Banking.BankWithdrawalsService.baseUrl; };
            BankWithdrawalsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BankWithdrawalsGrid);
            return BankWithdrawalsGrid;
        }(Serenity.EntityGrid));
        Banking.BankWithdrawalsGrid = BankWithdrawalsGrid;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var ChequesLogsDialog = /** @class */ (function (_super) {
            __extends(ChequesLogsDialog, _super);
            function ChequesLogsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Banking.ChequesLogsForm(_this.idPrefix);
                return _this;
            }
            ChequesLogsDialog.prototype.getFormKey = function () { return Banking.ChequesLogsForm.formKey; };
            ChequesLogsDialog.prototype.getIdProperty = function () { return Banking.ChequesLogsRow.idProperty; };
            ChequesLogsDialog.prototype.getLocalTextPrefix = function () { return Banking.ChequesLogsRow.localTextPrefix; };
            ChequesLogsDialog.prototype.getNameProperty = function () { return Banking.ChequesLogsRow.nameProperty; };
            ChequesLogsDialog.prototype.getService = function () { return Banking.ChequesLogsService.baseUrl; };
            ChequesLogsDialog.prototype.getDeletePermission = function () { return Banking.ChequesLogsRow.deletePermission; };
            ChequesLogsDialog.prototype.getInsertPermission = function () { return Banking.ChequesLogsRow.insertPermission; };
            ChequesLogsDialog.prototype.getUpdatePermission = function () { return Banking.ChequesLogsRow.updatePermission; };
            ChequesLogsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ChequesLogsDialog);
            return ChequesLogsDialog;
        }(Serenity.EntityDialog));
        Banking.ChequesLogsDialog = ChequesLogsDialog;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Banking;
    (function (Banking) {
        var ChequesLogsGrid = /** @class */ (function (_super) {
            __extends(ChequesLogsGrid, _super);
            function ChequesLogsGrid(container) {
                return _super.call(this, container) || this;
            }
            ChequesLogsGrid.prototype.getColumnsKey = function () { return 'Banking.ChequesLogs'; };
            ChequesLogsGrid.prototype.getDialogType = function () { return Banking.ChequesLogsDialog; };
            ChequesLogsGrid.prototype.getIdProperty = function () { return Banking.ChequesLogsRow.idProperty; };
            ChequesLogsGrid.prototype.getInsertPermission = function () { return Banking.ChequesLogsRow.insertPermission; };
            ChequesLogsGrid.prototype.getLocalTextPrefix = function () { return Banking.ChequesLogsRow.localTextPrefix; };
            ChequesLogsGrid.prototype.getService = function () { return Banking.ChequesLogsService.baseUrl; };
            ChequesLogsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ChequesLogsGrid);
            return ChequesLogsGrid;
        }(Serenity.EntityGrid));
        Banking.ChequesLogsGrid = ChequesLogsGrid;
    })(Banking = AprajitaRetails.Banking || (AprajitaRetails.Banking = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    AprajitaRetails.BasicProgressDialog = BasicProgressDialog;
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new AprajitaRetails.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = AprajitaRetails.DialogUtils || (AprajitaRetails.DialogUtils = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + x + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    AprajitaRetails.StaticTextBlock = StaticTextBlock;
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('LanguagePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = AprajitaRetails.Common || (AprajitaRetails.Common = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringBookingsDialog = /** @class */ (function (_super) {
            __extends(TalioringBookingsDialog, _super);
            function TalioringBookingsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CustomTailoring.TalioringBookingsForm(_this.idPrefix);
                return _this;
            }
            TalioringBookingsDialog.prototype.getFormKey = function () { return CustomTailoring.TalioringBookingsForm.formKey; };
            TalioringBookingsDialog.prototype.getIdProperty = function () { return CustomTailoring.TalioringBookingsRow.idProperty; };
            TalioringBookingsDialog.prototype.getLocalTextPrefix = function () { return CustomTailoring.TalioringBookingsRow.localTextPrefix; };
            TalioringBookingsDialog.prototype.getNameProperty = function () { return CustomTailoring.TalioringBookingsRow.nameProperty; };
            TalioringBookingsDialog.prototype.getService = function () { return CustomTailoring.TalioringBookingsService.baseUrl; };
            TalioringBookingsDialog.prototype.getDeletePermission = function () { return CustomTailoring.TalioringBookingsRow.deletePermission; };
            TalioringBookingsDialog.prototype.getInsertPermission = function () { return CustomTailoring.TalioringBookingsRow.insertPermission; };
            TalioringBookingsDialog.prototype.getUpdatePermission = function () { return CustomTailoring.TalioringBookingsRow.updatePermission; };
            TalioringBookingsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TalioringBookingsDialog);
            return TalioringBookingsDialog;
        }(Serenity.EntityDialog));
        CustomTailoring.TalioringBookingsDialog = TalioringBookingsDialog;
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringBookingsGrid = /** @class */ (function (_super) {
            __extends(TalioringBookingsGrid, _super);
            function TalioringBookingsGrid(container) {
                return _super.call(this, container) || this;
            }
            TalioringBookingsGrid.prototype.getColumnsKey = function () { return 'CustomTailoring.TalioringBookings'; };
            TalioringBookingsGrid.prototype.getDialogType = function () { return CustomTailoring.TalioringBookingsDialog; };
            TalioringBookingsGrid.prototype.getIdProperty = function () { return CustomTailoring.TalioringBookingsRow.idProperty; };
            TalioringBookingsGrid.prototype.getInsertPermission = function () { return CustomTailoring.TalioringBookingsRow.insertPermission; };
            TalioringBookingsGrid.prototype.getLocalTextPrefix = function () { return CustomTailoring.TalioringBookingsRow.localTextPrefix; };
            TalioringBookingsGrid.prototype.getService = function () { return CustomTailoring.TalioringBookingsService.baseUrl; };
            TalioringBookingsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TalioringBookingsGrid);
            return TalioringBookingsGrid;
        }(Serenity.EntityGrid));
        CustomTailoring.TalioringBookingsGrid = TalioringBookingsGrid;
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringDeliveriesDialog = /** @class */ (function (_super) {
            __extends(TalioringDeliveriesDialog, _super);
            function TalioringDeliveriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CustomTailoring.TalioringDeliveriesForm(_this.idPrefix);
                return _this;
            }
            TalioringDeliveriesDialog.prototype.getFormKey = function () { return CustomTailoring.TalioringDeliveriesForm.formKey; };
            TalioringDeliveriesDialog.prototype.getIdProperty = function () { return CustomTailoring.TalioringDeliveriesRow.idProperty; };
            TalioringDeliveriesDialog.prototype.getLocalTextPrefix = function () { return CustomTailoring.TalioringDeliveriesRow.localTextPrefix; };
            TalioringDeliveriesDialog.prototype.getNameProperty = function () { return CustomTailoring.TalioringDeliveriesRow.nameProperty; };
            TalioringDeliveriesDialog.prototype.getService = function () { return CustomTailoring.TalioringDeliveriesService.baseUrl; };
            TalioringDeliveriesDialog.prototype.getDeletePermission = function () { return CustomTailoring.TalioringDeliveriesRow.deletePermission; };
            TalioringDeliveriesDialog.prototype.getInsertPermission = function () { return CustomTailoring.TalioringDeliveriesRow.insertPermission; };
            TalioringDeliveriesDialog.prototype.getUpdatePermission = function () { return CustomTailoring.TalioringDeliveriesRow.updatePermission; };
            TalioringDeliveriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TalioringDeliveriesDialog);
            return TalioringDeliveriesDialog;
        }(Serenity.EntityDialog));
        CustomTailoring.TalioringDeliveriesDialog = TalioringDeliveriesDialog;
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var CustomTailoring;
    (function (CustomTailoring) {
        var TalioringDeliveriesGrid = /** @class */ (function (_super) {
            __extends(TalioringDeliveriesGrid, _super);
            function TalioringDeliveriesGrid(container) {
                return _super.call(this, container) || this;
            }
            TalioringDeliveriesGrid.prototype.getColumnsKey = function () { return 'CustomTailoring.TalioringDeliveries'; };
            TalioringDeliveriesGrid.prototype.getDialogType = function () { return CustomTailoring.TalioringDeliveriesDialog; };
            TalioringDeliveriesGrid.prototype.getIdProperty = function () { return CustomTailoring.TalioringDeliveriesRow.idProperty; };
            TalioringDeliveriesGrid.prototype.getInsertPermission = function () { return CustomTailoring.TalioringDeliveriesRow.insertPermission; };
            TalioringDeliveriesGrid.prototype.getLocalTextPrefix = function () { return CustomTailoring.TalioringDeliveriesRow.localTextPrefix; };
            TalioringDeliveriesGrid.prototype.getService = function () { return CustomTailoring.TalioringDeliveriesService.baseUrl; };
            TalioringDeliveriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TalioringDeliveriesGrid);
            return TalioringDeliveriesGrid;
        }(Serenity.EntityGrid));
        CustomTailoring.TalioringDeliveriesGrid = TalioringDeliveriesGrid;
    })(CustomTailoring = AprajitaRetails.CustomTailoring || (AprajitaRetails.CustomTailoring = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DueRecoverdsDialog = /** @class */ (function (_super) {
            __extends(DueRecoverdsDialog, _super);
            function DueRecoverdsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Dues.DueRecoverdsForm(_this.idPrefix);
                return _this;
            }
            DueRecoverdsDialog.prototype.getFormKey = function () { return Dues.DueRecoverdsForm.formKey; };
            DueRecoverdsDialog.prototype.getIdProperty = function () { return Dues.DueRecoverdsRow.idProperty; };
            DueRecoverdsDialog.prototype.getLocalTextPrefix = function () { return Dues.DueRecoverdsRow.localTextPrefix; };
            DueRecoverdsDialog.prototype.getNameProperty = function () { return Dues.DueRecoverdsRow.nameProperty; };
            DueRecoverdsDialog.prototype.getService = function () { return Dues.DueRecoverdsService.baseUrl; };
            DueRecoverdsDialog.prototype.getDeletePermission = function () { return Dues.DueRecoverdsRow.deletePermission; };
            DueRecoverdsDialog.prototype.getInsertPermission = function () { return Dues.DueRecoverdsRow.insertPermission; };
            DueRecoverdsDialog.prototype.getUpdatePermission = function () { return Dues.DueRecoverdsRow.updatePermission; };
            DueRecoverdsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DueRecoverdsDialog);
            return DueRecoverdsDialog;
        }(Serenity.EntityDialog));
        Dues.DueRecoverdsDialog = DueRecoverdsDialog;
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DueRecoverdsGrid = /** @class */ (function (_super) {
            __extends(DueRecoverdsGrid, _super);
            function DueRecoverdsGrid(container) {
                return _super.call(this, container) || this;
            }
            DueRecoverdsGrid.prototype.getColumnsKey = function () { return 'Dues.DueRecoverds'; };
            DueRecoverdsGrid.prototype.getDialogType = function () { return Dues.DueRecoverdsDialog; };
            DueRecoverdsGrid.prototype.getIdProperty = function () { return Dues.DueRecoverdsRow.idProperty; };
            DueRecoverdsGrid.prototype.getInsertPermission = function () { return Dues.DueRecoverdsRow.insertPermission; };
            DueRecoverdsGrid.prototype.getLocalTextPrefix = function () { return Dues.DueRecoverdsRow.localTextPrefix; };
            DueRecoverdsGrid.prototype.getService = function () { return Dues.DueRecoverdsService.baseUrl; };
            DueRecoverdsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DueRecoverdsGrid);
            return DueRecoverdsGrid;
        }(Serenity.EntityGrid));
        Dues.DueRecoverdsGrid = DueRecoverdsGrid;
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DuesListsDialog = /** @class */ (function (_super) {
            __extends(DuesListsDialog, _super);
            function DuesListsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Dues.DuesListsForm(_this.idPrefix);
                return _this;
            }
            DuesListsDialog.prototype.getFormKey = function () { return Dues.DuesListsForm.formKey; };
            DuesListsDialog.prototype.getIdProperty = function () { return Dues.DuesListsRow.idProperty; };
            DuesListsDialog.prototype.getLocalTextPrefix = function () { return Dues.DuesListsRow.localTextPrefix; };
            DuesListsDialog.prototype.getService = function () { return Dues.DuesListsService.baseUrl; };
            DuesListsDialog.prototype.getDeletePermission = function () { return Dues.DuesListsRow.deletePermission; };
            DuesListsDialog.prototype.getInsertPermission = function () { return Dues.DuesListsRow.insertPermission; };
            DuesListsDialog.prototype.getUpdatePermission = function () { return Dues.DuesListsRow.updatePermission; };
            DuesListsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DuesListsDialog);
            return DuesListsDialog;
        }(Serenity.EntityDialog));
        Dues.DuesListsDialog = DuesListsDialog;
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Dues;
    (function (Dues) {
        var DuesListsGrid = /** @class */ (function (_super) {
            __extends(DuesListsGrid, _super);
            function DuesListsGrid(container) {
                return _super.call(this, container) || this;
            }
            DuesListsGrid.prototype.getColumnsKey = function () { return 'Dues.DuesLists'; };
            DuesListsGrid.prototype.getDialogType = function () { return Dues.DuesListsDialog; };
            DuesListsGrid.prototype.getIdProperty = function () { return Dues.DuesListsRow.idProperty; };
            DuesListsGrid.prototype.getInsertPermission = function () { return Dues.DuesListsRow.insertPermission; };
            DuesListsGrid.prototype.getLocalTextPrefix = function () { return Dues.DuesListsRow.localTextPrefix; };
            DuesListsGrid.prototype.getService = function () { return Dues.DuesListsService.baseUrl; };
            DuesListsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DuesListsGrid);
            return DuesListsGrid;
        }(Serenity.EntityGrid));
        Dues.DuesListsGrid = DuesListsGrid;
    })(Dues = AprajitaRetails.Dues || (AprajitaRetails.Dues = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var CashPaymentsDialog = /** @class */ (function (_super) {
            __extends(CashPaymentsDialog, _super);
            function CashPaymentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.CashPaymentsForm(_this.idPrefix);
                return _this;
            }
            CashPaymentsDialog.prototype.getFormKey = function () { return Expenses.CashPaymentsForm.formKey; };
            CashPaymentsDialog.prototype.getIdProperty = function () { return Expenses.CashPaymentsRow.idProperty; };
            CashPaymentsDialog.prototype.getLocalTextPrefix = function () { return Expenses.CashPaymentsRow.localTextPrefix; };
            CashPaymentsDialog.prototype.getNameProperty = function () { return Expenses.CashPaymentsRow.nameProperty; };
            CashPaymentsDialog.prototype.getService = function () { return Expenses.CashPaymentsService.baseUrl; };
            CashPaymentsDialog.prototype.getDeletePermission = function () { return Expenses.CashPaymentsRow.deletePermission; };
            CashPaymentsDialog.prototype.getInsertPermission = function () { return Expenses.CashPaymentsRow.insertPermission; };
            CashPaymentsDialog.prototype.getUpdatePermission = function () { return Expenses.CashPaymentsRow.updatePermission; };
            CashPaymentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CashPaymentsDialog);
            return CashPaymentsDialog;
        }(Serenity.EntityDialog));
        Expenses.CashPaymentsDialog = CashPaymentsDialog;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var CashPaymentsGrid = /** @class */ (function (_super) {
            __extends(CashPaymentsGrid, _super);
            function CashPaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            CashPaymentsGrid.prototype.getColumnsKey = function () { return 'Expenses.CashPayments'; };
            CashPaymentsGrid.prototype.getDialogType = function () { return Expenses.CashPaymentsDialog; };
            CashPaymentsGrid.prototype.getIdProperty = function () { return Expenses.CashPaymentsRow.idProperty; };
            CashPaymentsGrid.prototype.getInsertPermission = function () { return Expenses.CashPaymentsRow.insertPermission; };
            CashPaymentsGrid.prototype.getLocalTextPrefix = function () { return Expenses.CashPaymentsRow.localTextPrefix; };
            CashPaymentsGrid.prototype.getService = function () { return Expenses.CashPaymentsService.baseUrl; };
            CashPaymentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashPaymentsGrid);
            return CashPaymentsGrid;
        }(Serenity.EntityGrid));
        Expenses.CashPaymentsGrid = CashPaymentsGrid;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var ExpensesDialog = /** @class */ (function (_super) {
            __extends(ExpensesDialog, _super);
            function ExpensesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.ExpensesForm(_this.idPrefix);
                return _this;
            }
            ExpensesDialog.prototype.getFormKey = function () { return Expenses.ExpensesForm.formKey; };
            ExpensesDialog.prototype.getIdProperty = function () { return Expenses.ExpensesRow.idProperty; };
            ExpensesDialog.prototype.getLocalTextPrefix = function () { return Expenses.ExpensesRow.localTextPrefix; };
            ExpensesDialog.prototype.getNameProperty = function () { return Expenses.ExpensesRow.nameProperty; };
            ExpensesDialog.prototype.getService = function () { return Expenses.ExpensesService.baseUrl; };
            ExpensesDialog.prototype.getDeletePermission = function () { return Expenses.ExpensesRow.deletePermission; };
            ExpensesDialog.prototype.getInsertPermission = function () { return Expenses.ExpensesRow.insertPermission; };
            ExpensesDialog.prototype.getUpdatePermission = function () { return Expenses.ExpensesRow.updatePermission; };
            ExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesDialog);
            return ExpensesDialog;
        }(Serenity.EntityDialog));
        Expenses.ExpensesDialog = ExpensesDialog;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var ExpensesGrid = /** @class */ (function (_super) {
            __extends(ExpensesGrid, _super);
            function ExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            ExpensesGrid.prototype.getColumnsKey = function () { return 'Expenses.Expenses'; };
            ExpensesGrid.prototype.getDialogType = function () { return Expenses.ExpensesDialog; };
            ExpensesGrid.prototype.getIdProperty = function () { return Expenses.ExpensesRow.idProperty; };
            ExpensesGrid.prototype.getInsertPermission = function () { return Expenses.ExpensesRow.insertPermission; };
            ExpensesGrid.prototype.getLocalTextPrefix = function () { return Expenses.ExpensesRow.localTextPrefix; };
            ExpensesGrid.prototype.getService = function () { return Expenses.ExpensesService.baseUrl; };
            ExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ExpensesGrid);
            return ExpensesGrid;
        }(Serenity.EntityGrid));
        Expenses.ExpensesGrid = ExpensesGrid;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PaymentsDialog = /** @class */ (function (_super) {
            __extends(PaymentsDialog, _super);
            function PaymentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.PaymentsForm(_this.idPrefix);
                return _this;
            }
            PaymentsDialog.prototype.getFormKey = function () { return Expenses.PaymentsForm.formKey; };
            PaymentsDialog.prototype.getIdProperty = function () { return Expenses.PaymentsRow.idProperty; };
            PaymentsDialog.prototype.getLocalTextPrefix = function () { return Expenses.PaymentsRow.localTextPrefix; };
            PaymentsDialog.prototype.getNameProperty = function () { return Expenses.PaymentsRow.nameProperty; };
            PaymentsDialog.prototype.getService = function () { return Expenses.PaymentsService.baseUrl; };
            PaymentsDialog.prototype.getDeletePermission = function () { return Expenses.PaymentsRow.deletePermission; };
            PaymentsDialog.prototype.getInsertPermission = function () { return Expenses.PaymentsRow.insertPermission; };
            PaymentsDialog.prototype.getUpdatePermission = function () { return Expenses.PaymentsRow.updatePermission; };
            PaymentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PaymentsDialog);
            return PaymentsDialog;
        }(Serenity.EntityDialog));
        Expenses.PaymentsDialog = PaymentsDialog;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PaymentsGrid = /** @class */ (function (_super) {
            __extends(PaymentsGrid, _super);
            function PaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            PaymentsGrid.prototype.getColumnsKey = function () { return 'Expenses.Payments'; };
            PaymentsGrid.prototype.getDialogType = function () { return Expenses.PaymentsDialog; };
            PaymentsGrid.prototype.getIdProperty = function () { return Expenses.PaymentsRow.idProperty; };
            PaymentsGrid.prototype.getInsertPermission = function () { return Expenses.PaymentsRow.insertPermission; };
            PaymentsGrid.prototype.getLocalTextPrefix = function () { return Expenses.PaymentsRow.localTextPrefix; };
            PaymentsGrid.prototype.getService = function () { return Expenses.PaymentsService.baseUrl; };
            PaymentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PaymentsGrid);
            return PaymentsGrid;
        }(Serenity.EntityGrid));
        Expenses.PaymentsGrid = PaymentsGrid;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PettyCashExpensesDialog = /** @class */ (function (_super) {
            __extends(PettyCashExpensesDialog, _super);
            function PettyCashExpensesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Expenses.PettyCashExpensesForm(_this.idPrefix);
                return _this;
            }
            PettyCashExpensesDialog.prototype.getFormKey = function () { return Expenses.PettyCashExpensesForm.formKey; };
            PettyCashExpensesDialog.prototype.getIdProperty = function () { return Expenses.PettyCashExpensesRow.idProperty; };
            PettyCashExpensesDialog.prototype.getLocalTextPrefix = function () { return Expenses.PettyCashExpensesRow.localTextPrefix; };
            PettyCashExpensesDialog.prototype.getNameProperty = function () { return Expenses.PettyCashExpensesRow.nameProperty; };
            PettyCashExpensesDialog.prototype.getService = function () { return Expenses.PettyCashExpensesService.baseUrl; };
            PettyCashExpensesDialog.prototype.getDeletePermission = function () { return Expenses.PettyCashExpensesRow.deletePermission; };
            PettyCashExpensesDialog.prototype.getInsertPermission = function () { return Expenses.PettyCashExpensesRow.insertPermission; };
            PettyCashExpensesDialog.prototype.getUpdatePermission = function () { return Expenses.PettyCashExpensesRow.updatePermission; };
            PettyCashExpensesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PettyCashExpensesDialog);
            return PettyCashExpensesDialog;
        }(Serenity.EntityDialog));
        Expenses.PettyCashExpensesDialog = PettyCashExpensesDialog;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Expenses;
    (function (Expenses) {
        var PettyCashExpensesGrid = /** @class */ (function (_super) {
            __extends(PettyCashExpensesGrid, _super);
            function PettyCashExpensesGrid(container) {
                return _super.call(this, container) || this;
            }
            PettyCashExpensesGrid.prototype.getColumnsKey = function () { return 'Expenses.PettyCashExpenses'; };
            PettyCashExpensesGrid.prototype.getDialogType = function () { return Expenses.PettyCashExpensesDialog; };
            PettyCashExpensesGrid.prototype.getIdProperty = function () { return Expenses.PettyCashExpensesRow.idProperty; };
            PettyCashExpensesGrid.prototype.getInsertPermission = function () { return Expenses.PettyCashExpensesRow.insertPermission; };
            PettyCashExpensesGrid.prototype.getLocalTextPrefix = function () { return Expenses.PettyCashExpensesRow.localTextPrefix; };
            PettyCashExpensesGrid.prototype.getService = function () { return Expenses.PettyCashExpensesService.baseUrl; };
            PettyCashExpensesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PettyCashExpensesGrid);
            return PettyCashExpensesGrid;
        }(Serenity.EntityGrid));
        Expenses.PettyCashExpensesGrid = PettyCashExpensesGrid;
    })(Expenses = AprajitaRetails.Expenses || (AprajitaRetails.Expenses = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var AttendancesDialog = /** @class */ (function (_super) {
            __extends(AttendancesDialog, _super);
            function AttendancesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.AttendancesForm(_this.idPrefix);
                return _this;
            }
            AttendancesDialog.prototype.getFormKey = function () { return PayRoll.AttendancesForm.formKey; };
            AttendancesDialog.prototype.getIdProperty = function () { return PayRoll.AttendancesRow.idProperty; };
            AttendancesDialog.prototype.getLocalTextPrefix = function () { return PayRoll.AttendancesRow.localTextPrefix; };
            AttendancesDialog.prototype.getNameProperty = function () { return PayRoll.AttendancesRow.nameProperty; };
            AttendancesDialog.prototype.getService = function () { return PayRoll.AttendancesService.baseUrl; };
            AttendancesDialog.prototype.getDeletePermission = function () { return PayRoll.AttendancesRow.deletePermission; };
            AttendancesDialog.prototype.getInsertPermission = function () { return PayRoll.AttendancesRow.insertPermission; };
            AttendancesDialog.prototype.getUpdatePermission = function () { return PayRoll.AttendancesRow.updatePermission; };
            AttendancesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendancesDialog);
            return AttendancesDialog;
        }(Serenity.EntityDialog));
        PayRoll.AttendancesDialog = AttendancesDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var AttendancesGrid = /** @class */ (function (_super) {
            __extends(AttendancesGrid, _super);
            function AttendancesGrid(container) {
                return _super.call(this, container) || this;
            }
            AttendancesGrid.prototype.getColumnsKey = function () { return 'PayRoll.Attendances'; };
            AttendancesGrid.prototype.getDialogType = function () { return PayRoll.AttendancesDialog; };
            AttendancesGrid.prototype.getIdProperty = function () { return PayRoll.AttendancesRow.idProperty; };
            AttendancesGrid.prototype.getInsertPermission = function () { return PayRoll.AttendancesRow.insertPermission; };
            AttendancesGrid.prototype.getLocalTextPrefix = function () { return PayRoll.AttendancesRow.localTextPrefix; };
            AttendancesGrid.prototype.getService = function () { return PayRoll.AttendancesService.baseUrl; };
            AttendancesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AttendancesGrid);
            return AttendancesGrid;
        }(Serenity.EntityGrid));
        PayRoll.AttendancesGrid = AttendancesGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var CurrentSalariesDialog = /** @class */ (function (_super) {
            __extends(CurrentSalariesDialog, _super);
            function CurrentSalariesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.CurrentSalariesForm(_this.idPrefix);
                return _this;
            }
            CurrentSalariesDialog.prototype.getFormKey = function () { return PayRoll.CurrentSalariesForm.formKey; };
            CurrentSalariesDialog.prototype.getIdProperty = function () { return PayRoll.CurrentSalariesRow.idProperty; };
            CurrentSalariesDialog.prototype.getLocalTextPrefix = function () { return PayRoll.CurrentSalariesRow.localTextPrefix; };
            CurrentSalariesDialog.prototype.getService = function () { return PayRoll.CurrentSalariesService.baseUrl; };
            CurrentSalariesDialog.prototype.getDeletePermission = function () { return PayRoll.CurrentSalariesRow.deletePermission; };
            CurrentSalariesDialog.prototype.getInsertPermission = function () { return PayRoll.CurrentSalariesRow.insertPermission; };
            CurrentSalariesDialog.prototype.getUpdatePermission = function () { return PayRoll.CurrentSalariesRow.updatePermission; };
            CurrentSalariesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrentSalariesDialog);
            return CurrentSalariesDialog;
        }(Serenity.EntityDialog));
        PayRoll.CurrentSalariesDialog = CurrentSalariesDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var CurrentSalariesGrid = /** @class */ (function (_super) {
            __extends(CurrentSalariesGrid, _super);
            function CurrentSalariesGrid(container) {
                return _super.call(this, container) || this;
            }
            CurrentSalariesGrid.prototype.getColumnsKey = function () { return 'PayRoll.CurrentSalaries'; };
            CurrentSalariesGrid.prototype.getDialogType = function () { return PayRoll.CurrentSalariesDialog; };
            CurrentSalariesGrid.prototype.getIdProperty = function () { return PayRoll.CurrentSalariesRow.idProperty; };
            CurrentSalariesGrid.prototype.getInsertPermission = function () { return PayRoll.CurrentSalariesRow.insertPermission; };
            CurrentSalariesGrid.prototype.getLocalTextPrefix = function () { return PayRoll.CurrentSalariesRow.localTextPrefix; };
            CurrentSalariesGrid.prototype.getService = function () { return PayRoll.CurrentSalariesService.baseUrl; };
            CurrentSalariesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CurrentSalariesGrid);
            return CurrentSalariesGrid;
        }(Serenity.EntityGrid));
        PayRoll.CurrentSalariesGrid = CurrentSalariesGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return PayRoll.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return PayRoll.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return PayRoll.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return PayRoll.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return PayRoll.EmployeesService.baseUrl; };
            EmployeesDialog.prototype.getDeletePermission = function () { return PayRoll.EmployeesRow.deletePermission; };
            EmployeesDialog.prototype.getInsertPermission = function () { return PayRoll.EmployeesRow.insertPermission; };
            EmployeesDialog.prototype.getUpdatePermission = function () { return PayRoll.EmployeesRow.updatePermission; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        PayRoll.EmployeesDialog = EmployeesDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'PayRoll.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return PayRoll.EmployeesDialog; };
            EmployeesGrid.prototype.getIdProperty = function () { return PayRoll.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getInsertPermission = function () { return PayRoll.EmployeesRow.insertPermission; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return PayRoll.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return PayRoll.EmployeesService.baseUrl; };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        PayRoll.EmployeesGrid = EmployeesGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var PaySlipsDialog = /** @class */ (function (_super) {
            __extends(PaySlipsDialog, _super);
            function PaySlipsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.PaySlipsForm(_this.idPrefix);
                return _this;
            }
            PaySlipsDialog.prototype.getFormKey = function () { return PayRoll.PaySlipsForm.formKey; };
            PaySlipsDialog.prototype.getIdProperty = function () { return PayRoll.PaySlipsRow.idProperty; };
            PaySlipsDialog.prototype.getLocalTextPrefix = function () { return PayRoll.PaySlipsRow.localTextPrefix; };
            PaySlipsDialog.prototype.getNameProperty = function () { return PayRoll.PaySlipsRow.nameProperty; };
            PaySlipsDialog.prototype.getService = function () { return PayRoll.PaySlipsService.baseUrl; };
            PaySlipsDialog.prototype.getDeletePermission = function () { return PayRoll.PaySlipsRow.deletePermission; };
            PaySlipsDialog.prototype.getInsertPermission = function () { return PayRoll.PaySlipsRow.insertPermission; };
            PaySlipsDialog.prototype.getUpdatePermission = function () { return PayRoll.PaySlipsRow.updatePermission; };
            PaySlipsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PaySlipsDialog);
            return PaySlipsDialog;
        }(Serenity.EntityDialog));
        PayRoll.PaySlipsDialog = PaySlipsDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var PaySlipsGrid = /** @class */ (function (_super) {
            __extends(PaySlipsGrid, _super);
            function PaySlipsGrid(container) {
                return _super.call(this, container) || this;
            }
            PaySlipsGrid.prototype.getColumnsKey = function () { return 'PayRoll.PaySlips'; };
            PaySlipsGrid.prototype.getDialogType = function () { return PayRoll.PaySlipsDialog; };
            PaySlipsGrid.prototype.getIdProperty = function () { return PayRoll.PaySlipsRow.idProperty; };
            PaySlipsGrid.prototype.getInsertPermission = function () { return PayRoll.PaySlipsRow.insertPermission; };
            PaySlipsGrid.prototype.getLocalTextPrefix = function () { return PayRoll.PaySlipsRow.localTextPrefix; };
            PaySlipsGrid.prototype.getService = function () { return PayRoll.PaySlipsService.baseUrl; };
            PaySlipsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PaySlipsGrid);
            return PaySlipsGrid;
        }(Serenity.EntityGrid));
        PayRoll.PaySlipsGrid = PaySlipsGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalaryPaymentsDialog = /** @class */ (function (_super) {
            __extends(SalaryPaymentsDialog, _super);
            function SalaryPaymentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.SalaryPaymentsForm(_this.idPrefix);
                return _this;
            }
            SalaryPaymentsDialog.prototype.getFormKey = function () { return PayRoll.SalaryPaymentsForm.formKey; };
            SalaryPaymentsDialog.prototype.getIdProperty = function () { return PayRoll.SalaryPaymentsRow.idProperty; };
            SalaryPaymentsDialog.prototype.getLocalTextPrefix = function () { return PayRoll.SalaryPaymentsRow.localTextPrefix; };
            SalaryPaymentsDialog.prototype.getNameProperty = function () { return PayRoll.SalaryPaymentsRow.nameProperty; };
            SalaryPaymentsDialog.prototype.getService = function () { return PayRoll.SalaryPaymentsService.baseUrl; };
            SalaryPaymentsDialog.prototype.getDeletePermission = function () { return PayRoll.SalaryPaymentsRow.deletePermission; };
            SalaryPaymentsDialog.prototype.getInsertPermission = function () { return PayRoll.SalaryPaymentsRow.insertPermission; };
            SalaryPaymentsDialog.prototype.getUpdatePermission = function () { return PayRoll.SalaryPaymentsRow.updatePermission; };
            SalaryPaymentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalaryPaymentsDialog);
            return SalaryPaymentsDialog;
        }(Serenity.EntityDialog));
        PayRoll.SalaryPaymentsDialog = SalaryPaymentsDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalaryPaymentsGrid = /** @class */ (function (_super) {
            __extends(SalaryPaymentsGrid, _super);
            function SalaryPaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            SalaryPaymentsGrid.prototype.getColumnsKey = function () { return 'PayRoll.SalaryPayments'; };
            SalaryPaymentsGrid.prototype.getDialogType = function () { return PayRoll.SalaryPaymentsDialog; };
            SalaryPaymentsGrid.prototype.getIdProperty = function () { return PayRoll.SalaryPaymentsRow.idProperty; };
            SalaryPaymentsGrid.prototype.getInsertPermission = function () { return PayRoll.SalaryPaymentsRow.insertPermission; };
            SalaryPaymentsGrid.prototype.getLocalTextPrefix = function () { return PayRoll.SalaryPaymentsRow.localTextPrefix; };
            SalaryPaymentsGrid.prototype.getService = function () { return PayRoll.SalaryPaymentsService.baseUrl; };
            SalaryPaymentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalaryPaymentsGrid);
            return SalaryPaymentsGrid;
        }(Serenity.EntityGrid));
        PayRoll.SalaryPaymentsGrid = SalaryPaymentsGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalesmenDialog = /** @class */ (function (_super) {
            __extends(SalesmenDialog, _super);
            function SalesmenDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.SalesmenForm(_this.idPrefix);
                return _this;
            }
            SalesmenDialog.prototype.getFormKey = function () { return PayRoll.SalesmenForm.formKey; };
            SalesmenDialog.prototype.getIdProperty = function () { return PayRoll.SalesmenRow.idProperty; };
            SalesmenDialog.prototype.getLocalTextPrefix = function () { return PayRoll.SalesmenRow.localTextPrefix; };
            SalesmenDialog.prototype.getNameProperty = function () { return PayRoll.SalesmenRow.nameProperty; };
            SalesmenDialog.prototype.getService = function () { return PayRoll.SalesmenService.baseUrl; };
            SalesmenDialog.prototype.getDeletePermission = function () { return PayRoll.SalesmenRow.deletePermission; };
            SalesmenDialog.prototype.getInsertPermission = function () { return PayRoll.SalesmenRow.insertPermission; };
            SalesmenDialog.prototype.getUpdatePermission = function () { return PayRoll.SalesmenRow.updatePermission; };
            SalesmenDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesmenDialog);
            return SalesmenDialog;
        }(Serenity.EntityDialog));
        PayRoll.SalesmenDialog = SalesmenDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var SalesmenGrid = /** @class */ (function (_super) {
            __extends(SalesmenGrid, _super);
            function SalesmenGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesmenGrid.prototype.getColumnsKey = function () { return 'PayRoll.Salesmen'; };
            SalesmenGrid.prototype.getDialogType = function () { return PayRoll.SalesmenDialog; };
            SalesmenGrid.prototype.getIdProperty = function () { return PayRoll.SalesmenRow.idProperty; };
            SalesmenGrid.prototype.getInsertPermission = function () { return PayRoll.SalesmenRow.insertPermission; };
            SalesmenGrid.prototype.getLocalTextPrefix = function () { return PayRoll.SalesmenRow.localTextPrefix; };
            SalesmenGrid.prototype.getService = function () { return PayRoll.SalesmenService.baseUrl; };
            SalesmenGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesmenGrid);
            return SalesmenGrid;
        }(Serenity.EntityGrid));
        PayRoll.SalesmenGrid = SalesmenGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvancePaymentsDialog = /** @class */ (function (_super) {
            __extends(StaffAdvancePaymentsDialog, _super);
            function StaffAdvancePaymentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.StaffAdvancePaymentsForm(_this.idPrefix);
                return _this;
            }
            StaffAdvancePaymentsDialog.prototype.getFormKey = function () { return PayRoll.StaffAdvancePaymentsForm.formKey; };
            StaffAdvancePaymentsDialog.prototype.getIdProperty = function () { return PayRoll.StaffAdvancePaymentsRow.idProperty; };
            StaffAdvancePaymentsDialog.prototype.getLocalTextPrefix = function () { return PayRoll.StaffAdvancePaymentsRow.localTextPrefix; };
            StaffAdvancePaymentsDialog.prototype.getNameProperty = function () { return PayRoll.StaffAdvancePaymentsRow.nameProperty; };
            StaffAdvancePaymentsDialog.prototype.getService = function () { return PayRoll.StaffAdvancePaymentsService.baseUrl; };
            StaffAdvancePaymentsDialog.prototype.getDeletePermission = function () { return PayRoll.StaffAdvancePaymentsRow.deletePermission; };
            StaffAdvancePaymentsDialog.prototype.getInsertPermission = function () { return PayRoll.StaffAdvancePaymentsRow.insertPermission; };
            StaffAdvancePaymentsDialog.prototype.getUpdatePermission = function () { return PayRoll.StaffAdvancePaymentsRow.updatePermission; };
            StaffAdvancePaymentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StaffAdvancePaymentsDialog);
            return StaffAdvancePaymentsDialog;
        }(Serenity.EntityDialog));
        PayRoll.StaffAdvancePaymentsDialog = StaffAdvancePaymentsDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvancePaymentsGrid = /** @class */ (function (_super) {
            __extends(StaffAdvancePaymentsGrid, _super);
            function StaffAdvancePaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            StaffAdvancePaymentsGrid.prototype.getColumnsKey = function () { return 'PayRoll.StaffAdvancePayments'; };
            StaffAdvancePaymentsGrid.prototype.getDialogType = function () { return PayRoll.StaffAdvancePaymentsDialog; };
            StaffAdvancePaymentsGrid.prototype.getIdProperty = function () { return PayRoll.StaffAdvancePaymentsRow.idProperty; };
            StaffAdvancePaymentsGrid.prototype.getInsertPermission = function () { return PayRoll.StaffAdvancePaymentsRow.insertPermission; };
            StaffAdvancePaymentsGrid.prototype.getLocalTextPrefix = function () { return PayRoll.StaffAdvancePaymentsRow.localTextPrefix; };
            StaffAdvancePaymentsGrid.prototype.getService = function () { return PayRoll.StaffAdvancePaymentsService.baseUrl; };
            StaffAdvancePaymentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StaffAdvancePaymentsGrid);
            return StaffAdvancePaymentsGrid;
        }(Serenity.EntityGrid));
        PayRoll.StaffAdvancePaymentsGrid = StaffAdvancePaymentsGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvanceReceiptsDialog = /** @class */ (function (_super) {
            __extends(StaffAdvanceReceiptsDialog, _super);
            function StaffAdvanceReceiptsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new PayRoll.StaffAdvanceReceiptsForm(_this.idPrefix);
                return _this;
            }
            StaffAdvanceReceiptsDialog.prototype.getFormKey = function () { return PayRoll.StaffAdvanceReceiptsForm.formKey; };
            StaffAdvanceReceiptsDialog.prototype.getIdProperty = function () { return PayRoll.StaffAdvanceReceiptsRow.idProperty; };
            StaffAdvanceReceiptsDialog.prototype.getLocalTextPrefix = function () { return PayRoll.StaffAdvanceReceiptsRow.localTextPrefix; };
            StaffAdvanceReceiptsDialog.prototype.getNameProperty = function () { return PayRoll.StaffAdvanceReceiptsRow.nameProperty; };
            StaffAdvanceReceiptsDialog.prototype.getService = function () { return PayRoll.StaffAdvanceReceiptsService.baseUrl; };
            StaffAdvanceReceiptsDialog.prototype.getDeletePermission = function () { return PayRoll.StaffAdvanceReceiptsRow.deletePermission; };
            StaffAdvanceReceiptsDialog.prototype.getInsertPermission = function () { return PayRoll.StaffAdvanceReceiptsRow.insertPermission; };
            StaffAdvanceReceiptsDialog.prototype.getUpdatePermission = function () { return PayRoll.StaffAdvanceReceiptsRow.updatePermission; };
            StaffAdvanceReceiptsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StaffAdvanceReceiptsDialog);
            return StaffAdvanceReceiptsDialog;
        }(Serenity.EntityDialog));
        PayRoll.StaffAdvanceReceiptsDialog = StaffAdvanceReceiptsDialog;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var PayRoll;
    (function (PayRoll) {
        var StaffAdvanceReceiptsGrid = /** @class */ (function (_super) {
            __extends(StaffAdvanceReceiptsGrid, _super);
            function StaffAdvanceReceiptsGrid(container) {
                return _super.call(this, container) || this;
            }
            StaffAdvanceReceiptsGrid.prototype.getColumnsKey = function () { return 'PayRoll.StaffAdvanceReceipts'; };
            StaffAdvanceReceiptsGrid.prototype.getDialogType = function () { return PayRoll.StaffAdvanceReceiptsDialog; };
            StaffAdvanceReceiptsGrid.prototype.getIdProperty = function () { return PayRoll.StaffAdvanceReceiptsRow.idProperty; };
            StaffAdvanceReceiptsGrid.prototype.getInsertPermission = function () { return PayRoll.StaffAdvanceReceiptsRow.insertPermission; };
            StaffAdvanceReceiptsGrid.prototype.getLocalTextPrefix = function () { return PayRoll.StaffAdvanceReceiptsRow.localTextPrefix; };
            StaffAdvanceReceiptsGrid.prototype.getService = function () { return PayRoll.StaffAdvanceReceiptsService.baseUrl; };
            StaffAdvanceReceiptsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StaffAdvanceReceiptsGrid);
            return StaffAdvanceReceiptsGrid;
        }(Serenity.EntityGrid));
        PayRoll.StaffAdvanceReceiptsGrid = StaffAdvanceReceiptsGrid;
    })(PayRoll = AprajitaRetails.PayRoll || (AprajitaRetails.PayRoll = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var EndOfDaysDialog = /** @class */ (function (_super) {
            __extends(EndOfDaysDialog, _super);
            function EndOfDaysDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Process.EndOfDaysForm(_this.idPrefix);
                return _this;
            }
            EndOfDaysDialog.prototype.getFormKey = function () { return Process.EndOfDaysForm.formKey; };
            EndOfDaysDialog.prototype.getIdProperty = function () { return Process.EndOfDaysRow.idProperty; };
            EndOfDaysDialog.prototype.getLocalTextPrefix = function () { return Process.EndOfDaysRow.localTextPrefix; };
            EndOfDaysDialog.prototype.getService = function () { return Process.EndOfDaysService.baseUrl; };
            EndOfDaysDialog.prototype.getDeletePermission = function () { return Process.EndOfDaysRow.deletePermission; };
            EndOfDaysDialog.prototype.getInsertPermission = function () { return Process.EndOfDaysRow.insertPermission; };
            EndOfDaysDialog.prototype.getUpdatePermission = function () { return Process.EndOfDaysRow.updatePermission; };
            EndOfDaysDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EndOfDaysDialog);
            return EndOfDaysDialog;
        }(Serenity.EntityDialog));
        Process.EndOfDaysDialog = EndOfDaysDialog;
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var EndOfDaysGrid = /** @class */ (function (_super) {
            __extends(EndOfDaysGrid, _super);
            function EndOfDaysGrid(container) {
                return _super.call(this, container) || this;
            }
            EndOfDaysGrid.prototype.getColumnsKey = function () { return 'Process.EndOfDays'; };
            EndOfDaysGrid.prototype.getDialogType = function () { return Process.EndOfDaysDialog; };
            EndOfDaysGrid.prototype.getIdProperty = function () { return Process.EndOfDaysRow.idProperty; };
            EndOfDaysGrid.prototype.getInsertPermission = function () { return Process.EndOfDaysRow.insertPermission; };
            EndOfDaysGrid.prototype.getLocalTextPrefix = function () { return Process.EndOfDaysRow.localTextPrefix; };
            EndOfDaysGrid.prototype.getService = function () { return Process.EndOfDaysService.baseUrl; };
            EndOfDaysGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EndOfDaysGrid);
            return EndOfDaysGrid;
        }(Serenity.EntityGrid));
        Process.EndOfDaysGrid = EndOfDaysGrid;
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var MonthEndsDialog = /** @class */ (function (_super) {
            __extends(MonthEndsDialog, _super);
            function MonthEndsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Process.MonthEndsForm(_this.idPrefix);
                return _this;
            }
            MonthEndsDialog.prototype.getFormKey = function () { return Process.MonthEndsForm.formKey; };
            MonthEndsDialog.prototype.getIdProperty = function () { return Process.MonthEndsRow.idProperty; };
            MonthEndsDialog.prototype.getLocalTextPrefix = function () { return Process.MonthEndsRow.localTextPrefix; };
            MonthEndsDialog.prototype.getService = function () { return Process.MonthEndsService.baseUrl; };
            MonthEndsDialog.prototype.getDeletePermission = function () { return Process.MonthEndsRow.deletePermission; };
            MonthEndsDialog.prototype.getInsertPermission = function () { return Process.MonthEndsRow.insertPermission; };
            MonthEndsDialog.prototype.getUpdatePermission = function () { return Process.MonthEndsRow.updatePermission; };
            MonthEndsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MonthEndsDialog);
            return MonthEndsDialog;
        }(Serenity.EntityDialog));
        Process.MonthEndsDialog = MonthEndsDialog;
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Process;
    (function (Process) {
        var MonthEndsGrid = /** @class */ (function (_super) {
            __extends(MonthEndsGrid, _super);
            function MonthEndsGrid(container) {
                return _super.call(this, container) || this;
            }
            MonthEndsGrid.prototype.getColumnsKey = function () { return 'Process.MonthEnds'; };
            MonthEndsGrid.prototype.getDialogType = function () { return Process.MonthEndsDialog; };
            MonthEndsGrid.prototype.getIdProperty = function () { return Process.MonthEndsRow.idProperty; };
            MonthEndsGrid.prototype.getInsertPermission = function () { return Process.MonthEndsRow.insertPermission; };
            MonthEndsGrid.prototype.getLocalTextPrefix = function () { return Process.MonthEndsRow.localTextPrefix; };
            MonthEndsGrid.prototype.getService = function () { return Process.MonthEndsService.baseUrl; };
            MonthEndsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MonthEndsGrid);
            return MonthEndsGrid;
        }(Serenity.EntityGrid));
        Process.MonthEndsGrid = MonthEndsGrid;
    })(Process = AprajitaRetails.Process || (AprajitaRetails.Process = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var BrandsDialog = /** @class */ (function (_super) {
            __extends(BrandsDialog, _super);
            function BrandsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Product.BrandsForm(_this.idPrefix);
                return _this;
            }
            BrandsDialog.prototype.getFormKey = function () { return Product.BrandsForm.formKey; };
            BrandsDialog.prototype.getIdProperty = function () { return Product.BrandsRow.idProperty; };
            BrandsDialog.prototype.getLocalTextPrefix = function () { return Product.BrandsRow.localTextPrefix; };
            BrandsDialog.prototype.getNameProperty = function () { return Product.BrandsRow.nameProperty; };
            BrandsDialog.prototype.getService = function () { return Product.BrandsService.baseUrl; };
            BrandsDialog.prototype.getDeletePermission = function () { return Product.BrandsRow.deletePermission; };
            BrandsDialog.prototype.getInsertPermission = function () { return Product.BrandsRow.insertPermission; };
            BrandsDialog.prototype.getUpdatePermission = function () { return Product.BrandsRow.updatePermission; };
            BrandsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandsDialog);
            return BrandsDialog;
        }(Serenity.EntityDialog));
        Product.BrandsDialog = BrandsDialog;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var BrandsGrid = /** @class */ (function (_super) {
            __extends(BrandsGrid, _super);
            function BrandsGrid(container) {
                return _super.call(this, container) || this;
            }
            BrandsGrid.prototype.getColumnsKey = function () { return 'Product.Brands'; };
            BrandsGrid.prototype.getDialogType = function () { return Product.BrandsDialog; };
            BrandsGrid.prototype.getIdProperty = function () { return Product.BrandsRow.idProperty; };
            BrandsGrid.prototype.getInsertPermission = function () { return Product.BrandsRow.insertPermission; };
            BrandsGrid.prototype.getLocalTextPrefix = function () { return Product.BrandsRow.localTextPrefix; };
            BrandsGrid.prototype.getService = function () { return Product.BrandsService.baseUrl; };
            BrandsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandsGrid);
            return BrandsGrid;
        }(Serenity.EntityGrid));
        Product.BrandsGrid = BrandsGrid;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var CategoriesDialog = /** @class */ (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Product.CategoriesForm(_this.idPrefix);
                return _this;
            }
            CategoriesDialog.prototype.getFormKey = function () { return Product.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return Product.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return Product.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return Product.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return Product.CategoriesService.baseUrl; };
            CategoriesDialog.prototype.getDeletePermission = function () { return Product.CategoriesRow.deletePermission; };
            CategoriesDialog.prototype.getInsertPermission = function () { return Product.CategoriesRow.insertPermission; };
            CategoriesDialog.prototype.getUpdatePermission = function () { return Product.CategoriesRow.updatePermission; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        Product.CategoriesDialog = CategoriesDialog;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'Product.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return Product.CategoriesDialog; };
            CategoriesGrid.prototype.getIdProperty = function () { return Product.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getInsertPermission = function () { return Product.CategoriesRow.insertPermission; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return Product.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return Product.CategoriesService.baseUrl; };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        Product.CategoriesGrid = CategoriesGrid;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var ProductItemsDialog = /** @class */ (function (_super) {
            __extends(ProductItemsDialog, _super);
            function ProductItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Product.ProductItemsForm(_this.idPrefix);
                return _this;
            }
            ProductItemsDialog.prototype.getFormKey = function () { return Product.ProductItemsForm.formKey; };
            ProductItemsDialog.prototype.getIdProperty = function () { return Product.ProductItemsRow.idProperty; };
            ProductItemsDialog.prototype.getLocalTextPrefix = function () { return Product.ProductItemsRow.localTextPrefix; };
            ProductItemsDialog.prototype.getNameProperty = function () { return Product.ProductItemsRow.nameProperty; };
            ProductItemsDialog.prototype.getService = function () { return Product.ProductItemsService.baseUrl; };
            ProductItemsDialog.prototype.getDeletePermission = function () { return Product.ProductItemsRow.deletePermission; };
            ProductItemsDialog.prototype.getInsertPermission = function () { return Product.ProductItemsRow.insertPermission; };
            ProductItemsDialog.prototype.getUpdatePermission = function () { return Product.ProductItemsRow.updatePermission; };
            ProductItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductItemsDialog);
            return ProductItemsDialog;
        }(Serenity.EntityDialog));
        Product.ProductItemsDialog = ProductItemsDialog;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var ProductItemsGrid = /** @class */ (function (_super) {
            __extends(ProductItemsGrid, _super);
            function ProductItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductItemsGrid.prototype.getColumnsKey = function () { return 'Product.ProductItems'; };
            ProductItemsGrid.prototype.getDialogType = function () { return Product.ProductItemsDialog; };
            ProductItemsGrid.prototype.getIdProperty = function () { return Product.ProductItemsRow.idProperty; };
            ProductItemsGrid.prototype.getInsertPermission = function () { return Product.ProductItemsRow.insertPermission; };
            ProductItemsGrid.prototype.getLocalTextPrefix = function () { return Product.ProductItemsRow.localTextPrefix; };
            ProductItemsGrid.prototype.getService = function () { return Product.ProductItemsService.baseUrl; };
            ProductItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductItemsGrid);
            return ProductItemsGrid;
        }(Serenity.EntityGrid));
        Product.ProductItemsGrid = ProductItemsGrid;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var StocksDialog = /** @class */ (function (_super) {
            __extends(StocksDialog, _super);
            function StocksDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Product.StocksForm(_this.idPrefix);
                return _this;
            }
            StocksDialog.prototype.getFormKey = function () { return Product.StocksForm.formKey; };
            StocksDialog.prototype.getIdProperty = function () { return Product.StocksRow.idProperty; };
            StocksDialog.prototype.getLocalTextPrefix = function () { return Product.StocksRow.localTextPrefix; };
            StocksDialog.prototype.getService = function () { return Product.StocksService.baseUrl; };
            StocksDialog.prototype.getDeletePermission = function () { return Product.StocksRow.deletePermission; };
            StocksDialog.prototype.getInsertPermission = function () { return Product.StocksRow.insertPermission; };
            StocksDialog.prototype.getUpdatePermission = function () { return Product.StocksRow.updatePermission; };
            StocksDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StocksDialog);
            return StocksDialog;
        }(Serenity.EntityDialog));
        Product.StocksDialog = StocksDialog;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var StocksGrid = /** @class */ (function (_super) {
            __extends(StocksGrid, _super);
            function StocksGrid(container) {
                return _super.call(this, container) || this;
            }
            StocksGrid.prototype.getColumnsKey = function () { return 'Product.Stocks'; };
            StocksGrid.prototype.getDialogType = function () { return Product.StocksDialog; };
            StocksGrid.prototype.getIdProperty = function () { return Product.StocksRow.idProperty; };
            StocksGrid.prototype.getInsertPermission = function () { return Product.StocksRow.insertPermission; };
            StocksGrid.prototype.getLocalTextPrefix = function () { return Product.StocksRow.localTextPrefix; };
            StocksGrid.prototype.getService = function () { return Product.StocksService.baseUrl; };
            StocksGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StocksGrid);
            return StocksGrid;
        }(Serenity.EntityGrid));
        Product.StocksGrid = StocksGrid;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var SuppliersDialog = /** @class */ (function (_super) {
            __extends(SuppliersDialog, _super);
            function SuppliersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Product.SuppliersForm(_this.idPrefix);
                return _this;
            }
            SuppliersDialog.prototype.getFormKey = function () { return Product.SuppliersForm.formKey; };
            SuppliersDialog.prototype.getIdProperty = function () { return Product.SuppliersRow.idProperty; };
            SuppliersDialog.prototype.getLocalTextPrefix = function () { return Product.SuppliersRow.localTextPrefix; };
            SuppliersDialog.prototype.getNameProperty = function () { return Product.SuppliersRow.nameProperty; };
            SuppliersDialog.prototype.getService = function () { return Product.SuppliersService.baseUrl; };
            SuppliersDialog.prototype.getDeletePermission = function () { return Product.SuppliersRow.deletePermission; };
            SuppliersDialog.prototype.getInsertPermission = function () { return Product.SuppliersRow.insertPermission; };
            SuppliersDialog.prototype.getUpdatePermission = function () { return Product.SuppliersRow.updatePermission; };
            SuppliersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppliersDialog);
            return SuppliersDialog;
        }(Serenity.EntityDialog));
        Product.SuppliersDialog = SuppliersDialog;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Product;
    (function (Product) {
        var SuppliersGrid = /** @class */ (function (_super) {
            __extends(SuppliersGrid, _super);
            function SuppliersGrid(container) {
                return _super.call(this, container) || this;
            }
            SuppliersGrid.prototype.getColumnsKey = function () { return 'Product.Suppliers'; };
            SuppliersGrid.prototype.getDialogType = function () { return Product.SuppliersDialog; };
            SuppliersGrid.prototype.getIdProperty = function () { return Product.SuppliersRow.idProperty; };
            SuppliersGrid.prototype.getInsertPermission = function () { return Product.SuppliersRow.insertPermission; };
            SuppliersGrid.prototype.getLocalTextPrefix = function () { return Product.SuppliersRow.localTextPrefix; };
            SuppliersGrid.prototype.getService = function () { return Product.SuppliersService.baseUrl; };
            SuppliersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SuppliersGrid);
            return SuppliersGrid;
        }(Serenity.EntityGrid));
        Product.SuppliersGrid = SuppliersGrid;
    })(Product = AprajitaRetails.Product || (AprajitaRetails.Product = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var ProductPurchasesDialog = /** @class */ (function (_super) {
            __extends(ProductPurchasesDialog, _super);
            function ProductPurchasesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchases.ProductPurchasesForm(_this.idPrefix);
                return _this;
            }
            ProductPurchasesDialog.prototype.getFormKey = function () { return Purchases.ProductPurchasesForm.formKey; };
            ProductPurchasesDialog.prototype.getIdProperty = function () { return Purchases.ProductPurchasesRow.idProperty; };
            ProductPurchasesDialog.prototype.getLocalTextPrefix = function () { return Purchases.ProductPurchasesRow.localTextPrefix; };
            ProductPurchasesDialog.prototype.getNameProperty = function () { return Purchases.ProductPurchasesRow.nameProperty; };
            ProductPurchasesDialog.prototype.getService = function () { return Purchases.ProductPurchasesService.baseUrl; };
            ProductPurchasesDialog.prototype.getDeletePermission = function () { return Purchases.ProductPurchasesRow.deletePermission; };
            ProductPurchasesDialog.prototype.getInsertPermission = function () { return Purchases.ProductPurchasesRow.insertPermission; };
            ProductPurchasesDialog.prototype.getUpdatePermission = function () { return Purchases.ProductPurchasesRow.updatePermission; };
            ProductPurchasesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductPurchasesDialog);
            return ProductPurchasesDialog;
        }(Serenity.EntityDialog));
        Purchases.ProductPurchasesDialog = ProductPurchasesDialog;
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var ProductPurchasesGrid = /** @class */ (function (_super) {
            __extends(ProductPurchasesGrid, _super);
            function ProductPurchasesGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductPurchasesGrid.prototype.getColumnsKey = function () { return 'Purchases.ProductPurchases'; };
            ProductPurchasesGrid.prototype.getDialogType = function () { return Purchases.ProductPurchasesDialog; };
            ProductPurchasesGrid.prototype.getIdProperty = function () { return Purchases.ProductPurchasesRow.idProperty; };
            ProductPurchasesGrid.prototype.getInsertPermission = function () { return Purchases.ProductPurchasesRow.insertPermission; };
            ProductPurchasesGrid.prototype.getLocalTextPrefix = function () { return Purchases.ProductPurchasesRow.localTextPrefix; };
            ProductPurchasesGrid.prototype.getService = function () { return Purchases.ProductPurchasesService.baseUrl; };
            ProductPurchasesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductPurchasesGrid);
            return ProductPurchasesGrid;
        }(Serenity.EntityGrid));
        Purchases.ProductPurchasesGrid = ProductPurchasesGrid;
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var PurchaseItemsDialog = /** @class */ (function (_super) {
            __extends(PurchaseItemsDialog, _super);
            function PurchaseItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Purchases.PurchaseItemsForm(_this.idPrefix);
                return _this;
            }
            PurchaseItemsDialog.prototype.getFormKey = function () { return Purchases.PurchaseItemsForm.formKey; };
            PurchaseItemsDialog.prototype.getIdProperty = function () { return Purchases.PurchaseItemsRow.idProperty; };
            PurchaseItemsDialog.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseItemsRow.localTextPrefix; };
            PurchaseItemsDialog.prototype.getNameProperty = function () { return Purchases.PurchaseItemsRow.nameProperty; };
            PurchaseItemsDialog.prototype.getService = function () { return Purchases.PurchaseItemsService.baseUrl; };
            PurchaseItemsDialog.prototype.getDeletePermission = function () { return Purchases.PurchaseItemsRow.deletePermission; };
            PurchaseItemsDialog.prototype.getInsertPermission = function () { return Purchases.PurchaseItemsRow.insertPermission; };
            PurchaseItemsDialog.prototype.getUpdatePermission = function () { return Purchases.PurchaseItemsRow.updatePermission; };
            PurchaseItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseItemsDialog);
            return PurchaseItemsDialog;
        }(Serenity.EntityDialog));
        Purchases.PurchaseItemsDialog = PurchaseItemsDialog;
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Purchases;
    (function (Purchases) {
        var PurchaseItemsGrid = /** @class */ (function (_super) {
            __extends(PurchaseItemsGrid, _super);
            function PurchaseItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            PurchaseItemsGrid.prototype.getColumnsKey = function () { return 'Purchases.PurchaseItems'; };
            PurchaseItemsGrid.prototype.getDialogType = function () { return Purchases.PurchaseItemsDialog; };
            PurchaseItemsGrid.prototype.getIdProperty = function () { return Purchases.PurchaseItemsRow.idProperty; };
            PurchaseItemsGrid.prototype.getInsertPermission = function () { return Purchases.PurchaseItemsRow.insertPermission; };
            PurchaseItemsGrid.prototype.getLocalTextPrefix = function () { return Purchases.PurchaseItemsRow.localTextPrefix; };
            PurchaseItemsGrid.prototype.getService = function () { return Purchases.PurchaseItemsService.baseUrl; };
            PurchaseItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseItemsGrid);
            return PurchaseItemsGrid;
        }(Serenity.EntityGrid));
        Purchases.PurchaseItemsGrid = PurchaseItemsGrid;
    })(Purchases = AprajitaRetails.Purchases || (AprajitaRetails.Purchases = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var CashReceiptsDialog = /** @class */ (function (_super) {
            __extends(CashReceiptsDialog, _super);
            function CashReceiptsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Receipts.CashReceiptsForm(_this.idPrefix);
                return _this;
            }
            CashReceiptsDialog.prototype.getFormKey = function () { return Receipts.CashReceiptsForm.formKey; };
            CashReceiptsDialog.prototype.getIdProperty = function () { return Receipts.CashReceiptsRow.idProperty; };
            CashReceiptsDialog.prototype.getLocalTextPrefix = function () { return Receipts.CashReceiptsRow.localTextPrefix; };
            CashReceiptsDialog.prototype.getNameProperty = function () { return Receipts.CashReceiptsRow.nameProperty; };
            CashReceiptsDialog.prototype.getService = function () { return Receipts.CashReceiptsService.baseUrl; };
            CashReceiptsDialog.prototype.getDeletePermission = function () { return Receipts.CashReceiptsRow.deletePermission; };
            CashReceiptsDialog.prototype.getInsertPermission = function () { return Receipts.CashReceiptsRow.insertPermission; };
            CashReceiptsDialog.prototype.getUpdatePermission = function () { return Receipts.CashReceiptsRow.updatePermission; };
            CashReceiptsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CashReceiptsDialog);
            return CashReceiptsDialog;
        }(Serenity.EntityDialog));
        Receipts.CashReceiptsDialog = CashReceiptsDialog;
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var CashReceiptsGrid = /** @class */ (function (_super) {
            __extends(CashReceiptsGrid, _super);
            function CashReceiptsGrid(container) {
                return _super.call(this, container) || this;
            }
            CashReceiptsGrid.prototype.getColumnsKey = function () { return 'Receipts.CashReceipts'; };
            CashReceiptsGrid.prototype.getDialogType = function () { return Receipts.CashReceiptsDialog; };
            CashReceiptsGrid.prototype.getIdProperty = function () { return Receipts.CashReceiptsRow.idProperty; };
            CashReceiptsGrid.prototype.getInsertPermission = function () { return Receipts.CashReceiptsRow.insertPermission; };
            CashReceiptsGrid.prototype.getLocalTextPrefix = function () { return Receipts.CashReceiptsRow.localTextPrefix; };
            CashReceiptsGrid.prototype.getService = function () { return Receipts.CashReceiptsService.baseUrl; };
            CashReceiptsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CashReceiptsGrid);
            return CashReceiptsGrid;
        }(Serenity.EntityGrid));
        Receipts.CashReceiptsGrid = CashReceiptsGrid;
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var ReceiptsDialog = /** @class */ (function (_super) {
            __extends(ReceiptsDialog, _super);
            function ReceiptsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Receipts.ReceiptsForm(_this.idPrefix);
                return _this;
            }
            ReceiptsDialog.prototype.getFormKey = function () { return Receipts.ReceiptsForm.formKey; };
            ReceiptsDialog.prototype.getIdProperty = function () { return Receipts.ReceiptsRow.idProperty; };
            ReceiptsDialog.prototype.getLocalTextPrefix = function () { return Receipts.ReceiptsRow.localTextPrefix; };
            ReceiptsDialog.prototype.getNameProperty = function () { return Receipts.ReceiptsRow.nameProperty; };
            ReceiptsDialog.prototype.getService = function () { return Receipts.ReceiptsService.baseUrl; };
            ReceiptsDialog.prototype.getDeletePermission = function () { return Receipts.ReceiptsRow.deletePermission; };
            ReceiptsDialog.prototype.getInsertPermission = function () { return Receipts.ReceiptsRow.insertPermission; };
            ReceiptsDialog.prototype.getUpdatePermission = function () { return Receipts.ReceiptsRow.updatePermission; };
            ReceiptsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiptsDialog);
            return ReceiptsDialog;
        }(Serenity.EntityDialog));
        Receipts.ReceiptsDialog = ReceiptsDialog;
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Receipts;
    (function (Receipts) {
        var ReceiptsGrid = /** @class */ (function (_super) {
            __extends(ReceiptsGrid, _super);
            function ReceiptsGrid(container) {
                return _super.call(this, container) || this;
            }
            ReceiptsGrid.prototype.getColumnsKey = function () { return 'Receipts.Receipts'; };
            ReceiptsGrid.prototype.getDialogType = function () { return Receipts.ReceiptsDialog; };
            ReceiptsGrid.prototype.getIdProperty = function () { return Receipts.ReceiptsRow.idProperty; };
            ReceiptsGrid.prototype.getInsertPermission = function () { return Receipts.ReceiptsRow.insertPermission; };
            ReceiptsGrid.prototype.getLocalTextPrefix = function () { return Receipts.ReceiptsRow.localTextPrefix; };
            ReceiptsGrid.prototype.getService = function () { return Receipts.ReceiptsService.baseUrl; };
            ReceiptsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ReceiptsGrid);
            return ReceiptsGrid;
        }(Serenity.EntityGrid));
        Receipts.ReceiptsGrid = ReceiptsGrid;
    })(Receipts = AprajitaRetails.Receipts || (AprajitaRetails.Receipts = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var DailySalesDialog = /** @class */ (function (_super) {
            __extends(DailySalesDialog, _super);
            function DailySalesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.DailySalesForm(_this.idPrefix);
                return _this;
            }
            DailySalesDialog.prototype.getFormKey = function () { return Sales.DailySalesForm.formKey; };
            DailySalesDialog.prototype.getIdProperty = function () { return Sales.DailySalesRow.idProperty; };
            DailySalesDialog.prototype.getLocalTextPrefix = function () { return Sales.DailySalesRow.localTextPrefix; };
            DailySalesDialog.prototype.getNameProperty = function () { return Sales.DailySalesRow.nameProperty; };
            DailySalesDialog.prototype.getService = function () { return Sales.DailySalesService.baseUrl; };
            DailySalesDialog.prototype.getDeletePermission = function () { return Sales.DailySalesRow.deletePermission; };
            DailySalesDialog.prototype.getInsertPermission = function () { return Sales.DailySalesRow.insertPermission; };
            DailySalesDialog.prototype.getUpdatePermission = function () { return Sales.DailySalesRow.updatePermission; };
            DailySalesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], DailySalesDialog);
            return DailySalesDialog;
        }(Serenity.EntityDialog));
        Sales.DailySalesDialog = DailySalesDialog;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var DailySalesGrid = /** @class */ (function (_super) {
            __extends(DailySalesGrid, _super);
            function DailySalesGrid(container) {
                return _super.call(this, container) || this;
            }
            DailySalesGrid.prototype.getColumnsKey = function () { return 'Sales.DailySales'; };
            DailySalesGrid.prototype.getDialogType = function () { return Sales.DailySalesDialog; };
            DailySalesGrid.prototype.getIdProperty = function () { return Sales.DailySalesRow.idProperty; };
            DailySalesGrid.prototype.getInsertPermission = function () { return Sales.DailySalesRow.insertPermission; };
            DailySalesGrid.prototype.getLocalTextPrefix = function () { return Sales.DailySalesRow.localTextPrefix; };
            DailySalesGrid.prototype.getService = function () { return Sales.DailySalesService.baseUrl; };
            DailySalesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DailySalesGrid);
            return DailySalesGrid;
        }(Serenity.EntityGrid));
        Sales.DailySalesGrid = DailySalesGrid;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleInvoicesDialog = /** @class */ (function (_super) {
            __extends(SaleInvoicesDialog, _super);
            function SaleInvoicesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SaleInvoicesForm(_this.idPrefix);
                return _this;
            }
            SaleInvoicesDialog.prototype.getFormKey = function () { return Sales.SaleInvoicesForm.formKey; };
            SaleInvoicesDialog.prototype.getIdProperty = function () { return Sales.SaleInvoicesRow.idProperty; };
            SaleInvoicesDialog.prototype.getLocalTextPrefix = function () { return Sales.SaleInvoicesRow.localTextPrefix; };
            SaleInvoicesDialog.prototype.getNameProperty = function () { return Sales.SaleInvoicesRow.nameProperty; };
            SaleInvoicesDialog.prototype.getService = function () { return Sales.SaleInvoicesService.baseUrl; };
            SaleInvoicesDialog.prototype.getDeletePermission = function () { return Sales.SaleInvoicesRow.deletePermission; };
            SaleInvoicesDialog.prototype.getInsertPermission = function () { return Sales.SaleInvoicesRow.insertPermission; };
            SaleInvoicesDialog.prototype.getUpdatePermission = function () { return Sales.SaleInvoicesRow.updatePermission; };
            SaleInvoicesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleInvoicesDialog);
            return SaleInvoicesDialog;
        }(Serenity.EntityDialog));
        Sales.SaleInvoicesDialog = SaleInvoicesDialog;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleInvoicesGrid = /** @class */ (function (_super) {
            __extends(SaleInvoicesGrid, _super);
            function SaleInvoicesGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleInvoicesGrid.prototype.getColumnsKey = function () { return 'Sales.SaleInvoices'; };
            SaleInvoicesGrid.prototype.getDialogType = function () { return Sales.SaleInvoicesDialog; };
            SaleInvoicesGrid.prototype.getIdProperty = function () { return Sales.SaleInvoicesRow.idProperty; };
            SaleInvoicesGrid.prototype.getInsertPermission = function () { return Sales.SaleInvoicesRow.insertPermission; };
            SaleInvoicesGrid.prototype.getLocalTextPrefix = function () { return Sales.SaleInvoicesRow.localTextPrefix; };
            SaleInvoicesGrid.prototype.getService = function () { return Sales.SaleInvoicesService.baseUrl; };
            SaleInvoicesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleInvoicesGrid);
            return SaleInvoicesGrid;
        }(Serenity.EntityGrid));
        Sales.SaleInvoicesGrid = SaleInvoicesGrid;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleItemsDialog = /** @class */ (function (_super) {
            __extends(SaleItemsDialog, _super);
            function SaleItemsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SaleItemsForm(_this.idPrefix);
                return _this;
            }
            SaleItemsDialog.prototype.getFormKey = function () { return Sales.SaleItemsForm.formKey; };
            SaleItemsDialog.prototype.getIdProperty = function () { return Sales.SaleItemsRow.idProperty; };
            SaleItemsDialog.prototype.getLocalTextPrefix = function () { return Sales.SaleItemsRow.localTextPrefix; };
            SaleItemsDialog.prototype.getNameProperty = function () { return Sales.SaleItemsRow.nameProperty; };
            SaleItemsDialog.prototype.getService = function () { return Sales.SaleItemsService.baseUrl; };
            SaleItemsDialog.prototype.getDeletePermission = function () { return Sales.SaleItemsRow.deletePermission; };
            SaleItemsDialog.prototype.getInsertPermission = function () { return Sales.SaleItemsRow.insertPermission; };
            SaleItemsDialog.prototype.getUpdatePermission = function () { return Sales.SaleItemsRow.updatePermission; };
            SaleItemsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleItemsDialog);
            return SaleItemsDialog;
        }(Serenity.EntityDialog));
        Sales.SaleItemsDialog = SaleItemsDialog;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SaleItemsGrid = /** @class */ (function (_super) {
            __extends(SaleItemsGrid, _super);
            function SaleItemsGrid(container) {
                return _super.call(this, container) || this;
            }
            SaleItemsGrid.prototype.getColumnsKey = function () { return 'Sales.SaleItems'; };
            SaleItemsGrid.prototype.getDialogType = function () { return Sales.SaleItemsDialog; };
            SaleItemsGrid.prototype.getIdProperty = function () { return Sales.SaleItemsRow.idProperty; };
            SaleItemsGrid.prototype.getInsertPermission = function () { return Sales.SaleItemsRow.insertPermission; };
            SaleItemsGrid.prototype.getLocalTextPrefix = function () { return Sales.SaleItemsRow.localTextPrefix; };
            SaleItemsGrid.prototype.getService = function () { return Sales.SaleItemsService.baseUrl; };
            SaleItemsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SaleItemsGrid);
            return SaleItemsGrid;
        }(Serenity.EntityGrid));
        Sales.SaleItemsGrid = SaleItemsGrid;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalePaymentDetailsDialog = /** @class */ (function (_super) {
            __extends(SalePaymentDetailsDialog, _super);
            function SalePaymentDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SalePaymentDetailsForm(_this.idPrefix);
                return _this;
            }
            SalePaymentDetailsDialog.prototype.getFormKey = function () { return Sales.SalePaymentDetailsForm.formKey; };
            SalePaymentDetailsDialog.prototype.getIdProperty = function () { return Sales.SalePaymentDetailsRow.idProperty; };
            SalePaymentDetailsDialog.prototype.getLocalTextPrefix = function () { return Sales.SalePaymentDetailsRow.localTextPrefix; };
            SalePaymentDetailsDialog.prototype.getService = function () { return Sales.SalePaymentDetailsService.baseUrl; };
            SalePaymentDetailsDialog.prototype.getDeletePermission = function () { return Sales.SalePaymentDetailsRow.deletePermission; };
            SalePaymentDetailsDialog.prototype.getInsertPermission = function () { return Sales.SalePaymentDetailsRow.insertPermission; };
            SalePaymentDetailsDialog.prototype.getUpdatePermission = function () { return Sales.SalePaymentDetailsRow.updatePermission; };
            SalePaymentDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalePaymentDetailsDialog);
            return SalePaymentDetailsDialog;
        }(Serenity.EntityDialog));
        Sales.SalePaymentDetailsDialog = SalePaymentDetailsDialog;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalePaymentDetailsGrid = /** @class */ (function (_super) {
            __extends(SalePaymentDetailsGrid, _super);
            function SalePaymentDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            SalePaymentDetailsGrid.prototype.getColumnsKey = function () { return 'Sales.SalePaymentDetails'; };
            SalePaymentDetailsGrid.prototype.getDialogType = function () { return Sales.SalePaymentDetailsDialog; };
            SalePaymentDetailsGrid.prototype.getIdProperty = function () { return Sales.SalePaymentDetailsRow.idProperty; };
            SalePaymentDetailsGrid.prototype.getInsertPermission = function () { return Sales.SalePaymentDetailsRow.insertPermission; };
            SalePaymentDetailsGrid.prototype.getLocalTextPrefix = function () { return Sales.SalePaymentDetailsRow.localTextPrefix; };
            SalePaymentDetailsGrid.prototype.getService = function () { return Sales.SalePaymentDetailsService.baseUrl; };
            SalePaymentDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalePaymentDetailsGrid);
            return SalePaymentDetailsGrid;
        }(Serenity.EntityGrid));
        Sales.SalePaymentDetailsGrid = SalePaymentDetailsGrid;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalesmenDialog = /** @class */ (function (_super) {
            __extends(SalesmenDialog, _super);
            function SalesmenDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Sales.SalesmenForm(_this.idPrefix);
                return _this;
            }
            SalesmenDialog.prototype.getFormKey = function () { return Sales.SalesmenForm.formKey; };
            SalesmenDialog.prototype.getIdProperty = function () { return Sales.SalesmenRow.idProperty; };
            SalesmenDialog.prototype.getLocalTextPrefix = function () { return Sales.SalesmenRow.localTextPrefix; };
            SalesmenDialog.prototype.getNameProperty = function () { return Sales.SalesmenRow.nameProperty; };
            SalesmenDialog.prototype.getService = function () { return Sales.SalesmenService.baseUrl; };
            SalesmenDialog.prototype.getDeletePermission = function () { return Sales.SalesmenRow.deletePermission; };
            SalesmenDialog.prototype.getInsertPermission = function () { return Sales.SalesmenRow.insertPermission; };
            SalesmenDialog.prototype.getUpdatePermission = function () { return Sales.SalesmenRow.updatePermission; };
            SalesmenDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesmenDialog);
            return SalesmenDialog;
        }(Serenity.EntityDialog));
        Sales.SalesmenDialog = SalesmenDialog;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Sales;
    (function (Sales) {
        var SalesmenGrid = /** @class */ (function (_super) {
            __extends(SalesmenGrid, _super);
            function SalesmenGrid(container) {
                return _super.call(this, container) || this;
            }
            SalesmenGrid.prototype.getColumnsKey = function () { return 'Sales.Salesmen'; };
            SalesmenGrid.prototype.getDialogType = function () { return Sales.SalesmenDialog; };
            SalesmenGrid.prototype.getIdProperty = function () { return Sales.SalesmenRow.idProperty; };
            SalesmenGrid.prototype.getInsertPermission = function () { return Sales.SalesmenRow.insertPermission; };
            SalesmenGrid.prototype.getLocalTextPrefix = function () { return Sales.SalesmenRow.localTextPrefix; };
            SalesmenGrid.prototype.getService = function () { return Sales.SalesmenService.baseUrl; };
            SalesmenGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SalesmenGrid);
            return SalesmenGrid;
        }(Serenity.EntityGrid));
        Sales.SalesmenGrid = SalesmenGrid;
    })(Sales = AprajitaRetails.Sales || (AprajitaRetails.Sales = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Stores;
    (function (Stores) {
        var StoresDialog = /** @class */ (function (_super) {
            __extends(StoresDialog, _super);
            function StoresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Stores.StoresForm(_this.idPrefix);
                return _this;
            }
            StoresDialog.prototype.getFormKey = function () { return Stores.StoresForm.formKey; };
            StoresDialog.prototype.getIdProperty = function () { return Stores.StoresRow.idProperty; };
            StoresDialog.prototype.getLocalTextPrefix = function () { return Stores.StoresRow.localTextPrefix; };
            StoresDialog.prototype.getNameProperty = function () { return Stores.StoresRow.nameProperty; };
            StoresDialog.prototype.getService = function () { return Stores.StoresService.baseUrl; };
            StoresDialog.prototype.getDeletePermission = function () { return Stores.StoresRow.deletePermission; };
            StoresDialog.prototype.getInsertPermission = function () { return Stores.StoresRow.insertPermission; };
            StoresDialog.prototype.getUpdatePermission = function () { return Stores.StoresRow.updatePermission; };
            StoresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StoresDialog);
            return StoresDialog;
        }(Serenity.EntityDialog));
        Stores.StoresDialog = StoresDialog;
    })(Stores = AprajitaRetails.Stores || (AprajitaRetails.Stores = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Stores;
    (function (Stores) {
        var StoresGrid = /** @class */ (function (_super) {
            __extends(StoresGrid, _super);
            function StoresGrid(container) {
                return _super.call(this, container) || this;
            }
            StoresGrid.prototype.getColumnsKey = function () { return 'Stores.Stores'; };
            StoresGrid.prototype.getDialogType = function () { return Stores.StoresDialog; };
            StoresGrid.prototype.getIdProperty = function () { return Stores.StoresRow.idProperty; };
            StoresGrid.prototype.getInsertPermission = function () { return Stores.StoresRow.insertPermission; };
            StoresGrid.prototype.getLocalTextPrefix = function () { return Stores.StoresRow.localTextPrefix; };
            StoresGrid.prototype.getService = function () { return Stores.StoresService.baseUrl; };
            StoresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StoresGrid);
            return StoresGrid;
        }(Serenity.EntityGrid));
        Stores.StoresGrid = StoresGrid;
    })(Stores = AprajitaRetails.Stores || (AprajitaRetails.Stores = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailorAttendancesDialog = /** @class */ (function (_super) {
            __extends(TailorAttendancesDialog, _super);
            function TailorAttendancesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tailors.TailorAttendancesForm(_this.idPrefix);
                return _this;
            }
            TailorAttendancesDialog.prototype.getFormKey = function () { return Tailors.TailorAttendancesForm.formKey; };
            TailorAttendancesDialog.prototype.getIdProperty = function () { return Tailors.TailorAttendancesRow.idProperty; };
            TailorAttendancesDialog.prototype.getLocalTextPrefix = function () { return Tailors.TailorAttendancesRow.localTextPrefix; };
            TailorAttendancesDialog.prototype.getNameProperty = function () { return Tailors.TailorAttendancesRow.nameProperty; };
            TailorAttendancesDialog.prototype.getService = function () { return Tailors.TailorAttendancesService.baseUrl; };
            TailorAttendancesDialog.prototype.getDeletePermission = function () { return Tailors.TailorAttendancesRow.deletePermission; };
            TailorAttendancesDialog.prototype.getInsertPermission = function () { return Tailors.TailorAttendancesRow.insertPermission; };
            TailorAttendancesDialog.prototype.getUpdatePermission = function () { return Tailors.TailorAttendancesRow.updatePermission; };
            TailorAttendancesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TailorAttendancesDialog);
            return TailorAttendancesDialog;
        }(Serenity.EntityDialog));
        Tailors.TailorAttendancesDialog = TailorAttendancesDialog;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailorAttendancesGrid = /** @class */ (function (_super) {
            __extends(TailorAttendancesGrid, _super);
            function TailorAttendancesGrid(container) {
                return _super.call(this, container) || this;
            }
            TailorAttendancesGrid.prototype.getColumnsKey = function () { return 'Tailors.TailorAttendances'; };
            TailorAttendancesGrid.prototype.getDialogType = function () { return Tailors.TailorAttendancesDialog; };
            TailorAttendancesGrid.prototype.getIdProperty = function () { return Tailors.TailorAttendancesRow.idProperty; };
            TailorAttendancesGrid.prototype.getInsertPermission = function () { return Tailors.TailorAttendancesRow.insertPermission; };
            TailorAttendancesGrid.prototype.getLocalTextPrefix = function () { return Tailors.TailorAttendancesRow.localTextPrefix; };
            TailorAttendancesGrid.prototype.getService = function () { return Tailors.TailorAttendancesService.baseUrl; };
            TailorAttendancesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TailorAttendancesGrid);
            return TailorAttendancesGrid;
        }(Serenity.EntityGrid));
        Tailors.TailorAttendancesGrid = TailorAttendancesGrid;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringEmployeesDialog = /** @class */ (function (_super) {
            __extends(TailoringEmployeesDialog, _super);
            function TailoringEmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tailors.TailoringEmployeesForm(_this.idPrefix);
                return _this;
            }
            TailoringEmployeesDialog.prototype.getFormKey = function () { return Tailors.TailoringEmployeesForm.formKey; };
            TailoringEmployeesDialog.prototype.getIdProperty = function () { return Tailors.TailoringEmployeesRow.idProperty; };
            TailoringEmployeesDialog.prototype.getLocalTextPrefix = function () { return Tailors.TailoringEmployeesRow.localTextPrefix; };
            TailoringEmployeesDialog.prototype.getNameProperty = function () { return Tailors.TailoringEmployeesRow.nameProperty; };
            TailoringEmployeesDialog.prototype.getService = function () { return Tailors.TailoringEmployeesService.baseUrl; };
            TailoringEmployeesDialog.prototype.getDeletePermission = function () { return Tailors.TailoringEmployeesRow.deletePermission; };
            TailoringEmployeesDialog.prototype.getInsertPermission = function () { return Tailors.TailoringEmployeesRow.insertPermission; };
            TailoringEmployeesDialog.prototype.getUpdatePermission = function () { return Tailors.TailoringEmployeesRow.updatePermission; };
            TailoringEmployeesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringEmployeesDialog);
            return TailoringEmployeesDialog;
        }(Serenity.EntityDialog));
        Tailors.TailoringEmployeesDialog = TailoringEmployeesDialog;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringEmployeesGrid = /** @class */ (function (_super) {
            __extends(TailoringEmployeesGrid, _super);
            function TailoringEmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            TailoringEmployeesGrid.prototype.getColumnsKey = function () { return 'Tailors.TailoringEmployees'; };
            TailoringEmployeesGrid.prototype.getDialogType = function () { return Tailors.TailoringEmployeesDialog; };
            TailoringEmployeesGrid.prototype.getIdProperty = function () { return Tailors.TailoringEmployeesRow.idProperty; };
            TailoringEmployeesGrid.prototype.getInsertPermission = function () { return Tailors.TailoringEmployeesRow.insertPermission; };
            TailoringEmployeesGrid.prototype.getLocalTextPrefix = function () { return Tailors.TailoringEmployeesRow.localTextPrefix; };
            TailoringEmployeesGrid.prototype.getService = function () { return Tailors.TailoringEmployeesService.baseUrl; };
            TailoringEmployeesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringEmployeesGrid);
            return TailoringEmployeesGrid;
        }(Serenity.EntityGrid));
        Tailors.TailoringEmployeesGrid = TailoringEmployeesGrid;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringSalaryPaymentsDialog = /** @class */ (function (_super) {
            __extends(TailoringSalaryPaymentsDialog, _super);
            function TailoringSalaryPaymentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tailors.TailoringSalaryPaymentsForm(_this.idPrefix);
                return _this;
            }
            TailoringSalaryPaymentsDialog.prototype.getFormKey = function () { return Tailors.TailoringSalaryPaymentsForm.formKey; };
            TailoringSalaryPaymentsDialog.prototype.getIdProperty = function () { return Tailors.TailoringSalaryPaymentsRow.idProperty; };
            TailoringSalaryPaymentsDialog.prototype.getLocalTextPrefix = function () { return Tailors.TailoringSalaryPaymentsRow.localTextPrefix; };
            TailoringSalaryPaymentsDialog.prototype.getNameProperty = function () { return Tailors.TailoringSalaryPaymentsRow.nameProperty; };
            TailoringSalaryPaymentsDialog.prototype.getService = function () { return Tailors.TailoringSalaryPaymentsService.baseUrl; };
            TailoringSalaryPaymentsDialog.prototype.getDeletePermission = function () { return Tailors.TailoringSalaryPaymentsRow.deletePermission; };
            TailoringSalaryPaymentsDialog.prototype.getInsertPermission = function () { return Tailors.TailoringSalaryPaymentsRow.insertPermission; };
            TailoringSalaryPaymentsDialog.prototype.getUpdatePermission = function () { return Tailors.TailoringSalaryPaymentsRow.updatePermission; };
            TailoringSalaryPaymentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringSalaryPaymentsDialog);
            return TailoringSalaryPaymentsDialog;
        }(Serenity.EntityDialog));
        Tailors.TailoringSalaryPaymentsDialog = TailoringSalaryPaymentsDialog;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringSalaryPaymentsGrid = /** @class */ (function (_super) {
            __extends(TailoringSalaryPaymentsGrid, _super);
            function TailoringSalaryPaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            TailoringSalaryPaymentsGrid.prototype.getColumnsKey = function () { return 'Tailors.TailoringSalaryPayments'; };
            TailoringSalaryPaymentsGrid.prototype.getDialogType = function () { return Tailors.TailoringSalaryPaymentsDialog; };
            TailoringSalaryPaymentsGrid.prototype.getIdProperty = function () { return Tailors.TailoringSalaryPaymentsRow.idProperty; };
            TailoringSalaryPaymentsGrid.prototype.getInsertPermission = function () { return Tailors.TailoringSalaryPaymentsRow.insertPermission; };
            TailoringSalaryPaymentsGrid.prototype.getLocalTextPrefix = function () { return Tailors.TailoringSalaryPaymentsRow.localTextPrefix; };
            TailoringSalaryPaymentsGrid.prototype.getService = function () { return Tailors.TailoringSalaryPaymentsService.baseUrl; };
            TailoringSalaryPaymentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringSalaryPaymentsGrid);
            return TailoringSalaryPaymentsGrid;
        }(Serenity.EntityGrid));
        Tailors.TailoringSalaryPaymentsGrid = TailoringSalaryPaymentsGrid;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvancePaymentsDialog = /** @class */ (function (_super) {
            __extends(TailoringStaffAdvancePaymentsDialog, _super);
            function TailoringStaffAdvancePaymentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tailors.TailoringStaffAdvancePaymentsForm(_this.idPrefix);
                return _this;
            }
            TailoringStaffAdvancePaymentsDialog.prototype.getFormKey = function () { return Tailors.TailoringStaffAdvancePaymentsForm.formKey; };
            TailoringStaffAdvancePaymentsDialog.prototype.getIdProperty = function () { return Tailors.TailoringStaffAdvancePaymentsRow.idProperty; };
            TailoringStaffAdvancePaymentsDialog.prototype.getLocalTextPrefix = function () { return Tailors.TailoringStaffAdvancePaymentsRow.localTextPrefix; };
            TailoringStaffAdvancePaymentsDialog.prototype.getNameProperty = function () { return Tailors.TailoringStaffAdvancePaymentsRow.nameProperty; };
            TailoringStaffAdvancePaymentsDialog.prototype.getService = function () { return Tailors.TailoringStaffAdvancePaymentsService.baseUrl; };
            TailoringStaffAdvancePaymentsDialog.prototype.getDeletePermission = function () { return Tailors.TailoringStaffAdvancePaymentsRow.deletePermission; };
            TailoringStaffAdvancePaymentsDialog.prototype.getInsertPermission = function () { return Tailors.TailoringStaffAdvancePaymentsRow.insertPermission; };
            TailoringStaffAdvancePaymentsDialog.prototype.getUpdatePermission = function () { return Tailors.TailoringStaffAdvancePaymentsRow.updatePermission; };
            TailoringStaffAdvancePaymentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringStaffAdvancePaymentsDialog);
            return TailoringStaffAdvancePaymentsDialog;
        }(Serenity.EntityDialog));
        Tailors.TailoringStaffAdvancePaymentsDialog = TailoringStaffAdvancePaymentsDialog;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvancePaymentsGrid = /** @class */ (function (_super) {
            __extends(TailoringStaffAdvancePaymentsGrid, _super);
            function TailoringStaffAdvancePaymentsGrid(container) {
                return _super.call(this, container) || this;
            }
            TailoringStaffAdvancePaymentsGrid.prototype.getColumnsKey = function () { return 'Tailors.TailoringStaffAdvancePayments'; };
            TailoringStaffAdvancePaymentsGrid.prototype.getDialogType = function () { return Tailors.TailoringStaffAdvancePaymentsDialog; };
            TailoringStaffAdvancePaymentsGrid.prototype.getIdProperty = function () { return Tailors.TailoringStaffAdvancePaymentsRow.idProperty; };
            TailoringStaffAdvancePaymentsGrid.prototype.getInsertPermission = function () { return Tailors.TailoringStaffAdvancePaymentsRow.insertPermission; };
            TailoringStaffAdvancePaymentsGrid.prototype.getLocalTextPrefix = function () { return Tailors.TailoringStaffAdvancePaymentsRow.localTextPrefix; };
            TailoringStaffAdvancePaymentsGrid.prototype.getService = function () { return Tailors.TailoringStaffAdvancePaymentsService.baseUrl; };
            TailoringStaffAdvancePaymentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringStaffAdvancePaymentsGrid);
            return TailoringStaffAdvancePaymentsGrid;
        }(Serenity.EntityGrid));
        Tailors.TailoringStaffAdvancePaymentsGrid = TailoringStaffAdvancePaymentsGrid;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvanceReceiptsDialog = /** @class */ (function (_super) {
            __extends(TailoringStaffAdvanceReceiptsDialog, _super);
            function TailoringStaffAdvanceReceiptsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tailors.TailoringStaffAdvanceReceiptsForm(_this.idPrefix);
                return _this;
            }
            TailoringStaffAdvanceReceiptsDialog.prototype.getFormKey = function () { return Tailors.TailoringStaffAdvanceReceiptsForm.formKey; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getIdProperty = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.idProperty; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getLocalTextPrefix = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.localTextPrefix; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getNameProperty = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.nameProperty; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getService = function () { return Tailors.TailoringStaffAdvanceReceiptsService.baseUrl; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getDeletePermission = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.deletePermission; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getInsertPermission = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.insertPermission; };
            TailoringStaffAdvanceReceiptsDialog.prototype.getUpdatePermission = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.updatePermission; };
            TailoringStaffAdvanceReceiptsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringStaffAdvanceReceiptsDialog);
            return TailoringStaffAdvanceReceiptsDialog;
        }(Serenity.EntityDialog));
        Tailors.TailoringStaffAdvanceReceiptsDialog = TailoringStaffAdvanceReceiptsDialog;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tailors;
    (function (Tailors) {
        var TailoringStaffAdvanceReceiptsGrid = /** @class */ (function (_super) {
            __extends(TailoringStaffAdvanceReceiptsGrid, _super);
            function TailoringStaffAdvanceReceiptsGrid(container) {
                return _super.call(this, container) || this;
            }
            TailoringStaffAdvanceReceiptsGrid.prototype.getColumnsKey = function () { return 'Tailors.TailoringStaffAdvanceReceipts'; };
            TailoringStaffAdvanceReceiptsGrid.prototype.getDialogType = function () { return Tailors.TailoringStaffAdvanceReceiptsDialog; };
            TailoringStaffAdvanceReceiptsGrid.prototype.getIdProperty = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.idProperty; };
            TailoringStaffAdvanceReceiptsGrid.prototype.getInsertPermission = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.insertPermission; };
            TailoringStaffAdvanceReceiptsGrid.prototype.getLocalTextPrefix = function () { return Tailors.TailoringStaffAdvanceReceiptsRow.localTextPrefix; };
            TailoringStaffAdvanceReceiptsGrid.prototype.getService = function () { return Tailors.TailoringStaffAdvanceReceiptsService.baseUrl; };
            TailoringStaffAdvanceReceiptsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TailoringStaffAdvanceReceiptsGrid);
            return TailoringStaffAdvanceReceiptsGrid;
        }(Serenity.EntityGrid));
        Tailors.TailoringStaffAdvanceReceiptsGrid = TailoringStaffAdvanceReceiptsGrid;
    })(Tailors = AprajitaRetails.Tailors || (AprajitaRetails.Tailors = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerEntriesDialog = /** @class */ (function (_super) {
            __extends(LedgerEntriesDialog, _super);
            function LedgerEntriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tally.LedgerEntriesForm(_this.idPrefix);
                return _this;
            }
            LedgerEntriesDialog.prototype.getFormKey = function () { return Tally.LedgerEntriesForm.formKey; };
            LedgerEntriesDialog.prototype.getIdProperty = function () { return Tally.LedgerEntriesRow.idProperty; };
            LedgerEntriesDialog.prototype.getLocalTextPrefix = function () { return Tally.LedgerEntriesRow.localTextPrefix; };
            LedgerEntriesDialog.prototype.getNameProperty = function () { return Tally.LedgerEntriesRow.nameProperty; };
            LedgerEntriesDialog.prototype.getService = function () { return Tally.LedgerEntriesService.baseUrl; };
            LedgerEntriesDialog.prototype.getDeletePermission = function () { return Tally.LedgerEntriesRow.deletePermission; };
            LedgerEntriesDialog.prototype.getInsertPermission = function () { return Tally.LedgerEntriesRow.insertPermission; };
            LedgerEntriesDialog.prototype.getUpdatePermission = function () { return Tally.LedgerEntriesRow.updatePermission; };
            LedgerEntriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LedgerEntriesDialog);
            return LedgerEntriesDialog;
        }(Serenity.EntityDialog));
        Tally.LedgerEntriesDialog = LedgerEntriesDialog;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerEntriesGrid = /** @class */ (function (_super) {
            __extends(LedgerEntriesGrid, _super);
            function LedgerEntriesGrid(container) {
                return _super.call(this, container) || this;
            }
            LedgerEntriesGrid.prototype.getColumnsKey = function () { return 'Tally.LedgerEntries'; };
            LedgerEntriesGrid.prototype.getDialogType = function () { return Tally.LedgerEntriesDialog; };
            LedgerEntriesGrid.prototype.getIdProperty = function () { return Tally.LedgerEntriesRow.idProperty; };
            LedgerEntriesGrid.prototype.getInsertPermission = function () { return Tally.LedgerEntriesRow.insertPermission; };
            LedgerEntriesGrid.prototype.getLocalTextPrefix = function () { return Tally.LedgerEntriesRow.localTextPrefix; };
            LedgerEntriesGrid.prototype.getService = function () { return Tally.LedgerEntriesService.baseUrl; };
            LedgerEntriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LedgerEntriesGrid);
            return LedgerEntriesGrid;
        }(Serenity.EntityGrid));
        Tally.LedgerEntriesGrid = LedgerEntriesGrid;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerMastersDialog = /** @class */ (function (_super) {
            __extends(LedgerMastersDialog, _super);
            function LedgerMastersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tally.LedgerMastersForm(_this.idPrefix);
                return _this;
            }
            LedgerMastersDialog.prototype.getFormKey = function () { return Tally.LedgerMastersForm.formKey; };
            LedgerMastersDialog.prototype.getIdProperty = function () { return Tally.LedgerMastersRow.idProperty; };
            LedgerMastersDialog.prototype.getLocalTextPrefix = function () { return Tally.LedgerMastersRow.localTextPrefix; };
            LedgerMastersDialog.prototype.getService = function () { return Tally.LedgerMastersService.baseUrl; };
            LedgerMastersDialog.prototype.getDeletePermission = function () { return Tally.LedgerMastersRow.deletePermission; };
            LedgerMastersDialog.prototype.getInsertPermission = function () { return Tally.LedgerMastersRow.insertPermission; };
            LedgerMastersDialog.prototype.getUpdatePermission = function () { return Tally.LedgerMastersRow.updatePermission; };
            LedgerMastersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LedgerMastersDialog);
            return LedgerMastersDialog;
        }(Serenity.EntityDialog));
        Tally.LedgerMastersDialog = LedgerMastersDialog;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var LedgerMastersGrid = /** @class */ (function (_super) {
            __extends(LedgerMastersGrid, _super);
            function LedgerMastersGrid(container) {
                return _super.call(this, container) || this;
            }
            LedgerMastersGrid.prototype.getColumnsKey = function () { return 'Tally.LedgerMasters'; };
            LedgerMastersGrid.prototype.getDialogType = function () { return Tally.LedgerMastersDialog; };
            LedgerMastersGrid.prototype.getIdProperty = function () { return Tally.LedgerMastersRow.idProperty; };
            LedgerMastersGrid.prototype.getInsertPermission = function () { return Tally.LedgerMastersRow.insertPermission; };
            LedgerMastersGrid.prototype.getLocalTextPrefix = function () { return Tally.LedgerMastersRow.localTextPrefix; };
            LedgerMastersGrid.prototype.getService = function () { return Tally.LedgerMastersService.baseUrl; };
            LedgerMastersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LedgerMastersGrid);
            return LedgerMastersGrid;
        }(Serenity.EntityGrid));
        Tally.LedgerMastersGrid = LedgerMastersGrid;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var PartiesDialog = /** @class */ (function (_super) {
            __extends(PartiesDialog, _super);
            function PartiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Tally.PartiesForm(_this.idPrefix);
                return _this;
            }
            PartiesDialog.prototype.getFormKey = function () { return Tally.PartiesForm.formKey; };
            PartiesDialog.prototype.getIdProperty = function () { return Tally.PartiesRow.idProperty; };
            PartiesDialog.prototype.getLocalTextPrefix = function () { return Tally.PartiesRow.localTextPrefix; };
            PartiesDialog.prototype.getNameProperty = function () { return Tally.PartiesRow.nameProperty; };
            PartiesDialog.prototype.getService = function () { return Tally.PartiesService.baseUrl; };
            PartiesDialog.prototype.getDeletePermission = function () { return Tally.PartiesRow.deletePermission; };
            PartiesDialog.prototype.getInsertPermission = function () { return Tally.PartiesRow.insertPermission; };
            PartiesDialog.prototype.getUpdatePermission = function () { return Tally.PartiesRow.updatePermission; };
            PartiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], PartiesDialog);
            return PartiesDialog;
        }(Serenity.EntityDialog));
        Tally.PartiesDialog = PartiesDialog;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Tally;
    (function (Tally) {
        var PartiesGrid = /** @class */ (function (_super) {
            __extends(PartiesGrid, _super);
            function PartiesGrid(container) {
                return _super.call(this, container) || this;
            }
            PartiesGrid.prototype.getColumnsKey = function () { return 'Tally.Parties'; };
            PartiesGrid.prototype.getDialogType = function () { return Tally.PartiesDialog; };
            PartiesGrid.prototype.getIdProperty = function () { return Tally.PartiesRow.idProperty; };
            PartiesGrid.prototype.getInsertPermission = function () { return Tally.PartiesRow.insertPermission; };
            PartiesGrid.prototype.getLocalTextPrefix = function () { return Tally.PartiesRow.localTextPrefix; };
            PartiesGrid.prototype.getService = function () { return Tally.PartiesService.baseUrl; };
            PartiesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PartiesGrid);
            return PartiesGrid;
        }(Serenity.EntityGrid));
        Tally.PartiesGrid = PartiesGrid;
    })(Tally = AprajitaRetails.Tally || (AprajitaRetails.Tally = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var CardPaymentDetailsDialog = /** @class */ (function (_super) {
            __extends(CardPaymentDetailsDialog, _super);
            function CardPaymentDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Voyager.CardPaymentDetailsForm(_this.idPrefix);
                return _this;
            }
            CardPaymentDetailsDialog.prototype.getFormKey = function () { return Voyager.CardPaymentDetailsForm.formKey; };
            CardPaymentDetailsDialog.prototype.getIdProperty = function () { return Voyager.CardPaymentDetailsRow.idProperty; };
            CardPaymentDetailsDialog.prototype.getLocalTextPrefix = function () { return Voyager.CardPaymentDetailsRow.localTextPrefix; };
            CardPaymentDetailsDialog.prototype.getService = function () { return Voyager.CardPaymentDetailsService.baseUrl; };
            CardPaymentDetailsDialog.prototype.getDeletePermission = function () { return Voyager.CardPaymentDetailsRow.deletePermission; };
            CardPaymentDetailsDialog.prototype.getInsertPermission = function () { return Voyager.CardPaymentDetailsRow.insertPermission; };
            CardPaymentDetailsDialog.prototype.getUpdatePermission = function () { return Voyager.CardPaymentDetailsRow.updatePermission; };
            CardPaymentDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CardPaymentDetailsDialog);
            return CardPaymentDetailsDialog;
        }(Serenity.EntityDialog));
        Voyager.CardPaymentDetailsDialog = CardPaymentDetailsDialog;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var CardPaymentDetailsGrid = /** @class */ (function (_super) {
            __extends(CardPaymentDetailsGrid, _super);
            function CardPaymentDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            CardPaymentDetailsGrid.prototype.getColumnsKey = function () { return 'Voyager.CardPaymentDetails'; };
            CardPaymentDetailsGrid.prototype.getDialogType = function () { return Voyager.CardPaymentDetailsDialog; };
            CardPaymentDetailsGrid.prototype.getIdProperty = function () { return Voyager.CardPaymentDetailsRow.idProperty; };
            CardPaymentDetailsGrid.prototype.getInsertPermission = function () { return Voyager.CardPaymentDetailsRow.insertPermission; };
            CardPaymentDetailsGrid.prototype.getLocalTextPrefix = function () { return Voyager.CardPaymentDetailsRow.localTextPrefix; };
            CardPaymentDetailsGrid.prototype.getService = function () { return Voyager.CardPaymentDetailsService.baseUrl; };
            CardPaymentDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CardPaymentDetailsGrid);
            return CardPaymentDetailsGrid;
        }(Serenity.EntityGrid));
        Voyager.CardPaymentDetailsGrid = CardPaymentDetailsGrid;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportInWardsDialog = /** @class */ (function (_super) {
            __extends(ImportInWardsDialog, _super);
            function ImportInWardsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Voyager.ImportInWardsForm(_this.idPrefix);
                return _this;
            }
            ImportInWardsDialog.prototype.getFormKey = function () { return Voyager.ImportInWardsForm.formKey; };
            ImportInWardsDialog.prototype.getIdProperty = function () { return Voyager.ImportInWardsRow.idProperty; };
            ImportInWardsDialog.prototype.getLocalTextPrefix = function () { return Voyager.ImportInWardsRow.localTextPrefix; };
            ImportInWardsDialog.prototype.getNameProperty = function () { return Voyager.ImportInWardsRow.nameProperty; };
            ImportInWardsDialog.prototype.getService = function () { return Voyager.ImportInWardsService.baseUrl; };
            ImportInWardsDialog.prototype.getDeletePermission = function () { return Voyager.ImportInWardsRow.deletePermission; };
            ImportInWardsDialog.prototype.getInsertPermission = function () { return Voyager.ImportInWardsRow.insertPermission; };
            ImportInWardsDialog.prototype.getUpdatePermission = function () { return Voyager.ImportInWardsRow.updatePermission; };
            ImportInWardsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportInWardsDialog);
            return ImportInWardsDialog;
        }(Serenity.EntityDialog));
        Voyager.ImportInWardsDialog = ImportInWardsDialog;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportInWardsGrid = /** @class */ (function (_super) {
            __extends(ImportInWardsGrid, _super);
            function ImportInWardsGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportInWardsGrid.prototype.getColumnsKey = function () { return 'Voyager.ImportInWards'; };
            ImportInWardsGrid.prototype.getDialogType = function () { return Voyager.ImportInWardsDialog; };
            ImportInWardsGrid.prototype.getIdProperty = function () { return Voyager.ImportInWardsRow.idProperty; };
            ImportInWardsGrid.prototype.getInsertPermission = function () { return Voyager.ImportInWardsRow.insertPermission; };
            ImportInWardsGrid.prototype.getLocalTextPrefix = function () { return Voyager.ImportInWardsRow.localTextPrefix; };
            ImportInWardsGrid.prototype.getService = function () { return Voyager.ImportInWardsService.baseUrl; };
            ImportInWardsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportInWardsGrid);
            return ImportInWardsGrid;
        }(Serenity.EntityGrid));
        Voyager.ImportInWardsGrid = ImportInWardsGrid;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportPurchasesDialog = /** @class */ (function (_super) {
            __extends(ImportPurchasesDialog, _super);
            function ImportPurchasesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Voyager.ImportPurchasesForm(_this.idPrefix);
                return _this;
            }
            ImportPurchasesDialog.prototype.getFormKey = function () { return Voyager.ImportPurchasesForm.formKey; };
            ImportPurchasesDialog.prototype.getIdProperty = function () { return Voyager.ImportPurchasesRow.idProperty; };
            ImportPurchasesDialog.prototype.getLocalTextPrefix = function () { return Voyager.ImportPurchasesRow.localTextPrefix; };
            ImportPurchasesDialog.prototype.getNameProperty = function () { return Voyager.ImportPurchasesRow.nameProperty; };
            ImportPurchasesDialog.prototype.getService = function () { return Voyager.ImportPurchasesService.baseUrl; };
            ImportPurchasesDialog.prototype.getDeletePermission = function () { return Voyager.ImportPurchasesRow.deletePermission; };
            ImportPurchasesDialog.prototype.getInsertPermission = function () { return Voyager.ImportPurchasesRow.insertPermission; };
            ImportPurchasesDialog.prototype.getUpdatePermission = function () { return Voyager.ImportPurchasesRow.updatePermission; };
            ImportPurchasesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportPurchasesDialog);
            return ImportPurchasesDialog;
        }(Serenity.EntityDialog));
        Voyager.ImportPurchasesDialog = ImportPurchasesDialog;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportPurchasesGrid = /** @class */ (function (_super) {
            __extends(ImportPurchasesGrid, _super);
            function ImportPurchasesGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportPurchasesGrid.prototype.getColumnsKey = function () { return 'Voyager.ImportPurchases'; };
            ImportPurchasesGrid.prototype.getDialogType = function () { return Voyager.ImportPurchasesDialog; };
            ImportPurchasesGrid.prototype.getIdProperty = function () { return Voyager.ImportPurchasesRow.idProperty; };
            ImportPurchasesGrid.prototype.getInsertPermission = function () { return Voyager.ImportPurchasesRow.insertPermission; };
            ImportPurchasesGrid.prototype.getLocalTextPrefix = function () { return Voyager.ImportPurchasesRow.localTextPrefix; };
            ImportPurchasesGrid.prototype.getService = function () { return Voyager.ImportPurchasesService.baseUrl; };
            ImportPurchasesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportPurchasesGrid);
            return ImportPurchasesGrid;
        }(Serenity.EntityGrid));
        Voyager.ImportPurchasesGrid = ImportPurchasesGrid;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleItemWisesDialog = /** @class */ (function (_super) {
            __extends(ImportSaleItemWisesDialog, _super);
            function ImportSaleItemWisesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Voyager.ImportSaleItemWisesForm(_this.idPrefix);
                return _this;
            }
            ImportSaleItemWisesDialog.prototype.getFormKey = function () { return Voyager.ImportSaleItemWisesForm.formKey; };
            ImportSaleItemWisesDialog.prototype.getIdProperty = function () { return Voyager.ImportSaleItemWisesRow.idProperty; };
            ImportSaleItemWisesDialog.prototype.getLocalTextPrefix = function () { return Voyager.ImportSaleItemWisesRow.localTextPrefix; };
            ImportSaleItemWisesDialog.prototype.getNameProperty = function () { return Voyager.ImportSaleItemWisesRow.nameProperty; };
            ImportSaleItemWisesDialog.prototype.getService = function () { return Voyager.ImportSaleItemWisesService.baseUrl; };
            ImportSaleItemWisesDialog.prototype.getDeletePermission = function () { return Voyager.ImportSaleItemWisesRow.deletePermission; };
            ImportSaleItemWisesDialog.prototype.getInsertPermission = function () { return Voyager.ImportSaleItemWisesRow.insertPermission; };
            ImportSaleItemWisesDialog.prototype.getUpdatePermission = function () { return Voyager.ImportSaleItemWisesRow.updatePermission; };
            ImportSaleItemWisesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportSaleItemWisesDialog);
            return ImportSaleItemWisesDialog;
        }(Serenity.EntityDialog));
        Voyager.ImportSaleItemWisesDialog = ImportSaleItemWisesDialog;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleItemWisesGrid = /** @class */ (function (_super) {
            __extends(ImportSaleItemWisesGrid, _super);
            function ImportSaleItemWisesGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportSaleItemWisesGrid.prototype.getColumnsKey = function () { return 'Voyager.ImportSaleItemWises'; };
            ImportSaleItemWisesGrid.prototype.getDialogType = function () { return Voyager.ImportSaleItemWisesDialog; };
            ImportSaleItemWisesGrid.prototype.getIdProperty = function () { return Voyager.ImportSaleItemWisesRow.idProperty; };
            ImportSaleItemWisesGrid.prototype.getInsertPermission = function () { return Voyager.ImportSaleItemWisesRow.insertPermission; };
            ImportSaleItemWisesGrid.prototype.getLocalTextPrefix = function () { return Voyager.ImportSaleItemWisesRow.localTextPrefix; };
            ImportSaleItemWisesGrid.prototype.getService = function () { return Voyager.ImportSaleItemWisesService.baseUrl; };
            ImportSaleItemWisesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportSaleItemWisesGrid);
            return ImportSaleItemWisesGrid;
        }(Serenity.EntityGrid));
        Voyager.ImportSaleItemWisesGrid = ImportSaleItemWisesGrid;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleRegistersDialog = /** @class */ (function (_super) {
            __extends(ImportSaleRegistersDialog, _super);
            function ImportSaleRegistersDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Voyager.ImportSaleRegistersForm(_this.idPrefix);
                return _this;
            }
            ImportSaleRegistersDialog.prototype.getFormKey = function () { return Voyager.ImportSaleRegistersForm.formKey; };
            ImportSaleRegistersDialog.prototype.getIdProperty = function () { return Voyager.ImportSaleRegistersRow.idProperty; };
            ImportSaleRegistersDialog.prototype.getLocalTextPrefix = function () { return Voyager.ImportSaleRegistersRow.localTextPrefix; };
            ImportSaleRegistersDialog.prototype.getNameProperty = function () { return Voyager.ImportSaleRegistersRow.nameProperty; };
            ImportSaleRegistersDialog.prototype.getService = function () { return Voyager.ImportSaleRegistersService.baseUrl; };
            ImportSaleRegistersDialog.prototype.getDeletePermission = function () { return Voyager.ImportSaleRegistersRow.deletePermission; };
            ImportSaleRegistersDialog.prototype.getInsertPermission = function () { return Voyager.ImportSaleRegistersRow.insertPermission; };
            ImportSaleRegistersDialog.prototype.getUpdatePermission = function () { return Voyager.ImportSaleRegistersRow.updatePermission; };
            ImportSaleRegistersDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportSaleRegistersDialog);
            return ImportSaleRegistersDialog;
        }(Serenity.EntityDialog));
        Voyager.ImportSaleRegistersDialog = ImportSaleRegistersDialog;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Voyager;
    (function (Voyager) {
        var ImportSaleRegistersGrid = /** @class */ (function (_super) {
            __extends(ImportSaleRegistersGrid, _super);
            function ImportSaleRegistersGrid(container) {
                return _super.call(this, container) || this;
            }
            ImportSaleRegistersGrid.prototype.getColumnsKey = function () { return 'Voyager.ImportSaleRegisters'; };
            ImportSaleRegistersGrid.prototype.getDialogType = function () { return Voyager.ImportSaleRegistersDialog; };
            ImportSaleRegistersGrid.prototype.getIdProperty = function () { return Voyager.ImportSaleRegistersRow.idProperty; };
            ImportSaleRegistersGrid.prototype.getInsertPermission = function () { return Voyager.ImportSaleRegistersRow.insertPermission; };
            ImportSaleRegistersGrid.prototype.getLocalTextPrefix = function () { return Voyager.ImportSaleRegistersRow.localTextPrefix; };
            ImportSaleRegistersGrid.prototype.getService = function () { return Voyager.ImportSaleRegistersService.baseUrl; };
            ImportSaleRegistersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ImportSaleRegistersGrid);
            return ImportSaleRegistersGrid;
        }(Serenity.EntityGrid));
        Voyager.ImportSaleRegistersGrid = ImportSaleRegistersGrid;
    })(Voyager = AprajitaRetails.Voyager || (AprajitaRetails.Voyager = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = AprajitaRetails.Authorization || (AprajitaRetails.Authorization = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
var AprajitaRetails;
(function (AprajitaRetails) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = AprajitaRetails.Membership || (AprajitaRetails.Membership = {}));
})(AprajitaRetails || (AprajitaRetails = {}));
//# sourceMappingURL=AprajitaRetails.Web.js.map