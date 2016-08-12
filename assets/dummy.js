"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  _ember['default'].LinkComponent.reopen({

    classNameBindings: ["isATag:w-link"],

    activeClass: "__w-state-selected",

    isATag: _ember['default'].computed.equal("tagName", "a"),

    _invoke: function _invoke() {
      window.scrollTo(0, 0);
      return this._super.apply(this, arguments);
    }

  });

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/main-viewport', ['exports', 'ember'], function (exports, _ember) {

  var later = _ember['default'].run.later;

  exports['default'] = _ember['default'].Component.extend({

    layout: _ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@1.13.12',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'yield', [['get', 'this', ['loc', [null, [1, 8], [1, 12]]]]], [], ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()),

    classNameBindings: [":w-page", "sidebarOpened:w-page__nav-opened:w-page__nav-closed", "currentPath"],

    /**
      Is application's sidebar opened. Sidebar opening changed by `toggleSidebar`
      action, which can be called from the template like:
       @example
        <a href="#" {{action 'toggleSidebar'}}>Show sidebar</a>
       @property sidebarOpened
      @type Boolean
    */
    sidebarOpened: false,

    /**
      @example
        ...
        <div class="w-header_mobilenav-toddler {{if stateRotate '__w-state-rotate'}}">...</div>
        ...
      @property stateRotate
      @type Boolean
    */
    stateRotate: false,
    stateJoin: false,

    actions: {

      toggleSidebar: function toggleSidebar() {
        var _this = this;

        this.toggleProperty('sidebarOpened');

        var _getProperties = this.getProperties("stateRotate", "stateJoin");

        var stateRotate = _getProperties.stateRotate;
        var stateJoin = _getProperties.stateJoin;

        if (stateRotate && stateJoin) {

          this.set("stateRotate", false);
          later(this, function () {
            return _this.set("stateJoin", false);
          }, 200);
        } else if (!stateRotate && !stateJoin) {

          this.set("stateJoin", true);
          later(this, function () {
            return _this.set("stateRotate", true);
          }, 200);
        }
      }

    }

  });
});
define('dummy/components/presenter-animate-css', ['exports', 'ember', 'ember-dialog/components/presenter'], function (exports, _ember, _emberDialogComponentsPresenter) {
  exports['default'] = _emberDialogComponentsPresenter['default'].extend({

    animationToShow: "animation__fadeIn",
    animationToHide: "animation__fadeIn",

    delay: 500,

    accept: function accept() {
      this.$(".dialog-content").addClass(this.get("animationToHide"));
      _ember['default'].run.later(this, "_accept", this.get("delay"));
    },

    decline: function decline() {
      this.$(".dialog-content").addClass(this.get("animationToHide"));
      _ember['default'].run.later(this, "_decline", this.get("delay"));
    },

    willInsertElement: function willInsertElement() {
      this.$(".dialog-content").addClass("animated");
      return this._super.apply(this, arguments);
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      _ember['default'].run.scheduleOnce("afterRender", this, function () {
        _this.$(".dialog-content").addClass(_this.get("animationToShow"));
      });
      return this._super.apply(this, arguments);
    }

  });
});
define('dummy/components/presenter-animated', ['exports', 'ember', 'ember-dialog/components/presenter'], function (exports, _ember, _emberDialogComponentsPresenter) {
  exports['default'] = _emberDialogComponentsPresenter['default'].extend({

    animation: "animation__fadeIn",

    delay: 500,

    accept: function accept() {
      this.$(".ember-dialog-dialog").removeClass(this.get("animation"));
      _ember['default'].run.later(this, "_accept", this.get("delay"));
    },

    decline: function decline() {
      this.$(".ember-dialog-dialog").removeClass(this.get("animation"));
      _ember['default'].run.later(this, "_decline", this.get("delay"));
    },

    willInsertElement: function willInsertElement() {
      this.$(".ember-dialog-dialog").addClass("animation");
      return this._super.apply(this, arguments);
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      _ember['default'].run.scheduleOnce("afterRender", this, function () {
        _this.$(".ember-dialog-dialog").addClass(_this.get("animation"));
      });
      return this._super.apply(this, arguments);
    }

  });
});
define('dummy/components/presenter', ['exports', 'ember-dialog/components/presenter'], function (exports, _emberDialogComponentsPresenter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogComponentsPresenter['default'];
    }
  });
});
define("dummy/controllers/application", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    isOpened: false,

    actions: {

      toggleLanguage: function toggleLanguage() {
        this.toggleProperty("isOpened");
      },

      setLanguageCode: function setLanguageCode(languageCode) {
        this.get('locale').setLanguageCode(languageCode);
        this.toggleProperty("isOpened");
      },

      accept: function accept(presenter) {
        presenter.accept();
      }

    }

  });
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("dummy/controllers/cookbook/animation", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    actions: {
      showDialog: function showDialog() {
        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Dialog's body");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()), this);
      },
      showAnimatedDialog: function showAnimatedDialog() {
        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Dialog's body");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()), this, null, "presenter-animated");
      },
      showAnimation: function showAnimation(animationToShow, animationToHide) {
        var delay = arguments.length <= 2 || arguments[2] === undefined ? 1000 : arguments[2];

        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Dialog's body");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()), this, { animationToShow: animationToShow, animationToHide: animationToHide, delay: delay }, "presenter-animate-css");
      }
    }

  });
});
define("dummy/controllers/cookbook/creating-notices", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    actions: {
      showAutoHideDialog: function showAutoHideDialog() {
        this.get("dialog").one("created", function (presenter) {
          _ember["default"].run.later(presenter, "accept", 500);
        });
        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Dialog's body");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()));
      },
      showNotice: function showNotice() {
        this.get("dialog").one("created", function (presenter) {
          _ember["default"].run.later(presenter, "accept", 500);
        });
        this.get("dialog").show("cookbook/creating-notices/partials/notice", _ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Dialog's body");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()), null, { root: ".notices" });
      }
    }

  });
});
define("dummy/controllers/cookbook/showing-server-errors", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    startTimer: _ember["default"].on("init", function () {
      // this.get("dialog").alert(hbs`Your token is expired. You will be transitioned to the login page.`, this);
    }),

    actions: {
      show401Error: function show401Error() {
        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 66
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Your token is expired. You will be transitioned to the login page.");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()), this);
      },
      showTopError: function showTopError() {
        this.get("dialog").one("created", function (dialog) {
          return _ember["default"].run.later(dialog, "accept", 2000);
        });
        this.get("dialog").show('cookbook/showing-server-errors/partials/top-error', 'cookbook/showing-server-errors/partials/plain', null, { title: "Internal Server Error", text: "Server is unavailable" });
      }
    }

  });
});
define("dummy/controllers/getting-started", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    actions: {

      showAlert: function showAlert() {
        this.get("dialog").alert("test-message", this, {
          title: "Alert"
        });
      },

      showConfirm: function showConfirm() {
        this.get("dialog").confirm("test-message", this, {
          title: "Are you sure?"
        });
      },

      showBlank: function showBlank() {
        this.get("dialog").blank("test-message", this);
      }

    }

  });
});
define("dummy/controllers/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    actions: {

      showAlert: function showAlert() {
        var promise = this.get("dialog").alert("test-message", this, { title: "Reporting a problem" });
        promise.then(function () {
          return console.log("ACCEPT");
        }, function () {
          return console.log("DECLINE");
        });
      },

      showConfirm: function showConfirm() {
        var promise = this.get("dialog").confirm("test-message", this, { title: "Reporting a problem" });
        promise.then(function () {
          return console.log("ACCEPT");
        }, function () {
          return console.log("DECLINE");
        });
      },

      showBlank: function showBlank() {
        var promise = this.get("dialog").blank("test-message", this, { title: "Reporting a problem" });
        promise.then(function () {
          return console.log("ACCEPT");
        }, function () {
          return console.log("DECLINE");
        });
      },

      accept: function accept(presenter) {
        presenter.accept();
      }

    }

  });
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("dummy/controllers/tutorial/creating-dialog-templates", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({
    actions: {
      showDialog: function showDialog() {
        this.get("dialog").show("tutorial/creating-dialog-templates/partials/template-1", _ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 19
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("An template content");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()));
      }
    }
  });
});
define("dummy/controllers/tutorial/creating", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    username: "Vladimir Milkov",

    count: 0,

    actions: {

      simpleAlert: function simpleAlert() {
        alert("Hello, " + this.get("username"));
      },

      dialogAlert: function dialogAlert() {
        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 33
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Hello, ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "contextObject.username", ["loc", [null, [1, 7], [1, 33]]]]],
            locals: [],
            templates: []
          };
        })()), this);
      },

      confirmDeletion: function confirmDeletion() {
        var promise = this.get("dialog").confirm(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 13
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Are you sure?");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()));
        promise.then(function () {
          alert("Remove");
        });
        promise["catch"](function () {
          alert("Cancel");
        });
      },

      showDialog: function showDialog() {
        var template = _ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 73
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Dialog will be closed after 10 trying (you tried ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(")");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "contextObject.count", ["loc", [null, [1, 49], [1, 72]]]]],
            locals: [],
            templates: []
          };
        })());
        var promise = this.get("dialog").confirm(template, this);
        promise.then(function () {
          alert("10 reached!");
        });
      },

      accept: function accept(presenter) {
        this.incrementProperty("count");
        if (this.get("count") >= 10) {
          presenter.accept();
        }
      }

    }

  });
});
/* global alert */
define("dummy/controllers/tutorial/interrupt-closing", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    count: 0,

    actions: {
      showDialog: function showDialog() {
        this.set("count", 0);
        var promise = this.get("dialog").confirm(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 43
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("You pressed 3/");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode(" times");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "contextObject.count", ["loc", [null, [1, 14], [1, 37]]]]],
            locals: [],
            templates: []
          };
        })()), this, {

          // This action of this controller will be executed when user press `yes` button.
          acceptHandler: "acceptClicked",

          // This action of this controller will be executed when user press `no` button.
          declineHandler: "declineClicked"

        });

        promise.then(function () {
          // Executed when dialog window closes by `yes` button
        });
      },

      acceptClicked: function acceptClicked(presenter) {
        // Closing dialog window
        this.get("count") >= 2 && presenter.accept(); // jshint ignore: line
        this.incrementProperty("count");
      },

      declineClicked: function declineClicked() {
        this.get("dialog").alert(_ember["default"].HTMLBars.template((function () {
          return {
            meta: {
              "revision": "Ember@1.13.12",
              "loc": {
                "source": null,
                "start": {
                  "line": 1,
                  "column": 0
                },
                "end": {
                  "line": 1,
                  "column": 62
                }
              }
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("You can't decline this modal window. Please, press yes button.");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })()));
      }
    }

  });
});
define("dummy/controllers/tutorial/presenter-and-manager", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Controller.extend({

    seconds: 0,

    username: "Vladimir Milkov",

    startTimer: _ember["default"].on("init", function () {
      var _this = this;

      setInterval(function () {
        _this.incrementProperty("seconds");
      }, 1000);
    }),

    actions: {
      showGreeting: function showGreeting() {
        this.get("dialog").show("examples/dialog/information", "examples/messages/greeting", this);
      },
      showNickname: function showNickname() {
        this.set("username", "ajile");
      },
      showPartial1: function showPartial1() {
        this.get("dialog").alert("tutorial/presenter-and-manager/partials/partial-1", this);
      }
    }

  });
});
/* global setInterval */
define('dummy/helpers/hash', ['exports', 'ember-dialog/helpers/hash'], function (exports, _emberDialogHelpersHash) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogHelpersHash['default'];
    }
  });
});
define('dummy/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define("dummy/initializers/ember-i18n", ["exports", "dummy/instance-initializers/ember-i18n"], function (exports, _dummyInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _dummyInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _dummyInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/instance-initializers/ember-dialog', ['exports', 'dummy/config/environment', 'ember-dialog/configuration'], function (exports, _dummyConfigEnvironment, _emberDialogConfiguration) {
  exports.initialize = initialize;

  function initialize(application) {
    var registry = application.registry;
    _emberDialogConfiguration['default'].load(_dummyConfigEnvironment['default']);
    registry.injection('controller', 'dialog', 'service:dialog');
  }

  exports['default'] = {
    name: 'ember-dialog',
    initialize: initialize
  };
});
define("dummy/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/legacy-helper", "dummy/config/environment"], function (exports, _ember, _emberI18nLegacyHelper, _dummyConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(instance) {
      var defaultLocale = (_dummyConfigEnvironment["default"].i18n || {}).defaultLocale;
      if (defaultLocale === undefined) {
        _ember["default"].warn('ember-i18n did not find a default locale; falling back to "en".');
        defaultLocale = 'en';
      }
      var key = 'service:i18n';
      var i18n = instance.lookup ? instance.lookup(key) : instance.container.lookup(key);
      i18n.set('locale', defaultLocale);

      if (_emberI18nLegacyHelper["default"] != null) {
        _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
      }
    }
  };
});
define('dummy/instance-initializers/locale', ['exports', 'ember', 'dummy/services/locale', 'dummy/utils/change-locale'], function (exports, _ember, _dummyServicesLocale, _dummyUtilsChangeLocale) {
  exports.initialize = initialize;

  function langHandler(container, locale) {
    var languageCode = locale.get('languageCode');
    container.lookup('service:i18n').set('locale', languageCode);
    (0, _dummyUtilsChangeLocale['default'])();
  }

  function initialize(application) {
    var registry = application.registry;
    var container = application.container;
    registry.register('service:locale', _dummyServicesLocale['default'], { singleton: true });
    registry.injection('controller', 'locale', 'service:locale');
    registry.injection('route', 'locale', 'service:locale');
    registry.injection('component', 'locale', 'service:locale');
    registry.injection('model', 'locale', 'service:locale');

    // The global locale service (it's contain determined language)
    var locale = container.lookup('service:locale');

    // Set up application language
    langHandler(container, locale);

    // On changing language, change it everywhere
    locale.on('languageDidChange', this, _ember['default'].run.bind(this, langHandler, container, locale));
  }

  exports['default'] = { name: 'locale', initialize: initialize };
});
define("dummy/locales/en/translations", ["exports"], function (exports) {
  exports["default"] = {
    language: {
      "ru": "Русский",
      "en": "English"
    },
    navigation: {
      getting_started: "Getting started",
      tutorial: "Tutorial",
      cookbook: "Cookbook",
      docs: "Docs"
    },
    tutorial: {
      creating_first_dialog: "Creating Your First Dialog",
      presenter_and_manager: "Presenter and Manager",
      advanced_creating_dialog: "Advanced Creating Dialog",
      interrupt_closing: "Interrupt Closing",
      listening_events: "Listening Events",
      creating_dialog_templates: "Layouts and Templates",
      customizing_dialog: "Customizing dialog"
    },
    cookbook: {
      animation: "Animation",
      how_to_make_dialog_drag_n_dropable: "How to Make Dialog Drag'n'Dropable",
      showing_server_errors: "Showing Server Errors",
      creating_notices: "Creating Notices",
      working_with_forms: "Working with forms"
    }

  };
});
define("dummy/locales/ru/translations", ["exports"], function (exports) {
  exports["default"] = {
    language: {
      ru: "Русский",
      en: "English"
    },
    navigation: {
      getting_started: "Знакомство",
      tutorial: "Учебник",
      cookbook: "Cookbook",
      docs: "Документация"
    },
    tutorial: {
      creating_first_dialog: "Создание первого окна",
      presenter_and_manager: "Presenter и Manager",
      advanced_creating_dialog: "Наследование Dialog Manager",
      interrupt_closing: "Прерывание закрытия",
      listening_events: "События",
      creating_dialog_templates: "Шаблоны",
      customizing_dialog: "Стили и кастомизация"
    },
    cookbook: {
      animation: "Создание анимации",
      how_to_make_dialog_drag_n_dropable: "Как сделать диалоговое окно перетаскиваемым",
      showing_server_errors: "Показ серверных ошибок в модальном окне",
      creating_notices: "Создание нотисов и прочих всплывашек",
      working_with_forms: "Работа с формами"
    }

  };
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment', 'dummy/utils/change-locale'], function (exports, _ember, _dummyConfigEnvironment, _dummyUtilsChangeLocale) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    didTransition: function didTransition() {
      this._super.apply(this, arguments);
      (0, _dummyUtilsChangeLocale['default'])();
    }
  });

  Router.map(function () {
    this.route('getting-started', { path: '/' });
    this.route('cookbook', function () {
      this.route('animation');
      this.route('how-to-make-dialog-drag-n-dropable');
      this.route('showing-server-errors');
      this.route('creating-notices');
      this.route('working-with-forms');
    });
    this.route('tutorial', function () {
      this.route('creating');
      this.route('presenter-and-manager');
      this.route('advanced-creating-dialog');
      this.route('interrupt-closing');
      this.route('listening-events');
      this.route('creating-dialog-templates');
      this.route('customizing-dialog');
    });
  });

  exports['default'] = Router;
});
define("dummy/routes/application", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({

    actions: {

      setLanguageCode: function setLanguageCode(languageCode) {
        this.get('locale').setLanguageCode(languageCode);
      }

    }

  });
});
define("dummy/routes/cookbook/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({

    enter: function enter() {
      this.transitionTo("cookbook.animation");
      return this._super.apply(this, arguments);
    }

  });
});
define("dummy/routes/getting-started", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend();
});
define("dummy/routes/tutorial/index", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend({

    enter: function enter() {
      this.transitionTo("tutorial.creating");
      return this._super.apply(this, arguments);
    }

  });
});
define("dummy/routes/tutorial", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Route.extend();
});
define('dummy/services/dialog', ['exports', 'ember-dialog/services/dialog'], function (exports, _emberDialogServicesDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDialogServicesDialog['default'];
    }
  });
});
define('dummy/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
define('dummy/services/locale', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  /**
    The localStorage.
    @external localStorage
    @see {@link https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage|LocalStorage}
  */

  /**
    @module service/locale
  */

  /**
    Anyone a storage object. May be the sessionStorage if you like so.
    @member storage
    @type {external:localStorage}
  */
  var storage = localStorage;

  /**
    The language code, dictionary of which is exist any way. If the `languageCode`
    doesn't exists in the {@link module:locale~storage|LocalStorage}, its will be created with this value.
    @member DEFAULT_LANGUAGE
    @type {String}
  */
  var DEFAULT_LANGUAGE = 'en';

  /**
    The language code gotten from browser's locale. The language will be
    sought in the available language list and if it will not be found, the
    [DEFAULT_LANGUAGE]{@link module:locale~DEFAULT_LANGUAGE} will be set as default, otherwise it will be set.
    @member DETERMINED_LANGUAGE
    @type {String}
  */
  var DETERMINED_LANGUAGE = window.navigator.language.split('-').shift();

  /**
    @class Locale
    @extends Ember.Service
    @mixes Ember.Evented
    @memberOf module:service/locale
    @fires module:service/locale.Locale#languageDidChange
  */
  var Locale = _ember['default'].Service.extend(_ember['default'].Evented, {

    /**
      List of the languages, available for users. Every language has translation
      dictionary, you can find in the `public/i18n/` directory. Translation
      provided by i18n library.
      @name module:service/locale.Locale#languages
      @type Array
    */
    languages: _ember['default'].A(_dummyConfigEnvironment['default'].languages),

    /**
      Language code in the ISO 639‑1. If you don't understand what it means,
      please take a look at http://en.wikipedia.org/wiki/ISO_639-1.
      @name module:service/locale.Locale#languageCode
      @default 'en'
      @type {String}
    */
    languageCode: null,

    /**
      The selected language' record. The record is found in the list by
      `languageCode`. If you want to change the language you should change
      languageCode property, it cause changing of selected language.
      @example isRussian: computed.equal('locale.language.code', 'ru')
      @memberOf module:service/locale.Locale#
      @property {object}  language
      @property {number}  language.code     A ISO-3166-1-alpha-2 language code (e.g. ru, en)
      @property {number}  language.name     The language name
      @property {number}  language.options  An options of the language
      @type Object
    */
    language: _ember['default'].computed("languageCode", function () {
      return this.get('languages').findBy('code', this.get('languageCode'));
    }).readOnly(),

    /**
      Called when language was changed.
      @event module:service/locale.Locale#languageDidChange
    */
    languageDidChange: _ember['default'].observer("language", function () {
      this.trigger('languageDidChange', this.get('language'));
    }),

    /**
      Calls every time when `languageCode` changed. Puts the language code into
      the local storage, to pick up it in future.
      @name module:service/locale.Locale#_update
      @private
    */
    _update: _ember['default'].observer("languageCode", function () {
      storage.languageCode = this.get('languageCode');
      _dummyConfigEnvironment['default'].LOG_LOCALE && _ember['default'].Logger.log("LOG_LOCALE: The language code has been changed to", storage.languageCode); // jshint ignore: line
    }),

    /**
      Sate the object by locale data gotten from a local storage or up the
      defaults into the {@link module:locale~storage|LocalStorage}.
      @method module:service/locale.Locale#init
    */
    init: function init() {

      // Grab the language code from a local storage.
      var languageCode = storage.languageCode,

      // The language list, available for user.
      languages = this.get('languages');

      // The language from a local storage isn't exist in the language list
      // or wasn't set at all.
      if (!languageCode || !languages.findBy('code', languageCode)) {
        // Searching a language in the list by the user's locale language code.
        if (languages.findBy('code', DETERMINED_LANGUAGE)) {
          // The determined language is fits (it was found in the language
          // list) - setting it up.
          languageCode = DETERMINED_LANGUAGE;
        } else {
          // Prefered language from a user's locale wasn't found in the
          // language list. Setting him a default language.
          languageCode = DEFAULT_LANGUAGE;
        }
      }

      // Set up the language code
      this.set('languageCode', languageCode);

      return this._super.apply(this, arguments);
    },

    /**
      @method module:service/locale.Locale#setLanguageCode
      @param {String} code  An [language code]{@link module:service/locale.Locale#language} (e.g. 'en', 'ru' etc.)
    */
    setLanguageCode: function setLanguageCode(code) {
      this.set('languageCode', code);
    },

    /**
      @method module:service/locale.Locale#toString
      @return {String}
    */
    toString: function toString() {
      return "<(The Locale Service)>";
    }

  });

  exports['default'] = Locale;
  var DETERMINED_LANGUAGE;
  exports.DETERMINED_LANGUAGE = DETERMINED_LANGUAGE;
  var DEFAULT_LANGUAGE;
  exports.DEFAULT_LANGUAGE = DEFAULT_LANGUAGE;
  var storage;
  exports.storage = storage;
});
/* global localStorage */
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 22,
                "column": 16
              },
              "end": {
                "line": 28,
                "column": 16
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            dom.setAttribute(el2, "class", "w-dropdown_link");
            var el3 = dom.createTextNode("\n                      ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element1);
            morphs[2] = dom.createMorphAt(element1, 1, 1);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["w-dropdown_item ", ["get", "page.dropdownItemClassName", ["loc", [null, [23, 47], [23, 73]]]]]]], ["element", "action", ["setLanguageCode", ["get", "lang.code", ["loc", [null, [24, 74], [24, 83]]]]], [], ["loc", [null, [24, 47], [24, 85]]]], ["inline", "t", [["subexpr", "concat", ["language.", ["get", "lang.code", ["loc", [null, [25, 46], [25, 55]]]]], [], ["loc", [null, [25, 26], [25, 56]]]]], [], ["loc", [null, [25, 22], [25, 58]]]]],
          locals: ["lang"],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 45,
                "column": 42
              },
              "end": {
                "line": 45,
                "column": 169
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "t", ["navigation.getting_started"], [], ["loc", [null, [45, 135], [45, 169]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 46,
                "column": 42
              },
              "end": {
                "line": 46,
                "column": 155
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [46, 128], [46, 155]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.12",
            "loc": {
              "source": null,
              "start": {
                "line": 47,
                "column": 42
              },
              "end": {
                "line": 47,
                "column": 155
              }
            },
            "moduleName": "dummy/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [47, 128], [47, 155]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 59,
              "column": 0
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "w-page_container");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "w-header");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "container");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "w-header_project");
          var el5 = dom.createTextNode("ember-dialog");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "w-header_nav");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "w-header_nav-right");
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "w-header_nav-item");
          var el7 = dom.createTextNode("\n\n            ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("div");
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("span");
          dom.setAttribute(el8, "class", "w-flag");
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("a");
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("ul");
          dom.setAttribute(el8, "class", "w-dropdown_list");
          var el9 = dom.createTextNode("\n");
          dom.appendChild(el8, el9);
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          var el9 = dom.createTextNode("              ");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n            ");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n\n          ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "w-app-nav");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "container");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "w-app-nav_table");
          var el5 = dom.createTextNode("\n        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "w-app-nav_cell-items");
          var el6 = dom.createTextNode("\n          ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("div");
          dom.setAttribute(el6, "class", "w-app-nav_container");
          var el7 = dom.createTextNode("\n            ");
          dom.appendChild(el6, el7);
          var el7 = dom.createElement("nav");
          dom.setAttribute(el7, "role", "navigation");
          dom.setAttribute(el7, "class", "w-app-nav_group w-app-nav_group__main w-app-nav_group__menu");
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("div");
          dom.setAttribute(el8, "class", "w-app-nav_item");
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("div");
          dom.setAttribute(el8, "class", "w-app-nav_item");
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("div");
          dom.setAttribute(el8, "class", "w-app-nav_item");
          var el9 = dom.createComment("");
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n              ");
          dom.appendChild(el7, el8);
          var el8 = dom.createElement("div");
          dom.setAttribute(el8, "class", "w-app-nav_item");
          var el9 = dom.createElement("a");
          dom.setAttribute(el9, "href", "docs");
          dom.setAttribute(el9, "class", "w-app-nav_link w-link");
          var el10 = dom.createComment("");
          dom.appendChild(el9, el10);
          dom.appendChild(el8, el9);
          dom.appendChild(el7, el8);
          var el8 = dom.createTextNode("\n            ");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode("\n          ");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n      ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "w-page_content");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [2]);
          var element3 = dom.childAt(element2, [1, 1]);
          var element4 = dom.childAt(element3, [1]);
          var element5 = dom.childAt(element3, [5, 1, 1, 1]);
          var element6 = dom.childAt(element5, [1]);
          var element7 = dom.childAt(element5, [3]);
          var element8 = dom.childAt(element2, [3, 1, 1, 1, 1, 1]);
          var morphs = new Array(14);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createAttrMorph(element4, 'class');
          morphs[2] = dom.createAttrMorph(element4, 'onclick');
          morphs[3] = dom.createAttrMorph(element5, 'class');
          morphs[4] = dom.createAttrMorph(element6, 'data-country-code');
          morphs[5] = dom.createAttrMorph(element7, 'class');
          morphs[6] = dom.createElementMorph(element7);
          morphs[7] = dom.createMorphAt(element7, 0, 0);
          morphs[8] = dom.createMorphAt(dom.childAt(element5, [5]), 1, 1);
          morphs[9] = dom.createMorphAt(dom.childAt(element8, [1]), 0, 0);
          morphs[10] = dom.createMorphAt(dom.childAt(element8, [3]), 0, 0);
          morphs[11] = dom.createMorphAt(dom.childAt(element8, [5]), 0, 0);
          morphs[12] = dom.createMorphAt(dom.childAt(element8, [7, 0]), 0, 0);
          morphs[13] = dom.createMorphAt(dom.childAt(element2, [5]), 1, 1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["inline", "partial", ["partials/sidebar"], [], ["loc", [null, [2, 0], [2, 30]]]], ["attribute", "class", ["concat", ["w-header_mobilenav-toddler ", ["subexpr", "if", [["get", "view.stateRotate", ["loc", [null, [6, 50], [6, 66]]]], "__w-state-rotate"], [], ["loc", [null, [6, 45], [6, 87]]]]]]], ["attribute", "onclick", ["subexpr", "action", ["toggleSidebar"], ["target", ["get", "view", ["loc", [null, [6, 129], [6, 133]]]]], ["loc", [null, [6, 97], [6, 135]]]]], ["attribute", "class", ["concat", ["w-dropdown ", ["subexpr", "if", [["get", "isOpened", ["loc", [null, [18, 40], [18, 48]]]], "__w-state-opened"], [], ["loc", [null, [18, 35], [18, 69]]]]]]], ["attribute", "data-country-code", ["concat", [["get", "locale.language.code", ["loc", [null, [19, 56], [19, 76]]]]]]], ["attribute", "class", ["concat", ["w-link__inverse w-link__inverse-pseudo w-link ", ["subexpr", "if", [["get", "isOpened", ["loc", [null, [20, 103], [20, 111]]]], "__w-state-selected"], [], ["loc", [null, [20, 98], [20, 134]]]], " ", ["subexpr", "if", [["get", "isOpened", ["loc", [null, [20, 140], [20, 148]]]], "__w-state-clickable"], [], ["loc", [null, [20, 135], [20, 172]]]]]]], ["element", "action", ["toggleLanguage"], [], ["loc", [null, [20, 17], [20, 44]]]], ["inline", "t", [["subexpr", "concat", ["language.", ["get", "locale.language.code", ["loc", [null, [20, 198], [20, 218]]]]], [], ["loc", [null, [20, 178], [20, 219]]]]], [], ["loc", [null, [20, 174], [20, 221]]]], ["block", "each", [["get", "locale.languages", ["loc", [null, [22, 24], [22, 40]]]]], [], 0, null, ["loc", [null, [22, 16], [28, 25]]]], ["block", "link-to", ["getting-started"], ["activeClass", "__w-state-selected", "class", "w-app-nav_link w-link"], 1, null, ["loc", [null, [45, 42], [45, 181]]]], ["block", "link-to", ["tutorial"], ["activeClass", "__w-state-selected", "class", "w-app-nav_link w-link"], 2, null, ["loc", [null, [46, 42], [46, 167]]]], ["block", "link-to", ["cookbook"], ["activeClass", "__w-state-selected", "class", "w-app-nav_link w-link"], 3, null, ["loc", [null, [47, 42], [47, 167]]]], ["inline", "t", ["navigation.docs"], [], ["loc", [null, [48, 87], [48, 110]]]], ["content", "outlet", ["loc", [null, [56, 4], [56, 14]]]]],
        locals: ["view"],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 62,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "main-viewport", [], [], 0, null, ["loc", [null, [1, 0], [59, 18]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/cookbook/animation/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/animation/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.animation"], [], ["loc", [null, [1, 30], [1, 56]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/animation/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 92,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/animation/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Примеры анимаций вы можете найти внизу страницы.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Диалоговые окна показываются и исчезают незамедлительно - поскольку при создании они вставляются в DOM, а при уничтожении удаляются. Поэтому чтобы анимировать появление и исчезание нужно немного изменить это поведение.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Анимирование появления: Окно должно создаваться с css классом, которое скрывает его, а через мгновение, после того как оно было вставлено в DOM страницы, к нему должен добавляться css-класс делающий его видимым (через анимацию).");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Анимирование исчезания: При закрытии окно должно выдергиваться из DOM страницы с задержкой, необходимой для анимирования его исчезания.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Для начала создадим css стили, которые будут отвечать за анимацию.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/styles/app.scss:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/animation.scss");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Далее нужно отнаследовать ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "docs/module-ember-dialog_components_presenter.html");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("Presenter");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", добавлять css классы при создании и уничтожении.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/components/presenter-animated.js:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/animated-presenter-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("После того как окно отрендерилось, но еще не вставилось в DOM страницы нужно добавить css-класс, которое делает окно невидимым (в примере делаем opacity: 0). После того как элемент был вставлен в DOM добавляем еще один класс делающий окно видимым (делаем opacity: 1)");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/animated-presenter-2.javascript");
        dom.setAttribute(el1, "data-line", "6-16");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Если запустить пример окно плавно появится на экране, но при закрытии оно исчезнет без анимации (просто удалится из DOM). Чтобы добавить анимацию на закрытие окна нам нужно:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("1. Удалять окно из DOM с задержкой, необходимой для css анимации");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createTextNode("2. Удалять добавленный при создании css класс (чтобы opacity снова стал равен 0)");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Переопределим методы отвечающие за закрытие окна, добавим удаление css класса и задержку.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/animated-presenter-3.javascript");
        dom.setAttribute(el1, "data-line", "6-14");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Все готово! Теперь окна созданные по компоненту ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("presenter-animated");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" будут показываться и исчезать с анимацией.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Но как его вызвать? По умолчанию Dialog Manager создает экземпляр компонента ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("presenter");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", чтобы создать окно ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("presenter-animated");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" нужно указать его имя последним аргументом:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/controller-1.javascript");
        dom.setAttribute(el1, "data-line", "8");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Показать presenter");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Показать presenter-animated");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Но если мы хотим добавить еще один вариант анимации, придется дублировать компонент? Нет, возможно определять анимацию при создании диалогового окна через ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("options");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" следующим образом.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/controller-3.javascript");
        dom.setAttribute(el1, "data-line", "8");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Для этого изменим немного компонент:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/animated-presenter-4.javascript");
        dom.setAttribute(el1, "data-line", "6,9,14,25");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Теперь можно указывать имя анимации:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/controller-2.javascript");
        dom.setAttribute(el1, "data-line", "8,9");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Но код создания окна с анимацией стал слишком длинным, давайте расширим Dialog Manager и упрячем имя анимации и компонента в него:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/example-1.javascript");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Теперь мы можем создавать анимированные окна так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/animation/controller-4.javascript");
        dom.setAttribute(el1, "data-line", "8");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title");
        var el2 = dom.createTextNode("Использование сторонних библиотек");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  Также можно использовать различные сторонние библиотеки, например ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://github.com/daneden/animate.css/");
        var el3 = dom.createTextNode("animate.css");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Попробуйте сами:\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("bounce");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("fade");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("flipX");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("flipY");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("lightSpeed");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("rotate");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("roll");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("zoom");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("slideDown");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("hinge Out");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("pulse");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("flash");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("rubberBand");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("shake");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("headShake");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("swing");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("tada");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("wobble");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(",\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("jello");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Как вы понимаете наследуя presenter-компонент можно сделать анимацию на любой элемент (на подложку или на само окно) любой сложности.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [40]);
        var element1 = dom.childAt(element0, [0]);
        var element2 = dom.childAt(element0, [2]);
        var element3 = dom.childAt(fragment, [64]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element3, [5]);
        var element6 = dom.childAt(element3, [7]);
        var element7 = dom.childAt(element3, [9]);
        var element8 = dom.childAt(element3, [11]);
        var element9 = dom.childAt(element3, [13]);
        var element10 = dom.childAt(element3, [15]);
        var element11 = dom.childAt(element3, [17]);
        var element12 = dom.childAt(element3, [19]);
        var element13 = dom.childAt(element3, [21]);
        var element14 = dom.childAt(element3, [23]);
        var element15 = dom.childAt(element3, [25]);
        var element16 = dom.childAt(element3, [27]);
        var element17 = dom.childAt(element3, [29]);
        var element18 = dom.childAt(element3, [31]);
        var element19 = dom.childAt(element3, [33]);
        var element20 = dom.childAt(element3, [35]);
        var element21 = dom.childAt(element3, [37]);
        var element22 = dom.childAt(element3, [39]);
        var morphs = new Array(22);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element1, 'onclick');
        morphs[2] = dom.createAttrMorph(element2, 'onclick');
        morphs[3] = dom.createAttrMorph(element4, 'onclick');
        morphs[4] = dom.createAttrMorph(element5, 'onclick');
        morphs[5] = dom.createAttrMorph(element6, 'onclick');
        morphs[6] = dom.createAttrMorph(element7, 'onclick');
        morphs[7] = dom.createAttrMorph(element8, 'onclick');
        morphs[8] = dom.createAttrMorph(element9, 'onclick');
        morphs[9] = dom.createAttrMorph(element10, 'onclick');
        morphs[10] = dom.createAttrMorph(element11, 'onclick');
        morphs[11] = dom.createAttrMorph(element12, 'onclick');
        morphs[12] = dom.createAttrMorph(element13, 'onclick');
        morphs[13] = dom.createAttrMorph(element14, 'onclick');
        morphs[14] = dom.createAttrMorph(element15, 'onclick');
        morphs[15] = dom.createAttrMorph(element16, 'onclick');
        morphs[16] = dom.createAttrMorph(element17, 'onclick');
        morphs[17] = dom.createAttrMorph(element18, 'onclick');
        morphs[18] = dom.createAttrMorph(element19, 'onclick');
        morphs[19] = dom.createAttrMorph(element20, 'onclick');
        morphs[20] = dom.createAttrMorph(element21, 'onclick');
        morphs[21] = dom.createAttrMorph(element22, 'onclick');
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.animation"], [], ["loc", [null, [1, 30], [1, 56]]]], ["attribute", "onclick", ["subexpr", "action", ["showDialog"], [], ["loc", [null, [44, 33], [44, 56]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimatedDialog"], [], ["loc", [null, [44, 115], [44, 146]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "bounceIn", "bounceOut", 500], [], ["loc", [null, [70, 43], [70, 96]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "fadeIn", "fadeOut", 500], [], ["loc", [null, [71, 43], [71, 92]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "flipInX", "flipOutX", 500], [], ["loc", [null, [72, 43], [72, 94]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "flipInY", "flipOutY", 500], [], ["loc", [null, [73, 43], [73, 94]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "lightSpeedIn", "lightSpeedOut", 1000], [], ["loc", [null, [74, 43], [74, 105]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "rotateIn", "rotateOut", 1000], [], ["loc", [null, [75, 43], [75, 97]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "rollIn", "rollOut", 1000], [], ["loc", [null, [76, 43], [76, 93]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "zoomIn", "zoomOut", 1000], [], ["loc", [null, [77, 43], [77, 93]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "slideInDown", "slideOutDown", 1000], [], ["loc", [null, [78, 43], [78, 103]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "fadeIn", "hinge", 2000], [], ["loc", [null, [79, 43], [79, 91]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "pulse", "", 0], [], ["loc", [null, [80, 43], [80, 82]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "flash", "", 0], [], ["loc", [null, [81, 43], [81, 82]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "rubberBand", "", 0], [], ["loc", [null, [82, 43], [82, 87]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "shake", "", 0], [], ["loc", [null, [83, 43], [83, 82]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "headShake", "", 0], [], ["loc", [null, [84, 43], [84, 86]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "swing", "", 0], [], ["loc", [null, [85, 43], [85, 82]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "tada", "", 0], [], ["loc", [null, [86, 43], [86, 81]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "wobble", "", 0], [], ["loc", [null, [87, 43], [87, 83]]]]], ["attribute", "onclick", ["subexpr", "action", ["showAnimation", "jello", "", 0], [], ["loc", [null, [88, 43], [88, 82]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/animation", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/animation.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["cookbook/animation/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 49], [1, 68]]]]], [], ["loc", [null, [1, 10], [1, 69]]]]], [], ["loc", [null, [1, 0], [1, 71]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/creating-notices/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/creating-notices/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.creating_notices"], [], ["loc", [null, [1, 30], [1, 63]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/creating-notices/partials/notice", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/creating-notices/partials/notice.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "notice-dialog");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "notice-dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "w-link w-link__pseudo");
        var el5 = dom.createTextNode("Close");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createAttrMorph(element1, 'onclick');
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [3, 4], [3, 13]]]], ["attribute", "onclick", ["subexpr", "action", ["accept"], [], ["loc", [null, [4, 50], [4, 69]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/creating-notices/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/creating-notices/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Ember Dialog Addon позволяет создавать все виды всплывающих окон, включая различные нотисы. Реализация нотисов основывается на возможности программного закрытия окон, а также возможности их стилизации.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Для начала давайте разберемся с тем, как сделать автозакрытие окна. С помощью события ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("created");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" Dialog Manager мы можем получить ссылку на объект окна и у него в нужный момент вызвать метод ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("accept");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", который закроет его.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/creating-notices/controller-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Показать диалог с автозакрытием");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Мы создали окно, которое закрывается через 500ms, но это все еще не нотис. Осталось задизайнить его. Для этого создадим layout с нужными нам css классами и опишем стили для них.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/templates/dialog/notice.hbs:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/creating-notices/layout-1.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/styles/dialog-notice.scss:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/creating-notices/notice.scss");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Далее нам надо создать div с классом notices на уровне ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("body");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" (в файле ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("app/index.html");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("). К этому элементу будут прикрепляться notice окна.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Создавая notice окна нужно указывать к какому элементу его нужно прикрепить - селектор элемента указывается так ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("options.root");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/creating-notices/controller-2.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Выполнить");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Чтобы каждый раз к controller не писать логику автозакрытия, layout и селектор элемента к которому прикрепить нотис, мы можем создать специальный метод `notice` у Dialog Manager и упрятать всю эту логику туда:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/services/dialog.js:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/creating-notices/example-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("После этого создавать notice окна мы сможем так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/creating-notices/controller-3.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Приятного пользования!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8, 0]);
        var element1 = dom.childAt(fragment, [26, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'onclick');
        morphs[2] = dom.createAttrMorph(element1, 'onclick');
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.creating_notices"], [], ["loc", [null, [1, 30], [1, 63]]]], ["attribute", "onclick", ["subexpr", "action", ["showAutoHideDialog"], [], ["loc", [null, [9, 33], [9, 64]]]]], ["attribute", "onclick", ["subexpr", "action", ["showNotice"], [], ["loc", [null, [25, 33], [25, 56]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/creating-notices", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/creating-notices.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["cookbook/creating-notices/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 56], [1, 75]]]]], [], ["loc", [null, [1, 10], [1, 76]]]]], [], ["loc", [null, [1, 0], [1, 78]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/how-to-make-dialog-drag-n-dropable/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/how-to-make-dialog-drag-n-dropable/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.how_to_make_dialog_drag_n_dropable"], [], ["loc", [null, [1, 30], [1, 81]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/how-to-make-dialog-drag-n-dropable/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/how-to-make-dialog-drag-n-dropable/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.how_to_make_dialog_drag_n_dropable"], [], ["loc", [null, [1, 30], [1, 81]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/how-to-make-dialog-drag-n-dropable", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/how-to-make-dialog-drag-n-dropable.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["cookbook/how-to-make-dialog-drag-n-dropable/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 74], [1, 93]]]]], [], ["loc", [null, [1, 10], [1, 94]]]]], [], ["loc", [null, [1, 0], [1, 96]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/showing-server-errors/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/showing-server-errors/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.showing_server_errors"], [], ["loc", [null, [1, 30], [1, 68]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/showing-server-errors/partials/plain", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/showing-server-errors/partials/plain.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("b");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        return morphs;
      },
      statements: [["content", "title", ["loc", [null, [1, 3], [1, 12]]]], ["content", "text", ["loc", [null, [2, 0], [2, 8]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/showing-server-errors/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/showing-server-errors/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Диалоговое окно отлично подходит для показа серверных или любых других фатальных ошибок. Например соединение по WebSoсket отвалилось или протух токен или...");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Token expired error");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Давайте сделаем показ ошибки токена. Сначала нам надо инъектить Dialog Manager в адаптер приложения и сделать вывод ошибки в модальном окне на 401 ответ от сервера.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/adapter-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/error-unauthenticated.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Теперь при получении от сервера ответа со статусом 401 пользователь будет видеть сообщение:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/dialog-session-expired.png");
        dom.setAttribute(el2, "style", "max-width:100%");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("После нажатия на кнопку \"OK\" сессия будет инвалидирована.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Invalid request error");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Рассмотрим вариант показа любых ошибок от сервера вверху страницы. Для этого нам надо добавить логику показа ошибок в адапторе, создать новый шаблон layout и стили к нему.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/adapter/application.js:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/adapter-2.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/templates/dialog/top-error.hbs:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/top-error.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/templates/messages/titled.hbs:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/titled.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/styles/top-error-dialog.scss:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/top-error-dialog.scss");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Ошибка будет выглядеть следующим образом:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/dialog-top-error.png");
        dom.setAttribute(el2, "style", "max-width:100%");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Осталось сделать автозакрытие этого окна. Для этого нам нужно подписаться на событие `created` диалогового менеджера - так мы получим ссылку на созданное диалоговое окно. Далее через какое-то время у диалога нужно вызвать метод ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("accept");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" или ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("reject");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" для того, чтобы его закрыть.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/showing-server-errors/adapter-3.javascript");
        dom.setAttribute(el1, "data-line", "11");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Посмотреть как работает");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [46, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'onclick');
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.showing_server_errors"], [], ["loc", [null, [1, 30], [1, 68]]]], ["attribute", "onclick", ["subexpr", "action", ["showTopError"], [], ["loc", [null, [42, 33], [42, 58]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/showing-server-errors/partials/top-error", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/showing-server-errors/partials/top-error.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "top-error-dialog");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "top-error-dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 0, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [2, 54], [2, 63]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/showing-server-errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/showing-server-errors.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["cookbook/showing-server-errors/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 61], [1, 80]]]]], [], ["loc", [null, [1, 10], [1, 81]]]]], [], ["loc", [null, [1, 0], [1, 83]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/working-with-forms/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/working-with-forms/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.working_with_forms"], [], ["loc", [null, [1, 30], [1, 65]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/working-with-forms/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/working-with-forms/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Показ форм в модалках не тривиальная задача, поскольку:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("— во-первых accept закрытие должно происходить на submit формы");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("— во-вторых окно не должно закрываться пока форма не валидна");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("— в-третьих если пользователь нажимает на кнопку Cancel нужно откатывать измененные поля модели");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("К счастью Ember Dialog позволяет следать и то и другое.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Чтобы сделать accept закрытие на submit формы мы можем использовать ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("blank layout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" для создания собственного интерфейса.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/templates/forms/user.hbs:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/working-with-forms/template-1.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Accept закрытие на submit формы мы сделали, теперь нужно сделать проверку заполненности данных перед закрытием окна. И откадывание данных модели в случае отмены.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("app/controllers/user.js:");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/cookbook/working-with-forms/controller-1.js");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Для работы с формами и валидацией объектов в целом мы рекомендуем использовать ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://github.com/ajile/ember-validation");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("ember-validation");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["inline", "t", ["cookbook.working_with_forms"], [], ["loc", [null, [1, 30], [1, 65]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook/working-with-forms", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook/working-with-forms.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["cookbook/working-with-forms/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 58], [1, 77]]]]], [], ["loc", [null, [1, 10], [1, 78]]]]], [], ["loc", [null, [1, 0], [1, 80]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/cookbook", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/cookbook.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-4 left-nav");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["partials/left-nav"], [], ["loc", [null, [4, 6], [4, 37]]]], ["content", "outlet", ["loc", [null, [7, 6], [7, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/examples/dialog/information", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/examples/dialog/information.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        dom.setAttribute(el1, "type", "text/css");
        var el2 = dom.createTextNode("\n.class_1 {\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  z-index: 13;\n  background: #f9f9f9;\n  position: fixed;\n  bottom: 0px;\n  margin: 0;\n  top: inherit;\n  left: inherit;\n  right: 30px;\n  width: 100%;\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "ember-dialog-dialog class_1");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-1");
        dom.setAttribute(el3, "style", "text-align: right;");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "w-link");
        var el5 = dom.createTextNode("X");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-11");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1, 0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'onclick');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["accept"], [], ["loc", [null, [19, 79], [19, 98]]]]], ["content", "yield", ["loc", [null, [20, 27], [20, 36]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/examples/messages/greeting", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/examples/messages/greeting.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Username is ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("b");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(".\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Show me nick");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(".\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [3]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'onclick');
        return morphs;
      },
      statements: [["content", "contextObject.username", ["loc", [null, [1, 15], [1, 41]]]], ["attribute", "onclick", ["subexpr", "action", ["showNickname"], ["target", ["get", "contextObject", ["loc", [null, [2, 72], [2, 85]]]]], ["loc", [null, [2, 41], [2, 87]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/getting-started/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 283
            },
            "end": {
              "line": 7,
              "column": 333
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/en.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [7, 306], [7, 333]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 350
            },
            "end": {
              "line": 7,
              "column": 400
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/en.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [7, 373], [7, 400]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 35
            },
            "end": {
              "line": 29,
              "column": 100
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/en.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [29, 73], [29, 100]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 114
            },
            "end": {
              "line": 29,
              "column": 179
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/en.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [29, 152], [29, 179]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/getting-started/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createTextNode("Getting Started");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("A lightweight and powerful Ember Addon that allows you to easily create ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("routable");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" dialog windows and control their closing. It consists of a service that is available from any object and a component which is a dialog-window itself.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("So how do they look like? See yourself: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("alert");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("confirm");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" and ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("blank");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("With ember-dialog you can create any popups like dialogs, modals, notices, bubbles etc. We have decided do not include realization of all this features to the library for minification reasons. Instead of it we have written absolute documentation how you can make it your own (see ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" and ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("). You can look the library's code on github and get surprised how much code on aboard to realize all features, presented on this site.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Installation");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Installing the library is as easy as:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/installation-1.bash");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("You will see something like this:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/installation-2.bash");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Concept");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The principle of work is simple. Service is instructed to display a modal window (`show`, `alert`, `confirm` or `blank` methods), creates a component instance with required layout and template, then renders it, and attaches it to the body. At this point, it also creates a Promise, resolve и reject methods of which are put into the component, while promise is returned from method for the program that called the creation could know the result of window closing. The component has 2 actions on aboard: one for `resolved` closing, the other one for `rejected` closing. Actions are available within a template and can be called, for instance by clicking on the button (in a layout or in a template). When you call an action, one of the Promise's method is executed and an independent event is triggered: \"accepted\" or \"declined\". The dialog service destroys component instance and detaches it from the DOM on this events.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Let's say you want to ask a user to confirm an action. You should call `show` method of the dialog service with a layout path (you need a dialog window with two buttons - `dialog/confirm` layout is exactly what you need) and a template path you want to show the user in the modal window. Method creates and shows dialog window and returns a Promise, that will become resolved or rejected when the window is closed (it depends on the button user has clicked).");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/example-1.javascript");
        dom.setAttribute(el1, "data-line", "7");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The method `show` allows you to create dialogs with different layouts: with various number of buttons, ways of display etc. We have foreseen the most popular variants of the modal windows: alert, confirm and blank, so you don't have to write the same layout path in different places of the program. For instance:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/example-2.javascript");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("What's next? You may visit page ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" or dig the ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "docs");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("docs");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". For any questions, please write issue, we will try to help you.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Good luck!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(fragment, [6]);
        var element5 = dom.childAt(fragment, [30]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element1, 'onclick');
        morphs[1] = dom.createAttrMorph(element2, 'onclick');
        morphs[2] = dom.createAttrMorph(element3, 'onclick');
        morphs[3] = dom.createMorphAt(element4, 1, 1);
        morphs[4] = dom.createMorphAt(element4, 3, 3);
        morphs[5] = dom.createMorphAt(element5, 1, 1);
        morphs[6] = dom.createMorphAt(element5, 3, 3);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["showAlert"], [], ["loc", [null, [5, 84], [5, 106]]]]], ["attribute", "onclick", ["subexpr", "action", ["showConfirm"], [], ["loc", [null, [5, 159], [5, 183]]]]], ["attribute", "onclick", ["subexpr", "action", ["showBlank"], [], ["loc", [null, [5, 241], [5, 263]]]]], ["block", "link-to", ["cookbook"], [], 0, null, ["loc", [null, [7, 283], [7, 345]]]], ["block", "link-to", ["tutorial"], [], 1, null, ["loc", [null, [7, 350], [7, 412]]]], ["block", "link-to", ["tutorial"], ["class", "w-link"], 2, null, ["loc", [null, [29, 35], [29, 112]]]], ["block", "link-to", ["cookbook"], ["class", "w-link"], 3, null, ["loc", [null, [29, 114], [29, 191]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/getting-started/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 297
            },
            "end": {
              "line": 7,
              "column": 347
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [7, 320], [7, 347]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 362
            },
            "end": {
              "line": 7,
              "column": 412
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [7, 385], [7, 412]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 49
            },
            "end": {
              "line": 29,
              "column": 114
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [29, 87], [29, 114]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 128
            },
            "end": {
              "line": 29,
              "column": 193
            }
          },
          "moduleName": "dummy/templates/getting-started/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [29, 166], [29, 193]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/getting-started/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createTextNode("Знакомство");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Легковесный и мощный Ember Addon позволяющий легко создавать ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("кроссроутные");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" диалоговые окна и программно контролировать их закрытие. Он состоит из сервиса, через который они создаются, и компонента - непосредственно самого диалогового окна (с нужным лейаутом и шаблоном).");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Сразу к делу, как они выглядят? Можете сами взглянуть: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("alert");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("confirm");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" и ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("blank");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("С помощью ember-dialog вы можете создавать любые всплавающие интерфейсы: диалоговые окна, модалки, предупреждения, баблы и т.п. Для минимизации кода библиотеки мы не стали включать их реализацию в проект, но постарались максимально подробно описать как это сделать в вашем проекте (см. разделы ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" и ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("). Также вы можете заглянуть в код библиотеки, вы будете приятно удивлены тем, каким количеством кода обеспечены описанные на этом сайте возможности.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Установка");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Установка аддона такая же простая как:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/installation-1.bash");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Вы увидите что-то типа:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/installation-2.bash");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Концепция");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Принцип работы очень прост. У менеджера диалоговых окон вызывается один из методов (`show`, `alert`, `confirm` или `blank`), он создает компонент с нужными layout и template. Далее рендерит его и прикрепляет к body. Также создается Promise, resolve и reject методы которого кладутся в компонент, он же и возвращается из метода, для того чтобы подпрограмма которая запросила его создание могла узнать с каким результатом диалоговое окно закрылось. Каждый компонент (рабочее название Presenter) имеет 2 метода: один для accept-закрытия, другое для decline-закрытия. Эти методы доступны из шаблона и могут быть подвязаны к действиям пользователя, например при нажатии на какую-то кнопку внутри диалогового окна (в лейауте или шаблоне). Эти методы вызывают соответствующие методы самого Promise (который мы получили при создании модального окна, помните?), также компонент отстреливает соответствующее событие \"accepted\" или \"declined\". Менеджер диалоговых окон ловит эти события и по ним уничтожает компонент, происходит его открепление от DOM - оно исчезает. Все просто, не так ли? :)");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Давайте представим, что вы хотите попросить пользователя подтвердить какое-то действие. Ему нужно показать модельное окно, для этого нужно вызвать метод `show` с нужным layout (нам нужно окно с 2 кнопкам: да и нет - лейаут `dialog/confirm` как раз создан для этого, давайте использовать его) и путь до шаблона, который мы хотим показать пользователю в модальном окне (сразу оговорюсь, что можно указать не путь до шаблона, а сам шаблон, почитать об этом вы можете здесь). Вызванный метод `show` создает и показывает пользователю модальное окно и возвращает нам Promise, который станет resolved или rejected при закрытии окна в соответствии с нажатой кнопкой (yes или no). Пример:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/example-1.javascript");
        dom.setAttribute(el1, "data-line", "7");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Метод `show` позволяет создавать различные типы диалоговых окон, используя различные layouts: с разным количеством кнопок, разлиными способами вывода на экран и пр. Мы предусмотрели наиболее частые варианты модальных окон: alert, confirm и blank. Так, что каждый раз указывать один и тот же лейаут в разных местах программы не обязательно, смотри пример:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/getting-started/example-2.javascript");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Куда дальше идти? Вы можете посетить страницу ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" или покопаться в ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "docs");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("документации");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Если у вас еще остались вопросы, пожалуйста, пишите issue - попробует вместе решить ваш use case.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Удачного пользования!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(fragment, [6]);
        var element5 = dom.childAt(fragment, [30]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element1, 'onclick');
        morphs[1] = dom.createAttrMorph(element2, 'onclick');
        morphs[2] = dom.createAttrMorph(element3, 'onclick');
        morphs[3] = dom.createMorphAt(element4, 1, 1);
        morphs[4] = dom.createMorphAt(element4, 3, 3);
        morphs[5] = dom.createMorphAt(element5, 1, 1);
        morphs[6] = dom.createMorphAt(element5, 3, 3);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["showAlert"], [], ["loc", [null, [5, 99], [5, 121]]]]], ["attribute", "onclick", ["subexpr", "action", ["showConfirm"], [], ["loc", [null, [5, 174], [5, 198]]]]], ["attribute", "onclick", ["subexpr", "action", ["showBlank"], [], ["loc", [null, [5, 254], [5, 276]]]]], ["block", "link-to", ["cookbook"], [], 0, null, ["loc", [null, [7, 297], [7, 359]]]], ["block", "link-to", ["tutorial"], [], 1, null, ["loc", [null, [7, 362], [7, 424]]]], ["block", "link-to", ["tutorial"], ["class", "w-link"], 2, null, ["loc", [null, [29, 49], [29, 126]]]], ["block", "link-to", ["cookbook"], ["class", "w-link"], 3, null, ["loc", [null, [29, 128], [29, 205]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/getting-started", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 6
          }
        },
        "moduleName": "dummy/templates/getting-started.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-4 left-nav");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["partials/left-nav"], [], ["loc", [null, [4, 6], [4, 37]]]], ["inline", "partial", [["subexpr", "concat", ["getting-started/partials/", ["get", "locale.languageCode", ["loc", [null, [7, 52], [7, 71]]]]], [], ["loc", [null, [7, 16], [7, 72]]]]], [], ["loc", [null, [7, 6], [7, 74]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "w-body-item");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-sm-12");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h2");
        dom.setAttribute(el5, "class", "w-subtitle __w-first");
        var el6 = dom.createTextNode("Installation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "w-link");
        var el7 = dom.createTextNode("Показать alert-окно");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "w-link");
        var el7 = dom.createTextNode("Показать confirm-окно");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "class", "w-link");
        var el7 = dom.createTextNode("Показать blank-окно");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1, 1]);
        var element1 = dom.childAt(element0, [3, 0]);
        var element2 = dom.childAt(element0, [5, 0]);
        var element3 = dom.childAt(element0, [7, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'onclick');
        morphs[1] = dom.createAttrMorph(element2, 'onclick');
        morphs[2] = dom.createAttrMorph(element3, 'onclick');
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["showAlert"], [], ["loc", [null, [6, 39], [6, 61]]]]], ["attribute", "onclick", ["subexpr", "action", ["showConfirm"], [], ["loc", [null, [7, 39], [7, 63]]]]], ["attribute", "onclick", ["subexpr", "action", ["showBlank"], [], ["loc", [null, [8, 39], [8, 61]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/layouts/alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/layouts/alert.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "dialog-close");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dialog-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-body");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-footer");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn__accept");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("OK");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [5, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[4] = dom.createElementMorph(element4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog ", ["get", "className", ["loc", [null, [1, 34], [1, 43]]]], " ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 51], [1, 60]]]], "substrate"], [], ["loc", [null, [1, 46], [1, 74]]]]]]], ["element", "action", ["accept"], [], ["loc", [null, [5, 49], [5, 68]]]], ["content", "title", ["loc", [null, [6, 32], [6, 41]]]], ["content", "yield", ["loc", [null, [9, 29], [9, 38]]]], ["element", "action", ["accept"], [], ["loc", [null, [12, 52], [12, 71]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/layouts/blank", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/layouts/blank.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog ", ["get", "className", ["loc", [null, [1, 34], [1, 43]]]], " ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 51], [1, 60]]]], "substrate"], [], ["loc", [null, [1, 46], [1, 74]]]]]]], ["content", "yield", ["loc", [null, [3, 4], [3, 13]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/layouts/confirm", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/layouts/confirm.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-header");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "dialog-close");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "dialog-title");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-body");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "dialog-footer");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn__accept");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("Yes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "class", "btn btn__decline");
        dom.setAttribute(el4, "type", "button");
        var el5 = dom.createTextNode("No");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element1, [5]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element3);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[4] = dom.createElementMorph(element5);
        morphs[5] = dom.createElementMorph(element6);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog ", ["get", "className", ["loc", [null, [1, 34], [1, 43]]]], " ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 51], [1, 60]]]], "substrate"], [], ["loc", [null, [1, 46], [1, 74]]]]]]], ["element", "action", ["decline"], [], ["loc", [null, [5, 49], [5, 69]]]], ["content", "title", ["loc", [null, [6, 32], [6, 43]]]], ["content", "yield", ["loc", [null, [9, 29], [9, 38]]]], ["element", "action", ["accept"], [], ["loc", [null, [12, 52], [12, 71]]]], ["element", "action", ["decline"], [], ["loc", [null, [13, 53], [13, 73]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/partials/left-nav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 21
            },
            "end": {
              "line": 1,
              "column": 100
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.getting_started"], [], ["loc", [null, [1, 66], [1, 100]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 3
            },
            "end": {
              "line": 3,
              "column": 68
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [3, 41], [3, 68]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 7,
              "column": 89
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.creating_first_dialog"], [], ["loc", [null, [7, 51], [7, 89]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 4
            },
            "end": {
              "line": 10,
              "column": 102
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.presenter_and_manager"], [], ["loc", [null, [10, 64], [10, 102]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 96
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.customizing_dialog"], [], ["loc", [null, [13, 61], [13, 96]]]]],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 4
            },
            "end": {
              "line": 16,
              "column": 110
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.creating_dialog_templates"], [], ["loc", [null, [16, 68], [16, 110]]]]],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 4
            },
            "end": {
              "line": 19,
              "column": 92
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.listening_events"], [], ["loc", [null, [19, 59], [19, 92]]]]],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 22
            },
            "end": {
              "line": 21,
              "column": 112
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.interrupt_closing"], [], ["loc", [null, [21, 78], [21, 112]]]]],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 3
            },
            "end": {
              "line": 25,
              "column": 78
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [25, 51], [25, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 28,
              "column": 22
            },
            "end": {
              "line": 28,
              "column": 96
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.animation"], [], ["loc", [null, [28, 70], [28, 96]]]]],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 22
            },
            "end": {
              "line": 30,
              "column": 120
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.showing_server_errors"], [], ["loc", [null, [30, 82], [30, 120]]]]],
        locals: [],
        templates: []
      };
    })();
    var child11 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 31,
              "column": 22
            },
            "end": {
              "line": 31,
              "column": 110
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.creating_notices"], [], ["loc", [null, [31, 77], [31, 110]]]]],
        locals: [],
        templates: []
      };
    })();
    var child12 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 22
            },
            "end": {
              "line": 32,
              "column": 114
            }
          },
          "moduleName": "dummy/templates/partials/left-nav.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.working_with_forms"], [], ["loc", [null, [32, 79], [32, 114]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/partials/left-nav.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "__w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ol");
        dom.setAttribute(el1, "class", "w-ol");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ol");
        dom.setAttribute(el1, "class", "w-ol");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "w-ol_li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        dom.setAttribute(el1, "class", "__w-last");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "/ember-dialog/docs");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [4]);
        var element1 = dom.childAt(fragment, [8]);
        var morphs = new Array(14);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [9]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [11]), 0, 0);
        morphs[8] = dom.createMorphAt(dom.childAt(fragment, [6]), 0, 0);
        morphs[9] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[10] = dom.createMorphAt(dom.childAt(element1, [4]), 0, 0);
        morphs[11] = dom.createMorphAt(dom.childAt(element1, [6]), 0, 0);
        morphs[12] = dom.createMorphAt(dom.childAt(element1, [8]), 0, 0);
        morphs[13] = dom.createMorphAt(dom.childAt(fragment, [10, 0]), 0, 0);
        return morphs;
      },
      statements: [["block", "link-to", ["getting-started"], ["class", "w-link"], 0, null, ["loc", [null, [1, 21], [1, 112]]]], ["block", "link-to", ["tutorial"], ["class", "w-link"], 1, null, ["loc", [null, [3, 3], [3, 80]]]], ["block", "link-to", ["tutorial.creating"], ["class", "w-link"], 2, null, ["loc", [null, [7, 4], [7, 101]]]], ["block", "link-to", ["tutorial.presenter-and-manager"], ["class", "w-link"], 3, null, ["loc", [null, [10, 4], [10, 114]]]], ["block", "link-to", ["tutorial.customizing-dialog"], ["class", "w-link"], 4, null, ["loc", [null, [13, 4], [13, 108]]]], ["block", "link-to", ["tutorial.creating-dialog-templates"], ["class", "w-link"], 5, null, ["loc", [null, [16, 4], [16, 122]]]], ["block", "link-to", ["tutorial.listening-events"], ["class", "w-link"], 6, null, ["loc", [null, [19, 4], [19, 104]]]], ["block", "link-to", ["tutorial.interrupt-closing"], ["class", "w-link"], 7, null, ["loc", [null, [21, 22], [21, 124]]]], ["block", "link-to", ["cookbook.animation"], ["class", "w-link"], 8, null, ["loc", [null, [25, 3], [25, 90]]]], ["block", "link-to", ["cookbook.animation"], ["class", "w-link"], 9, null, ["loc", [null, [28, 22], [28, 108]]]], ["block", "link-to", ["cookbook.showing-server-errors"], ["class", "w-link"], 10, null, ["loc", [null, [30, 22], [30, 132]]]], ["block", "link-to", ["cookbook.creating-notices"], ["class", "w-link"], 11, null, ["loc", [null, [31, 22], [31, 122]]]], ["block", "link-to", ["cookbook.working-with-forms"], ["class", "w-link"], 12, null, ["loc", [null, [32, 22], [32, 126]]]], ["inline", "t", ["navigation.docs"], [], ["loc", [null, [35, 64], [35, 87]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12]
    };
  })());
});
define("dummy/templates/partials/sidebar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 12
            },
            "end": {
              "line": 16,
              "column": 12
            }
          },
          "moduleName": "dummy/templates/partials/sidebar.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createTextNode("\n                ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "class", "w-dropdown_link");
          var el3 = dom.createTextNode("\n                  ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createElementMorph(element1);
          morphs[2] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["w-dropdown_item ", ["get", "page.dropdownItemClassName", ["loc", [null, [11, 43], [11, 69]]]]]]], ["element", "action", ["setLanguageCode", ["get", "lang.code", ["loc", [null, [12, 70], [12, 79]]]]], [], ["loc", [null, [12, 43], [12, 81]]]], ["inline", "t", [["subexpr", "concat", ["language.", ["get", "lang.code", ["loc", [null, [13, 42], [13, 51]]]]], [], ["loc", [null, [13, 22], [13, 52]]]]], [], ["loc", [null, [13, 18], [13, 54]]]]],
        locals: ["lang"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 73
            },
            "end": {
              "line": 24,
              "column": 200
            }
          },
          "moduleName": "dummy/templates/partials/sidebar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.getting_started"], [], ["loc", [null, [24, 166], [24, 200]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 73
            },
            "end": {
              "line": 25,
              "column": 186
            }
          },
          "moduleName": "dummy/templates/partials/sidebar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.tutorial"], [], ["loc", [null, [25, 159], [25, 186]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 26,
              "column": 73
            },
            "end": {
              "line": 26,
              "column": 186
            }
          },
          "moduleName": "dummy/templates/partials/sidebar.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["navigation.cookbook"], [], ["loc", [null, [26, 159], [26, 186]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 32,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/partials/sidebar.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "w-sidebar");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "w-sidebar_container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "w-sidebar_top");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "w-sidebar_item");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "w-flag");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "w-dropdown_list");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "w-sidebar_bottom");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "w-sidebar_item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "w-sidebar_item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "w-sidebar_item");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "w-sidebar_item");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "docs");
        dom.setAttribute(el5, "class", "w-app-nav_link w-link");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [1, 1, 1]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element2, [3]);
        var element7 = dom.childAt(element6, [1]);
        var element8 = dom.childAt(element6, [3]);
        var element9 = dom.childAt(element6, [5]);
        var morphs = new Array(13);
        morphs[0] = dom.createAttrMorph(element3, 'class');
        morphs[1] = dom.createAttrMorph(element4, 'data-country-code');
        morphs[2] = dom.createAttrMorph(element5, 'class');
        morphs[3] = dom.createElementMorph(element5);
        morphs[4] = dom.createMorphAt(element5, 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [5]), 1, 1);
        morphs[6] = dom.createElementMorph(element7);
        morphs[7] = dom.createMorphAt(element7, 0, 0);
        morphs[8] = dom.createElementMorph(element8);
        morphs[9] = dom.createMorphAt(element8, 0, 0);
        morphs[10] = dom.createElementMorph(element9);
        morphs[11] = dom.createMorphAt(element9, 0, 0);
        morphs[12] = dom.createMorphAt(dom.childAt(element6, [7, 0]), 0, 0);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["w-dropdown ", ["subexpr", "if", [["get", "isOpened", ["loc", [null, [6, 36], [6, 44]]]], "__w-state-opened"], [], ["loc", [null, [6, 31], [6, 65]]]]]]], ["attribute", "data-country-code", ["concat", [["get", "locale.language.code", ["loc", [null, [7, 52], [7, 72]]]]]]], ["attribute", "class", ["concat", ["w-link__inverse w-link__inverse-pseudo w-link ", ["subexpr", "if", [["get", "isOpened", ["loc", [null, [8, 99], [8, 107]]]], "__w-state-selected"], [], ["loc", [null, [8, 94], [8, 130]]]], " ", ["subexpr", "if", [["get", "isOpened", ["loc", [null, [8, 136], [8, 144]]]], "__w-state-clickable"], [], ["loc", [null, [8, 131], [8, 168]]]]]]], ["element", "action", ["toggleLanguage"], [], ["loc", [null, [8, 13], [8, 40]]]], ["inline", "t", [["subexpr", "concat", ["language.", ["get", "locale.language.code", ["loc", [null, [8, 194], [8, 214]]]]], [], ["loc", [null, [8, 174], [8, 215]]]]], [], ["loc", [null, [8, 170], [8, 217]]]], ["block", "each", [["get", "locale.languages", ["loc", [null, [10, 20], [10, 36]]]]], [], 0, null, ["loc", [null, [10, 12], [16, 21]]]], ["element", "action", ["toggleSidebar"], ["target", ["get", "view", ["loc", [null, [24, 66], [24, 70]]]]], ["loc", [null, [24, 34], [24, 72]]]], ["block", "link-to", ["getting-started"], ["activeClass", "__w-state-selected", "class", "w-app-nav_link w-link"], 1, null, ["loc", [null, [24, 73], [24, 212]]]], ["element", "action", ["toggleSidebar"], ["target", ["get", "view", ["loc", [null, [25, 66], [25, 70]]]]], ["loc", [null, [25, 34], [25, 72]]]], ["block", "link-to", ["tutorial"], ["activeClass", "__w-state-selected", "class", "w-app-nav_link w-link"], 2, null, ["loc", [null, [25, 73], [25, 198]]]], ["element", "action", ["toggleSidebar"], ["target", ["get", "view", ["loc", [null, [26, 66], [26, 70]]]]], ["loc", [null, [26, 34], [26, 72]]]], ["block", "link-to", ["cookbook"], ["activeClass", "__w-state-selected", "class", "w-app-nav_link w-link"], 3, null, ["loc", [null, [26, 73], [26, 198]]]], ["inline", "t", ["navigation.docs"], [], ["loc", [null, [27, 79], [27, 102]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/test-message", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/test-message.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Typos, missing words, code samples with errors are all considered documentation bugs. If you spot one of them, or want to otherwise improve the existing guides, we are happy to help you help us!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Some of the more common ways to report a problem with the guides are:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Using the pencil icon on the top-right of each guide page");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Opening an issue/pull request to the GitHub repository");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Clicking the pencil icon will bring you to GitHub's editor for that guide so you can edit right away, using the Markdown markup language. This is the fastest way to correct a typo, a missing word, or an error in a code sample.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("To close the window click ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("here");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8, 1]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'onclick');
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["decline"], [], ["loc", [null, [13, 70], [13, 90]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/advanced-creating-dialog/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/advanced-creating-dialog/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.advanced_creating_dialog"], [], ["loc", [null, [1, 30], [1, 71]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/advanced-creating-dialog/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/advanced-creating-dialog/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.advanced_creating_dialog"], [], ["loc", [null, [1, 30], [1, 71]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/advanced-creating-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/advanced-creating-dialog.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/advanced-creating-dialog/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 64], [1, 83]]]]], [], ["loc", [null, [1, 10], [1, 84]]]]], [], ["loc", [null, [1, 0], [1, 86]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/creating/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Alert dialog window creation");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("All the controllers acquire the 'dialog' property after ember-dialog installation, this property is a link for the dialog window service where all the dialog wondows are created.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("To create your first dialog let us create a route, a controller and a template. To do that go the the root of your project and run the commands:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/generate-things.bash");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Ember will create the route, the controller and the template for you. Now open the created controller (it should be here: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("app/controllers/example.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(") and edit it.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-1.javascript");
        dom.setAttribute(el1, "data-line", "4-7");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("When opening url ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("http://127.0.0.1:4200/example");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" a default alert window with text \"Hello, Vladimir Milkov\" should pop up. JS code execution stops until the window is closed. It looks like this (You know ;))");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: center; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/default-alert.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("To create an ember-dialog window you should change the code like this:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-2.javascript");
        dom.setAttribute(el1, "data-line", "7");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("You will see:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: center; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/dialog-alert.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately the English version isn't finished yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo\n");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [26]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.creating_first_dialog"], [], ["loc", [null, [1, 30], [1, 68]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [28, 2], [28, 35]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/creating/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 70,
              "column": 156
            },
            "end": {
              "line": 70,
              "column": 230
            }
          },
          "moduleName": "dummy/templates/tutorial/creating/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("отдельная история");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 76,
              "column": 187
            },
            "end": {
              "line": 76,
              "column": 262
            }
          },
          "moduleName": "dummy/templates/tutorial/creating/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.interrupt_closing"], [], ["loc", [null, [76, 228], [76, 262]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 77,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createTextNode("Первое диалоговое окно");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Создание alert-диалогового окна");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Во всех контроллерах после установки ember-dialog появляется свойство `dialog`, которое является ссылкой на сервис диалоговых окон - через который создаются все диалоговые окна.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Чтобы создать наше первое диалоговое окно давайте создадим контроллер, роут и шаблон. Для этого перейдите в корень вашего проекта и запустите команды:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/generate-things.bash");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Ember создаст для вас роут, шаблон и контроллер. Давайте теперь откроем созданный нами контроллер (он должен находиться здесь: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("app/controllers/example.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(") и внесем в него следующие изменения:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-1.javascript");
        dom.setAttribute(el1, "data-line", "4-7");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("При заходе на url ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("http://127.0.0.1:4200/example");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" вы увидите дефолтное alert окно с текстом \"Hello, Vladimir Milkov\". Выполнение js кода было приостановлено до тех пор пока окно не будет закрыто. Выглядит окно так (ну вы и сами знаете ;)):");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: center; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/default-alert.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Чтобы создать ember-dialog модальное окно нужно изменить код следующим образом:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-2.javascript");
        dom.setAttribute(el1, "data-line", "7");
        dom.setAttribute(el1, "class", "line-numbers");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Вы увидите следующее:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: center; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/dialog-alert.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Попробуйте сами: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("показать простой alert");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "class", "w-link w-link__pseudo");
        var el3 = dom.createTextNode("показать диалоговое окно с лейаутом alert");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Создание confirm диалогового окна");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Ключевым типом диалоговых окон в большинстве проектов является confirm (с двумя кнопками). Такие окна также могут быть созданы из контроллера. Любой метод создающий окно диалогового менеджера возвращает ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("Promise");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" объект, который становится выполненым при закрытии окна. В случае с alert промис на закрытие всего резолвится, но в случае confirm, промис может и зарежектиться. Давайте ближе к коду:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-3.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Жми сюда");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" чтобы посмотреть результат отработки примера выше.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Использование шаблонов");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Тело диалогового окна может быть передано прямо при создании, следующим образом:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-5.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Но в крупных приложениях сообщения типа alert или confirm в разных местах программы одни и те же, и чтобы не плодить дубликаты можно текст сообщения вынести в отдельный шаблон и указывать вместо него путь.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("К примеру пример выше можно переделать следующим образом. Создать шаблон `app/templates/messages/alert-error.hbs` и использовать его для показа в диалоговом окне в различных местах программы.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-4.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Хорошей практикой для своих проектов я выбрал использование специальной директории для шаблонов-сообщений: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("/messages/");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Рекомендую вам поступить так же.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Прокидывание данных в диалоговое окно");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Любой метод для создания диалогового окна принимает 3 аргумента: шаблон, контекст, опции (исключанием является лишь метод ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("show");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", который принимает также layout).");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Шаблон");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" — путь до шаблона или предкомпилированный шаблон, который нужно вывести в теле диалогового окна.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Контекст");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" — объект с данными, он записывается в специальное свойство объекта диалогового окна - contextObject и может быть использован для показа данных в шаблоне.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Опции");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" — хеш влияющий на поведение диалогового окна, им оно расширяется. Ключи этого хеша неспосредственно доступны в шаблоне.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Из следующего примера должно стать ясно, что к чему ;)");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-6.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Контроль закрытия");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Порой требуется контролировать закрытие модального окна программно. Наиболее частым случаем является диалоговое окно содержащее некую форму (про формы - ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("), при закрытии окна нужно создавать определенную сущность по данным формы. Но данные могут быть не валидными и в таком случае закрывать окно не нужно. Как предотвратить закрытие окна? Ранее при создании окна мы получали Promise по закрытию которого могли производить те или иные действия, т.е. постфактум. Итак для того чтобы запретить закрытие диалогового окна мы должны переопределить интересующий нас action у context отвечающий за его закрытие: accept и decline. Первым аргументом в action приходит presenter (инстанс компонента диалогового окна), у которого определены одноименные методы. Вот пример из которого все должно стать ясно.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating/controller-7.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Проверьте сами");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Но что делать если в контроллере используются несколько диалоговых окон? Нужно задать имя обработчка закрытия для каждого диалогового окна, как это сделать можете почитать на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [26]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var element3 = dom.childAt(fragment, [34, 0]);
        var element4 = dom.childAt(fragment, [70, 0]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element1, 'onclick');
        morphs[1] = dom.createAttrMorph(element2, 'onclick');
        morphs[2] = dom.createAttrMorph(element3, 'onclick');
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [66]), 1, 1);
        morphs[4] = dom.createAttrMorph(element4, 'onclick');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [72]), 1, 1);
        return morphs;
      },
      statements: [["attribute", "onclick", ["subexpr", "action", ["simpleAlert"], [], ["loc", [null, [27, 61], [27, 85]]]]], ["attribute", "onclick", ["subexpr", "action", ["dialogAlert"], [], ["loc", [null, [27, 155], [27, 179]]]]], ["attribute", "onclick", ["subexpr", "action", ["confirmDeletion"], [], ["loc", [null, [35, 33], [35, 61]]]]], ["block", "link-to", ["cookbook.working-with-forms"], ["class", "w-link"], 0, null, ["loc", [null, [70, 156], [70, 242]]]], ["attribute", "onclick", ["subexpr", "action", ["showDialog"], [], ["loc", [null, [74, 33], [74, 56]]]]], ["block", "link-to", ["tutorial.interrupt-closing"], [], 1, null, ["loc", [null, [76, 187], [76, 274]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("dummy/templates/tutorial/creating-dialog-templates/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.creating_dialog_templates"], [], ["loc", [null, [1, 30], [1, 72]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/creating-dialog-templates/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 70
            },
            "end": {
              "line": 13,
              "column": 162
            }
          },
          "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.customizing_dialog"], [], ["loc", [null, [13, 127], [13, 162]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 189
            },
            "end": {
              "line": 32,
              "column": 266
            }
          },
          "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.working_with_forms"], [], ["loc", [null, [32, 231], [32, 266]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 43,
              "column": 181
            },
            "end": {
              "line": 43,
              "column": 269
            }
          },
          "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.creating_notices"], [], ["loc", [null, [43, 236], [43, 269]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 285
            },
            "end": {
              "line": 46,
              "column": 359
            }
          },
          "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Dialog Manager");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 134
            },
            "end": {
              "line": 79,
              "column": 226
            }
          },
          "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.working_with_forms"], [], ["loc", [null, [79, 191], [79, 226]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 80,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        dom.setAttribute(el1, "type", "text/css");
        var el2 = dom.createTextNode("\n.scheme-image {\n  max-width: 100%\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Для создания диалогового окна требуется 2 вида шаблонов: layout и template. Layout отвечает за внешний вид окна, именно в нем содержатся элементы управления (имеет на борту нужные кнопки). Также определяет тип диалогового окна. Template это само тело окна, в нем также могут определяться элементы управления, поскольку окружение у layout и template одно и то же.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Зачем же нужно такое разделение? У проекта могут быть типовые диалоговые окна: для информирования пользователя о чем-то, показа ошибок, предупреждений, для подтверждения каких-то действия, различные нотисы (в углу страницы), диалоговые окна с формами и т.д. И чтобы избежать дублирования кода (который отвечает за тип окна) нужно использовать layouts.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("О том как стилизовать диалоговые окна вы можете узнать на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Схематично диалоговое окно можно представить следующим образом:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/layout-and-template.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Layout");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Лейаут отвечает за внешний вид окна (то как оно показывается, где показывается), набор UI элементов. Ember dialog имеет на борту 3-и layouts:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Alert layout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Имеет на борту всего одну кнопку (ok) и крестик закрытия - при закрытии Promise резолвится. Может быть использовано для показа пользователю каких-то сообщений.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/alert.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Confirm layout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Имеет на борту две кнопки (yes, no) и крестик закрытия - при закрытии через крестик или по кнопке no - Promise становится rejected, при закрытии через кнопку yes - становится resolved. Может быть использовано для подтверждения пользователем какого-то действия.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/confirm.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Blank layout");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Совершенно пустое модальное окно. Может быть использовано для показа форм, у которых action accept вызывается на submit формы. Подробнее об этом читайте на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Элементы зыкрытия в таком случае должны находиться в теле модального окна");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/blank.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Создание собственного layout");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("По аналогии с приведенными выше layouts вы можете создать свои собственные.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Например layout модального окна со значком info.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/information.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Или более сложные варианты, например layout notice диалогового окна. Ниже схематично представление его layout. Как такой вид диалоговых окон сделать вы можете узнать на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/notice.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Итак как создавать layouts и их использовать. Layout - это простой шаблон, как вы понимаете, он должен находиться в директории ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("app/templates");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Для того чтобы показать диалоговое окно с созданным layout путь до него нужно указать первым аргументом при вызове метода show ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Например давайте создадим новый вид диалогового окна, которое будет выводиться в левом верхнем углу страницы, с красным background, назовем его ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("red-corner-dialog");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Для этого в директории шаблонов создадим файл ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("red-corner-dialog.hbs");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Файл app/templates/red-corner-dialog.hbs");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating-dialog-templates/template-1.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating-dialog-templates/styles-1.scss");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("В контроллере показ (создание) диалогового окна тогда будет выглядеть так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating-dialog-templates/controller-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Запустить пример");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Или вы можете упрятать этот лейаут в специальный метод, отнаследовав Dialog Manager.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Файл app/services/dialog.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating-dialog-templates/example-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("И тогда в контроллере вы сможете делать так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/creating-dialog-templates/controller-2.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Схемотично это диалоговое окно выглядит так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "text-align: left; overflow: hidden;");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2, "src", "assets/schemes/red-corner-dialog.svg");
        dom.setAttribute(el2, "class", "scheme-image");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Template");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Это тело диалогового окна, у него такой же скоуп как и у layout. В нем также как и в layout могут быть элементы управления диалоговым окном (т.е. быть произведен вызов ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("accept");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" и ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("decline");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" actions). Если при создании окна был указан context, он будет также как и в layout доступен в специальной переменной ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("contextObject");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Благодаря ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("contextObject");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" возможно связывать данные с шаблоном, а также вызывать различные ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("actions");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" context.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Template, как правило используется для показа простого текста, но позволяет выводить более сложные структуры, такие как формы (см. ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(").");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [58, 0]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [8]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [28]), 2, 2);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [40]), 1, 1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [44]), 3, 3);
        morphs[5] = dom.createAttrMorph(element0, 'onclick');
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [78]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.creating_dialog_templates"], [], ["loc", [null, [7, 30], [7, 72]]]], ["block", "link-to", ["tutorial.customizing-dialog"], ["class", "w-link"], 0, null, ["loc", [null, [13, 70], [13, 174]]]], ["block", "link-to", ["cookbook.working-with-forms"], [], 1, null, ["loc", [null, [32, 189], [32, 278]]]], ["block", "link-to", ["cookbook.creating-notices"], ["class", "w-link"], 2, null, ["loc", [null, [43, 181], [43, 281]]]], ["block", "link-to", ["tutorial.presenter-and-manager"], ["class", "w-link"], 3, null, ["loc", [null, [46, 285], [46, 371]]]], ["attribute", "onclick", ["subexpr", "action", ["showDialog"], [], ["loc", [null, [59, 33], [59, 56]]]]], ["block", "link-to", ["cookbook.working-with-forms"], ["class", "w-link"], 4, null, ["loc", [null, [79, 134], [79, 238]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("dummy/templates/tutorial/creating-dialog-templates/partials/template-1", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating-dialog-templates/partials/template-1.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dialog-content");
        dom.setAttribute(el2, "tabindex", "-1");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "class", "w-link");
        var el5 = dom.createTextNode("Close");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [3, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[2] = dom.createAttrMorph(element2, 'onclick');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["ember-dialog-dialog red-corner-dialog ", ["subexpr", "if", [["get", "substrate", ["loc", [null, [1, 55], [1, 64]]]], "substrate"], [], ["loc", [null, [1, 50], [1, 78]]]]]]], ["content", "yield", ["loc", [null, [3, 9], [3, 18]]]], ["attribute", "onclick", ["subexpr", "action", ["accept"], [], ["loc", [null, [4, 35], [4, 54]]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/creating-dialog-templates", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating-dialog-templates.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/creating-dialog-templates/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 65], [1, 84]]]]], [], ["loc", [null, [1, 10], [1, 85]]]]], [], ["loc", [null, [1, 0], [1, 87]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/creating", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/creating.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/creating/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 48], [1, 67]]]]], [], ["loc", [null, [1, 10], [1, 68]]]]], [], ["loc", [null, [1, 0], [1, 70]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/customizing-dialog/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/customizing-dialog/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.customizing_dialog"], [], ["loc", [null, [1, 30], [1, 65]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/customizing-dialog/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 284
            },
            "end": {
              "line": 29,
              "column": 367
            }
          },
          "moduleName": "dummy/templates/tutorial/customizing-dialog/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.presenter_and_manager"], [], ["loc", [null, [29, 329], [29, 367]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 438
            },
            "end": {
              "line": 29,
              "column": 497
            }
          },
          "moduleName": "dummy/templates/tutorial/customizing-dialog/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.animation"], [], ["loc", [null, [29, 471], [29, 497]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 42
            },
            "end": {
              "line": 33,
              "column": 95
            }
          },
          "moduleName": "dummy/templates/tutorial/customizing-dialog/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("сюда");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/customizing-dialog/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Стили написаны на языке ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "http://sass-lang.com/");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("sass");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", что позволяет подключить их в ваш проект.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Проект содержит 2 файла со стилями. Первый файл содержит каркас диалоговых окон - т.е. обеспечивает их показ в нужном размере и нужном месте. Второй файл содержит стили влияющие на внешний вид. Вы можете подключить в ваш проект любой из этих файлов независимо.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Как подключить стили в проект");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Для подключения всех стилей ember-dialog пропишите в вашем ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("app/styles/app.scss");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(":");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("code");
        dom.setAttribute(el1, "class", "language-scss");
        var el2 = dom.createTextNode("@import \"node_modules/ember-dialog/addon/styles/ember-dialog\";");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Чтобы не указывать весь путь до стилей, вы можете добавить этот путь в конфиг sass. Для этого поправьте ваш ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("ember-cli-build.js");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(":");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/customizing-dialog/ember-cli-build.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("После этого вы сможете подлючать стили так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/customizing-dialog/including.scss");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Также вы можете подключить к проекту только структуру:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/customizing-dialog/structure-including.scss");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Как сделать анимацию");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Основной класс диалоговых окон ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("ember-dialog-dialog");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", вы можете добавлять к нему различные css анимации. Если вы хотите хотите применить анимацию на конкретное окно - вы можете создать новый css класс и указать его в ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("options.className");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" при его создании (см. ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("). Подробное описание создания анимации смотрите в разделе ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Как создать новый лейаут");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Описание этого раздела было перенесено ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [27]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(element0, 5, 5);
        morphs[2] = dom.createMorphAt(element0, 7, 7);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [31]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.customizing_dialog"], [], ["loc", [null, [1, 30], [1, 65]]]], ["block", "link-to", ["tutorial.presenter-and-manager"], [], 0, null, ["loc", [null, [29, 284], [29, 379]]]], ["block", "link-to", ["cookbook.animation"], [], 1, null, ["loc", [null, [29, 438], [29, 509]]]], ["block", "link-to", ["tutorial.creating-dialog-templates"], [], 2, null, ["loc", [null, [33, 42], [33, 107]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("dummy/templates/tutorial/customizing-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/customizing-dialog.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/customizing-dialog/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 58], [1, 77]]]]], [], ["loc", [null, [1, 10], [1, 78]]]]], [], ["loc", [null, [1, 0], [1, 80]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/interrupt-closing/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/interrupt-closing/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.interrupt_closing"], [], ["loc", [null, [1, 30], [1, 64]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/interrupt-closing/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 229
            },
            "end": {
              "line": 11,
              "column": 306
            }
          },
          "moduleName": "dummy/templates/tutorial/interrupt-closing/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.working_with_forms"], [], ["loc", [null, [11, 271], [11, 306]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/interrupt-closing/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Прерывание закрытия бывает полезно если данные в диалоговом окне невалидны. Для прерывания закрытия окна нужно переопределить actions отвечающие за это - ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("accept");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" и ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("decline");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Это можно сделать так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/interrupt-closing/controller-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Попробуйте сами");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("В примере выше при создании диалога был передан контроллер как контекст, а также указаны имена его actions (acceptHandler и declineHandler), которые отвечают за закрытие, поэтому default actions компонента не отработали и окно не закрылось. В actions контролера первым аргументом приходит объект компонента presenter, у него есть 2-а метода предназначенные для его закрытия: accept и decline при вызове этих методов окно уничтожается, а у промис, который мы получили при создании, становится resolved и rejected соотвественно.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Частный случай в котором обойтись без прерывания закрытия не получится - показ формы в диалоговом окне, поскольку оно не может быть закрыто \"с успехом\" до тех пор пока форма не валидна. Подробнее об этом говорится на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [6, 0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'onclick');
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [10]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.interrupt_closing"], [], ["loc", [null, [1, 30], [1, 64]]]], ["attribute", "onclick", ["subexpr", "action", ["showDialog"], [], ["loc", [null, [7, 33], [7, 56]]]]], ["block", "link-to", ["cookbook.working-with-forms"], [], 0, null, ["loc", [null, [11, 229], [11, 318]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/tutorial/interrupt-closing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/interrupt-closing.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/interrupt-closing/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 57], [1, 76]]]]], [], ["loc", [null, [1, 10], [1, 77]]]]], [], ["loc", [null, [1, 0], [1, 79]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/listening-events/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/listening-events/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.listening_events"], [], ["loc", [null, [1, 30], [1, 63]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/listening-events/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 22,
              "column": 126
            },
            "end": {
              "line": 22,
              "column": 199
            }
          },
          "moduleName": "dummy/templates/tutorial/listening-events/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["cookbook.creating_notices"], [], ["loc", [null, [22, 166], [22, 199]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/listening-events/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("События Dialog Manager:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "w-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Имя");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Комментарий");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("created (");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "docs/module-ember-dialog_components_presenter.html");
        dom.setAttribute(el4, "class", "w-link");
        var el5 = dom.createTextNode("Presenter");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(")");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Событие отстреливается после создания нового диалогового окна.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("destroyed (");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "docs/module-ember-dialog_components_presenter.html");
        dom.setAttribute(el4, "class", "w-link");
        var el5 = dom.createTextNode("Presenter");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(")");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Событие отстреливается после закрытия диалогового окна.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("События могут использоваться для управления диалоговым окном и его поведением из вне. К примеру при потере соединения с сервером по WebSocket используя события можно показать пользователю соотвествующее сообщение и убрать его после того как соединение было установлено.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Также на основе событий можно создать особенный тип диалогового окна - notices, которые исчезают через какое-то время (см. ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(").");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/listening-events/controller-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("События Presenter:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "w-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Имя");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Комментарий");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("accepted (");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "docs/module-ember-dialog_components_presenter.html");
        dom.setAttribute(el4, "class", "w-link");
        var el5 = dom.createTextNode("Presenter");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(")");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Событие отстреливается после accepted-закрытия окна.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("declined (");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "docs/module-ember-dialog_components_presenter.html");
        dom.setAttribute(el4, "class", "w-link");
        var el5 = dom.createTextNode("Presenter");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(")");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Событие отстреливается после declined-закрытия окна.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [8]), 1, 1);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.listening_events"], [], ["loc", [null, [1, 30], [1, 63]]]], ["block", "link-to", ["cookbook.creating-notices"], [], 0, null, ["loc", [null, [22, 126], [22, 211]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("dummy/templates/tutorial/listening-events", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/listening-events.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/listening-events/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 56], [1, 75]]]]], [], ["loc", [null, [1, 10], [1, 76]]]]], [], ["loc", [null, [1, 0], [1, 78]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/presenter-and-manager/partials/en", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/en.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\nTBD: Unfortunately there is no English version yet. Please see the ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "class", "w-link w-link__pseudo");
        var el2 = dom.createTextNode("Russian version");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(", you may find useful examples there...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.presenter_and_manager"], [], ["loc", [null, [1, 30], [1, 68]]]], ["element", "action", ["setLanguageCode", "ru"], [], ["loc", [null, [3, 100], [3, 133]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/presenter-and-manager/partials/partial-1", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/partial-1.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Несложно заметить, что любой фрагмент страницы, находящийся в отдельном шаблоне может быть показан в модальном окне. Секунды тикают: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(".\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["inline", "if", [["get", "contextObject", ["loc", [null, [1, 138], [1, 151]]]], ["get", "contextObject.seconds", ["loc", [null, [1, 152], [1, 173]]]], ["get", "seconds", ["loc", [null, [1, 174], [1, 181]]]]], [], ["loc", [null, [1, 133], [1, 183]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial/presenter-and-manager/partials/ru", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 246
            },
            "end": {
              "line": 3,
              "column": 299
            }
          },
          "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("создание первого окна");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 95,
              "column": 117
            },
            "end": {
              "line": 95,
              "column": 208
            }
          },
          "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.creating_dialog_templates"], [], ["loc", [null, [95, 166], [95, 208]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 145,
              "column": 489
            },
            "end": {
              "line": 145,
              "column": 578
            }
          },
          "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.advanced_creating_dialog"], [], ["loc", [null, [145, 537], [145, 578]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.12",
          "loc": {
            "source": null,
            "start": {
              "line": 155,
              "column": 542
            },
            "end": {
              "line": 155,
              "column": 617
            }
          },
          "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/ru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["inline", "t", ["tutorial.interrupt_closing"], [], ["loc", [null, [155, 583], [155, 617]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 161,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/presenter-and-manager/partials/ru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1, "class", "w-title __w-first");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Addon ember-dialog состоит из 3х частей: из компонента (presenter), сервиса (dialog manager) и набора основных layouts. Модальные окна создаются через сервис (см. Dialog Manager). Примеры создания диалоговых окон можете посмотреть на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Dialog Manager");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Сервис через который создаются и удаляются модельные окна, является singleton. Он доступен изо всех контроллеров (имя свойства `dialog`) по-умолчанию и может быть injected в любой класс, находящийся в регистре приложения. Основным методом для создания окна является ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "docs/module-ember-dialog_services_dialog.html#-inner-show__anchor");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("show");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "w-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Аргумент");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Тип");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Комментарий");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("layout");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        dom.setAttribute(el3, "nowrap", "nowrap");
        var el4 = dom.createTextNode("String | Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Может быть передан как путь до шаблона или как предкомпилированный шаблон.");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("template");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        dom.setAttribute(el3, "nowrap", "nowrap");
        var el4 = dom.createTextNode("String | Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Может быть передан как путь до шаблона или как предкомпилированный шаблон.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Передача пути до шаблона: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("dialog.show(\"dialog/alert\", \"messages/error-message\");");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("В модельном окне будет показано содержимое шаблона, который находится тут: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("code");
        var el6 = dom.createTextNode("app/templates/messages/error-message");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(".");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-last");
        var el5 = dom.createTextNode("Передача предкомпилированного шаблона:\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("import hbs from 'htmlbars-inline-precompile';\ndialog.show(\"dialog/alert\", hbs`Hello world!`);");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("context *");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Объект, который кладется в специальное свойство компонента диалогового окна - ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("code");
        var el6 = dom.createTextNode("contextObject");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(". Любое свойство объекта или функцию можно получить из шаблона или лейаута.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-last");
        var el5 = dom.createTextNode("Пример: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("code");
        dom.setAttribute(el5, "data-language", "handlebar");
        var el6 = dom.createTextNode("{{contextObject.model.first_name}}");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("options *");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Объект с которым создается Presenter, влияет на поведение диалогового окна. Также поскольку свойства объекта кладутся в Presenter - они доступны из шаблона.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Пример если создать диалоговое окно так: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("dialog.show(\"dialog/alert\", \"message\", null, { username: \"Vladimir Milkov\" });");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("В шаблоне можно вывести username так: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("{{username}}");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-last");
        var el5 = dom.createTextNode("Так как по объекту создается Presenter можно изменить свойства модального окна (см. Presenter).");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("componentName=\"presenter\" *");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("String");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Имя компонента диалогового окна.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Рассмотрим пример вызова диалогового окна:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Controller");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/controller-1.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Layout");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/layout-1.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Template");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/template-1.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Запустить пример");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" (диалоговое окно появится справа внизу).");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "w-notification w-notification__success");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "w-notification_text");
        var el4 = dom.createTextNode("Обратите внимание, что вы можете перемещаться по сайту - окно будет оставаться на месте. Круто, не правда ли? :)");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Вместо пути до шаблона можно использовать hbs функцию, так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        var el2 = dom.createTextNode("Controller");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/controller-2.javascript");
        dom.setAttribute(el1, "data-line", "10");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Но я не рекомендую злоупотреблять таким подходом - он может использоваться в тестах. Лучше делать так:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/controller-3.javascript");
        dom.setAttribute(el1, "data-line", "2,10");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "style", "border: 1px solid #EEE; padding: 10px");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "__w-last");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "w-btn");
        var el3 = dom.createTextNode("Попробуйте сами");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("В ember-addon предусмотренно 3 базовых layouts: alert, confirm и blank. Ознакомиться с ними вы можете на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "w-table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Аргумент");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Тип");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("th");
        dom.setAttribute(el3, "class", "w-table_th");
        var el4 = dom.createTextNode("Комментарий");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("template");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        dom.setAttribute(el3, "nowrap", "nowrap");
        var el4 = dom.createTextNode("String | Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Может быть передан как путь до шаблона или как предкомпилированный шаблон.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Передача пути до шаблона: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("dialog.show(\"dialog/alert\", \"messages/error-message\");");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("В модельном окне будет показано содержимое шаблона, который находится тут: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("code");
        var el6 = dom.createTextNode("app/templates/messages/error-message");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(".");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-last");
        var el5 = dom.createTextNode("Передача предкомпилированного шаблона:\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("import hbs from 'htmlbars-inline-precompile';\ndialog.show(\"dialog/alert\", hbs`Hello world!`);");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("context *");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Объект, который кладется в специальное свойство компонента диалогового окна - ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("code");
        var el6 = dom.createTextNode("contextObject");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(". Любое свойство объекта или функцию можно получить из шаблона или лейаута.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-last");
        var el5 = dom.createTextNode("Пример: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("code");
        dom.setAttribute(el5, "data-language", "handlebar");
        var el6 = dom.createTextNode("{{contextObject.model.first_name}}");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("options *");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("Object");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Объект с которым создается Presenter, влияет на поведение диалогового окна. Также поскольку свойства объекта кладутся в Presenter - они доступны из шаблона.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("Пример если создать диалоговое окно так: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("dialog.show(\"dialog/alert\", \"message\", null, { username: \"Vladimir Milkov\" });");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("В шаблоне можно вывести username так: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("pre");
        dom.setAttribute(el5, "data-language", "javascipt");
        var el6 = dom.createTextNode("{{username}}");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-last");
        var el5 = dom.createTextNode("Так как по объекту создается Presenter можно изменить свойства модального окна (см. Presenter).");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tr");
        dom.setAttribute(el2, "class", "w-table_tr");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("componentName=\"presenter\" *");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("String");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("td");
        dom.setAttribute(el3, "class", "w-table_td");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        dom.setAttribute(el4, "class", "__w-first");
        var el5 = dom.createTextNode("Имя компонента диалогового окна.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "class", "w-subtitle");
        dom.setAttribute(el1, "name", "presenter");
        var el2 = dom.createTextNode("Presenter");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Компонент диалогового окна, создается с указанием layout и template. Его свойств могут быть получены из них и влиять на внешний вид диалогового окна. Аттрибуты компонента можно изменить или дополнить при создании, путем передачи в метод show аргумента options. Таким образом внешний вид диалогового окна может определяться при его создании, как в контроллере который запрашивает его создание, так и менеджером, который его создает. Более подробно об этом вы можете почитать на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("При создании диалогового окна может быть изменен `contextObject` компонента путем передачи в метод show аргумента context (см. выше). Поскольку на практике диалоговые окна создаются из actions контроллера (но не только), как правило контектом указывается сам контроллер.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Controller");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/controller-4.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Template: messages/foo");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/template-4.handlebars");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Какая же разница между context и options. Все что передается в ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("options");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \"мержится\" в компонент, а ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("context");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" записывается в конкретное свойство компонента. Также в ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("options");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" могут быть переданы специальные названия ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("actions");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(", будут выполняться при закрытии диалогового окна (");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("acceptHandler");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" и ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("declineHandler");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("), тем самым в этих ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("actions");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" можно реализовать логику по которой окно будет закрываться. Подробнее о прерывании закрытия вы можете почитать на странице ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(". Здесь приведу лишь пример из которого, я надеюсь станет ясно для чего это нужно и как работает:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("Controller");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("pre");
        dom.setAttribute(el1, "data-src", "examples/tutorial/presenter-and-manager/controller-5.javascript");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Узнать как работает перекрытие вы можете изучив метод ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "docs/module-ember-dialog_services_dialog.html#-inner-show__anchor");
        dom.setAttribute(el2, "class", "w-link");
        var el3 = dom.createTextNode("show у Dialog Manager");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [26, 0]);
        var element1 = dom.childAt(fragment, [42, 0]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        morphs[2] = dom.createAttrMorph(element0, 'onclick');
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [40, 1, 1]), 0, 0);
        morphs[4] = dom.createAttrMorph(element1, 'onclick');
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [44]), 1, 1);
        morphs[6] = dom.createMorphAt(dom.childAt(fragment, [50]), 1, 1);
        morphs[7] = dom.createMorphAt(dom.childAt(fragment, [62]), 15, 15);
        return morphs;
      },
      statements: [["inline", "t", ["tutorial.presenter_and_manager"], [], ["loc", [null, [1, 30], [1, 68]]]], ["block", "link-to", ["tutorial.creating"], [], 0, null, ["loc", [null, [3, 246], [3, 311]]]], ["attribute", "onclick", ["subexpr", "action", ["showGreeting"], [], ["loc", [null, [70, 33], [70, 58]]]]], ["inline", "partial", ["tutorial/presenter-and-manager/partials/partial-1"], [], ["loc", [null, [89, 24], [89, 87]]]], ["attribute", "onclick", ["subexpr", "action", ["showPartial1"], [], ["loc", [null, [93, 33], [93, 58]]]]], ["block", "link-to", ["tutorial.creating-dialog-templates"], [], 1, null, ["loc", [null, [95, 117], [95, 220]]]], ["block", "link-to", ["tutorial.advanced-creating-dialog"], [], 2, null, ["loc", [null, [145, 489], [145, 590]]]], ["block", "link-to", ["tutorial.interrupt-closing"], [], 3, null, ["loc", [null, [155, 542], [155, 629]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("dummy/templates/tutorial/presenter-and-manager", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial/presenter-and-manager.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", [["subexpr", "concat", ["tutorial/presenter-and-manager/partials/", ["get", "locale.languageCode", ["loc", [null, [1, 61], [1, 80]]]]], [], ["loc", [null, [1, 10], [1, 81]]]]], [], ["loc", [null, [1, 0], [1, 83]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/templates/tutorial", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.12",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/tutorial.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-4 left-nav");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-sm-8");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["inline", "partial", ["partials/left-nav"], [], ["loc", [null, [4, 6], [4, 37]]]], ["content", "outlet", ["loc", [null, [7, 6], [7, 16]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/utils/change-locale", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = function () {
    if (Prism) {
      _ember["default"].run.scheduleOnce("afterRender", Prism, function () {
        Prism.highlightAll();
        Prism.fileHighlight();
      });
    }
  };
});
/* global Prism */
define('dummy/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
define('dummy/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
define('dummy/utils/zindex', ['exports', 'ember-dialog/utils/zindex'], function (exports, _emberDialogUtilsZindex) {
  Object.defineProperty(exports, 'max', {
    enumerable: true,
    get: function get() {
      return _emberDialogUtilsZindex.max;
    }
  });
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-dialog","version":"3.0.0-rc.8+e483ac1d"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map