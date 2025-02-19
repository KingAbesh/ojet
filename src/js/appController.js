/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define([
  "knockout",
  "ojs/ojmodule-element-utils",
  "ojs/ojresponsiveutils",
  "ojs/ojresponsiveknockoututils",
  "ojs/ojrouter",
  "ojs/ojarraydataprovider",
  "ojs/ojknockouttemplateutils",
  "ojs/ojmodule-element",
  "ojs/ojknockout"
], function(
  ko,
  moduleUtils,
  ResponsiveUtils,
  ResponsiveKnockoutUtils,
  Router,
  ArrayDataProvider,
  KnockoutTemplateUtils
) {
  function ControllerViewModel() {
    var self = this;

    self.KnockoutTemplateUtils = KnockoutTemplateUtils;

    // Media queries for repsonsive layouts
    var smQuery = ResponsiveUtils.getFrameworkQuery(
      ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );
    self.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    // Router setup
    self.router = Router.rootInstance;
    self.router.configure({
      login: { label: "Login", isDefault: true },
      registration: { label: "Registration" },
      home: { label: "Home" },
      incidents: { label: "Incidents" },
      customers: { label: "Customers" },
      profile: { label: "Profile" }
    });
    Router.defaults["urlAdapter"] = new Router.urlParamAdapter();

    self.moduleConfig = ko.observable({ view: [], viewModel: null });

    self.loadModule = function() {
      ko.computed(function() {
        var name = self.router.moduleConfig.name();
        var viewPath = "views/" + name + ".html";
        var modelPath = "viewModels/" + name;
        var masterPromise = Promise.all([
          moduleUtils.createView({ viewPath: viewPath }),
          moduleUtils.createViewModel({ viewModelPath: modelPath })
        ]);
        masterPromise.then(function(values) {
          self.moduleConfig({ view: values[0], viewModel: values[1] });
        });
      });
    };

    // Navigation setup
    var navData = [
      {
        name: "Home",
        id: "home",
        iconClass:
          "oj-clickable-icon demo-icon-font demo-home-icon-24"
      },
      {
        name: "Login",
        id: "login",
        iconClass:
          "oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24"
      },
      {
        name: "Registration",
        id: "registration",
        iconClass:
          "oj-navigationlist-item-icon demo-icon-font-24 demo-people-icon-24"
      },
      {
        name: "Profile",
        id: "profile",
        iconClass:
          "oj-navigationlist-item-icon demo-icon-font-24 demo-person-icon-24"
      }
    ];
    self.navDataProvider = new ArrayDataProvider(navData, {
      keyAttributes: "id"
    });

    // Header
    // Application Name used in Branding Area
    self.appName = ko.observable("Team 2 Ojet");
    // User Info used in Global Navigation area
    self.userLogin = ko.observable("Not Yet Logged In");
    self.userLoggedIn = ko.observable("N");

    // Footer
    function footerLink(name, id, linkTarget) {
      this.name = name;
      this.linkId = id;
      this.linkTarget = linkTarget;
    }
    self.footerLinks = ko.observableArray([
      new footerLink(
        "About Oracle",
        "aboutOracle",
        "http://www.oracle.com/us/corporate/index.html#menu-about"
      ),
      new footerLink(
        "Contact Us",
        "contactUs",
        "http://www.oracle.com/us/corporate/contact/index.html"
      ),
      new footerLink(
        "Legal Notices",
        "legalNotices",
        "http://www.oracle.com/us/legal/index.html"
      ),
      new footerLink(
        "Terms Of Use",
        "termsOfUse",
        "http://www.oracle.com/us/legal/terms/index.html"
      ),
      new footerLink(
        "Your Privacy Rights",
        "yourPrivacyRights",
        "http://www.oracle.com/us/legal/privacy/index.html"
      )
    ]);
  }

  return new ControllerViewModel();
});
